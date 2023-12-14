import React from 'react';
import * as three from 'three';
/**
 * Three Helper 上下文
 */
export type ThreeManConfig = {
  info: {
    flag: true | false;
    code: 200 | number;
    msg: '' | string;
  };
  control: {
    scene: three.Scene | undefined | null;
    camera: three.Camera | undefined | null;
    render: three.Renderer | undefined | null;
  };
};

export const ThreeManContext = React.createContext<ThreeManConfig>({
  info: {
    flag: false,
    code: 0,
    msg: '未初始化',
  },
  control: {
    scene: null,
    camera: null,
    render: null,
  },
});

export default ThreeManContext;
