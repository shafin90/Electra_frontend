import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard({ item }) {

    return (
        <Card style={{ width: "100%" }}  className=' p-2'>
            <Card.Img variant="top" src={item.productImgs.mainImg} style={{ maxHeight: "400px" }} className=' p-5' />
            <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="dark" className=' px-3 py-2 rounded-3 btn-sm'>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;