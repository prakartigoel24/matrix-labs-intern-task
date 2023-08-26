import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <div className='Sidebar'>
    <div onClick = {()=>{window.location.pathname = "/home"}}
        id='SidebarTitle'>
        <Icon icon="tabler:photo-hexagon" color="white"
        id='SidebarTitleIcon'   width= "25.33px"
  height= "29.33px"
        />   
        <p> NFTify </p>
     </div>
    <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
            return(
               <li key = {key} 
               onClick={()=>{window.location.pathname = val.link}}
               className='SidebarListItem'
               id={window.location.pathname==val.link?"active":""}>
                {""}
                <div>

                </div>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>                
               </li>
            )
        })}
        </ul>

        
        <div id='socials'>
        <Icon icon="devicon-plain:facebook" color="#f30050" width="24" height="24" />
        <Icon icon="devicon-plain:linkedin" color="#f30050" width="24" height="24" />
        <Icon icon="fa:twitter-square" color="#f30050" width="24" height="24" />        
        </div>

    </div>
    
  )
}



export default Sidebar

