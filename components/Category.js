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
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Category = () => {
  const isTablet = useMediaQuery("(max-width:900px)");

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
    <Box m="auto" maxWidth="1052px">
      <Box sx={{ backgroundImage: bg, objectFit: "inherit" }}>
        <Typography variant="h4" sx={{ color: "black", my: 5 }}>
          Top Categories
        </Typography>

        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={5000}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          className="categoriesSwiper"
          cssMode={true}
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
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "350px",
                  gap: 2,
                }}
              >
                <Image
                  src={item.img}
                  alt="banner"
                  width={"120px"}
                  height={"100px"}
                />
                <Typography
                  variant={`${isTablet ? "h5" : "h4"}`}
                  component="h1"
                  fontWeight={600}
                  mb="40px"
                >
                  {item.title.toLocaleUpperCase()}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* <Box
        m="auto"
        display="flex"
        flexDirection={`${isTablet ? "column" : "row"}`}
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="20px"
          mb="20px"
        >
          <Box sx={{ position: "relative" }}>
            <Image src={men} alt="men" width="380px" height="500px" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                bottom: "0px",
                right: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                gap: "30px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" component="h3" color="white">
                mens clothing
              </Typography>
              <Link href="/products">
                <Button variant="outlined" color="secondary">
                  Shop Now
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Image src={electronics} alt="men" width="500px" height="350px" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                bottom: "0px",
                right: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                gap: "30px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" component="h3" color="white">
                electronics
              </Typography>
              <Link href="/products">
                <Button variant="outlined" color="secondary">
                  Shop Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="20px"
        >
          <Box sx={{ position: "relative" }}>
            <Image src={women} alt="men" width="500px" height="350px" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                bottom: "0px",
                right: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                gap: "30px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" component="h3" color="white">
                womens clothing
              </Typography>
              <Link href="/products">
                <Button variant="outlined" color="secondary">
                  Shop Now
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Image src={jewelery} alt="men" width="400px" height="500px" />
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                bottom: "0px",
                right: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                gap: "30px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" component="h3" color="white">
                jewelery
              </Typography>
              <Link href="/products">
                <Button variant="outlined" color="secondary">
                  Shop Now
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Category;
