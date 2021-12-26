import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";



function CardsFetch() {
    const [data, setData] = useState([]);
    

    useEffect(async() => {
        try {
            const response = await axios.get('https://reqres.in/api/users?page=1');
            setData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }, []);


  return (
    <div>
        <Container fluid style={{padding:"5%", background:"#28426d"}}>
            <Row style={{textAlign:"center"}}>
                {data.map((mov) => 
                    <Col className="col-sm-4" style={{marginBottom:"2%"}}>
                        <Card className="card">
                            <Card.Img variant="top" src={mov.avatar} />
                            <Card.Body className="card-body">
                                <Card.Title>{mov.first_name} {mov.last_name}</Card.Title> 
                                <Card.Text>{mov.email}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    </div>
  );
}

export default CardsFetch;
