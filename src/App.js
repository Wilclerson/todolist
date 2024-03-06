import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; // ES6


const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input  
              type ="text"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                    setTodos(todos.concat([inputValue]));
                    setInputValue("");
                }
              }}
              placeholder="What do you need to do?"></input>
        </li>
        {todos.map((item, index) => (
          <li>
            {item}{" "}
           <FontAwesomeIcon 
           icon={fas.faTrash} 
              onClick={() =>
                setTodos(
                    todos.filter(
                        (t, currentIndex) =>
                          index != currentIndex
                    )
                   )
                }/>
              </li>
            ))}
      </ul>
    <div>{todos.length} tasks </div>
    </div>
  );
}
export default App;
