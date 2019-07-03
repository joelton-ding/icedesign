// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'Home',
    path: '/news/index',
    icon: 'home',
  }
];

const asideMenuConfig = [
  {
    name: 'Manage News',
    path: '/news/index',
    icon: 'home2',
  },
  {
    name: '合同查询',
    path: '/news/search',
    icon: 'search',
  },
  {
    name: '我的合同',
    path: '/news/my',
    icon: 'person',
  },
];

export { headerMenuConfig, asideMenuConfig };
