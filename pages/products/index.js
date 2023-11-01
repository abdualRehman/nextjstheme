import { useEffect, useState } from "react";
import axios from "axios";

// mui
import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
// import { Pagination } from "@material-ui/lab";

// component
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";
// import usePagination from "@mui/material/usePagination/usePagination";
import usePagination from "../../helpers/Pagination";
import { content as products } from "../../dummy-data/data";

// const Products = ({ products }) => {
const Products = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [dynamicState, setDynamicState] = useState(products);
  const [category, setCategory] = useState("All");

  let [page, setPage] = useState(1);

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [_data, _setData] = useState(null);
  //   const [count, setCount] = useState(null);

  useEffect(() => {
    if (category === "All") {
      setDynamicState(products);
    } else {
      const filterData = products.filter((item) => item.category === category);
      setDynamicState(filterData);
    }
  }, [category]);

  const PER_PAGE = 6;
  let count, _data;
  count = Math.ceil(dynamicState.length / PER_PAGE);
  _data = usePagination(dynamicState, PER_PAGE);

  useEffect(() => {
    setPage(1);
    _data.jump(1);
  }, [dynamicState]);

  const handleChange = (e, p) => {
    setPage(p);
    _data.jump(p);
  };
  return (
    <Box maxWidth="1152px" m="auto" py={`${isTablet ? "5px" : "40px"}`} px={3}>
      <Box
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
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              px: 3,
              mb: 2,
              alignItems: "center",
            }}
          >
            <FormControl
              sx={{
                m: 1,
                minWidth: 140,
                border: "none",
                color: "black",
                boxShadow: "none",
                fontWeight: 400,
                textAlign: "center",
              }}
              size="small"
            >
              <Select
                variant="outlined"
                labelId="Category"
                id="Category"
                label="All"
                sx={{
                  backgroundColor: "#1BFBB5",
                  border: "none",
                  color: "black",
                  boxShadow: "none",
                  outline: "none",
                  textAlign: "center",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  fontWeight: 400,
                }}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Mobiles">Mobiles</MenuItem>
                <MenuItem value="Headsets">Headsets</MenuItem>
              </Select>
            </FormControl>
            {!isMobile && (
              <Box
                display={"flex"}
                alignItems={"center"}
                width={"100%"}
                gap={"30px"}
                justifyContent={"flex-start"}
              >
                <Typography
                  variant="text"
                  component="h3"
                  sx={{ cursor: "pointer", fontSize: "18px" }}
                  fontWeight={400}
                  color={"#2F2F2F"}
                >
                  Latest
                </Typography>
                <Typography
                  variant="text"
                  component="h3"
                  sx={{ cursor: "pointer", fontSize: "18px" }}
                  fontWeight={400}
                  color={"#2F2F2F"}
                >
                  Featured
                </Typography>
                <Typography
                  variant="text"
                  component="h3"
                  sx={{ cursor: "pointer", fontSize: "18px" }}
                  fontWeight={400}
                  color={"#2F2F2F"}
                >
                  Best Sellers
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            width="100%"
            display="flex"
            flexWrap="wrap"
            gap="15px"
            justifyContent={`${isTablet && "center"}`}
          >
            {_data &&
              _data
                ?.currentData()
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
          >
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "#D9D9D9!important",
                  border: "none",
                },
                "& .Mui-selected": {
                  backgroundColor: "#0A6BF8!important",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0A6BF8!important",
                    color: "white",
                  },
                },
              }}
            />
          </Box>
        </Box>
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
