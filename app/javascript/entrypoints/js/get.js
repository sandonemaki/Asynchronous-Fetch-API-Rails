document.addEventListener("DOMContentLoaded", function(event) {


  const buttonGet = document.getElementById('button_get_js');
  if (buttonGet) {
    buttonGet.addEventListener('click', async () => {
      try {
        let response = await fetch('/get_post', {
          method: 'GET'
        });
        const response_message = response.status + ':' + response.statusText
        console.log(response_message);
        window.alert('response_message=' + response_message);
      } catch (error) {
        console.error(error);
      }
    });
  }



  const buttonPost = document.getElementById('button_post_js');
  if (buttonPost) {
    buttonPost.addEventListener('click', async () => {
      // 固定値
      const postData = {
        key1: "data1",
        key2: "data2",
        key3: 3
      };

      // idで取得
      const inputText = document.getElementById('input_text_js')
      if (inputText) {
        postData[inputText.name] = inputText.value;
      }

      // attributeで取得
      const keywordNodes = document.querySelectorAll("input[group='keyword']");
      if (keywordNodes) {
        const keywordData = [];
        for (let keywordNode of keywordNodes) {
          const keyword = {keyword: keywordNode.value};
          keywordData.push(keyword);
        }
        postData['keywords'] = keywordData;

      }


      try {
        response = await fetch('/get_post', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': getCsrfToken()
          },
          body: JSON.stringify(post_data),
        })
        const response_message = response.status + ':' + response.statusText
        console.log(response_message);
        window.alert('response_message=' + response_message);
      } catch (error) {
        console.log(error);
      }
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
