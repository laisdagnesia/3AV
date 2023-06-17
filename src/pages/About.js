import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card';

const About = () => {
    return (
        <Container className='pt-5'>
        <h3>Sobre</h3>
        <h3>Bem-vindo à Sanduíches Deliciosos!</h3>
        <p>Somos uma loja especializada em sanduíches que tem como objetivo oferecer uma experiência gastronômica única e saborosa. 
        Com uma paixão pela culinária e a busca constante pela perfeição, estamos prontos para surpreender o seu paladar.</p>
        <p>Aqui, você encontrará uma variedade incrível de opções para todos os gostos e preferências. De clássicos atemporais a criações inovadoras, cada sanduíche é cuidadosamente elaborado para proporcionar uma explosão de sabores em cada mordida.
        Não importa se você é vegetariano, vegano, fã de carne ou procura opções sem glúten, temos opções deliciosas que atendem a todas as suas necessidades dietéticas.</p>
        <p>Então, se você está em busca de um sanduíche que vai além das suas expectativas, 
        venha nos visitar. Na Sanduíches Deliciosos, acreditamos que a boa comida é uma arte, 
        e estamos prontos para encantar seu paladar e tornar cada refeição uma experiência inesquecível.</p>
      </Container>
    )
}

export default About;