import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button,Space } from 'antd';
import logoImg from '../imges/Logo zypl.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'antd/dist/antd.css';


  

const { Meta } = Card;

const Posts = ({ posts }) => {
  const [searchInput, setSearchInput] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const { Search } = Input;

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = posts.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };

  return (
    <>
      <Container fluid style={{paddingTop:20, paddingBottom:20, background:'white'}}>
          <Row className="top-heading d-flex align-items-center  ">
            <Col style={{cursor:'pointer'}} md={2} sm={2} className=" align-items-center">
              <span className="main-logo ">
                <img src={logoImg} style={{width:100}} alt="" />
              </span>
            </Col>
            <Col md={3} className=" p-0 align-items-center">
            <Space className="d-flex align-items-center justify-content-end  ">
             <Search placeholder="Search your info" onChange={(e) => searchItems(e.target.value)} allowClear style={{ width: 200 }} />
            </Space>
            </Col >
            <Col md={3} sm={0}  className="align-items-center"></Col>
            <Col style={{cursor:'pointer'}} md={1} className=" d-flex justify-content-start align-items-center p-0"> 
              О нас
            </Col>
            <Col style={{cursor:'pointer'}} md={1} sm={4}  className=" d-flex justify-content-end align-items-center p-0"> 
              <span >
                Партнеры
              </span>
            </Col>
            <Col style={{cursor:'pointer'}} md={1} sm={4}  className=" d-flex align-items-center justify-content-center"> 
              <span style={{paddingLeft:20}}>
                Контакты
              </span>
              <span className="basket-text d-flex justify-content-center align-items-center "> </span> 
            </Col>
          </Row>
        </Container>
        <h6 style={{paddingTop:20}}>The information you see  below coming from server.</h6>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ padding: 20 }}
      >
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <Card
                  hoverable
                  style={{
                    width: 240,
                    height: 345,
                    margin: 5,
                    textDecoration: 'none',
                  }}
          
                  cover={
                    <img
                      style={{ height: 180 }}
                      alt={item.title}
                      src={item.url}
                    />
                  }
                  key={item.id}
                >
                  <div className="cart-back">
                    <Meta
                      style={{ marginTop: 15 }}
                      title={item.id - 1}
                      className="d-flex justify-content-center"
                    />
                    <Meta description={item.title} />
                  </div>
                  <Button style={{ marginTop: 10 }} type="primary" block>
                    More Details
                  </Button>
                </Card>
              );
            })
          : posts.map((item) => {
              return (
                <Card
                  hoverable
                  style={{
                    width: 240,
                    height: 345,
                    margin: 5,
                    textDecoration: 'none',
                  }}
                  cover={
                    <img
                      style={{ height: 180 }}
                      alt={item.title}
                      src={item.url}
                    />
                  }
                  key={item.id}
                >
                  <div className="cart-back">
                    <Meta
                      style={{ marginTop: 15 }}
                      title={item.id - 1}
                      className="d-flex justify-content-center"
                    />
                    <Meta description={item.title} />
                  </div>
                  <Button style={{ marginTop: 10 }} type="primary" block>
                    More Details
                  </Button>
                </Card>
              );
            })}
      </div>
    </>
  );
};

export default Posts;
