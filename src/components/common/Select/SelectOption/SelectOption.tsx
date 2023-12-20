import { ReactNode } from 'react';

export type SelectOptionProps = {
  value?: string;
  children?: ReactNode;
  disabled?: boolean;
};

const SelectOption = ({ value, children, disabled }: SelectOptionProps) => {
  return (
    <option className="sort-item" disabled={disabled} value={value}>
      {children}
    </option>
  );
};

export default SelectOption;
