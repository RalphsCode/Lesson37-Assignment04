// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

/** 
 * There is old code used here which is preventing the code
 * from executing out of the box. 
 * I had to research it, and fix it to get the tests to work:
 * 
 * @testing-library/react v16.1.0, which is quite old 
 * @testing-library/jest-dom v6.6.3 is the latest version
 */

// Old disfunctional code:
// import '@testing-library/jest-dom/extend-expect';

// New functionning code
import '@testing-library/jest-dom';
