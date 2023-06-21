import { useEffect, useState, useRef } from "react";
import { getCommentsApi } from "@service/api.service";

export const useData = (deleteComment) => {
  const [data, setData] = useState(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const getData = async () => {
      const response = await getCommentsApi();
      const { comments } = response;
      setData(comments);
    };
    if (isFirstRender.current) {
      isFirstRender.current = false;
      getData();
      return;
    }
  }, []);

  useEffect(() => {
    setData(deleteComment);
  }, [deleteComment]);

  return data;
};
