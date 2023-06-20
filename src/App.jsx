import { Home } from "@page/Home";
import { useData } from "@hooks/useData";

export const App = () => {
  const data = useData();
  console.log(data);
  return <Home />;
};
