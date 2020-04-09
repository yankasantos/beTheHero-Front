import React, {useState} from 'react';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);
/** o useState ele manipula os valores atualizando o estado do valor anteriormente utilizando
* um array[valor, atualizacao], com isso podemos usar uma constante preservando a imutabilidade dela
**/
  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    
  );
}

export default App;
