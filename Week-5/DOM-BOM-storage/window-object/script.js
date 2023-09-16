function displayWindowProperties() {
    console.log("User Agent String: " + navigator.userAgent);
    console.log("Screen Width: " + window.screen.width);
    console.log("Screen Height: " + window.screen.height);
    console.log("Current URL: " + window.location.href);
    console.log("Pathname: " + window.location.pathname);
  
    sessionStorage.setItem("sessionData", "This is session data.");
    localStorage.setItem("localData", "This is local data.");
  
    console.log(
      "Data stored in sessionStorage: " + sessionStorage.getItem("sessionData")
    );
    console.log(
      "Data stored in localStorage: " + localStorage.getItem("localData")
    );
  }
  
  window.onload = displayWindowProperties;