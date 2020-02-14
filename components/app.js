class App {
  constructor(weather, nasa, greeting, newDate, clock, news, sports, stocks) {
    this.weather = weather;
    this.nasa = nasa;
    this.greeting = greeting;
    this.newDate = newDate;
    this.clock = clock;
    this.news = news;
    this.sports = sports;
    this.stocks = stocks;
  }

  start() {
    this.weather.loadWeather();
    this.nasa.getNasa();
    this.greeting.loadName();
    this.newDate.getDate();
    this.clock.getTime();
    this.news.getHeadlines();
    this.sports.getSports();
    this.stocks.getStocks();
  }
}
