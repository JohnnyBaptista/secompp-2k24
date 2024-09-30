import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductTitle = styled.h2`
  margin: 0;
  font-size: 18px;
`;

export const ProductDescription = styled.p`
  margin: 0;
  color: #666;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  color: #333;
`;
