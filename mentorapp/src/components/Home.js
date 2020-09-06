import React,{useState} from 'react';
import '../styles/Home.css';
import ImageGridList from './Image';
import Note from './Note';


export default function Home (props){
    
    
    const [image,setImage] = useState("/static/media/image.87dcdccf.jpg");

      const  updateImage = (tile) => {
           setImage(tile.img);
        }
        return(
      
        <div>
        <div className="split1 left1"> <ImageGridList onPassImage = {updateImage}/> </div>
      
        <div className="split1 right1"> 
        <div> <Note image={image}/></div>
       </div>  
    </div>  
        )
    }

