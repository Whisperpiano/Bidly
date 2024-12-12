import { useAuthStore } from "../store/userStore";

export const AuthGuard = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  if (!accessToken) {
    return false;
  }
  return true;
};
