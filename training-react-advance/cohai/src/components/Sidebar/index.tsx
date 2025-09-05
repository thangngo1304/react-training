import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// Component
import { LineIcon, LogoIcon } from '@/icons';
import { Menu } from '@/components';

// Constants
import { SIDEBAR_LIST } from '@/constants';

const ExpandSidebar = () => {
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
            <HStack height="fit-content" gap={0} alignItems="center">
              <Link href="/" as="h2" p={0}>
                <LogoIcon />
              </Link>
              <VStack alignItems="flex-start">
                <Heading variant="primary" size="2xl" fontWeight="bold">
                  Cô Hai
                </Heading>
                <Text variant="primary" fontWeight="600">
                  Trái cây.
                </Text>
              </VStack>
            </HStack>
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
