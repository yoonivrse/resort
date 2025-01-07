import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { YoutubeSlide } from '../components/youtube-slide';


export default function SinglePage({ pageContext }){
    const { dataSource } = pageContext;

    return(
        <div id = 'top'>
            <div
                css={css`
                    position: absolute;
                    background-color: lightblue;
                    width: 100%;
                    height: 300px;
                    z-index: -99;
                `}
            />
            <h1
                css={css`
                padding-top: 48px;
                padding-bottom: 24px;
                text-align: center;
                font-size: 28px;
                `}
            >
                Borneo Sea Life Resort
            </h1>
            <Navigation />
            <YoutubeSlide id="youtube-slide" dataSource={dataSource} />
            <Footer/>
        </div>
    )
}