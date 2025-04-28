import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import AskButton from './components/AskButton';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SchedulePage from './pages/SchedulePage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
        <AskButton />
        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;