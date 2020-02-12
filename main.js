const weather = new Weather();
const nasa = new Nasa();
const greeting = new Greeting();
const app = new App(weather, nasa, greeting);

app.start();
