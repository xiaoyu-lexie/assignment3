const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const questionNumber = Array(3)
  .fill()
  .map((cur, index) => index + 1);
// questionNumber =  [ 1, 2, 3 ]

questionNumber.forEach((each) => {
  // create each question div
  const questionDiv = document.createElement("div");
  questionDiv.classList.add(`question${each}`);
  container.appendChild(questionDiv);

  // create header
  const header = document.createElement("h2");
  header.textContent = `Question${each}`;
  questionDiv.appendChild(header);
});

/*************Question 1 ************************/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// select question1 div
const q1 = document.querySelector(".question1");

// create a table
const table = document.createElement("table");
q1.appendChild(table);

const { tableHeader, tableContent } = tableInfo;

//add table header
const headerRow = document.createElement("tr");
tableHeader.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

//add table content
tableContent.forEach((content) => {
  const row = document.createElement("tr");
  tableHeader.forEach((header) => {
    const ele = document.createElement("td");
    ele.textContent = content[header];
    row.appendChild(ele);
  });
  table.appendChild(row);
});

/*************Question 2 ************************/
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// select question1 div
const q2 = document.querySelector(".question2");

const createList = (listCategory, listTitle) => {
  const listDiv = document.createElement("div");
  q2.appendChild(listDiv);

  const title = document.createElement("h3");
  title.textContent = listTitle;
  listDiv.appendChild(title);
  const category = document.createElement(listCategory);
  listDiv.appendChild(category);
  list.forEach((ele) => {
    const each = document.createElement("li");
    each.textContent = ele;
    category.appendChild(each);
  });
};

createList("ol", "An ordered technologies list");
createList("ul", "An unordered technologies list");

/*************Question 3 ************************/
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const q3 = document.querySelector(".question3");

const select = document.createElement("select");
select.setAttribute("name", "city");
q3.appendChild(select);

dropDownList.forEach((each) => {
  const option = document.createElement("option");
  const { value, content } = each;
  option.setAttribute("value", value);
  option.textContent = content;
  select.appendChild(option);
});
