import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
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

    if (menu && offcanvas && cancel && bodytag) {
      menu.addEventListener('click', () => {
        offcanvas.classList.toggle('offcanvas-show');
      });

      cancel.addEventListener('click', () => {
        offcanvas.classList.toggle('offcanvas-show');
      });

      bodytag.addEventListener('click', () => {
        offcanvas.classList.remove('offcanvas-show');
      });
    }

    return () => {
      if (menu) menu.removeEventListener('click', () => {});
      if (cancel) cancel.removeEventListener('click', () => {});
      if (bodytag) bodytag.removeEventListener('click', () => {});
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
        <div className='search-box'>
          <input
            type="text"
            placeholder="Search by player name, country, or role"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="offcanvas">
        <div className="offcanvas-filter">
          <div className="offcanvas-title"> Filter </div>
          <div className="cancel"><i className="bi bi-x"></i></div>
        </div>
        <div className="canva-content">
          <div>
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
                  <h4>{selectedUser.country}</h4>
                </div>
              </div>
              <div className="msg-cancel"><i className="bi bi-x"></i></div>
            </div>
             
            <div className="msg-content">
              {messages[selectedUser.playername]?.map((message, index) => (
                <div key={index}>
                  <div className="msg-msg">{message.content}</div>
                  <div className="msg-time">{message.time}</div>
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
