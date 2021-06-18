import logo from './logo.svg';
import './index.scss'
import List from './components/List';
import Addİtem, {AddItem} from './components/Addİtem'
function App() {
  return (
    <div className="App">
      <div className="container">
      <Addİtem />
      </div>
     <List />
    </div>
  );
}

export default App;
