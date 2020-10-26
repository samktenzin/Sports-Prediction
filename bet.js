//     url: "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/predict?team2=chelsea&team1=everton",

let gamePrediction, userInput;
//Game predition and userinput

const $team1 = $('#team1');
const $team2 = $('#team2');
const $result = $('#result');
const $input = $('input[type="text"]');
//Populate the dom with userinput for home team and away team with each as team1 and team2

$('form').on('submit', handleGetData);

const api_key= 'e47b52639fmsh8da4044912b4134p1c3797jsnd682dda7cb43'
// Const api key to be used, set as a const

//This is to prevent the refresh of the page
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    axios.get("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/predict?team2='+ userInput'&team1='+ userInput'", {
    headers: {
        "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": api_key
    }
})
.then(response => {
    console.log(JSON.stringify(response.data.team1))
    console.log(JSON.stringify(response.data.team2))
    console.log(JSON.stringify(response.data.result))
    gamePrediction = response;
    render();
})
}

function render() {
    $team1.text(response.data.team1);
    $team2.text(response.data.team2);
    $result.text(response.data.result);
}





