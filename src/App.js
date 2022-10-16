import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data.js'

function App() {

  const items = data.map(item => {
    return <Card {...item} />
  })

  return (
    <div className="App">
      <Navbar />
      <div className='main-flex'>
        {items}
      </div>
    </div>
  );
}

export default App;
