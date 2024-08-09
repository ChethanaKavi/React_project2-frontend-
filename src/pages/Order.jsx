import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const OrderList = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OrderItem = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.bg_light};
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderDate = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const OrderId = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProductName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching orders from an API
    setTimeout(() => {
      setOrders([
        {
          id: '12345',
          date: '2024-08-08',
          products: [
            { name: 'Product 1', quantity: 2, price: 50 },
            { name: 'Product 2', quantity: 1, price: 30 },
          ],
        },
        {
          id: '67890',
          date: '2024-07-30',
          products: [
            { name: 'Product 3', quantity: 1, price: 80 },
            { name: 'Product 4', quantity: 3, price: 25 },
          ],
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      <Title>Your Orders</Title>
      {loading ? (
        <CircularProgress />
      ) : (
        <OrderList>
          {orders.map((order) => (
            <OrderItem key={order.id}>
              <OrderHeader>
                <OrderDate>{order.date}</OrderDate>
                <OrderId>Order ID: {order.id}</OrderId>
              </OrderHeader>
              <OrderContent>
                {order.products.map((product, index) => (
                  <div key={index}>
                    <ProductName>{product.name}</ProductName>
                    <ProductDetail>
                      <span>Quantity: {product.quantity}</span>
                      <span>Price: ${product.price}</span>
                    </ProductDetail>
                  </div>
                ))}
              </OrderContent>
            </OrderItem>
          ))}
        </OrderList>
      )}
    </Container>
  );
};

export default Order;
