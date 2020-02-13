class Weather {
  constructor() {
    this.getWeather = this.getWeather.bind(this);
    this.handleGetWeatherSuccess = this.handleGetWeatherSuccess.bind(this);
    this.handleGetWeatherError = this.handleGetWeatherError.bind(this);
  }
  getWeather() {
    $.ajax({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?',
      data: {
        'q': 'Irvine',
        'appid': '6c5f85cd849157317aabc35a4f47b9d5'
      },
      success: this.handleGetWeatherSuccess,
      error: this.handleGetWeatherError
    })
  }
  handleGetWeatherSuccess(data) {
    console.log('Weather:', data);
    let spanWeather1 = document.createElement('span');
    let spanWeather2 = document.createElement('span');
    let spanWeather3 = document.createElement('span');
    let spanWeather4 = document.createElement('span');
    let weatherIMG = document.createElement('img');
    weatherIMG.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let tempK = data.main.temp;
    let tempF = ((tempK - 273.15) * (9/5) + 32).toFixed(1);
    let minTempK = data.main.temp_min;
    let minTempF = ((minTempK - 273.15) * (9 / 5) + 32).toFixed(1);
    let maxTempK = data.main.temp_max;
    let maxTempF = ((maxTempK - 273.15) * (9 / 5) + 32).toFixed(1);
    let windMS = data.wind.speed;
    let windMPH = (windMS*2.237).toFixed(2);
    spanWeather1.innerHTML = `City: ${data.name}`;
    spanWeather2.innerHTML = `Temp: ${tempF}` + '&deg;F,' + ` Min: ${minTempF}` + '&deg;F,' + ` Max: ${maxTempF}` + '&deg;F';
    spanWeather3.innerHTML = `Conditions: ${data.weather[0].main} (${data.weather[0].description})`;
    spanWeather4.innerHTML = `Wind: ${windMPH} mph`;
    $('#weather1').append(spanWeather1);
    $('#weather2').append(spanWeather2);
    $('#weather3').append(spanWeather3);
    $('#weather4').append(spanWeather4);
    $('#weatherIMG').append(weatherIMG);
  }
  handleGetWeatherError(error) {
    console.log(error);
  }

}
