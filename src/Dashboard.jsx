import { Link, Outlet } from "react-router-dom";
import Brand from "./pages/shared/Brand";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Dashboard = () => {
  // const { data: onGoing, isLoading:isLoadingOnGoing } = useQuery({
  //   queryKey: ["onGoing"],
  //   queryFn: async () => {
  //     const res = await axios.get("/task.json");

  //     console.log(res?.data);

  //     return res?.data;
  //   },
  // });

  return (
    <main className="flex min-h-screen">
      <div className="drawer lg:drawer-open">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />

        {/* Page content here */}
        <div className="drawer-content">
          <label
            htmlFor="dashboard"
            className="btn btn-ghost drawer-button lg:hidden fixed right-0 top-0 z-50 text-[#ffb104]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <Outlet />
        </div>

        {/* Navigation side bar */}
        <div className="drawer-side">
          <label
            htmlFor="dashboard"
            aria-label="close sidebar"
            className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
            <Brand />

            <div className="divider divider-neutral"></div>

            <ul className="menu menu-sm w-full">
              <li>
                <Link
                  className="py-2 hover:border-b rounded-none"
                  to="/dashboard/add-task">
                  Add Task
                </Link>
              </li>
              <li>
                <HashLink smooth to="/#to-do-list">
                  To Do
                </HashLink>
                {/* <Link
                  className="py-2 hover:border-b rounded-none"
                  to="/dashboard">
                  To Do
                </Link> */}
              </li>
              <li>
                <HashLink smooth to="/#on-going-tasks">
                  On Going Tasks
                </HashLink>
                {/* <Link
                  className="py-2 hover:border-b rounded-none"
                  to="/dashboard/running-tasks">
                  On Going Tasks
                </Link> */}
              </li>
              <li>
                <HashLink smooth to="/#completed-tasks">
                  On Going Tasks
                </HashLink>
                {/* <Link
                  className="py-2 hover:border-b rounded-none"
                  to="/dashboard/completed-tasks">
                  Completed Tasks
                </Link> */}
              </li>
            </ul>

            <div className="divider divider-neutral"></div>

            <ul className="menu menu-sm w-full">
              <li>
                <Link className="py-2 hover:border-b rounded-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="py-2 hover:border-b rounded-none" to="/tasks">
                  Tasks
                </Link>
              </li>
              <li>
                <Link className="py-2 hover:border-b rounded-none" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 hover:border-b rounded-none"
                  to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
