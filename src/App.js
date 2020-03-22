import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: %100;
  justify-content: ${({ page }) => {
    if (page === 'first') return 'flex-end';
    else if (page === 'middle') return 'space-between';
    else return 'flex-start';
  }};
`;

const Link = styled.a.attrs(props => ({
  target: '_blank',
  href: 'https://www.google.com'
}))`
  color: violet;
  font-size: 1.5rem;
`;



const App = () => {
  return (
    <MainWrapper>
      <Button primary>
        My Primary Button
      </Button>
      <Button>My Button</Button>
      <PaginationWrapper>
        <Button>Page-2</Button>
        <Button>Page-4</Button>
      </PaginationWrapper>
      <Link>One Link</Link>
      <Link>Another Link</Link>
    </MainWrapper>
  );
}

export default App;
