import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { UserCard } from "./UserCards";
import './index.css';

const App = () => {
  const [filter, setFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState({});

  const textareaRef = useRef(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilterItemClick = (filterValue) => {
    setFilter(filterValue);
  };

  const handleMessageClick = (user) => {
    setSelectedUser(user);
    document.querySelector('.msg-body').classList.add('msg-show');
    document.querySelector('.msg-bg').classList.add('msg-bgshow');
  };

  const handleSend = () => {
    if (msg.trim() !== '') {
      const newMessage = {
        content: msg,
        time: new Date().toLocaleTimeString()
      };
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedUser.playername]: [...(prevMessages[selectedUser.playername] || []), newMessage]
      }));
      setMsg('');
    }
  };

  useEffect(() => {
    const toggleSection = (sectionClass) => {
      const section = document.querySelector(sectionClass);
      if (section) {
        const items = section.nextElementSibling;
        const icon = section.querySelector('.fa-chevron-right');

        section.addEventListener('click', () => {
          items.classList.toggle('show-items');
          icon.classList.toggle('rotated');
        });
      }
    };

    toggleSection('.canva-country');
    toggleSection('.canva-role');
    toggleSection('.canva-gender');

    const menu = document.querySelector('.menu');
    const offcanvas = document.querySelector('.offcanvas');
    const cancel = document.querySelector('.cancel');
    const bodytag = document.querySelector('.usercard');
    const searchicon = document.querySelector('.search-icon');
    const searchbox = document.querySelector('.search-box');
    const backarrow = document.querySelector('.back-arrow');
    const brand = document.querySelector('.navbar-brand');

    const handleMenuClick = () => {
        offcanvas.classList.toggle('offcanvas-show');
    };

    const handleCancelClick = () => {
        offcanvas.classList.toggle('offcanvas-show');
    };

    const handleBodyClick = () => {
        offcanvas.classList.remove('offcanvas-show');
    };

    const handleSearchIconClick = () => {
        searchicon.classList.add('nav-hide');
        brand.classList.add('nav-hide');
        menu.classList.add('nav-hide');
        searchbox.classList.add('nav-show');
        backarrow.classList.add('nav-show');
    };

    const handleBackArrowClick = () => {
        searchicon.classList.remove('nav-hide');
        brand.classList.remove('nav-hide');
        menu.classList.remove('nav-hide');
        searchbox.classList.remove('nav-show');
        backarrow.classList.remove('nav-show');
    };

    if (menu && offcanvas && cancel && bodytag && searchicon && searchbox && backarrow && brand) {
        menu.addEventListener('click', handleMenuClick);
        cancel.addEventListener('click', handleCancelClick);
        bodytag.addEventListener('click', handleBodyClick);
        searchicon.addEventListener('click', handleSearchIconClick);
        backarrow.addEventListener('click', handleBackArrowClick);
    }

    return () => {
        if (menu) menu.removeEventListener('click', handleMenuClick);
        if (cancel) cancel.removeEventListener('click', handleCancelClick);
        if (bodytag) bodytag.removeEventListener('click', handleBodyClick);
        if (searchicon) searchicon.removeEventListener('click', handleSearchIconClick);
        if (backarrow) backarrow.removeEventListener('click', handleBackArrowClick);
    };
}, []);


  useEffect(() => {
    const msgcancel = document.querySelector('.msg-cancel');

    if (msgcancel) {
      msgcancel.addEventListener('click', () => {
        document.querySelector('.msg-body').classList.remove('msg-show');
        document.querySelector('.msg-bg').classList.remove('msg-bgshow');
      });
    }

    const textarea = textareaRef.current;

    const handleInput = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    if (textarea) {
      textarea.addEventListener('input', handleInput);
    }

    return () => {
      if (msgcancel) msgcancel.removeEventListener('click', () => {});
      if (textarea) textarea.removeEventListener('input', handleInput);
    };
  }, [selectedUser]);

  return (
    <>
      <div className='navbar'>
        <div className="menu"><i className="bi bi-list"></i></div>
        <div className='navbar-brand'>CRICKETERS</div>
        <div className="back-arrow"> <ion-icon name="arrow-back-sharp"></ion-icon> </div>
        <div className="search-icon"> <i className="bi bi-search"></i> </div>
        <div className='search-box'>
          <div className="search-box-content">
          <div>
          <input
            type="text"
            placeholder="Search by player name, country, role or gender"
            value={filter}
            onChange={handleFilterChange}
          /> 
          </div>
          <div>
          <i class="bi bi-x search-cancel"  onClick={() => handleFilterItemClick('')} ></i>
          </div>
          </div>
          
        </div>
      </div>
      <div className="offcanvas">
        <div className="offcanvas-filter">
          <div className="offcanvas-title"> Filter </div>
          <div className="cancel"><i className="bi bi-x"></i></div>
        </div>
        <div className="canva-content">
          <div>
            <div className="allplayers" onClick={() => handleFilterItemClick('')}>
            <i class="bi bi-stars"></i>All players
            </div>
            <div className="canva-country">
              <i className="fa fa-chevron-right"></i> Country
            </div>
            <div className="country-items">
              <li onClick={() => handleFilterItemClick('India')}>India</li>
              <li onClick={() => handleFilterItemClick('Australia')}>Australia</li>
              <li onClick={() => handleFilterItemClick('NewZealand')}>New Zealand</li>
              <li onClick={() => handleFilterItemClick('England')}>England</li>
              <li onClick={() => handleFilterItemClick('WestIndies')}>West Indies</li>
              <li onClick={() => handleFilterItemClick('SouthAfrica')}>South Africa</li>
              <li onClick={() => handleFilterItemClick('Pakistan')}>Pakistan</li>
              <li onClick={() => handleFilterItemClick('SriLanka')}>Sri Lanka</li>
            </div>
          </div>
          <div>
            <div className="mt canva-role">
              <i className="fa fa-chevron-right"></i> Role
            </div>
            <div className="role-items">
              <li onClick={() => handleFilterItemClick('Batsman')}>Batsman</li>
              <li onClick={() => handleFilterItemClick('Bowler')}>Bowler</li>
              <li onClick={() => handleFilterItemClick('All Rounder')}>All Rounder</li>
            </div>
          </div>
          <div>
            <div className="mt canva-gender">
              <i className="fa fa-chevron-right"></i> Gender
            </div>
            <div className="gender-items">
              <li onClick={() => handleFilterItemClick('Man')}>Men</li>
              <li onClick={() => handleFilterItemClick('Women')}>Women</li>
            </div>
          </div>
        </div>
      </div>
      <div className='msg-bg'></div>
      <div className='msg-body'>
        {selectedUser && (
          <>
            <div className="msg-head">
              <div className="msg-title">
                <div><img src={selectedUser.image} alt="." /></div>
                <div>
                  <h3>{selectedUser.playername}</h3>
                  <h4 className={selectedUser.country.toLowerCase()}>{selectedUser.country}</h4>
                </div>
              </div>
              <div className="msg-cancel"><i className="bi bi-x"></i></div>
            </div>
             
            <div className="msg-content">
              {messages[selectedUser.playername]?.map((message, index) => (
                <div key={index} className="msg-index">
                  <div className="msg-msg-body">
                  <div className="msg-msg">{message.content}</div>
                  <div className="msg-time">{message.time}</div>
                  </div>
                  <div className="automatic-msg">
                  <div className="automatic">Hey Friend! I am {selectedUser.playername} <br />
                   You Want to know more about me <br />
                   <div className="social">
                   <a href={selectedUser.facebook} target="_blank" rel="noopener noreferrer" className="social-fb"> <i class="bi bi-facebook"></i> </a> 
                   <a href={selectedUser.instagram} target="_blank" rel="noopener noreferrer" className="social-insta"> <i class="bi bi-instagram"></i> </a>
                   </div></div>
                  <div className="msg-time">{message.time}</div>

                  </div>
                  
                </div>
              ))}
            </div>
            
            <div className="msg-footer">
              <div>
                <textarea 
                  ref={textareaRef}
                  name=""
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Write a Message"
                  className='auto-resize-textarea'
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>
              <div className="msg-send" onClick={handleSend}><ion-icon name="send-sharp"></ion-icon></div>
            </div>
          </>
        )}
      </div>

      <div className='usercard'>
        <UserCard filter={filter} onMessageClick={handleMessageClick} />
      </div>
    </>
  );
};

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);
