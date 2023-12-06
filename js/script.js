// CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ]

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

import fetchEmployees from "./modules/init.js"
// LOAD JSON DATA FROM EMPLOYEES.JSON AND PASS TO buildGrid()
import fetchData from "./modules/init.js"

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees)

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})



// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // let empcount = 0
    // CALL fetch employees in init.js to loas and return json data
    fetchEmployees()
        .then (Employees => {
        //initialize counter fot number of employees count
        let empcount = 0
        // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
        empTable.lastElementChild.remove()
        // REBUILD THE TBODY FROM SCRATCH
        let tbody = document.createElement('tbody')
        // LOOP employees
        // REBUILDING THE ROW STRUCTURE
        for (let employee of Employees){
            // increment EMPLOYEE COUNT
            empcount += 1
            tbody.innerHTML += 
            `
            <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.Extension}</td>
            <td><a href="mailto:${employee.email}">${employee.Email}</a></td>
            <td>${employee.Department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `

        }
        // BIND THE TBODY TO THE EMPLOYEE TABLE
        empTable.appendChild(tbody)
        // UPDATE EMPLOYEE COUNT
        empCount.value = empcount
    })
    .catch(e => console.log(e.message))
}