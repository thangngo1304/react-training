import { fireEvent, render } from "@testing-library/react";
import Header from "..";

const onSearchMock = jest.fn();
const searchValue = 'Shoe';

describe('Header test case', () => {
  it('Should render correctly', () => {
    const { container } = render(
      <Header onSearch={onSearchMock}
        searchValue={searchValue}
        colorFill="#000"
        colorIcon="#000"
        isProfile={false} />
    )
    expect(container).toMatchSnapshot()
  })

  test('should call onSearch when user search author', () => {
    const searchValue = 'Shoe';
    const { getByPlaceholderText } = render(
      <Header
        onSearch={onSearchMock}
        searchValue={searchValue}
      />
    );

    const searchInput = getByPlaceholderText('Search Author');
    fireEvent.change(searchInput, { target: { value: searchValue } });


    expect(onSearchMock).toHaveBeenCalledWith('searchValue');
  });

  test('should call onSearch with an empty string when the reset icon is clicked', () => {
    const onSearchMock = jest.fn(); // Mock the onSearch function


    const { getByPlaceholderText, getByRole } = render(
      <Header
        onSearch={onSearchMock}
        searchValue={searchValue}
      />
    );

    const searchInput = getByPlaceholderText('Search Author');
    fireEvent.change(searchInput, { target: { value: searchValue } });

    // Find and click the reset (close) icon
    const resetIcon = getByRole('button'); // Assuming CloseIcon renders a button
    fireEvent.click(resetIcon);

    // Check if the onSearch function was called with an empty string after reset
    expect(onSearchMock).toHaveBeenCalledWith('');
  });
});
