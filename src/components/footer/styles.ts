import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme['gray-100']};

  p {
    font-size: 0.75rem;
    font-weight: 400;
  }
`;
