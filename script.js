const body = document.querySelector('#section2')
const plates = document.querySelectorAll('.plates')
const grid = document.querySelector('.playground')
const points = document.querySelectorAll('.meat')
const strength = document.querySelector('.score')
const restart = document.querySelector('#gameover')
const orc = `<img src="https://i.imgur.com/Q9SaLOW.png" height="40px" alt="">`
const human = `<img src="https://i.imgur.com/68985hw.png" height="40px" alt="">`
const texture = `<img src="https://i.imgur.com/bT2HoxX.png" height="40px" alt="">`
const meat = `<img src="https://i.imgur.com/WETrLO9.png" height="15px" alt="">`
const addPlate = document.createElement('div')
const wall = document.querySelectorAll('.wall')
const plateArray = []
const walls = [
    18, 20, 21, 23, 24, 25, 26, 27, 29, 30, 32, 35, 37, 40, 44, 46, 49, 52, 57, 59, 61, 66, 69, 70, 72, 76, 80,
    82, 83, 89, 90, 91, 93, 95, 96, 97, 104, 105, 106, 114, 115, 116, 123, 125, 126, 128, 129, 131, 136, 137,
    138, 142, 146, 150, 151, 152, 157, 159, 160, 161, 162, 163, 165, 171, 172, 174, 182, 184, 185, 188, 191, 193,
    194, 195, 196, 197, 199, 202, 205, 207, 208, 212, 216, 217, 219, 222, 227, 229, 231, 236, 239, 241, 244, 248,
    251, 253, 256, 258, 259, 261, 262, 263, 264, 265, 267, 268, 270]
const road = []
let score = 0
let orcStart = 0 
let humanOneStart = 37
let humanTwoStart = 65
let humanThreeStart = 242
let humanFourStart = 250
let gameOn = false


//___________function___________//



const setBorders = () => { //__________________________________sets border
    for (let i = 0; i < 288; i += 17){
        plates[i].classList.add('border-left')
        }
    for (let i = 0; i < 17; i++){
        plates[i].classList.add('border-up')
    }
    for (let i = 288; i > 0; i -= 17){
        plates[i].classList.add('border-right')
    }
    for (let i = 288; i > 271; i--){
        plates[i].classList.add('border-down')
    }
}
setBorders()


const gameBoard = () =>{  //__________________________________dotted walls
    for (let i = 0; i < walls.length; i++){
        plates[walls[i]].setAttribute('class', `0`)
        plates[walls[i]].classList.remove('plates')
        plates[walls[i]].innerHTML = texture
    }
    
    plates.forEach( (n, n2) =>{ //____________________set plateArray values
        plateArray[n2] = n2
    })
    
    const x = plateArray.filter( (n, n2) => { //returns the difference of plateArray and Walls
        return !walls.includes(n2)
        
    })
    
    for (let i = 1; i < x.length; i++){  //puts the meat in the road
        plates[x[i]].classList.add(`meat`)
        plates[x[i]].innerHTML = meat
        road.push(x[i])
    }
}
gameBoard() //Sets gameboard


