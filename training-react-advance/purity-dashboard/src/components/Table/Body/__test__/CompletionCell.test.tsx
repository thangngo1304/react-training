import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { CompletionCell } from '@/components';

const mockProps = {
  completion: 20,
};

describe('CompletionCell component', () => {
  const setup = () =>
    render(<CompletionCell {...mockProps} />, {
      wrapper: Table,
    });

  it('should match with snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
