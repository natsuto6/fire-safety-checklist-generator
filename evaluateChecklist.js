import { advice } from "./fireSafetyData.js";

export async function evaluateChecklist(checklist) {
  const suggestions = [];
  for (const item of checklist) {
    if (!item.answer) {
      suggestions.push({
        item: item.question,
        suggestion: advice[item.question],
      });
    }
  }

  if (suggestions.length > 0) {
    console.log("以下の項目について改善が必要です：\n");
    for (const suggestion of suggestions) {
      console.log(`項目: ${suggestion.item}\n提案: ${suggestion.suggestion}\n`);
    }
  }
}
