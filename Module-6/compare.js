const first = {a: 1, b: 5, c: 9}
const second = {a: 1, b: 5, c: 9}
function compareObject(first, second){
    const firstKeys = Object.keys(first)
    const secondKeys = Object.keys(second)
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false
            }
        }
        return true
    } 
}

const isSame = compareObject(first, second)
console.log(isSame);