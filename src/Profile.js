import React from "react";
import "./Profile.css";
import userIcon from './assets/nfuser.jpg';
import {auth} from './firebase';

function Profile({user}) {
	
  return (
    <div className="profile">
    	<div className="profile__header">
<img src={user?.photoURL || userIcon} alt="User Icon" />
<h1>Hi, {user?.displayName}!</h1>
		<button className="signout" onClick={()=> auth.signOut()}>Sign Out</button>
</div>
<h3>Manage your subscription</h3>
<div className="packs">
	<div className="pack">
		<h3>Movie Webapp Mobile</h3>
		<p className="desc">Mobile only, 480p SD Streaming</p>
		<p className="price">Ksh. 2,000</p>
		<button>Activate Now</button>
	</div>
	<div className="pack">
		<h3>Movie Webapp Mobile SD</h3>
		<p className="desc">Two Screens, 480p SD Streaming</p>
		<p className="price">Ksh. 2,200</p>
		<button>Activate Now</button>
	</div>
	<div className="pack active">
		<h3>Movie Webapp Mobile HD</h3>
		<p className="desc">Maximum Five Screens, 1080p HD Streaming</p>
		<p className="price">Ksh. 3,000</p>
		<button>Renews in 12 days</button>
	</div>
	<div className="pack">
		<h3>Movie Webapp Mobile Premium</h3>
		<p className="desc">Unlimited Screens, 4K UHD Streaming</p>
		<p className="price">Ksh. 5,000</p>
		<button>Activate Now</button>
	</div>
</div>

<button className="cancel">Cancel Subscription</button>
    </div>
  )
}
export default Profile;