import Home from "../components/Home/home.jsx"
import About from "../components/About/about.jsx"
import Services from "../components/Services/services.jsx"
import Portfolio from "../components/Portfolio/portfolio.jsx"
import Team from "../components/Team/team.jsx"
import Skill from "../components/Skill/skill.jsx"
import Clients from "../components/Clients/clients.jsx"
import Pricing from "../components/Pricing/pricing.jsx"
import Blog from "../components/Blog/blog.jsx"
import Contact from "../components/Contact/contact.jsx"




import MainRoot from "../pages/MainRoot.jsx"
export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/portfolio",
                element:<Portfolio/>
            },
            {
                path:"/team",
                element:<Team/>
            },
            {
                path:"/skill",
                element:<Skill/>
            },
            {
                path:"/clients",
                element:<Clients/>
            },
            {
                path:"/pricing",
                element:<Pricing/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]

    }
]

