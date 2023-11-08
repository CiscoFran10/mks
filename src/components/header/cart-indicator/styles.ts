import styled from 'styled-components';

export const CartIndicatorButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  border: 0;
  border-radius: 8px;
  padding: 0.375rem 0.75rem;
  cursor: pointer;

  background-color: ${(props) => props.theme['white']};
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['gray-200']};
  }

  svg {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
  }

  span {
    font-size: 0.75rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    gap: 1rem;

    svg {
      width: 18px;
      height: 18px;
    }

    span {
      font-size: 1.125rem;
    }
  }
`;
