import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Unta1 from '../../assets/img/Unta/unta1.jpg'

const BeliUnta = () => {
    return (
        <Container>
            <Row>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
                <Col><CardJualUnta /></Col>
            </Row>
        </Container>
    );
}

export default BeliUnta;


const CardJualUnta = () => {
    return (
        <Card style={{ width: '18rem', marginTop: "2rem" }}>
            <Card.Img variant="top" src={Unta1} />
            <Card.Body>
                <Card.Title>Unta Arab</Card.Title>
                <Card.Text>Unta asli daerah Arab dengan kemampuan berenang yang sangat cepat.</Card.Text>
                <Button variant="danger">Beli Hewan</Button>
            </Card.Body>
        </Card>
    )
}