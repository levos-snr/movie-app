import React, {useState} from "react";
import "./About.css";
import {useNavigate } from 'react-router-dom';

function About() {
	
	const navigate = useNavigate ();
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if(email) {
			navigate({
				pathname: '/login',
				state: { email: email }
			});
		}
	}
	
  return (
    <div className="about">
    	<div className="about__inner">
			<h1>Unlimited Movies, TV shows and more.</h1>
			<h2>What anywhere. Cancel anytime.</h2>
			<form onSubmit={handleSubmit} className="subscribe">
				<input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address..."/>
				<button>Try 30 Days FREE</button>
			</form>
			<p>Ready to watch? Enter your email to create or access your account.</p>
		</div>

    </div>
  )
}
export default About;