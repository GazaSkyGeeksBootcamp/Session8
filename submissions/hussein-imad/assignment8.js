//-------------------------------------------------
// Task 1: Fix the Lost Context
// You’re building a blog editor. The editor object has a method to return the title in uppercase.
//-------------------------------------------------
const editor = {
  title: 'my first blog',
  getUpperTitle() {
    return this.title.toUpperCase();
  }
};

const getTitle = editor.getUpperTitle.bind(editor); //  fix context with .bind()

console.log("Task 1:", getTitle()); // Output: "MY FIRST BLOG"



//-------------------------------------------------
//  Task 2: Arrow or Regular?
//-------------------------------------------------
const formHandler = {
  value: 'initial',
  onChange(newValue) {
    this.value = newValue;
  }
};


simulateInputChange(formHandler.onChange.bind(formHandler)); //  fix using .bind()

console.log("Task 2:", formHandler.value); // Output: "updated"

//  fix using arrow function

simulateInputChange((value) => formHandler.onChange(value));
console.log(formHandler.value); //  "updated"



/*
 Explanation:

- In 1, we use .bind() to ensure the 'this' inside formHandler.onChange
  refers correctly to the formHandler object.

- In 2, instead of modifying the object to use an arrow function,
  we pass an arrow function directly as the callback.
  This avoids any changes to the original object structure.

  We should NOT define an arrow method like:
   onChangeArrow: (newValue) => { this.value = newValue }
   because arrow functions don't bind their own 'this', and using 'this' inside them
   when defined in an object leads to incorrect behavior.
*/


//-------------------------------------------------
//  Task 3: Method Extraction Issue
//-------------------------------------------------
const translator = {
  language: 'Arabic',
  getLanguage() {
    return `Current language: ${this.language}`;
  }
};

function logLanguageInfo(getter) {
  console.log(getter.call(translator)); //  using .call() with correct context
}

logLanguageInfo(translator.getLanguage); // Output: Current language: Arabic
