import { useState } from 'react';
import { Button, Form, Col, Container, Row, Table } from 'react-bootstrap';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

function TablData({personArray, setPersonArray,setPerson}) {
  

  let history = useHistory();

  const deleteFunc = (e) => {
    console.log("delete", e)
    setPersonArray(personArray.filter(user => user.id != e.id));
  }

  const editFunc = (per) => {
    history.push("/");
    setPerson(per)
    console.log("edit", per)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Address</th>
                  {/* <th>Address2</th> */}
                  <th>Country</th>
                  <th>City</th>
                  <th>Zip</th>
                </tr>
              </thead>
              <tbody>
                {
                  personArray.map(user => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        {/* <td>{user.address2}</td> */}
                        <td>{user.country}</td>
                        <td>{user.city}</td>
                        <td>{user.zip}</td>
                        <Button variant="danger" style={{ marginRight: "10px" }} onClick={() => deleteFunc(user)}>delete</Button>
                        <Button variant="warning" onClick={() => editFunc(user)}>Edit</Button>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default TablData;
