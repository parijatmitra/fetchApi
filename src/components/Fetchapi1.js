import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsItem from './NewsItem';

export default function Fetchapi1() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            
            <div className="row">
         
            {items.map(item => (
              <div className="col-md-3 my-3" key={item.id}>
                 <NewsItem username={item.address.street} />
             </div>
            ))}
          
          </div>
          </>
        );
      }





 
}