humanOneMove = () => {
    if(!gameOn){
        let rng = Math.floor(Math.random()*3.9)
        if(plates[humanOneStart].classList.contains('orc')){
            gameOn = true
            restart.style.opacity = '1'
        } else {
            if(rng === 0){
                if(plates[humanOneStart].classList.contains('border-left')){
                    return false
                }
                if(plates[humanOneStart - 1].classList.contains('0')){
                    return false
                }
                humanOneStart -= 1
                plates[humanOneStart].classList.add('human')
                plates[humanOneStart + 1].classList.remove('human')
            }
            if(rng === 1){
                if(plates[humanOneStart].classList.contains('border-up')){
                    return false
                }
                if(plates[humanOneStart - 17].classList.contains('0')){
                    return false
                }
                humanOneStart -= 17
                plates[humanOneStart].classList.add('human')
                plates[humanOneStart + 17].classList.remove('human')
            }
            if(rng === 2){
                if(plates[humanOneStart].classList.contains('border-right')){
                    return false
                }
                if(plates[humanOneStart + 1].classList.contains('0')){
                    return false
                }
                humanOneStart += 1
                plates[humanOneStart].classList.add('human')
                // plates[humanOneStart].innerHTML = human
                plates[humanOneStart - 1].classList.remove('human')
            }
            if(rng === 3){
                if(plates[humanOneStart].classList.contains('border-down')){
                    return false
                }
                if(plates[humanOneStart + 17].classList.contains('0')){
                    return false
                }
                humanOneStart += 17
                plates[humanOneStart].classList.add('human')
                plates[humanOneStart - 17].classList.remove('human')
            }
        }     
    }
}
humanTwoMove = () => {
    if(!gameOn){
        let rng = Math.floor(Math.random()*3.9)
        if(plates[humanTwoStart].classList.contains('orc')){
            gameOn = true
            restart.style.opacity = '1'
        } else {
            if(rng === 0){
                if(plates[humanTwoStart].classList.contains('border-left')){
                    return false
                }
                if(plates[humanTwoStart - 1].classList.contains('0')){
                    return false
                }
                humanTwoStart -= 1
                plates[humanTwoStart].classList.add('human')
                plates[humanTwoStart + 1].classList.remove('human')
            }
            if(rng === 1){
                if(plates[humanTwoStart].classList.contains('border-up')){
                    return false
                }
                if(plates[humanTwoStart - 17].classList.contains('0')){
                    return false
                }
                humanTwoStart -= 17
                plates[humanTwoStart].classList.add('human')
                plates[humanTwoStart + 17].classList.remove('human')
            }
            if(rng === 2){
                if(plates[humanTwoStart].classList.contains('border-right')){
                    return false
                }
                if(plates[humanTwoStart + 1].classList.contains('0')){
                    return false
                }
                humanTwoStart += 1
                plates[humanTwoStart].classList.add('human')
                // plates[humanTwoStart].innerHTML = human
                plates[humanTwoStart - 1].classList.remove('human')
            }
            if(rng === 3){
                if(plates[humanTwoStart].classList.contains('border-down')){
                    return false
                }
                if(plates[humanTwoStart + 17].classList.contains('0')){
                    return false
                }
                humanTwoStart += 17
                plates[humanTwoStart].classList.add('human')
                plates[humanTwoStart - 17].classList.remove('human')
        }
        
        }
    }
}
humanThreeMove = () => {
    if(!gameOn){
        let rng = Math.floor(Math.random()*3.9)
        if(plates[humanThreeStart].classList.contains('orc')){
            gameOn = true
            restart.style.opacity = '1'
        } else {
            if(rng === 0){
                if(plates[humanThreeStart].classList.contains('border-left')){
                    return false
                }
                if(plates[humanThreeStart - 1].classList.contains('0')){
                    return false
                }
                humanThreeStart -= 1
                plates[humanThreeStart].classList.add('human')
                plates[humanThreeStart + 1].classList.remove('human')
            }
            if(rng === 1){
                if(plates[humanThreeStart].classList.contains('border-up')){
                    return false
                }
                if(plates[humanThreeStart - 17].classList.contains('0')){
                    return false
                }
                humanThreeStart -= 17
                plates[humanThreeStart].classList.add('human')
                plates[humanThreeStart + 17].classList.remove('human')
            }
            if(rng === 2){
                if(plates[humanThreeStart].classList.contains('border-right')){
                    return false
                }
                if(plates[humanThreeStart + 1].classList.contains('0')){
                    return false
                }
                humanThreeStart += 1
                plates[humanThreeStart].classList.add('human')
                // plates[humanThreeStart].innerHTML = human
                plates[humanThreeStart - 1].classList.remove('human')
            }
            if(rng === 3){
                if(plates[humanThreeStart].classList.contains('border-down')){
                    return false
                }
                if(plates[humanThreeStart + 17].classList.contains('0')){
                    return false
                }
                humanThreeStart += 17
                plates[humanThreeStart].classList.add('human')
                plates[humanThreeStart - 17].classList.remove('human')
        }
        
        }
    }
}
humanFourMove = () => {
    if(!gameOn){
        let rng = Math.floor(Math.random()*3.9)
        if(plates[humanFourStart].classList.contains('orc')){
            gameOn = true
            restart.style.opacity = '1'
        } else {
            if(rng === 0){
                if(plates[humanFourStart].classList.contains('border-left')){
                    return false
                }
                if(plates[humanFourStart - 1].classList.contains('0')){
                    return false
                }
                humanFourStart -= 1
                plates[humanFourStart].classList.add('human')
                plates[humanFourStart + 1].classList.remove('human')
            }
            if(rng === 1){
                if(plates[humanFourStart].classList.contains('border-up')){
                    return false
                }
                if(plates[humanFourStart - 17].classList.contains('0')){
                    return false
                }
                humanFourStart -= 17
                plates[humanFourStart].classList.add('human')
                plates[humanFourStart + 17].classList.remove('human')
            }
            if(rng === 2){
                if(plates[humanFourStart].classList.contains('border-right')){
                    return false
                }
                if(plates[humanFourStart + 1].classList.contains('0')){
                    return false
                }
                humanFourStart += 1
                plates[humanFourStart].classList.add('human')
                // plates[humanFourStart].innerHTML = human
                plates[humanFourStart - 1].classList.remove('human')
            }
            if(rng === 3){
                if(plates[humanFourStart].classList.contains('border-down')){
                    return false
                }
                if(plates[humanFourStart + 17].classList.contains('0')){
                    return false
                }
                humanFourStart += 17
                plates[humanFourStart].classList.add('human')
                plates[humanFourStart - 17].classList.remove('human')
        }

        }
    }
}
setInterval(humanFourMove, 75)
setInterval(humanThreeMove, 100)
setInterval(humanTwoMove, 125)
setInterval(humanOneMove, 150)



