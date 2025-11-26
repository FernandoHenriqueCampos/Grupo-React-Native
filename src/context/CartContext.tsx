import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Product {
    id: string;
    name: string;
    image: string;
    preco: string;
    descricao: string;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextData {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    clearCart: () => void;
    cartTotal: string;
    cartCount: number;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (productId: string) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decreaseQuantity = (productId: string) => {
        setCartItems(prevItems => {
            const item = prevItems.find(i => i.id === productId);

            if (item && item.quantity > 1) {
                return prevItems.map(i =>
                    i.id === productId
                        ? { ...i, quantity: i.quantity - 1 }
                        : i
                );
            } else if (item && item.quantity === 1) {
                return prevItems.filter(i => i.id !== productId);
            }
            return prevItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const calculateCartTotal = (): string => {
        const total = cartItems.reduce((sum, item) => {
            const price = parseFloat(item.preco.replace(',', '.'));
            return sum + (price * item.quantity);
        }, 0);
        return total.toFixed(2).replace('.', ',');
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            cartTotal: calculateCartTotal(),
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}