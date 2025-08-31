import { PhoneIcon } from "@chakra-ui/icons";
import { render } from "@testing-library/react";

// Component
import Navigation from "..";

describe('Navigation test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Navigation leftIcon={<PhoneIcon />} isActive={false} >
        Content1
      </Navigation>
    )

    expect(container).toMatchSnapshot();
  })
});
