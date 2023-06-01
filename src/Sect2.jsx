import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
const Section2 = () => {



    
  return (
 <>
  <section className='baneer2' id='products'>
        <Container>
        <Row xs={1} md={2} className="g-4">
   
        <Col >
          <Card>
            <Card.Img variant="top" src="imgs/4.png"  />
            <Card.Body>
              <Card.Title>IRON MAN </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img variant="top" src="imgs/7.jpeg"  />
            <Card.Body>
              <Card.Title > BLACK PANTHER </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img variant="top" src="imgs/6.jpeg"  />
            <Card.Body>
              <Card.Title>NIKE AIR </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Img variant="top" src="imgs/5.jpeg"  />
            <Card.Body>
              <Card.Title>NIKE YELLOW </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    
    </Row>
        </Container>
<script>
    
</script>

      </section>
 </>
  )
}

export default Section2
