import React from 'react'
import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
const meet = () => {
  return (
   <>

<h1 style={{textAlign:"center",fontSize:"30px",marginTop:"150px"}}>MEET OUR TEAM</h1>
<hr style={{textAlign:"center",width:"30px",height:"5px",fontWeight:"bold",backgroundColor:"#D73E4D",marginLeft:"930px",marginTop:"40px"}} />
<h4 style={{textAlign:"center",color:"grey",marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h4>
<div style={{display:"flex"}}>
<Card sx={{ maxWidth: 345,marginTop:"30px",textAlign:"center",marginLeft:"420px",height:"400px" }}>
      <CardMedia
        sx={{ height: 340 }}
        image="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg"
        title="green iguana"
      />
      {/* <CardContent > */}
        <div style={{backgroundColor:"#E6E6E6",padding:"0",boxSizing:"border-box",margin:"0",height:"400px"  , width:"300px"}}>
        <Typography gutterBottom variant="h6" component="div" style={{textAlign:"center",color:"gray",fontSize:"15px"}}>
      <p style={{fontWeight:"bold"}}>Gonzalez Gina</p>  
       Web Developer
        </Typography>
        </div>
        
      
      {/* </CardContent> */}
  
    </Card>
    <Card sx={{ maxWidth: 345,marginTop:"30px",textAlign:"center",marginLeft:"70px",height:"400px" }}>
      <CardMedia
        sx={{ height: 340 }}
        image="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg"
        title="green iguana"
      />
      {/* <CardContent > */}
        <div style={{backgroundColor:"#E6E6E6",padding:"0",boxSizing:"border-box",margin:"0",height:"400px"  , width:"300px"}}>
        <Typography gutterBottom variant="h6" component="div" style={{textAlign:"center",color:"gray",fontSize:"15px"}}>
      <p style={{fontWeight:"bold"}}>Holly Vincenzini</p>  
     Media Partner
        </Typography>
        </div>
        
      
      {/* </CardContent> */}
  
    </Card>
    <Card sx={{ maxWidth: 345,marginTop:"30px",textAlign:"center",marginLeft:"70px",height:"400px" }}>
      <CardMedia
        sx={{ height: 340 }}
        image="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg"
        title="green iguana"
      />
      {/* <CardContent  > */}
        <div style={{backgroundColor:"#E6E6E6",padding:"0",boxSizing:"border-box",margin:"0",height:"400px" , width:"300px"}}>
        <Typography gutterBottom variant="h6" component="div" style={{textAlign:"center",color:"gray",fontSize:"15px"}}>
      <p style={{fontWeight:"bold"}}>Ramirez Minita</p>  
       Graphic Design
        </Typography>
        </div>
        
      
      {/* </CardContent> */}
  
    </Card>

</div>
    
   </>
  )
}

export default meet
