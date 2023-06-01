import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Section1 = () => {
  return (
    <>
      <section className='baneer' id='home'>
        <Container>
          <Row>
            <Col md={7} sm={12} >
              <h1>THE FUTURE OF THE GAME</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. 
                Sint molestias eos et incidunt beatae
                 minus sequi mollitia eius odio ex assumenda voluptatibus,
                 hic pariatur quis consequuntur, 
                 hic pariatur quis consequuntur, 
              </p>
              <Button variant="primary">ADD TO CART</Button>
            </Col>
            <Col md={5} sm={12}>
              <div className='imgs'>
                <img src="imgs/2.png" alt="222" height={500}  />
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section1;
