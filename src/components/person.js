import { useState, useEffect } from 'react';
import { Button, Form, Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, useHistory } from 'react-router-dom';



function Person({addPersonInArray,editPersonInArray, editPerson}) {

    const [person, setPerson] = useState({});
    const [showAgeValidation, setShowAgeValidation] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    let history = useHistory();

    useEffect(() => {   

        setPerson({...editPerson})
        console.log("shemodis",editPerson)
    }, [editPerson])



    const clickSubmit = (e) => {
        // console.log('history', person)
        history.push("/tablData");

        if(!editPerson.id){
            const newObj = {
                id: Math.floor(Math.random() * 1000),
                firstName: person.firstName,
                lastName: person.lastName,
                email: person.email,
                age: person.age,
                address: person.address,
                country: person.country,
                city: person.city,
                zip: person.zip,
              }
            addPersonInArray(newObj);
        }
        else{
            editPersonInArray(person)
        }
        
        
    };

    const handleValue = (e) => {
        console.log("handleValue", e.target.checked)
        
        if(e.target.name == "age" && e.target.value<18 ){
            setShowAgeValidation(true);
        }
        else{
            setShowAgeValidation(false);
        }
        
        let val = e.target.name == 'agree'? e.target.checked : e.target.value 
        setPerson({ ...person, [e.target.name]: val });
        console.log('sssssss',person)
    };


    return (
        <div className="App">


            <Container>

                <h4>Fill Person Info</h4><br />
                <Row>
                    <Col>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="firstName" value={person.firstName} onChange={handleValue} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastname">
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control type="text" placeholder="Lastname" name="lastName" value={person.lastName} onChange={handleValue} />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={person.email} onChange={handleValue} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAge">
                                    <Form.Label>Age</Form.Label>


                                    {['bottom'].map((placement) => (
                                        <OverlayTrigger
                                            show={showAgeValidation}
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${placement}`}>
                                                    Age should be more then  <strong>18</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            {/* <Button variant="secondary">Tooltip on {placement}</Button> */}
                                            <Form.Control type="number" placeholder="Age" name="age" value={person.age} onChange={handleValue} />
                                        </OverlayTrigger>
                                    ))}


                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" name="address" value={person.address} onChange={handleValue} />
                            </Form.Group>

                            {/* <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={handleValue} />
                            </Form.Group> */}

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" name="country" defaultValue="Choose..." value={person.country} onChange={handleValue}>
                                        <option>Choose...</option>
                                        <option value="georgia">Georgia</option>
                                        <option value="latvia">Latvia</option>
                                        <option value="estonia">Estonia</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City" name="city" value={person.city} onChange={handleValue} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control placeholder="Zip" name="zip" value={person.zip} onChange={handleValue} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I Agree" name="agree" value={person.agree} onChange={handleValue}/>
                            </Form.Group>

                            <Button variant="primary" onClick={clickSubmit} disabled={showAgeValidation}>
                                {editPerson.id? "save": "Add"}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>



        </div>
    );
}

export default Person;
