import { useState } from "react";
import { toast } from "sonner";

function useRefresh(refetch: () => void) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      refetch();
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("Data refreshed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again later.");
    } finally {
      setIsRefreshing(false);
    }
  };

  return { isRefreshing, handleRefresh };
}

export default useRefresh;
