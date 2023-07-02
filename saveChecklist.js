import { promises as fs } from "fs";

export async function saveChecklist(checklist) {
  const checklistJson = JSON.stringify(checklist, null, 2);
  await fs.writeFile("checklist.json", checklistJson);
  console.log("Checklist saved to checklist.json");
}
