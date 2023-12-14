import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * 
example:===>
const items: MenuProps['items'] = [
  menuGetItem('Navigation One', 'sub1', <MailOutlined />, [
    menuGetItem('Item 1', 'g1', null, [menuGetItem('Option 1', '1'), menuGetItem('Option 2', '2')], 'group'),
    menuGetItem('Item 2', 'g2', null, [menuGetItem('Option 3', '3'), menuGetItem('Option 4', '4')], 'group'),
  ]),
  { type: 'divider' },
  menuGetItem('Group', 'grp', null, [menuGetItem('Option 13', '13'), menuGetItem('Option 14', '14')], 'group'),
];

 * @param label 显示名称, 支持节点类型,路由等类型
 * @param key 
 * @param icon 
 * @param children 
 * @param type 
 * @returns 
 */
function menuGetItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export default menuGetItem;
