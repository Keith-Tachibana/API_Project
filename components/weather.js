class Weather {
  constructor(formElement) {
    this.formElement = formElement;
    this.loadWeather = this.loadWeather.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleGetWeatherSuccess = this.handleGetWeatherSuccess.bind(this);
    this.handleGetWeatherError = this.handleGetWeatherError.bind(this);
    this.handleSubmitWeather = this.handleSubmitWeather.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmitWeather);
  }
  getWeather(input) {
    $.ajax({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?',
      data: {
        'q': `${input}`,
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
    let spanWeather5 = document.createElement('span');
    let spanWeather6 = document.createElement('span');
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
    let sunrise = new Date(data.sys.sunrise * 1000);
    let sunriseHours = sunrise.getHours();
    let sunriseMinutes = '0' + sunrise.getMinutes();
    let sunriseSeconds = '0' + sunrise.getSeconds();
    let sunriseTime = `${sunriseHours}:${sunriseMinutes.substr(-2)}:${sunriseSeconds.substr(-2)} AM`
    let sunset = new Date(data.sys.sunset * 1000);
    let sunsetHours = sunset.getHours();
    let sunsetMinutes = '0' + sunset.getMinutes();
    let sunsetSeconds = '0' + sunset.getSeconds();
    let sunsetTime = `${sunsetHours - 12}:${sunsetMinutes.substr(-2)}:${sunsetSeconds.substr(-2)} PM`
    spanWeather1.innerHTML = `City: ${data.name}`;
    spanWeather2.innerHTML = `Temp: ${tempF}` + '&deg;F,' + ` Min: ${minTempF}` + '&deg;F,' + ` Max: ${maxTempF}` + '&deg;F';
    spanWeather3.innerHTML = `Conditions: ${data.weather[0].main} (${data.weather[0].description})`;
    spanWeather4.innerHTML = `Wind: ${windMPH} mph`;
    spanWeather5.innerHTML = `Sunrise: ${sunriseTime}`;
    spanWeather6.innerHTML = `Sunset: ${sunsetTime}`;
    $('#weather1, #weather2, #weather3, #weather4, #weather5, #weather6, #weatherIMG').removeClass('d-none');
    $('#weather1').append(spanWeather1);
    $('#weather2').append(spanWeather2);
    $('#weather3').append(spanWeather3);
    $('#weather4').append(spanWeather4);
    $('#weather5').append(spanWeather5);
    $('#weather6').append(spanWeather6);
    $('#weatherIMG').append(weatherIMG);
  }
  handleGetWeatherError(error) {
    console.log(error);
  }

  handleSubmitWeather(event) {
    event.preventDefault();
    $('#weather1, #weather2, #weather3, #weather4, #weather5, #weather6, #weatherIMG').text('');
    let formData = new FormData(event.target);
    let city = formData.get('weather');
    this.getWeather(city);
    localStorage.setItem('weather', city);
    event.target.reset();
  }

  loadWeather() {
    const currentCity = localStorage.getItem('weather');
    if (currentCity === undefined) {
      return;
    } else {
      this.getWeather(currentCity);
    }
  }
}
