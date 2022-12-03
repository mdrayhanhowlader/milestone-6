const cart = []
document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friends')
    for(const friend of friends){
        friend.style.backgroundColor = 'red'
        cart.push(friend)
    }
})

console.log(cart)