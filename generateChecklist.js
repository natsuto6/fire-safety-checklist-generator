import inquirer from "inquirer";
import { questions } from "./fireSafetyData.js";

export async function generateChecklist() {
  let checklist = [];

  for (let i = 0; i < questions.length; i++) {
    const answer = await inquirer.prompt([
      {
        type: "confirm",
        name: "answer",
        message: questions[i],
      },
    ]);
    checklist.push({ question: questions[i], answer: answer.answer });
  }

  return checklist;
}
