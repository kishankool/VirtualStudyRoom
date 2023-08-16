// WhiteboardPage.js

import React from 'react';
import WhiteBoardCanvas from '../components/WhiteBoardCanvas';
import Navbar from '../components/Navbar';
import styled from "styled-components"

export default function DrawingPad() {
  return (
    <main>
    <Navbar />
    <div>
      <h1>Whiteboard Page</h1>
      <WhiteBoardCanvas />
    </div>
    </main>
  );
}

const Container = styled.div`

`;
