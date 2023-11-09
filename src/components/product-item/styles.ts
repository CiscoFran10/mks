import styled from 'styled-components';

export const ProductCard = styled.li`
  display: grid;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  border-radius: 8px;
  overflow: hidden;

  .container {
    padding: 0.75rem 0.875rem;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: cover;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.875rem;

    h2 {
      font-size: 1rem;
      font-weight: 400;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    strong {
      font-size: 1rem;
      font-weight: 700;

      padding: 0.25rem 0.5rem;
      border-radius: 5px;

      color: ${(props) => props.theme['white']};
      background-color: ${(props) => props.theme['gray-900']};
    }
  }

  p {
    font-size: 0.625rem;
    font-weight: 300;
    color: ${(props) => props.theme['gray-800']};

    margin-top: 0.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  button {
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
  }
`;
