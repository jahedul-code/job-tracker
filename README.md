1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   answer: getElementById() → Returns a single element by its ID.
           getElementsByClassName() → Returns all elements with the same class (HTMLCollection).
           querySelector() → Returns the first element that matches a CSS selector.
           querySelectorAll() → Returns all elements that match a CSS selector (NodeList).

3. How do you create and insert a new element into the DOM?

   answer:Create an element using document.createElement().
          Add content using innerText or innerHTML.
          Insert it into the DOM using appendChild() or append().

5. What is Event Bubbling? And how does it work?

   answer:Event Bubbling is a process where an event starts from the target element and then moves upward to its parent, grandparent, and so on up to the root.

7. What is Event Delegation in JavaScript? Why is it useful?

   answer:Event Delegation is attaching an event listener to a parent element to handle events for its child elements.
          It is useful because It improves performance.It works for dynamically added elements.

9. What is the difference between preventDefault() and stopPropagation() methods?

    answer:preventDefault() → Stops the default behavior of an element (e.g., form submission, link navigation).
           stopPropagation() → Stops the event from bubbling up to parent elements.
