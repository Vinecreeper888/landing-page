import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/MainComponent';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className='mt-10'>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
