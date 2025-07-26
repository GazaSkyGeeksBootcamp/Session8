//-------------------------------------------------
// Task 1: Fix the Lost Context
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

// simulateInputChange((value) => formHandler.onChange(value));
// console.log(formHandler.value); //  "updated"



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
