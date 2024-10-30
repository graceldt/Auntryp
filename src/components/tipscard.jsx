import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "@fontsource/montserrat/400.css";


function ActionAreaCard({cover, title}) {
    return (
        <Card sx={{
            minWidth: 400,
            maxWidth: 400,
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={cover}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div"
                        sx={{
                            fontFamily: "Montserrat",
                            fontSize: "1rem",
                            color: "#231B11",
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default ActionAreaCard;