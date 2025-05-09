import Ticketno from './Ticketno.jsx';
import './Ticket.css';

export default function Ticket({ticket})
{
return(
    <div className="body1">
    {
    
    
        ticket.map((num)=>(
        <Ticketno num={num} /> 
        )

        )
        
    }
    </div>

);
}