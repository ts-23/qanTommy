import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@mantine/core/styles.css";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * (60 * 1000), // 1 mins
      gcTime: 5 * (60 * 1000), // 5 mins
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
