import { Home } from "@page/Home";
import { useEffect, useState } from "react";
import { getCommentsApi } from "@service/api.service";

export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCommentsApi();

      setData(data);
    };
    getData();
  }, []);

  console.log(data);

  return <Home />;
};
