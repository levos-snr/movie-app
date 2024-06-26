import React, { useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextTruncate from "react-text-truncate";
import ModalVideo from "react-modal-video";
import numeral from "numeral";
import "./modalVideo.css";
import "./FeaturedMovie.css";

function FeaturedMovie({
  title,
  overlayStyle,
  featuredMovie,
  featuredCertification,
  videoId,
  setTruncLine,
  truncLine,
}) {
  const [playing, setPlaying] = useState(false);

  const readMore = (e) => {
    setTruncLine(0);
    e.preventDefault();
    e.target.style.display = "none";
  };

  const getReleaseYear = (date) => {
    let year = new Date(date);
    return year.getFullYear();
  };

  return (
    <div className={`app__featured ${playing ? "fade-in" : ""}`}>
      {videoId && (
        <ModalVideo
          channel="youtube"
          isOpen={playing}
          videoId={videoId}
          onClose={() => setPlaying(false)}
        />
      )}
      <div className="app__overlay" style={overlayStyle}></div>
      <p className="app__featuredInfo">{title}</p>
      <h2 className="app__featuredTitle">
        {featuredMovie.title ||
          featuredMovie.original_title ||
          featuredMovie.name ||
          featuredMovie.original_name}
        <span className="app__featuredYear">
          (
          {getReleaseYear(
            featuredMovie.release_date || featuredMovie.first_air_date
          )}
          )
        </span>
      </h2>
      <p className="app__featuredGenres">
        <span className="app__featuredCert">{featuredCertification}</span>
        {featuredMovie?.genres?.slice(0, 3).map((genre) => (
          <span className="app__featuredGenre">{genre.name}</span>
        ))}
      </p>
      <TextTruncate
        line={truncLine}
        element="p"
        containerClassName="app__featuredDesc"
        textTruncateChild={
          <a href="#" onClick={readMore}>
            <small>[more]</small>
          </a>
        }
        truncateText="…"
        text={featuredMovie.overview}
      />
      {featuredMovie.number_of_seasons && (
        <p className="app__seriesSeasons">
          {featuredMovie.number_of_seasons} Seasons,{" "}
          {featuredMovie.number_of_episodes} Episodes
        </p>
      )}
      <div className="app__featuredRating">
        <Rating
          name="movie-rating"
          value={featuredMovie.vote_average / 2}
          precision={0.5}
          icon={<StarRoundedIcon fontSize="inherit" readOnly />}
        />
        <p className="app__featuredLikes">
          {numeral(featuredMovie.vote_average / 2).format("0.0")}
          <small> ({numeral(featuredMovie.vote_count).format("0,0")})</small>
        </p>
      </div>
      <Button
        className="app__button"
        variant="contained"
        onClick={() => setPlaying(true)}
        startIcon={<PlayArrowRoundedIcon />}
      >
        Play Trailer
      </Button>
    </div>
  );
}

export default FeaturedMovie;
