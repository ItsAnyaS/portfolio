window.addEventListener('load', () => {

    const content = document.querySelector('#content');
    const startBtn = document.querySelector('#start-btn');
    const card = document.querySelector(".card");
    const form = document.querySelector('.form');
    const input = document.querySelector('.click');
    const scoreContainer = document.querySelector('#score-container');
    const body = document.querySelector('.body');
    let count = 0;
    let Arr = [];
    let points = 0;
    
    
        const winScreen = document.createElement('div');
        winScreen.classList.add('win-screen');
        body.appendChild(winScreen);

        const winHeader = document.createElement('h1');
        winHeader.classList.add('win-header')
        winHeader.innerText = 'Congratulations!';
        winScreen.appendChild(winHeader);

        const winText = document.createElement('p');
        winText.classList.add('win-text');
        winText.innerText = "You Win!"
        winScreen.appendChild(winText);

        const winBtn = document.createElement('input');
        winBtn.classList.add('win-btn');
        winBtn.type = 'button';
        winBtn.value = "Play Again";
        winScreen.appendChild(winBtn);

        function win(){
            winScreen.classList.add('active');
            winHeader.classList.add('active');
            winText.classList.add('active');
            winBtn.classList.add('active');
            winBtn.addEventListener('click', () => {
    location.reload();})

        }

       
    

    const Array = [1, 1, 2, 2, 3, 3, 4, 4]
    const newArray = [];

    for (let i = 0; i < 50; i++) {

    let j = Math.floor(Math.random() * 8 )
    newArray.push(Array[j])
    Array.splice(j,1,)
}
    const finalArray = newArray.filter(function(value){
    return value != undefined;
})




    const score = document.createElement('p');
    score.classList.add('score');
    


    for (let i = 0; i < 8; i++){
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    content.appendChild(cardEl);

    const formEl = document.createElement('form');
    formEl.classList.add('form');
    cardEl.appendChild(formEl);

    const inputEl = document.createElement('input');
    inputEl.classList.add('click');
    inputEl.type = 'button';
    cardEl.appendChild(inputEl);

    const img = document.createElement('img');
        if (finalArray[0] == 1){
            img.src = "memory-game-img/card1.jpg"
            inputEl.value = "img1";
            finalArray.splice(0,1)
        }else if (finalArray[0] == 2 ){
            img.src = "memory-game-img/card2.jpg"
            inputEl.value = "img2";
            finalArray.splice(0,1)
        } else if (finalArray[0] == 3){
            img.src = "memory-game-img/card3.jpg"
            inputEl.value = "img3";
            finalArray.splice(0,1)
        } else if (finalArray[0] == 4) {
            img.src = "memory-game-img/card4.jpg"
            inputEl.value = "img4";
            finalArray.splice(0,1)
        } else {
            return alert('all is lost');
        }
    img.classList.add('img');
    cardEl.appendChild(img);
    
    

    
    startBtn.addEventListener('click', () => {
        inputEl.classList.add('active');
     
        
        
        inputEl.addEventListener('click', () => {
           if(count < 2){
            count++
            Arr.push(inputEl.value);
            console.log(Arr)
            inputEl.classList.toggle('active');
            if (Arr[0] == Arr[1]){
                points++ / 2;
                inputEl.classList.add('remove');
                Arr = [];
                count = 0;
                score.innerHTML = "Score:" + points;
                scoreContainer.appendChild(score);
                if (points == 4){
                    setTimeout(win(), 50)
                } 
            } else if (Arr[0] != Arr[1] && count == 2){
                
                setTimeout(() =>{inputEl.classList.toggle('active');}, 700);
                Arr.pop();
                count--;
                
            } else {
                return;
            }

            }
        

           
        })   
             
    })
    }
}) 

