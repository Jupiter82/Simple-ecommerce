import { Container, Col, Row, Form, Button, FormControl } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Select from 'react-select'

const options = [
    { value: 'customer', label: 'Customer' },
    { value: 'seller', label: 'Seller' }
  ]

const RegisterPage = () =>{
    const submitForm = (e) =>{
        e.preventDefault()
    }
    return (
        <>
       <Container className={`p-3 my-5 bg-dark`}>
                <Row>
                    <Col sm={12}>
                        <h1 className="text-center text-light">
                            Register
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className={`bg-dark-subtle py-3`} md={{offset:2, span:8}} lg={{offset:3, span:6}}>
                        <Form onSubmit={submitForm}>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3 text-dark">Full Name:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                    required
                                    placeholder="Enter your fullname"
                                    size="sm">
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3 text-dark">Email(username):</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                    type="password"
                                    required
                                    placeholder="Enter your Password"
                                    size="sm">
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3 text-dark">Address:</Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                    as={"textarea"}
                                    required
                                    rows={5}
                                    style={{resize:"none"}}
                                    placeholder="Enter your Password"
                                    size="sm">
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3 text-dark">Role:</Form.Label>
                                <Col sm={9}>
                                <Select options={options} isClearable className="form-select-sm"/>
                                    {/* <Form.Select size="sm" name="role" required>
                                        <option value=''>--Select Any One---</option>
                                        <option value='customer'>Customer</option>
                                        <option value='seller'>Seller</option>
                                    </Form.Select> */}
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Form.Label className="col-sm-3 text-dark">Images:</Form.Label>
                                <Col sm={7}>
                                        <Form.Control></Form.Control>

                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Col sm={{span:9,offset:3}}>
                                    <NavLink className={'btn btn-sm btn-link'} to="/forget-password">
                                        Forgot password ?
                                    </NavLink>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row mb-3">
                                <Col sm={{span:9,offset:3 }}>
                                    <Button variant="danger" type="reset" size="sm" className="me-1">
                                        <i className="fa fa-trash"></i> Cancel
                                    </Button>
                                    <Button variant="success" type="submit" size="sm" className="me-1">
                                        <i className="fa fa-paper-plane"></i> Send
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                        <Row>
                            <Col>
                            Or
                                <NavLink className={"btn btn-sm btn-link"} to={"/register"} >Create an Account

                                </NavLink>
                            </Col>

                        </Row>
                    </Col>
      
                </Row>
            </Container>
        </>
    )
}

export default RegisterPage 