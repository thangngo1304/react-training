import { HStack, Link, List, ListItem, Stack, Text } from '@chakra-ui/react';

// Constants
import { FOOTER_LINKS } from '@/constants';

export type TFooterProps = {
  isAuth?: boolean
}

const Footer = ({ isAuth }: TFooterProps) => (
  <Stack w="100%" flexDirection={{ base: 'column', lg: 'row' }} px={isAuth ? '30px' : ''} pt={isAuth ? '4px' : ''} pb={isAuth ? '20px' : ''} alignItems={{ base: "center", lg: 'flex-end' }} justifyContent={{ base: "center", lg: "space-between" }}>
    <HStack gap="2px">
      <Text size={{ base: "textXs", lg: "textSm" }} >@ 2021, Made with ❤️ by</Text>
      <Text
        color="text.300"
        fontWeight="700"
        size={{ base: "textXs", lg: "textSm" }}
      >Creative Tim</Text>
      <Text size={{ base: "textXs", lg: "textSm" }} >&</Text>
      <Text color="text.300" fontWeight="700" size={{ base: "textXs", lg: "textSm" }} >Simple</Text>
      <Text size={{ base: "textXs", lg: "textSm" }} >for a better web</Text>
    </HStack>

    <List
      display="flex"
      flexDirection="row"
      color="text.400"
      fontWeight="400"
      gap="44px"
    >
      {FOOTER_LINKS.map(({ name, path }) => (
        <ListItem key={name}>
          <Link href={path} p={0}>
            {name}
          </Link>
        </ListItem>
      ))}
    </List>
  </Stack >
);

export default Footer;
