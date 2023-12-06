async function fetchEmployees() {
    try{
        // console.log('in init fetch employeees')
        const response = await fetch("/data/employees.json")
        const employees = await response.json()
        // for (let employee of employees){
        //     console.log(`
        //         ${employee.id},
        //         ${employee.name},
        //         ${employee.Extension},
        //         ${employee.Email},
        //         ${employee.Department}`)


        // }
        return employees
    }catch(error){
        console.error(error)
    }
}

export default fetchEmployees
