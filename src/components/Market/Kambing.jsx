import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Kambing1 from '../../assets/img/Kambing/kambing1.jpg'

const BeliKambing = () => {
    return (
        <Container>
            <Row>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
                <Col><CardJualKambing /></Col>
            </Row>
        </Container>
    );
}

export default BeliKambing;


const CardJualKambing = () => {
    return (
        <Card style={{ width: '18rem', marginTop: "2rem" }}>
            <Card.Img variant="top" src={Kambing1} />
            <Card.Body>
                <Card.Title>Kambing Rusia</Card.Title>
                <Card.Text>Kambing bertenaga nuklir ini dikembangkan oleh Vladimir Putin dengan bantuan tentaranya.</Card.Text>
                <Button variant="danger">Beli Hewan</Button>
            </Card.Body>
        </Card>
    )
}