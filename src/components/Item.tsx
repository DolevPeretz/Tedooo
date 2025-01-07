import React from "react";
import './ItemCss.css';

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
  toggleLike: (id: string) => void;  // פונקציה לשינוי מצב הלייק
}

const Item: React.FC<ItemComponentProps> = ({ item, toggleLike }) => {
  const isMultipleImages = item.images.length > 1;  // בודק אם יש יותר מתמונה אחת
  const containerClass = isMultipleImages ? 'images-container scrollable' : 'images-container';  // אם יש יותר מתמונה אחת, נוסיף את מחלקת הגלילה
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
        {/* כפתור הלייק בצד ימין */}
        <button onClick={() => toggleLike(item.id)}>{item.liked ? "Unlike" : "Like"}</button>
      </div>

      <p className="post-text">{item.postText}</p>

      {/* אלמנט שיכיל את התמונות */}
      <div className="images-container">
        {item.images.slice(0, 5).map((img, index) => (
          <img key={index} className="post-image" src={img} alt={`post-image-${index}`} />
        ))}
      </div>

      <div className="stats">
        <span>{item.likes} Likes</span> {/* מציג את מספר הלייקים */}
        <span>{item.comments} Comments</span>
      </div>
    </div>
  );
};

export default Item;
