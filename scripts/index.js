const form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    localStorage.setItem("name", document.querySelector("input.name").value);
    location = "subpages/thankyou.html";
})

