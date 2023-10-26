import Image from 'next/image';

// swiper
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// images
import slideOne from '../public/images/slide1.png'
import slideTwo from '../public/images/slide2.jpg'
import slideThree from '../public/images/slider3.jpg'

// mui
import { Button, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const Slider = () => {

    const isTablet = useMediaQuery('(max-width:900px)')

    const content = [
        {
            img: slideOne,
            title: "men's clothing",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        },
        {
            img: slideTwo,
            title: "women's clothing",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        },
        {
            img: slideThree,
            title: "jewelery",
            description: "don't compromise on style! get flat 30% off for new arrivals."
        },
    ]

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                loop={true}
                className="mySwiper"
            >
                {content.map(item =>
                    <SwiperSlide key={item.title}>

                        <Box sx={{
                            display: 'flex', alignItems: 'center',
                            flexDirection: `${isTablet ? 'column' : 'row'}`,
                            justifyContent: 'center', gap: '50px', mb: '50px'
                        }}>
                            <Box>
                                <Image src={item.img} alt='banner' height={'570px'} />
                            </Box>

                            {/* <Box width={`${isTablet ? '90%' : '40%'}`}>

                                <Typography variant={`${isTablet ? 'h5' : 'h4'}`} component='h1' fontWeight={600} mb='40px'>
                                    {item.title.toLocaleUpperCase()}
                                </Typography>

                                <Typography variant='body1' component='h3' mb='40px' fontSize='14px'
                                    sx={{ wordSpacing: '10px' }}>
                                    {item.description.toLocaleUpperCase()}
                                </Typography>

                                <Link href='/products'>
                                    <Button variant='outlined'>
                                        Shop Now
                                    </Button>
                                </Link>

                            </Box> */}
                        </Box>

                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}

export default Slider;