import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Header user={user} />
      <AppRoutes setUser={setUser} />
      <Footer />
    </Router>
  );
};

export default App;
