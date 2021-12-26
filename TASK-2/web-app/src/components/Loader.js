import Container from "react-bootstrap/Container";

function Loader() {
  return (
    <div>
      <Container fluid style={{padding:"5%", background:"#072a61"}}>
      </Container>
      <Container fluid style={{padding:"5%", background:"#072a61"}}>
      </Container>
      <Container fluid style={{padding:"5%", background:"#072a61"}}>
      </Container>  
    </div>
  );
}

export default Loader;
