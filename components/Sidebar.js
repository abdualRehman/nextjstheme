import { useEffect, useState } from "react";

// mui
import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";

const DefaultFilters = {
  sorting: [
    {
      lable: "Popularity",
      value: "popularity",
    },
    {
      lable: "Price (High to Low)",
      value: "HTL",
    },
    {
      lable: "Price (Low to High)",
      value: "LTH",
    },
  ],
  delivery: [
    {
      lable: "Express Delivery",
      value: "express",
    },
  ],
  price: [
    {
      lable: "30.00 to 60.00",
      value: "60",
    },
    {
      lable: "60.00 to 100.00",
      value: "100",
    },
    {
      lable: "100.00 to 150.00",
      value: "150",
    },
    {
      lable: "150.00 to 200.00",
      value: "200",
    },
    {
      lable: "200.00 to 300.00",
      value: "300",
    },
    {
      lable: "300.00 & Above",
      value: "10000",
    },
  ],
  brands: [
    {
      label: "iPhone",
      value: "iPhone",
    },
    {
      label: "Samsung",
      value: "samsung",
    },
    {
      label: "Google Pixel",
      value: "googlePixel",
    },
    {
      label: "Xiaomi",
      value: "xiaomi",
    },
    {
      label: "Oppo",
      value: "oppo",
    },
    {
      label: "One Plus",
      value: "onePlus",
    },
    {
      label: "Vivo",
      value: "vivo",
    },
    {
      label: "Nothing Phone",
      value: "nothingPhone",
    },
    {
      label: "Realme",
      value: "realme",
    },
    {
      label: "Huawei",
      value: "huawei",
    },
    {
      label: "Nokia",
      value: "nokia",
    },
    {
      label: "Iku",
      value: "iku",
    },
  ],
};

const Sidebar = ({ products, setDynamicState }) => {
  const isTablet = useMediaQuery("(max-width:900px)");

  const [value, setValue] = useState("all");

  useEffect(() => {
    console.log(products);
    if (value === "all") {
      setDynamicState(products);
    } else {
      const filterData = products.filter((item) => item.category === value);
      setDynamicState(filterData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Box
      sx={{
        backgroundColor: "#D9D9D9",
        // mx: 2,
        borderRadius: "20px",
      }}
    >
      {isTablet ? (
        <FormControl fullWidth>
          <InputLabel id="Category">Category</InputLabel>
          <Select
            labelId="Category"
            id="Category"
            label="Category"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="men's clothing">Mens clothing</MenuItem>
            <MenuItem value="women's clothing">Womens clothing</MenuItem>
            <MenuItem value="jewelery">Jewelery</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
          </Select>
        </FormControl>
      ) : (
        <Box
          minWidth="220px"
          px={3}
          pt="30px"
          display="flex"
          flexDirection={"column"}
          gap="15px"
        >
          {DefaultFilters?.sorting && (
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="15px"
              flexDirection="column"
            >
              <Typography
                variant="text"
                component="h3"
                fontWeight={600}
                sx={{ ml: "-10px" }}
              >
                Sorting
              </Typography>

              <RadioGroup
                aria-labelledby="sorting"
                name="sorting"
                sx={{ width: "100%" }}
                onChange={(event) => setValue(event.target.value)}
                value={value}
              >
                {DefaultFilters?.sorting.map((item) => {
                  return (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      labelPlacement={"start"}
                      label={item.lable}
                      sx={{
                        margin: "0px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    />
                  );
                })}
              </RadioGroup>
              <Divider
                orientation="horizontal"
                sx={{
                  backgroundColor: "#2F2F2F",
                  height: "2px",
                  width: "100%",
                }}
              />
            </Box>
          )}
          {DefaultFilters?.delivery && (
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="15px"
              flexDirection="column"
            >
              <Typography
                variant="text"
                component="h3"
                fontWeight={600}
                sx={{ ml: "-10px" }}
              >
                Delivery
              </Typography>
              <RadioGroup
                aria-labelledby="delivery"
                name="delivery"
                sx={{ width: "100%" }}
                onChange={(event) => setValue(event.target.value)}
                value={value}
              >
                {DefaultFilters.delivery.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    labelPlacement={"start"}
                    label={item.lable}
                    sx={{
                      margin: "0px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  />
                ))}
              </RadioGroup>
              <Divider
                orientation="horizontal"
                sx={{
                  backgroundColor: "#2F2F2F",
                  height: "2px",
                  width: "100%",
                }}
              />
            </Box>
          )}
          {DefaultFilters?.price && (
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="15px"
              flexDirection="column"
            >
              <Typography
                variant="text"
                component="h3"
                fontWeight={600}
                sx={{ ml: "-10px" }}
              >
                Price Range
              </Typography>
              <RadioGroup
                aria-labelledby="price"
                name="price"
                sx={{ width: "100%" }}
                onChange={(event) => setValue(event.target.value)}
                value={value}
              >
                {DefaultFilters.price.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    labelPlacement={"start"}
                    label={item.lable}
                    sx={{
                      margin: "0px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  />
                ))}
              </RadioGroup>
              <Divider
                orientation="horizontal"
                sx={{
                  backgroundColor: "#2F2F2F",
                  height: "2px",
                  width: "100%",
                }}
              />
            </Box>
          )}
          {DefaultFilters?.brands && (
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="15px"
              flexDirection="column"
            >
              <Typography
                variant="text"
                component="h3"
                fontWeight={600}
                sx={{ ml: "-10px" }}
              >
                Brands
              </Typography>
              <RadioGroup
                aria-labelledby="Brands"
                name="brand"
                sx={{ width: "100%" }}
                onChange={(event) => setValue(event.target.value)}
                value={value}
              >
                {DefaultFilters.brands.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    labelPlacement={"start"}
                    label={item.label}
                    sx={{
                      margin: "0px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  />
                ))}
              </RadioGroup>
              <Divider
                orientation="horizontal"
                sx={{
                  backgroundColor: "#2F2F2F",
                  height: "2px",
                  width: "100%",
                }}
              />
            </Box>
          )}
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            gap="15px"
            flexDirection="column"
            minHeight="300px"
          >
            <Typography
              variant="text"
              component="h3"
              fontWeight={600}
              sx={{ ml: "-10px" }}
            >
              Category
            </Typography>

            <RadioGroup
              aria-labelledby="category"
              name="category"
              sx={{ width: "100%" }}
              onChange={(event) => setValue(event.target.value)}
              value={value}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                labelPlacement={"start"}
                label="All"
                sx={{ display: "flex", justifyContent: "space-between" }}
              />
              <FormControlLabel
                value="men's clothing"
                labelPlacement={"start"}
                control={<Radio />}
                sx={{ display: "flex", justifyContent: "space-between" }}
                label="Men's"
              />
              <FormControlLabel
                value="women's clothing"
                labelPlacement={"start"}
                control={<Radio />}
                sx={{ display: "flex", justifyContent: "space-between" }}
                label="Women's"
              />
              <FormControlLabel
                value="jewelery"
                labelPlacement={"start"}
                control={<Radio />}
                sx={{ display: "flex", justifyContent: "space-between" }}
                label="Jewelery"
              />
              <FormControlLabel
                value="electronics"
                labelPlacement={"start"}
                control={<Radio />}
                sx={{ display: "flex", justifyContent: "space-between" }}
                label="Electronics"
              />
            </RadioGroup>
            <Divider
              orientation="horizontal"
              sx={{ backgroundColor: "#2F2F2F", height: "2px", width: "100%" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
