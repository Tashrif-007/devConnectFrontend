import { useEffect, useState } from "react";
import { trendingService, type TrendingCategory } from "../services/trendingService";

export const useTrendingCategories = () => {
  const [trendingCategories, setTrendingCategories] = useState<
    TrendingCategory[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await trendingService.fetchTrendingCategories();
        setTrendingCategories(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch trending";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return { trendingCategories, loading, error };
};
