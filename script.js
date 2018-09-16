// Our variables
const key = "bd6d5dbea1e845f2b2e1411ab28ae97b"
const url = `https://newsapi.org/v2/everything?q=+"election"+"Sweden"+"Government"&from=2018-09-09&apiKey=bd6d5dbea1e845f2b2e1411ab28ae97b&sortBy=relevance&language=en&apiKey=${key}`
const urlFr = `https://newsapi.org/v2/everything?q="Suède"&from=2018-09-09&apiKey=bd6d5dbea1e845f2b2e1411ab28ae97b&sortBy=relevance&language=fr&apiKey=${key}`

// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article, index) => {

        if (index === 0){
          document.querySelector(".topstory").innerHTML =
          `<h2>${article.title}</h2>
          <img src="${article.urlToImage}" class="topImg"/>
          <p class="topStoryP">${article.description}</p>
          <a href=${article.url} target="_blank">Read full story</a>`
        } else {
					//Here we create and add html elements to our html file
					document.querySelector(".newsEn").innerHTML +=
            `<div class="news">
            <h3>${article.title}</h3>
            <img src="${article.urlToImage}" class="smallImg"/>
            <p class="newsStoryP">${article.description}</p>
            <a href=${article.url} target="_blank">Read full story</a>
            </div>`
          }
        }
      )
    }

    const recievedNewsFr = (newsdata) => {

    	// For each article object from the API, we create a new div in HTML.
        newsdata.articles.forEach((article) => {
    					//Here we create and add html elements to our html file
    					document.querySelector(".newsFr").innerHTML +=
                `<div class="news">
                <h3>${article.title}</h3>
                <img src="${article.urlToImage}" class="smallImg"/>
                <p class="newsStoryP">${article.description}</p>
                <a href=${article.url} target="_blank">Read full story</a>
                </div>`
              }
            )
          }

//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

fetch(urlFr)
  .then(responseFr => responseFr.json())
  .then(recievedNewsFr)

  console.log(recievedNewsFr)
