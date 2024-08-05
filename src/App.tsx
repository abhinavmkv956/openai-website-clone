

import './App.css';
import Bcard2 from './Bcard2';
import Carou from './Carou';
import Footer from './Footer';
import Gptcard2 from './Gptcard2';
import Header from './Header';
import Researchcard from './Researchcard';
import Subhead from './Subheading';
import Trygpt from './Trygpt';


function App() {
  return (
    <div className='appDiv' >
      <Header/>
      <Carou/>
      <Subhead head={'ChatGPT'}/>
      <Gptcard2/>
      <Subhead head={'Research'}/>
      <Researchcard/>
      <Subhead head={'Stories'}/>
      <Bcard2/>
      <Trygpt/>
      <Footer/>
      
       
     
    </div>
  );
}

export default App;
