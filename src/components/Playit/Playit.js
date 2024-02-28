import Navbar from '../Navbar/Navbar';
import './Playit.css';
import PlayitMenu from './PlayitMenu';

const images = [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/djn9wstue/image/upload/v1708751186/social-image-removebg-preview_nka4vz.png",
        name: "SOCIAL SPACE"
    },
    {
      id: 2,
      imageUrl: "https://res.cloudinary.com/djn9wstue/image/upload/v1708751417/Icon-removebg-preview_ac8cfy.png",
        name: "IR ICON"
    },
    {
      id: 3,
      imageUrl: "https://res.cloudinary.com/djn9wstue/image/upload/v1708751529/avatar-store-removebg-preview_qcvb4k.png",
        name: "AVATAR STORE"
    },
    {
      id: 4,
      imageUrl: "https://res.cloudinary.com/djn9wstue/image/upload/v1708751606/storages-removebg-preview_bglzns.png",
        name: " LIT STORE"
    }
  ];
  
const Playit = (props)=> {
    images.map((eachImage) => (
        console.log({eachImage})
    ))
    return(
    <>
    <Navbar />
    <div className="play-container">
        <img onClick={() => props.setOpenCategories(true)} className='playit-img' src="https://res.cloudinary.com/djn9wstue/image/upload/v1708751783/playit-removebg-preview_efgvez.png"alt="playit"/>
        <p className='paragraph'>LIT</p>
    </div>
    <div className='menu-center'>
        {
            images.map((eachImage) => (
                <PlayitMenu key={eachImage.id} url={eachImage.imageUrl} id={eachImage.id}   name={eachImage.name} />
            ))
        }
    </div>
    <div className='subscribe'>
    <p className="news-paragraph">Subcribe to LIT News letter</p>
    <input type="search" className="search-button"/>
    </div>
    </>   

    )
}

export default Playit;