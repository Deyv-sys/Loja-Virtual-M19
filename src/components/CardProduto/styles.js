import styled from 'styled-components';

export const ProdutoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 258px;
  flex: 1 1 220px;
  max-width: 280px;
  padding: 28px 24px 24px;
  background: #fffdf8;
  border: 1px solid #dfd8cb;
  border-radius: 2px;
  box-shadow: 8px 8px 0 #e4d9ca;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 13px 0 #d9c6b0;
  }
`;

export const ProdutoNome = styled.h2`
  margin: 18px 0 14px;
  color: #25231f;
  font-size: 1.25rem;
  line-height: 1.2;
`;

export const ProdutoPreco = styled.p`
  color: #a84c32;
  font-weight: bold;
  font-size: 1.25rem;
  margin: auto 0 20px;
`;

export const Botao = styled.button`
  background-color: ${props => (props.adicionado ? '#3d6955' : '#25231f')};
  color: #fff;
  border: none;
  padding: 12px 14px;
  border-radius: 1px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.9rem;
  font-weight: 700;

  &:hover {
    background-color: ${props => (props.adicionado ? '#315642' : '#a84c32')};
  }
`;

export const NumeroProduto = styled.span``;

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
  gap: 28px;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 1220px;
`;