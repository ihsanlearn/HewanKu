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


const dataSapi = [
    {
        id: 1,
        name: "",
        description: "",
        image: "../../assets/img/Sapi/sapi1.jpg",
        price: "Rp11.999.000,00"
    }
]

const CardJualSapi = () => {
    return (
        <Card style={{ width: '18rem', marginTop: "2rem" }}>
            <Card.Img variant="top" src={Sapi1}/>
            <Card.Body>
                <Card.Title>Sapi Afrika</Card.Title>
                <Card.Text>Sapi tanpa kandungan air didalam tubuhnya karena sangat krisis air di daerah ini</Card.Text>
                <div className="d-flex">
                    <Button variant="danger">Beli Hewan</Button>
                    <p className="ms-4">{dataSapi[0].price}</p>
                </div>
            </Card.Body>
        </Card>
    )
}