const parseCsv = (csv) => {
  const lines = csv.trim().split("\n");
  const headers = lines[0].split(",");
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const row = {};
    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j];
    }
    rows.push(row);
  }

  return {
    headers: headers,
    rows: rows,
  };
};

const displayData = (table, data) => {
  // clear previous data
  table.innerHTML = "";

  // add headers
  const headerRow = document.createElement("tr");
  data.headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerText = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // add rows
  data.rows.forEach((row) => {
    const tr = document.createElement("tr");
    data.headers.forEach((header) => {
      const td = document.createElement("td");
      td.innerText = row[header];
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
};

const handleFileUpload = () => {
  const file = document.querySelector("#csv-file").files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const data = parseCsv(reader.result);
      const table = document.querySelector("#table");
      displayData(table, data);
    });
    reader.readAsText(file);
  }
};

const parseBtn = document.querySelector("#parse-btn");
parseBtn.addEventListener("click", handleFileUpload);
