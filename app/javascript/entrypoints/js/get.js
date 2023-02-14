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

  const buttonPost = document.getElementById('button_post_js');
  buttonPost.addEventListener('click', function(){
    fetch('/get_post', {
      method: 'POST'
    })
      .then(function(response){
        const response_message = response.status + ':' + response.statusText
        console.log(response_message);
        window.alert('response_message=' + response_message);
      });
  });
});


