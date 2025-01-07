import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import {  Nav, Navbar } from 'react-bootstrap';
import { animateScroll, Events } from 'react-scroll';
import {navigate} from 'gatsby';

export function Navigation() {
  const menubarHeight = 45;

  const navBarWrapper = useRef(null);
  // 현재 스크롤 위치에 따라서 네비게이션을 상단에 고정시킬지 컨텐츠 내부에 위치시킬지 제어하기위한 상태 변수
  const [fixedTop, setFixedTop] = useState(false);

  const onScroll = () => {
    // 스크롤 위치가 메뉴바 아래까지 이동한 순간 메뉴바를 상단에 고정
    if (
      window.scrollY > 0 &&
      navBarWrapper.current.getBoundingClientRect().top <= 0
    ) {
      setFixedTop(true);
    } else {
      setFixedTop(false);
    }
  };

  // 현재 스크롤 위치를 찾아내기 위해 window 객체에 스크롤 이벤트 리스너를 등록
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    // react-scroll로 구현된 메뉴 링크를 클릭할 때마다 menu_click 이벤트를 GTM의 dataLayer로 전송
    Events.scrollEvent.register('begin', (to, element) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'menu_click',
          menu_name: to,
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      Events.scrollEvent.remove('begin');
    };
  });

  return (
    <div
      css={css`
        .fixed-top {
          background: white;
          box-shadow: 0 1px 4px #dee2e6;
        }

        .fixed-top .nav-link.active i {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          display: inline-block;
          width: 85%;
          height: 3px;
          margin: auto;
          background-color: #4169e2;
        }
      `}
      ref={navBarWrapper}
    >
      <Navbar
        className={fixedTop ? 'fixed-top' : null}
        css={css`
          justify-content: center;
          background: #f7f7f7;
          border-top: 1px solid #dee2e6;
          border-bottom: 1px solid #dee2e6;
          padding: 2px;
          height: ${menubarHeight}px;

          .nav-link {
            position: relative;
            cursor: pointer;
          }
        `}
      >
        <Nav>
          <button
            css={css`
              color:rgba(0,0,0,.5);
              background-color: transparent;
              border: none;
              &:hover{
                color:rgba(0,0,0,.7);
              }
              `}
              onClick={()=>window.open('https://www.google.com')
              }
          >
            예약하기 (Booking)
          </button>     
          <button
            css={css`
              color:rgba(0,0,0,.5);
              background-color: transparent;
              border: none;
              &:hover{
                color:rgba(0,0,0,.7);
              }
              `}
              onClick={()=>{
                navigate('/')
              }}
          >
            사진 (Photos)
          </button>     
          <button
            css={css`
              color:rgba(0,0,0,.5);
              background-color: transparent;
              border: none;
              &:hover{
                color:rgba(0,0,0,.7);
              }
              `}
              onClick={()=> navigate('/videos')}
          >

            영상(Video)
          </button>     
          
        </Nav>
      </Navbar>

      {/* 최상단으로 스크롤 할 수 있는 버튼 추가 */}
      {fixedTop ? (
        <div
          css={css`
            position: fixed;
            bottom: 15px;
            right: 15px;
            background-color: white;
            border-radius: 15px;
            z-index: 800;
            width: 32px;
            height: 32px;
            text-align: center;
            border: 1px solid #dee2e6;
            a {
              color: black;
            }
            box-shadow: 0 1px 4px #dee2e6;
          `}
        >
          <a href="#top" onClick={() => animateScroll.scrollToTop()}>
            {/* https://icons.getbootstrap.com/icons/chevron-up/ 에서 복사한 아이콘 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
          </a>
        </div>
      ) : null}
    </div>
  );
}
