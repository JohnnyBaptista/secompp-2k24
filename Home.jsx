import React, { Suspense, useEffect, useState } from "react";
import {
  Button,
  CartButtonContainer,
  Container,
  Content,
  Footer,
  Header,
} from "./styles";
import { ProductType, useCart } from "cart/CartsContext";
import Products from "products/Products";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "cart/Cart";
import Modal from "../components/Modal/Modal";

const CartButton = ({ onClick }: { onClick: () => void }) => {
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
  const baseUrl = "https://secompp24-api.onrender.com";
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/products`);
      const data = await response.json();
      setProducts(() =>
        data.map((product: ProductType) => ({ ...product, quantity: 0 }))
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

const Home: React.FC = () => {
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
