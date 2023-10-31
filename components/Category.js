import Image from "next/image";

// images
import men from "../public/men.jpg";
import women from "../public/women.jpg";
import electronics from "../public/electronics.jpg";
import jewelery from "../public/jewelery.jpg";

// mui
import { Box } from "@mui/system";
import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

// images
import cSlide1 from "../public/images/c-slide1.png";
import cSlide2 from "../public/images/c-slide2.png";
import cSlide3 from "../public/images/c-slide3.png";
import cSlide4 from "../public/images/c-slide4.png";
import cSlide5 from "../public/images/c-slide5.png";
import bg from "../public/images/bg.png";

// swiper
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Category = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const content = [
    {
      img: cSlide1,
      title: "Laptops",
    },
    {
      img: cSlide2,
      title: "Mobiles",
    },
    {
      img: cSlide3,
      title: "Games",
    },
    {
      img: cSlide4,
      title: "Watches",
    },
    {
      img: cSlide5,
      title: "Assessories",
    },
  ];

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
      <Box sx={{ position: "absolute", left: "-100px", top: "-150%" }}>
        <Image src={bg} />
      </Box>
      <Box
        m="auto"
        maxWidth="1052px"
        position={"inherit"}
        px={`${isTablet ? "10px" : "5px"}`}
      >
        <Box sx={{ backgroundImage: bg, objectFit: "inherit" }}>
          <Typography variant="h4" sx={{ color: "black", my: 5 }}>
            Top Categories
          </Typography>
          <Box
            sx={{ width: "100%", position: "relative", textAlign: "center" }}
          >
            <Swiper
              slidesPerView={isMobile ? 1 : isTablet ? 3 : 5}
              spaceBetween={40}
              freeMode={isMobile ? false : true}
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
                width: "90%",
              }}
            >
              {content.map((item) => (
                <SwiperSlide key={item.title}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                      width: "350px",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{ px: 1, py: 2, borderRadius: 1, bgcolor: "#EEEBEB" }}
                    >
                      <Image
                        src={item.img}
                        alt="banner"
                        width={"120px"}
                        height={"100px"}
                      />
                    </Box>
                    <Typography
                      variant={`p`}
                      component="h4"
                      fontWeight={700}
                      mb="40px"
                    >
                      {item.title.toLocaleUpperCase()}
                    </Typography>
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

export default Category;
