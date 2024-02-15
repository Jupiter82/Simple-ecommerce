import { Col, Container, Image, Row } from "react-bootstrap"

const FeFooter = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={3} md={3} >
                        <div className="d-flex ft-rw-part1 pt-5">
                            <h6 >COMPANY</h6>
                            <a href="" className="mt-2">About Netmeds</a>
                            <a href="" className="mt-2">Customers Speak</a>
                            <a href="" className="mt-2">In the News</a>
                            <a href="" className="mt-2">Career</a>
                            <a href="" className="mt-2">Terms and Conditions</a>
                            <a href="" className="mt-2">Privacy Policy</a>
                            <a href="" className="mt-2">Fees and Payments Policy</a>
                            <a href="" className="mt-2">Shipping and Delivery Policy</a>
                            <a href="" className="mt-2">Return, Refund and Cancellation Policy</a>
                            <a href="" className="mt-2">Contact</a>
                        </div>
                    </Col>
                    <Col lg={3} md={3} >
                        <div className="d-flex ft-rw-part1 pt-5">
                            <h6 >SHOPPING</h6>
                            <a href="" className="mt-2">Browse by A-Z</a>
                            <a href="" className="mt-2">Browse by Manufacturers</a>
                            <a href="" className="mt-2">Health Articles</a>
                            <a href="" className="mt-2">Offers / Coupons</a>
                            <a href="" className="mt-2">FAQs</a>
                        </div>
                    </Col>
                    <Col lg={3} md={3}>
                        <div className="d-flex ft-rw-part1 pt-5">
                            <h6 >SOCIAL</h6>
                            <a href="" className="mt-2">Patients A like</a>
                            <a href="" className="mt-2">Facebook</a>
                            <a href="" className="mt-2">Twitter</a>
                            <a href="" className="mt-2">LinkedIn</a>
                            <a href="" className="mt-2">Youtube</a>
                            <a href="" className="mt-2">Refer & Earn</a>
                        </div>
                    </Col>
                </Row>
 
                    <hr></hr>
                    <div className="ft-end d-flex">
                        <a className="fw-bold p-1" href=""><span className="colour-grey">Medicine</span></a>
                        <a className="fw-bold p-1" href=""><span className="colour-grey">Wellness</span></a>
                        <a className="fw-bold p-1" href=""><span className="colour-grey">Lab Tests</span></a>
                        <a className="fw-bold p-1" href=""><span className="colour-grey">Beauty</span></a>
                        <a className="fw-bold p-1" href=""><span className="colour-grey">Copyright© 2024. All Rights Reserved.</span></a>
                    </div>
            </Container>
        </>
    )
}

export default FeFooter