import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

function Like() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike} style={{ cursor: "pointer" }}>
      {liked ? <FaHeart color="#E07B67" /> : <FaRegHeart color="#E07B67" />}
    </div>
  );
}

export default Like;
