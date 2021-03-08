//url for quotes
const url =
  'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=displayQuote';


const colorChanging = () => {
const colors=['#3498db', '#2ecc71', '#9b59b6', '#e74c3c', '#f1c40f'];
const randomNumber = Math.floor(Math.random()*colors.length);
const randomColor = colors[randomNumber]; 
//changing background color
document.querySelector('.bg-color').setAttribute('style',`background-color: ${randomColor}`);
}

//callback function pass to json request
const getQuote = (data) => {
    const callbackName = 'displayQuote'
    window[callbackName] = function (data) {
      delete window[callbackName]
      document.body.removeChild(script)
      callback(data)
    }
    
    const script = document.createElement('script')
    script.src =
      url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName
    document.body.appendChild(script)
  }

  //changing quote
  const displayQuote = (data) => {
      const currentQuote = data.quoteText
      const currentAuthor = data.quoteAuthor
    
      const text =  document.querySelector('#quote-text');
      text.innerHTML = currentQuote;
      const author = document.querySelector('#author');
      author.innerHTML = currentAuthor;
  }
  document.querySelector('#new-quote').addEventListener('click', ()=>{
      colorChanging();
      getQuote(displayQuote)
  })

