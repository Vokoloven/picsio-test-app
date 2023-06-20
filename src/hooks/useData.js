import { useEffect, useState, useRef } from "react";
import { getCommentsApi } from "@service/api.service";

export const useData = (deleteComment) => {
  const [data, setData] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const getData = async () => {
      const response = await getCommentsApi();
      const { comments } = response;
      setData(comments);
    };
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    getData();
  }, []);

  useEffect(() => {
    setData(deleteComment);
  }, [deleteComment]);

  return data;
};
