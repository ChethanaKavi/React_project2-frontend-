import { Button, Rating, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FavoriteBorder, FavoriteRounded } from '@mui/icons-material';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 99%;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  width: 100%;
  padding: 12px;
  gap: 32px;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 600px;
  border-radius: 12px;
  @media (max-width: 750px) {
    height: 400px;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 4px 10px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;

const Percent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: green;
`;

const Sizes = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Items = styled.div`
  display: flex;
  gap: 12px;
`;

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 14px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ selected, theme }) =>
    selected &&
    `
  background: ${theme.primary};
  color: white;
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0px;
`;

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: 'Product Title',
    name: 'Product Name',
    price: {
      org: 120,
      mrp: 200,
      off: 40,
    },
    img: 'https://assets0.mirraw.com/images/11091481/132-A-1_long_webp.webp?1711546018',
    desc: 'Product Description',
    sizes: ['S', 'L', 'XL'],
  });
  const [selected, setSelected] = useState(product.sizes[0]);
  const [favorite, setFavorite] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);

  const addCart = () => {
    setCartLoading(true);
    // Add to cart logic here
    setTimeout(() => setCartLoading(false), 1000); // Simulate a delay
  };

  const toggleFavorite = () => {
    setFavoriteLoading(true);
    setTimeout(() => {
      setFavorite(!favorite);
      setFavoriteLoading(false);
    }, 1000); // Simulate a delay
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <Wrapper>
          <ImageWrapper>
            <Image src={product.img} />
          </ImageWrapper>
          <Details>
            <div>
              <Title>{product.title}</Title>
              <Name>{product.name}</Name>
            </div>
            <Rating value={3.5} readOnly />
            <Price>
              ${product.price.org} <Span>${product.price.mrp}</Span>
              <Percent>{product.price.off}% off</Percent>
            </Price>
            <Desc>{product.desc}</Desc>
            <Sizes>
              <Items>
                {product.sizes.map((size) => (
                  <Item
                    key={size}
                    selected={selected === size}
                    onClick={() => setSelected(size)}
                  >
                    {size}
                  </Item>
                ))}
              </Items>
            </Sizes>
            <ButtonWrapper>
              <Button
                variant="outlined"
                fullWidth
                onClick={addCart}
                disabled={cartLoading}
              >
                {cartLoading ? 'Adding...' : 'Add to Cart'}
              </Button>
              <Button variant="contained" fullWidth>
                Buy Now
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={toggleFavorite}
                disabled={favoriteLoading}
                startIcon={
                  favorite ? (
                    <FavoriteRounded sx={{ fontSize: '22px', color: 'red' }} />
                  ) : (
                    <FavoriteBorder sx={{ fontSize: '22px' }} />
                  )
                }
  y            >
                {favoriteLoading ? 'Processing...' : 'Favorite'}
              </Button>
            </ButtonWrapper>
          </Details>
        </Wrapper>
      )}
    </Container>
  );
};

export default ProductDetails;
