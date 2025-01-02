import React from "react";
import { Button } from 'react-bootstrap';
import { Slide } from "./slide";

export function Booking(){
    return(
        <Slide id='booking' title='방 예약하기(Room Reservation'>
                    <Button
                        variant="outline-primary"
                        onClick={ ()=>{
                            window.open('https://google.com');
                        }}
                    >
                        예약
                    </Button>
        </Slide>
    )
}