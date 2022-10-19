import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  const news = [{
    id: '1',
    title: 'Tamil Nadu Assembly passes bill to ban online gambling games',
  }];
  return (
    <BrowserRouter>
      <h3>Latest technology news</h3>
      <ListGroup key={news.id}>
        {news.map((i) => (
          <ListGroup.Item key={i.id}>
            <h5>{i.title}</h5>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </BrowserRouter>
  );
};

export default Home;
