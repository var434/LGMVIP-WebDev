import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaFacebook,FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div style={{background:"black", color:"white"}}>
        <Container>
            <Row>
                <Container style={{textAlign:"center",marginTop:"2%"}}>
                    <FaFacebook/>&nbsp;&nbsp;&nbsp;
                    <FaYoutube/>&nbsp;&nbsp;&nbsp;
                    <FaInstagram/>&nbsp;&nbsp;&nbsp;
                    <FaTwitter/>&nbsp;&nbsp;&nbsp;
                </Container>
            </Row>
            <hr/>
            <Row>
                <h6 style={{textAlign:"center"}}>Copyright@2021</h6>
            </Row>
            <hr/>
        </Container>
    </div>
  );
}

export default Footer;
