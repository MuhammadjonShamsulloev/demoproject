import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import Posts from './Posts';
import { Pagination } from 'antd';

const Product = () => {
  const [posts, setPosts] = useState([]);

  const [total, setTotal] = useState('');
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const indexLastPage = page + postPerPage;
  const indexFirstPage = indexLastPage - postPerPage;
  const currentPosts = posts.slice(indexFirstPage, indexLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setPosts(response.data);
        setTotal(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Posts posts={currentPosts} />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={postPerPage}
        total={total}
        current={page}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
        style={{paddingBottom:50}}
      />
    </>
  );
};

export default Product;
