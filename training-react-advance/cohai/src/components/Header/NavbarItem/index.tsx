import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

type TNavbarProps = {
  path?: string;
  name?: string;
  colorFill?: string;
};

const Navbar = ({ path, name, colorFill }: TNavbarProps) => (
  <Box>
    <Flex flexDirection="row" alignItems="center" mb="5px">
      <Text size="textSm" color={colorFill}>Pages /</Text>
      <Link href={path} variant="secondary" color={colorFill}>
        {name}
      </Link>
    </Flex>
    <Heading as={'h2'} size="md" color={colorFill}>{name}</Heading>
  </Box>
);

export default Navbar;
