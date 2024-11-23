var injected = (function () {
  "use strict";
  function t(n) {
    return n == null || typeof n == "function" ? { main: n } : n;
  }
  const r = t(async () => {
    console.log("Hello injected!");
  });
  function i() {}
  function e(n, ...s) {}
  const o = {
    debug: (...n) => e(console.debug, ...n),
    log: (...n) => e(console.log, ...n),
    warn: (...n) => e(console.warn, ...n),
    error: (...n) => e(console.error, ...n),
  };
  return (async () => {
    try {
      return await r.main();
    } catch (n) {
      throw (
        (o.error('The unlisted script "injected" crashed on startup!', n), n)
      );
    }
  })();
})();
injected;
