import { render } from "@testing-library/react";
import Footer from "..";


describe('Footer test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Footer />
    )

    expect(container).toMatchSnapshot();
  })
});
