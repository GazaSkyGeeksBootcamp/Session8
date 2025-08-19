// Task 1: Fix the Lost Context

const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
console.log(getTitle())

// ____________________________________________________________________________


// Task 2: Arrow or Regular?

const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};

function simulateInputChange(callback) {
  callback('updated');
}

// ❓ Now log formHandler.value
// 1. Predict what formHandler.value will be.
console.log(formHandler.value)  // output is "initial" cuz newValue is "undefined"

// 2.Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log(formHandler.value)  // now it's "updated"

// 3.Explain which fix you used and why.
// I used .bind(formHandler) to ensure that this continues to refer to the formHandler object inside the onChange method.
// That way, when the function is executed, it actually updates the value property within formHandler.
// This solution is simple and clear because it doesn't change the structure of the function—just binds it to the correct object.

// *********
// Using Arrow function :-
const formHandler2 = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};
function simulateInputChange(callback) {
  callback('updated');
}

simulateInputChange((newValue) => formHandler2.onChange(newValue));

console.log(formHandler2.value);
// 3.Explain which fix you used and why.
// Here I used an arrow function cuz it doesn’t have its own "this", so it keeps the correct context when used as a callback.

// ____________________________________________________________________________



// Task 3: Method Extraction Issue

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