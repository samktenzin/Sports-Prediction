const api_key = '63f9364bc0a6b3654e314cb11fa27985'

let sport_key = 'americanfootball_nfl'

axios.get('https://api.the-odds-api.com/v3/odds', {
    params: {
        api_key: api_key,
        sport: sport_key,
        region: 'us', 
        mkt: 'h2h' 
    }
}).then(response => {
    // odds_json['data'] contains a list of live and 
    //   upcoming events and odds for different bookmakers.
    // Events are ordered by start time (live events are first)
    console.log(
        `Successfully got ${response.data.data.length} events`,
        `Here's the first event:`
    )
    console.log(JSON.stringify(response.data.data[0]))

    // Check of usage
    console.log()
    console.log('Remaining requests',response.headers['x-requests-remaining'])
    console.log('Used requests',response.headers['x-requests-used'])

})
.catch(error => {
    console.log('Error status', error.response.status)
    console.log(error.response.data)
})




