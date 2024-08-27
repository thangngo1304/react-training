import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useCallback, useMemo, useState } from 'react';

// Components
import {
  Header,
  FetchingModal,
  Modal,
  ProjectForm,
  Switch,
  CardInfo,
  InfoItem,
  CardProject,
  UserForm,
  ProjectDetail,
  Fetching,
  Avatar,
  ErrorBoundary
} from '@/components';
import {
  EditIcon,
  LineIcon,
  OverviewIcon,
  ProjectIcon,
  TeamIcon,
} from '@/icons';

// Hooks
import {
  getProjectId,
  TProjectResponse,
  TUserRecordResponse,
  useProject,
  useUpdateUser,
} from '@/hooks';

// Constants
import { ROUTES, SUCCESS_MESSAGE } from '@/constants';

// Stores
import { authStore } from '@/stores';

// Types
import { TRecordProject, TRecordUser } from '@/types';

const ProfilePage = () => {
  const [isProjectId, setIsProjectId] = useState('')
  const [isOpenModalDetail, setModalDetail] = useState(false);

  // Lib
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpenModal, onToggle: setIsOpenModal } = useDisclosure();
  const toast = useToast();

  // Store
  const setUser = authStore((state) => state.setUser);
  const user = authStore((state) => state.user);
  const { fields } = user || {}
  const {
    name,
    avatar = '/imgs/avatar-default.svg',
    phone,
    email,
    location
  } = fields || {}

  // Hooks
  const { updateUser } = useUpdateUser();
  const { projectData, createProject, isFetching } = useProject();
  const { projectId, loadingProjectId } = getProjectId(isProjectId);
  const { fields: fieldsProjectId } = projectId || {}
  const {
    _id,
    projectName,
    image = '/imgs/image-project-default.jpg',
    budget,
    status,
    completion,
    description
  } = fieldsProjectId || {}


  const handleCreateProject = useCallback(async (data: TRecordProject) => {
    try {
      const payload = {
        records: [
          {
            fields: {
              projectName: data.fields.projectName,
              budget: Number(data.fields.budget),
              avatar: data.fields.avatar,
              status: data.fields.status,
              completion: Number(data.fields.completion),
              image: data.fields.image,
              description: data.fields.description,
            },
          },
        ],
      };

      await createProject(payload as unknown as TProjectResponse);

      toast({
        title: SUCCESS_MESSAGE.TITLE_MESSAGE_CREATE('Project'),
        description: SUCCESS_MESSAGE.PROJECT_SUCCESS,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const handleUpdateUser = useCallback(async (data: TRecordUser) => {
    try {
      const payload = {
        records: [
          {
            id: data.id,
            fields: {
              name: data.fields.name,
              email: data.fields.email,
              password: data.fields.password,
              avatar: data.fields.avatar,
              phone: data.fields.phone,
              location: data.fields.location,
            },
          },
        ],
      };

      setUser({ user: payload as unknown as TRecordUser });
      await updateUser(payload as unknown as TUserRecordResponse);

      toast({
        title: SUCCESS_MESSAGE.TITLE_MESSAGE_UPDATE('User'),
        description: SUCCESS_MESSAGE.USER_UPDATE,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      throw err;
    }
  }, []);

  const handleToggleModalDetail = () => {
    setModalDetail((prev) => !prev)
  }

  const handleClickDetail = (id: string) => {
    setIsProjectId(id)
    handleToggleModalDetail()
  };

  const handleSubmitProject = useCallback((data: TRecordProject) => {
    handleCreateProject(data);
  }, []);

  const handleSubmitUser = useCallback((data: TRecordUser) => {
    handleUpdateUser(data);
  }, []);

  const subHeader = useMemo(() => (
    <ErrorBoundary fallback={<Text textAlign="center">SubHeader component went wrong</Text>}>
      <Stack
        p="16px"
        w={{ base: "90%", md: "97%" }}
        mb="-56px"
        flexDirection={{ base: 'column', md: 'row' }}
        borderRadius="lg"
        alignItems="center"
        bgGradient="linear(to-t, linear.300, linear.400)"
        justifyContent="space-between"
      >
        {
          <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
            <Box position="relative" mb={{ base: "5px", md: "unset" }}>
              <Avatar
                width="80px"
                height="80px"
                src={`${avatar}`}
                alt={`${name}`}
              />
              <Flex
                w="26px"
                h="26px"
                borderRadius="8px"
                boxShadow="0 2px 5.5px 0 rgba(0, 0, 0, .06)"
                cursor="pointer"
                bgColor="background.100"
                position="absolute"
                bottom="-4px"
                right="-6px"
                alignItems="center"
                justifyContent="center"
                onClick={onToggle}
              >
                <EditIcon />
              </Flex>
            </Box>
            <VStack ml={{ base: "unset", md: "22px" }} alignItems={{ base: "center", md: "flex-start" }} gap={0}>
              <Heading size="lg">{name}</Heading>
              <Text variant="tertiary">{email}</Text>
            </VStack>
          </Flex>
        }

        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Button variant="iconTertiary" leftIcon={<OverviewIcon />}>
            OVERVIEW
          </Button>
          <Button variant="iconTertiary" leftIcon={<TeamIcon />}>
            TEAMS
          </Button>
          <Button variant="iconTertiary" leftIcon={<ProjectIcon />}>
            PROJECTS
          </Button>
        </Flex>
      </Stack>
    </ErrorBoundary>
  ), [user, onToggle])

  const sectionInformation = useMemo(() => (
    <ErrorBoundary fallback={<Text textAlign="center">sectionInformation component went wrong</Text>}>
      <Grid w="100%" templateColumns={{ base: "", lg: "repeat(3, 1fr)" }} gap="24px" mb="24px">
        <GridItem>
          <CardInfo title="Platform Settings">
            <VStack alignItems="flex-start" gap="20px" mb="20px">
              <Heading color="text.400" fontSize="xs">
                ACCOUNT
              </Heading>
              <VStack gap="18px">
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Email me when someone follows me"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Email me when someone answers on my post"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Email me when someone mentions me"
                />
              </VStack>
            </VStack>
            <VStack alignItems="flex-start" gap="20px">
              <Heading color="text.400" fontSize="xs">
                APPLICATION
              </Heading>
              <VStack gap="18px">
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="New launches and projects"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Monthly product updates"
                />
                <Switch
                  fontSize="sm"
                  color="text.400"
                  title="Subscribe to newsletter"
                />
              </VStack>
            </VStack>
          </CardInfo>
        </GridItem>
        <GridItem>
          <CardInfo title="Profile Information">
            <VStack alignItems="flex-start" gap="30px">
              <Text>
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </Text>
              <LineIcon />
              <VStack alignItems="flex-start" gap="14px">
                <InfoItem param="Full Name" content={name} />
                <InfoItem param="Mobile" content={phone} />
                <InfoItem param="Email" content={email} />
                <InfoItem param="Location" content={location} />
                <InfoItem param="Social Media" />
              </VStack>
            </VStack>
          </CardInfo>
        </GridItem>
        <GridItem>
          <CardInfo title="Conversations">
            <VStack alignItems="flex-start" gap="22px">
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">
                    Hi! I need more informations...
                  </Text>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">
                    Awesome work, can you change...
                  </Text>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">Have a great afternoon...</Text>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Avatar />
                <VStack ml="22px" alignItems="flex-start" gap={0}>
                  <Heading size="md">Esthera Jackson</Heading>
                  <Text variant="tertiary">About files I can...</Text>
                </VStack>
              </Flex>
            </VStack>
          </CardInfo>
        </GridItem>
      </Grid>
    </ErrorBoundary>
  ), [user])

  return (
    <VStack mt="24px">
      <VStack
        w="100%"
        height="300px"
        bgImage="/imgs/background-profile.svg"
        bgRepeat='no-repeat'
        bgSize='cover'
        borderRadius="lg"
        justifyContent="space-between"
        mb={{ base: "130px", md: "74px" }}
      >
        <Header
          name="Profile"
          isProfile
          path={ROUTES.PROFILE}
          colorFill="text.100"
          colorIcon="#FFF"
        />
        {subHeader}
      </VStack>
      {sectionInformation}
      <VStack
        w="100%"
        alignItems="flex-start"
        borderRadius="lg"
        px="22px"
        py="28px"
        bgColor="background.100"
      >
        <Box mb="24px">
          <Heading>Project</Heading>
          <Text>Architects design houses</Text>
        </Box>
        <Grid w="100%" templateColumns={{ base: '', lg: "repeat(4, 1fr)" }} gap="24px">
          <GridItem>
            <VStack
              w="100%"
              h={{ base: "342px", lg: '100%' }}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="border.400"
              gap="10px"
              onClick={setIsOpenModal}
              justifyContent="center"
              opacity={1}
              cursor="pointer"
              transition=".2s"
              _hover={{
                opacity: 0.6,
              }}
            >
              <AddIcon />
              <Heading textAlign="center">Create a New Project</Heading>
            </VStack>
          </GridItem>
          {projectData.map((project) => {
            const { id, fields } = project || {}
            const {
              _id,
              projectName,
              image = '/imgs/image-project-default.jpg',
              description
            } = fields || {}
            return (
              <FetchingModal isLoading={isFetching}>
                <GridItem>
                  <CardProject
                    id={id}
                    key={projectName}
                    image={image}
                    name={projectName}
                    projectId={_id}
                    description={description}
                    onClick={handleClickDetail}
                  />
                </GridItem>
              </FetchingModal>
            )
          })}
        </Grid>
      </VStack>

      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={setIsOpenModal}
          title="Add Project"
          haveCloseButton
          body={
            <ProjectForm
              onCloseModal={setIsOpenModal}
              onSubmit={handleSubmitProject}
            />
          }
        />
      )}

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onToggle}
          title="Update Profile"
          haveCloseButton
          body={
            <ErrorBoundary fallback={<Text textAlign="center">UserForm went wrong</Text>}>
              <UserForm onCloseModal={onToggle} onSubmit={handleSubmitUser} />
            </ErrorBoundary>
          }
        />
      )}

      {isOpenModalDetail && (
        <Modal
          isOpen={isOpenModalDetail}
          onClose={handleToggleModalDetail}
          title="View Detail Project"
          haveCloseButton
          isProjectDetail
          body={
            <ErrorBoundary fallback={<Text textAlign="center">ProjectDetail went wrong</Text>}>
              <Fetching isLoading={loadingProjectId}>
                <ProjectDetail
                  projectId={_id}
                  image={image}
                  name={projectName}
                  budget={budget}
                  status={status}
                  completion={completion}
                  description={description}
                />
              </Fetching>
            </ErrorBoundary>
          }
        />
      )}
    </VStack >
  );
};

export default ProfilePage;
