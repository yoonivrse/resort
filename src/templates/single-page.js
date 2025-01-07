import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';



export default function SinglePage({ pageContext }){

    return(
        <div id = 'top'>
            <div
                css={css`
                    position: absolute;
                    width: 100%;
                    height: 300px;
                    z-index: -99;
                    `}
                    />
            <div
                css={css`
                    background-color: lightblue;
                `}
            >
                <h1
                css={css`
                    padding-top: 48px;
                    padding-bottom: 24px;
                    text-align: center;
                    font-size: 28px;
                    margin-bottom:0;
                    `}
                    >
                    Borneo Sea Life Resort
                </h1>
            </div>
            <div>
                <Navigation/>
            </div>
            <h2
                css={css`
                    background: white;    
                `}
            >
                location
            </h2>
            <div
            css={css`
                height:1000px;
                background-color: transparent;
            `}
            >
            </div>
            <Footer/>
        </div>
    )
}