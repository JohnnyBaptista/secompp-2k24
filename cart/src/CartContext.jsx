import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext({ cart: [] });

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const exists = prevCart.find((p) => p.id === product.id);
            if (exists) {
                return prevCart.map(p => p === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }

        })
        return product;
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((prod) => prod.id !== id));
    }


    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                removeFromCart,
                cartTotal: cart.reduce((total, product) => total + product.quantity, 0)
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart precisa estar dentro de um CartProvider');
    }

    return context;
}

export { CartProvider, useCart }