import ActionAreaCard from "../components/tipscard";
import Grid from '@mui/material/Grid2';

function Tips() {
    return (
        <>
            <Grid 
                container
                spacing={12}
                justifyContent={"center"}
                sx={{
                    paddingBottom:"5%",
                    paddingTop:"5%",
                    backgroundColor:"#FDFBF6"
                }}
            >
                
                {
                    TipsData.map((tips) => (
                        <Grid item xs={12} md={6}>
                            <ActionAreaCard  title={tips.title} cover={tips.cover} />
                        </Grid>
                    ))
                }
            </Grid>
            
        </>
    )
}
const TipsData = [
    {
        cover: 'https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'COMMENT PREPARER SA VALISE',
    },
    {
        cover: 'https://plus.unsplash.com/premium_photo-1677860447055-5ce8092c0d7e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'PREPARER SA TROUSSE DE PREMIER SOIN',
    },
    {
        cover: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'VOYAGE SANS SE RUINER',
    },
    ,
    {
        cover: 'https://images.unsplash.com/photo-1587450843502-2669150cbbb4?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'LES MEILLEURS APPLI EN VOYAGE',
    },
    ,
    {
        cover: 'https://images.unsplash.com/photo-1474606030380-107829a22fc6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'SE DEPLACER SANS SE RUINER',
    },
    ,
    {
        cover: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9ubmVyfGVufDB8fDB8fHww',
        title: 'COMMENT PREPARER UNE RANDONNEE',
    },
];
export default Tips;