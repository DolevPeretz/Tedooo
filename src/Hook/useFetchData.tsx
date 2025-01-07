import { useState, useEffect } from 'react';
import { ItemProps } from '../components/Item'; 

const useFetchData = (): [ItemProps[], boolean, boolean, (skip: number) => void] => {
  const [feedData, setFeedData] = useState<ItemProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async (skip: number) => {
    setLoading(true);
    const response = await fetch(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`);
    const data = await response.json();

    if (Array.isArray(data.data)) {
      setFeedData(prevData => [...prevData, ...data.data]);  
    } else {
      console.error("Error: 'data' is not an array", data);
    }

    setLoading(false);
    setHasMore(data.hasMore);  
  };

  useEffect(() => {
    fetchData(0);  
  }, []);

  return [feedData, hasMore, loading, fetchData]; 
};

export default useFetchData;
