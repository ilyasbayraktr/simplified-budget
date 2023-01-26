import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import { BudgetProvider } from "./contexts/BudgetContext";

function App() {

  return (
    <>
      <BudgetProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/all-expenses" element={<Expenses />} />
        </Routes>
        <Footer />
      </BudgetProvider>
    </>
  );
}

export default App;
