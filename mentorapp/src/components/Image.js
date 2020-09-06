import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import image from '../Image/image.jpg';
import imagea from '../Image/imagea.jpg';
import imageb from '../Image/imageb.jpg';
import imagec from '../Image/imagec.jpg';
import imaged from '../Image/imaged.jpg';
import imagee from '../Image/imagee.jpg';
import imagef from '../Image/imagef.jpg';
import imageg from '../Image/imageg.jpg';
import imageh from '../Image/imageh.jpg';
import "fontsource-roboto";
import mail from '../Image/mail.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    marginLeft:"10%",
    marginRight:"10%",
    marginTop:"3%",
    backgroundColor: theme.palette.background.paper,
  },
  gridList:{
  
width:"100%",
  },
  gridListTile: {
    marginLeft:"1%",
    marginRight:"1%",
    
   
    marginBottom:"1%",marginTop:"1%",

  
  },
  header:{
    marginTop:"5%",marginLeft:"11%",
  },
  title:{
    marginLeft:"11%",marginTop:"2%",font: " 18px  Roboto",
  },

  icon:{
    width:"4%",
 
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function ImageGridList(props) {

  const classes = useStyles();
  const tileData = [{img:image}, {img:imagea},{img:imageb}, {img:imagec},{img:imaged}, {img:imagee},{img:imagef}, {img:imageg},{img:imageh},
     ];


     const onImageClick = (tile) => {
        console.log(tile.title);
        props.onPassImage(tile);
    };

 console.log(tileData);

  return (
    <div>
    <div className={classes.header}>
      <img  src={mail}  className={classes.icon} />
       <span variant='h6' style={{font: " Bold 24px Roboto ", display:'inline-block', marginLeft:'1%'}}> Thank your mentor on this 'Teacher's day'</span></div>
      <h4 variant='body1' className={classes.title} > Choose a photo card, write your message. Share!</h4>
    <div className={classes.root}>
      <GridList cellHeight={150}className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile  className={classes.gridListTile} cols={1}>
            <img src={tile.img} onClick={() =>onImageClick(tile)}  />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
