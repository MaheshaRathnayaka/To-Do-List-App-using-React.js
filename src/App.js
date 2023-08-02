import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
//import "./todo.css";

function App() {

  //Adding background Image 

  return (
    <div className='container border border-primary rounded mt-5'
    style={{
      background: `url(https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY=)`,
      backgroundSize: 'cover'
    }}
    >
      <Todo/>

    </div>
  );
}

export default App;
