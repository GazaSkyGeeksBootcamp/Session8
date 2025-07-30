// ============================================
// Task 1: Fix the Lost Context
// ============================================

const editor = {
  title: "my first blog",
  getUpperTitle() {
    return this.title.toUpperCase();
  },
};

const getTitle = editor.getUpperTitle;

// Solution 1: Using .bind() to preserve the context
const getTitleFixed1 = editor.getUpperTitle.bind(editor);
console.log("Task 1 - Solution 1 (bind):", getTitleFixed1()); // "MY FIRST BLOG"

// Solution 2: Using .call() to set the context
function getTitleFixed2() {
  return editor.getUpperTitle.call(editor);
}
console.log("Task 1 - Solution 2 (call):", getTitleFixed2()); // "MY FIRST BLOG"

// Solution 3: Arrow function wrapper (preserves lexical scope)
const getTitleFixed3 = () => editor.getUpperTitle();
console.log("Task 1 - Solution 3 (arrow):", getTitleFixed3()); // "MY FIRST BLOG"

// ============================================
// Task 2: Arrow or Regular?
// ============================================

const formHandler = {
  value: "initial",
  onChange(newValue) {
    this.value = newValue;
  },
};

function simulateInputChange(callback) {
  callback("updated");
}

simulateInputChange(formHandler.onChange);
console.log("Task 2 - Before fix:", formHandler.value); //

// Reset the value
formHandler.value = "initial";

// Prediction: formHandler.value will still be "initial" because `this` is lost

// Fix 1: Using .bind() to preserve context
simulateInputChange(formHandler.onChange.bind(formHandler));
console.log("Task 2 - Fix with bind:", formHandler.value); // "updated"

// Reset for next demonstration
formHandler.value = "initial";

// Fix 2: Using arrow function wrapper
simulateInputChange((newValue) => formHandler.onChange(newValue));
console.log("Task 2 - Fix with arrow function:", formHandler.value); // "updated"

// ============================================
// Task 3: Method Extraction Issue
// ============================================

const translator = {
  language: "Arabic",
  getLanguage() {
    return `Current language: ${this.language}`;
  },
};

// Function  logs language info correctly
function logLanguageInfo(getter) {
  // Solution 1: Using .call() to set the correct context
  const result = getter.call(translator);
  console.log("Task 3 - Solution 1:", result);
}

//  solution using .bind()
function logLanguageInfoBind(getter) {
  const boundGetter = getter.bind(translator);
  const result = boundGetter();
  console.log("Task 3 - Solution 2:", result);
}

// Test the solutions
logLanguageInfo(translator.getLanguage); // "Current language: Arabic"
logLanguageInfoBind(translator.getLanguage); // "Current language: Arabic"

// ============================================
// Additional Examples for Understanding
// ============================================

console.log("\n=== Additional Examples ===");

// Example 1: Arrow function vs regular function in objects
const example1 = {
  name: "Object",
  regularMethod() {
    console.log("Regular method this:", this.name); // "Object"
  },
  arrowMethod: () => {
    console.log("Arrow method this:", this.name); // undefined (or global)
  },
};

example1.regularMethod();
example1.arrowMethod();

// Example 2: Arrow functions inherit `this` from enclosing scope
function createObject() {
  this.name = "Created Object";

  return {
    name: "Inner Object",
    regularMethod() {
      console.log("Regular in object:", this.name); // "Inner Object"
    },
    arrowMethod: () => {
      console.log("Arrow in object:", this.name); // "Created Object"
    },
  };
}

const obj = createObject.call({ name: "Outer Context" });
obj.regularMethod();
obj.arrowMethod();
