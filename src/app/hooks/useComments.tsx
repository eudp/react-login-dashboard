import { useEffect, useState } from "react";
import Comment from "../types/comment";
import { getComments } from "../api/commentsApi";

export default function useComments() {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Array<Comment>>([]);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const data = await getComments();
        setComments(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, comments, error };
}
