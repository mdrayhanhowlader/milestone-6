const loadAllProducts = async() => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    return data
}

const setAllMenu = async() => {
    const data = await loadAllProducts()
    const menu = document.getElementById('all-menu')
    const uniqueArray = []

    for(const product of data){

        if(uniqueArray.indexOf(product.category) === -1){
            uniqueArray.push(product.category)
            const li = document.createElement('li')
            li.innerHTML = `
            <a>${product.category}</a>
            `
            menu.appendChild(li)

        }
        
    }

}

setAllMenu()


const searchField = document.getElementById('search-field')
searchField.addEventListener('keypress', async(event) => {
    if(event.key === 'Enter'){
        const searchValue = searchField.value
        const allProducts = await loadAllProducts()

        const foundProducts = allProducts.filter(product => product.category.includes(product.category))
        // console.log(foundProduct)

        const productsContainer = document.getElementById('products-container')
        const notFound = document.getElementById('not-found')

        productsContainer.textContent = '';
        notFound.textContent = '';

        if(foundProducts.length === 0){
            notFound.innerHTML = `<h3 class="text-2xl text-orange-500 text-center">Not Found</h3>`
            console.log(notFound)
            return;
        }

        foundProducts.forEach(product => {

            const {category, title, image} = product
            // console.log(product);
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card card-compact w-full bg-base-60 shadow-xl">
            <figure><img src="${image}" alt="Shoes" class="w-full h-60" /></figure>
            <div class="card-body">
              <h2 class="card-title">${category}</h2>
              <p>${title.length > 20 ? title.slice(0, 20) : title}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
            `

            productsContainer.appendChild(div)
        });
    }
})
// loadAllProducts()