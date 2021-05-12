import './App.css';
import Header from './components/Header/Header';
import SaleList from './components/SaleList/SaleList';

function App() {
  return (
    <div style={ appStyles }>
      <Header />
      <SaleList />
    </div>
  );
}

const appStyles = {
  backgroundColor: '#565656',
}

export default App;
