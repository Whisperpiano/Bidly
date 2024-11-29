import { LinkProps } from "react-router-dom";
import { AuthGuard } from "../../utils/AuthGuard";
import { useModalStore } from "../../store/modal";
import { Link } from "react-router-dom";

interface AuthGuardLinkProps extends LinkProps {
  to: string;
}

export default function AuthGuardLink({
  to,
  children,
  ...props
}: AuthGuardLinkProps) {
  const isLoggedIn = AuthGuard();
  const handleOpenLogin = useModalStore((state) => state.handleLoginOpen);

  const handleAuthClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      handleOpenLogin();
    }
  };

  return (
    <Link to={to} onClick={handleAuthClick} {...props}>
      {children}
    </Link>
  );
}
