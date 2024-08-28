import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { StatusCell } from '@/components';

const mockProps = {
  text: 'Status',
  isAuthor: false
};

describe('StatusCell component', () => {
  const setup = () =>
    render(<StatusCell {...mockProps} />, {
      wrapper: Table,
    });

  it('should match with snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
