import './App.css';
import Header from './components/Header/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={ appStyles }>
      <Header />
      <TaskList />
    </div>
  );
}

const appStyles = {
  backgroundColor: '#565656',
}

export default App;
