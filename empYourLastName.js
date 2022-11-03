
// Create an object/class called Employee
class Employee{
    constructor(name, employeeId){
        this._name = name;
        this._employeeId = employeeId;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get employeeId(){
            return this._employeeId;
        }
    set employeeId(newEmployeeId){
            this._employeeId = newEmployeeId;
    }
}
// Create an object/class called ProductionWorker that is a subclass of Employee
class ProductionWorker extends Employee{
    constructor(name, employeeId, shiftNumber, hourlyPayRate){
        super(name, employeeId);
        this._shiftNumber = shiftNumber;
        this._hourlyPayRate = hourlyPayRate;
    }
    get shiftNumber(){
        return this._shiftNumber;
    }
    set shiftNumber(newShiftNumber){
        this._shiftNumber = newShiftNumber;
    }
    get hourlyPayRate(){
            return this._hourlyPayRate;
        }
    set hourlyPayRate(newHourlyPayRate){
            this._hourlyPayRate = newHourlyPayRate;
    }
}

// Create a function using the objects created
function outputWorker(){
    let name = document.getElementById("name").value;
    let employeeId = parseFloat(document.getElementById("employeeId").value);
    let shiftNumber = parseFloat(document.getElementById("shiftNumber").value);
    let hourlyPayRate = parseFloat(document.getElementById("hourlyPayRate").value);
    let newWorker = new ProductionWorker(name, employeeId, shiftNumber, hourlyPayRate);
    document.getElementById('output').innerHTML = "Name: " + newWorker.name + "<br><br>" + "Employee ID: " + newWorker.employeeId + "<br><br>" + "Shift Number: " + newWorker.shiftNumber + "<br><br>" + "Hourly Pay Rate: $" + newWorker.hourlyPayRate;
}
