(function measureLoadTime() {
    const startTime = performance.now();
    window.addEventListener("load", function() {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      console.log(loadTime, startTime, endTime)
      const loadTimeElement = document.getElementsByClassName("load-time");
      loadTimeElement[0].textContent = `Page load time: ${loadTime}ms`;
    });
  })();

