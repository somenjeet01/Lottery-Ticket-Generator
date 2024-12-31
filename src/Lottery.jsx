import { useState } from "react";
import "./helper";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,WinningSum}) {
    let [ticket, setTicket] = useState(genTicket());
    let isWinning = sum(ticket) == WinningSum;

    let buyTicket = () => {
        setTicket(genTicket(3));
    }
    

    return (
        <div>
            <h1>Lottery Game</h1>
             <Ticket ticket={ticket} />
            <br></br>
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3>{ isWinning && "Congratulation, You Won" }</h3>
        </div>
    );
}