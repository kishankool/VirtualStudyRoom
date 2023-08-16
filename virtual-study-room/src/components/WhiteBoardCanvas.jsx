// Canvas.js

import React, { useRef, useState } from 'react';
import Konva from 'konva';
import { Stage,Layer } from 'react-konva';
import styled from "styled-components"
export default function WhiteBoardCanvas() {
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const drawing = useRef(false);
  const lastLine = useRef(null);

  const [eraseMode, setEraseMode] = useState(false);


  const handleMouseEnter = () => {
    const cont = document.getElementsByClassName('konvajs-content');
    cont[0].style.cursor = 'text';
  };

  const handleMouseLeave = () => {
    const cont = document.getElementsByClassName('konvajs-content');
    cont[0].style.cursor = "default";
  };



  const handleMouseDown = (e) => {
    drawing.current = true;
    const stage = stageRef.current;
    const pos = stage.getPointerPosition();
    
    lastLine.current = new Konva.Line({
      points: [pos.x, pos.y],
      stroke: eraseMode ? 'white' : 'black',
      strokeWidth: eraseMode ? 20 : 2, // Increase strokeWidth for erasing effect
      lineCap: 'round',
      lineJoin: 'round',
    });

    stage.on('mouseenter', handleMouseEnter);
    stage.on('mouseleave', handleMouseLeave);

    const layer = layerRef.current;
    layer.add(lastLine.current);
  };

  const handleMouseMove = (e) => {
    if (!drawing.current) return;

    const stage = stageRef.current;
    const pos = stage.getPointerPosition();

    const newPoints = lastLine.current.points().concat([pos.x, pos.y]);
    lastLine.current.points(newPoints);

    layerRef.current.batchDraw();
  };

  const handleMouseUp = (e) => {
    drawing.current = false;
  };

  return (
    <Container>
      <div className='whiteboard'
        id='whiteboard-container'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Stage ref={stageRef} width={800} height={600}>
          <Layer ref={layerRef} />
        </Stage>
      </div>
      <button
      className={`erase-button ${eraseMode ? 'active' : ''}`}
      onClick={() => setEraseMode(!eraseMode)}>
        {eraseMode ? 'Draw' : 'Erase'}
      </button>
    </Container>
  );
}

 const Container = styled.div`
 .whiteboard {
    border: 2px solid #333; /* Example border style and color */
    padding: 10px; /* Add padding for spacing */
    border-radius: 10px; /* Add border radius for rounded corners */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow effect */
  }

  .erase-button {
    background-color: #f44336; /* Red color for erase button */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .erase-button.active {
    background-color: #4caf50; /* Green color for active erase mode */
  }
  
  .erase-button:hover {
    background-color: #d32f2f; /* Darker red on hover */
  }
 `;
