import Image from "next/image";
import axios from "axios";

// images
import men from "../public/men.jpg";
import women from "../public/women.jpg";
import electronics from "../public/electronics.jpg";
import jewelery from "../public/jewelery.jpg";

// mui
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

// images
import pSlide1 from "../public/images/p-slide1.png";
import pSlide2 from "../public/images/p-slide2.png";
import pSlide3 from "../public/images/p-slide3.png";
import pSlide4 from "../public/images/p-slide4.png";
import pSlide5 from "../public/images/p-slide5.png";
import pSlide6 from "../public/images/p-slide6.png";
import pSlide7 from "../public/images/p-slide7.png";
import bg from "../public/images/bg.png";

import { useDispatch, useSelector } from "react-redux";
import { IsInCart, QuantityCount } from "../helpers/functions";

// swiper
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ColorModeContext } from "../theme/MUI_MODE";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

const content = [
  {
    id: 1,
    image: pSlide1,
    title: "iphone 14 Pro",
    category: "Mobiles",
    price: "200.000 KWD",
  },
  {
    id: 2,
    image: pSlide2,
    title: "iphone 15 Pro",
    category: "Mobiles",
    price: "200.000 KWD",
  },
  {
    id: 3,
    image: pSlide3,
    title: "iphone 14 Plus",
    category: "Mobiles",
    price: "200.000 KWD",
  },
  {
    id: 4,
    image: pSlide4,
    title: "Beats Studio Pro",
    category: "Headsets",
    price: "200.000 KWD",
  },
  {
    id: 5,
    image: pSlide5,
    title: "Beats Studio Buds +",
    category: "Headsets",
    price: "200.000 KWD",
  },
  {
    id: 6,
    image: pSlide6,
    title: "Beats Studio Buds Pro",
    category: "Headsets",
    price: "200.000 KWD",
  },
  {
    id: 7,
    image: pSlide7,
    title: "Beats Studio Buds",
    category: "Headsets",
    price: "200.000 KWD",
  },
];

const ProductSliderComponent = ({ category }) => {
  const [value, setValue] = useState(category);
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const [products, setProducts] = useState([]);

  const { mode } = useContext(ColorModeContext);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (value && value != "All") {
      setProducts(content.filter((product) => product.category == value));
    } else {
      setProducts(content);
    }
  }, [value]);

  const addHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const plusHandler = (product) => {
    dispatch({ type: "PLUS", payload: product });
  };

  const minusHandler = (product) => {
    dispatch({ type: "MINUS", payload: product });
  };

  const removeHandler = (product) => {
    dispatch({ type: "REMOVE", payload: product });
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        maxWidth: "1352px",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", right: "-130px", bottom: "0px" }}>
        <Image
          src={bg}
          style={{ transform: "rotate(180deg)" }}
          width="250px"
          height="300px"
        />
      </Box>
      <Box
        m="auto"
        maxWidth="1052px"
        position={"inherit"}
        px={`${isTablet ? "10px" : "5px"}`}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
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
              value={value}
              onChange={(event) => setValue(event.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Mobiles">Mobiles</MenuItem>
              <MenuItem value="Headsets">Headsets</MenuItem>
            </Select>
          </FormControl>
          {!isMobile && (
            <>
              <Typography
                variant="text"
                component="h3"
                sx={{ cursor: "pointer", fontSize: "16px" }}
                fontWeight={400}
              >
                Latest
              </Typography>
              <Typography
                variant="text"
                component="h3"
                sx={{ cursor: "pointer", fontSize: "16px" }}
                fontWeight={400}
              >
                Featured
              </Typography>
              <Typography
                variant="text"
                component="h3"
                sx={{ cursor: "pointer", fontSize: "16px" }}
                fontWeight={400}
              >
                Best Sellers
              </Typography>
            </>
          )}
        </Box>

        {products.length > 0 && (
          <Box
            sx={{ width: "100%", position: "relative", textAlign: "center" }}
          >
            <Swiper
              slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
              spaceBetween={0}
              freeMode={false}
              // pagination={{
              //   el: ".swiper-pagination",
              //   clickable: true,
              // }}
              scrollbar={{ draggable: true }}
              modules={[Navigation, Autoplay, FreeMode]}
              loop={true}
              className="categoriesSwiper1"
              navigation
              mousewheel={true}
              keyboard={true}
              style={{
                margin: "auto",
                marginTop: "20px",
                position: "initial",
                width: isMobile ? "100%" : "90%",
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} sx={{ textAlign: "center" }}>
                  <Card
                    sx={{
                      margin: "auto",
                      width: isMobile ? "80%" : 230,

                      borderRadius: "10px",
                      overflow: "hidden",
                      "&:hover": {
                        backgroundColor: isMobile ? "red" : "transparent",
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{
                        textAlign: "center",
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      <CardMedia
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "230px",
                          height: "250px",
                          borderRadius: "10px",
                          backgroundColor: "#D9D9D9",
                          margin: "auto",
                        }}
                      >
                        <Image
                          src={product.image}
                          width="130px"
                          height="150px"
                        />
                      </CardMedia>
                      <CardContent sx={{ textAlign: "left", mb: 0 }}>
                        <Typography variant="body2">
                          {product.category}{" "}
                          <span
                            style={{
                              fontWeight: "500",
                              fontSize: "11px",
                              padding: "5px 5px",
                              marginLeft: "5px",
                              borderRadius: "5px",
                              backgroundColor:
                                state?.config?.primaryColor || "#1BFBB5",
                            }}
                          >
                            20% OFF
                          </span>
                        </Typography>
                        <Typography
                          variant="body1"
                          component="h2"
                          fontWeight={600}
                          mt="5px"
                          mb="10px"
                        >
                          {product.title.slice(0, 25)}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "600",
                            fontSize: "15px",
                            color: state?.config?.primaryColor || "#0A6BF8",
                          }}
                        >
                          {product.price}
                        </Typography>
                      </CardContent>

                      <CardActions
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: "10px",
                          py: 0,
                          width: "100%",
                        }}
                      >
                        {hasWindow &&
                          QuantityCount(state, product.id) === 1 && (
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() => removeHandler(product)}
                            >
                              <DeleteIcon
                                sx={{
                                  fontSize: "35px",
                                  color: "#1BFBB5",
                                  "&:hover": { color: "#01579b" },
                                }}
                              />
                            </Box>
                          )}

                        {hasWindow && QuantityCount(state, product.id) > 1 && (
                          <Box
                            sx={{ cursor: "pointer" }}
                            onClick={() => minusHandler(product)}
                          >
                            <IndeterminateCheckBoxIcon
                              sx={{
                                fontSize: "35px",
                                color: "#1BFBB5",
                                "&:hover": { color: "#01579b" },
                              }}
                            />
                          </Box>
                        )}

                        {hasWindow && QuantityCount(state, product.id) > 0 && (
                          <Typography variant="h6" px="10px" fontWeight={600}>
                            {QuantityCount(state, product.id)}
                          </Typography>
                        )}

                        {hasWindow && IsInCart(state, product.id) ? (
                          <Box
                            sx={{ cursor: "pointer" }}
                            onClick={() => plusHandler(product)}
                          >
                            <AddBoxIcon
                              sx={{
                                fontSize: "35px",
                                color: "#1BFBB5",
                                "&:hover": { color: "#01579b" },
                              }}
                            />
                          </Box>
                        ) : (
                          <Button
                            variant="contained"
                            sx={{ width: "100%", backgroundColor: "#1BFBB5" }}
                            color="info"
                            onClick={() => addHandler(product)}
                          >
                            Add to cart
                          </Button>
                        )}
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductSliderComponent;
