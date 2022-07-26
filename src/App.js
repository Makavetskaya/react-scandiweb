import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

function App() {
  return (
    <div className="container">
      <Overlay />
      <Header />

      <div className="content">
        <h1 className="category"> Catery Name</h1>
        <div className="wrapper__card">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
