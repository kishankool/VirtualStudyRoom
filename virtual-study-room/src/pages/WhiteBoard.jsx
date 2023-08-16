import React, { useEffect, useRef ,useState} from 'react'
import Konva from 'konva'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Pencil from '../assets/utils/pencil.png'

export default function WhiteBoard() {
    const stageRef = useRef(null);
    const layerRef = useRef(null);
    const drawing = useRef(false);
    const lastLine = useRef(null);
    const [isWhiteboardHovered, setIsWhiteboardHovered] = useState(false);

    const height = 600;
    useEffect(() => {
      const stage = new Konva.Stage({
        container: 'whiteboard-container',
        width: window.innerWidth,
        height: height
      });


      const layer = new Konva.Layer();
      stage.add(layer);
      stageRef.current = stage;
      layerRef.current = layer;

      const handleMouseEnter = () => {
        setIsWhiteboardHovered(true);
        const cont = document.getElementsByClassName('konvajs-content');
        cont[0].style.cursor = 'text';
      };
  
      const handleMouseLeave = () => {
        setIsWhiteboardHovered(false);
        const cont = document.getElementsByClassName('konvajs-content');
        cont[0].style.cursor = "default";
      };

      

      stage.on('mouseenter', handleMouseEnter);
      stage.on('mouseleave', handleMouseLeave);

  
      // Event listeners for drawing
      stage.on('mousedown touchstart', (e) => {
        drawing.current = true;
        const pos = stage.getPointerPosition();
        lastLine.current = new Konva.Line({
          points: [pos.x, pos.y],
          stroke: 'black',
          strokeWidth: 2,
          lineCap: 'round',
          lineJoin: 'round',
        });
        layer.add(lastLine.current);
      });

      stage.on('mousemove touchmove', () => {
        if (!drawing.current) return;
        const pos = stage.getPointerPosition();
        const newPoints = lastLine.current.points().concat([pos.x, pos.y]);
        lastLine.current.points(newPoints);
        layer.batchDraw();
      });
  
      stage.on('mouseup touchend', () => {
        drawing.current = false;
      });

    

    },[]);
      
      // Attach event listeners to the socket for broadcasting drawing actions
    // socket.on('drawing', (data) => {
    //     const newLine = new Konva.Line({
    //       points: data.points,
    //       stroke: 'black',
    //       strokeWidth: 2,
    //       lineCap: 'round',
    //       lineJoin: 'round',
    //     });
    //     layer.add(newLine);
    //     layer.batchDraw();
    //   });
    // }, []);
    
  return (
    <>
    <Navbar />
    <main>
    <Container>
        <div id="whiteboard-container" className='whiteboard'></div>
    </Container>
    </main>
    </>
  )
}

const Container = styled.div`

.whiteboard {
  border: 2px solid #333; /* Example border style and color */
  padding: 10px; /* Add padding for spacing */
  border-radius: 10px; /* Add border radius for rounded corners */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow effect */
}

  
`;