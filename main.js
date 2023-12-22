let count = document.getElementById('count');
let time = document.getElementById('time');
let countPerSecond = document.getElementById('count-per-second');

let clickBtn = document.getElementById('click-btn');
let resetBtn = document.getElementById('reset-btn');


let interval;
let timeout;
let i = 0;
let timeValue = 10;
time.onchange = (event) =>{
    if(event.target.value > 15){
        timeValue = 15;
        time.value = 15;
    }else if(event.target.value < 5){
        timeValue = 5;
        time.value = 5;
    } else{
        timeValue = event.target.value
    }
}
clickBtn.onclick = () => {
    i++;
    count.textContent = i;
    if(i == 1){
        timeout = setTimeout(()=>{
            clickBtn.disabled = true;
            countPerSecond.textContent = i / timeValue;
        }, timeValue * 1000)
        interval = setInterval(()=>{
            time.value--;
            if(time.value == 0){
                clearInterval(interval)
            }
        }, 1000)
    }
    
};

resetBtn.onclick = ()=>{
    i = 0
    timeValue = 10
    count.textContent = i;
    clearInterval(interval)
    clickBtn.disabled = false
    clearTimeout(timeout)
    time.value = timeValue
    countPerSecond.textContent = 0
}


















// let interval = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// clearInterval(interval)

// let timeout = setTimeout(() => {
//      console.log('hello world');
// }, 2000);

// clearTimeout(timeout)