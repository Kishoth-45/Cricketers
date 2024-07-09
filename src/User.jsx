import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = (props) => {
  const followButtons = useRef([]);
  const favoriteIcons = useRef([]);

  const notify = (isFollowing) => {
    if (isFollowing) {
      toast.success(`Followed ${props.playername}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className:"mytoast",
        transition: Bounce,
      });
    } else {
      toast.error(`Unfollowed ${props.playername}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className:"mytoast",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    const handleFollowClick = (event) => {
      event.preventDefault();
      const follow = event.currentTarget;
      const isFollowing = follow.classList.toggle('following');
  
      follow.innerHTML = isFollowing 
        ? '<i class="bi bi-check-square-fill"></i> Following' 
        : '<i class="bi bi-check-square-fill"></i> Follow';
  
      notify(isFollowing);
    };
  
    const handleFavoriteClick = (event) => {
      const favorite = event.currentTarget;
      favorite.classList.toggle('bi-heart-fill');
      favorite.classList.toggle('bi-heart');
    };
  
    followButtons.current?.forEach((follow) => {
      follow.addEventListener('click', handleFollowClick);
    });
  
    favoriteIcons.current?.forEach((favorite) => {
      favorite.addEventListener('click', handleFavoriteClick);
    });
  
    return () => {
      followButtons.current?.forEach((follow) => {
        follow?.removeEventListener('click', handleFollowClick);
      });
  
      favoriteIcons.current?.forEach((favorite) => {
        favorite?.removeEventListener('click', handleFavoriteClick);
      });
    };
  }, []);
  
  return (
    <div>
      <div className='usercard-div'>
        <p className={props.online ? 'status online' : 'status offline'}>
          {props.online ? 'Online' : 'Offline'}
        </p>
        <p className='favorite'> <i className="bi bi-heart favorite-icon" ref={el => favoriteIcons.current.push(el)}></i> </p>
        <img src={props.coverimage} alt="coverimg" className='cover-image' />
        <img src={props.image} alt='user' className='cricketers' />
        <div className='name-div'>
          <h3>{props.playername}</h3>
          <img src='Images/Verified.png' alt='logo' className='verified' />
        </div>
        <h3 className={props.country.toLowerCase()}>{props.country}</h3>
        <h4>{props.role}</h4>
        <h5 className='gender'>{props.gender}</h5>
        
        <div className='buttons'>
          <button className='message' onClick={() => props.onMessageClick(props)}>
            <div className='name-div'>
              <img src='Images/messenger.png' alt='logo' className='messenger' />
              <span>Message</span>
            </div>
          </button>
          <button className='follow' ref={el => followButtons.current.push(el)}>
            <i className='bi bi-check-square-fill'></i> Follow
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            limit={50}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  playername: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  coverimage: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  gender: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  onMessageClick: PropTypes.func.isRequired,
};

export default User;
