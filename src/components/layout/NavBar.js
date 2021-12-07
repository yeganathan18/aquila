import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';

const navItems = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Gallery',
        path: '/gallery',
    },
    {
        name: 'Blogs',
        path: '/blogs',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
];


const NavBar = () => {

    return (
        <React.Fragment>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>

            <AppBar
                position="static"
                color="primary"
                elevation={0}
                sx={{
                    borderBottom: (theme) => `0.5px solid ${theme.palette.divider}`,
                    backgroundColor: '#0d1b2a',
                }}
            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Typography variant="h6" component="h1" color="white" noWrap sx={{
                        flexGrow: 1,
                        fontWeight: '500',
                    }}>
                        National Higher Secondary School
                    </Typography>
                    <nav>
                        {
                            navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        color="#3399ff"
                                        href={item.path}
                                        sx={{my: 1, mx: 1.5}}
                                        underline="none"
                                        fontWeight="700"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )
                        }
                    </nav>
                    <Button href="#" variant="outlined"
                            sx={{my: 1, mx: 1.5, borderRadius: "15px", fontWeight: "700", textTransform: "none"}}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default NavBar;
