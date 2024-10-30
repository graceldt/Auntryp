import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import "@fontsource/concert-one/400.css";
import "@fontsource/oi/400.css"; 


const Navigation = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{
            width: 350,
        }}
            role="presentation" onClick={toggleDrawer(false)}>
            <List className='list'>
                {nav_link.map(navigate => (
                    <ListItem key={navigate.text} disablePadding


                    >
                        <ListItemButton>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontFamily: "Concert One",
                                        fontSize: "1.5rem"
                                    }}
                                >
                                    

                                    <Link 
                                        href={navigate.link}
                                        sx={{
                                            textDecoration: "none",
                                            color: "#3e2723"
                                        }}
                                    >{navigate.title}</Link>
                                </Typography>

                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <header>
            <Box>
                <Button onClick={toggleDrawer(true)} 
                    sx={{
                        fontFamily: "Oi",
                        fontSize: "2.5rem",
                        color: "#3D2B1F",
                    }}
                >AUNTRYP</Button>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#fbf7ee",
                        }
                    }}
                    open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </Box>
        </header>
    );
}
export default Navigation



const nav_link = [
    {
        title: "ACCUEIL",
        link: "/home"
    },
    {
        title: "DESTINATIONS",
        link: "/destinations"
    },
    {
        title: "ASTUCES",
        link: "/astuces"
    },
    {
        title: "A PROPOS DE NOUS",
        link: "/a-propos-de-nous"
    },
]