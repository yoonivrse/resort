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
                    display:flex;
                    overflow:scroll;    
                `}
            >
            {files.map((x)=>{
                return <img src={x} alt={x} width='300px' height='300px'  />
            })}
            </div>
        </Slide>
    )
}