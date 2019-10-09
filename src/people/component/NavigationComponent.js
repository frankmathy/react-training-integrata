import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationComponent = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">People</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/people">People List</Nav.Link>
                    <Nav.Link href="/peopleInput">Create new Person</Nav.Link>
                    <Nav.Link href="/peopleSearch">Search Person</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Aktueller User: {props.person.firstname} {props.person.lastname}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavigationComponent
