import { getReviewId } from 'api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewItem,
  ReviewContent,
  AuthorName,
  Author,
} from './Reviews.styled';

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
            <ReviewItem key={review.id}>
              <Author>
                Author: <AuthorName>{review.author}</AuthorName>
              </Author>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie yet.</p>
      )}

      {error && <p>Whoops! Something went wrong. Please reload the page.</p>}
    </div>
  );
};
