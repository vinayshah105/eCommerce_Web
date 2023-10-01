import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardlist() {
  return (
    <Card className="m-2" style={{ width: '20rem' }}>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/random/?Cryptocurrency&1"
      />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <select className="container-fluid m-2 w-25 rounded">
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
        <select className="m-2 w-25 rounded">
          <option value="half">Half</option>
          <option value="full">Full</option>
        </select>
        <div className="d-inline fw-bold fs-5">Price: $50</div>
        <Button className="w-100">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardlist;
