import React from 'react';
import styled from 'styled-components';
import { category,products,newArrivalProducts } from "../utils/data";
import ProductCard from "../components/cards/ProductCard";

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
  background: ${({ theme }) => theme.bg}
  `;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;
const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const NewArrival = () => {
  return (
    <Container>
      <Title>New Arrivals</Title>
      <p>Check out our latest products!</p>
      <Section>
          <CardWrapper>
          {newArrivalProducts.map((product) => (
            <ProductCard product={product} />
          ))} 
        </CardWrapper>
      </Section> 
    </Container>
  );
}

export default NewArrival;
