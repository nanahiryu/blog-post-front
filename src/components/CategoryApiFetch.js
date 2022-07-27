import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CategoryApiFetch = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    axios.get('https://nanahiryu.com/blog_api/category/').then(res => {
      setCategorys(res.data);
    })
  }, []);
  return (
    <>
      <h1>Category List</h1>
      <ul>
        {categorys.map(category => {
          return (
            <li key={category.id}>
              <div>
                <p>{category.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
