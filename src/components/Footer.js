import React from 'react'
import zuri from '../assets/Zuri.Internship_Logo.png'
import I4G from '../assets/I4G.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-contain">
            <img src={zuri} alt="" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="" />
        </div>
    </div>
  )
}

export default Footer