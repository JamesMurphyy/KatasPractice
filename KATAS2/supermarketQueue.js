/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool


*/

function queueTime(customers, n) {
  // Return 0 if there are no customers in the queue
  if (customers.length === 0) return 0;

  // Create an array of size n filled with 0s to represent the tills
  const tills = new Array(n).fill(0);

  // Process each customer in the exact order they arrive
  for (const time of customers) {
    // Find the till that will become free earliest
    let minTillIndex = 0;
    for (let i = 1; i < tills.length; i++) {
      if (tills[i] < tills[minTillIndex]) {
        minTillIndex = i;
      }
    }

    // Assign the customer to that till
    tills[minTillIndex] += time;
  }

  // The total time is the maximum value among all tills
  return Math.max(...tills);
}

function queueTime(customers, n) {
  /**
   * ------------------ EXAMPLE:
   * if customers --> [2, 3, 10]
   * and if n --> 2
   */

  let queueArr = Array(n).fill(0);
  // EXAMPLE: queueArr --> [0, 0];

  customers.forEach((customer) => {
    queueArr[0] += customer;
    /**
     * ------------------ EXAMPLE:
     * 1 iteration queueArr --> [2, 0];
     * 2 iteration queueArr --> [3, 2];
     * 3 iteration queueArr --> [12, 3];
     */

    queueArr.sort((a, b) => a - b);
    /**
     * ------------------ EXAMPLE:
     * 1 iteration queueArr --> [0, 2];
     * 2 iteration queueArr --> [2, 3];
     * 3 iteration queueArr --> [3, 12];
     */
  });

  return queueArr[queueArr.length - 1]; // EXAMPLE: last num in queueArr --> 12
}
``;
