import { useMutation, useQueryClient } from "@tanstack/react-query";
import { portalUrl } from "@tis/config/urls";
import { logout as logoutApi } from "./apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      window.location.assign(portalUrl("/login"));
    },
  });

  return { logout, isLoading };
}
