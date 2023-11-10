import Image from 'next/image';
import styled from 'styled-components';

export const Card = styled.li`
  display: grid;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  border-radius: 8px;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  padding: 0.75rem 0.875rem;
`;

export const CardImage = styled(Image)`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  object-fit: cover;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.875rem;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-800']};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

interface ProductPriceProps {
  variant: 'filled' | 'outline';
}

export const CardPrice = styled.strong<ProductPriceProps>`
  font-size: 1rem;
  font-weight: 700;

  padding: 0.25rem 0.5rem;
  border-radius: 5px;

  color: ${(props) =>
    props.variant === 'filled' ? props.theme['white'] : props.theme['black']};
  background-color: ${(props) =>
    props.variant === 'filled' ? props.theme['gray-900'] : 'transparent'};
`;

export const CartCounter = styled.div`
  display: grid;
  gap: 0.25rem;
  margin-left: 10px;

  label {
    font-size: 0.5rem;
    font-weight: 400;
  }

  .counter-box {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['white']};
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    font-size: 0.875rem;

    button {
      height: 100%;
      background-color: transparent;
      padding: 0.25rem 0.5rem;
    }

    span {
      padding: 0 0.5rem;
      border-left: 1px solid #bfbfbf;
      border-right: 1px solid #bfbfbf;
    }
  }
`;

export const CardDescription = styled.p`
  font-size: 0.625rem;
  font-weight: 300;
  color: ${(props) => props.theme['gray-800']};

  margin-top: 0.5rem;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  gap: 0.875rem;
  padding: 0.625rem;

  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;

  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['blue-900']};

  transition: 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme['blue-800']};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .image {
    height: 120px;
  }

  div {
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    to {
      background-position: -200% 0;
    }
  }
`;
