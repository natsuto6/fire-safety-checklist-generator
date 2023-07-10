import inquirer from "inquirer";
import { advice } from "./fireSafetyData.js";

export async function generateChecklist() {
  const questions = Object.keys(advice);
  const checklist = [];

  for (const question of questions) {
    const answer = await inquirer.prompt({
      type: "confirm",
      name: "answer",
      message: question,
    });

    checklist.push({ question, answer: answer.answer });
  }

  return checklist;
}
