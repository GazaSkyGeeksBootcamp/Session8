// Task 1: Fix the Lost Context
// You’re building a blog editor. The editor object has a method to return the title in uppercase.
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};
const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle());
// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
// Your Task: Fix the code so that getTitle() returns "MY FIRST BLOG". Do not modify the editor object.

// ************************************************************************************************************************************
// Task 2: Arrow or Regular?
// You have a form handler object that tracks user input:
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
console.log(formHandler.value);

// Your Tasks:

// Predict what formHandler.value will be.
// The predicted value is 'initial', because simulateInputChange calls onChange and tries to set the new value to 'updated', 
// but it does so without specifying which object this should refer to.
// As a result, this inside onChange does not refer to formHandler, so the original value does not change.

// Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value);

// Explain which fix you used and why.
// "I used .bind() and passed formHandler to it. This is because using .bind(formHandler) forces the this inside the onChange method to always refer to the formHandler object, 
// which ensures that the value is updated correctly. 

// ************************************************************************************************************************************

// Task 3: Method Extraction Issue
// You’re developing a translation tool. The following object works well, but fails when methods are passed around.

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
