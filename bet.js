const api_key= 'e47b52639fmsh8da4044912b4134p1c3797jsnd682dda7cb43'

document.addEventListener('submit', function (event) {
    event.preventDefault();

    let team1 = document.querySelector('#team2').value;
    let team2 = document.querySelector('#team1').value;

    axios.get("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/predict", {
    headers: {
        "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": api_key
    },
    params: {
        team1: team1,
        team2: team2
    }
    })
    .then(response => {
        console.log(team1)
        console.log(team2)
        console.log(JSON.stringify(response.data.team1))
        console.log(JSON.stringify(response.data.team2))
        console.log(JSON.stringify(response.data.result))
    })
});





