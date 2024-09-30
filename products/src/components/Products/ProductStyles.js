import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  width: 450px; /* Ajuste o tamanho do card */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
