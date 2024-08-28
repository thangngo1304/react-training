import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { FunctionCell } from '@/components';

const mockProps = {
  job: 'Dev',
  role: 'FE'
};

describe('FunctionCell component', () => {
  const setup = () =>
    render(<FunctionCell {...mockProps} />, {
      wrapper: Table,
    });

  it('should match with snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
