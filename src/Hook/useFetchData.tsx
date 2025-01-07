import { useState, useEffect } from 'react';
import { ItemProps } from '../components/Item'; // ייבוא טיפוס ItemProps

const useFetchData = (): [ItemProps[], boolean, boolean, (skip: number) => void] => {
  const [feedData, setFeedData] = useState<ItemProps[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async (skip: number) => {
    setLoading(true);
    const response = await fetch(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`);
    const data = await response.json();

    // גישה לשדה data במקום data.items
    if (Array.isArray(data.data)) {
      setFeedData(prevData => [...prevData, ...data.data]);  // עדכון feedData
    } else {
      console.error("Error: 'data' is not an array", data);
    }

    setLoading(false);
    setHasMore(data.hasMore);  // עדכון hasMore
  };

  useEffect(() => {
    fetchData(0);  // טוען את הנתונים בהתחלה
  }, []);

  return [feedData, hasMore, loading, fetchData];  // החזרת הערכים
};

export default useFetchData;
