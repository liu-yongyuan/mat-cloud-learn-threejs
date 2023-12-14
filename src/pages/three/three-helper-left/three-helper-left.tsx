import React, { useContext } from 'react';
import * as three from 'three';
import { Button, Menu, MenuProps, theme } from 'antd';
import ThreeManContext from '../three-context';
import menuGetItem from '@/utils/menu-get-item';

const addGeometry = (scene: three.Scene, camera: three.Camera) => {
  const geometry = new three.BoxGeometry(1, 1, 1);
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
};

const ThreeHelperLeft: React.FC = () => {
  const threeManContext = useContext(ThreeManContext);

  const handleAddGreenCube = () => {
    if (!threeManContext.info.flag) {
      console.log(threeManContext.info.flag, threeManContext);
      return;
    }
    // 创建几何体
    addGeometry(threeManContext.control.scene!, threeManContext.control.camera!);
  };
  const handleRemoveGreenCube = () => {};

  const handleeRotationGreenCube = () => {
    
  };

  const items: MenuProps['items'] = [
    menuGetItem('几何体', '几何体', null, [
      menuGetItem('绿色立方体', '绿色立方体', null, [
        menuGetItem(<Button onClick={handleAddGreenCube}>新增</Button>, '绿色立方体-新增'),
        menuGetItem(<Button onClick={handleeRotationGreenCube}>转动</Button>, '绿色立方体-转动'),
        menuGetItem(<Button onClick={handleRemoveGreenCube}>移除</Button>, '绿色立方体-移除'),
      ]),
    ]),
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="mat-three-helper-left">
      <Menu style={{ backgroundColor: colorBgContainer }} items={items} />
    </div>
  );
};

export default ThreeHelperLeft;
