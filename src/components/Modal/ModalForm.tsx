import { ReactNode } from 'react';

import './product-modal.css';

type ModalProps = {
  title: string;
  children?: ReactNode;
  classTitle?: string;
};

const ModalForm = ({ title, children, classTitle }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="manage-modal">
        <h2 className={`modal-title ${classTitle}`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default ModalForm;
