#!/usr/bin/env node

import { Checklist } from "./Checklist.js";

(async () => {
  try {
    const checklist = new Checklist();
    await checklist.generate();
    await checklist.save();
    await checklist.evaluate();
  } catch (err) {
    console.error(err);
  }
})();
