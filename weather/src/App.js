//import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDo/ToDoList'
import Notes from "./components/NotePad/Notes"
import Clock from './components/UtilComponents/Clock';
import TicTacToe from './components/Games/TicTac';
import Indecision from './components/Indecision Machine/indecision';
import NavBar from './components/UtilComponents/NavBar';

function App() {
  let component
  switch (window.location.pathname) {
    case ("/todo"):
      component = <ToDoList />
      break;
    case ("/tictactoe"):
      component = <TicTacToe />
      break;
    case ("/indecision"):
      component = <Indecision />
      break;
    case("/notes"):
      component = <Notes />
      break;
    default:
      component = <h2>Click Menu</h2>
  }
  return (
    <>
      <div className='header'>
        <Clock />
        <NavBar />
      </div>

      <div className="App">
        {component}
      </div>
    </>
  );
}

export default App;
