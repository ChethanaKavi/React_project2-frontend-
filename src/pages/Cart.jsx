import React, { useState } from 'react';
import styled from 'styled-components';
import { DeleteOutline } from '@mui/icons-material';
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;

const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  ${({ head }) => head && `margin-bottom: 22px`}
`;

const TableItem = styled.div`
  ${({ flex }) => flex && `flex: 1; `}
  ${({ bold }) => bold && `
    font-weight: 600; 
    font-size: 18px;
  `}
`;

const Counter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;

const Product = styled.div`
  display: flex;
  gap: 16px;
`;

const Img = styled.img`
  height: 80px;
`;

const Details = styled.div``;

const ProTitle = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
`;

const ProDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 0.8;
  }
`;

const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for product 1',
      size: 'L',
      price: 120,
      quantity: 2,
      img: 'https://via.placeholder.com/80',
    },
    // Add more products as needed
  ]);

  const handleQuantityChange = (id, delta) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, quantity: Math.max(1, product.quantity + delta) }
        : product
    ));
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const calculateSubtotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <Section>
        <Title>Your Shopping Cart</Title>
        <Wrapper>
          <Left>
            <Table head>
              <TableItem flex bold>Product</TableItem>
              <TableItem bold>Price</TableItem>
              <TableItem bold>Quantity</TableItem>
              <TableItem bold>Subtotal</TableItem>
              <TableItem bold></TableItem>
            </Table>
            {products.map(product => (
              <Table key={product.id}>
                <TableItem flex>
                  <Product>
                    <Img src={product.img} />
                    <Details>
                      <ProTitle>{product.title}</ProTitle>
                      <ProDesc>{product.description}</ProDesc>
                      <ProSize>Size: {product.size}</ProSize>
                    </Details>
                  </Product>
                </TableItem>
                <TableItem>${product.price}</TableItem>
                <TableItem>
                  <Counter>
                    <div onClick={() => handleQuantityChange(product.id, -1)} style={{ cursor: 'pointer' }}>-</div>
                    {product.quantity}
                    <div onClick={() => handleQuantityChange(product.id, 1)} style={{ cursor: 'pointer' }}>+</div>
                  </Counter>
                </TableItem>
                <TableItem>${(product.price * product.quantity).toFixed(2)}</TableItem>
                <TableItem>
                  <DeleteOutline onClick={() => handleRemoveProduct(product.id)} style={{ cursor: 'pointer', color: 'red' }} />
                </TableItem>
              </Table>
            ))}
          </Left>
          <Right>
            <Subtotal>
              <div>Subtotal</div>
              <div>${calculateSubtotal()}</div>
            </Subtotal>
            <Delivery>
              Delivery Details:
              <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                      }}
                    />
                    </div>
              <TextInput small placeholder="First Name" />
              <TextInput small placeholder="Last Name" />
              <TextInput small placeholder="Email Address" />
              <TextInput small placeholder="Phone no. +91 XXXXX XXXXX" />
              <TextInput small textArea rows="5" placeholder="Complete Address (Address, State, Country, Pincode)" />
            </Delivery>
            <Delivery>
              <div>Payment Details:</div>
              <TextInput small placeholder="Card Number" />
              <div style={{ display: 'flex', gap: '6px' }}>
                <TextInput small placeholder="Expiry Date" />
                <TextInput small placeholder="CVV" />
              </div>
              <TextInput small placeholder="Card Holder name" />
            </Delivery>
            <Button text="Place Order" />
          </Right>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default Cart;
