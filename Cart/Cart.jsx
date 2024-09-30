import React from "react";
import Counter from "host/Counter";
import { useCart, CartProvider } from "../../CartsContext";
import {
  Card,
  CartContainer,
  ProductDescription,
  ProductInfo,
  ProductPrice,
  ProductTitle,
} from "./CartStyles";
const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <CartContainer>
      {cart.map((product) => (
        <Card key={product.id}>
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          </ProductInfo>
          <Counter
            startingValue={product.quantity}
            onIncrement={() => addToCart({ ...product, quantity: 1 })}
            onDecrement={() => removeFromCart(product.id)}
          />
        </Card>
      ))}
    </CartContainer>
  );
};

export default Cart;
