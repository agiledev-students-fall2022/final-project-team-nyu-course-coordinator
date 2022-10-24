import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddClassPopup from './AddClassPopup.js';
import RemoveClassPopup from './RemoveClassPopup.js';
import SessionChangePopup from './SessionChangePopup.js';
import SortBy from './SortBy.js'

function App() {
  return (
    <div className="App">
        <p>
          <AddClassPopup />
        </p>
        <p>
          <RemoveClassPopup />
        </p>
        <p>
          <SessionChangePopup />
        </p>
        <p>
          <SortBy />
        </p>
    </div>
  );
}

export default App;
