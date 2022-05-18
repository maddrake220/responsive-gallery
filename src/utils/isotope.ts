import Isotope from "isotope-layout";

export const isotope = () => {
  return new Isotope("section", {
    itemSelector: "article",
    masonry: {
      columnWidth: "article",
    },
    transitionDuration: "0.5s",
  });
};
