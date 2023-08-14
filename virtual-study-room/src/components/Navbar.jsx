import React from 'react'
import styled from "styled-components"
import list from "../assets/nav-icons/list.png"
import reading from "../assets/nav-icons/reading.png"
import studying from "../assets/nav-icons/studying.png"
import video from "../assets/nav-icons/video-camera.png"
import whiteboard from "../assets/nav-icons/whiteboard.png"

export default function Navbar() {
  return (
    <>
    <Container>
    <nav className='navigation-menu'>
      <div className='wrapper'>
        <div className='logo'>
          <a className='' href='/'>
            <img width='24' height='24' src={reading} />
          </a>
        </div>
        <div className='menu'>
          <ul className='menu-items'>
            <li>
              <a className='studyrooms navigation-link' href='/'>
                <div className='study-room-image'>
                  <img width='24' height='24'  src={video} alt='studyroom' />
                </div>
                <p>Virtual Study Rooms</p>
              </a>
            </li>
            <li>
              <a className='solo-study navigation-link' href='/studyalone'>
                <div className='solo-study-room-image menu-item'>
                  <img width='24' height='24' src={studying} alt='solo-studyroom' />
                </div>
                <p>Study Alone</p>
              </a>
            </li>
            <li>
              <a className='task-list navigation-link' href='tasks'>
                <div className='task-list menu-item'>
                  <img width='24' height='24' src={list} />
                </div>
                <p> Todo List</p>
              </a>
            </li>
            <li>
              <a className='whiteboard navigation-link' href=''>
                <div className='white-board-image menu-item'>
                  <img width='24' height='24' src={whiteboard} alt='studyroom' />
                </div>
                <p> WhiteBoard</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Container>
    </>
  )
}

const Container = styled.div`
  .navigation-link{
    padding : 0.75rem 2rem;
    display : flex;
    align-items: center;
    text-decoration: none;
    font-weight : 400;
    color : #27110f;
    text-transform : capitalize;
  }
  .navigation-menu{
    background-color : #282322;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    pointer-events:none;
    z-index:1;
    .wrapper{
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:2;
      width:232px;
        transform: translate(-100%);
      transition:transform 225ms cubic-bezier(0,0,.2,1) 0ms;
      padding: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      .logo{
        height: 48px;
        display: flex;
        align-items : center;
        padding : 1rem 1.5rem;
      }
      .menu{
        .menu-items{
          color: #000;
          padding: 1rem 0;
          display: flex;
          flex-direction : column;
          list-style: none;
          margin: 0;
          li{
            margin-bottom : 2px;
            .navigation-link{
              padding: 0.75rem 2rem;
              display: flex;
              align-items : center;
              text-decoration : none;
              font-weight : 400;
              color: #fff;
              text-transform : capitalize;
              .menu-item{
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.75rem;
                color: #27110f;
                fill: #27110f;
              }
            }
          }
        }
      }
    }
  }
  
  @media(min-width:768px){
    .navigation-menu{
      right:unset;
      width:240px;
      .wrapper{
        width:88px;
        padding: 0 4px;
        transform: translate(0);
        pointer-events:all;
        justify-content: flex-start;
        overflow-y: overlay;
        .navigation-link{
          flex-wrap : wrap;
          padding : 0.75rem 0;
          text-align : center;
          justify-content : center;
          border-radius : 8px;
          .menu-item{
            margin-right : 0;
            flex : 0 0 100%;
          }
        }
      }
    }
  }
`;
