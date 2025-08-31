import { ReactNode } from "react"
import { Box, Flex } from "@chakra-ui/react"

interface TItemIconProps {
  icon: ReactNode;
  isActive?: boolean;
}

// Rename
const ItemIcon = ({ icon, isActive, ...rest }: TItemIconProps) => (
  <Box
    display='inline-block'
    p='7.5px'
    backgroundColor={isActive ? 'background.300' : 'background.100'}
    borderRadius='md'
    boxShadow={isActive ? 'transparent' : '0 5.5px 3.5px rgba(0, 0 , 0, .02)'}
    color={isActive ? 'text.100' : 'text.300'}
    {...rest}
  >
    <Flex
      alignItems='center'
      width='15px'
      height='15px'
    >
      {icon}
    </Flex>
  </Box>
);

export default ItemIcon;
