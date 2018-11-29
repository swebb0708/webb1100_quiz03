const employee = [
    {
        name: "Mellody Hobson",
        hourlyRate: 46.79,
        hoursWorked: 80
    },
    {
        name: "Richelieu Dennis",
        hourlyRate: 777.77,
        hoursWorked: 60
    },
    {
        name: "Mona Scott-Young",
        hourlyRate: 111.11,
        hoursWorked: 75
    }
];

class Payroll{
    constructor(employee){
        this.employee = employee;
        this.getNames = this.getNames();
        this.getFullTime = this.getFullTime();
        this.getTotalLabor = this.getTotalLabor();
    }
    getNames(){
        const orderedEmp = this.employee.map( emp => {
            return emp.name;
        })
        return orderedEmp.sort();

    }
    getFullTime(){
        return this.employee.filter(ot => {
            if (ot.hoursWorked > 60){
                return true;
            }
        } )
    }
    getTotalLabor(){
        return this.employee.reduce((acc,curr) =>{
            return acc+ (curr.hourlyRate * curr.hoursWorked); 
        },0);
    }
}

const pay = new Payroll(employee);
console.log(pay); 