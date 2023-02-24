import logo from "~/assets/svg/dobu-logo.svg";
import NavBarLink from "./NavBarlink";

const NavBar = () => {
  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img className="h-16 w-auto" src={logo} alt="Dobu Martial Arts Gym" />
        </div>

        <div>
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div>
        <NavBarLink url="/">Home</NavBarLink>
        <NavBarLink url="/about">Abobut Us</NavBarLink>
        <NavBarLink url="/classes">Classes</NavBarLink>
        <NavBarLink url="/membership">Membership</NavBarLink>
        <NavBarLink url="/login">Login</NavBarLink>
      </div>
    </header>
  );
};

export default NavBar;
