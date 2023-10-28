import { getReviewId } from 'api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError(false);
        const fetchedReviews = await getReviewId(params.movieId);
        setReviewList(fetchedReviews.results);
      } catch (error) {
        setError(true);
      }
    }

    getMovieDetails();
  }, [params.movieId]);

  return (
    <div>
      {reviewList.length > 0 ? (
        <ul>
          {reviewList.map(review => (
            <li key={review.id}>
              <p>
                Author: <b>{review.author}</b>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie yet.</p>
      )}

      {error && <p>Whoops! Something went wrong. Please reload the page.</p>}
    </div>
  );
};
