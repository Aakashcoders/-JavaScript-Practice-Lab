# My Full Stack Web Development Journey 🚀

## CSS Concepts

### 1. Box Sizing: Border-Box
**What is it?**
It is a CSS property that controls how the total width and height of an element are calculated.

**The Problem (Default: content-box):**
By default, if you add `padding` or `border` to an element, it increases the total size of the box, which can break your layout.

**The Solution (border-box):**
When we use `box-sizing: border-box`, the `padding` and `border` are included **inside** the specified width and height. The box size remains constant.


### 2. Box Shadow
**Purpose:** Adds a shadow effect to an element.

**Syntax:** 
`box-shadow: [h-offset] [v-offset] [blur] [color];`

**My Example Breakdown:**
`0 0 10px rgba(0, 0, 0, 0.2);`

- **H-Offset (0):** No horizontal shift left to right it is call row.
- **V-Offset (0):** No vertical shift top to bottom it is call column.
- **Blur (10px):** Makes the shadow soft and spread out.
- **Color (rgba):** A light black shadow (20% opacity) for a subtle "elevated" look.

### 3. The 'step' Attribute in HTML Input
**Purpose:** Specifies the interval between legal numbers in an input field.

**Example: `step="1"`**
- It allows the user to increase or decrease the value by **1** (e.g., 1, 2, 3...).
- If the user tries to type `1.5`, the browser will show an **error** (Invalid) on form submission.

### 4. Removing Input Arrows (Spinners)

**When you use** `<input type="number">,` the browser automatically shows two small Up/Down arrows (spinners) inside the box. Sometimes these arrows look ugly or mess up your design.

**::-webkit-inner-spin-button:**
 This targets the arrows that appear inside the input box in Webkit browsers (Chrome, Safari).

**input::-webkit-outer-spin-button,**
It is a CSS Pseudo-element used to target the "Up" and "Down" arrows (spinners) that appear outside or on the edge of a number input field in Webkit browsers (Chrome, Safari, Edge)

**-webkit-appearance: none;:**
 This tells the browser: "Don't use the default system look for this element." It basically makes the arrows invisible.

### 5. CSS Appearance: None
**Purpose:** Removes the default, platform-specific styling of an element (like buttons, checkboxes, or dropdown arrows) so you can style them from scratch.

**How it works:**
- Every browser (Chrome, Safari, Firefox) has its own style for things like `<select>` arrows or `<button>` borders.
- `appearance: none;` tells the browser: "Don't use your default look; I will write my own CSS for this."

**::-webkit-slider-thumb**
- Definition: It is a CSS Pseudo-element used to style the draggable "knob" or "handle" of a range slider in Webkit browsers (Chrome, Safari, Edge).
- Why use it? By default, every browser shows a different, often ugly, gray circle for the slider. This property lets you create a custom-designed handle.


### 6. Pointer Events: Auto
**Definition:** 
The `pointer-events` property defines how an HTML element reacts to mouse events like clicks, hovers, or touch.

**Value: `auto`**
- This is the **default** behavior. 
- It allows the element to respond to all mouse/touch interactions.

**Common Use Case:**
It is mostly used to **re-enable** clicking on a child element when the parent has `pointer-events: none`.

**Jab Left aur Right dono use karein**
Agar aapne left: 0; aur right: 0; set kar diya hai, toh browser element ko dono taraf se kheenchta hai. Is case mein aapko alag se width: 100% dene ki zaroorat nahi padti kyunki element khud-ba-khud container ke left se right tak stretch ho jata hai
 - Example: `position: absolute; left: 10px; right: 10px;` — Ye element apne parent se left aur right dono taraf se 10px door rahega aur baaki poori jagah gher lega.


# Java script 
### 1 What is it?
parseInt() is a built-in JavaScript function that parses a string and returns an integer (whole number). If the input is not a string, it converts it to one first.

### forEach :-
is a built-in JavaScript Array method used to execute a specific function once for every element in an array. Think of it as an automatic loop that "visits" every item in your list one by one.

**Key Characteristics**
- Purpose: Used for iterating through an array to perform "side effects" (e.g., logging to console, updating the DOM, or saving to a database).
- Return Value: It always returns undefined. It does not create a new array.
- Immutability: It does not change the original array by itself, but the callback function can mutate the original array if programmed to do so.
- Non-Stoppable: You cannot use break or continue statements inside a forEach loop. If you need to stop early, use a for...of loop or every().
### 1. Syntax
```javascript
array.forEach((element, index, array) => {
  // Aapka code yahan aayega
});


