import { render } from "@testing-library/react";

// Component
import { Switch } from "../..";

describe('Switch test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Switch title="Remember me" />
    )

    expect(container).toMatchSnapshot();
  })
});
