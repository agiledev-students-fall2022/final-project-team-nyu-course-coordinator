import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'

import './App.css';
import EditCart from './edit-cart'
import SortCart from './sort-cart'
import FilterCart from './filter-cart'



const App = props => {
  return (
    <div className="App">
      <p>hello world</p>
      
      <Router>
        <Header />

        <main className="App-main">
          <Routes>
            {/* a route for the home page */}

            <Route path="/EditCart" element={<EditCart />} />
            <Route path="/SortCart" element={<SortCart />} />
            <Route path="/FilterCart" element={<FilterCart />} />

          </Routes>
        </main>
       
      </Router>
    </div>
  )
}

export default App
