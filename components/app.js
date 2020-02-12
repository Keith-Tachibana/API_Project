class App {
  constructor(weather, nasa, greeting) {
    this.weather = weather;
    this.nasa = nasa;
    this.greeting = greeting;
  }

  start() {
    this.weather.getWeather();
    this.nasa.getNasa();
    this.greeting.loadName();
  }
}
