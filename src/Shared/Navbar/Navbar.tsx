import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutSuccess());
    navigate("/auth/login");
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-book">All Book</Link>
      </li>
      {user && (
        <li>
          <Link to="/books/add-book">Add Book</Link>
        </li>
      )}
      <li>
        <Link to="/users">SignUp</Link>
      </li>

      {user ? (
        <button
          onClick={() => handleLogOut()}
          className="px-20 tracking-widest btn btn-outline btn-secondary"
        >
          LogOut
        </button>
      ) : (
        <Link to="/auth/login">
          <button className="px-20 tracking-widest btn btn-primary btn-outline">
            login
          </button>
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-xl normal-case btn btn-ghost">
          Book Store
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 space-x-4 menu menu-horizontal">{navItems}</ul>
      </div>
      {/* <div className="navbar-end">
        {user ? (
          <button
            onClick={() => handleLogOut()}
            className="px-20 tracking-widest btn btn-outline btn-secondary"
          >
            LogOut
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="px-20 tracking-widest btn btn-primary btn-outline">
              login
            </button>
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
