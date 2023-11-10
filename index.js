import inquirer from "inquirer";

const escalasMaioresNaturais = {
  C: ["C", "D", "E", "F", "G", "A", "B", "C"],
  D: ["D", "E", "F♯", "G", "A", "B", "C♯", "D"],
  E: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E"],
  F: ["F", "G", "A", "B♭", "C", "D", "E", "F"],
  G: ["G", "A", "B", "C", "D", "E", "F♯", "G"],
  A: ["A", "B", "C♯", "D", "E", "F♯", "G♯", "A"],
  B: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯", "B"],
};

const escalasMenoresNaturais = {
  C: ["C", "D", "E♭", "F", "G", "A♭", "B♭", "C"],
  D: ["D", "E", "F", "G", "A", "B♭", "C", "D"],
  E: ["E", "F♯", "G", "A", "B", "C", "D", "E"],
  F: ["F", "G", "A♭", "B♭", "C", "D♭", "E♭", "F"],
  G: ["G", "A", "B♭", "C", "D", "E♭", "F", "G"],
  A: ["A", "B", "C", "D", "E", "F", "G", "A"],
  B: ["B", "C♯", "D", "E", "F♯", "G", "A", "B"],
};

const questions = [
  {
    type: "list",
    name: "tipo",
    message: "Escala maior ou menor?",
    choices: ["Maior", "Menor"],
  },
  {
    type: "list",
    name: "nota",
    message: "Qual nota?",
    choices: ["C", "D", "E", "F", "G", "A", "B"],
  },
];
const promptQuestion = () => {
  inquirer.prompt(questions).then((answers) => {
    if (answers.tipo === "Maior") {
      console.log(escalasMaioresNaturais[answers.nota]);
    } else {
      console.log(escalasMenoresNaturais[answers.nota]);
    }
    promptQuestion();
  });
}

promptQuestion();
