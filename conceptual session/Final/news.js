// const loadAllNews = async() => {
//     const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
//     const data = await res.json()
//     setAllMenu(data.data.news_category);
// }

// const setAllMenu = async(data) => {
//     const ul = document.getElementById('news-nav')

//     data.forEach(news => {
//         console.log(news);
//         const li = document.createElement('li')
//         li.innerHTML = `
//             <li class="nav-item">
//                 <a class="nav-link" href="#">${news.category_name}</a>
//             </li>
//         `
//         ul.appendChild(li)
//     })

// }


const loadAllNews = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    return data.data.news_category
}

const setAllMenu = async() => {
    const data = await loadAllNews()
    const ul = document.getElementById('news-nav')
    // console.log(data);

    data.forEach(news => {
        const li = document.createElement('li')
        console.log(news.categroies);
        li.innerHTML = `
            <li class="nav-item">
                <a onclick="showProduct('${news.category_id}')" class="nav-link" href="#">${news.category_name}</a>
            </li>
        `
        ul.appendChild(li)

    })

}





setAllMenu()

const showProduct = async event => {
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${event}`)
        const data = await res.json()
        const getNews = data.data
        // console.log(getNews);

        // spin
        const spinContainer = document.getElementById('spin-container')
        spinContainer.classList.remove('d-none')

        const cardContainer = document.getElementById('card-container')
        // const spinContainer = document.getElementById('spin-container')
        // spinContainer.classList.add('d-none')
        cardContainer.textContent = ""

        spinContainer.classList.add('d-none')

        // getNews.total_view.sort(function(a, b){
        //     return a-b
        // })
        
        

        getNews.forEach(news => {
            // news.total_view.sort(function(a,b){
            //     return a-b
            // })


            const card = document.createElement('div')
            card.classList.add('col-md-12')

            // console.log(news)


            // news.total_view.sort(function (a, b){
            //     return a - b
            // })
        
            const {thumbnail_url, title, details, author, rating, total_view} = news

            const views = total_view
            views.sort(function(a, b){
                return a - b
            })

            


            card.innerHTML = `
            <div class="card mb-3">
                <div class="row g-0" id="card-container">
                    <div class="col-md-3">
                        <img src="${thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                          <h5 class="card-title">${title}</h5>
                          <p class="card-text">${details.length > 200 ? details.slice(0, 200) + '...' : details}</p>
                          <p class="card-text mb-16"><small class="text-muted">Last updated 3 mins ago</small></p>

                          <div class="d-flex flex-row justify-content-between align-items-center pr-md-4">
                                
                            <div class="author d-flex flex-row justify-content-between">
                                <div>
                                    <img style="width: 50px; height: 50px; border-radius: 50%;" class="" src="${author.img}" />
                                </div>
                                <div>
                                    <h5>${author.name ? author.name : "no author name"}</h5>
                                    <h6>${author.published_date}</h6>
                                </div>
                            </div>

                            <div class="view">
                                <h6>
                                <span>
                                <i class="fa-solid fa-eye"></i>
                                </span> ${total_view}<span>M</span></h6>
                            </div>

                            <div>
                                <h6>
                                 ${rating.number}
                                </h6>
                            </div>

                            <div>

                            <a style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa-solid fa-angles-right"></i>
                            </a>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                            </div>

                          </div>
                        </div>

                    </div>
                </div>
            </div>
            `
            cardContainer.appendChild(card)



        })

        const newsItems = document.getElementById('news-items')
        const newsText = document.getElementById('news-text')
        // console.log(newsItems);
        newsItems.textContent = ""
        for(let i = 0; i < getNews.length; i++){
            // newsItems.innerText = i + 1
            if(i > 0 ){
                newsText.classList.remove('d-none')
                newsItems.innerText = i + 1
            }else {
                newsText.classList.add('d-none')
            }
        }

    }catch (error){
        console.log(error);
    }

}





loadAllNews()



