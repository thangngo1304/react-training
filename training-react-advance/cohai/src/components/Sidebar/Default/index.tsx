import { Link, VStack } from '@chakra-ui/react';

// Component
import { LineIcon, LogoIcon } from '@/icons';

// Constants
import { SIDEBAR_LIST } from '@/constants';
import { CardHelp, Menu } from '@/components';

type TSidebarProps = {
  onSignOut?: () => void;
};

const Sidebar = ({ onSignOut }: TSidebarProps) => (
  <VStack width="246px" pt="44px">
    <Link href="/" as="h1" mb="27.5px">
      <LogoIcon />
    </Link>
    <LineIcon />
    {SIDEBAR_LIST.map((item) => (
      <Menu title={item.title} listItem={item.listItem} onSignOut={onSignOut} />
    ))}
    <CardHelp />
  </VStack>
);

export default Sidebar;
