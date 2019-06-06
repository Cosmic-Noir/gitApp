'use strict';



function getResults(searchName){
    const searchURL = `https://api.github.com/users/${searchName}/repos`;
    console.log(searchURL);
    // returns json from url get request
    fetch(searchURL)
        .then(response => response.json())
        .then(responseJson => handleDisplay(responseJson));
}

function handleForm() {
    // responsible for handling form submission
    $('#js-gitSearch').submit(event => {
        event.preventDefault();
        let searchName = $('#js-searchName').val();
        console.log(searchName);
        if (searchName === ""){
            alert('Please enter a user search name!');
        } else {
            getResults(searchName);
        }
        console.log("handleForm ran");
        

    })
}

function handleDisplay(responseJson) {
    // displays the results and unhides the results seciton
    $('.js-results').removeClass('hidden');
    for (let i=0; i < responseJson.length; i++){
        $('.js-results').append(`
        <li><h3><a href="${responseJson[i].owner.url}">${responseJson[i].name}</a></h3></li>
    `)};
    console.log("handleDisplay() ran");
}

handleForm();