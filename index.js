import { generateChecklist } from "./generateChecklist.js";
import { saveChecklist } from "./saveChecklist.js";
import { evaluateChecklist } from "./evaluateChecklist.js";

(async () => {
  try {
    const checklist = await generateChecklist();
    await saveChecklist(checklist);
    await evaluateChecklist(checklist);
  } catch (err) {
    console.error(err);
  }
})();
