import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "./apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      //queryClient.setQueryData(['user'], user.user);
      queryClient.setQueryData(["user"], user);
        // console.log("Logged in user:", user);
      // navigate("/dashboard", { replace: true });

      const returnUrl = new URLSearchParams(window.location.search).get("returnUrl");
      let destination = "/";

      if (returnUrl) {
        const target = new URL(returnUrl, window.location.origin);
        const isSameOrigin = target.origin === window.location.origin;
        const isLocalApp = ["localhost", "127.0.0.1"].includes(target.hostname) &&
          ["5100", "5101", "5102", "5103", "5104"].includes(target.port);

        if (isSameOrigin || isLocalApp) destination = target.href;
      }

      window.location.assign(destination);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Неисправна шифра или лозинка");
    },
  });

  return { login, isLoading };
}
