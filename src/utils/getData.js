export default function getData(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('GET', url);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr.response)
        let json = JSON.parse(xhr.response);
        resolve(json);
      } else {
        console.log(xhr.statusText)
        reject(xhr.statusText);
      }
    }

    xhr.onerror = function(error) {
      reject(error)
    }

    xhr.send();
  });
}
