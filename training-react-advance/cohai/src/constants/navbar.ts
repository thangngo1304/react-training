// Constants
import { ROUTES } from './router';

export const MENU_ITEM_LIST = [
  {
    id: 1,
    menuItemContent: 'Trang chủ',
    destination: ROUTES.HOME,
  },
  {
    id: 2,
    menuItemContent: 'Về chúng tôi',
    destination: ROUTES.ABOUT,
  },
  {
    id: 3,
    menuItemContent: 'Liên hệ',
    destination: ROUTES.CONTACT,
  },
];

export const SIDEBAR_LIST = [
  {
    id: 1,
    listItem: MENU_ITEM_LIST,
  },
];

export const NAV_ITEMS = [
  { name: 'Trang chủ', path: '/home' },
  { name: 'Về chúng tôi', path: '/about' },
  { name: 'Liên hệ', path: '/contact' },
];
