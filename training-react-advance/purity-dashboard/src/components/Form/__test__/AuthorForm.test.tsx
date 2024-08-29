// Libs
import { render, fireEvent, act, waitFor } from '@testing-library/react';

// Components
import { AuthorForm } from '../..';
import { TRecordAuthor } from '@/types';

describe('AuthorForm component', () => {
  const mockProps = {
    onCloseModal: jest.fn(),
    onSubmit: jest.fn(),
  };
  const mockNewUserData: TRecordAuthor = {
    id: '1',
    fields: {
      name: 'Shoe',
      email: 'shoe@gmail.com',
      avatar: 'https://tiki.vn/blog/wp-content/uploads/2023/02/o0XKdJdOcSuXoo3NbsjzNdn00-7PcHzNpAuQ85LIrsC2qwi4oEykPVZGDPskjmOQvd85etOVIPb4f0rprNu_dGGbslg_L4kUHgra7vgFNs-tl_j3WaEvSHTa4h_V5d1_zdJ4m5a1mCjGWzycCVPIk-U.png',
      role: 'Dev',
      job: 'FE',
      employed: '2024-07-01',
      _id: 2
    },
    createdTime: ''
  };
  it('should match with snapshot', () => {
    const { container } = render(<AuthorForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit when submit form', async () => {

    const { getByLabelText, getByRole } = render(<AuthorForm {...mockProps} />);

    act(() => {
      fireEvent.change(getByLabelText('Name'), {
        target: { value: mockNewUserData.fields.name },
      });
      fireEvent.change(getByLabelText('Email'), {
        target: { value: mockNewUserData.fields.email },
      });
      fireEvent.change(getByLabelText('Avatar'), {
        target: { value: mockNewUserData.fields.avatar },
      });
      fireEvent.change(getByLabelText('Role'), {
        target: { value: mockNewUserData.fields.role },
      });
      fireEvent.change(getByLabelText('Job'), {
        target: { value: mockNewUserData.fields.job },
      });
      fireEvent.change(getByLabelText('Employed'), {
        target: { value: mockNewUserData.fields.employed },
      });
    });

    const saveBtn = getByRole('button', { name: 'Save' });
    fireEvent.click(saveBtn);

    waitFor(() => {
      expect(mockProps.onSubmit).toHaveBeenCalledWith(mockNewUserData, []);
      expect(mockProps.onCloseModal).toHaveBeenCalled();
    })
  });
});
