import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Login from "./pages/Login";
import CustomerList from "./pages/CustomerList";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerAdd from "./pages/CustomerAdd";
import CustomerEdit from "./pages/CustomerEdit";
import CustomerNotes from "./pages/CustomerNotes";
import Timeline from "./pages/Timeline";
import AIInsights from "./pages/AIInsights";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Dummy Login */}
        <Route
          path="/"
          element={<Login />}
        />


        {/* Customer List */}
        <Route
          path="/customers"
          element={<CustomerList />}
        />


        {/* Add Customer */}
        <Route
          path="/customer/add"
          element={<CustomerAdd />}
        />


        {/* Customer Details */}
        <Route
          path="/customer/:id"
          element={<CustomerDetails />}
        />


        {/* Edit Customer */}
        <Route
          path="/customer/edit/:id"
          element={<CustomerEdit />}
        />


        {/* Customer Notes */}
        <Route
          path="/customer/:id/notes"
          element={<CustomerNotes />}
        />


        {/* Timeline */}
        <Route
          path="/customer/:id/timeline"
          element={<Timeline />}
        />


        {/* AI Insights */}
        <Route
          path="/customer/:id/ai"
          element={<AIInsights />}
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;