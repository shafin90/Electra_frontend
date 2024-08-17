import ListGroup from 'react-bootstrap/ListGroup';

function Menu() {
    return (
        <ListGroup >
            <ListGroup.Item style={{ cursor: "pointer" }}>Woman’s Fashion</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Men’s Fashion</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Electronics</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Home & Lifestyle</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Medicine</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Sports & Outdoor</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Baby’s & Toys</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Groceries & Pets</ListGroup.Item>
            <ListGroup.Item style={{ cursor: "pointer" }}>Health & Beauty</ListGroup.Item>
        </ListGroup>
    );
}

export default Menu;