import './Shell.scss';
import { Router } from '../../routes';
import { RouterProvider } from 'react-router-dom';

const Shell = () => {
  return (
    <div className="Shell">
        <RouterProvider router={Router} />
    </div>
  );
};

export default Shell;
