import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const {name, image, country, yearlyIncome, email} = props.person;
    return (
        <div className="person">
            <div className="person-image">
                <img src={image} alt=""/>  
            </div>
            <div className="person-details">
                <h3>Name: {name}</h3>
                <h4>Country: {country}</h4>
                <p>Yearly income: ${yearlyIncome}</p>
                <p><small>Email: {email}</small></p>
                <button className="add-button" onClick={()=>props.handleAddZuxumate(props.person)}><FontAwesomeIcon icon={faPlus} /> ADD ZUXU</button>
            </div>
            
        </div>
    );
};

export default Person;