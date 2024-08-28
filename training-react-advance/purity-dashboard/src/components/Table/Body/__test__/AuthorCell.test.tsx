import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { AuthorCell } from '@/components';

const mockProps = {
  name: 'shoe',
};

describe('AuthorCell component', () => {
  const setup = () =>
    render(<AuthorCell {...mockProps} />, {
      wrapper: Table,
    });

  it('should match with snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
