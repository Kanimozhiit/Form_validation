document.getElementById("myForm").addEventListener("submit",function(event){
    let isValid=true;
    event.preventDefault();
    const name=document.getElementById("name").value;
    const nameError=document.getElementById("nameError");
    nameError.innerHTML= "";
    const namePatttern=/^[A-Za-z\s]+$/;
    // const success=true;
    //
    //nAME
    if(name === ""){
        nameError.innerHTML="*Name is required";
        isValid=false;
        
    }
    else if(namePatttern.test(name)){
      // nameError.innerHTML="Valid";
    }
    else{
      nameError.innerHTML="Invalid name";
    }
    //DAteofbirth
    const dob=new Date(document.getElementById("dob").value);
    const dobError=document.getElementById("dobError");
    dobError.innerHTML="";
    
    const currentDate=new Date();
    // const minAge=18;
    // const mindateofbirth=new Date(currentDate.getFullYear()-minAge,currentDate.getMonth(),currentDate.getDate());
    
      if(dob<currentDate){
        dobError.innerHTML="";
      }
      else if(dob>currentDate){
        dobError.innerHTML="*Dont select in future";
      }
      else{
        dobError.innerHTML="*Please select the date";
      }
    //Email
    const mail=document.getElementById("mail").value;
    const emailError=document.getElementById("emailError");
    emailError.innerHTML="";
    const email_message="*Please Enter your mail";
    const emailPattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailPattern.test(mail)) {
      // emailError.innerHTML = "Valid email address!";
    }
   else  if(mail===""){
      emailError.innerHTML=email_message;
    }
    else{
      emailError.innerHTML="Invalid mail id";

    }   
    //gender block

    const genderError=document.getElementById("genderError");
    genderError.innerHTML="";

    if((document.getElementById('genderm').checked)){
      // male block
    }
    else if((document.getElementById('genderf').checked)){
      // female blk
    }
    else{
      genderError.innerHTML="*please select the gender";
    }
    //phone number

     const number=document.getElementById("number").value;
     const numberError=document.getElementById("numberError");
     numberError.innerHTML="";
     const ph_no="*please enter your number";

      if(number==""){
        numberError.innerHTML=ph_no;
      }
    else  if(!isValidphone(number)){
      numberError.innerHTML="*Invalid number";
       isValid=false;
     }
     function isValidphone(number){
      const num=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return num.test(number);
     }

//qualification

var checkboxes = document.getElementsByName("qual");
var checked = false;
const qualError=document.getElementById("qualError");
      qualError.innerHTML="";

for (var i=0; i<checkboxes.length;i++) {
    if (checkboxes[i].checked) {
        checked=true;

    }
}
if (!checked) {
  qualError.innerHTML= "* Please select at least one";
} else {
  // qualError.innerHTML=" successfully!";
    
}
      
      
      //blood group
      const blood=document.getElementById("blood").value;
      const bloodError=document.getElementById("bloodError");
      bloodError.innerHTML="";
      const bloodpattern=/(A|B|AB|O|b|a)[+-]/;
      const numPattern=/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
      if(blood==""){
        bloodError.innerHTML="* Please enter your blood group";
        isValid=false;
      }
      else if(bloodpattern.test(blood)){
        bloodError.innerHTML="";
        isValid=false;
      }
      else if(numPattern.test(blood)){
        bloodError.innerHTML="Dont type numbers";
        isValid=false;
      }
        else{
          bloodError.innerHTML="*Invalid Format";
        }
      

    //country
//     const stateData = {
//       USA: ["New York", "California", "Texas"],
//       Canada: ["Ontario", "Quebec", "British Columbia"],
//   };

//   const cityData = {
//       "New York": ["New York City", "Albany", "Buffalo"],
//       California: ["Los Angeles", "San Francisco", "San Diego"],
//       Texas: ["Houston", "Dallas", "Austin"],
//       Ontario: ["Toronto", "Ottawa", "Hamilton"],
//       Quebec: ["Montreal", "Quebec City", "Laval"],
//       "British Columbia": ["Vancouver", "Victoria", "Surrey"],
//   };

//   // selected country
//   function populateStates() {
//       const countrySelect = document.getElementById("country");
//       const stateSelect = document.getElementById("state");
//       const selectedCountry = countrySelect.value;
//     //   const countryError=document.getElementById("countryError");
//     //   countryError.innerHTML="";
//       stateSelect.innerHTML = "<option value=''>Select State</option>";
//       // Populate state options
//       if (selectedCountry in stateData) {
//           const states = stateData[selectedCountry];
//           for (const state of states) {
//               const option = document.createElement("option");
//               option.value = state;
//               option.textContent = state;
//               stateSelect.appendChild(option);
//           }
//       }
//   }
//   //  selected state
//   function populateCities() {
//       const stateSelect = document.getElementById("state");
//       const citySelect = document.getElementById("city");

//       const selectedState = stateSelect.value;

//       // Clear previous options
//       citySelect.innerHTML = "<option value=''>Select City</option>";

//       // Populate city options
//       if (selectedState in cityData) {
//           const cities = cityData[selectedState];
//           for (const city of cities) {
//               const option = document.createElement("option");
//               option.value = city;
//               option.textContent = city;
//               citySelect.appendChild(option);
//           }
//       }
//   }

//   //addeventlistener
//   document.getElementById("country").addEventListener("change", populateStates);
//   document.getElementById("state").addEventListener("change", populateCities);

//   // Form submission validation
//   document.getElementById("myForm").addEventListener("submit", function (event) {
//     // event.preventDefault();
//       const countrySelect = document.getElementById("country");
//       const stateSelect = document.getElementById("state");
//       const citySelect = document.getElementById("city");
//     //   const  locError=document.getElementById("locError");
//     //   locError.innerHTML="";
//     //   event.preventDefault();

//       if (countrySelect.value === "" || stateSelect.value === "" || citySelect.value === "") {
//         event.preventDefault();
//         // locError.innerHTML="*Please select Country,State,City";
//         // event.preventDefault();
//       }
      
//   });

//   // Initialize state options
//   populateStates();
// //   populateCities();
});