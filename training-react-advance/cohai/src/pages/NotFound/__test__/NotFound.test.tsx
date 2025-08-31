import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import NotFoundPage from '..';

jest.mock('@chakra-ui/react');
describe('NotFoundPage component', () => {
  it('Render correcty', () => {
    const container = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
