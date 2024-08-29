import dayjs from 'dayjs';
import { useCallback, useMemo, useState } from 'react';
import { Td, Text, Th, useToast, VStack } from '@chakra-ui/react';

// Components
import {
  Modal,
  Header,
  ModalTable,
  HeadCell,
  AuthorCell,
  CompletionCell,
  ActionCell,
  StatusCell,
  FunctionCell,
  AuthorForm,
  Indicator,
} from '@/components';

// Hooks
import {
  TAuthorResponse,
  TCreateAuthorPayload,
  TProjectResponse,
  TSearchAuthor,
  useAuthor,
  useDebounce,
  useProject,
  useSearch,
} from '@/hooks';

// Constants
import {
  COLUMNS_AUTHOR,
  COLUMNS_PROJECT,
  DATE_FORMAT,
  ROUTES,
  STATUS_LABEL,
  SUCCESS_MESSAGE
} from '@/constants';

// Types
import {
  TDataSource,
  THeaderTable,
  TAuthor,
  TProject,
  TRecordAuthor,
  TRecordProject,
} from '@/types';

// Utils
import { formatAuthorResponse, formatProjectResponse } from '@/utils';

const TablePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toast = useToast();

  const { searchParam: searchAuthor, setSearchParam: setSearchAuthor } =
    useSearch<TSearchAuthor>({
      name: '',
    });

  const {
    authorData,
    isLoading,
    isFetching,
    createAuthor,
    updateAuthor
  } = useAuthor({ name: searchAuthor?.name?.toLowerCase() });
  const {
    projectData,
    isLoading: loadingProject,
    isFetching: fetchingProject,
    updateProject,
  } = useProject();

  const handleToggleAddModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleCreateAuthor = useCallback(
    async (data: TRecordAuthor) => {
      try {
        const payload = {
          records: [
            {
              fields: {
                name: data.fields.name.toLowerCase(),
                email: data.fields.email,
                avatar: data.fields.avatar,
                role: data.fields.role,
                job: data.fields.job,
                employed: dayjs(data.fields.employed).format(DATE_FORMAT),
              },
            },
          ],
        };

        await createAuthor(payload as unknown as TCreateAuthorPayload);

        toast({
          title: SUCCESS_MESSAGE.TITLE_MESSAGE_CREATE('Author'),
          description: SUCCESS_MESSAGE.AUTHOR_SUCCESS,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      } catch (error) {
        throw error;
      }
    },
    [createAuthor],
  );

  const handleUpdateAuthor = useCallback(
    async (data: TRecordAuthor) => {
      try {
        const payload = {
          records: [
            {
              id: data.id,
              fields: {
                name: data.fields.name.toLowerCase(),
                email: data.fields.email,
                avatar: data.fields.avatar,
                role: data.fields.role,
                job: data.fields.job,
                employed: dayjs(data.fields.employed).format(DATE_FORMAT),
              },
            },
          ],
        };

        await updateAuthor(payload as unknown as TAuthorResponse);

        toast({
          title: SUCCESS_MESSAGE.TITLE_MESSAGE_UPDATE('Author'),
          description: SUCCESS_MESSAGE.AUTHOR_UPDATE,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        throw err;
      }
    },
    [updateAuthor],
  );

  const handleUpdateProject = useCallback(
    async (data: TRecordProject) => {
      try {
        const payload = {
          records: [
            {
              id: data.id,
              fields: {
                projectName: data.fields.projectName,
                avatar: data.fields.avatar,
                budget: Number(data.fields.budget),
                status: data.fields.status,
                completion: Number(data.fields.completion),
                description: data.fields.description,
                image: data.fields.image,
              },
            },
          ],
        };

        await updateProject(payload as unknown as TProjectResponse);

        toast({
          title: SUCCESS_MESSAGE.TITLE_MESSAGE_UPDATE('Project'),
          description: SUCCESS_MESSAGE.PROJECT_UPDATE,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        throw err;
      }
    },
    [updateProject],
  );

  const onSubmit = useCallback(
    (data: TRecordAuthor) => {
      data.id ? handleUpdateAuthor(data) : handleCreateAuthor(data);
    },
    [handleCreateAuthor, handleUpdateAuthor],
  );

  const handleChangeSearch = useDebounce((value: string) => {
    setSearchAuthor('name', value);
  }, []);

  const renderHead = useCallback((title: string, key: string): JSX.Element => {
    return title ? (
      <HeadCell key={key} title={title} />
    ) : (
      <Th w={50} maxW={50} />
    );
  }, []);

  const renderAuthor = useCallback(
    ({ id, name, avatar, email }: TDataSource): JSX.Element => (
      <AuthorCell id={id} key={id} name={name} image={avatar} email={email} />
    ),
    [],
  );

  const renderFunction = useCallback(
    ({ role, job }: TAuthor): JSX.Element => (
      <FunctionCell role={role} job={job} />
    ),
    [],
  );

  type TStatus = keyof typeof STATUS_LABEL;

  const renderAuthorStatus = useCallback(
    ({ authorStatus }: TDataSource) => (
      <StatusCell
        isAuthor
        variant={STATUS_LABEL[`${authorStatus}` as TStatus]}
        text={authorStatus as string}
      />
    ),
    [],
  );

  const renderProjectStatus = useCallback(
    ({ projectStatus }: TDataSource) => (
      <StatusCell
        variant={STATUS_LABEL[`${projectStatus}` as TStatus]}
        text={projectStatus as string}
      />
    ),
    [],
  );

  const renderEmployed = useCallback(
    ({ employed }: TAuthor): JSX.Element => (
      <Td
        py="5px"
        pr="5px"
        pl={0}
        fontSize="md"
        textAlign="left"
        w={{ base: '100px', md: '220px' }}
      >
        <Text
          fontSize="md"
          whiteSpace="break-spaces"
          noOfLines={1}
          w={{ base: '100px', '3xl': '150px', '5xl': '200px' }}
          flex={1}
          color="text.200"
          fontWeight="bold"
        >
          {dayjs(employed).format(DATE_FORMAT)}
        </Text>
      </Td>
    ),
    [],
  );

  const renderAuthorAction = useCallback(
    (data: TRecordAuthor): JSX.Element => (
      <ActionCell isAuthor data={data} onUpdateAuthor={handleUpdateAuthor} />
    ),
    [handleUpdateAuthor],
  );

  const renderProjectActionIcon = useCallback(
    (data: TRecordProject) => (
      <ActionCell
        dataProject={data}
        isOpenOption={true}
        onUpdateProject={handleUpdateProject}
      />
    ),
    [],
  );

  const renderCompanies = useCallback(
    ({ id, avatar, projectName }: TDataSource): JSX.Element => (
      <AuthorCell id={id} key={id} name={projectName} image={avatar} />
    ),
    [],
  );

  const renderBudget = useCallback(
    ({ budget }: TProject): JSX.Element => (
      <Td
        py="5px"
        pr="5px"
        pl={0}
        fontSize="md"
        textAlign="left"
        w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}
      >
        <Text
          flex={1}
          w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}
          noOfLines={1}
          color="text.primary"
          fontWeight="bold"
          fontSize="md"
          whiteSpace="break-spaces"
        >
          {budget}
        </Text>
      </Td>
    ),
    [],
  );

  const renderCompletion = useCallback(
    ({ completion }: TProject): JSX.Element => (
      <CompletionCell completion={completion} />
    ),
    [],
  );

  const columnAuthor = useMemo(
    () =>
      COLUMNS_AUTHOR(
        renderHead,
        renderAuthor,
        renderFunction,
        renderAuthorStatus,
        renderEmployed,
        renderAuthorAction,
      ),
    [
      renderHead,
      renderAuthor,
      renderFunction,
      renderAuthorStatus,
      renderEmployed,
      renderAuthorAction,
    ],
  );

  const columnProject = useMemo(
    () =>
      COLUMNS_PROJECT(
        renderHead,
        renderCompanies,
        renderBudget,
        renderProjectStatus,
        renderCompletion,
        renderProjectActionIcon,
      ),
    [
      renderHead,
      renderCompanies,
      renderBudget,
      renderProjectStatus,
      renderCompletion,
      renderProjectActionIcon,
    ],
  );

  return (
    <Indicator isOpen={isLoading && loadingProject}>
      <VStack alignItems="flex-start">
        <Header
          name="Tables"
          path={ROUTES.TABLES}
          onSearch={handleChangeSearch}
          searchValue={searchAuthor?.name}
        />
        <VStack gap="24px" w="100%">
          <ModalTable
            isAuthor
            title="Authors Table"
            columns={columnAuthor as unknown as THeaderTable[]}
            dataSource={formatAuthorResponse(authorData)}
            onClickAdd={handleToggleAddModal}
            isFetching={isFetching}
          />
          <ModalTable
            title="Projects"
            columns={columnProject as unknown as THeaderTable[]}
            dataSource={formatProjectResponse(projectData)}
            isFetching={fetchingProject}
          />
        </VStack>
        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            onClose={handleToggleAddModal}
            title="Add Author"
            haveCloseButton
            body={
              <AuthorForm
                onCloseModal={handleToggleAddModal}
                onSubmit={onSubmit}
              />
            }
          />
        )}
      </VStack>
    </Indicator>
  );
};

export default TablePage;
