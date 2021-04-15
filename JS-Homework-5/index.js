//task1
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development",
//   };
//   function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
//   }
//   console.log(propsCount(mentor));
  
//   //task2
//   const spaceship = {
//     homePlanet: "Earth",
//     numCrew: 5,
//     captain: "Frank",
//     activeDuty: true,
//     fuelType: "turbo fuel",
//   };
//   function showProps(spaceship) {
//     for (const [key, value] of Object.entries(spaceship)) {
//       console.log(`${key}: ${value}`);
//     }
//   }
//   console.log(showProps(spaceship));
  
//   //task 3
//   class Person {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }
//     showFullName() {
//       return this.surname + " " + this.name;
//     }
//   }
//   class Student extends Person {
//     constructor(name, surname, year) {
//       super(name, surname);
//       this.year = year;
//     }
//     showFullName(middleName) {
//       return this.name + " " + this.surname + " " + middleName;
//     }
//     showCourse() {
//       let course = new Date().getFullYear();
//     return course - this.year;
//     }
//   }
//   let stud1 = new Student("Petro", "Petrenko", 2015);
//   console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
//   console.log("Current course: " + stud1.showCourse()); //Current course: 5
  
//   //task4
//   class Worker {
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//       this.fullName = fullName;
//       this.dayRate = dayRate;
//       this.workingDays = workingDays;
//     }
//     showSalary() {
//       return this.dayRate * this.workingDays;
//     }
//     showSalaryWithExperience() {
//       return this.showSalary() * this.#experience;
//     }
//     get showExp() {
//       return this.#experience;
//     }
//     set setExp(experience) {
//       return (this.#experience = experience);
//     }
//   }
//   //worker1
//   let worker1 = new Worker("John Johnson", 20, 23);
//   console.log(worker1.fullName);
//   worker1.showSalary();
//   console.log(worker1.fullName + " salary: " + worker1.showSalary());
//   console.log("New experience: " + worker1.showExp);
  
//   console.log(
//     worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
//   );
//   worker1.showSalaryWithExperience();
  
//   worker1.setExp = 1.5;
//   console.log("New experience: " + worker1.showExp);
  
//   console.log(
//     worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
//   );
//   worker1.showSalaryWithExperience();
  
//   //Worker2
//   let worker2 = new Worker("Tom Tomson ", 48, 22);
//   console.log(worker2.fullName);
//   worker2.showSalary();
//   console.log(worker2.fullName + " salary: " + worker2.showSalary());
//   console.log("New experience: " + worker2.showExp);
  
//   console.log(
//     worker2.fullName + " salary: " + worker2.showSalaryWithExperience()
//   );
//   worker2.showSalaryWithExperience();
  
//   worker2.setExp = 1.5;
//   console.log("New experience: " + worker2.showExp);
  
//   console.log(
//     worker2.fullName + " salary: " + worker2.showSalaryWithExperience()
//   );
//   worker2.showSalaryWithExperience();
  
//   //worker3
//   let worker3 = new Worker("Andy Ander", 29, 23);
//   console.log(worker3.fullName);
//   worker3.showSalary();
//   console.log(worker3.fullName + " salary: " + worker3.showSalary());
//   console.log("New experience: " + worker3.showExp);
  
//   console.log(
//     worker3.fullName + " salary: " + worker3.showSalaryWithExperience()
//   );
//   worker3.showSalaryWithExperience();
  
//   worker3.setExp = 1.5;
//   console.log("New experience: " + worker3.showExp);
  
//   console.log(
//     worker3.fullName + " salary: " + worker3.showSalaryWithExperience()
//   );
//   worker3.showSalaryWithExperience();
  
//   function showWorkers() {
//     let workersArr = [worker1, worker2, worker3];
//     console.log("Sorted salary:");
//     workersArr.sort(function (a, b) {
//       return a.showSalaryWithExperience() - b.showSalaryWithExperience();
//     });
//     for (let i = 0; i < workersArr.length; i++) {
//       console.log(
//         workersArr[i].fullName + ": " + workersArr[i].showSalaryWithExperience()
//       );
//     }
//   }
//   showWorkers();  

//task5 completed
class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(sideA, sideB) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea() {
    return 0.5 * this.sideA * this.sideB;
  }
}
let triangle = new Triangle(4, 5);

class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}
let square = new Square(7);

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}
let circle = new Circle(5);
let figure = [triangle, square, circle];
function handleFigures(figures) {
  let totalArea = figures.reduce(function (sum, item) {
    if (item instanceof GeometricFigure) {
      console.log(
        "Geometric figure: " +
          item.toString() +
          "- " +
          "area: " +
          item.getArea()
      );
      return sum + item.getArea();
    }
  }, 0);
  console.log("Total area: " + totalArea);
}
handleFigures(figure)