import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

// image
import logoGeneral from '../public/images/logo.png';
import arrow_right from '../public/images/arrow_right.png';
import person from '../public/images/person.png';
import shopping_cart from '../public/images/shopping_cart.png';


// context for light and dark mode
import { ColorModeContext } from "../theme/MUI_MODE";

// mui
import {
    AppBar, Badge, Box, Button, Container, Drawer,
    IconButton, List, ListItem, ListItemButton,
    Paper, Tooltip, Typography, useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import { PRIMARY } from "../theme/palette";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderColor: "#0A6BF8",
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    // backgroundColor: alpha(theme.palette.common.black, 0.15),
    // '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.black, 0.25),
    // },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 3, 1, 3),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    '& input': {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            opacity: 0.8
        }
    }
}));

const Navbar = () => {
    const { mode, toggleMode } = useContext(ColorModeContext)

    const [menu, setMenu] = React.useState();

    const isTablet = useMediaQuery('(max-width:900px)')


    const state = useSelector(state => state);
    const logo = state.config?.logo || logoGeneral;

    const [hasWindow, setHasWindow] = React.useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, [])


    return (
        <Box maxWidth='1052px' m='auto' py={`${isTablet ? '5px' : '10px'}`} sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
                <Paper variant="outlined"
                    sx={{
                        boxShadow: 'none', borderRadius: '0', border: 'none',
                        display: 'flex', alignItems: 'center'
                    }}>
                    {/* laptap menu */}
                    {!isTablet &&
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '10px', justifyContent: "space-between" }}>

                            <Image src={logo} alt='logo_Image' width={200} height={40} />

                            <Search>
                                <StyledInputBase
                                    className="input-search"
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />

                                <Box sx={{ marginRight: 1, display: 'flex' }} >
                                    <Image src={arrow_right} alt='arrow_right' />
                                </Box>
                            </Search>
                            <Box sx={{ gap: "10px" }} >
                                <Link href='/cart'>
                                    <IconButton size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <Image src={shopping_cart} alt='shopping_cart' width={"30px"} height={'30px'} />
                                    </IconButton>
                                </Link>
                                <Link href='/profile'>
                                    <IconButton size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        color="inherit"
                                    >
                                        <Image src={person} alt='person' width={"30px"} height={'30px'} />
                                    </IconButton>
                                </Link>
                                <Link href='/'>
                                    <Button variant="contained" sx={{ backgroundColor: PRIMARY.main, px: 4, fontWeight: 500, color: "#2F2F2F", borderRadius: 20, fontSize: 15 }} >
                                        Register
                                    </Button>
                                </Link>
                            </Box>
                            {/* <Link href='/'>
                                <Button variant="text">
                                    Home
                                </Button>
                            </Link>

                            <Link href='/products'>
                                <Button variant="text">
                                    Products
                                </Button>
                            </Link>

                            <Link href='/aboutUs'>
                                <Button variant="text">
                                    About us
                                </Button>
                            </Link>

                            <Link href='/contactUs'>
                                <Button variant="text">
                                    Contact Us
                                </Button>
                            </Link> */}

                        </Box>
                    }

                    {/* responsive menu */}
                    {isTablet &&
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setMenu(true)}
                            >
                                <MenuIcon sx={{ fontSize: '30px' }} />
                            </IconButton>

                            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: state.config?.navLogoPosition || "center" }}> <Image src={logo} alt='logo_Image' width={50} height={40} /></Box>

                            <Drawer
                                anchor='left'
                                open={menu}
                                onClose={() => setMenu(false)}
                            >
                                <Box
                                    sx={{ width: 250 }}
                                    role="presentation"
                                    onClick={() => setMenu(false)}
                                    onKeyDown={() => setMenu(false)}
                                >
                                    <List>
                                        <ListItem disablePadding
                                            sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', px: '20px', mt: '50px' }}
                                        >

                                            <Link href='/'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <HomeIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Home
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/products'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <LocalMallIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Products
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/signUp'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <AccountCircleIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Profile
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/aboutUs'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <InfoIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        About us
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/contactUs'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <ContactSupportIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Contact Us
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>



                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    }

                    {/* Light / Dark */}
                    {/* <Tooltip title='Mode'>
                        <IconButton onClick={toggleMode} color='primary'>
                            {mode === 'light' ? <ModeNightIcon sx={{ fontSize: '25px' }} /> :
                                <LightModeIcon sx={{ color: '#fca311', fontSize: '25px' }} />}
                        </IconButton>
                    </Tooltip> */}

                    {/* Cart */}
                    {/* <Link href='/cart'>
                        <Tooltip title='cart'>
                            <IconButton sx={{ px: '12px' }}>
                                <Badge badgeContent={hasWindow && state.itemsCounter} color="error">
                                    {state.config?.cart && <Box component='img' src={state.config?.cart} />}
                                    {!(state.config?.cart) && <ShoppingBasketIcon color="primary" sx={{ fontSize: '25px' }} />}
                                </Badge>
                            </IconButton>
                        </Tooltip>
                    </Link> */}

                    {/* Person Account */}
                    {/* {!isTablet &&
                        <Link href='/signUp'>
                            <Tooltip title='Profile'>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircleIcon sx={{ fontSize: '25px' }} />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    } */}

                </Paper>
                <Paper variant="outlined"
                    sx={{
                        boxShadow: 'none', borderRadius: '0', border: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: "space-evenly",
                        width: "80%", margin: "auto"
                    }}>


                    <Link href='/'>
                        <Button color="inherit" variant="text">
                            Home
                        </Button>
                    </Link>

                    <Link href='/products'>
                        <Button variant="inherit">
                            Products
                        </Button>
                    </Link>
                    <Link href='/products'>
                        <Button variant="inherit">
                            Accessories
                        </Button>
                    </Link>

                    <Link href='/aboutUs'>
                        <Button variant="inherit">
                            About us
                        </Button>
                    </Link>

                    <Link href='/contactUs'>
                        <Button variant="inherit">
                            Contact Us
                        </Button>
                    </Link>

                </Paper>
            </AppBar>
        </Box>
    );
}

export default Navbar;