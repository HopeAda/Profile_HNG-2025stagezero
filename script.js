const currentTime= document.getElementById('current-time');

const getTime = () =>{
    const d= new Date();
    console.log(d);
    let hours= d.getUTCHours();
    let minutes= d.getUTCMinutes();
    let seconds= d.getUTCSeconds();

    const timeGot = hours + ':' + minutes + ':' + seconds + ' UTC';

    currentTime.innerText= timeGot;
}

getTime();