import { Box, Flex, Link } from '@chakra-ui/react';

type NavItem = {
  name: string;
  path: string;
};

type TNavbarProps = {
  items: NavItem[];
};

const Navbar = ({ items }: TNavbarProps) => (
  <Box as="nav">
    <Flex as="ul" listStyleType="none">
      {items.map((item) => (
        <Box as="li" key={item.path}>
          <Link
            href={item.path}
            fontSize="md"
            fontWeight="medium"
            _hover={{ textDecoration: 'underline', color: 'text.300' }}
          >
            {item.name}
          </Link>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default Navbar;
