import React,{ useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {

  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("london");
  const apiKey = "25333844-8a646b02c99018121c0a1d5f7";

  useEffect(() => {
    const fetchData = async () => {
      
      const api = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&per_page=200`);
      const data = await api.json();
      setImageData(data.hits);

    }

    fetchData();
  }, [query])

  const fetchImageByCategory = async(category) => {
    const api = await fetch(`https://pixabay.com/api/?key=${apiKey}&category=${category}&image_type=photo&pretty=true&per_page=150`);
      const data = await api.json();
      setImageData(data.hits);
  }

  return (
    <div>
      <PixabayContext.Provider value={{ imageData, fetchImageByCategory, setQuery, query }}>
        {props.children}
      </PixabayContext.Provider>
    </div>
  );
}

export default PixabayState