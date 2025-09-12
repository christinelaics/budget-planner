import {Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
import './App.css'
import BudgetPlanner from './pages/BudgetPlanner';

export default function App() {
  return(
    <div>
      {/* <Navbar/> */}
      <main>
        <Routes>
          <Route path="/" element={<BudgetPlanner/>}/>
        </Routes>
      </main>

    </div>
  )
}
