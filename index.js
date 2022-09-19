// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}


function writeCards(array, event) {
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }

    return newArr;
}

function countDown(number) {
    let countdown = number;
    while(countdown >= 0) {
        console.log(countdown--);

    }
}