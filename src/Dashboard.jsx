import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="flex min-h-screen">
      <div className="flex-[1] min-h-full bg-base-300">
        <div className="btn btn-ghost text-xl flex items-center h-min">
          <a
            className="sr-only"
            href="https://www.flaticon.com/free-icons/to-do"
            title="to-do icons">
            To-do icons created by Freepik - Flaticon
          </a>
          <img src="/to-do-list.png" width="60" height="60" alt="logo" />
          TaskWavelet
        </div>

        <div className="divider divider-neutral"></div>

        <ul className="menu menu-sm w-full">
          <li>
            <Link to="/dashboard">Tasks</Link>
          </li>
          <li>
            <Link to="/dashboard/add-task">Add Task</Link>
          </li>
          <li>
            <Link to="/dashboard/running-tasks">On Going Tasks</Link>
          </li>
          <li>
            <Link to="/dashboard/completed-tasks">Completed Tasks</Link>
          </li>
        </ul>
      </div>
      <div className="flex-[3] min-h-full">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
