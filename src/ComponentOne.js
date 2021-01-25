import React from 'react'

function ComponentOne() {
   var arr = [{
            name: 'Jimmy',
            id: 1,
            experience: 2
        },{
            name: 'David',
            id: 2,
            experience: 6
        },{
            name: 'Hodan',
            id: 3,
            experience: 5 
        },{
            name: 'Simret',
            id: 4,
            experience: 7
        },{
            name: 'Sara',
            id: 5,
            experience: 5
        }]
    var mapArray = arr.map(item => (<h1> {item.name} : {item.experience}</h1>));
    return (
      <div>
        {mapArray}
      </div>
    );
  }
  
  export default ComponentOne;