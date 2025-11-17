// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Page Components
import Home from './Pages/Home';
import QueryPage from './Pages/QueryForm';
import AboutPage from './Pages/About';
import ServicesPage from './Pages/ServicesPage';
// import ContactPage from './Pages/ContactForm';
import NotFoundPage from './Pages/PageNotFound';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        {/* Header - Always visible */}
        {/* <Header /> */}

        {/* All Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Query/Quote Pages */}
          <Route path="/query" element={<QueryPage />} />
          <Route path="/get-quote" element={<QueryPage />} />
          <Route path="/contact-whatsapp" element={<QueryPage />} />

          {/* About Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />

          {/* Services Pages */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServicesPage />} />

          {/* Contact Page */}
          {/* <Route path="/query" element={<ContactPage />} /> */}

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Footer - Always visible */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
