import './App.css';
import Header from './components/Header/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={app}>
      <Header />
      <TaskList />
    </div>
  );
}

const app = {
  backgroundColor: '#565656',
}

export default App;
