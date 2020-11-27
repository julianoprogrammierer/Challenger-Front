
const URL = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

fetch(URL).then(function(res){ 
    res.json().then(function(data){
      document.querySelector('#products').innerHTML = `
        
        
            ${JSON.stringify(data)}
        
      `
    })
  })
  .catch(function(err){
    console.error('Não foi possível achar a informação', err)
  })
  