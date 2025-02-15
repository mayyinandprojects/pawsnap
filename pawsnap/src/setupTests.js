// pawsnap\src\setupTests.js
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from "util";

// Only import `node-fetch` if running in Jest (Node.js)
if (typeof global !== "undefined") {
  const fetch = require("node-fetch");
  global.fetch = fetch;
}

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

