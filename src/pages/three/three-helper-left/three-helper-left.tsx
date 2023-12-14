import React, { useContext } from 'react';
import * as three from 'three';
import { Button, Menu, MenuProps, theme } from 'antd';
import ThreeManContext from '../three-context';
import menuGetItem from '@/utils/menu-get-item';

const geometryArray: number[] = [];
const addGeometry = (scene: three.Scene, camera: three.Camera) => {
  const geometry = new three.BoxGeometry(1, 1, 1);
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);
  let length = geometryArray.length;
  cube.position.set(-5 + length, 1, 1);
  scene.add(cube);
  camera.position.z = 5;
  geometryArray.push(cube.id);
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
  const handleRemoveGreenCube = () => {
    if (geometryArray.length === 0) {
      return;
    }
    let object = threeManContext.control.scene?.getObjectById(geometryArray.pop()!);
    if (!object) {
      console.error('id 找不到');
      return;
    }
    threeManContext.control.scene?.remove(object);
  };

  const handleeRotationGreenCube = () => {};

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
