import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import { FetchingTable } from '@/components/Skeleton';
import { ErrorBoundary, Pagination, Table } from '@/components';

// Hooks
import { usePagination } from '@/hooks';

// types
import { TDataSource, THeaderTable } from '@/types';

type TModalTableProps = {
  title?: string;
  columns?: THeaderTable[];
  dataSource: TDataSource[];
  isAuthor?: boolean;
  isFetching?: boolean;
  onClickTableRow?: (id: string) => void;
  onClickAdd?: () => void;
};

const ModalTable = ({
  title,
  columns,
  dataSource,
  isAuthor = false,
  isFetching,
  onClickTableRow,
  onClickAdd,
}: TModalTableProps) => {

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    handlePageChange,
    handlePageClick,
  } = usePagination(dataSource);

  return (
    <VStack
      w="100%"
      borderRadius="lg"
      bgColor="background.100"
      px="22px"
      py="24px"
      alignItems="flex-start"
      boxShadow="0 5.5px 3.5px rgba(0, 0 , 0, .02)"
    >
      <ErrorBoundary fallback={<Text textAlign='center'>button add new went wrong</Text>}>
        <Flex w="100%" justifyContent="space-between">
          <Heading mt="4px">{title}</Heading>
          {isAuthor && (
            <Button gap="4px" onClick={onClickAdd} data-testid="button-add">
              Add new <AddIcon />
            </Button>
          )}
        </Flex>
      </ErrorBoundary>
      <ErrorBoundary fallback={<Text textAlign='center'>Table component went wrong</Text>}>
        <FetchingTable isLoading={isFetching}>
          <Table
            columns={columns}
            dataSource={filterData}
            onClickTableRow={onClickTableRow}
          />
        </FetchingTable>
      </ErrorBoundary>
      <ErrorBoundary fallback={<Text textAlign='center'>Pagination component went wrong</Text>}>
        <Flex w='100%' justifyContent='flex-end'>
          <Pagination
            currentPage={data.currentPage}
            isDisableNext={isDisableNext}
            isDisabledPrev={isDisabledPrev}
            arrOfCurrButtons={arrOfCurrButtons}
            onPageChange={handlePageChange}
            onClickPage={handlePageClick}
          />
        </Flex>
      </ErrorBoundary>
    </VStack>
  );
};

export default memo(ModalTable, isEqual);
