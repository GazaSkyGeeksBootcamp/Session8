//Task1
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

//Task2
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange(formHandler.onChange); 

// ❓ Now log formHandler.value
//Predict what formHandler.value will be.
console.log(formHandler.value); //'initial' because 'this' is lost (undefined) when the method is passed as a callback

//Fix the bug using either .bind() or an arrow function (your choice).
//Explain which fix you used and why.

//Solution1: by bind()
//by using using .bind() will show that 'this' is tied to formHandler
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value);

//Solution2: by using arrow function 
simulateInputChange((newValue) => formHandler.onChange(newValue));
console.log(formHandler.value);

//Task3
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter) {
    console.log(getter.call(translator));
}

logLanguageInfo(translator.getLanguage);
