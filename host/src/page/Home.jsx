import React, { Suspense, useEffect, useState } from "react";
import {
  Button,
  CartButtonContainer,
  Container,
  Content,
  Footer,
  Header,
} from "../styles";
import { useCart } from "cart/CartContext";
import Products from "products/Products";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "cart/Cart";
import Modal from "../components/Modal/Modal";

const CartButton = ({ onClick }) => {
  const { cart } = useCart();
  const cartTotal = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Button onClick={onClick}>
      <CiShoppingCart size="24px" />
      <span>{cartTotal}</span>
    </Button>
  );
};

const useGetProducts = () => {
  const baseUrl = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}`);
      const data = await response.json();
      const {products} = data;
      setProducts(() =>
        products.map((product) => ({ ...product, quantity: 0 }))
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, isLoading };
};

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products, isLoading } = useGetProducts();
  if (isLoading) {
    return <div>Carregando...</div>;
  }
  return (
    <Container>
      {isCartOpen && (
        <Modal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          title="Crrinho"
        >
          <Cart />
        </Modal>
      )}
      <Header>
        <h1>Lojas jogos</h1>
        <CartButton onClick={() => setIsCartOpen(true)} />
      </Header>
      <Content>
        <Products products={products || []} />
      </Content>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Container>
  );
};

export default Home;
