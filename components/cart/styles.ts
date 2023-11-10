import styled from 'styled-components';

export const CartContainer = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  overflow-y: auto;

  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['blue-900']};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.625rem;
    padding: 2.25rem 3rem 0;

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1.375rem;
    height: 400px;
    padding: 0.5rem 3rem;
    margin-top: 4rem;
    overflow-y: auto;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.25rem 3rem;

    h2,
    span {
      font-size: 1.75rem;
      font-weight: 700;
    }
  }
`;

export const CartButton = styled.button`
  align-self: flex-end;
  justify-self: flex-end;
  width: 100%;
  padding: 2.5rem 0;
  font-size: 1.75rem;
  font-weight: 700;

  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['black']};

  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['gray-900']};
  }

  &:focus {
    color: ${(props) => props.theme['blue-700']};
  }
`;

interface CloseButtonProps {
  size?: 'small' | 'large';
  position?: 'absolute' | 'relative';
}

export const CloseButton = styled.button<CloseButtonProps>`
  display: flex;
  justify-content: center;
  gap: 0.875rem;

  font-size: ${({ size }) => (size === 'large' ? '28px' : '14px')};
  height: ${({ size }) => (size === 'large' ? '36px' : '20px')};
  width: ${({ size }) => (size === 'large' ? '36px' : '20px')};
  border-radius: 100%;

  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['black']};

  transition: 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme['gray-800']};
  }

  position: ${(props) => props.position};
  top: -5px;
  right: -5px;

  @media (max-width: 620px) {
    &.delete {
      font-size: 42px;
      background-color: transparent;
      color: ${(props) => props.theme['black']};

      height: fit-content;
      width: fit-content;

      top: 0;
      right: 4px;
    }
  }
`;

CloseButton.defaultProps = {
  size: 'small',
  position: 'relative',
};
