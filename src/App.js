import './App.css';
import ContactForm from './components/Contact Form/ContactForm';
import ContactHeader from './components/Contact Header/ContactHeader';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='main_container'>
      <ContactHeader />
      <ContactForm />
     </div>
    </div>
  );
}

export default App;
