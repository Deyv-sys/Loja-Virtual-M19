import { ProdutoCard, ProdutoNome, ProdutoPreco, Botao } from './styles';

function CardProduto({ nome, preco, adicionado, onAdicionar }) {
  return (
    <ProdutoCard>
      <span className="numero-produto">ITEM 0{nome.length % 4 + 1}</span>
      <ProdutoNome>{nome}</ProdutoNome>
      <ProdutoPreco>{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ProdutoPreco>
      <Botao adicionado={adicionado} onClick={onAdicionar}>
        {adicionado ? 'Adicionado!' : 'Adicionar ao carrinho'}
      </Botao> 
    </ProdutoCard>
  );
}

export default CardProduto;