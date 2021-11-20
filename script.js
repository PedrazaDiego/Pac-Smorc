const body = document.querySelector('#section2')
const plates = document.querySelectorAll('.plates')
const grid = document.querySelector('.playground')
const points = document.querySelectorAll('.meat')
const orc = `<img src="https://i.imgur.com/Q9SaLOW.png" height="40px" alt="">`
const texture = `<img src="https://i.imgur.com/LZeOFm4.png" height="40px" alt="">`
const meat = `<img src="https://i.imgur.com/WETrLO9.png" height="20px" alt="">`
const addPlate = document.createElement('div')
const wall = document.querySelectorAll('.wall')
const plateArray = []
const walls = [
    18, 20, 21, 23, 24, 25, 26, 27, 29, 30, 32, 35, 37, 40, 44, 46, 49, 52, 57, 59, 61, 66, 69, 70, 72, 76, 80,
    82, 83, 89, 90, 91, 93, 95, 96, 97, 104, 105, 106, 114, 115, 116, 123, 125, 126, 127, 128, 129, 131, 136, 137,
    138, 142, 146, 150, 151, 152, 157, 159, 160, 161, 162, 163, 165, 171, 172, 174, 182, 184, 185, 188, 191, 193,
    194, 195, 196, 197, 199, 202, 205, 207, 208, 212, 216, 217, 219, 222, 227, 229, 231, 236, 239, 241, 244, 248,
    251, 253, 256, 258, 259, 261, 262, 263, 264, 265, 267, 268, 270]
const road = []



//___________function___________//

const gameBoard = () =>{
    for (let i = 0; i < walls.length; i++){
        plates[walls[i]].setAttribute('id', `${walls[i]}`)
        plates[walls[i]].classList.remove('plates')
        plates[walls[i]].innerHTML = texture
    }//dotted walls
    
    plates.forEach( (n, n2) =>{
        plateArray[n2] = n2
    })//set plateArray values
    
    const x = plateArray.filter( (n, n2) => {
        return !walls.includes(n2)
        
    })//returns the difference of plateArray and Walls
    
    for (let i = 1; i < x.length; i++){
        // plates[x[0]].innerHTML = orc
        plates[x[i]].classList.add(`meat`)
        plates[x[i]].innerHTML = meat
        road.push(x[i])
    }//puts the player in the road
}
gameBoard() //Sets gameboard

const playerMove = () =>{
    let orcStart = 0
    // plates[orcStart].innerHTML = ''   
    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 37:
                if(plates[orcStart].classList.contains('plates')){
                    orcStart -= 1
                    plates[orcStart].innerHTML = orc
                    plates[orcStart + 1].innerHTML = ''
                    console.log(orcStart)
                }
                break;
            case 38:
                if(plates[orcStart].classList.contains('plates')){
                    orcStart -= 17
                    plates[orcStart].innerHTML = orc
                    plates[orcStart + 17].innerHTML = ''
                    console.log(orcStart)
                }
                break;
            case 39:
                if(plates[orcStart].classList.contains('plates')){
                    orcStart += 1
                    plates[orcStart].innerHTML = orc
                    plates[orcStart - 1].innerHTML = ''
                    console.log(orcStart)
                }
                break;
            case 40:
                if(plates[orcStart].classList.contains('plates')){
                    orcStart += 17
                    plates[orcStart].innerHTML = orc
                    plates[orcStart - 17].innerHTML = ''
                    console.log(orcStart)
                }
                break;
        }
    });
}//block taken from https://www.codegrepper.com/code-examples/javascript/addeventlistener+arrow+keys
playerMove()//Sets player movement





// body.addEventListener('keydown', e => {
//     console.log(e)
// })
// body.addEventListener('click', (e) =>{
//     console.log(e.target)
// })

//___________events_____________//













//____________console logs__________//
// console.log(road)
// console.log(plates)
// console.log(walls)
//console.log(road)
// console.log(plateArray.length)
// console.log(road)