const playerMove = () =>{
        document.addEventListener('keydown', function(e) {
            if(!gameOn){
                switch (e.keyCode) {
                    case 37:
                        if(plates[orcStart].classList.contains('border-left')){
                            return false
                        }
                        if(plates[orcStart - 1].classList.contains('0')){
                            return false
                        }
                        if(plates[orcStart].classList.contains('plates')){
                            orcStart -= 1
                            plates[orcStart].innerHTML = orc
                            plates[orcStart].classList.add('orc')
                            plates[orcStart + 1].innerHTML = ''
                            plates[orcStart + 1].classList.remove('orc')
                            scoreUpdate()
                            won()
                        }
                        break;
                    case 38:
                        if(plates[orcStart].classList.contains('border-up')){
                            return false
                        }
                        if(plates[orcStart - 17].classList.contains('0')){
                            return false
                        }
                        if(plates[orcStart].classList.contains('plates')){
                            orcStart -= 17
                            plates[orcStart].innerHTML = orc
                            plates[orcStart].classList.add('orc')
                            plates[orcStart + 17].innerHTML = ''
                            plates[orcStart + 17].classList.remove('orc')
                            scoreUpdate()
                            won()
                        }
                        break;
                    case 39:
                        if(plates[orcStart].classList.contains('border-right')){
                            return false
                        }
                        if(plates[orcStart + 1].classList.contains('0')){
                            return false
                        }
                        if(plates[orcStart].classList.contains('plates')){
                            orcStart += 1
                            plates[orcStart].innerHTML = orc
                            plates[orcStart].classList.add('orc')
                            plates[orcStart - 1].innerHTML = ''
                            plates[orcStart - 1].classList.remove('orc')
                            scoreUpdate()
                            won()
                        }
                        break;
                    case 40:
                        if(plates[orcStart].classList.contains('border-down')){
                            return false
                        }
                        if(plates[orcStart + 17].classList.contains('0')){
                            return false
                        }
                        if(plates[orcStart].classList.contains('plates')){
                            orcStart += 17
                            plates[orcStart].innerHTML = orc
                            plates[orcStart].classList.add('orc')
                            plates[orcStart - 17].innerHTML = ''
                            plates[orcStart - 17].classList.remove('orc')
                            scoreUpdate()
                            won()
                        }
                        break;
                }
            }
        });
}//block taken from https://www.codegrepper.com/code-examples/javascript/addeventlistener+arrow+keys
playerMove()//Sets player movement


const scoreUpdate = () => {
    if(plates[orcStart].classList.contains('meat')){
        plates[orcStart].classList.remove('meat')
        score += 10
        strength.innerHTML = score
        if(plates[orcStart].classList.contains('human')){
            gameOn = true
            restart.style.opacity = '1'
        }
    }
}


const won = () => {
    if(score === 1810){
        gameOn = true
        restart.style.opacity = '1'
    }
}
//___________events_____________//

restart.addEventListener('click', () =>{
    gameBoard()
    gameOn = false
    score = 0
    strength.innerHTML = 0
    orcStart = 0
    humanOneStart = 37
    humanTwoStart = 65
    humanThreeStart = 242
    humanFourStart = 250
    restart.style.opacity = '0'
    for(let i = 0; i < plates.length; i++){
        plates[i].classList.remove('human')
        plates[i].classList.remove('orc')
    }
})
//


