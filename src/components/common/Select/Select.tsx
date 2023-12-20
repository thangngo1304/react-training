import SelectOption, { SelectOptionProps } from './SelectOption/SelectOption';
import './select.css';

export type SelectProps = {
  selectOptions: Array<SelectOptionProps>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

const Select = ({ selectOptions, onChange, value }: SelectProps) => {
  return (
    <select className="sort-value" id="sort" onChange={onChange} value={value}>
      {selectOptions.map((option) => (
        <SelectOption
          key={option.value?.toString()}
          value={option.value}
          disabled={option.disabled}
          children={option.children}
        />
      ))}
    </select>
  );
};

export default Select;
