import React from 'react';
import { ProdutoCard, ProdutoNome, ProdutoPreco, Botao } from './styles';

function CardProduto({ nome, preco, adicionado, onAdicionar }) {
  return (
    <ProdutoCard>
      <ProdutoNome>{nome}</ProdutoNome>
      <ProdutoPreco>R$ {preco}</ProdutoPreco>
      <Botao adicionado={adicionado} onClick={onAdicionar}>
        {adicionado ? 'Adicionado!' : 'Adicionar ao carrinho'}
      </Botao>
    </ProdutoCard>
  );
}

export default CardProduto;