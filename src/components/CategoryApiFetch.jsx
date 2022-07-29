import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputUnit } from './molecules/InputUnit';

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

  const onClickDelete = (id) => {
    axios.delete(`${categoryURL}${id}`).then(
      res => {
        console.log(res);
        setCategorys(categorys.filter(category => category.id !== id));
      }
    ).catch(
      error => console.log(error)
    )
  }

  useEffect(() => {
    axios.get(categoryURL).then(res => {
      setCategorys(res.data);
    })
  }, []);
  return (
    <>
      <div>
        <InputUnit newCategory={newCategory} handleChange={handleChange} placeholder="新しいカテゴリー名を入力" createNewCategory={createNewCategory} children="投稿" />
      </div>
      <div>
        <h1>Category List</h1>
          <ul>
            {categorys.map(category => {
              return (
                <li key={category.id}>
                  <div>
                    <p>{`id：${category.id}　name：${category.name}`}</p>
                    <button onClick={() => onClickDelete(category.id)}>delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </>
  );
}
