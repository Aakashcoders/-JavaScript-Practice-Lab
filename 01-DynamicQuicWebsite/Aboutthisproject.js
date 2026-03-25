/*
CSS conscepts:
A linear gradient is a CSS function (linear-gradient()) that creates a smooth, straight-line transition between two or more colors, filling an element's background. It flows along a defined axis (vertical, horizontal, or diagonal/angle).
Directions (Where it goes)
Keywords: to top, to bottom (default), to left, to right.
Angles: 0deg (up), 90deg (right), 180deg (down), 270deg (left).
Diagonals: to top right, to bottom left, etc.
3. Color Stops (Control & Blending)
Standard: linear-gradient(blue, green); (Even 50/50 split).
Specific Stops: linear-gradient(blue 20%, green 80%); (Blue stays solid until 20%).
Hard Stops: linear-gradient(red 50%, yellow 50%); (Creates a sharp line instead of a fade).
4. Advanced Types
Multiple Colors: Add as many as needed, separated by commas.
Transparency: Use rgba() for overlay effects.
Repeating: repeating-linear-gradient(...) for stripes or patterns.

 
js :- In JavaScript, this behavior is determined by a concept called Hoisting. While traditional function declarations are fully hoisted (moved to the top of their scope), arrow functions are treated like variables and are not.
Key Reasons
Variable Behavior: Arrow functions are typically assigned to variables using const or let. Because of this, they are subject to the Temporal Dead Zone (TDZ).
No Hoisting: Unlike function declarations, the actual function body of an arrow function is not moved to the top during compilation.
Reference Error: If you try to call an arrow function before the line where it is defined, JavaScript will throw a ReferenceError

js :-Array Destructuring is a shorthand syntax in JavaScript that allows you to "unpack" values from an array directly into distinct variables.
How it works:
Instead of accessing elements by their index (like arr[0]), you map them to variable names inside square brackets [] on the left side of the assignment.
Order Matters: The first variable always gets the first element, the second gets the second, and so on.
Skipping Elements: You can skip an item using a comma: const [first, , third] = colors;
Default Values: You can set a backup value if the array is shorter: const [a, b = 10] = [5];


js :- In JavaScript, the window object is the global object for scripts running in a browser. It represents the entire browser window or a specific tab. 
What is the window object?
Global Execution Context: It is the top-level object in the browser environment. Any variable or function you declare globally (using var) automatically becomes a property or method of the window object.
Browser Object Model (BOM): It acts as the core of the BOM, which allows JavaScript to "talk to" the browser about things outside the actual web page content (like history, screen size, or the URL). 
How does it work?
The window object is automatically created by the browser as soon as a page starts loading. Because it is the global object, you don't actually have to type window. to use its properties or methods. 
Example: window.alert("Hi") is exactly the same as just writing alert("Hi")

The primary difference is that innerHTML gets or sets the HTML markup within an element, while innerText only gets or sets the visible, human-readable text content without any HTML tags. 
Feature -	innerHTML	- innerText
Content Returned - Includes all text and HTML tags as a string. - Returns only the visible text content, ignoring HTML tags.
HTML Rendering - Parses and renders HTML tags when setting content. - Treats all content as plain text; does not interpret HTML tags.
Aware of CSS Styling - Not directly aware of style; returns content as in the source. -	Aware of styling; it will not return text that is hidden by CSS (e.g., display: none).

Here are the specific notes on the mistakes in your code and how to fix them for your Full Stack Web Development journey.
1. The querySelectorAll Mistake
Your Code:
document.querySelectorAll('#Question', '#answer_1', '#answer_2') ❌
Why it's wrong: querySelectorAll only accepts one string as an argument. It ignores everything after the first comma. This leaves your option_1, option_2, etc., as undefined.
The Fix: Put all selectors inside a single string, separated by commas (just like CSS).
2. The window[...] vs const Mistake
Your Code:
window[option_${index + 1}].innerText ❌
Why it's wrong: Variables declared with const or let are block-scoped. They are not added to the global window object. Only variables declared with var (or no keyword) become properties of window.
The Result: window['option_1'] returns undefined, which causes the "Cannot set properties of undefined" error when you try to change innerText.
The Fix: Use an Array to store your variables and access them by index.
1. forEach hamesha undefined return karta hai
Agar tum kisi variable mein forEach ka result store karne ki koshish karoge, toh usme hamesha undefined hi aayega. Iska kaam sirf loop chalana hai, kuch return karna nahi.

js:- JavaScript mein .checked property ka use Checkboxes aur Radio Buttons ki status janne ya badalne ke liye kiya jata hai. Ye ek Boolean property hai, yani iska result hamesha true ya false hota hai. 
1. Ye kya kaam karta hai?
Status Check Karna: Ye batata hai ki user ne box ko select (tick) kiya hai ya nahi.
Status Badalna: Aap code ke zariye kisi box ko check ya uncheck bhi kar sakte hain
Inputs Only: Ye sirf <input type="checkbox"> aur <input type="radio"> par hi kaam karta hai.
Boolean Value: .checked hamesha true (checked) ya false (unchecked) return karta hai.
Radio Buttons: Radio button group mein sirf wahi button true dega jo select kiya gaya hai

Default Behavior: JavaScript mein har function by default undefined return karta hai agar aapne khud koi value specify nahi ki.
Variable Storage: Variable mein function ki "kaabiliyat" (logic) nahi, balki uska "nateeja" (result) store hota hai.
Early Exit: return likhte hi function wahi ruk jata hai, uske niche ka code execute nahi hota.
Short Answer: Haan, agar aap function ka output kisi variable mein use karna chahte hain, toh aapko return karna hi padega.

The error "Uncaught TypeError: Assignment to constant variable" happens because you used the const keyword to declare your variable.
Why did this happen?
In JavaScript, a variable declared with const (short for Constant) is read-only. Once you assign a value to it (like 0), you are not allowed to change it later. When your function tried to update the value (e.g., quizquestion++), JavaScript blocked it and threw an error.
*/