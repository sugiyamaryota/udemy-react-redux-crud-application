import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  const profiles = [
    {name: "test",age:10},
    {name: "t",age:20},
    {name:'1'}
  ]
  return (
    <>
    {
      profiles.map((profile, index)=>{
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }

    </>
  );
}

const User = (props) =>{
return <div>Iam{props.name} {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
