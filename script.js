document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  document.getElementById("year").textContent = new Date().getFullYear();

  const container = document.getElementById("employee-list");
  const searchInput = document.createElement("input");

  // Add search box above employee list
  searchInput.type = "text";
  searchInput.placeholder = "Enter department name...";
  searchInput.style.marginBottom = "1em";
  container.before(searchInput);

  let allEmployees = []; // store JSON data

  // Fetch JSON
  fetch("employees.json")
    .then(res => res.json())
    .then(data => {
      allEmployees = data;
      // show hint first, no employees displayed
      container.innerHTML = "<p>Type a department name to see employees.</p>";
    })
    .catch(err => console.error("Error loading employees:", err));

  // Filter employees by department when typing
  searchInput.addEventListener("input", e => {
    const term = e.target.value.toLowerCase().trim();
    container.innerHTML = ""; // clear old results

    if (term === "") {
      container.innerHTML = "<p>Type a department name to see employees.</p>";
      return;
    }

    // find department matching typed term
    const dept = allEmployees.find(d =>
      d.department.toLowerCase().includes(term)
    );

    if (dept) {
      const section = document.createElement("section");

      const heading = document.createElement("h4");
      heading.textContent = dept.department;
      section.appendChild(heading);

      const ul = document.createElement("ul");
      dept.employees.forEach(emp => {
        const li = document.createElement("li");
        li.textContent = emp;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    } else {
      container.innerHTML = "<p>No department found.</p>";
    }
  });
});
