import { Box, Heading, HStack, Text } from "@chakra-ui/react";

import { Avatar } from "@/components";

type TAuthorProps = {
  src: string,
  alt: string,
  name: string,
  email: string,
}

const Author = ({ src, alt, name, email }: TAuthorProps) => (
  <HStack alignItems='center'>
    <Box mr='15px'>
      <Avatar src={src} alt={alt} />
    </Box>
    <Box>
      <Heading size='md'>{name}</Heading>
      <Text>{email}</Text>
    </Box>
  </HStack>
);

export default Author;
