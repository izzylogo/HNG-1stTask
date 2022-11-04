import React from 'react'
import './Home.css'
import profile_img from '../assets/profile__img.png'
import share_btn from '../assets/share-button.png'
import slack from '../assets/slackZuri.png'
import git from '../assets/Social-icon.png'
import smal_share from '../assets/smal_share.png'

const Home = () => {
  return (
    <div className="task">
      <div className="task-contain">
        <div className="profile">
          <img src={profile_img} id="profile__img" alt="" /> 
          <p className="twit_user" id='twitter'>Annette Black</p> 
          <p id="slack" style={{display: 'none'}}>izZyDev</p>
          <p></p>
        </div>
        <img src={share_btn} alt="" className="share_btn big" />
        <img src={smal_share} alt="" className="share_btn small" />
        <div className="links">
          <a className='link' id='twitter' target='_blank' rel='noreferrer' href='https://twitter.com/IzzyLogo'>Twitter Link</a>
          <a className='link' id='btn__zuri' target='_blank' rel='noreferrer' href='https://training.zuri.team/'>Zuri Team</a>
          <a className='link' id='books' target='_blank' rel='noreferrer' href='https://books.zuri.team/'>Zuri Books</a>
          <a className='link' id='book__python' target='_blank' rel='noreferrer' href='https://books.zuri.team/python-for-beginners?ref_id=<IzZyDev>'>Python Books</a>
          <a className='link' id='pitch' target='_blank' rel='noreferrer' href='https://background.zuri.team'>Background Check for Coders</a>
          <a className='link' id='book__design' target='_blank' rel='noreferrer' href='https://books.zuri.team/design-rules'>Design</a>
          <a className='link' id='contact' rel='noreferrer' href='/contact'>Contact Me</a>
          <div className="icons">
            <img src={slack} alt="" />
            <img src={git} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home