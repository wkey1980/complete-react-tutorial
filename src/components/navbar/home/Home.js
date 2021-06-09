import React from 'react'

const Home = () => {

  const handleClick = (e) => {
    console.log('Hello, Ive been Clicked, will', e);
  }
  const handleClickMeAgain = (name, e) => {
    console.log('Ive been clicked again by ' + name, e);
  }
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <br /><br />
      <button onClick={ (e) => {
        handleClickMeAgain('Will', e);
      }}>Click Me Again</button>
    </div>
  );
}

export default Home;
