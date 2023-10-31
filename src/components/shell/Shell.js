import { RouterProvider } from 'react-router-dom';
import './Shell.scss';
import { router } from '../../routes';

const Shell = () => {
  return (
    <div className='Shell'>
      <RouterProvider router={router} />
    </div>
  );
};

export default Shell;
