import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <div className="menu">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/buy">
          Buy
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
