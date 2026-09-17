import { useState } from 'react';
import CardProduto from './components/CardProduto';
import { Container } from './components/CardProduto/styles';

const produtos = [
  { id: 1, nome: 'Camiseta Elegante', preco: 150.6 },
  { id: 2, nome: 'Calça Jeans de Alta Qualidade', preco: 100.9 },
  { id: 3, nome: 'Tênis Esportivo', preco: 250.9 },
  { id: 4, nome: 'Jaqueta de Couro Premium', preco: 500.9 },
];

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((itens) => (
      itens.includes(produto.id) ? itens : [...itens, produto.id]
    ));
  }

  return (
    <div className="App">
      <header className="cabecalho">
        <div>
          <p className="marca">LE ÉLÉGANT</p>
          <h1>Peças para todos os seus momentos.</h1>
        </div>
        <div className="carrinho" aria-live="polite">
          <span className="icone-carrinho" aria-hidden="true">&#128722;</span>
          <span>Carrinho</span>
          <strong>{carrinho.length}</strong>
        </div>
      </header>

      <main>
        <div className="titulo-secao">
          <p className="etiqueta">COLEÇÃO ATUAL</p>
          <h2>Escolha seus favoritos</h2>
          <p>Estilo, conforto e qualidade em cada detalhe.</p>
        </div>
        <Container>
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              adicionado={carrinho.includes(produto.id)}
              onAdicionar={() => adicionarAoCarrinho(produto)}
            />
          ))}
        </Container>
      </main>
    </div>
  );
}

export default App;
