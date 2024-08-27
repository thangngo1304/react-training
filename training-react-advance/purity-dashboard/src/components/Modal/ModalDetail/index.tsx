import { formatDecimalNumber } from "@/utils";
import { Box, Heading, HStack, Image, Progress, Text, VStack } from "@chakra-ui/react"

type TProjectDetailProps = {
  projectId?: string;
  image?: string;
  name?: string;
  budget?: number;
  status?: string;
  completion?: number;
  description?: string
}

const ProjectDetail = ({ projectId, image, name, budget, status, completion, description }: TProjectDetailProps) => (
  <VStack w='100%' overflow='hidden'>
    <Box
      position="relative"
      borderRadius="lg"
      w="100%"
      h="250px"
      mb="20px"
      borderColor="transparent"
    >
      <Image
        borderRadius="lg"
        objectFit="cover"
        w="100%"
        h="100%"
        src={image}
        alt={name}
      />
      <Image
        position="absolute"
        borderRadius="lg"
        borderColor="transparent"
        w="100%"
        h="100%"
        top={0}
        left={0}
        zIndex={2}
        bgGradient="linear(to-t, linear.100, linear.200)"
      />
    </Box>
    <VStack alignItems="flex-start" w="100%" px="10px">
      <VStack alignItems='flex-start' gap={0} mb='10px'>
        <Heading mb="5px">{name}</Heading>
        <Text size="textSm">Project #{projectId}</Text>
      </VStack>
      <HStack w='100%' alignItems='flex-start' justifyContent='space-between'>
        <VStack alignItems='flex-start'>
          <Heading>Budget</Heading>
          <Text mb="20px">{`$${formatDecimalNumber(budget)}`}</Text>
        </VStack>
        <VStack alignItems='flex-start'>
          <Heading>Status</Heading>
          <Text mb="20px">{status}</Text>
        </VStack>
        <VStack alignItems='flex-start'>
          <Heading>Completion</Heading>
          <VStack alignItems="flex-start">
            <Text color="#38A169" fontWeight="bold">
              {completion}%
            </Text>
            <Progress
              w="125px"
              borderRadius="md"
              value={completion}
              size="xs"
              colorScheme="green"
            />
          </VStack>
        </VStack>
      </HStack>

      <VStack alignItems='flex-start'>
        <Heading>Descripttion</Heading>
        <Text
          mb="20px"
          width='745px'
          noOfLines={5}
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  </VStack>
)

export default ProjectDetail;
