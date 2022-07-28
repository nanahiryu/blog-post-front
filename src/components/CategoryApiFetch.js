import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CategoryApiFetch = () => {
  // const categoryURL = "https://nanahiryu.com/blog_api/category/";　// 本番用
  const categoryURL = "http://localhost:8000/blog_api/category/"; // テスト
  const [categorys, setCategorys] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const handleChange = (e) => setNewCategory(e.target.value);

  const createNewCategory = () => {
    if (newCategory) {
      axios.post(categoryURL, {
        name: newCategory
      }).then(res => {
        setCategorys([...categorys, res.data]);
        setNewCategory("");
      }).catch(error => {
        console.log(error);
      });
    }
  }

  useEffect(() => {
    axios.get(categoryURL).then(res => {
      setCategorys(res.data);
    })
  }, []);
  return (
    <>
      <div>
        <input value={newCategory} onChange={handleChange} />
        <button onClick={createNewCategory}>送信</button>
      </div>
      <div>
        <h1>Category List</h1>
          <ul>
            {categorys.map(category => {
              return (
                <li key={category.id}>
                  <div>
                    <p>{`id：${category.id}　name：${category.name}`}</p>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
}
