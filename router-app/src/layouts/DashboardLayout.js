import { Outlet, Link } from "react-router-dom";

const Dashboard = ({toggleDarkmode, darkmode}) => {
  return (
    <div className={`dashboard-layout ${darkmode ? 'dark' : ''}`}>
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Back to Home</Link>
        </li>
      </ul>
      <button onClick={toggleDarkmode}>{darkmode ? 'Light mode' : 'Dark mode'}</button>
    </nav>

    <Outlet />

  </div>
  )
};

export default Dashboard;