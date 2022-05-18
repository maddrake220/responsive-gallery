import Isotope from "isotope-layout";
import { useEffect } from "react";
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
  useEffect(() => {
    window.addEventListener("load", () => {
      new Isotope("section", {
        itemSelector: "article",
        masonry: {
          columnWidth: "article",
        },
        transitionDuration: "0.5s",
      });
    });
  }, []);
  return (
    <main>
      <ul>
        <li>
          <a href="#" className="on">
            ALL
          </a>
        </li>
        <li>
          <a href="#">ODD</a>
        </li>
        <li>
          <a href="#">EVENT</a>
        </li>
      </ul>{" "}
      <section>
        {hits?.map((hit) => {
          return (
            <article key={hit.id}>
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
