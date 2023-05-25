import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from "../../pages/Hero/hero"
import Card from "../../pages/Card/card"
import Meet from "../../pages/Meet/meet"
import LatestBlog from "../../pages/LatestBlog/latestblog"

const home = () => {
  return (
    <>
    <div>
   <Helmet>
<title>React Helmet|Home</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>

    </div>


<Hero/>
<Card/>
<Meet/>
<LatestBlog/>
</>
  )
}

export default home
