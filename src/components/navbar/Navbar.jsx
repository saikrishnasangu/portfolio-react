import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
const Navbar = () =>{
    //const[out , setOut] = useState(false);
    return(
        <div className = "navbar">
        {/*Sidebar*/}
         <Sidebar/>
        <div className="wrapper">
        
            <span>Sai Krishna Sangu</span>
            <div className="socials">
                <a href="https://drive.google.com/file/d/11_0BTzz48XrJZ2j43LtwwGdYe8RiWDnI/view?usp=sharing" target="_blank" rel="noopener nonreferrer"><button className="butt"> Resume</button></a>
                <a href="https://github.com/saikrishnasangu"><img src = "https://cdn-icons-png.flaticon.com/128/270/270798.png"/></a>
                <a href="https://www.instagram.com/saikrishna_sangu/"><img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"/></a>
                <a href="https://www.linkedin.com/in/saikrishnasangu/"><img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"/></a>
            </div>            
        </div>
        </div>
    )
}
export default Navbar