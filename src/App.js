import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria";

  return (
    <div className="App">
    <h1>Testando o CSS!</h1>
    
      <Frase/>
      <Frase/>
      
      <SayMyName nome ="Diego" />
      <SayMyName nome = "Pedro" />
      <SayMyName nome = {nome} />
      <Pessoa 
        nome = "Diego" 
        idade="28" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150" 
       />
       <List />
    </div>
  );
}

export default App;
