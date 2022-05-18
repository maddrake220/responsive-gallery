import React from "react";
import "./content.scss";
const Content = () => {
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
    </main>
  );
};

export default Content;
