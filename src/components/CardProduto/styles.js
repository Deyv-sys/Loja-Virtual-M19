import styled from 'styled-components';

export const ProdutoCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 220px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

export const ProdutoNome = styled.h2`
  font-size: 1.2em;
  margin-bottom: 8px;
`;

export const ProdutoPreco = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Botao = styled.button`
  background-color: ${props => (props.adicionado ? '#198754' : '#6c757d')};
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1em;
`;

export const ProdutoImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;