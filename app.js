function getResponse() {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", "https://api.adviceslip.com/advice");
    httpRequest.send();
    httpRequest.responseType = "json";
    httpRequest.onload = () => {
      if (httpRequest.status == 200) {
        const res = httpRequest.response;
        write(res);
        divider();
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

  function detectMob() {
    return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 400 ) );
  }

  function divider() {
    var el = document.getElementById('divider');
    var content;

    if (detectMob()) {
        content = '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
    }
    else {
        content = '<svg width="444" height="16" stxmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
    }

    el.innerHTML = content;
  }