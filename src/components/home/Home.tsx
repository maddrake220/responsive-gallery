import React, { useEffect, useState } from "react";
import {
  fetchPixabay,
  URL,
  IMAGE_TYPE,
  LANG,
  PAGE,
  PER_PAGE,
  SEARCH_TERM,
  ORDER,
  ORIENTATION,
} from "../../utils/fetchPixabay";
import Content from "../content/Content";
import Header from "../header/Header";

type TPixabay = {
  hits: [];
};

const Home = () => {
  const [data, setData] = useState<TPixabay>();

  useEffect(() => {
    fetchPixabay(
      `${URL}${SEARCH_TERM}${""}${IMAGE_TYPE}photo${ORDER}${"latest"}${ORIENTATION}${"all"}${PER_PAGE}${"20"}${PAGE}${"1"}${LANG}ko`
    ).then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div>
      <Header />
      <Content hits={data?.hits} />
    </div>
  );
};

export default Home;
