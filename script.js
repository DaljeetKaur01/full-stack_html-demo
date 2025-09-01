document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Load employees.json and inject into page
  fetch("employees.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("employee-list");

      data.forEach(dept => {
        const section = document.createElement("section");

        // Department name
        const heading = document.createElement("h4");
        heading.textContent = dept.department;
        section.appendChild(heading);

        // Employee list
        const ul = document.createElement("ul");
        dept.employees.forEach(emp => {
          const li = document.createElement("li");
          li.textContent = emp;
          ul.appendChild(li);
        });
        section.appendChild(ul);

        container.appendChild(section);
      });
    })
    .catch(err => console.error("Error loading employees:", err));
});
