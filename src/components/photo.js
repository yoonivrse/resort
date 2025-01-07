import React from "react";
import { Slide } from "./slide";
import { css } from "@emotion/react";

export function Photo(props){
    const { dataSource } = props;
    const { files } = dataSource;
    return(
        <Slide id='photo' title='방 사진(Room Photos)'>
            <div
                css={css`
                    display:grid;
                    overflow:scroll;
                    grid-template-columns: auto auto auto;
                    column-gap: 50px;
                    row-gap: 50px;
                    padding: 10px;
                    align-items: center;
                    justify-content:center;  
                `}
            >
            {files.map((x)=>{
                return <img src={x} alt={x} width='300px' height='300px'  />
            })}
            </div>
        </Slide>
    )
}