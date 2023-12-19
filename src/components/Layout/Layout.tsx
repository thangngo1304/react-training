// Library
import { useContext } from 'react';

// Context
import { ToastContext } from 'context/toast';

// components
import MainPage from '../../Pages/MainPage';
import { Toast } from '..';

const Layout = () => {
  const { toast } = useContext(ToastContext);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <MainPage />
        </div>
      </div>

      <Toast message={toast.message} toastType={toast.toastType} isShow={toast.isVisible} />
    </>
  );
};

export default Layout;
