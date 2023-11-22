import React from 'react'
import { BsGrid1X2Fill } from 'react-icons/bs'
import { PiPottedPlantFill, PiPuzzlePieceFill } from 'react-icons/pi'
import './LeftSideBar.css'
import { FcFaq } from 'react-icons/fc'
import { BiSupport } from 'react-icons/bi'
import { RiLogoutCircleLine } from 'react-icons/ri'


function LeftSideBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div class="profile-card">
          <img src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' className="profile-image" />
          <div class="profile-name">Ram Mohan</div>
          <div class="profile-email">rammohan2@gmail.com</div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <BsGrid1X2Fill className='icon' />
          <a href="">
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <PiPottedPlantFill className='icon' />
          <a href="">
            Perks
          </a>
        </li>
        <li className='sidebar-list-item'>
          <PiPuzzlePieceFill className='icon' />
          <a href="">
            Addons
          </a>
        </li>
        <li className='sidebar-list-item'>
          <FcFaq className='icon' />
          <a href="">
            FAQ
          </a>
        </li>
        <li className='sidebar-list-item'>
          <BiSupport className='icon' />
          <a href="">
            Support
          </a>
        </li>
        <li className='sidebar-list-item' style={{ marginTop: "180px", textAlign: "center" }}> <a style={{ color: "blue" }} href="">
          Logout
        </a>
          <RiLogoutCircleLine className='icon' style={{ marginLeft: "5px" }} /></li>
      </ul>
    </aside>
  )
}

export default LeftSideBar