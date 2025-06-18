import './App.css';
import Flashcard, {flashcards} from './components/Flashcard';
// import Flashcard from './components/Flashcard';

const App = () => {
  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>Let's Have a Math Off!</h1>
        <p className='description'>Are you really a math enthusiast? Test your knowledge here!</p>
        <p className='total'>Total Cards: {flashcards.length}</p>

        <br></br>
        <p className='description'>Difficulty: <span style={{color: 'green'}}>Easy</span>, <span style={{color: 'yellow'}}>Medium</span>, <span style={{color: "red"}}>Hard</span></p>
        <br></br>
      </div>
      
      <Flashcard />
    </div>
  );
}

export default App;