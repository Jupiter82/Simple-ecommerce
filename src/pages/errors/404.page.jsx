import { Container, Row, Col } from "react-bootstrap"

const Error404 = ({goBackUrl, name}) => {
    return(
        <>
        <Container>
            <Row className="p-5" style={{background:"rgb(50, 174, 177)"}}>
                <Col sm={12} md={{offset:2, span:8}} className="p-3 text-center text-white">
                    Oops !! The page/resource you are looking for does not exists!!!
                    <p>
                        Go back to
                        <a href={goBackUrl} className="btn btn-link">
                            {name}
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Error404