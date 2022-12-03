document.getElementById('btn-search').addEventListener('click', function(){
    const title = document.getElementById('title')
    // let titleValue = title.innerText
    title.innerText = "...Searching"
    title.style = "font-size: 28px; color: yellow; text-transform: capitalize;"
})