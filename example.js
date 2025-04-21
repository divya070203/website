function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  function onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log("Scroll position:", scrollPosition);
}
  const throttledScroll = throttle(onScroll, 200);
  window.addEventListener('scroll', throttledScroll);
