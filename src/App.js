// import logo from './logo.svg';
import "./css/main.css";
import DisplayTodolist from "./components/DisplayTodolist";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="App">
      <h1>Organize your Activities for the Future!</h1>
      <Todolist />
      <DisplayTodolist />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
