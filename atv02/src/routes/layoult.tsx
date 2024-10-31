import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="main-content">
        <Outlet /> 
      </div>
    </div>
  )
}

export default Layout