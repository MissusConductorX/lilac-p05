function handleCommand(input) {

if (input.toLowerCase() === "admin") {
  printLine("notice", "Accessing Administrative Wing...");
  
  setTimeout(() => {
    window.location.href = "admin.html";
  }, 1200);
}
