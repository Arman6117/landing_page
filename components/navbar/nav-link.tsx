import Link from "next/link";

interface NavLinkProps {
    children?:React.ReactNode;
    href:string;
}

export const NavLink = ({href,children}:NavLinkProps) => {
  return (
    <a href={href} className="text-xs hover:text-primaryOrange transition-colors">
      {children}
    </a>
  )
}

