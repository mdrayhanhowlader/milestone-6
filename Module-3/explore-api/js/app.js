function loadUsers(){
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))

}

function displayUsers(data){

}