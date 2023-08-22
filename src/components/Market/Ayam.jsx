import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ayam1 from '../../assets/img/Ayam/ayam1.jpg'

const BeliAyam = () => {
    return (
        <Container>
            <Row>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
                <Col><CardJualAyam /></Col>
            </Row>
        </Container>
    );
}

export default BeliAyam;


const CardJualAyam = () => {
    return (
        <Card style={{ width: '18rem', marginTop: "2rem" }}>
            <Card.Img variant="top" src={Ayam1} />
            <Card.Body>
                <Card.Title>Ayam Malaysia</Card.Title>
                <Card.Text>Ayam ini sering disiksa oleh dua pemiliknya yang botak yaitu Upin, Ipin, dan Kak Ros.</Card.Text>
                <Button variant="danger">Beli Hewan</Button>
            </Card.Body>
        </Card>
    )
}