import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import User from './User';
import './index.css';

const Userdata=[
  {
    playername: 'Rohit Sharma',
    online: true,
    country: 'INDIA',
    role: 'Captain Batsman',
    image: 'Images/Rohit.jpg',
    coverimage: 'Images/Rohitcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Virat Kohli',
    online: true,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Virat.jpg',
    coverimage: 'Images/Viratcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'MS Dhoni',
    online: false,
    country: 'INDIA',
    role: 'Batsman (WK)',
    image: 'Images/Dhoni.jpg',
    coverimage: 'Images/Dhonicover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Sachin Tendulkar',
    online: false,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Sachin.jpg',
    coverimage: 'Images/Sachincover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Pat Cummins',
    online: true,
    country: 'Australia',
    role: 'Captain Bowler',
    image: 'Images/Cummins.jpg',
    coverimage: 'Images/Cumminscover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Mithali Raj',
    online: false,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Mithali.jpg',
    coverimage: 'Images/Mithalicover.jpg',
    gender: 'women',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Smriti Mandhana',
    online: true,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Smriti.jpg',
    coverimage: 'Images/Smriticover1.jpg',
    gender: 'women',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Harman Preet Kaur',
    online: true,
    country: 'INDIA',
    role: 'Captain Batsman',
    image: 'Images/Harman.jpg',
    coverimage: 'Images/Harmancover.jpg',
    gender: 'women',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Kane Williamson',
    online: true,
    country: 'NewZealand',
    role: 'Captain Batsman',
    image: 'Images/Williamson.jpg',
    coverimage: 'Images/Williamsoncover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Ben Stokes',
    online: true,
    country: 'England',
    role: 'All Rounder',
    image: 'Images/Stokes.jpg',
    coverimage: 'Images/Stokescover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Jasprit Bumrah',
    online: true,
    country: 'INDIA',
    role: 'Bowler',
    image: 'Images/Bumrah.jpg',
    coverimage: 'Images/Bumrahcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Kieron Pollard',
    online: false,
    country: 'WESTINDIES',
    role: 'Batsman',
    image: 'Images/Pollard.jpg',
    coverimage: 'Images/Pollardcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Hardik Pandya',
    online: true,
    country: 'INDIA',
    role: 'All Rounder',
    image: 'Images/Hardik.jpg',
    coverimage: 'Images/Hardikcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Meg Lanning',
    online: true,
    country: 'Australia',
    role: 'Captain, Batsman',
    image: 'Images/Meg.jpg',
    coverimage: 'Images/Megcover.jpg',
    gender: 'women',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'David Warner',
    online: true,
    country: 'Australia',
    role: 'Batsman',
    image: 'Images/Warner.jpg',
    coverimage: 'Images/Warnercover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Trent Boult',
    online: true,
    country: 'NewZealand',
    role: 'Bowler',
    image: 'Images/Boult.jpg',
    coverimage: 'Images/Boultcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'James Anderson',
    online: false,
    country: 'England',
    role: 'Bowler',
    image: 'Images/Anderson.jpg',
    coverimage: 'Images/Andersoncover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },

  {
    playername: 'Steven Smith',
    online: true,
    country: 'Australia',
    role: 'Batsman',
    image: 'Images/Smith.jpg',
    coverimage: 'Images/Smithcover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Sunil Narine',
    online: false,
    country: 'WESTINDIES',
    role: 'All Rounder',
    image: 'Images/Narine.jpg',
    coverimage: 'Images/Narinecover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Surya Kumar Yadav',
    online: true,
    country: 'INDIA',
    role: 'Batsman',
    image: 'Images/Sky.jpg',
    coverimage: 'Images/Skycover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Nicholas Pooran',
    online: true,
    country: 'WESTINDIES',
    role: 'Batsman (WK)',
    image: 'Images/Pooran.jpg',
    coverimage: 'Images/Poorancover.jpg',
    gender: 'man',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Amelia Kerr',
    online: true,
    country: 'NewZealand',
    role: 'All Rounder',
    image: 'Images/Amelia.jpg',
    coverimage: 'Images/Ameliacover.jpg',
    gender: 'women',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
  {
    playername: 'Ellyse Perry',
    online: true,
    country: 'Australia',
    role: 'All Rounder',
    image: 'Images/Perry.jpg',
    coverimage: 'Images/Perrycover.jpg',
    gender: 'women',
    facebook:"https://www.facebook.com/RohitSharmaOfficialPage/",
    instagram:"https://www.instagram.com/rohitsharma45/?hl=en",
  },
]


export const UserCard = ({ filter, onMessageClick }) => {
  const [filteredUsers, setFilteredUsers] = useState(Userdata);

  useEffect(() => {
    const lowerCaseFilter = filter.toLowerCase();
    const filtered = Userdata.filter((user) =>
      user.playername.toLowerCase().includes(lowerCaseFilter) ||
      user.country.toLowerCase().includes(lowerCaseFilter) ||
      user.role.toLowerCase().includes(lowerCaseFilter) ||
      user.gender.toLowerCase().includes(lowerCaseFilter)
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
          gender={user.gender}
          coverimage={user.coverimage}
          role={user.role}
          facebook={user.facebook}
          instagram={user.instagram}
          onMessageClick={onMessageClick}
        />
      ))}
    </>
  );
};

UserCard.propTypes = {
  filter: PropTypes.string.isRequired,
  onMessageClick: PropTypes.func.isRequired,
};

 