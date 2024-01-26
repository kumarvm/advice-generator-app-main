function getResponse() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://api.adviceslip.com/advice");
    httpRequest.send();
    httpRequest.responseType = "json";
    httpRequest.onload = () => {
      if (httpRequest.status == 200) {
        const res = httpRequest.response;
        write(res);
      }
      else {
        console.log(`Error:" ${http.status}`);
      }
    }
  }

  function write(res) {
    document.getElementById("text_id").innerHTML = "ADVICE #" + res.slip.id + '\n';
    document.getElementById("text_advice").innerHTML = "\"" + res.slip.advice + "\"" + '\n';
  }