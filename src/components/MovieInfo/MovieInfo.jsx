import s from "./MovieInfo.module.css"


const MovieInfo = ({ imageData, movie }) => {
  const { title, release_date, vote_average, overview, poster_path } = movie;
  const { base_url } = imageData;
  return (
    <div className={s.container}>
      <div>
        <img
          src={`${base_url}/original${poster_path}`}
          alt={title}
        />
      </div>
      <div>
        <div>
          <h2>
            {title} ({release_date})
          </h2>
          <p>Vote Average : {vote_average}</p>
        </div>
        <div>
          <h2>Owerview</h2>
          <p>{overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <div>
            {movie.genres.map(({ name }) => (
              <p key={name}>{name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
