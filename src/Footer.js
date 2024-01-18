import React from "react";
import "./Footer.css";
import tmdbIcon from "./assets/tmdb.svg";

function Footer() {
  return (
    <div className="footer">
			<img src={tmdbIcon} alt="TMDB ICON"/>
			<p>
				<a href="https://github.com/levos-snr">@Levos </a> | <a href="https://github.com/levos-snr/movie-app"> GitHub</a>
			</p>
		</div>
  )
}
export default Footer;