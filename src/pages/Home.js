import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <Container className='pt-5'>
        <h3>Início</h3>
        <h3>Loja</h3>
        <Row>
          <Col md={4}>
              <Card titulo="Combo 1" descricao="Sanduiche X-Tudo + Porção de Fritas" button="Comprar"/>
          </Col>
          <Col md={4}>
              <Card titulo="Combo 2" descricao="Big Sanduiche + Porção de Fritas + Refrigerantes" button="Comprar"/>
          </Col>
          <Col md={4}>
              <Card titulo="Combo 3" descricao="Super Sanduiche + Porção de Fritas + Suco" button="Comprar"/>
          </Col>
        </Row>
      </Container>
    )
}

export default Home;