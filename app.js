const rawData = document.getElementById('raw-data');
const parsedData = document.getElementById('parsed-data');

rawData.oninput = (e) => {
  const value = e.target.value;
  parsedData.value = value.replace(/\\r\\n/g, `\n`).replace(/"/g, '');
};