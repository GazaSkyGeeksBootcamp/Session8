// Tasks
// Task 1: Fix the Lost Context
// You’re building a blog editor. The editor object has a method to return the title in uppercase.

const editor = {
  title: 'my first blog',
  getUpperTitle() {
   return this.title.toUpperCase();
  }
};

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
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
// Fix the bug using either .bind() or an arrow function (your choice).

simulateInputChange(formHandler.onChange.bind(formHandler));
// Prediction before fix:
// formHandler.value will still be 'initial' because this becomes undefined or global in the callback.

// Fix Used: .bind(formHandler)

// Why:
// We used bind to explicitly tie the this context to formHandler so that the method works correctly even when passed around.


// ❓ Now log formHandler.value
console.log(formHandler.value)




//Task 3: Method Extraction Issue
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