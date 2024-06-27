import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Userdata = [
  {
    playername: 'Rohit Sharma',
    online: true,
    country: 'INDIA',
    role: 'Captain Batsman',
    image: 'Images/Rohit.jpg',
    coverimage: 'Images/Rohitcover.jpg'
  },
  {
    playername: 'Virat Kohli',
    online: true,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Virat.jpg',
    coverimage: 'Images/Viratcover.jpg'
  },
  {
    playername: 'MS Dhoni',
    online: false,
    country: 'INDIA',
    role: 'Batsman (WK)',
    image: 'Images/Dhoni.jpg',
    coverimage: 'Images/Dhonicover.jpg'
  },
  {
    playername: 'Sachin Tendulkar',
    online: false,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Sachin.jpg',
    coverimage: 'Images/Sachincover.jpg'
  },
  {
    playername: 'Jasprit Bumrah',
    online: true,
    country: 'INDIA',
    role: 'Bowler',
    image: 'Images/Bumrah.jpg',
    coverimage: 'Images/Bumrahcover.jpg'
  },
  {
    playername: 'Hardik Pandya',
    online: true,
    country: 'INDIA',
    role: 'All Rounder',
    image: 'Images/Hardik.jpg',
    coverimage: 'Images/Hardikcover.jpg'
  },
  {
    playername: 'Smriti Mandhana',
    online: true,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Smriti.jpg',
    coverimage: 'Images/Smriticover1.jpg'
  },
  {
    playername: 'Harman Preet Kaur',
    online: true,
    country: 'INDIA',
    role: 'Captain Batsman',
    image: 'Images/Harman.jpg',
    coverimage: 'Images/Harmancover.jpg'
  },
  {
    playername: 'Surya Kumar Yadhav',
    online: true,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Sky.jpg',
    coverimage: 'Images/Skycover.jpg'
  },
];

function User(props) {
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
        <img src={props.coverimage} alt="coverimg" className='cover-image' />
        <img src={props.image} alt='user' className='cricketers' />
        <div className='name-div'>
          <h3>{props.playername}</h3>
          <img src='/Images/Verified.png' alt='logo' className='verified' />
        </div>
        <h3 className='india'>{props.country}</h3>
        <h4>{props.role}</h4>
        <div className='buttons'>
          <button className='message'>
            <div className='name-div'>
              <img src='/Images/messenger.png' alt='logo' className='messenger' />
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
};

export const UserCard = ({ filter }) => {
  const [filteredUsers, setFilteredUsers] = useState(Userdata);

  useEffect(() => {
    const lowerCaseFilter = filter.toLowerCase();
    const filtered = Userdata.filter((user) =>
      user.playername.toLowerCase().includes(lowerCaseFilter) ||
      user.country.toLowerCase().includes(lowerCaseFilter) ||
      user.role.toLowerCase().includes(lowerCaseFilter)
      );
      setFilteredUsers(filtered);
    }, [filter]);
  
    return (
      <>
        {filteredUsers.map((user, index) => (
          <User
            key={index}
            playername={user.playername}
            country={user.country}
            online={user.online}
            image={user.image}
            coverimage={user.coverimage}
            role={user.role}
          />
        ))}
      </>
    );
  };
  
  UserCard.propTypes = {
    filter: PropTypes.string.isRequired,
  };
  
