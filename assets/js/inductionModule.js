const classgeneralCompanyInductionuserScore = document.querySelector(".GeneralCompanyInductionuserScore");
const classdriverInductionuserScore = document.querySelector(".DriverInductionuserScore");
const classwarehouseInductionuserScore = document.querySelector(".WarehouseInductionuserScore");

// Retrieve values from local storage
var localstoragegeneralCompanyInductionuserScore = localStorage.getItem("GeneralCompanyInductionuserscore");
var localstoragedriverInductionuserScore = localStorage.getItem("DriverInductionuserscore");
var localstoragewarehouseInductionuserScore = localStorage.getItem("WarehouseInductionuserscore");

// Set values to corresponding elements or default to "Not completed"
classgeneralCompanyInductionuserScore.textContent = localstoragegeneralCompanyInductionuserScore || "Not completed";
classdriverInductionuserScore.textContent = localstoragedriverInductionuserScore || "Not completed";
classwarehouseInductionuserScore.textContent = localstoragewarehouseInductionuserScore || "Not completed";

function applyStyles(element, score) {
    if (score < 100) {
      element.textContent = "Not Completed";
      element.style.color = "red";
    } else {
      element.textContent = "Completed";
      element.style.color = "green";
    }
  }
  
  applyStyles(classgeneralCompanyInductionuserScore, localstoragegeneralCompanyInductionuserScore || 0);
  applyStyles(classdriverInductionuserScore, localstoragedriverInductionuserScore || 0);
  applyStyles(classwarehouseInductionuserScore, localstoragewarehouseInductionuserScore || 0);
  

// Output the retrieved values to the console
console.log("General Company Induction User Score" + localstoragegeneralCompanyInductionuserScore);
console.log("Driver Induction User Score" + localstoragedriverInductionuserScore);
console.log("Warehouse Induction" + localstoragewarehouseInductionuserScore);
