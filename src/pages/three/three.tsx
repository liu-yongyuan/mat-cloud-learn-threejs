import React, { useEffect, useRef } from 'react';
import * as three from 'three';

import './three.less';

const ThreeExample: React.FC = () => {
  const threeRenderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderDOM = threeRenderRef.current!;

    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(75, renderDOM.clientWidth / renderDOM.clientHeight, 0.1, 1000);
    const render = new three.WebGLRenderer();
    render.setSize(renderDOM.clientWidth, renderDOM.clientHeight);
    renderDOM.appendChild(render.domElement);

    const geometry = new three.BoxGeometry(1, 1, 1);
    const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new three.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      render.render(scene, camera);
    }
    animate();
  });
  return (
    <div className="mat-three-container">
      <div ref={threeRenderRef} className="mat-three-render"></div>
    </div>
  );
};

export default ThreeExample;
