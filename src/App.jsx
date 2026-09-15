import CardProduto from './components/CardProduto';
import { Container } from './components/CardProduto/styles';  


function App() {
  return (
    <div className="App">
      <h1>Roupas Le Élégant</h1>

      
      <CardProduto 
        nome="Camiseta Elegante"
        preco={150.60}
        adicionado={false}
        onAdicionar={() => console.log('Produto adicionado!')}
      />
      <CardProduto 
        nome="Calça Jeans de Alta Qualidade"
        preco={100.90}
        adicionado={false}
        onAdicionar={() => console.log('Produto adicionado!')}
      />
      <CardProduto 
        nome="Tênis Esportivo"
        preco={250.90}
        adicionado={false}
        onAdicionar={() => console.log('Produto adicionado!')}
      />
      <CardProduto 
        nome="Jaqueta De Couro Premium"
        preco={500.90}
        adicionado={false}
        onAdicionar={() => console.log('Produto adicionado!')}
      />
    
    </div>
    
  );
}


export default App;
