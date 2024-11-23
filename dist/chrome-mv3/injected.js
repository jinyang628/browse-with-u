var injected = function() {
  "use strict";
  function defineUnlistedScript(arg) {
    if (arg == null || typeof arg === "function") return { main: arg };
    return arg;
  }
  const definition = defineUnlistedScript(async () => {
    console.log("Hello injected!");
  });
  injected;
  function initPlugins() {
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (async () => {
    try {
      initPlugins();
      return await definition.main();
    } catch (err) {
      logger.error(
        `The unlisted script "${"injected"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();
  return result;
}();
injected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS93eHRAMC4xOS4xNl9AdHlwZXMrbm9kZUAyMi45LjBfcm9sbHVwQDQuMjcuMi9ub2RlX21vZHVsZXMvd3h0L2Rpc3Qvc2FuZGJveC9kZWZpbmUtdW5saXN0ZWQtc2NyaXB0Lm1qcyIsIi4uLy4uL3NyYy9lbnRyeXBvaW50cy9pbmplY3RlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lVW5saXN0ZWRTY3JpcHQoYXJnKSB7XG4gIGlmIChhcmcgPT0gbnVsbCB8fCB0eXBlb2YgYXJnID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB7IG1haW46IGFyZyB9O1xuICByZXR1cm4gYXJnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZGVmaW5lVW5saXN0ZWRTY3JpcHQoYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkhlbGxvIGluamVjdGVkIVwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQU8sV0FBUyxxQkFBcUIsS0FBSztBQUN4QyxRQUFJLE9BQU8sUUFBUSxPQUFPLFFBQVEsV0FBWSxRQUFPLEVBQUUsTUFBTSxJQUFLO0FBQ2xFLFdBQU87QUFBQSxFQUNUO0FDSGUsUUFBQSxhQUFBLHFCQUFxQixZQUFZO0FBQzlDLFlBQVEsSUFBSSxpQkFBaUI7QUFBQSxFQUMvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
