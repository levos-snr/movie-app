import React, { useState, useRef } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import "./Header.css";
import axios from './axios';
import  {fetchSearchString } from './api';
import NFLogo from './assets/logo1.png';
import UserIcon from './assets/nfuser.jpg';
import {auth} from './firebase';
import {useNavigate, useLocation, NavLink} from 'react-router-dom';

function Header({ setSearchResult, setLoading, popularVisible, resetApp }) {
  const [input, setInput] = useState('');
  const inputEl = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const errorOccurred = (error) => {
	setLoading(false);
	alert('Something went wrong.');
	console.log(error.message);
  }
  
  const goBack = () => {
  	resetApp();
  	navigate('/');
  }

  const searchQuery = (query) => {
  	navigate('/');
    axios.get(fetchSearchString(query)).then((response) => {
      if (response.data.total_results < 1) {
        alert("No Results Found");
        setLoading(false);
      } else {
        setSearchResult(response.data.results);
      }
    }).catch((err) => errorOccurred(err));
  }

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchQuery(input);
    setSearchOpen(false);
    inputEl.current.blur();
    setLoading(true);
    setTimeout(() => setInput(''), 100);
  }

  const handleUser = () => {
  	if (auth.currentUser) {
  		navigate('/profile');
  	} else {
  		navigate('/login');
  	}
  }
  
  const searchClick = () => {
    setSearchOpen(true);
    setTimeout(() => { inputEl.current.focus() }, 300);
  }

  return (
    <div className="app__header">
			<ul className="app__nav">
				{(!popularVisible || location.pathname !== '/') && <li className="app__back mobile" onClick={goBack}><ChevronLeftRoundedIcon style={{ fontSize: 24 }} /></li>}
				<li className={`app__search mobile ${(searchOpen || input) ? "open" : ""}`} onClick={searchClick}>
					<SearchRoundedIcon style={{ fontSize: 20 }} className="app__searchIcon" onClick={searchClick} />
					<form>
						<input ref={inputEl} type="search" value={input} onBlur={() => setSearchOpen(false)} onChange={(e) => setInput(e.target.value)} placeholder="Search..." />
						<button onClick={(e) => handleSearch(e)} type="submit"></button>
					</form>
				</li>
				<li>
          <NavLink to="/" className={({isActive}) => (isActive ? "active-style" : 'none')}>Home</NavLink>
          </li>
				<li>
          <NavLink to="/about" className={({isActive}) => (isActive ? "active-style" : 'none')}>About</NavLink>
          </li>
				<li>
          <a href="#">Movies</a>
          </li>
				<li><a href="#">Series</a></li>
				<li><a href="#">Featured</a></li>
			</ul>
			<div className="app__user" onClick={handleUser}>
				<img src={auth.currentUser?.photoURL || UserIcon} alter="User Icon"/>
				<span>{auth.currentUser?.displayName || auth.currentUser?.email || 'Login'}</span>
			</div>
			<img className="app__title" src={NFLogo} onClick={()=>navigate('/')} alt="Logo"/>
		</div>
  )
}

export default Header;
