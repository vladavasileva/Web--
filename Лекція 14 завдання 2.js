let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  
    };
    
    let topSalary = (obj1) => {
    let array = Object.entries(obj1).sort(([a, b], [c,d]) => b - d);
    return array[ array.length - 1 ]
    }
    
    alert(topSalary(salaries))