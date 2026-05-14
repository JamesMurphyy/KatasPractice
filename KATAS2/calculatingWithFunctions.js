/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

// Number functions
const zero = (op) => (op ? op(0) : 0);
const one = (op) => (op ? op(1) : 1);
const two = (op) => (op ? op(2) : 2);
const three = (op) => (op ? op(3) : 3);
const four = (op) => (op ? op(4) : 4);
const five = (op) => (op ? op(5) : 5);
const six = (op) => (op ? op(6) : 6);
const seven = (op) => (op ? op(7) : 7);
const eight = (op) => (op ? op(8) : 8);
const nine = (op) => (op ? op(9) : 9);

// Operation functions
const plus = (right) => (left) => left + right;
const minus = (right) => (left) => left - right;
const times = (right) => (left) => left * right;
const dividedBy = (right) => (left) => Math.floor(left / right);

/*
When you call seven(times(five())):five() is called first and returns 5.times(5) is called, returning a function: (left) => left * 5.seven(...) is called with that function as the op argument.Inside seven, op(7) is executed, which is 7 * 5, resulting in 35.Example Usageseven(times(five())); // 35four(plus(nine())); // 13eight(minus(three())); // 5six(dividedBy(two())); // 3


The value of left does not actually get saved in a variable for later use like right does. Instead, it is passed directly into the function and used immediately.Here is exactly how it happens step-by-step using the traditional syntax.The Lifetime of the left ValueLet's look at what happens when you run seven(minus(five())):javascriptfunction minus(right) {       // 1. 'right' is born here and SAVED (equals 5)
    return function(left) {   // 2. This inner function is returned
        return left - right;  
    };
}
Use code with caution.Step 1: right gets saved, left does not exist yetWhen minus(5) runs, it creates a closure. The computer saves right = 5 in memory and returns the inner function.At this exact moment, left has no value and does not exist yet. The inner function is just waiting.Step 2: The inner function is handed to sevenThe code now simplifies to:javascriptseven( function(left) { return left - 5; } );
Use code with caution.Step 3: left receives its value and is used instantlyNow look inside the seven function:javascriptfunction seven(op) { 
    // 'op' is the function: function(left) { return left - 5; }
    
    return op(7); 
}
Use code with caution.When seven executes op(7), it is directly calling that inner function and passing 7 into the parentheses.The 7 fills the left slot instantly.The computer immediately executes 7 - 5.The result 2 is returned right away.The left variable is immediately erased from memory because the function finished running.The Big Difference Between right and leftright gets saved because the inner function outlives the outer minus function. The inner function holds onto right = 5 like a backpack it carries around.left is just a temporary bridge. It only exists for the split second that op(7) is actively running.
*/
