// library
import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import ActionCell from '../ActionCell';

// mock
import { AUTHORS, PROJECT } from '@/mocks';

const userMock = AUTHORS[0];
const mockTransaction = PROJECT[0];
const onUpdateAuthorMock = jest.fn();
const onUpdateProjectMock = jest.fn();

const setup = () =>
  render(
    <ActionCell
      data={userMock}
      dataProject={mockTransaction}
      isAuthor={false}
      isOpenOption={false}
      onUpdateAuthor={onUpdateAuthorMock}
      onUpdateProject={onUpdateProjectMock}
    />,
    {
      wrapper: Table,
    },
  );

describe('ActionCell', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
