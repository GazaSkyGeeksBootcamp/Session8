//Task 1: Fix the Lost Context
/*const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
}; 

const getTitle = editor.getUpperTitle; */

// Write code that ensures getTitle() works as expected and logs "MY FIRST BLOG"
// my answer :
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor);
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

// ❓ Now log formHandler.value 
console.log(formHandler.value)
// Your Tasks:

//1-Predict what formHandler.value will be. : initial 

//Fix the bug using either .bind() or an arrow function (your choice).
simulateInputChange(newValue=> formHandler.onChange(newValue))
console.log(formHandler.value) 


//Explain which fix you used and why. : i wrap the call in an arrow function so that it calls formHandler.onChange(newValue) , arrow functions don’t have their own 'this', so the correct object (formHandler) is used.

//Task 3: Method Extraction Issue

/* const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};*/

// ❓ Write a function logLanguageInfo(getter) that logs the language info correctly even if getLanguage is passed as an argument.


function logLanguageInfo(getter) {
  console.log(getter.call(translator))
}

logLanguageInfo(translator.getLanguage)

