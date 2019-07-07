import fetch from 'node-fetch';

enum responseStatus {
  error = 400,
  success = 200,
}

const handleResponseStatus = (status: number): void => {
  switch (status) {
    case responseStatus.success:
      console.log('請求成功！');
      break;
    case responseStatus.error:
      console.log('請求失敗！');
      break;
    default:
      throw (new Error('No have status code!'));
  }
};

interface responseContent {
  status: number,
}

const submitFetch = (responseStatusCode: string): void => {
  fetch(`http://httpbin.org/status/${responseStatusCode}`, {
    method: 'POST',
  }).then((response: responseContent) => {
    handleResponseStatus(response.status);
  });
};

// 請求成功！
submitFetch('200');

// 請求失敗！
submitFetch('400');
