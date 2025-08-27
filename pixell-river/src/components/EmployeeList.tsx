import React, { useState } from "react";
import type { Department } from "../types/Department";
import employeesData from "../data/employees.json";

const EmployeeList: React.FC = () => {
  // Type assertion so TS knows the JSON shape
  const departments = employeesData as Department[];

  // optional search state (search by department name)
  const [query, setQuery] = useState("");

  const visible = query
    ? departments.filter(d =>
        d.department.toLowerCase().includes(query.toLowerCase())
      )
    : departments;

  return (
    <main className="main">
      <h2>Employee Directory</h2>

      {/* Simple search box — remove if not needed */}
      <div className="search">
        <input
          type="text"
          placeholder="Filter by department (e.g. Finance)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div id="employee-list">
        {visible.length === 0 ? (
          <p>No departments found.</p>
        ) : (
          visible.map((dept) => (
            <section key={dept.department} className="dept-card">
              <h4>{dept.department}</h4>
              <ul>
                {dept.employees.map((emp) => (
                  <li key={emp}>{emp}</li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </main>
  );
};

export default EmployeeList;
