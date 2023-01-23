import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import { BudgetContext } from "./contexts/BudgetContext";
import { useState } from "react";

function App() {

  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([])

  return (
    <>
      <BudgetContext.Provider value={{ budget, setBudget, expenses, setExpenses }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/all-expenses" element={<Expenses />} />
        </Routes>
        <Footer />
      </BudgetContext.Provider>
    </>
  );
}

export default App;
