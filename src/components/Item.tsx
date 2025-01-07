import React from "react";
import '../CSS/ItemCss.css';

export interface ItemProps {
  id: string;
  userName: string;
  shopName: string;
  postText: string;
  images: string[];
  likes: number;
  comments: number;
  liked: boolean;
  avatar: string;
}

interface ItemComponentProps {
  item: ItemProps;
  toggleLike: (id: string) => void;  
}

const Item: React.FC<ItemComponentProps> = ({ item, toggleLike }) => {
  return (
    <div className="feed-item">
      <div className="feed-item-header">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img className="avatar" src={item.avatar} alt="user avatar" />
          <div>
            <h3>{item.userName}</h3>
            <div className="shop-name">{item.shopName}</div>
          </div>
        </div>
        <button onClick={() => toggleLike(item.id)}>{item.liked ? "Unlike" : "Like"}</button>
      </div>

      <p className="post-text">{item.postText}</p>

      <div className="images-container">
        {item.images.slice(0, 5).map((img, index) => (
          <img key={index} className="post-image" src={img} alt={`post-image-${index}`} />
        ))}
      </div>

      <div className="stats">
        <span>{item.likes} Likes</span> 
        <span>{item.comments} Comments</span>
      </div>
    </div>
  );
};

export default Item;
