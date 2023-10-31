import Head from "next/head";

// mui
import { Box } from "@mui/material";

// component
import Category from "../components/Category";
import Slider from "../components/Slider";
import ProductSliderComponent from "../components/Product-Slider";
import BannerComponent from "../components/BannerComponent";
import Image from "next/image";
import logo from "../public/images/logo2.png";

export default function Home() {
  return (
    <Box>
      <Box>
        <Slider />
      </Box>
      <Box>
        <Category />
      </Box>
      <Box>
        <ProductSliderComponent category={"Mobiles"} />
      </Box>
      <Box>
        <BannerComponent />
      </Box>
      <Box>
        <ProductSliderComponent category={"Headsets"} />
      </Box>
      <Box sx={{ width: "100%", margin: "auto", textAlign: "center", my: 10 }}>
        <Image src={logo} />
      </Box>
    </Box>
  );
}
