document.addEventListener('submit', function (event) {
    event.preventDefault();

    let team1 = document.querySelector('#team2').value;
    let team2 = document.querySelector('#team1').value;

    const api_key= 'e47b52639fmsh8da4044912b4134p1c3797jsnd682dda7cb43'
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
        localStorage.setItem('team1', response.data.team1);
        localStorage.setItem('team2', response.data.team2);
        localStorage.setItem('result', response.data.result);

        window.location = './result.html';
    })
});

// Get data
var data1 = localStorage.getItem('team1');
var data2 = localStorage.getItem('team2');
var data3 = localStorage.getItem('result')

//Append data to dom
console.log(data1);
if (data1) {
    document.getElementById('team1').innerText = data1
    document.getElementById('team2').innerText = data2
    document.getElementById('result').innerText = data3
}
