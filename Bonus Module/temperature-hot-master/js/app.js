const api = `f6abe8833289aa4205687309d79ba724`


const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}


const displayTemperature = data => {
    // const temperature = document.getElementById('temperature')
    // console.log(data.main.temp);
    // temperature.innerText = data.main.temp
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field')
    const city = searchField.value
    document.getElementById('city').innerText = city
    loadTemperature(city)
})


// loadTemperature('dhaka')