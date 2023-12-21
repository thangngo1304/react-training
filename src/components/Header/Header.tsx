// Constants
import { FILTER_ATTRIBUTE } from 'constants/filter';

// Components
import { InputField, Select } from '..';

// icon image
import iconSearch from '../../../src/assets/icon/icon_search.svg';
// Css
import './header.css';

type HeaderProps = {
  sortValue: string;
  handleChangeSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ sortValue, handleChangeSort, handleChangeSearch }: HeaderProps) => {
  const selectOption = [
    {
      value: FILTER_ATTRIBUTE.DEFAULT,
      disabled: false,
      children: 'Default'
    },
    {
      value: FILTER_ATTRIBUTE.NAME,
      disabled: false,
      children: 'Sort by Name'
    },
    {
      value: FILTER_ATTRIBUTE.PRICE,
      disabled: false,
      children: 'Sort by Price'
    }
  ];

  return (
    <>
      <header className="header">
        <a className="link-title" href="/">
          <h1 className="header-title">Foods Management</h1>
        </a>
        <nav className="header-nav">
          <div className="nav-heading">
            <form className="form-search">
              <img src={iconSearch} className="icon-search" loading="eager" alt="search" />
              <InputField
                type="search"
                inputClass="input-search"
                name="search"
                placeholder="Search for food, coffe, etc.."
                onChange={handleChangeSearch}
              />
            </form>
          </div>
          <Select selectOptions={selectOption} onChange={handleChangeSort} value={sortValue} />
        </nav>
      </header>
    </>
  );
};

export default Header;
