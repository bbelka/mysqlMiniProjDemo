SELECT movie_name AS title, review
FROM movies
    JOIN reviews ON movies.id=movie_id
    WHERE movies.id=4