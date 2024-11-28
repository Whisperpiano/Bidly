import { useAuthStore } from "../store/user";

export const AuthGuard = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  if (!accessToken) {
    return false;
  }
  return true;
};
