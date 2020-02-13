class News {
  constructor() {
    this.getHeadlines = this.getHeadlines.bind(this);
    this.handleGetHeadlinesSuccess = this.handleGetHeadlinesSuccess.bind(this);
    this.handleGetHeadlinesError = this.handleGetHeadlinesError.bind(this);
    this.getSports = this.getSports.bind(this);
    this.createSports = this.createSports.bind(this);
    this.handleGeSportsSuccess = this.handleGetSportsSuccess.bind(this);
    this.handleGeSportsError = this.handleGetSportsError.bind(this);
  }

  getHeadlines() {
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      data: {
        'q': 'Headlines'
      },
      dataType: 'json',
      headers: {
        'X-Api-Key': '9b42d4b9c71d43ae81704e5ca321f04d'
      },
      success: this.handleGetHeadlinesSuccess,
      error: this.handleGetHeadlinesError
    })
  }

  handleGetHeadlinesSuccess(data) {
    console.log('News', data);
    for (let i = 0; i < data.articles.length; i++) {
      let section = document.createElement('section');
      let title = document.createElement('h4');
      let source = document.createElement('h6');
      let author = document.createElement('p');
      let datePublished = document.createElement('p');
      let description = document.createElement('p');
      let spanURL = document.createElement('span');
      let url = document.createElement('a');
      let image = document.createElement('img');
      let hr = document.createElement('hr');
      title.textContent = data.articles[i].title;
      title.classList.add('font-weight-bold');
      source.textContent = `Source: ${data.articles[i].source.name}`;
      source.classList.add('font-weight-bold');
      author.textContent = `By: ${data.articles[i].author}`;
      author.classList.add('font-italic');
      let dateString = data.articles[i].publishedAt;
      let dateSlice = dateString.slice(0, 10).split('-');
      let dateFormatted = `${dateSlice[1]}/${dateSlice[2]}/${dateSlice[0]}`;
      datePublished.textContent = `Published On: ${dateFormatted}`;
      datePublished.classList.add('font-italic');
      description.textContent = data.articles[i].description;
      description.append(spanURL);
      spanURL.append(url);
      url.setAttribute('href', data.articles[i].url);
      url.textContent = 'Click Here To Continue Reading';
      image.src = data.articles[i].urlToImage;
      image.setAttribute('width', '400');
      image.classList.add('img-fluid', 'rounded');
      hr.classList.add('bg-info');
      section.append(title, source, author, datePublished, description, image, hr);
      $('#headlines').append(section);
    }
  }

  handleGetHeadlinesError(error) {
    console.log(error);
  }

  getSports() {
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v2/everything',
      data: {
        'q': 'Sports'
      },
      dataType: 'json',
      headers: {
        'X-Api-Key': '9b42d4b9c71d43ae81704e5ca321f04d'
      },
      success: this.handleGetSportsSuccess,
      error: this.handleGetSportsError
    })
  }

  handleGetSportsSuccess(data) {
    let publishedArray = [];
    for (let i = 0; i < data.articles.length; i++) {
      publishedArray.push(data.articles[i].publishedAt);
    }
    publishedArray.sort();
    console.log(publishedArray);
    for (let i = 0; i < data.articles.length; i++) {
      this.createSports(data.articles[i]);
    }
  }

  handleGetSportsError(error) {
    console.log(error);
  }

  createSports(articles) {
    let section = document.createElement('section');
    let title = document.createElement('h4');
    let source = document.createElement('h6');
    let author = document.createElement('p');
    let datePublished = document.createElement('p');
    let description = document.createElement('p');
    let spanURL = document.createElement('span');
    let url = document.createElement('a');
    let image = document.createElement('img');
    let hr = document.createElement('hr');
    title.textContent = articles.title;
    title.classList.add('font-weight-bold');
    source.textContent = `Source: ${articles.source.name}`;
    source.classList.add('font-weight-bold');
    author.textContent = `By: ${articles.author}`;
    author.classList.add('font-italic');
    let dateString = articles.publishedAt;
    let dateSlice = dateString.slice(0, 10).split('-');
    let dateFormatted = `${dateSlice[1]}/${dateSlice[2]}/${dateSlice[0]}`;
    datePublished.textContent = `Published On: ${dateFormatted}`;
    datePublished.classList.add('font-italic');
    description.textContent = articles.description;
    description.append(spanURL);
    spanURL.append(url);
    url.setAttribute('href', articles.url);
    url.textContent = 'Click Here To Continue Reading';
    image.src = articles.urlToImage;
    image.setAttribute('width', '400');
    image.classList.add('img-fluid', 'rounded');
    hr.classList.add('bg-info');
    section.append(title, source, author, datePublished, description, image, hr);
    $('#sports').append(section);
  }
}
