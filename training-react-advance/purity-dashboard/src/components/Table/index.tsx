import {
  TableContainer,
  Table as TableChakra,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableProps,
  Text,
  Tooltip,
} from '@chakra-ui/react';

// Types
import { TDataSource, THeaderTable } from '@/types';

// Constants
import { ERROR_MESSAGES } from '@/constants';

type TTableProps = TableProps & {
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
  onClickTableRow?: (id: string) => void;
};

const Table = ({
  columns = [],
  dataSource = [],
  onClickTableRow,
  ...props
}: TTableProps): JSX.Element => {
  return (
    <TableContainer
      overflowX={{ base: 'scroll', 'xl': 'hidden' }}
      w="100%"
      h="388px"
    >
      <TableChakra {...props}>
        <Thead>
          <Tr>
            {!!columns.length &&
              columns.map(({ key, title, renderHead }) =>
                renderHead ? (
                  renderHead(`${title}`, `${key}`)
                ) : (
                  <Th key={key} py={5} px={0} textAlign="left">
                    <Text
                      color="text.secondary"
                      textTransform="none"
                      fontSize="sm"
                      title={title}
                    >
                      {title}
                    </Text>
                  </Th>
                ),
              )}
          </Tr>
        </Thead>

        <Tbody>
          {!dataSource.length ? (
            <Tr data-testid="table-row">
              <Td
                colSpan={columns?.length}
                py={6}
                color="text.primary"
                fontSize="xl"
                fontWeight="semibold"
                textAlign="center"
                border="none"
              >
                {ERROR_MESSAGES.EMPTY_DATA}
              </Td>
            </Tr>
          ) : (
            dataSource.map((data) => {
              return (
                <Tr
                  key={data.id}
                  data-testid="table-row"
                >
                  {!!columns.length &&
                    columns.map((column, index) =>
                      column.renderBody ? (
                        column.renderBody(data, index)
                      ) : (
                        <Td
                          key={column.key}
                          py={5}
                          px={0}
                          minW={{ base: '10px', md: '100px' }}
                        >
                          <Tooltip
                            minW="max-content"
                            placement="bottom-start"
                            label={
                              data[column.key as keyof typeof data] as string
                            }
                          >
                            <Text
                              fontSize="md"
                              color="text.primary"
                              fontWeight="semibold"
                              textAlign="left"
                              whiteSpace="break-spaces"
                              minW={{
                                base: '250px',
                                xl: '20px',
                                '3xl': '100px',
                              }}
                              noOfLines={1}
                            >
                              {data[column.key as keyof typeof data] as string}
                            </Text>
                          </Tooltip>
                        </Td>
                      ),
                    )}
                </Tr>
              );
            })
          )}
        </Tbody>
      </TableChakra>
    </TableContainer>
  );
};

export default Table;
