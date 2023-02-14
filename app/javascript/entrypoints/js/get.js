document.addEventListener("DOMContentLoaded", function(event) {
  const buttonGet = document.getElementById('button_get_js');
  buttonGet.addEventListener('click', function(){
    fetch('/get_post', {
      method: 'GET'
    })
      .then(function(response){
        const response_message = response.status + ':' + response.statusText
        console.log(response_message);
        window.alert('response_message=' + response_message);
      });
  });
});
// Note: 後でasync/awaitで書きかえてみる
