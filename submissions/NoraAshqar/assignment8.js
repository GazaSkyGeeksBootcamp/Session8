//Task 1: Fix the Lost Context
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG". Do not modify the editor object.

const getTitle =editor.getUpperTitle.bind(editor);
 console.log(getTitle());

 //Task 2: Arrow or Regular?
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

// ❓ Now log formHandler.value Your Tasks:
console.log(formHandler.value);
//Predict what formHandler.value will be.

// formHandler.value will remain "initial"

//Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));

//Explain which fix you used and why.

// i used .bind() to make (this) points to formHandler cuz  when (on change)passed it lost where it should point (formHandler)
simulateInputChange((newVal) => formHandler.onChange(newVal));
// I used  arrow  function because it use (this) from the outer scope (inside onChange) because it does not have it own scope

//Task 3: Method Extraction Issue

const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};
// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.
function logLanguageInfo(getter){
console.log(getter.call(translator));
}
logLanguageInfo(translator.getLanguage);