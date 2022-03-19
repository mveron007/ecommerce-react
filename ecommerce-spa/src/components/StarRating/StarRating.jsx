import React, {useState} from 'react'
import Star from '../Star/Star'
import './StarRating.css';

const StarRating = ({onChange}) => {
    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
        onChange?.(newRating);
    };

  return (
    <div className='text-center'>
        <span className='d-flex starContainer justify-content-center'>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                key={value}
                filled={value <= rating}
                onClickChange={() => changeRating(value)}
                />
            ))}
        </span>
    </div>
  )
}

export default StarRating