import Isotope from "isotope-layout";
import React, { MouseEventHandler, useEffect, useMemo, useState } from "react";
import "./content.scss";
type THits = {
  id: number;
  webformatURL: string;
  tags: string;
  user: string;
};

type ContentProps = {
  hits: THits[] | undefined;
};

const grid = new Isotope("section", {
  itemSelector: "article",
  masonry: {
    columnWidth: "article",
  },
  transitionDuration: "0.5s",
});

const Content = ({ hits }: ContentProps) => {
  const [grid, setGrid] = useState<Isotope>();

  useEffect(() => {
    window.addEventListener("load", () => {
      const grid = new Isotope("section", {
        itemSelector: "article",
        masonry: {
          columnWidth: "article",
        },
        transitionDuration: "0.5s",
      });

      setGrid(grid);
    });
  }, []);

  const onClick = (event: any) => {
    event.preventDefault();

    const filter = event.target.getAttribute("href");

    grid?.arrange({ filter });
  };
  return (
    <main>
      <ul>
        <li className="on" onClick={onClick}>
          <a href="*">ALL</a>
        </li>
        <li onClick={onClick}>
          <a href=".odd">ODD</a>
        </li>
        <li onClick={onClick}>
          <a href=".even">EVENT</a>
        </li>
      </ul>{" "}
      <section>
        {hits?.map((hit, index) => {
          return (
            <article className={index % 2 === 0 ? "even" : "odd"} key={hit.id}>
              <div className="inner">
                <img src={hit.webformatURL} alt={hit.webformatURL} />
                <h2>{hit.user}</h2>
                <p>{hit.tags}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Content;
