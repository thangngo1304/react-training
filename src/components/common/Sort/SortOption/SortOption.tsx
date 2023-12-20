import { ReactNode } from 'react';

export type SortOptionProps = {
  value?: string;
  children?: ReactNode;
  disabled?: boolean;
};

const SortOption = ({ value, children, disabled }: SortOptionProps) => {
  return (
    <option className="sort-item" disabled={disabled} value={value}>
      {children}
    </option>
  );
};

export default SortOption;
