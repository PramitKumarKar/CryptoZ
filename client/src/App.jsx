import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Transactions from './components/Transactions';
import Services from './components/Services';
import Market from './components/Market';
import Loader from './components/Loader';

const App = () => (
  <>
  <div className="min-h-screen">
    <div className='gradient-bg-welcome'>
    <Navbar/>
    <Welcome/>
    </div>
    <div id='services'>
      <Services/>
    </div>
    <div id='transactionhistory'>
    <Transactions/>
    </div>
    <div id='market'>
    <Market/>
    </div>
    <Footer/>

  </div>
  </>
);

export default App;
