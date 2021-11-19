const plates = document.querySelectorAll('.plates')
const grid = document.querySelector('.playground')
const orc = `<img src="https://i.imgur.com/Q9SaLOW.png" height="40px" alt="">`
const texture = `<img src="https://i.imgur.com/LZeOFm4.png" height="40px" alt="">`
const addPlate = document.createElement('div')
const wall = document.querySelectorAll('.wall')
const plateArray = []
const walls = [
    18, 20, 21, 23, 24, 25, 26, 27, 29, 30, 32, 35, 37, 40, 44, 46, 49, 52, 57, 59, 61, 66, 69, 70, 72, 76, 80,
    82, 83, 89, 90, 91, 93, 95, 96, 97, 104, 105, 106, 114, 115, 116, 123, 125, 126, 127, 128, 129, 131, 136, 137,
    138, 142, 146, 150, 151, 152, 157, 159, 160, 161, 162, 163, 165, 171, 172, 174, 182, 184, 185, 188, 191, 193,
    194, 195, 196, 197, 199, 202, 205, 207, 208, 212, 216, 217, 219, 222, 227, 229, 231, 236, 239, 241, 244, 248,
    251, 253, 256, 258, 259, 261, 262, 263, 264, 265, 267, 268, 270]


for (let i = 0; i < walls.length; i++){
    plates[walls[i]].setAttribute('id', `${i}`)
    // plates[walls[i]].classList.add('wall')
    plates[walls[i]].innerHTML = texture
}









// for (let i = 0; i < walls.length; i++){
//     if (walls[i] === plates[i]){
//         plates[i].setAttribute('id', walls[i])
//     }
// }

// plateArray.forEach( (n, n2) => {
//     plates[n2].innerText = `${walls[n2]}`
//     n.setAttribute('id', `${walls[n2]}`)
// })




//___________function___________//










//___________events_____________//













//____________console logs__________//
// console.log(road)
// console.log(plates)
// console.log(walls)
//console.log(road)
// console.log(plateArray)