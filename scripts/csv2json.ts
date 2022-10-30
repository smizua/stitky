import { readFile } from 'node:fs/promises';

const main = async () => {
  const data = await readFile(`./src/lib/produkty.csv`, 'utf-8');
  const rows = data.trim().split('\n');
  const [headerText, ...dataTexts] = rows;

  const jsonData: any[] = [];

  for (const dataText of dataTexts) {
    const [
      name,
      latinName,
      druhObsahu,
      velikostStitku,
      textSuvenyr,
      textObsah,
      textVyrobeno,
      textPocetStitku
    ] = dataText.split(/;/g);
    const row = {
      name,
      latinName,
      druhObsahu,
      velikostStitku,
      textSuvenyr,
      textObsah,
      textVyrobeno,
      pocetStitku: parseInt(textPocetStitku, 10)
    };
    jsonData.push(row);
  }

  console.log(JSON.stringify(jsonData, null, 2));
};

main();
