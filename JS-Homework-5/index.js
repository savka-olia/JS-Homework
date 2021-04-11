//task1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
  };
  function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }
  console.log(propsCount(mentor));
  
  //task2
  const spaceship = {
    homePlanet: "Earth",
    numCrew: 5,
    captain: "Frank",
    activeDuty: true,
    fuelType: "turbo fuel",
  };
  function showProps(spaceship) {
    for (const [key, value] of Object.entries(spaceship)) {
      console.log(`${key}: ${value}`);
    }
  }
  console.log(showProps(spaceship));
  
  //task 3
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    showFullName() {
      return this.surname + " " + this.name;
    }
  }
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
    showFullName(middleName) {
      return this.name + " " + this.surname + " " + middleName;
    }
    showCourse() {
      let course = 2021 - this.year;
      if (course >= 1 && course <= 6) {
        return course;
      } else {
        return "You aren't a student";
      }
    }
  }
  let stud1 = new Student("Petro", "Petrenko", 2015);
  console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
  console.log("Current course: " + stud1.showCourse()); //Current course: 5
  
  //task4
  class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
    showSalary() {
      return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
      return this.showSalary() * this.#experience;
    }
    get experience() {
      return this.#experience;
    }
    set experience(experience) {
      return (this.#experience = experience);
    }
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  let worker2 = new Worker("Tom Tomson", 48, 22);
  let worker3 = new Worker("Andy Ander", 29, 23);
  
  // array with workers
  function receiveWorkers() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
      arr.push(arguments[i]);
    }
    arr.forEach(function (worker) {
      console.log("\n" + worker.fullName);
      console.log(worker.fullName + " salary: " + worker.showSalary());
      console.log("New experince " + worker.experience);
      console.log(
        worker.fullName + " salary: " + worker.showSalaryWithExperience()
      );
      worker.experience = 1.5;
      console.log("New experince " + worker.experience);
      console.log(
        worker.fullName + " salary: " + worker.showSalaryWithExperience()
      );
    });
  }
  console.log(receiveWorkers(worker1, worker2, worker3));
  
  function sortWorkersRate() {
    let arrRate = [];
  
    for (let i = 0; i < arguments.length; i++) {
      arrRate.push([
        arguments[i].fullName,
        arguments[i].showSalaryWithExperience(),
      ]);
    }
    return arrRate
      .sort(function (a, b) {
        return a[1] - b[1];
      })
      .join("\n");
  }
  console.log(
    "Sorted salary:" + "\n" + sortWorkersRate(worker1, worker2, worker3)
  );
  
  //task 5