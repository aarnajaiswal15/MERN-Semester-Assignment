
# Assignment 45: localStorage vs sessionStorage

## Introduction

localStorage and sessionStorage are browser storage methods
used to store data on a user's device.

Both store data in key-value pairs and allow websites to
access stored information using JavaScript.

## Comparison

| Feature | localStorage | sessionStorage |
|---|---|---|
| Storage duration | Data remains until manually deleted | Data remains until the browser tab or window session ends |
| Data availability | Available across tabs of the same origin | Available only in the same tab |
| Storage capacity | Usually around 5 MB | Usually around 5 MB |
| Data type | Stores strings | Stores strings |
| Browser refresh | Data remains | Data remains |
| Browser restart | Data remains | Data is cleared when the session ends |

## 1. localStorage

localStorage stores data in the browser without an
automatic expiration time.

Example:

localStorage.setItem("username", "Aarna");

To retrieve data:

localStorage.getItem("username");

To remove data:

localStorage.removeItem("username");

## 2. sessionStorage

sessionStorage stores data for the current browsing session
in a particular tab.

Example:

sessionStorage.setItem("username", "Aarna");

To retrieve data:

sessionStorage.getItem("username");

To remove data:

sessionStorage.removeItem("username");

## Advantages

### localStorage
- Data remains available after refreshing the page.
- Data can be accessed across tabs of the same origin.
- Useful for saving user preferences.

### sessionStorage
- Data remains available after refreshing the page.
- Data is isolated to a particular tab.
- Useful for temporary information.

## Conclusion

localStorage is useful when information needs to remain
saved even after closing and reopening the browser.

sessionStorage is useful when information is needed only
during a particular tab's browsing session.
