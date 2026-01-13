import { QueryClient } from "@tanstack/react-query";
import { QUERY_CONFIG } from "../constants";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_CONFIG.QUERIES.STALE_TIME,
      gcTime: QUERY_CONFIG.QUERIES.GC_TIME,
      retry: QUERY_CONFIG.QUERIES.RETRY,
      refetchOnWindowFocus: QUERY_CONFIG.QUERIES.REFETCH_ON_WINDOW_FOCUS,
    },
    mutations: {
      retry: QUERY_CONFIG.QUERIES.RETRY,
    },
  },
});
