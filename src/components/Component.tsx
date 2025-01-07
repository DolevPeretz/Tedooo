import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Item from './Item';  
import useFetchData from '../Hook/useFetchData';  
import '../CSS/ItemCss.css'; 

const Feed: React.FC = () => {
  const [feedData, hasMore, loading, fetchData] = useFetchData(); 
  
  const groupItems = (items: any[]) => {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += 3) {
      groupedItems.push(items.slice(i, i + 3)); 
    }
    return groupedItems;
  };

  const [items, setItems] = useState(feedData);  

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
    console.log(feedData); 
    if (feedData.length > 0) {
      setItems(feedData); 
    }
  }, [feedData]); 

  const groupedData = groupItems(items);  

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
