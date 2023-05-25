import React from 'react'
import "./latestblog.css"

const latestblog = () => {
  return (
  <>
  
  <h1 style={{textAlign:"center",fontSize:"35px",marginTop:"150px"}}>OUR LATEST BLOG</h1>
  <hr style={{textAlign:"center",width:"30px",height:"5px",fontWeight:"bold",backgroundColor:"#D73E4D",marginLeft:"930px",marginTop:"20px"}} />
  <h4 style={{textAlign:"center",color:"grey",marginTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h4>
  
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"35px",marginTop:"100px"}}>

<div>

    <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt="" />
   <h3 style={{fontWeight:"bold",marginTop:"20px"}} className="h3"  >Playback: Akufo-Addo speaks to business <br /> community</h3>
    <p style={{marginTop:"15px"}}>Posted by  <span style={{color:"#D73E4D"}}>admin</span> at 04 Feb, 2017</p>
    <p style={{marginTop:"30px",color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br /> urna sed accumsan...<span className='span'>Read More</span></p>
</div>


<div>

    <img src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg" alt="" />
    <h3 style={{fontWeight:"bold",marginTop:"20px"}} className="h3"   >Playback: Akufo-Addo speaks to business <br /> community</h3>
    <p style={{marginTop:"15px"}}>Posted by  <span style={{color:"#D73E4D"}}>admin</span> at 04 Feb, 2017</p>
    <p style={{marginTop:"30px",color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br /> urna sed accumsan... <span className='span'>Read More</span> </p>
</div>


<div>

<img src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg" alt="" />
<h3 style={{fontWeight:"bold",marginTop:"20px"}} className="h3"   >Playback: Akufo-Addo speaks to business <br /> community</h3>
    <p style={{marginTop:"15px"}}>Posted by <span style={{color:"#D73E4D"}}>admin</span>  at 04 Feb, 2017</p>
    <p style={{marginTop:"30px",color:"grey"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam sagittis iaculis velit in tristique. Curabitur ac urna <br /> urna sed accumsan...<span className='span'>Read More</span> </p>

</div>


  </div>
  
  
  
  
  
  </>
  )
}

export default latestblog
