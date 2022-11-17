import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Reviews.module.scss';

const Reviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a944d85c2c0e6d65800ba2ca920ee80d`)
        .then(respond => respond.json())
        .then(result => {
            setReviews(result.results);
        })
        .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!reviews.length){
        return (
            <p className={styles.noReviewsInfo}>We don't have any reviews for this movie</p>
        );
    }
    return (
        <section>
            <ul>
                {reviews.map(review => {
                    return (
                        <li key={review.id}>
                            <h6 className={styles.reviewAuthorNickname}>Author: {review.author}</h6>
                            <p>{review.content}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Reviews;