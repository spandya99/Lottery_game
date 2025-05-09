import {useState} from 'react';
import {genticket,sum} from './helper.js';
import Ticket from './Ticket.jsx';
import './Lottery.css';
import Button from './Button.jsx';
export default function Lottery({n,winCondition})

{
    let[ticket,setTicket]= useState( genticket(n))
    let iswinning=winCondition(ticket);
let buyticket=()=>
{
   
setTicket(genticket(n))

}

    return(
<div className="body">
    <h1>lottery game</h1>
   <h2><Ticket ticket={ticket}/></h2> 
 <p> { iswinning ? "congratulations":""}</p>
   <Button action={buyticket}/>
</div>
    );
}