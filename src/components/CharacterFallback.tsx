import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";

const CharacterFallback = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(100);
  }, []);

  return null;
};

export default CharacterFallback;
