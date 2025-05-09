function genticket(n)
{
    let arr=[];
for(let i=0;i<n;i++)
{
    arr[i]=Math.floor(Math.random()*10);
}
return arr;
}
function sum(ticket)
{
    return ticket.reduce((sum,value)=>
     sum+value,0);
}





export {genticket,sum};