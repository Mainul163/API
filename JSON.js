add json
const user={ id:1, name:"mainul"};
const userJSON=JSON.stringify(user);
console.log(userJSON);

// json to javascript

const userJavaScript=JSON.parse(userJSON);
console.log(userJavaScript);

