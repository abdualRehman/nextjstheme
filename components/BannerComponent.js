import Image from "next/image";

// images
import men from "../public/men.jpg";
import women from "../public/women.jpg";
import electronics from "../public/electronics.jpg";
import jewelery from "../public/jewelery.jpg";

// mui
import { Box } from "@mui/system";
import {
  Button,
  Container,
  Typography,
  makeStyles,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Link from "next/link";

// images
import cSlide1 from "../public/images/p-slide6.png";
import cSlide2 from "../public/images/p-slide8.png";
import bg from "../public/images/banner-bg.png";

// swiper
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const useStyles = styled((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    maxWidth: "1352px",
    margin: "auto",
    overflow: "hidden",
    my: 4,
    backgroundColor: "blue",
    backgroundImage: `url(${bg})`,
  },
}));
const BannerComponent = () => {
  const classes = useStyles();

  const isTablet = useMediaQuery("(max-width:900px)");

  const content = [
    {
      img: cSlide1,
      title: "TRAVELS LIGHT, SOUNDS HEAVY",
    },
    {
      img: cSlide2,
      title: "TRAVELS LIGHT SOUNDS, HEAVY",
    },
  ];

  return (
    <Box
      className={classes.root}
      style={{
        backgroundColor: "red",
        backgroundImage: "url(" + bg + ")",
        backgroundSize: "auto",
      }}
    >
      {/* <Box sx={{ position: "absolute" }}>
        <Image
          src={bg}
          style={{
            width: "-webkit-fill-available!important",
            height: "-webkit-fill-available!important",
          }}
        />
      </Box> */}
      <Box m="auto" position={"inherit"}>
        <Box sx={{ objectFit: "inherit", py: 4 }}>
          <Box
            sx={{ width: "100%", position: "relative", textAlign: "center" }}
          >
            <Swiper
              autoplay={{
                delay: 5000,
              }}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              modules={[Navigation, Autoplay, Pagination]}
              loop={true}
              navigation
              mousewheel={true}
              keyboard={true}
              style={{
                marginTop: "20px",
              }}
            >
              {content.map((item) => (
                <SwiperSlide key={item.title}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: { xs: "column-reverse", sm: "row" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        pl: 10,
                        py: 1,
                        height: "100%",
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        variant={`body2`}
                        component="h6"
                        fontWeight={400}
                        sx={{ color: "white" }}
                      >
                        Todays Special Offer
                      </Typography>
                      <Typography
                        variant={`h3`}
                        component="h4"
                        fontWeight={700}
                        sx={{ color: "white" }}
                      >
                        {item.title.toLocaleUpperCase()}
                      </Typography>
                      <Typography
                        variant={`body2`}
                        component="h6"
                        fontWeight={400}
                        sx={{ color: "white" }}
                      >
                        20+ Hours of Portable Playtime
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#1BFBB5" }}
                        color="info"
                        size="large"
                      >
                        Add to cart
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        px: 0,
                        py: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40%",
                      }}
                    >
                      <Image
                        src={item.img}
                        alt="banner"
                        style={{ margin: "auto" }}
                        width={"250px"}
                        height={"250px"}
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerComponent;
