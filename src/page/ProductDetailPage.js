import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);

  let {id} = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/jjeongyull/react-shop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='ma-bt-10'>{product?.title}</div>
          <div className='ma-bt-10'>${product?.price}</div>
          <div className='ma-bt-10'>{product?.choice === true?"concious choice":""}</div>
          <Form.Select className='ma-bt-30 width-30'>
            <option>사이즈</option>
            {product?.size?.map((items, index) => (
              <option key={index} value={items}>{items}</option>
              ))}
          </Form.Select>
          <Button className='width-100' variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage