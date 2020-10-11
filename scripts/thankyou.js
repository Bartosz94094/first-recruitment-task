window.addEventListener('load', (event) => {
    const name = localStorage.getItem("name");
    document.querySelector("span.name").innerHTML = name;
  });