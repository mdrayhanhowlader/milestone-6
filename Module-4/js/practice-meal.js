const loadMeals = (search) => {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('card-group')
    for(const meal of meals){
        console.log(meal)
        const mealDetail = document.createElement('div')
        mealDetail.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top w-100" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <button class="btn btn-primary w-50 mx-auto my-2" onclick="">Add Item<button>
        </div>
      </div>
        `
        mealsContainer.appendChild(mealDetail)
    }
}

const searchProduct = () => {
    const searchField = document.getElementById('search-field')
    const getSearchValue = searchField.value
    loadMeals(getSearchValue)
    
}


// loadMeals('fish')
