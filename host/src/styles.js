import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #000000;
  padding: 3rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  color: white;
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

export const Content = styled.main`
  flex: 1;
  padding: 1rem;
`;

export const Button = styled.button`
  color: white;
  border: none;
  border-radius: 50%;
  width: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: #3f0886;

  &:hover {
    background-color: #640bc9;
  }
`;

export const CartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
