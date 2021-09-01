import React from "react";
import { useSelector } from "react-redux";
import ProductSummary from "../../components/product_summary/ProductSummary";
import About from "../../components/about/About";
import PageLinks from "../../components/page_links/PageLinks";
import CategoryStyles from "./CategoryStyles";

function Category(props) {
  const classes = CategoryStyles();
  const data = useSelector((state) => state.data);
  const categoryName = props.routeprops.match.params.category;

  // go through data
  // find ones with category set to the same category passed down as a the prop
  const categoryData = data.filter((item) => item.category === categoryName);

  //rearrange items to bring new products first in the list
  const sortedData = categoryData.sort((a, b) => {
    if (a.new === false && b.new === true) {
      return 1;
    } else if (a.new === true && b.new === false) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      <div className={classes.page_header}>
        <h4>{categoryName.toUpperCase()}</h4>
      </div>

      {/* render the items in that category */}
      {sortedData.map((product) => (
        <ProductSummary product={product} key={product.name} />
      ))}

      <PageLinks />
      <About />
    </div>
  );
}

export default Category;
