// Components
import { HomeIcon, ChartIcon, CardIcon, BuildIcon } from '@/icons';

// Constants
import { ROUTES } from '@/constants';

export const SIDEBAR_LIST_MOCK = [
  {
    id: 1,
    leftIcon: HomeIcon,
    menuItemContent: 'Dashboards',
    destination: '/',
  },
  {
    id: 2,
    leftIcon: ChartIcon,
    menuItemContent: 'Tables',
    destination: `/`,
  },
  {
    id: 3,
    leftIcon: CardIcon,
    menuItemContent: 'Billing',
    destination: `/${ROUTES.BILLING}`,
  },
  {
    id: 4,
    leftIcon: BuildIcon,
    menuItemContent: 'RTL',
    destination: `/${ROUTES.RTL}`,
  },
];
