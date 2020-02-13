class App {
  constructor(weather, nasa, greeting, newDate, clock, news) {
    this.weather = weather;
    this.nasa = nasa;
    this.greeting = greeting;
    this.newDate = newDate;
    this.clock = clock;
    this.news = news;
  }

  start() {
    this.weather.getWeather();
    this.nasa.getNasa();
    this.greeting.loadName();
    this.newDate.getDate();
    this.clock.getTime();
    this.news.getHeadlines();
    this.news.getSports();
  }
}
