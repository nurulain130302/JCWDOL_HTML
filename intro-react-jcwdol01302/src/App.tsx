import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Counter from './Counter';
import './App.css';

function App(){
 return (
  <>
      <div>
        <h1 className="color-red">Welcome to React Router </h1>
        <hr />
        <a href="/">Home</a> | <a href="/counter">Counter</a>
        <hr />
        <Routes>
          <Route path="/" element = {<Home></Home>}></Route>
          <Route path='/counter' element = {<Counter start={2}></Counter>}></Route>
        </Routes>
      </div>
  </>
);
}

export default App;
