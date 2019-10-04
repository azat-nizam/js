/**
 * Investigate fetch standart (native ajax)
 * http://learn.javascript.ru/fetch
 */
console.log("loaded");

btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function() {
    data = {};

    fetch("server.json", {
            method: "POST",
            cache: "no-cache",
            data
        })
        .then(function(response) {
            /** process response status */
            if (response.ok) {
                console.log(response.status);
            }

            return response.json();
        })
        // .then( console.log )
        .then( resbody => console.log(resbody) ) // process response body
        .catch(function(err) {
            console.log(err);
        });

}, false);
