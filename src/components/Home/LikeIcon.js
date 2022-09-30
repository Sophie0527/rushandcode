import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

function LikeIcon({ product }) {
  // 상품의 like를 state로 하고, 하트아이콘 클릭 시 setState로 변경하기!
  const [isLike, setIsLike] = useState(product.like);
  const likeBtn = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      {!isLike ? (
        <AiOutlineHeart size="24" onClick={likeBtn} />
      ) : (
        <AiFillHeart size="24" color="tomato" onClick={likeBtn} />
      )}
    </>
  );
}

export default LikeIcon;
