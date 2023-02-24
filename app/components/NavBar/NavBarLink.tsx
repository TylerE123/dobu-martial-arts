import { Link } from "@remix-run/react";

type NavBarLinkProps = {
  children: React.ReactNode;
  url: string;
};

const NavBarLink = ({ children, url }: NavBarLinkProps) => {
  return (
    <Link to={url} className="block text-white">
      {children}
    </Link>
  );
};

export default NavBarLink;
