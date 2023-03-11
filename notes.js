// Recursion

// In simple terms, recursion is a function that calls itself.

// Below is a basic example of recursion

function a() {
    console.log('hello');
    b();
    console.log('coding');
}

function b() {
    console.log('world');
    c();
    console.log('love');
}

function c() {
    console.log('i');
}

a();

// In this instance, a() is the first function to run, but the last to finish being called because it waits for b() to finish which in turn waits for c() to finish.

// 1. Function that are written using loops can always be written recursively, and vice versa.
// 	- Recursion can sometimes be more performant, and easier to implement with less lines

// Example of iteration vs recursion

// Iteration via while loop
function count1() {
    let n = 1;

    while (n <= 3) {
        console.log(n);
        n += 1;
    }
}

// Recursion
function count2(n = 1) {
    if (n > 3) return;

    console.log(n);
    count2(n + 1);
}

// Although recursion will work in the above case, it is not ideal because it really is not very intuitive to count with this approach.
// it might be easier to use a while loop for counting in this way.

// 2. Base Case

// For recursion to work, you always need a base case, which is a conditional or degenerate case sthat will eventually return the function call, and pop each function call off of the call stack.
// This is essential because without a base case your function will run forever and cause a Stack Overflow.

// You can have an explicit base case and hidden base case.
// Explicit cases might be easier to read and are usually in the form of conditionals like the above example.

// 3. Returning Data Recursively

// Example

function sum(nums) {
    // base case
    if (nums.length === 0) return 0;

    // normal case
    return nums[0] + sum(nums.slice(1));
}

sum([1, 2, 3, 4, 5]);

// Although you can write this above function recursively, it is not very intuitive and writing this iteratevely might have been better.

// Also the time and space complexity of this function is O(n) because every time you use slice its an O(n) runtime

// To improve performance, you could instead keep track of the index for each value like done below to avoid using slice:

function sum2(nums, i = 0) {
    if (i === nums.length) return 0;

    return nums[i] + sum2(nums, i + 1);
}

// 4. Double Iterative Recursive Function Example

// This is a great opportunity to use recursion
// For every item in the array, it checks if the current item is an array, if it is not (normal case) it doubles and prints that number, if the current item is an array, then it recursively calls the function again (base case), loops through the subarray and repeats the process again until it reaches an item that is not an array and only a number.

function doubler(nums) {
    for (let n of nums) {
        // base case
        if (Array.isArray(n)) {
            doubler(n);
        } else {
            // normal case
            console.log(n * 2);
        }
    }
}

doubler([1, 2, 3, [4, 5, [6, 7]]]);

// 5. Commong Recursion Use Cases

// 	- When navigating file systems and traversing nested directories
// 	- Working with Fractals
// 	- Parsing strings of mathematic equations
// 	- Any type of nested data is a good indication to use recursion, like traversing an HTML file
