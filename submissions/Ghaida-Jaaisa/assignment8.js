// Task 1
const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());

// Task 2
const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};
const simulateInputChange = (callback) => {
  callback("updated");
};
simulateInputChange(formHandler.onChange.bind(formHandler));
// Why do we need to bind here?
// We need to bind here to ensure that 'this' inside onChange refers to formHandler,
console.log(formHandler.value); // Excpected output: 'updated'

/*
another solution 
use arrow function
simulateInputChange((value) => formHandler.onChange(value));
*/

// Task 3
const translator = {
  language: "Arabic",
  getLanguage: () => `Current language: ${translator.language}`,
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator));
  // Using call to ensure 'this' refers to translator
}

logLanguageInfo(translator.getLanguage);
