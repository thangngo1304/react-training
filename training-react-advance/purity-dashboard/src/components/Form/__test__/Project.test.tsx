// Libs
import { render, fireEvent, act, waitFor } from '@testing-library/react';

// Components
import { ProjectForm } from '../..';
import { PROJECT_STATUS } from '@/constants';

describe('ProjectForm component', () => {
  const mockProps = {
    onCloseModal: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should match with snapshot', () => {
    const { container } = render(<ProjectForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit when submit form', async () => {
    const mockNewProjectData = {
      projectName: 'Shoe',
      avatar: 'asdasd.png',
      budget: 10,
      status: PROJECT_STATUS.TODO,
      completion: 5,
      image: 'asdasd.png',
      description: 'd',
    };

    const { getByLabelText, getByRole } = render(
      <ProjectForm {...mockProps} />,
    );

    act(() => {
      fireEvent.change(getByLabelText('Project Name'), {
        target: { value: mockNewProjectData.projectName },
      });
      fireEvent.change(getByLabelText('Budget'), {
        target: { value: mockNewProjectData.budget },
      });
      fireEvent.change(getByLabelText('Avatar'), {
        target: { value: mockNewProjectData.avatar },
      });
      fireEvent.change(getByLabelText('status'), {
        target: { value: mockNewProjectData.status },
      });
      fireEvent.change(getByLabelText('Completion'), {
        target: { value: mockNewProjectData.completion },
      });
      fireEvent.change(getByLabelText('Image'), {
        target: { value: mockNewProjectData.image },
      });
      fireEvent.change(getByLabelText('Description'), {
        target: { value: mockNewProjectData.description },
      });
    });

    const saveBtn = getByRole('button', { name: 'Save' });
    fireEvent.click(saveBtn);

    waitFor(() => {
      expect(mockProps.onSubmit).toHaveBeenCalledWith(mockNewProjectData, []);
      expect(mockProps.onCloseModal).toHaveBeenCalled();
    });
  });
});
