import { render } from "@testing-library/react";

// Components
import CardProject from "..";

// Mocks
import { PROJECT_DATA_MOCK } from "@/mocks";

// Types
import { TRecordProject } from "@/types";

describe('CardProject component test case', () => {
  it('Render when data is available', () => {
    const mockData: TRecordProject = PROJECT_DATA_MOCK
    const { container } = render(
      <CardProject
        id={mockData.id}
        projectId={mockData?.fields._id}
        image={mockData?.fields.image}
        name={mockData?.fields.projectName}
        description={mockData?.fields.description}
        onClick={jest.fn()}
      />
    )

    expect(container).toMatchSnapshot();
  })
});
