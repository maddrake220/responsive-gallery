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

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPixabay(
      `${URL}${SEARCH_TERM}${""}${IMAGE_TYPE}photo${ORDER}${"latest"}${ORIENTATION}${"all"}${PER_PAGE}${"20"}${PAGE}${"1"}${LANG}ko`
    ).then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default Home;
