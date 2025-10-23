import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesPage() {
  const movies = [
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      poster: "https://image.tmdb.org/t/p/w500/qmswXRwW2XHdVNMeruExgkt1aQ.jpg",
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      poster: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      title: "Fight Club",
      year: 1999,
      rating: 8.8,
      poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: 8.8,
      poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
      poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
    },
    {
      title: "The Godfather: Part II",
      year: 1974,
      rating: 9.0,
      poster: "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      rating: 8.8,
      poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
      rating: 8.7,
      poster: "https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg",
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
      rating: 8.9,
      poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      title: "Gladiator",
      year: 2000,
      rating: 8.5,
      poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      title: "The Prestige",
      year: 2006,
      rating: 8.5,
      poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    },
  ];
  return (
    <>
      <h1>MoviesCard</h1>
      <div className="container ">
        <div className="row">
          {movies.map((movie, index) => (
            <MoviesCard
              key={index}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              poster={movie.poster}
            />
          ))}
        </div>
      </div>
    </>
  );
}
