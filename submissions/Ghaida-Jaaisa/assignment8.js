// Task 1
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle()); 

// Task 2
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};
function simulateInputChange(callback) {
  callback('updated');
}
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
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};
function logLanguageInfo(getter) {
  const boundGetter = getter.bind(translator);
  console.log(boundGetter());
}
logLanguageInfo(translator.getLanguage); 
