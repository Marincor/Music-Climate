const Key = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_LAST;

export default async function getWeather(location) {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&u=c`;


    return(
      await  fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
                "x-rapidapi-key": Key
            }
        })
        .then(response => 
        response.json()
        )

    )
}