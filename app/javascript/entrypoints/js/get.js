document.addEventListener("DOMContentLoaded", function(event) {
  const buttonGet = document.getElementById('button_get_js');
  if (buttonGet) {
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
  }
  const buttonPost = document.getElementById('button_post_js');
  if (buttonPost) {
    buttonPost.addEventListener('click', function(){
      const post_data = {
        key1: "data1",
        key2: "data2",
        key3: 3
      };

      fetch('/get_post', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCsrfToken()
        },
        body: JSON.stringify(post_data),
      })
        .then(function(response){
          const response_message = response.status + ':' + response.statusText
          console.log(response_message);
          window.alert('response_message=' + response_message);
        });
    });
  }
  const getCsrfToken = () => {
    const metas = document.getElementsByTagName('meta');
    console.log(metas);
    for (let meta of metas) {
      if (meta.getAttribute('name') === 'csrf-token') {
        console.log('csrf-token:', meta.getAttribute('content'));
        return meta.getAttribute('content');
      }
    }
    return '';
  }
});


