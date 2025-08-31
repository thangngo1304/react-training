// Component
import {
  BuildIcon,
  CardIcon,
  ChartIcon,
  HomeIcon,
  PersonIcon,
  SignOutIcon,
} from '@/icons';

// Constants
import { ROUTES } from './router';

export const MENU_ITEM_LIST = [
  {
    id: 1,
    leftIcon: HomeIcon,
    menuItemContent: 'Dashboards',
    destination: ROUTES.DASHBOARD,
  },
  {
    id: 2,
    leftIcon: ChartIcon,
    menuItemContent: 'Tables',
    destination: ROUTES.HOME,
  },
  {
    id: 3,
    leftIcon: CardIcon,
    menuItemContent: 'Billing',
    destination: ROUTES.BILLING,
  },
  {
    id: 4,
    leftIcon: BuildIcon,
    menuItemContent: 'RTL',
    destination: ROUTES.RTL,
  },
];

export const ACCOUNT_LIST = [
  {
    id: 5,
    leftIcon: PersonIcon,
    menuItemContent: 'Profile',
    destination: ROUTES.PROFILE,
  },
  {
    id: 6,
    leftIcon: SignOutIcon,
    menuItemContent: 'Sign Out',
    destination: ROUTES.SIGN_OUT,
  },
];

export const OTHER_ITEM_LIST = [
  {
    id: 6,
    leftIcon: SignOutIcon,
    menuItemContent: 'Sign Out',
    destination: ROUTES.SIGN_OUT,
  },
];

export const SIDEBAR_LIST = [
  {
    id: 1,
    listItem: MENU_ITEM_LIST,
  },
  {
    id: 2,
    title: 'ACCOUNT PAGES',
    listItem: ACCOUNT_LIST,
  },
];
