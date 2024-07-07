import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const User = (props) => {
  useEffect(() => {
    const followButtons = document.querySelectorAll('.follow');

    followButtons.forEach((follow) => {
      follow.addEventListener('click', (event) => {
        event.preventDefault();
        follow.classList.toggle('following');

        if (follow.classList.contains('following')) {
          follow.innerHTML = '<i class="bi bi-check-square-fill"></i> Following';
        } else {
          follow.innerHTML = '<i class="bi bi-check-square-fill"></i> Follow';
        }
      });
    });

    const favorite = document.querySelectorAll('.favorite-icon');

    favorite.forEach((favorite) => {
      favorite.addEventListener('click', () => {
        if (favorite.classList.contains('bi-heart-fill')) {
          favorite.classList.remove('bi-heart-fill');
          favorite.classList.add('bi-heart');
        } else {
          favorite.classList.remove('bi-heart');
          favorite.classList.add('bi-heart-fill');
        }
      });
    });

    return () => {
      followButtons.forEach((follow) => {
        follow.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div>
      <div className='usercard-div'>
        <p className={props.online ? 'status online' : 'status offline'}>
          {props.online ? 'Online' : 'Offline'}
        </p>
        <p className='favorite'> <i className="bi bi-heart favorite-icon"></i> </p>
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
          <button className='follow'>
            <i className='bi bi-check-square-fill'></i> Follow
          </button>
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
  onMessageClick: PropTypes.func.isRequired,
};

export default User;
