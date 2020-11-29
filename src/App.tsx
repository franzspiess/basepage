import React from 'react';
import Analytics from 'react-ga'

import './App.css';
import Card from './components/Card';
import Container from './components/Container';

function App() {

  React.useEffect(() => {
    Analytics.initialize('UA-184108240-1');
    Analytics.pageview(window.location.pathname + window.location.search);
  })

  function handleClick (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    Analytics.event({
      category: e.currentTarget.id,
      action:'Clicked Link',
    })
  }

  return (
    <Container>
      <Card handleClick={handleClick} />
    </Container>
  );
}

export default App;
