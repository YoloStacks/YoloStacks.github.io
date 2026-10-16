import React from 'react';
import { ThemeProvider } from './app/ThemeContext';
import { useHashRoute } from './app/useHashRoute';
import { SkipToContent, LiveAnnouncements } from './components/Accessibility';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AADPage } from './pages/AADPage';

const AppContent: React.FC = () => {
  const { isAad } = useHashRoute();

  return (
    <>
      <SkipToContent />
      <LiveAnnouncements />
      <Header />
      <main id="main-content">
        {isAad ? <AADPage /> : <HomePage />}
      </main>
      <Footer />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
