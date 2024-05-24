import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header () {

    return (
        <>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand className="mx-auto">Evan Clough</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;