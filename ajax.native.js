/**
 * Investigate fetch standart (native ajax)
 * [!] has error
 */
console.log("loaded");

btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function() {

    fetch("server.json")
        .then(function(response) {  
            if (response.status !== 200) {  
                console.log('Looks like there was a problem. Status Code: ' +  
                response.status);  
                return;  
            }

            // Examine the text in the response  
            response.then(function(data) {
            console.log(data);
            });  
        })  
        .catch(function(err) {  
            console.log('Fetch Error :-S', err);  
        });

}, false);
