import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.625rem 1.25rem;
  background-color: ${(props) => props.theme['blue-900']};

  @media (min-width: 768px) {
    padding: 1.875rem 3.75rem;
  }
`;

export const Logo = styled(Link)`
  font-size: 2rem;

  font-weight: 600;
  text-decoration: none;

  color: ${(props) => props.theme['white']};

  span {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 6px;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;

    span {
      font-size: 1.25rem;
    }
  }
`;
