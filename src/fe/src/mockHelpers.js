import randomWord from "random-words";

export default function generateRandomWord() {
  const lowercaseWord = randomWord();
  return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
}

export function generateRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function generateRandomNumber(min, max) {
  return Math.round(Math.random() * max + min);
}

export function generateMockCampaigns(numberToGenerate) {
  return [...Array(numberToGenerate)].map(() => ({
    title: `${generateRandomWord()} Campaign`,
    subTitle: `Last Update: ${generateRandomDate(
      new Date("2017-01-01"),
      new Date("2017-09-09")
    ).toLocaleString()}`,
    personaCount: generateRandomNumber(1, 10),
    personalizationCount: generateRandomNumber(1, 20)
  }));
}
