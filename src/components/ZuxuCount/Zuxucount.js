import React from 'react';

const Zuxucount = (props) => {
    const zuxu = props.zuxu;
    let total = 0;
    for(let i =0; i<zuxu.length;i++){
        const person = zuxu[i];
        total = total + person.yearlyIncome;
    }
    return (
        <div>
            <h3>ZuxuMate Count:</h3>
            <h4>ZuxuMate Added: {zuxu.length} </h4>
            <h4> Total Yearly Income: ${total}</h4>
        </div>
    );
};

export default Zuxucount;