import './App.css';
import profile_img from './profile__img.png'
import share_btn from './share-button.png'
import slack from './slackZuri.png'
import git from './Social-icon.png'
import zuri from './Zuri.Internship_Logo.png'
import I4G from './I4G.png'
import smal_share from './smal_share.png'

function App() {
  return (
    <div className="task">
      <div className="task-contain">
        <div className="profile">
          <img src={profile_img} id="profile__img" alt="" /> 
          <p className="twit_user" id='twitter'>Annette Black</p> 
          <p></p>
        </div>
        <img src={share_btn} alt="" className="share_btn big" />
        <img src={smal_share} alt="" className="share_btn small" />
        <div className="links">
          <a className='link' id='twitter' target='_blank' rel='noreferrer' href='https://twitter.com/IzzyLogo'>Twitter Link</a>
          <a className='link' id='btn_zuri' target='_blank' rel='noreferrer' href='https://training.zuri.team/'>Zuri Team</a>
          <a className='link' id='books' target='_blank' rel='noreferrer' href='https://books.zuri.team/'>Zuri Books</a>
          <a className='link' id='book_python' target='_blank' rel='noreferrer' href='https://books.zuri.team/python-for-beginners?ref_id=israel-omitiran'>Python Books</a>
          <a className='link' id='pitch' target='_blank' rel='noreferrer' href='https://background.zuri.team'>Background Check for Coders</a>
          <a className='link' id='book_design' target='_blank' rel='noreferrer' href='https://books.zuri.team/design-rules'>Design</a>
          <div className="icons">
            <img src={slack} alt="" />
            <img src={git} alt="" />
          </div>
        </div>
        <div className="footer">
          <img src={zuri} alt="" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
