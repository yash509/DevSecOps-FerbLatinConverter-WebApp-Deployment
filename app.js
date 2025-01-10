var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
  console.log("error occured",error);
  alert("something is wrong with server! try again later")
}

 function clickHandler() {
  // outputDiv.innerText = "abcdefg" + txtInput.value //

  var inputText = txtInput.value;

  outputDiv.innerText = "Translation in progress..."


fetch(getTranslationURL(inputText))
 .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated
    outputDiv.innerText = translatedText
  })
   .catch(errorHandler)

 };


btnTranslate.addEventListener("click", clickHandler)