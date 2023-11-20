import React, { useState, useEffect } from "react";
import ProductCard from '../component/ProductCard';

// container 부르기
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setproductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log(searchQuery)
    let url = `https://my-json-server.typicode.com/jjeongyull/react-shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setproductList(data);
  }

  useEffect(() => {
    getProducts();
  },[query])

  return (
    <div>
      <Container>
       
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3}><ProductCard key={index} items={menu}/></Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll