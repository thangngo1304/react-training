import { Link, VStack } from '@chakra-ui/react';

// Component
import { LineIcon, LogoIcon } from '@/icons';

// Constants
import { SIDEBAR_LIST } from '@/constants';
import { CardHelp, Menu } from '@/components';

const Sidebar = () => (
  <VStack width="246px" pt="44px">
    <Link href="/" as="h1" mb="27.5px">
      <LogoIcon />
    </Link>
    <LineIcon />
    {SIDEBAR_LIST.map((item) => (
      <Menu listItem={item.listItem} />
    ))}
    <CardHelp />
  </VStack>
);

export default Sidebar;
