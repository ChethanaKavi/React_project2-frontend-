import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/cards/ProductCard";
import { CircularProgress } from "@mui/material";
import { favourite } from "../utils/data"; // Ensure `favourite` contains the correct product data

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
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
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

const Favourite = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProducts(favourite); // Use the correct data source
      setLoading(false);
    }, 1000); // Simulate a delay
  }, []);

  return (
    <Container>
      <Section>
        <Title>Your favourites</Title>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {products.length === 0 ? (
              <>No Products</>
            ) : (
              <CardWrapper>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </CardWrapper>
            )}
          </>
        )}
      </Section>
    </Container>
  );
};

export default Favourite;
