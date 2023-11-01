import React, { useContext } from "react";
import Link from "next/link";

// context for light and dark mode
import { ColorModeContext } from "../theme/MUI_MODE";

// mui
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

// redux
import { useDispatch, useSelector } from "react-redux";
import { IsInCart, QuantityCount } from "../helpers/functions";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { mode } = useContext(ColorModeContext);
  // isMobile
  const isMobile = useMediaQuery("(max-width:600px)");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [hasWindow, setHasWindow] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const addHandler = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const plusHandler = () => {
    dispatch({ type: "PLUS", payload: product });
  };

  const minusHandler = () => {
    dispatch({ type: "MINUS", payload: product });
  };

  const removeHandler = () => {
    dispatch({ type: "REMOVE", payload: product });
  };

  return (
    <>
      <Card
        sx={{
          margin: "auto",
          width: isMobile ? "80%" : 230,

          borderRadius: "10px",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Link href={`/products/${product.id}`}>
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
              <Image src={product.image} width="130px" height="150px" />
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
                    backgroundColor: state?.config?.primaryColor || "#1BFBB5",
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
                {product.price}.00 KWD
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
              {hasWindow && QuantityCount(state, product.id) === 1 && (
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
                  sx={{
                    width: "100%",
                    borderRadius: "11px",
                    backgroundColor: "transparent",
                    border: "1px solid #1BFBB5",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#1BFBB5",
                      color: "white",
                    },
                  }}
                  onClick={() => addHandler(product)}
                >
                  Add to cart
                </Button>
              )}
            </CardActions>
          </CardActionArea>
        </Link>
      </Card>
      {/* <Card
        sx={{
          width: 280,
          height: 420,
          borderRadius: "10px",
        }}
      >
        <Link href={`/products/${product.id}`}>
          <CardActionArea>
            <CardMedia
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            >
              <Box
                component="img"
                src={product.image}
                width="130px"
                height="150px"
              />
            </CardMedia>
            <CardContent>
              <Typography
                variant="body1"
                component="h2"
                fontWeight={600}
                mt="5px"
                mb="10px"
              >
                {product.title.slice(0, 25)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                price:{" "}
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    marginLeft: "5px",
                  }}
                >
                  ${product.price}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: "20px",
          }}
        >
          {hasWindow && QuantityCount(state, product.id) === 1 && (
            <Box sx={{ cursor: "pointer" }} onClick={removeHandler}>
              <DeleteIcon
                sx={{
                  fontSize: "35px",
                  color: "#0288d1",
                  "&:hover": { color: "#01579b" },
                }}
              />
            </Box>
          )}

          {hasWindow && QuantityCount(state, product.id) > 1 && (
            <Box sx={{ cursor: "pointer" }} onClick={minusHandler}>
              <IndeterminateCheckBoxIcon
                sx={{
                  fontSize: "35px",
                  color: "#0288d1",
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
            <Box sx={{ cursor: "pointer" }} onClick={plusHandler}>
              <AddBoxIcon
                sx={{
                  fontSize: "35px",
                  color: "#0288d1",
                  "&:hover": { color: "#01579b" },
                }}
              />
            </Box>
          ) : (
            <Button
              size="small"
              variant="contained"
              color="info"
              onClick={addHandler}
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      </Card> */}
    </>
  );
};

export default ProductCard;
