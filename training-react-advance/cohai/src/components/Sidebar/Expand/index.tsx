import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// Component
import { LineIcon, LogoIcon } from '@/icons';
import { CardHelp, Menu } from '@/components';

// Constants
import { SIDEBAR_LIST } from '@/constants';

type TSidebarProps = {
  onSignOut?: () => void;
};

const ExpandSidebar = ({ onSignOut }: TSidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack position="relative" w="24px" h="24px">
      <Box onClick={onOpen} position="absolute">
        <HamburgerIcon w="24px" h="24px" />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/" as="h1" mb="27.5px">
              <LogoIcon />
            </Link>
          </DrawerHeader>

          <LineIcon />
          <DrawerBody>
            {SIDEBAR_LIST.map((item) => (
              <Menu listItem={item.listItem} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default ExpandSidebar;
