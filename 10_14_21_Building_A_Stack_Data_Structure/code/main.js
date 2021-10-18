function Stack() {
  let stack = [];
  return {
    push: (newItem) => {
      //using spread
      // stack = [...stack, newItem];

      //The old ES5 Way
      let newStack = [];

      //loop through stack and if at end, add new item;
      for(let i = 0; i <= stack.length; i++) {
        if(i === stack.length) {
          newStack[i] = newItem;
          stack = newStack;
          break;
        }
        newStack[i] = stack[i];
      }
    },
    pop: () => {
      let newStack = [];

      //loop through everything except last item
      for(let i=0; i < stack.length - 1; i++) {
        newStack[i] = stack[i];
      }


      stack = newStack;
    },
    print: (message = "") => {
      console.log(`Stack Value ${message}:`, stack);
    }
  }
}

const stack = Stack();

stack.print();
stack.push("ryan");
stack.print();
stack.push("Cahela")
stack.print();
stack.pop();
stack.print("after pop");

console.log(stack);