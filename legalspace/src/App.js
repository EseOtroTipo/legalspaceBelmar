import './App.css';
import NarBar from './components/NavBar';
//import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NarBar/>
     {/*  <Header/> */}
     <ItemCount stock="10" />
      <ItemListContainer/>




      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>*/}
    </div>
  );
}

export default App;
