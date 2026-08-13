import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 0, retry: 1 } } });

export default function AppProviders({ children }) {
  return <DarkModeProvider><QueryClientProvider client={queryClient}>
    <GlobalStyles />{children}<ReactQueryDevtools initialIsOpen={false} /><Toaster position="top-center" gutter={12} />
  </QueryClientProvider></DarkModeProvider>;
}
