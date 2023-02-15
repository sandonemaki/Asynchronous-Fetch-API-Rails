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
      // 固定値
      const post_data = {
        key1: "data1",
        key2: "data2",
        key3: 3
      };

      // idで取得
      const inputText = document.getElementById('input_text_js')
      if (inputText) {
        post_data[inputText.name] = inputText.value;
      }

      // attributeで取得
      const keywordNodes = document.querySelectorAll("input[group='keyword']");
      if (keywordNodes) {
        const keyword_data = [];
        for (let keywordNode of keywordNodes) {
          const keyword = {keyword: keywordNode.value};
          keyword_data.push(keyword);
        }
        post_data['keywords'] = keyword_data;

      }



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
