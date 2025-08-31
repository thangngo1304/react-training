import { render } from "@testing-library/react";

// Components
import Author from "..";

describe('Author component test case', () => {

  it('render when data is available', () => {
    const { container } = render(
      <Author src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt='Cat' name="Cat" email="cat@gmail.com" />
    )

    expect(container).toMatchSnapshot();
  })
});
