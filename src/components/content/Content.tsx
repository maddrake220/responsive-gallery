import Isotope from "isotope-layout";
import { useEffect, useState } from "react";
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

const Content = ({ hits }: ContentProps) => {
  const [grid, setGrid] = useState<Isotope>();
  const [selectedFilter, setSelectedFilter] = useState<"*" | ".odd" | ".even">(
    "*"
  );
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

    if (event.currentTarget.classList.contains("on")) {
      return;
    }
    const filter = event.target.getAttribute("href");

    setSelectedFilter(filter);

    grid?.arrange({ filter });
  };
  return (
    <main>
      <ul>
        <li className={selectedFilter === "*" ? "on" : "off"} onClick={onClick}>
          <a href="*">ALL</a>
        </li>
        <li
          className={selectedFilter === ".odd" ? "on" : "off"}
          onClick={onClick}
        >
          <a href=".odd">ODD</a>
        </li>
        <li
          className={selectedFilter === ".even" ? "on" : "off"}
          onClick={onClick}
        >
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
