let user = {
  name: "John",
  years: 30
};
let {name, years: age, isAdmin=false}=user;
console.log("Ім'я: "+name);
console.log("Вік: "+age);
console.log(isAdmin);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(salaries) {

  let max = 0;
  let topName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      topName = name;
    }
  }

  return topName;
}
console.log("Робітнику у якого найвища зарплата - " + topSalary(salaries));