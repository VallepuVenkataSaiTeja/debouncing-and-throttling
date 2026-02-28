# debouncing-and-throttling

## Overview

This HTML file demonstrates three ways of handling user input events in JavaScript:

1. **Default** – updates every keystroke immediately.
2. **Debounce** – updates only after the user stops typing for a specified delay (1 second in this example).
3. **Throttle** – updates immediately, then limits updates to at most once per second while typing continuously.

It is a simple visual example to help understand the difference between **debounce** and **throttle**.

---

## Features

* **Default Input:** Shows the input value on every key press.
* **Debounce Input:** Shows the input value **after the user stops typing** for 1 second.
* **Throttle Input:** Shows the input value **immediately**, but **limits updates** to at most **once every 1 second**.
* **Explanation Section:** A short description of each behavior is displayed below the inputs.

---

## How It Works

### Default

```js
text.addEventListener('input', e => {
    def.innerText = e.target.value;
});
```

* Runs on every `input` event.
* Immediate updates.

### Debounce

```js
let timer;

text.addEventListener('input', e => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        debou.innerText = e.target.value;
    }, 1000);
});
```

* Waits until typing stops for 1 second before updating.
* Cancels any previous timer if the user types again.

### Throttle

```js
let throttleLock = false;

text.addEventListener('input', e => {
    if (throttleLock) return;

    thr.innerText = e.target.value;
    throttleLock = true;

    setTimeout(() => {
        throttleLock = false;
    }, 1000);
});
```

* Updates immediately.
* Prevents updates for 1 second after each execution.

---

## How to Use

1. Open the HTML file in a browser.
2. Start typing in the input box.
3. Observe the three spans updating differently:

   * **Default** → updates every keystroke.
   * **Debounce** → updates after you stop typing.
   * **Throttle** → updates immediately, then only once every second.

---

## Visual Explanation

```text
Default → updates every time
Debounce → updates after stop typing
Throttle → updates immediately, then only once every 1 second
```

---

## Learning Outcomes

* Understand the difference between **debounce** and **throttle**.
* Learn how to implement them using `setTimeout` and a simple lock/timer variable.
* Practice controlling event frequency in JavaScript for performance optimization.

