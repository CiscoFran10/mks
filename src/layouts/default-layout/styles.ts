import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  max-width: 56.5rem;
  margin: 1.125rem auto;
  padding: 0 3.875rem;
  flex: 1;

  @media (min-width: 768px) {
    margin: 6.25rem auto;
    padding: 0;
  }
`;
