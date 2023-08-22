import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sapi1 from '../../assets/img/Sapi/sapi1.jpg'

const BeliSapi = () => {
    return (
        <Container>
            <Row>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
                <Col><CardJualSapi /></Col>
            </Row>
        </Container>
    );
}

export default BeliSapi;


const CardJualSapi = () => {
    return (
        <Card style={{ width: '18rem', marginTop: "2rem" }}>
            <Card.Img variant="top" src={Sapi1}/>
            <Card.Body>
                <Card.Title>Sapi Afrika</Card.Title>
                <Card.Text>Sapi tanpa kandungan air didalam tubuhnya karena sangat krisis air di daerah ini</Card.Text>
                <Button variant="danger">Beli Hewan</Button>
            </Card.Body>
        </Card>
    )
}