import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

// redux
import { useDispatch, useSelector } from "react-redux";

// rating stare
import { RatingStar } from "rating-star";

// helpers
import { IsInCart, QuantityCount } from "../../helpers/functions";

// mui
import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

import verifyIcon from "../../public/images/check.png";
import hoursIconIcon from "../../public/images/48-hours.png";
import securityIcon from "../../public/images/security.png";
import deliveryIcon from "../../public/images/fast-delivery.png";
import originalIcon from "../../public/images/original.png";

import displayIcon from "../../public/images/display.png";
import cameraIcon from "../../public/images/camera.png";
import batteryIcon from "../../public/images/battery.png";
import chipIcon from "../../public/images/chip.png";

import profile1 from "../../public/images/profile1.png";
import profile2 from "../../public/images/profile2.png";
import profile3 from "../../public/images/profile3.png";
import profile4 from "../../public/images/profile4.png";
import logo from "../../public/images/logo2.png";

import { content as products } from "../../dummy-data/data";
import ProductSliderComponent from "../../components/Product-Slider";

const ProductDetail = ({ product }) => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const router = useRouter();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
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
      <Box
        position="relative"
        maxWidth="1152px"
        m="auto"
        py={isTablet ? "5px" : "40px"}
        px={3}
      >
        {/* back to previous page */}
        <Box position="absolute" left="2" top="2" pt="2px" zIndex="10">
          <Button onClick={() => router.back()}>
            <ArrowBackIcon sx={{ fontSize: isTablet ? "35px" : "50px" }} />
          </Button>
        </Box>

        {/* product Detail */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection={isTablet ? "column" : "row"}
          justifyContent="center"
          gap={isTablet ? "40px" : "100px"}
          bgcolor={"#D9D9D9"}
          borderRadius={"10px"}
          py="10px"
          mb={"30px"}
        >
          {/* product Image */}
          <Box
            width={isTablet ? "80%" : "50%"}
            textAlign={isTablet ? "center" : "end"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={product.image}
              alt="productImage"
              width={340}
              height={380}
            />
          </Box>

          {/* Product information */}
          <Box
            width={isTablet ? "90%" : "50%"}
            pt={isTablet ? "0px" : "20px"}
            m={"auto"}
          >
            <Typography
              variant={isTablet ? "h6" : "h3"}
              component="h1"
              color={"#000000"}
              fontWeight={500}
              mb={isTablet ? "0px" : "10px"}
            >
              {product.title}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap="5px"
              mb={isTablet ? "0px" : "10px"}
            >
              <Typography variant="h6" component="h3" fontWeight={600}>
                5.0
              </Typography>
              <RatingStar
                colors={{ mask: "#FCC419" }}
                size={25}
                id="123"
                maxScore={5}
                rating={5}
              />
              <Typography variant="h6" component="h3" fontWeight={400}>
                120 Ratings
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              mb={isTablet ? "0px" : "10px"}
            >
              <Image src={verifyIcon} alt="icon" width={24} height={24} />
              <Typography variant="h6" component="h3" fontWeight={400}>
                100 % Verified
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent={"flex-start"}
              gap="10px"
              mb={isTablet ? "0px" : "10px"}
            >
              <Typography variant="h6" component="h3" fontWeight={400}>
                {product.price}.00 KWD{" "}
              </Typography>
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
            </Box>

            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent={"flex-start"}
              gap="10px"
              mb={isTablet ? "0px" : "10px"}
            >
              <Box
                width={"60px"}
                height={"80px"}
                borderRadius={"10px"}
                border={"1px solid #2F2F2F"}
                bgcolor={"white"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Box
                  width={"30px"}
                  height={"30px"}
                  border={"1px solid #2F2F2F"}
                  borderRadius={"100%"}
                  bgcolor={"#93A7BF"}
                  m={"auto"}
                />
                <Typography variant="h6" component="h6" fontWeight={400}>
                  Blue
                </Typography>
              </Box>
              <Box
                width={"60px"}
                height={"80px"}
                borderRadius={"10px"}
                bgcolor={"white"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Box
                  width={"30px"}
                  height={"30px"}
                  borderRadius={"100%"}
                  bgcolor={"#F6B7D9"}
                  m={"auto"}
                />
                <Typography variant="h6" component="h6" fontWeight={400}>
                  Pink
                </Typography>
              </Box>
              <Box
                width={"60px"}
                height={"80px"}
                borderRadius={"10px"}
                bgcolor={"white"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Box
                  width={"30px"}
                  height={"30px"}
                  borderRadius={"100%"}
                  bgcolor={"#077018"}
                  m={"auto"}
                />
                <Typography variant="h6" component="h6" fontWeight={400}>
                  Green
                </Typography>
              </Box>
              <Box
                width={"60px"}
                height={"80px"}
                borderRadius={"10px"}
                bgcolor={"white"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
              >
                <Box
                  width={"30px"}
                  height={"30px"}
                  borderRadius={"100%"}
                  border={"1px solid lightgray"}
                  bgcolor={"#FFFFFF"}
                  m={"auto"}
                />
                <Typography variant="h6" component="h6" fontWeight={400}>
                  White
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={"10px"}
              justifyContent="flex-start"
            >
              <Button
                size="large"
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  color: "white",
                  px: 5,
                }}
                onClick={addHandler}
              >
                Buy It Now
              </Button>
              <Box
                my={isTablet ? "10px" : "20px"}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                {hasWindow && QuantityCount(state, product.id) === 1 && (
                  <Box sx={{ cursor: "pointer" }} onClick={removeHandler}>
                    <DeleteIcon
                      sx={{
                        fontSize: "33.2px",
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
                        fontSize: "33.2px",
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
                        fontSize: "33.2px",
                        color: "#0288d1",
                        "&:hover": { color: "#01579b" },
                      }}
                    />
                  </Box>
                ) : (
                  <Button
                    size="large"
                    variant="contained"
                    color="info"
                    sx={{
                      borderRadius: "10px",
                      px: 5,
                    }}
                    onClick={addHandler}
                  >
                    Add to cart
                  </Button>
                )}
              </Box>
            </Box>

            <Typography variant="body1" component="h3" fontWeight={400}>
              Availability{" "}
              <strong style={{ fontSize: "24px", fontWeight: 500 }}>
                In Stock
              </strong>
            </Typography>
          </Box>
        </Box>
        {/* 2nd section */}
        <Box
          display="flex"
          alignItems="center"
          flexDirection={isTablet ? "column" : "row"}
          justifyContent="center"
          gap={isTablet ? "40px" : "100px"}
          bgcolor={"#D9D9D9"}
          borderRadius={"10px"}
          py="30px"
          my={"30px"}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"20px"}
              >
                <Image
                  src={hoursIconIcon}
                  alt="productImage"
                  width={isMobile ? 50 : 90}
                  height={isMobile ? 60 : 100}
                />
                <Typography
                  variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                  component="h4"
                  color={"#000000"}
                  fontWeight={500}
                  textAlign={"center"}
                >
                  48 Hours Delivery
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"20px"}
              >
                <Image
                  src={securityIcon}
                  alt="productImage"
                  width={isMobile ? 50 : 90}
                  height={isMobile ? 60 : 100}
                />
                <Typography
                  variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                  component="h4"
                  color={"#000000"}
                  fontWeight={500}
                  textAlign={"center"}
                >
                  1 year Warranty
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"20px"}
              >
                <Image
                  src={deliveryIcon}
                  alt="productImage"
                  width={isMobile ? 50 : 90}
                  height={isMobile ? 60 : 100}
                />
                <Typography
                  variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                  component="h4"
                  color={"#000000"}
                  fontWeight={500}
                  textAlign={"center"}
                >
                  Free Delivery
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"20px"}
              >
                <Image
                  src={originalIcon}
                  alt="productImage"
                  width={isMobile ? 50 : 90}
                  height={isMobile ? 60 : 100}
                />
                <Typography
                  variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                  component="h4"
                  color={"#000000"}
                  fontWeight={500}
                  textAlign={"center"}
                >
                  100 % Original
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* 3rd section */}
      <Box textAlign={"left"}>
        <Typography
          maxWidth="1152px"
          m="auto"
          px={3}
          variant={isMobile ? "body1" : isTablet ? "h5" : "h4"}
          component="h4"
          color={"#000000"}
          fontWeight={600}
        >
          Similar Devices
        </Typography>
        <ProductSliderComponent
          category={product.category}
          hideDropdown={true}
        />
      </Box>
      <Box
        position="relative"
        maxWidth="1152px"
        m="auto"
        py={isTablet ? "5px" : "40px"}
        px={3}
      >
        {/* 4th section */}
        <Box my={4}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="center"
            gap={isMobile ? "20px" : "30px"}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h4"
              fontWeight={500}
              color={"#0A6BF8"}
            >
              Specifications
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h4"
              color={"#000000"}
              fontWeight={500}
            >
              Similar Products
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h4"
              color={"#000000"}
              fontWeight={500}
            >
              Reviews
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h4"
              color={"#000000"}
              fontWeight={500}
            >
              Laptops
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h4"
              color={"#000000"}
              fontWeight={500}
            >
              FAQs
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection={isTablet ? "column" : "row"}
            justifyContent="center"
            gap={isTablet ? "40px" : "100px"}
            bgcolor={"#D9D9D9"}
            borderRadius={"10px"}
            py="30px"
            my={"30px"}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={3}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"20px"}
                >
                  <Image
                    src={displayIcon}
                    alt="productImage"
                    width={isMobile ? 50 : 90}
                    height={isMobile ? 60 : 100}
                  />
                  <Typography
                    variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    Display
                  </Typography>
                  <Typography
                    variant={isMobile ? "body3" : "body1"}
                    component="h6"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    6.7 inch OLED{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"20px"}
                >
                  <Image
                    src={cameraIcon}
                    alt="productImage"
                    width={isMobile ? 50 : 90}
                    height={isMobile ? 60 : 100}
                  />
                  <Typography
                    variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    Camera
                  </Typography>
                  <Typography
                    variant={isMobile ? "body3" : "body1"}
                    component="h6"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    12 MP, 4K 60fps
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"20px"}
                >
                  <Image
                    src={batteryIcon}
                    alt="productImage"
                    width={isMobile ? 50 : 90}
                    height={isMobile ? 60 : 100}
                  />
                  <Typography
                    variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    Battery
                  </Typography>
                  <Typography
                    variant={isMobile ? "body3" : "body1"}
                    component="h6"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    4352 mAH
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"20px"}
                >
                  <Image
                    src={chipIcon}
                    alt="productImage"
                    width={isMobile ? 50 : 90}
                    height={isMobile ? 60 : 100}
                  />
                  <Typography
                    variant={isMobile ? "body2" : isTablet ? "h6" : "h5"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    RAM
                  </Typography>
                  <Typography
                    variant={isMobile ? "body3" : "body1"}
                    component="h6"
                    color={"#000000"}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    6 gb
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* 5th section */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"20px"}
              bgcolor={"#D9D9D9"}
              borderRadius={"20px"}
              py={4}
              px={3}
            >
              <Box display={"flex"} alignItems={"flex-start"} gap={"5px"}>
                <Image
                  src={profile1}
                  alt="profileImage"
                  width={isMobile ? 50 : 70}
                  height={isMobile ? 60 : 70}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  <Typography
                    variant={isMobile ? "body1" : isTablet ? "h5" : "h4"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Jason Admas
                  </Typography>
                  <RatingStar
                    colors={{ mask: "#FCC419" }}
                    size={25}
                    maxScore={5}
                    rating={5}
                  />
                </Box>
              </Box>
              <Typography
                variant={"h6"}
                component="h4"
                color={"#2F2F2F"}
                fontWeight={500}
              >
                I'm extremely happy with both the product and the quality service
                they have provided me & they really do save me money. I'd highly
                recommend this to each and everyone. We have a canine show winning
                female puppy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"20px"}
              bgcolor={"#D9D9D9"}
              borderRadius={"20px"}
              py={4}
              px={3}
            >
              <Box display={"flex"} alignItems={"flex-start"} gap={"5px"}>
                <Image
                  src={profile2}
                  alt="profileImage"
                  width={isMobile ? 50 : 70}
                  height={isMobile ? 60 : 70}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  <Typography
                    variant={isMobile ? "body1" : isTablet ? "h5" : "h4"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Anna Jade
                  </Typography>
                  <RatingStar
                    colors={{ mask: "#FCC419" }}
                    size={25}
                    maxScore={5}
                    rating={5}
                  />
                </Box>
              </Box>
              <Typography
                variant={"h6"}
                component="h4"
                color={"#2F2F2F"}
                fontWeight={500}
              >
                I'm extremely happy with both the product and the quality service
                they have provided me & they really do save me money. I'd highly
                recommend this to pet owners. We have a canine show winning female
                puppy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"20px"}
              bgcolor={"#D9D9D9"}
              borderRadius={"20px"}
              py={4}
              px={3}
            >
              <Box display={"flex"} alignItems={"flex-start"} gap={"5px"}>
                <Image
                  src={profile3}
                  alt="profileImage"
                  width={isMobile ? 50 : 70}
                  height={isMobile ? 60 : 70}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  <Typography
                    variant={isMobile ? "body1" : isTablet ? "h5" : "h4"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Kinta Kunte
                  </Typography>
                  <RatingStar
                    colors={{ mask: "#FCC419" }}
                    size={25}
                    maxScore={5}
                    rating={5}
                  />
                </Box>
              </Box>
              <Typography
                variant={"h6"}
                component="h4"
                color={"#2F2F2F"}
                fontWeight={500}
              >
                I'm extremely happy with both the product and the quality service
                they have provided me & they really do save me money. I'd highly
                recommend this to each and everyone. We have a canine show winning
                female puppy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              gap={"20px"}
              bgcolor={"#D9D9D9"}
              borderRadius={"20px"}
              py={4}
              px={3}
            >
              <Box display={"flex"} alignItems={"flex-start"} gap={"5px"}>
                <Image
                  src={profile4}
                  alt="profileImage"
                  width={isMobile ? 50 : 70}
                  height={isMobile ? 60 : 70}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  <Typography
                    variant={isMobile ? "body1" : isTablet ? "h5" : "h4"}
                    component="h4"
                    color={"#000000"}
                    fontWeight={600}
                    textAlign={"center"}
                  >
                    Jason Admas
                  </Typography>
                  <RatingStar
                    colors={{ mask: "#FCC419" }}
                    size={25}
                    maxScore={5}
                    rating={5}
                  />
                </Box>
              </Box>
              <Typography
                variant={"h6"}
                component="h4"
                color={"#2F2F2F"}
                fontWeight={500}
              >
                I'm extremely happy with both the product and the quality service
                they have provided me & they really do save me money. I'd highly
                recommend this to each and everyone. We have a canine show winning
                female puppy.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Button
              size="large"
              variant="contained"
              sx={{
                borderRadius: "10px",
                backgroundColor: "#D9D9D9",
                color: "#2F2F2F",
                px: 5,
              }}
            >
              Show More
            </Button>
          </Grid>
        </Grid>

        <Box
          bgcolor={"#D9D9D9"}
          width={"100%"}
          position={"relative"}
          overflow={"hidden"}
          display="flex"
          alignItems="flex-start"
          flexDirection={"column"}
          justifyContent="flex-start"
          borderRadius={"10px"}
          py="30px"
          my={"30px"}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="h4"
            fontWeight={500}
            color={"#2F2F2F"}
            textAlign={"left"}
            mx={3}
          >
            Ask a question
          </Typography>
          <TextField
            sx={{
              maxWidth: "1000px",
              mx: 3,
            }}
            fullWidth
            multiline
            rows={4}
            placeholder="Write your question..."
            variant="outlined"
          />
        </Box>
        {/*  logo image  */}
        <Box sx={{ width: "100%", margin: "auto", textAlign: "center", my: 10 }}>
          <Image src={logo} />
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const data = products.find((item) => item?.id == params.productId);

  return {
    props: {
      //   product: {},
      product: data,
    },
  };
};
