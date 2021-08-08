var getMyRepos = function() {
    var apiUrl = "https://api.github.com/users/mikhaelhamoy/repos";

    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                console.log(data);
                });
            } else {
                alert('Error: GitHub User Not Found');
            }
        })
        .catch(function(error) {
            // Notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect to GitHub");
    });
};

var displayMyRepos = function(repos) {

};