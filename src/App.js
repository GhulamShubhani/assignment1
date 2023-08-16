import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import TopBar from './Pages/TopBar';
import HeroSection from './Pages/HeroSection';
import Topbar from './component/Topbar';

function App() {
  return (
    <>
    {/* <Topbar /> */}
      <TopBar />
      <Header />
      <HeroSection/>
    </>
  );
}

export default App;
