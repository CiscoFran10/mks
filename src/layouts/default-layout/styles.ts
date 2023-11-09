import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: calc(60rem + 1.125rem);
  margin: 0 auto;
  padding: 1.125rem 3.875rem;
  flex: 1;

  @media (min-width: 768px) {
    padding: 6.25rem 1.25rem;
  }
`;
