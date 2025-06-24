// Ensure the DOM is fully loaded before trying to manipulate it
document.addEventListener("DOMContentLoaded", () => {
    // Get a reference to the body element where all content will be added
    const body = document.body;

    // --- 1. Add the main title (h1) ---
    const h1 = document.createElement("h1");
    h1.textContent = "My HTML adventure";
    body.appendChild(h1);

    // --- 2. Add a paragraph with strong and emphasis tags ---
    const p = document.createElement("p");

    // Text part 1
    p.appendChild(document.createTextNode("We're writing "));

    // HTML hyperlink
    const htmlLink = document.createElement("a");
    htmlLink.href = "https://developer.mozilla.org/en-US/docs/Web/HTML";
    htmlLink.textContent = "HTML";
    p.appendChild(htmlLink);

    // Text part 2
    p.appendChild(document.createTextNode(" markup to display in our "));

    // Strong element for "browser"
    const strongElement = document.createElement("strong");
    strongElement.textContent = "browser";
    p.appendChild(strongElement);

    // Text part 3
    p.appendChild(document.createTextNode(". We're basically telling computers what to do. "));

    // Emphasized element for "Neat!"
    const emElement = document.createElement("em");
    emElement.textContent = "Neat!";
    p.appendChild(emElement);

    body.appendChild(p);

    // --- 3. Add a table ---
    const table = document.createElement("table");

    // Table Header (<thead>)
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.textContent = "Element name";
    headerRow.appendChild(th1);

    const th2 = document.createElement("th");
    th2.textContent = "Display value";
    headerRow.appendChild(th2);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table Body (<tbody>)
    const tbody = document.createElement("tbody");

    // Data for table rows
    const tableData = [
        { name: "h1", value: "block" },
        { name: "p", value: "block" },
        { name: "strong", value: "inline" },
        { name: "em", value: "inline" }
    ];

    // Create table rows and cells dynamically
    tableData.forEach(data => {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = data.name;
        tr.appendChild(tdName);

        const tdValue = document.createElement("td");
        tdValue.textContent = data.value;
        tr.appendChild(tdValue);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    body.appendChild(table);

    console.log("DOM content dynamically added by JavaScript.");
});
