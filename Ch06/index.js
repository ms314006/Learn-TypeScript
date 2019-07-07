const newEnum = (descriptions) => {
  const result = {};
  Object.keys(descriptions).forEach((description) => {
    result[result[description] = descriptions[description]] = description;
  });
  return Object.freeze(result);
};

const responseStatus = newEnum({
  error: 400,
  success: 200,
});

responseStatus['200'] = 'aaaaaaaa';

// 仍然是 { '200': 'success', '400': 'error', error: 400, success: 200 }
console.log(responseStatus);
