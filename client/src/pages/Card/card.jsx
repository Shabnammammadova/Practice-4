import React from 'react'
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import "./card.css"


import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const card = () => {
  return (
  <>
  <div style={{textAlign:"center"}}>
  <h1 style={{marginTop:"50px"}}>ABOUT OUR BIZPRO</h1>
  <hr style={{textAlign:"center",width:"30px",height:"5px",fontWeight:"bold",backgroundColor:"#D73E4D",marginLeft:"930px",marginTop:"40px"}} />
   <h4 style={{color:"gray",marginTop:"40px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br />  standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h4>
   </div>


<div style={{display:"flex",gap:"20px",marginLeft:"350px",marginTop:"150px"}}>
<React.Fragment>
    <CardContent>
        <PhotoCameraIcon className='icon1' style={{fontSize:"60px",marginLeft:"80px",border:"2px solid #D73E4D",borderRadius:"45px",height:"90px",width:"100px"}}/>
      <Typography className='text' sx={{ fontSize: 14,textAlign:"center",color:"black",fontWeight:"bold",marginTop:"15px" }} color="text.secondary" gutterBottom>
      WEB DEVELOPMENT
      </Typography>
      
  
      <Typography variant="body2" style={{color:"gray",marginTop:"10px"}}>
      Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.
       
      </Typography>
      <button className='btn1' style={{width:"120px",height:"40px",marginLeft:"60px",marginTop:"30px",border:"1px solid #D73E4D"}}>More Details</button>
    </CardContent>

  </React.Fragment>

  <React.Fragment>
    <CardContent>
      <PhotoCameraIcon className='icon1'  style={{fontSize:"10px",marginLeft:"80px",border:"2px solid #D73E4D",borderRadius:"45px",height:"90px",width:"100px"}}/>
      <Typography className='text' sx={{ fontSize: 14,textAlign:"center",color:"black",fontWeight:"bold",marginTop:"15px" }} color="text.secondary" gutterBottom>
      PHOTOGRAPHY
      </Typography>
     
   
      <Typography variant="body2" style={{color:"gray",marginTop:"10px"}} >
      Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.
      </Typography>
      <button className='btn1' style={{width:"120px",height:"40px",marginLeft:"60px",marginTop:"30px",border:"1px solid #D73E4D"}}>More Details</button>
    </CardContent>
 
  </React.Fragment>
  <React.Fragment>
    <CardContent>
    <PhotoCameraIcon className='icon1' style={{fontSize:"60px",marginLeft:"80px",border:"2px solid #D73E4D",borderRadius:"45px",height:"90px",width:"100px"}}/>
      <Typography className='text' sx={{ fontSize: 14,textAlign:"center",color:"black",fontWeight:"bold",marginTop:"15px" }} color="text.secondary" gutterBottom>
      DIGITAL MEDIA
      </Typography>
      
    
      <Typography variant="body2" style={{color:"gray",marginTop:"10px"}} >
      Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.
      </Typography>
      <button className='btn1' style={{width:"120px",height:"40px",marginLeft:"60px",marginTop:"30px",border:"1px solid #D73E4D"}}>More Details</button>
    </CardContent>
   
  </React.Fragment>
  <React.Fragment>
    <CardContent>
    <PhotoCameraIcon className='icon1' style={{fontSize:"60px",marginLeft:"80px",border:"2px solid #D73E4D",borderRadius:"45px",height:"90px",width:"100px"}}/>
      <Typography className='text' sx={{ fontSize: 14,textAlign:"center",color:"black",fontWeight:"bold",marginTop:"15px" }} color="text.secondary" gutterBottom>
      ONLINE MARKETING
      </Typography>
      
    
      <Typography variant="body2" style={{color:"gray",marginTop:"10px"}}>
      Lorem ipsum dolor sit amet, consect et <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.
      </Typography>
      <button className='btn1' style={{width:"120px",height:"40px",marginLeft:"60px",marginTop:"30px",border:"1px solid #D73E4D"}}>More Details</button>
    </CardContent>
   
  </React.Fragment>



</div>







  </>
  )
}

export default card
