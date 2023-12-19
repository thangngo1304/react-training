import SortOption, { SortOptionProps } from './SortOption/SortOption';
import './sort.css';

export type SortProps = {
  selectOptions: Array<SortOptionProps>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};


const Sort = ({ selectOptions, onChange, value }: SortProps) => {
  return (
    <select className="sort-value" id="sort" onChange={onChange} value={value}>
      {selectOptions.map((option) => (
        <SortOption
          key={option.value?.toString()}
          value={option.value}
          disabled={option.disabled}
          children={option.children}
        />
      ))}
    </select>
  );
};

export default Sort;
