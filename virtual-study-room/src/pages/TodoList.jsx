import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'

export default function TodoList() {
  return (
    <>
    <Navbar />
    <main>
    <Container>
      <div className='task-list-heading'>
          Personal Task Manager
      </div>
      <div className='tasks-panel'>
        <div className='left-panel'>
            <div className='left-title'> 
                Categories
            </div>
            <button className='category completed'>
                  Completed
            </button>
            <button className='category urgent'>
                   Urgent
            </button>
            <button className='category important'>
                  Important
            </button>
            <button className='category later'>
                  Later
            </button>
            <button className='category study'>
                  To Study
            </button>
        </div>
        <div className='right-panel'>
          <div className='info'>
              <div className='tasks'> 
                    5 Tasks
              </div>
              <button className='task-button'>
                    Add New Task
              </button>
              <div className='clear-button'>
                    Clear completed
              </div>
          </div>  
        </div>
      </div>
    </Container>
    </main>    
    </>
  )
}


const Container = styled.div`
${'' /* positon :m; */}
color : #fff;
display: grid;
place-items : center;
background: #F7ECDE;
.task-list-heading{
  position : absolute;
  top: 80px;
  color: #E9C597;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Open Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 90%; /* 28.8px */ */
}
.tasks-panel{
  display : flex;
  flex-wrap : wrap;
  justify-content :center;
  gap : 12px;
  margin : 252px 264px; 
  .left-panel{
    display : flex;
    flex-direction : column;
    align-items : center;
    border-radius: 10px;
    background: #54BAB9;
    .left-title{
      ${'' /* position : absolute; */}
      color: #FFF;
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-top : 25px;
      margin-bottom : 46px;
      font-size: 20px;
      font-weight: 600;
      
    }
    .category{
      display : flex;
      justify-content : center;
      border-radius : 10px;
      border: none;
      color : #fff;
      width : 200px;
      margin-bottom : 10px;
      margin-left : 25px;
      margin-right : 25px;
    }
    .completed{
      background-color : #4CAF50;
    }
    .urgent{
      background-color : #FF5252;
    }
    .important{
      background-color : #FFC107;
    }
    .later{
      background-color : #9C27B0;
    }
    .study{
      background-color : #26A7B8;
      margin-bottom : 100 px;
    }
  }
  .right-panel{
    display : flex;
    flex-direction: column;
    .info{
      display : flex;
      border-radius: 10px;
        background: #54BAB9;
      .tasks{
        color: #44A0A0;
        font-size: 20px;
        font-weight: 700;
        line-height: normal;
        margin-left : 20px;
        margin-top : 11px;
        margin-bottom : 12px;
      }
      .task-button{
        border-radius: 10px;
        background: #44A0A0;
        color: #F6F6F6;
        font-size: 20px;
        font-weight: 800;
        margin-left :135px;
        margin-top : 11px;
        margin-bottom : 12px;
        align-self : center;
      }
      .clear-button{
        color: #44A0A0;
        font-size: 20px;
        font-weight: 700;
        margin : 11px 14px 12px 47px;
        cursor : pointer;
      }
    }
  }
}
@media (min-width : 768px){
  .tasks-panel{
      margin : 150px 150px;
  }
}
`;