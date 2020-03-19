import React, { useState } from 'react';
import fakeData from '../../fake-data';
import './Friends.css';
import Person from '../Person/Person';
import Zuxucount from '../ZuxuCount/Zuxucount';

const Friends = () => {
    console.log(fakeData);
   // const friends = fakeData;
    const[person, setPerson] = useState(fakeData);
    const[zuxu, setZuxu] = useState([]);
    const handleAddZuxumate = (person) =>{
        const newZuxu =[...zuxu, person];
        setZuxu(newZuxu);

    }
    return (
        <div className = "friend-container">
            <div className="person-container">
            
            <h4>
            {
                person.map(person=><Person 
                    handleAddZuxumate ={handleAddZuxumate}
                    person ={person}
                    ></Person>)
            }
            </h4>
        </div>
        <div className="person-counter">
            <Zuxucount zuxu={zuxu}></Zuxucount>
        </div>
        </div>
    );
};

export default Friends;