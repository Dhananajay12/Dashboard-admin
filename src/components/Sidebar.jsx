import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaThList,
    FaRocket
}from "react-icons/fa";
import { SiCoursera}from "react-icons/si";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Users",
            icon:<FaUserAlt/>
        },
     

        {
            path:"/product",
            name:"Course",
            icon:<SiCoursera/>
        },
     
        {
            path:"/singleuser",
            name:"SingleUser Demo",
            icon:<FaRegChartBar/>
        },
        {
            path:"/",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/productList",
            name:"Course List",
            icon:<FaThList/>
        },
    ]
    return (
        <div className="container-fluid d-flex">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Dreadnought</h1>
                   
                    <div style={{display: isOpen ? "block" : "none"}} className="size">
                    <FaRocket   />
                   </div>
                   <div style={{marginLeft: isOpen ? "40px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;