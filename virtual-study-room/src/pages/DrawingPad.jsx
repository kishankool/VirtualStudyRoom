// WhiteboardPage.js

import React from 'react';
import WhiteBoardCanvas from '../components/WhiteBoardCanvas';
import Navbar from '../components/Navbar';
import styled from "styled-components"

export default function DrawingPad() {
  return (
    <main>
    <Navbar />
    <Container>
      <h1 className='whiteboard-heading'>Whiteboard Page</h1>
      <WhiteBoardCanvas />
    </Container>
    </main>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction : column;
  .whiteboard-heading{
    text-align : center;
  }
`;
