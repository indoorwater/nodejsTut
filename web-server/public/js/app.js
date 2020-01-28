console.log('client side java script is loaded')



const weatherForm = document.querySelector('form')
const Search = document.querySelector('.searchAddress')
const displayData = document.querySelector('#displayData')


weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    $("#displayData").html("<P></P>");
    $("#displayData").append('<p id="remove">Loading Data...</p>');
    // call API call and return the data
    fetch('http://localhost:3000/weather?address='+ Search.value).then((response) => {
        response.json().then((data) =>{
            
            var html = "<p>" + data[0].name + "</p>"
            for(var i = 1, len = data.length; i < len; i++){
                var row = data[i]
                html += "<p>" + row.forecast + "</p>"
            }
           
            //displayData.innerHTML(html)
            $("#displayData").append(html);
            $("#remove").html("");
            
        })
    })

})


