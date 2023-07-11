import inquirer from "inquirer";
import { promises as fs } from "fs";
import { advice } from "./fireSafetyData.js";

export class Checklist {
  constructor() {
    this.checklist = [];
  }

  async generate() {
    const questions = Object.keys(advice);

    for (const question of questions) {
      const answer = await inquirer.prompt({
        type: "confirm",
        name: "answer",
        message: question,
      });

      this.checklist.push({ question, answer: answer.answer });
    }
  }

  async save() {
    const checklistJson = JSON.stringify(this.checklist, null, 2);
    await fs.writeFile("checklist.json", checklistJson);
    console.log("Checklist saved to checklist.json");
  }

  async evaluate() {
    const suggestions = [];
    for (const item of this.checklist) {
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
        console.log(
          `項目: ${suggestion.item}\n提案: ${suggestion.suggestion}\n`
        );
      }
    }
  }
}
