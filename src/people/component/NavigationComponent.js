import React from 'react'
import {Link} from 'react-router-dom'

const NavigationComponent = (props) => {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/people">People List</Link>&nbsp;
            <Link to='/peopleInput'>Create new Person</Link>&nbsp;
            <Link to='/peopleSearch'>Search Person</Link>
        </>
    )
}

export default NavigationComponent
