class Nasa {
  constructor() {
    this.handleGetNasaSuccess = this.handleGetNasaSuccess.bind(this);
    this.handleGetNasaError = this.handleGetNasaError.bind(this);
  }
  getNasa() {
    $.ajax({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod',
      data: {
        'api_key': 'mRLmEh3p777qYpyPxKlyy3wyNhUKMgEJcwQhRJzP'
      },
      success: this.handleGetNasaSuccess,
      error: this.handleGetNasaError
    })
  }

  handleGetNasaSuccess(data) {
    console.log('NASA:', data);
    document.querySelector('#nasa').style.cssText = `background-image:url(${data.url});background-size:contain;background-repeat:no-repeat;height:400px;float:right;`;

  }

  handleGetNasaError(error) {
    console.log(error);
  }
}
