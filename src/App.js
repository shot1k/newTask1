import './App.css';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, useHistory, Route, Switch,Link } from 'react-router-dom';
import Person from './components/person';
import TablData from './components/tablData';
import { useState } from 'react';



function App() {
  const [person, setPerson] = useState({});

  const [personArray, setPersonArray] = useState([
    {
      id: 1,
      firstName: "avto",
      lastName: "avto",
      email: "avto@gmail",
      age: 26,
      address: "dadiani",
      // address2: "dadiani2",
      country: "georgia",
      city: "tbilisi",
      zip: "tth111"
    },
    {
      id: 2,
      firstName: "ttttt",
      lastName: "bbbbb",
      email: "bbbbbb@gmail",
      age: 58,
      address: "ddd",
      // address2: "gvimbalauri2",
      country: "lietuva",
      city: "batumi",
      zip: "t56r4"
    }
  ]);

  function addPersonInArray(person) {
    setPersonArray([...personArray, person]);
  }

  function editPersonInArray(person) {
    console.log('person',person)
    setPersonArray(personArray.map((per) => (per.id === person.id ? person : per)));
    // setPersonArray([...personArray, person]);
  }
  // const deleteFunc = (e) => {
  //   console.log("delete", e)
  //   setPersonArray(personArray.filter(user => user.id != e.id));
  // }

  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <Link to="/tablData">tablData</Link>
          </li>
          <li>
            <Link to="/">Person</Link>
          </li>
         
        </ul>
      </nav>
      <Switch>

        <Route path="/tablData">
          <TablData personArray={personArray} setPersonArray={setPersonArray} setPerson={setPerson} />
        </Route>

        <Route path="/">
          <Person addPersonInArray={addPersonInArray} editPersonInArray={editPersonInArray} editPerson={person}/>
        </Route>
      </Switch>


    </div>
  );
}

export default App;
