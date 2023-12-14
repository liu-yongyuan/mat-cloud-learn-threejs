import React, { useContext, useEffect, useMemo, useRef } from 'react';
import * as three from 'three';
//@ts-ignore
import WebGL from 'three/addons/capabilities/WebGL.js';
import ThreeManContext, { ThreeManConfig } from './three-context';
import ThreeHelperLeft from './three-helper-left/three-helper-left';

import './three.less';

const initThreeRenderer = (
  threeRenderContainerRef: React.RefObject<HTMLDivElement | null>,
  renderFrameBefore?: Function,
  renderFrameAfter?: Function
) => {
  let info = {
    flag: true,
    code: 200,
    msg: '',
  };

  let renderDOM = threeRenderContainerRef.current!;
  if (!WebGL.isWebGLAvailable()) {
    const warning = WebGL.getWebGLErrorMessage();
    renderDOM.innerHTML = '';
    renderDOM.appendChild(warning);

    // flag 变更
    info.flag = false;

    // webgl 消息
    info.code = 401;
    info.msg = 'WebGL is not available';

    return {
      info,
    };
  }

  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(75, renderDOM.clientWidth / renderDOM.clientHeight, 0.1, 1000);
  const render = new three.WebGLRenderer();
  render.setSize(renderDOM.clientWidth, renderDOM.clientHeight);
  renderDOM.innerHTML = '';
  renderDOM.appendChild(render.domElement);

  function animate() {
    // 帧动画递归,确保会一直渲染
    globalThis.requestAnimationFrame(animate);

    // 每帧渲染前
    renderFrameBefore?.();

    // WebGL 渲染器
    render.render(scene, camera);

    // 每帧渲染后
    renderFrameAfter?.();
  }
  // Initiate function or other initializations here
  animate();

  return {
    info,
    control: {
      scene,
      camera,
      render,
    },
  };
};

const ThreeExample: React.FC = () => {
  const threeRenderContainerRef = useRef<HTMLDivElement>(null);
  const threeManContext = useContext(ThreeManContext);
  useEffect(() => {
    // 页面渲染后会执行的函数
    const context = initThreeRenderer(threeRenderContainerRef);
    Object.assign(threeManContext, context);
    if (!context.info.flag) {
      console.error('初始化异常', context);
      return;
    }
    return () => {
      // 页面卸载时会执行的函数
    };
  }, []); // [] 表示监听的对象数组,对象数组内的值不发生变更, effect 中的函数不执行

  return (
    <div className="mat-three-container">
      <div ref={threeRenderContainerRef} className="mat-three-render"></div>
      <ThreeManContext.Provider value={threeManContext}>
        <ThreeHelperLeft />
      </ThreeManContext.Provider>
    </div>
  );
};

export default ThreeExample;
