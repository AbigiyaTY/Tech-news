import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

const Details = () => {
  const details = [{
    author: 'Ashley Paul',
    content: "Tamil Nadu Assembly on Wednesday passed a bill to ban online gambling games and regulate other online games. The bill was introduced by the state's Law Minister S Regupathy. Last year, the government had amended the Tamil Nadu Gaming and Police Laws concerning the ban on online gaming. However, Madras HC struck down the amendment because they found it unconstitutional.",
    date: '19 Oct 2022,Wednesday',
    id: '7d875f155a5b4e06be837ce834ec5c97',
    imageUrl: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/10_oct/19_wed/img_1666171953939_825.jpg?',
    time: '03:29 pm',
    title: 'Tamil Nadu Assembly passes bill to ban online gambling games',
    url: 'https://www.inshorts.com/en/news/tamil-nadu-assembly-passes-bill-to-ban-online-gambling-games-1666173578375',
  }];

  return (
    <BrowserRouter>
      <h3>Technology News Detail</h3>
      <ListGroup>
        {details.map((detail) => (
          <ListGroup.Item key={detail.id}>
            <h5>{detail.title}</h5>
            <p>{detail.content}</p>
            <h3>{detail.author}</h3>
            <h3>{detail.date}</h3>
            <h3>{detail.time}</h3>
            <h3>{detail.url}</h3>
            <img src={detail.imageUrl} alt="News" />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </BrowserRouter>
  );
};

export default Details;
