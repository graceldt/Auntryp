import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
                {['ACCUEIL', 'DESTINATIONS', 'ASTUCES', 'A PROPOS DE NOUS'].map((text, index) => (
                    <ListItem key={text} disablePadding


                    >
                        <ListItemButton>
                            <ListItemText>
                                <Typography
                                    sx={{
                                        fontFamily: "Concert One",
                                        fontSize: "1.5rem",
                                        color: "#3e2723"
                                    }}
                                >
                                    {text}
                                </Typography>

                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List className='social-link'>
                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemText primary='Instagram'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            <Button onClick={toggleDrawer(true)} 
                sx={{
                    fontFamily: "Oi",
                    fontSize: "2.5rem",
                    color: "#3e2723",
                }}
            >AUNTRYP</Button>
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "#FDF2E9",
                    }
                }}
                open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Box>
    );
}
export default Navigation