import styled from 'styled-components';

export const CartItemContainer = styled.li`
  display: grid;
  grid-template-columns: auto 120px 1fr auto;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 1.125rem 1.25rem 1.125rem 0.5rem;

  color: ${(props) => props.theme['black']};
  background-color: ${(props) => props.theme['white']};

  position: relative;

  @media (max-width: 620px) {
    gap: 0.75rem 1.875rem;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    padding: 1rem;

    img,
    h2 {
      grid-column: 1 / 3;
    }
  }
`;

export const CartCounterContainer = styled.div`
  margin: 0 2.5rem 0 0.625rem;
  position: relative;

  label {
    position: absolute;
    font-size: 0.5rem;
    font-weight: 400;
    top: -12px;
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

  @media (max-width: 620px) {
    margin: 0;

    label {
      display: none;
    }
  }
`;
