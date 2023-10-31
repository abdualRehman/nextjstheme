import { useEffect, useState } from "react";
import axios from "axios";

// mui
import { Pagination, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
// import { Pagination } from "@material-ui/lab";

// component
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";
// import usePagination from "@mui/material/usePagination/usePagination";
import usePagination from "../../helpers/Pagination";

const Products = ({ products }) => {
  const isTablet = useMediaQuery("(max-width:900px)");

  const [dynamicState, setDynamicState] = useState(products);
  let [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [dynamicState]);

  const PER_PAGE = 3;
  let count, _DATA;
  count = Math.ceil(dynamicState.length / PER_PAGE);
  _DATA = usePagination(dynamicState, PER_PAGE);
  console.log(_DATA.currentData());

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Box
      maxWidth="1152px"
      m="auto"
      py={`${isTablet ? "5px" : "40px"}`}
      display="flex"
      justifyContent="space-between"
      gap="10px"
      flexDirection={`${isTablet ? "column" : "row"}`}
    >
      {/* Side bar for filter the products */}
      <Sidebar setDynamicState={setDynamicState} products={products} />

      {/* Products card */}
      <Box width={"100%"}>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          gap="15px"
          justifyContent={`${isTablet && "center"}`}
        >
          {/* {dynamicState.map((product) => ( */}
          {/* {console.log("_date", _DATA)} */}
          {_DATA.currentData().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const result = await axios.get("https://fakestoreapi.com/products");
  const data = result.data;

  return {
    props: {
      products: data,
    },
  };
};
