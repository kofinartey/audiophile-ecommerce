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
  console.log(props);
  // go through data
  // find ones with category set to the same category passed down as a the prop
  const categoryData = data.filter((item) => item.category === categoryName);
  return (
    <div>
      <div className={classes.page_header}>
        <h4>{categoryName.toUpperCase()}</h4>
      </div>

      {/* render the items in that category */}
      {categoryData.map((product) => (
        <ProductSummary product={product} key={product.name} />
      ))}

      <PageLinks />
      <About />
    </div>
  );
}

export default Category;
