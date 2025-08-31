import { render } from "@testing-library/react";

// Component
import Sidebar from "../Default";

describe('Sidebar test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Sidebar />
    )

    expect(container).toMatchSnapshot()
  })
});
