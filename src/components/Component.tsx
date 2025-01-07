import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './Item';  // ייבוא רכיב Item
import useFetchData from '../Hook/useFetchData';  // ייבוא ה-hook
import './ItemCss.css';  // ייבוא ה-CSS

const Feed: React.FC = () => {
  const [feedData, hasMore, loading, fetchData] = useFetchData(); // שימוש ב-hook
  
  // פונקציה לחיתוך המערך לקבוצות של 3 פריטים
  const groupItems = (items: any[]) => {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += 3) {
      groupedItems.push(items.slice(i, i + 3)); // כל קבוצה תכיל 3 פריטים
    }
    return groupedItems;
  };

  const [items, setItems] = useState(feedData);  // נשמור את מצב הלייקים כאן

  // עדכון מצב הלייק עבור כל אובייקט
  const toggleLike = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, liked: !item.liked, likes: item.liked ? item.likes - 1 : item.likes + 1 }
          : item
      )
    );
  };

  useEffect(() => {
    console.log(feedData); // הדפסת המידע המתקבל
    if (feedData.length > 0) {
      setItems(feedData); // אם יש נתונים, עדכון ה-state
    }
  }, [feedData]);  // כשרשימת feedData מתעדכנת

  const groupedData = groupItems(items);  // מחלקים את המידע לקבוצות של 3 אובייקטים

  return (
    <div className="all-item">
      <InfiniteScroll
        dataLength={feedData.length}
        next={() => fetchData(feedData.length)}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        endMessage={<div>No more items</div>}
      >
        {groupedData.map((group, index) => (
          <div key={index} className="feed-row">
            {group.map(item => (
              <Item key={item.id} item={item} toggleLike={toggleLike} />
            ))}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Feed;
