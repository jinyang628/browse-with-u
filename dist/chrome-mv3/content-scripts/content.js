var content = (function () {
  "use strict";
  var AL = Object.defineProperty;
  var vx = (q) => {
    throw TypeError(q);
  };
  var TL = (q, ae, Pe) =>
    ae in q
      ? AL(q, ae, { enumerable: !0, configurable: !0, writable: !0, value: Pe })
      : (q[ae] = Pe);
  var Ti = (q, ae, Pe) => TL(q, typeof ae != "symbol" ? ae + "" : ae, Pe),
    Mp = (q, ae, Pe) => ae.has(q) || vx("Cannot " + Pe);
  var E = (q, ae, Pe) => (
      Mp(q, ae, "read from private field"), Pe ? Pe.call(q) : ae.get(q)
    ),
    le = (q, ae, Pe) =>
      ae.has(q)
        ? vx("Cannot add the same private member more than once")
        : ae instanceof WeakSet
          ? ae.add(q)
          : ae.set(q, Pe),
    Q = (q, ae, Pe, Or) => (
      Mp(q, ae, "write to private field"),
      Or ? Or.call(q, Pe) : ae.set(q, Pe),
      Pe
    ),
    Ye = (q, ae, Pe) => (Mp(q, ae, "access private method"), Pe);
  var Yu = (q, ae, Pe, Or) => ({
    set _(ec) {
      Q(q, ae, ec, Pe);
    },
    get _() {
      return E(q, ae, Or);
    },
  });
  var ls,
    kr,
    yi,
    lx,
    vi,
    Er,
    wi,
    ux,
    us,
    cx,
    _i,
    bi,
    jt,
    Je,
    wa,
    cs,
    Jt,
    $n,
    dx,
    dn,
    hx,
    hn,
    ot,
    ds,
    fn,
    Nr,
    fx,
    Et,
    _a,
    px,
    Te,
    Ar,
    Tr,
    xi,
    Si,
    Pr,
    ki,
    Ei,
    mx;
  var q =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function ae(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  function Pe(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
      var n = function r() {
        return this instanceof r
          ? Reflect.construct(e, arguments, this.constructor)
          : e.apply(this, arguments);
      };
      n.prototype = e.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(t).forEach(function (r) {
        var s = Object.getOwnPropertyDescriptor(t, r);
        Object.defineProperty(
          n,
          r,
          s.get
            ? s
            : {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              },
        );
      }),
      n
    );
  }
  var Or = { exports: {} };
  (function (t, e) {
    (function (n, r) {
      r(t);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : q,
      function (n) {
        if (
          !(
            globalThis.chrome &&
            globalThis.chrome.runtime &&
            globalThis.chrome.runtime.id
          )
        )
          throw new Error(
            "This script should only be loaded in a browser extension.",
          );
        if (
          globalThis.browser &&
          globalThis.browser.runtime &&
          globalThis.browser.runtime.id
        )
          n.exports = globalThis.browser;
        else {
          const r = "The message port closed before a response was received.",
            s = (i) => {
              const o = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(o).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill",
                );
              class a extends WeakMap {
                constructor(k, x = void 0) {
                  super(x), (this.createItem = k);
                }
                get(k) {
                  return (
                    this.has(k) || this.set(k, this.createItem(k)), super.get(k)
                  );
                }
              }
              const l = (b) =>
                  b && typeof b == "object" && typeof b.then == "function",
                u =
                  (b, k) =>
                  (...x) => {
                    i.runtime.lastError
                      ? b.reject(new Error(i.runtime.lastError.message))
                      : k.singleCallbackArg ||
                          (x.length <= 1 && k.singleCallbackArg !== !1)
                        ? b.resolve(x[0])
                        : b.resolve(x);
                  },
                c = (b) => (b == 1 ? "argument" : "arguments"),
                d = (b, k) =>
                  function (R, ...N) {
                    if (N.length < k.minArgs)
                      throw new Error(
                        `Expected at least ${k.minArgs} ${c(k.minArgs)} for ${b}(), got ${N.length}`,
                      );
                    if (N.length > k.maxArgs)
                      throw new Error(
                        `Expected at most ${k.maxArgs} ${c(k.maxArgs)} for ${b}(), got ${N.length}`,
                      );
                    return new Promise((Z, F) => {
                      if (k.fallbackToNoCallback)
                        try {
                          R[b](...N, u({ resolve: Z, reject: F }, k));
                        } catch (V) {
                          console.warn(
                            `${b} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            V,
                          ),
                            R[b](...N),
                            (k.fallbackToNoCallback = !1),
                            (k.noCallback = !0),
                            Z();
                        }
                      else
                        k.noCallback
                          ? (R[b](...N), Z())
                          : R[b](...N, u({ resolve: Z, reject: F }, k));
                    });
                  },
                h = (b, k, x) =>
                  new Proxy(k, {
                    apply(R, N, Z) {
                      return x.call(N, b, ...Z);
                    },
                  });
              let p = Function.call.bind(Object.prototype.hasOwnProperty);
              const v = (b, k = {}, x = {}) => {
                  let R = Object.create(null),
                    N = {
                      has(F, V) {
                        return V in b || V in R;
                      },
                      get(F, V, de) {
                        if (V in R) return R[V];
                        if (!(V in b)) return;
                        let pe = b[V];
                        if (typeof pe == "function")
                          if (typeof k[V] == "function") pe = h(b, b[V], k[V]);
                          else if (p(x, V)) {
                            let Ie = d(V, x[V]);
                            pe = h(b, b[V], Ie);
                          } else pe = pe.bind(b);
                        else if (
                          typeof pe == "object" &&
                          pe !== null &&
                          (p(k, V) || p(x, V))
                        )
                          pe = v(pe, k[V], x[V]);
                        else if (p(x, "*")) pe = v(pe, k[V], x["*"]);
                        else
                          return (
                            Object.defineProperty(R, V, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return b[V];
                              },
                              set(Ie) {
                                b[V] = Ie;
                              },
                            }),
                            pe
                          );
                        return (R[V] = pe), pe;
                      },
                      set(F, V, de, pe) {
                        return V in R ? (R[V] = de) : (b[V] = de), !0;
                      },
                      defineProperty(F, V, de) {
                        return Reflect.defineProperty(R, V, de);
                      },
                      deleteProperty(F, V) {
                        return Reflect.deleteProperty(R, V);
                      },
                    },
                    Z = Object.create(b);
                  return new Proxy(Z, N);
                },
                g = (b) => ({
                  addListener(k, x, ...R) {
                    k.addListener(b.get(x), ...R);
                  },
                  hasListener(k, x) {
                    return k.hasListener(b.get(x));
                  },
                  removeListener(k, x) {
                    k.removeListener(b.get(x));
                  },
                }),
                w = new a((b) =>
                  typeof b != "function"
                    ? b
                    : function (x) {
                        const R = v(
                          x,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } },
                        );
                        b(R);
                      },
                ),
                m = new a((b) =>
                  typeof b != "function"
                    ? b
                    : function (x, R, N) {
                        let Z = !1,
                          F,
                          V = new Promise((W) => {
                            F = function (P) {
                              (Z = !0), W(P);
                            };
                          }),
                          de;
                        try {
                          de = b(x, R, F);
                        } catch (W) {
                          de = Promise.reject(W);
                        }
                        const pe = de !== !0 && l(de);
                        if (de !== !0 && !pe && !Z) return !1;
                        const Ie = (W) => {
                          W.then(
                            (P) => {
                              N(P);
                            },
                            (P) => {
                              let I;
                              P &&
                              (P instanceof Error ||
                                typeof P.message == "string")
                                ? (I = P.message)
                                : (I = "An unexpected error occurred"),
                                N({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: I,
                                });
                            },
                          ).catch((P) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              P,
                            );
                          });
                        };
                        return Ie(pe ? de : V), !0;
                      },
                ),
                f = ({ reject: b, resolve: k }, x) => {
                  i.runtime.lastError
                    ? i.runtime.lastError.message === r
                      ? k()
                      : b(new Error(i.runtime.lastError.message))
                    : x && x.__mozWebExtensionPolyfillReject__
                      ? b(new Error(x.message))
                      : k(x);
                },
                y = (b, k, x, ...R) => {
                  if (R.length < k.minArgs)
                    throw new Error(
                      `Expected at least ${k.minArgs} ${c(k.minArgs)} for ${b}(), got ${R.length}`,
                    );
                  if (R.length > k.maxArgs)
                    throw new Error(
                      `Expected at most ${k.maxArgs} ${c(k.maxArgs)} for ${b}(), got ${R.length}`,
                    );
                  return new Promise((N, Z) => {
                    const F = f.bind(null, { resolve: N, reject: Z });
                    R.push(F), x.sendMessage(...R);
                  });
                },
                _ = {
                  devtools: { network: { onRequestFinished: g(w) } },
                  runtime: {
                    onMessage: g(m),
                    onMessageExternal: g(m),
                    sendMessage: y.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: y.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                S = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (o.privacy = {
                  network: { "*": S },
                  services: { "*": S },
                  websites: { "*": S },
                }),
                v(i, _, o)
              );
            };
          n.exports = s(chrome);
        }
      },
    );
  })(Or);
  var ec = Or.exports;
  const Lp = ae(ec),
    Dt = Lp;
  function PL(t) {
    return t;
  }
  function xa(t, ...e) {}
  const Ip = {
      debug: (...t) => xa(console.debug, ...t),
      log: (...t) => xa(console.log, ...t),
      warn: (...t) => xa(console.warn, ...t),
      error: (...t) => xa(console.error, ...t),
    },
    _x = {
      BASE_URL: "/",
      BROWSER: "chrome",
      CHROME: !0,
      COMMAND: "build",
      DEV: !1,
      EDGE: !1,
      ENTRYPOINT: "content",
      FIREFOX: !1,
      MANIFEST_VERSION: 3,
      MODE: "production",
      OPERA: !1,
      PROD: !0,
      SAFARI: !1,
      SSR: !1,
      VITE_CJS_IGNORE_WARNING: "true",
    },
    Qu = class Qu extends Event {
      constructor(e, n) {
        super(Qu.EVENT_NAME, {}), (this.newUrl = e), (this.oldUrl = n);
      }
    };
  Ti(Qu, "EVENT_NAME", nc("wxt:locationchange"));
  let tc = Qu;
  function nc(t) {
    var n;
    const e = typeof _x > "u" ? "build" : "content";
    return `${(n = Dt == null ? void 0 : Dt.runtime) == null ? void 0 : n.id}:${e}:${t}`;
  }
  function bx(t) {
    let e, n;
    return {
      run() {
        e == null &&
          ((n = new URL(location.href)),
          (e = t.setInterval(() => {
            let r = new URL(location.href);
            r.href !== n.href && (window.dispatchEvent(new tc(r, n)), (n = r));
          }, 1e3)));
      },
    };
  }
  const va = class va {
    constructor(e, n) {
      Ti(this, "isTopFrame", window.self === window.top);
      Ti(this, "abortController");
      Ti(this, "locationWatcher", bx(this));
      (this.contentScriptName = e),
        (this.options = n),
        (this.abortController = new AbortController()),
        this.isTopFrame
          ? (this.listenForNewerScripts({ ignoreFirstEvent: !0 }),
            this.stopOldScripts())
          : this.listenForNewerScripts();
    }
    get signal() {
      return this.abortController.signal;
    }
    abort(e) {
      return this.abortController.abort(e);
    }
    get isInvalid() {
      return (
        Dt.runtime.id == null && this.notifyInvalidated(), this.signal.aborted
      );
    }
    get isValid() {
      return !this.isInvalid;
    }
    onInvalidated(e) {
      return (
        this.signal.addEventListener("abort", e),
        () => this.signal.removeEventListener("abort", e)
      );
    }
    block() {
      return new Promise(() => {});
    }
    setInterval(e, n) {
      const r = setInterval(() => {
        this.isValid && e();
      }, n);
      return this.onInvalidated(() => clearInterval(r)), r;
    }
    setTimeout(e, n) {
      const r = setTimeout(() => {
        this.isValid && e();
      }, n);
      return this.onInvalidated(() => clearTimeout(r)), r;
    }
    requestAnimationFrame(e) {
      const n = requestAnimationFrame((...r) => {
        this.isValid && e(...r);
      });
      return this.onInvalidated(() => cancelAnimationFrame(n)), n;
    }
    requestIdleCallback(e, n) {
      const r = requestIdleCallback((...s) => {
        this.signal.aborted || e(...s);
      }, n);
      return this.onInvalidated(() => cancelIdleCallback(r)), r;
    }
    addEventListener(e, n, r, s) {
      var i;
      n === "wxt:locationchange" && this.isValid && this.locationWatcher.run(),
        (i = e.addEventListener) == null ||
          i.call(e, n.startsWith("wxt:") ? nc(n) : n, r, {
            ...s,
            signal: this.signal,
          });
    }
    notifyInvalidated() {
      this.abort("Content script context invalidated"),
        Ip.debug(
          `Content script "${this.contentScriptName}" context invalidated`,
        );
    }
    stopOldScripts() {
      window.postMessage(
        {
          type: va.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName,
        },
        "*",
      );
    }
    listenForNewerScripts(e) {
      let n = !0;
      const r = (s) => {
        var i, o;
        if (
          ((i = s.data) == null ? void 0 : i.type) ===
            va.SCRIPT_STARTED_MESSAGE_TYPE &&
          ((o = s.data) == null ? void 0 : o.contentScriptName) ===
            this.contentScriptName
        ) {
          const a = n;
          if (((n = !1), a && e != null && e.ignoreFirstEvent)) return;
          this.notifyInvalidated();
        }
      };
      addEventListener("message", r),
        this.onInvalidated(() => removeEventListener("message", r));
    }
  };
  Ti(va, "SCRIPT_STARTED_MESSAGE_TYPE", nc("wxt:content-script-started"));
  let rc = va;
  var xx =
      /^[a-z](?:[\.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*-(?:[\x2D\.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/,
    Sx = function (t) {
      return xx.test(t);
    },
    kx = Sx;
  const Ex = ae(kx);
  var Ax = (t, e, n) =>
    new Promise((r, s) => {
      var i = (l) => {
          try {
            a(n.next(l));
          } catch (u) {
            s(u);
          }
        },
        o = (l) => {
          try {
            a(n.throw(l));
          } catch (u) {
            s(u);
          }
        },
        a = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(i, o));
      a((n = n.apply(t, e)).next());
    });
  function Tx(t) {
    return Ax(this, null, function* () {
      const { name: e, mode: n = "closed", css: r, isolateEvents: s = !1 } = t;
      if (!Ex(e))
        throw Error(
          `"${e}" is not a valid custom element name. It must be two words and kebab-case, with a few exceptions. See spec for more details: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name`,
        );
      const i = document.createElement(e),
        o = i.attachShadow({ mode: n }),
        a = document.createElement("html"),
        l = document.createElement("body"),
        u = document.createElement("head");
      if (r) {
        const c = document.createElement("style");
        "url" in r
          ? (c.textContent = yield fetch(r.url).then((d) => d.text()))
          : (c.textContent = r.textContent),
          u.appendChild(c);
      }
      return (
        a.appendChild(u),
        a.appendChild(l),
        o.appendChild(a),
        s &&
          (Array.isArray(s) ? s : ["keydown", "keyup", "keypress"]).forEach(
            (d) => {
              l.addEventListener(d, (h) => h.stopPropagation());
            },
          ),
        { parentElement: i, shadow: o, isolatedElement: l }
      );
    });
  }
  async function Px(t, e) {
    var u;
    const n = [e.css ?? ""];
    if (((u = t.options) == null ? void 0 : u.cssInjectionMode) === "ui") {
      const c = await Ox();
      n.push(c.replaceAll(":root", ":host"));
    }
    const {
      isolatedElement: r,
      parentElement: s,
      shadow: i,
    } = await Tx({
      name: e.name,
      css: {
        textContent: n
          .join(
            `
`,
          )
          .trim(),
      },
      mode: e.mode ?? "open",
      isolateEvents: e.isolateEvents,
    });
    s.setAttribute("data-wxt-shadow-root", "");
    let o;
    const a = () => {
        Nx(s, e), Cx(s, i.querySelector("html"), e), (o = e.onMount(r, i, s));
      },
      l = () => {
        var c;
        for (
          (c = e.onRemove) == null || c.call(e, o), s.remove();
          r.lastChild;

        )
          r.removeChild(r.lastChild);
        o = void 0;
      };
    return (
      t.onInvalidated(l),
      {
        shadow: i,
        shadowHost: s,
        uiContainer: r,
        mount: a,
        remove: l,
        get mounted() {
          return o;
        },
      }
    );
  }
  function Cx(t, e, n) {
    var r, s;
    n.position !== "inline" &&
      (n.zIndex != null && (t.style.zIndex = String(n.zIndex)),
      (t.style.overflow = "visible"),
      (t.style.position = "relative"),
      (t.style.width = "0"),
      (t.style.height = "0"),
      (t.style.display = "block"),
      e &&
        (n.position === "overlay"
          ? ((e.style.position = "absolute"),
            (r = n.alignment) != null && r.startsWith("bottom-")
              ? (e.style.bottom = "0")
              : (e.style.top = "0"),
            (s = n.alignment) != null && s.endsWith("-right")
              ? (e.style.right = "0")
              : (e.style.left = "0"))
          : ((e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.bottom = "0"),
            (e.style.left = "0"),
            (e.style.right = "0"))));
  }
  function Rx(t) {
    if (t.anchor == null) return document.body;
    let e = typeof t.anchor == "function" ? t.anchor() : t.anchor;
    return typeof e == "string"
      ? e.startsWith("/")
        ? (document.evaluate(
            e,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
          ).singleNodeValue ?? void 0)
        : (document.querySelector(e) ?? void 0)
      : (e ?? void 0);
  }
  function Nx(t, e) {
    var r, s;
    const n = Rx(e);
    if (n == null)
      throw Error(
        "Failed to mount content script UI: could not find anchor element",
      );
    switch (e.append) {
      case void 0:
      case "last":
        n.append(t);
        break;
      case "first":
        n.prepend(t);
        break;
      case "replace":
        n.replaceWith(t);
        break;
      case "after":
        (r = n.parentElement) == null ||
          r.insertBefore(t, n.nextElementSibling);
        break;
      case "before":
        (s = n.parentElement) == null || s.insertBefore(t, n);
        break;
      default:
        e.append(n, t);
        break;
    }
  }
  async function Ox() {
    const t = Dt.runtime.getURL("/content-scripts/content.css");
    try {
      return await (await fetch(t)).text();
    } catch (e) {
      return (
        Ip.warn(
          `Failed to load styles @ ${t}. Did you forget to import the stylesheet in your entrypoint?`,
          e,
        ),
        ""
      );
    }
  }
  var jp = { exports: {} },
    gt = {},
    Dp = { exports: {} },
    J = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Pi = Symbol.for("react.element"),
    Mx = Symbol.for("react.portal"),
    Lx = Symbol.for("react.fragment"),
    Ix = Symbol.for("react.strict_mode"),
    jx = Symbol.for("react.profiler"),
    Dx = Symbol.for("react.provider"),
    $x = Symbol.for("react.context"),
    Fx = Symbol.for("react.forward_ref"),
    Vx = Symbol.for("react.suspense"),
    Ux = Symbol.for("react.memo"),
    Bx = Symbol.for("react.lazy"),
    $p = Symbol.iterator;
  function zx(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = ($p && t[$p]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Fp = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Vp = Object.assign,
    Up = {};
  function fs(t, e, n) {
    (this.props = t),
      (this.context = e),
      (this.refs = Up),
      (this.updater = n || Fp);
  }
  (fs.prototype.isReactComponent = {}),
    (fs.prototype.setState = function (t, e) {
      if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, t, e, "setState");
    }),
    (fs.prototype.forceUpdate = function (t) {
      this.updater.enqueueForceUpdate(this, t, "forceUpdate");
    });
  function Bp() {}
  Bp.prototype = fs.prototype;
  function sc(t, e, n) {
    (this.props = t),
      (this.context = e),
      (this.refs = Up),
      (this.updater = n || Fp);
  }
  var ic = (sc.prototype = new Bp());
  (ic.constructor = sc), Vp(ic, fs.prototype), (ic.isPureReactComponent = !0);
  var zp = Array.isArray,
    Wp = Object.prototype.hasOwnProperty,
    oc = { current: null },
    Hp = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Gp(t, e, n) {
    var r,
      s = {},
      i = null,
      o = null;
    if (e != null)
      for (r in (e.ref !== void 0 && (o = e.ref),
      e.key !== void 0 && (i = "" + e.key),
      e))
        Wp.call(e, r) && !Hp.hasOwnProperty(r) && (s[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      s.children = l;
    }
    if (t && t.defaultProps)
      for (r in ((a = t.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
    return {
      $$typeof: Pi,
      type: t,
      key: i,
      ref: o,
      props: s,
      _owner: oc.current,
    };
  }
  function Wx(t, e) {
    return {
      $$typeof: Pi,
      type: t.type,
      key: e,
      ref: t.ref,
      props: t.props,
      _owner: t._owner,
    };
  }
  function ac(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Pi;
  }
  function Hx(t) {
    var e = { "=": "=0", ":": "=2" };
    return (
      "$" +
      t.replace(/[=:]/g, function (n) {
        return e[n];
      })
    );
  }
  var qp = /\/+/g;
  function lc(t, e) {
    return typeof t == "object" && t !== null && t.key != null
      ? Hx("" + t.key)
      : e.toString(36);
  }
  function Sa(t, e, n, r, s) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
      switch (i) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case Pi:
            case Mx:
              o = !0;
          }
      }
    if (o)
      return (
        (o = t),
        (s = s(o)),
        (t = r === "" ? "." + lc(o, 0) : r),
        zp(s)
          ? ((n = ""),
            t != null && (n = t.replace(qp, "$&/") + "/"),
            Sa(s, e, n, "", function (u) {
              return u;
            }))
          : s != null &&
            (ac(s) &&
              (s = Wx(
                s,
                n +
                  (!s.key || (o && o.key === s.key)
                    ? ""
                    : ("" + s.key).replace(qp, "$&/") + "/") +
                  t,
              )),
            e.push(s)),
        1
      );
    if (((o = 0), (r = r === "" ? "." : r + ":"), zp(t)))
      for (var a = 0; a < t.length; a++) {
        i = t[a];
        var l = r + lc(i, a);
        o += Sa(i, e, n, l, s);
      }
    else if (((l = zx(t)), typeof l == "function"))
      for (t = l.call(t), a = 0; !(i = t.next()).done; )
        (i = i.value), (l = r + lc(i, a++)), (o += Sa(i, e, n, l, s));
    else if (i === "object")
      throw (
        ((e = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return o;
  }
  function ka(t, e, n) {
    if (t == null) return t;
    var r = [],
      s = 0;
    return (
      Sa(t, r, "", "", function (i) {
        return e.call(n, i, s++);
      }),
      r
    );
  }
  function Gx(t) {
    if (t._status === -1) {
      var e = t._result;
      (e = e()),
        e.then(
          function (n) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 1), (t._result = n));
          },
          function (n) {
            (t._status === 0 || t._status === -1) &&
              ((t._status = 2), (t._result = n));
          },
        ),
        t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var et = { current: null },
    Ea = { transition: null },
    qx = {
      ReactCurrentDispatcher: et,
      ReactCurrentBatchConfig: Ea,
      ReactCurrentOwner: oc,
    };
  function Kp() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  (J.Children = {
    map: ka,
    forEach: function (t, e, n) {
      ka(
        t,
        function () {
          e.apply(this, arguments);
        },
        n,
      );
    },
    count: function (t) {
      var e = 0;
      return (
        ka(t, function () {
          e++;
        }),
        e
      );
    },
    toArray: function (t) {
      return (
        ka(t, function (e) {
          return e;
        }) || []
      );
    },
    only: function (t) {
      if (!ac(t))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return t;
    },
  }),
    (J.Component = fs),
    (J.Fragment = Lx),
    (J.Profiler = jx),
    (J.PureComponent = sc),
    (J.StrictMode = Ix),
    (J.Suspense = Vx),
    (J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qx),
    (J.act = Kp),
    (J.cloneElement = function (t, e, n) {
      if (t == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            t +
            ".",
        );
      var r = Vp({}, t.props),
        s = t.key,
        i = t.ref,
        o = t._owner;
      if (e != null) {
        if (
          (e.ref !== void 0 && ((i = e.ref), (o = oc.current)),
          e.key !== void 0 && (s = "" + e.key),
          t.type && t.type.defaultProps)
        )
          var a = t.type.defaultProps;
        for (l in e)
          Wp.call(e, l) &&
            !Hp.hasOwnProperty(l) &&
            (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
      }
      var l = arguments.length - 2;
      if (l === 1) r.children = n;
      else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
      }
      return {
        $$typeof: Pi,
        type: t.type,
        key: s,
        ref: i,
        props: r,
        _owner: o,
      };
    }),
    (J.createContext = function (t) {
      return (
        (t = {
          $$typeof: $x,
          _currentValue: t,
          _currentValue2: t,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (t.Provider = { $$typeof: Dx, _context: t }),
        (t.Consumer = t)
      );
    }),
    (J.createElement = Gp),
    (J.createFactory = function (t) {
      var e = Gp.bind(null, t);
      return (e.type = t), e;
    }),
    (J.createRef = function () {
      return { current: null };
    }),
    (J.forwardRef = function (t) {
      return { $$typeof: Fx, render: t };
    }),
    (J.isValidElement = ac),
    (J.lazy = function (t) {
      return { $$typeof: Bx, _payload: { _status: -1, _result: t }, _init: Gx };
    }),
    (J.memo = function (t, e) {
      return { $$typeof: Ux, type: t, compare: e === void 0 ? null : e };
    }),
    (J.startTransition = function (t) {
      var e = Ea.transition;
      Ea.transition = {};
      try {
        t();
      } finally {
        Ea.transition = e;
      }
    }),
    (J.unstable_act = Kp),
    (J.useCallback = function (t, e) {
      return et.current.useCallback(t, e);
    }),
    (J.useContext = function (t) {
      return et.current.useContext(t);
    }),
    (J.useDebugValue = function () {}),
    (J.useDeferredValue = function (t) {
      return et.current.useDeferredValue(t);
    }),
    (J.useEffect = function (t, e) {
      return et.current.useEffect(t, e);
    }),
    (J.useId = function () {
      return et.current.useId();
    }),
    (J.useImperativeHandle = function (t, e, n) {
      return et.current.useImperativeHandle(t, e, n);
    }),
    (J.useInsertionEffect = function (t, e) {
      return et.current.useInsertionEffect(t, e);
    }),
    (J.useLayoutEffect = function (t, e) {
      return et.current.useLayoutEffect(t, e);
    }),
    (J.useMemo = function (t, e) {
      return et.current.useMemo(t, e);
    }),
    (J.useReducer = function (t, e, n) {
      return et.current.useReducer(t, e, n);
    }),
    (J.useRef = function (t) {
      return et.current.useRef(t);
    }),
    (J.useState = function (t) {
      return et.current.useState(t);
    }),
    (J.useSyncExternalStore = function (t, e, n) {
      return et.current.useSyncExternalStore(t, e, n);
    }),
    (J.useTransition = function () {
      return et.current.useTransition();
    }),
    (J.version = "18.3.1"),
    (Dp.exports = J);
  var C = Dp.exports;
  const Aa = ae(C);
  var Zp = { exports: {} },
    Qp = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (t) {
    function e(P, I) {
      var U = P.length;
      P.push(I);
      e: for (; 0 < U; ) {
        var se = (U - 1) >>> 1,
          Y = P[se];
        if (0 < s(Y, I)) (P[se] = I), (P[U] = Y), (U = se);
        else break e;
      }
    }
    function n(P) {
      return P.length === 0 ? null : P[0];
    }
    function r(P) {
      if (P.length === 0) return null;
      var I = P[0],
        U = P.pop();
      if (U !== I) {
        P[0] = U;
        e: for (var se = 0, Y = P.length, pn = Y >>> 1; se < pn; ) {
          var mn = 2 * (se + 1) - 1,
            Ai = P[mn],
            gn = mn + 1,
            Cr = P[gn];
          if (0 > s(Ai, U))
            gn < Y && 0 > s(Cr, Ai)
              ? ((P[se] = Cr), (P[gn] = U), (se = gn))
              : ((P[se] = Ai), (P[mn] = U), (se = mn));
          else if (gn < Y && 0 > s(Cr, U)) (P[se] = Cr), (P[gn] = U), (se = gn);
          else break e;
        }
      }
      return I;
    }
    function s(P, I) {
      var U = P.sortIndex - I.sortIndex;
      return U !== 0 ? U : P.id - I.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var i = performance;
      t.unstable_now = function () {
        return i.now();
      };
    } else {
      var o = Date,
        a = o.now();
      t.unstable_now = function () {
        return o.now() - a;
      };
    }
    var l = [],
      u = [],
      c = 1,
      d = null,
      h = 3,
      p = !1,
      v = !1,
      g = !1,
      w = typeof setTimeout == "function" ? setTimeout : null,
      m = typeof clearTimeout == "function" ? clearTimeout : null,
      f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(P) {
      for (var I = n(u); I !== null; ) {
        if (I.callback === null) r(u);
        else if (I.startTime <= P)
          r(u), (I.sortIndex = I.expirationTime), e(l, I);
        else break;
        I = n(u);
      }
    }
    function _(P) {
      if (((g = !1), y(P), !v))
        if (n(l) !== null) (v = !0), Ie(S);
        else {
          var I = n(u);
          I !== null && W(_, I.startTime - P);
        }
    }
    function S(P, I) {
      (v = !1), g && ((g = !1), m(x), (x = -1)), (p = !0);
      var U = h;
      try {
        for (
          y(I), d = n(l);
          d !== null && (!(d.expirationTime > I) || (P && !Z()));

        ) {
          var se = d.callback;
          if (typeof se == "function") {
            (d.callback = null), (h = d.priorityLevel);
            var Y = se(d.expirationTime <= I);
            (I = t.unstable_now()),
              typeof Y == "function" ? (d.callback = Y) : d === n(l) && r(l),
              y(I);
          } else r(l);
          d = n(l);
        }
        if (d !== null) var pn = !0;
        else {
          var mn = n(u);
          mn !== null && W(_, mn.startTime - I), (pn = !1);
        }
        return pn;
      } finally {
        (d = null), (h = U), (p = !1);
      }
    }
    var b = !1,
      k = null,
      x = -1,
      R = 5,
      N = -1;
    function Z() {
      return !(t.unstable_now() - N < R);
    }
    function F() {
      if (k !== null) {
        var P = t.unstable_now();
        N = P;
        var I = !0;
        try {
          I = k(!0, P);
        } finally {
          I ? V() : ((b = !1), (k = null));
        }
      } else b = !1;
    }
    var V;
    if (typeof f == "function")
      V = function () {
        f(F);
      };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(),
        pe = de.port2;
      (de.port1.onmessage = F),
        (V = function () {
          pe.postMessage(null);
        });
    } else
      V = function () {
        w(F, 0);
      };
    function Ie(P) {
      (k = P), b || ((b = !0), V());
    }
    function W(P, I) {
      x = w(function () {
        P(t.unstable_now());
      }, I);
    }
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (P) {
        P.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        v || p || ((v = !0), Ie(S));
      }),
      (t.unstable_forceFrameRate = function (P) {
        0 > P || 125 < P
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (R = 0 < P ? Math.floor(1e3 / P) : 5);
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (t.unstable_next = function (P) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = h;
        }
        var U = h;
        h = I;
        try {
          return P();
        } finally {
          h = U;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = function () {}),
      (t.unstable_runWithPriority = function (P, I) {
        switch (P) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            P = 3;
        }
        var U = h;
        h = P;
        try {
          return I();
        } finally {
          h = U;
        }
      }),
      (t.unstable_scheduleCallback = function (P, I, U) {
        var se = t.unstable_now();
        switch (
          (typeof U == "object" && U !== null
            ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? se + U : se))
            : (U = se),
          P)
        ) {
          case 1:
            var Y = -1;
            break;
          case 2:
            Y = 250;
            break;
          case 5:
            Y = 1073741823;
            break;
          case 4:
            Y = 1e4;
            break;
          default:
            Y = 5e3;
        }
        return (
          (Y = U + Y),
          (P = {
            id: c++,
            callback: I,
            priorityLevel: P,
            startTime: U,
            expirationTime: Y,
            sortIndex: -1,
          }),
          U > se
            ? ((P.sortIndex = U),
              e(u, P),
              n(l) === null &&
                P === n(u) &&
                (g ? (m(x), (x = -1)) : (g = !0), W(_, U - se)))
            : ((P.sortIndex = Y), e(l, P), v || p || ((v = !0), Ie(S))),
          P
        );
      }),
      (t.unstable_shouldYield = Z),
      (t.unstable_wrapCallback = function (P) {
        var I = h;
        return function () {
          var U = h;
          h = I;
          try {
            return P.apply(this, arguments);
          } finally {
            h = U;
          }
        };
      });
  })(Qp),
    (Zp.exports = Qp);
  var Kx = Zp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Zx = C,
    yt = Kx;
  function A(t) {
    for (
      var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
        n = 1;
      n < arguments.length;
      n++
    )
      e += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Xp = new Set(),
    Ci = {};
  function Mr(t, e) {
    ps(t, e), ps(t + "Capture", e);
  }
  function ps(t, e) {
    for (Ci[t] = e, t = 0; t < e.length; t++) Xp.add(e[t]);
  }
  var yn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    uc = Object.prototype.hasOwnProperty,
    Qx =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Jp = {},
    Yp = {};
  function Xx(t) {
    return uc.call(Yp, t)
      ? !0
      : uc.call(Jp, t)
        ? !1
        : Qx.test(t)
          ? (Yp[t] = !0)
          : ((Jp[t] = !0), !1);
  }
  function Jx(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((t = t.toLowerCase().slice(0, 5)),
              t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function Yx(t, e, n, r) {
    if (e === null || typeof e > "u" || Jx(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !e;
        case 4:
          return e === !1;
        case 5:
          return isNaN(e);
        case 6:
          return isNaN(e) || 1 > e;
      }
    return !1;
  }
  function tt(t, e, n, r, s, i, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
      (this.attributeName = r),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = t),
      (this.type = e),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (t) {
      Fe[t] = new tt(t, 0, !1, t, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (t) {
      var e = t[0];
      Fe[e] = new tt(e, 1, !1, t[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (t) {
        Fe[t] = new tt(t, 2, !1, t.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (t) {
      Fe[t] = new tt(t, 2, !1, t, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (t) {
        Fe[t] = new tt(t, 3, !1, t.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (t) {
      Fe[t] = new tt(t, 3, !0, t, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (t) {
      Fe[t] = new tt(t, 4, !1, t, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (t) {
      Fe[t] = new tt(t, 6, !1, t, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (t) {
      Fe[t] = new tt(t, 5, !1, t.toLowerCase(), null, !1, !1);
    });
  var cc = /[\-:]([a-z])/g;
  function dc(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (t) {
      var e = t.replace(cc, dc);
      Fe[e] = new tt(e, 1, !1, t, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (t) {
        var e = t.replace(cc, dc);
        Fe[e] = new tt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
      var e = t.replace(cc, dc);
      Fe[e] = new tt(
        e,
        1,
        !1,
        t,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (t) {
      Fe[t] = new tt(t, 1, !1, t.toLowerCase(), null, !1, !1);
    }),
    (Fe.xlinkHref = new tt(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (t) {
      Fe[t] = new tt(t, 1, !1, t.toLowerCase(), null, !0, !0);
    });
  function hc(t, e, n, r) {
    var s = Fe.hasOwnProperty(e) ? Fe[e] : null;
    (s !== null
      ? s.type !== 0
      : r ||
        !(2 < e.length) ||
        (e[0] !== "o" && e[0] !== "O") ||
        (e[1] !== "n" && e[1] !== "N")) &&
      (Yx(e, n, s, r) && (n = null),
      r || s === null
        ? Xx(e) &&
          (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
        : s.mustUseProperty
          ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
          : ((e = s.attributeName),
            (r = s.attributeNamespace),
            n === null
              ? t.removeAttribute(e)
              : ((s = s.type),
                (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
  }
  var vn = Zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ta = Symbol.for("react.element"),
    ms = Symbol.for("react.portal"),
    gs = Symbol.for("react.fragment"),
    fc = Symbol.for("react.strict_mode"),
    pc = Symbol.for("react.profiler"),
    em = Symbol.for("react.provider"),
    tm = Symbol.for("react.context"),
    mc = Symbol.for("react.forward_ref"),
    gc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.suspense_list"),
    vc = Symbol.for("react.memo"),
    Fn = Symbol.for("react.lazy"),
    nm = Symbol.for("react.offscreen"),
    rm = Symbol.iterator;
  function Ri(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (rm && t[rm]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var _e = Object.assign,
    wc;
  function Ni(t) {
    if (wc === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        wc = (e && e[1]) || "";
      }
    return (
      `
` +
      wc +
      t
    );
  }
  var _c = !1;
  function bc(t, e) {
    if (!t || _c) return "";
    _c = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (e)
        if (
          ((e = function () {
            throw Error();
          }),
          Object.defineProperty(e.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(e, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(t, [], e);
        } else {
          try {
            e.call();
          } catch (u) {
            r = u;
          }
          t.call(e.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        t();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var s = u.stack.split(`
`),
            i = r.stack.split(`
`),
            o = s.length - 1,
            a = i.length - 1;
          1 <= o && 0 <= a && s[o] !== i[a];

        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (s[o] !== i[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || s[o] !== i[a])) {
                  var l =
                    `
` + s[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", t.displayName)),
                    l
                  );
                }
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      (_c = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : "") ? Ni(t) : "";
  }
  function eS(t) {
    switch (t.tag) {
      case 5:
        return Ni(t.type);
      case 16:
        return Ni("Lazy");
      case 13:
        return Ni("Suspense");
      case 19:
        return Ni("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (t = bc(t.type, !1)), t;
      case 11:
        return (t = bc(t.type.render, !1)), t;
      case 1:
        return (t = bc(t.type, !0)), t;
      default:
        return "";
    }
  }
  function xc(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case gs:
        return "Fragment";
      case ms:
        return "Portal";
      case pc:
        return "Profiler";
      case fc:
        return "StrictMode";
      case gc:
        return "Suspense";
      case yc:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case tm:
          return (t.displayName || "Context") + ".Consumer";
        case em:
          return (t._context.displayName || "Context") + ".Provider";
        case mc:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case vc:
          return (
            (e = t.displayName || null), e !== null ? e : xc(t.type) || "Memo"
          );
        case Fn:
          (e = t._payload), (t = t._init);
          try {
            return xc(t(e));
          } catch {}
      }
    return null;
  }
  function tS(t) {
    var e = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (e.displayName || "Context") + ".Consumer";
      case 10:
        return (e._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (t = e.render),
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return e;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return xc(e);
      case 8:
        return e === fc ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
    }
    return null;
  }
  function Vn(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function sm(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function nS(t) {
    var e = sm(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      r = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        i = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (o) {
            (r = "" + o), i.call(this, o);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Pa(t) {
    t._valueTracker || (t._valueTracker = nS(t));
  }
  function im(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      r = "";
    return (
      t && (r = sm(t) ? (t.checked ? "true" : "false") : t.value),
      (t = r),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Ca(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Sc(t, e) {
    var n = e.checked;
    return _e({}, e, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? t._wrapperState.initialChecked,
    });
  }
  function om(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
      r = e.checked != null ? e.checked : e.defaultChecked;
    (n = Vn(e.value != null ? e.value : n)),
      (t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          e.type === "checkbox" || e.type === "radio"
            ? e.checked != null
            : e.value != null,
      });
  }
  function am(t, e) {
    (e = e.checked), e != null && hc(t, "checked", e, !1);
  }
  function kc(t, e) {
    am(t, e);
    var n = Vn(e.value),
      r = e.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
        : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
      t.removeAttribute("value");
      return;
    }
    e.hasOwnProperty("value")
      ? Ec(t, e.type, n)
      : e.hasOwnProperty("defaultValue") && Ec(t, e.type, Vn(e.defaultValue)),
      e.checked == null &&
        e.defaultChecked != null &&
        (t.defaultChecked = !!e.defaultChecked);
  }
  function lm(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
      var r = e.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (e.value !== void 0 && e.value !== null)
        )
      )
        return;
      (e = "" + t._wrapperState.initialValue),
        n || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (n = t.name),
      n !== "" && (t.name = ""),
      (t.defaultChecked = !!t._wrapperState.initialChecked),
      n !== "" && (t.name = n);
  }
  function Ec(t, e, n) {
    (e !== "number" || Ca(t.ownerDocument) !== t) &&
      (n == null
        ? (t.defaultValue = "" + t._wrapperState.initialValue)
        : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
  }
  var Oi = Array.isArray;
  function ys(t, e, n, r) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && r && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Vn(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), r && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ac(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(A(91));
    return _e({}, e, {
      value: void 0,
      defaultValue: void 0,
      children: "" + t._wrapperState.initialValue,
    });
  }
  function um(t, e) {
    var n = e.value;
    if (n == null) {
      if (((n = e.children), (e = e.defaultValue), n != null)) {
        if (e != null) throw Error(A(92));
        if (Oi(n)) {
          if (1 < n.length) throw Error(A(93));
          n = n[0];
        }
        e = n;
      }
      e == null && (e = ""), (n = e);
    }
    t._wrapperState = { initialValue: Vn(n) };
  }
  function cm(t, e) {
    var n = Vn(e.value),
      r = Vn(e.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== t.value && (t.value = n),
      e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
      r != null && (t.defaultValue = "" + r);
  }
  function dm(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue &&
      e !== "" &&
      e !== null &&
      (t.value = e);
  }
  function hm(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Tc(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml"
      ? hm(e)
      : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : t;
  }
  var Ra,
    fm = (function (t) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (e, n, r, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return t(e, n, r, s);
            });
          }
        : t;
    })(function (t, e) {
      if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
        t.innerHTML = e;
      else {
        for (
          Ra = Ra || document.createElement("div"),
            Ra.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
            e = Ra.firstChild;
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (; e.firstChild; ) t.appendChild(e.firstChild);
      }
    });
  function Mi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Li = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    rS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Li).forEach(function (t) {
    rS.forEach(function (e) {
      (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Li[e] = Li[t]);
    });
  });
  function pm(t, e, n) {
    return e == null || typeof e == "boolean" || e === ""
      ? ""
      : n || typeof e != "number" || e === 0 || (Li.hasOwnProperty(t) && Li[t])
        ? ("" + e).trim()
        : e + "px";
  }
  function mm(t, e) {
    t = t.style;
    for (var n in e)
      if (e.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          s = pm(n, e[n], r);
        n === "float" && (n = "cssFloat"), r ? t.setProperty(n, s) : (t[n] = s);
      }
  }
  var sS = _e(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Pc(t, e) {
    if (e) {
      if (sS[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
        throw Error(A(137, t));
      if (e.dangerouslySetInnerHTML != null) {
        if (e.children != null) throw Error(A(60));
        if (
          typeof e.dangerouslySetInnerHTML != "object" ||
          !("__html" in e.dangerouslySetInnerHTML)
        )
          throw Error(A(61));
      }
      if (e.style != null && typeof e.style != "object") throw Error(A(62));
    }
  }
  function Cc(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rc = null;
  function Nc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Oc = null,
    vs = null,
    ws = null;
  function gm(t) {
    if ((t = no(t))) {
      if (typeof Oc != "function") throw Error(A(280));
      var e = t.stateNode;
      e && ((e = Ya(e)), Oc(t.stateNode, t.type, e));
    }
  }
  function ym(t) {
    vs ? (ws ? ws.push(t) : (ws = [t])) : (vs = t);
  }
  function vm() {
    if (vs) {
      var t = vs,
        e = ws;
      if (((ws = vs = null), gm(t), e)) for (t = 0; t < e.length; t++) gm(e[t]);
    }
  }
  function wm(t, e) {
    return t(e);
  }
  function _m() {}
  var Mc = !1;
  function bm(t, e, n) {
    if (Mc) return t(e, n);
    Mc = !0;
    try {
      return wm(t, e, n);
    } finally {
      (Mc = !1), (vs !== null || ws !== null) && (_m(), vm());
    }
  }
  function Ii(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = Ya(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((t = t.type),
          (r = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !r);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(A(231, e, typeof n));
    return n;
  }
  var Lc = !1;
  if (yn)
    try {
      var ji = {};
      Object.defineProperty(ji, "passive", {
        get: function () {
          Lc = !0;
        },
      }),
        window.addEventListener("test", ji, ji),
        window.removeEventListener("test", ji, ji);
    } catch {
      Lc = !1;
    }
  function iS(t, e, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      e.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Di = !1,
    Na = null,
    Oa = !1,
    Ic = null,
    oS = {
      onError: function (t) {
        (Di = !0), (Na = t);
      },
    };
  function aS(t, e, n, r, s, i, o, a, l) {
    (Di = !1), (Na = null), iS.apply(oS, arguments);
  }
  function lS(t, e, n, r, s, i, o, a, l) {
    if ((aS.apply(this, arguments), Di)) {
      if (Di) {
        var u = Na;
        (Di = !1), (Na = null);
      } else throw Error(A(198));
      Oa || ((Oa = !0), (Ic = u));
    }
  }
  function Lr(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function xm(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function Sm(t) {
    if (Lr(t) !== t) throw Error(A(188));
  }
  function uS(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = Lr(t)), e === null)) throw Error(A(188));
      return e !== t ? null : t;
    }
    for (var n = t, r = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var i = s.alternate;
      if (i === null) {
        if (((r = s.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === i.child) {
        for (i = s.child; i; ) {
          if (i === n) return Sm(s), t;
          if (i === r) return Sm(s), e;
          i = i.sibling;
        }
        throw Error(A(188));
      }
      if (n.return !== r.return) (n = s), (r = i);
      else {
        for (var o = !1, a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = i.child; a; ) {
            if (a === n) {
              (o = !0), (n = i), (r = s);
              break;
            }
            if (a === r) {
              (o = !0), (r = i), (n = s);
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(A(189));
        }
      }
      if (n.alternate !== r) throw Error(A(190));
    }
    if (n.tag !== 3) throw Error(A(188));
    return n.stateNode.current === n ? t : e;
  }
  function km(t) {
    return (t = uS(t)), t !== null ? Em(t) : null;
  }
  function Em(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var e = Em(t);
      if (e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var Am = yt.unstable_scheduleCallback,
    Tm = yt.unstable_cancelCallback,
    cS = yt.unstable_shouldYield,
    dS = yt.unstable_requestPaint,
    Ce = yt.unstable_now,
    hS = yt.unstable_getCurrentPriorityLevel,
    jc = yt.unstable_ImmediatePriority,
    Pm = yt.unstable_UserBlockingPriority,
    Ma = yt.unstable_NormalPriority,
    fS = yt.unstable_LowPriority,
    Cm = yt.unstable_IdlePriority,
    La = null,
    Yt = null;
  function pS(t) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function")
      try {
        Yt.onCommitFiberRoot(La, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : yS,
    mS = Math.log,
    gS = Math.LN2;
  function yS(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((mS(t) / gS) | 0)) | 0;
  }
  var Ia = 64,
    ja = 4194304;
  function $i(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Da(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      s = t.suspendedLanes,
      i = t.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~s;
      a !== 0 ? (r = $i(a)) : ((i &= o), i !== 0 && (r = $i(i)));
    } else (o = n & ~s), o !== 0 ? (r = $i(o)) : i !== 0 && (r = $i(i));
    if (r === 0) return 0;
    if (
      e !== 0 &&
      e !== r &&
      !(e & s) &&
      ((s = r & -r), (i = e & -e), s >= i || (s === 16 && (i & 4194240) !== 0))
    )
      return e;
    if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
      for (t = t.entanglements, e &= r; 0 < e; )
        (n = 31 - $t(e)), (s = 1 << n), (r |= t[n]), (e &= ~s);
    return r;
  }
  function vS(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return e + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wS(t, e) {
    for (
      var n = t.suspendedLanes,
        r = t.pingedLanes,
        s = t.expirationTimes,
        i = t.pendingLanes;
      0 < i;

    ) {
      var o = 31 - $t(i),
        a = 1 << o,
        l = s[o];
      l === -1
        ? (!(a & n) || a & r) && (s[o] = vS(a, e))
        : l <= e && (t.expiredLanes |= a),
        (i &= ~a);
    }
  }
  function Dc(t) {
    return (
      (t = t.pendingLanes & -1073741825),
      t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
    );
  }
  function Rm() {
    var t = Ia;
    return (Ia <<= 1), !(Ia & 4194240) && (Ia = 64), t;
  }
  function $c(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Fi(t, e, n) {
    (t.pendingLanes |= e),
      e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
      (t = t.eventTimes),
      (e = 31 - $t(e)),
      (t[e] = n);
  }
  function _S(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.expiredLanes &= e),
      (t.mutableReadLanes &= e),
      (t.entangledLanes &= e),
      (e = t.entanglements);
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
      var s = 31 - $t(n),
        i = 1 << s;
      (e[s] = 0), (r[s] = -1), (t[s] = -1), (n &= ~i);
    }
  }
  function Fc(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var r = 31 - $t(n),
        s = 1 << r;
      (s & e) | (t[r] & e) && (t[r] |= e), (n &= ~s);
    }
  }
  var ue = 0;
  function Nm(t) {
    return (
      (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Om,
    Vc,
    Mm,
    Lm,
    Im,
    Uc = !1,
    $a = [],
    Un = null,
    Bn = null,
    zn = null,
    Vi = new Map(),
    Ui = new Map(),
    Wn = [],
    bS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function jm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        Bn = null;
        break;
      case "mouseover":
      case "mouseout":
        zn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ui.delete(e.pointerId);
    }
  }
  function Bi(t, e, n, r, s, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [s],
        }),
        e !== null && ((e = no(e)), e !== null && Vc(e)),
        t)
      : ((t.eventSystemFlags |= r),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function xS(t, e, n, r, s) {
    switch (e) {
      case "focusin":
        return (Un = Bi(Un, t, e, n, r, s)), !0;
      case "dragenter":
        return (Bn = Bi(Bn, t, e, n, r, s)), !0;
      case "mouseover":
        return (zn = Bi(zn, t, e, n, r, s)), !0;
      case "pointerover":
        var i = s.pointerId;
        return Vi.set(i, Bi(Vi.get(i) || null, t, e, n, r, s)), !0;
      case "gotpointercapture":
        return (
          (i = s.pointerId), Ui.set(i, Bi(Ui.get(i) || null, t, e, n, r, s)), !0
        );
    }
    return !1;
  }
  function Dm(t) {
    var e = Ir(t.target);
    if (e !== null) {
      var n = Lr(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = xm(n)), e !== null)) {
            (t.blockedOn = e),
              Im(t.priority, function () {
                Mm(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fa(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = zc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Rc = r), n.target.dispatchEvent(r), (Rc = null);
      } else return (e = no(n)), e !== null && Vc(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function $m(t, e, n) {
    Fa(t) && n.delete(e);
  }
  function SS() {
    (Uc = !1),
      Un !== null && Fa(Un) && (Un = null),
      Bn !== null && Fa(Bn) && (Bn = null),
      zn !== null && Fa(zn) && (zn = null),
      Vi.forEach($m),
      Ui.forEach($m);
  }
  function zi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Uc ||
        ((Uc = !0),
        yt.unstable_scheduleCallback(yt.unstable_NormalPriority, SS)));
  }
  function Wi(t) {
    function e(s) {
      return zi(s, t);
    }
    if (0 < $a.length) {
      zi($a[0], t);
      for (var n = 1; n < $a.length; n++) {
        var r = $a[n];
        r.blockedOn === t && (r.blockedOn = null);
      }
    }
    for (
      Un !== null && zi(Un, t),
        Bn !== null && zi(Bn, t),
        zn !== null && zi(zn, t),
        Vi.forEach(e),
        Ui.forEach(e),
        n = 0;
      n < Wn.length;
      n++
    )
      (r = Wn[n]), r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
      Dm(n), n.blockedOn === null && Wn.shift();
  }
  var _s = vn.ReactCurrentBatchConfig,
    Va = !0;
  function kS(t, e, n, r) {
    var s = ue,
      i = _s.transition;
    _s.transition = null;
    try {
      (ue = 1), Bc(t, e, n, r);
    } finally {
      (ue = s), (_s.transition = i);
    }
  }
  function ES(t, e, n, r) {
    var s = ue,
      i = _s.transition;
    _s.transition = null;
    try {
      (ue = 4), Bc(t, e, n, r);
    } finally {
      (ue = s), (_s.transition = i);
    }
  }
  function Bc(t, e, n, r) {
    if (Va) {
      var s = zc(t, e, n, r);
      if (s === null) od(t, e, r, Ua, n), jm(t, r);
      else if (xS(s, t, e, n, r)) r.stopPropagation();
      else if ((jm(t, r), e & 4 && -1 < bS.indexOf(t))) {
        for (; s !== null; ) {
          var i = no(s);
          if (
            (i !== null && Om(i),
            (i = zc(t, e, n, r)),
            i === null && od(t, e, r, Ua, n),
            i === s)
          )
            break;
          s = i;
        }
        s !== null && r.stopPropagation();
      } else od(t, e, r, null, n);
    }
  }
  var Ua = null;
  function zc(t, e, n, r) {
    if (((Ua = null), (t = Nc(r)), (t = Ir(t)), t !== null))
      if (((e = Lr(t)), e === null)) t = null;
      else if (((n = e.tag), n === 13)) {
        if (((t = xm(e)), t !== null)) return t;
        t = null;
      } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated)
          return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null;
      } else e !== t && (t = null);
    return (Ua = t), null;
  }
  function Fm(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hS()) {
          case jc:
            return 1;
          case Pm:
            return 4;
          case Ma:
          case fS:
            return 16;
          case Cm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hn = null,
    Wc = null,
    Ba = null;
  function Vm() {
    if (Ba) return Ba;
    var t,
      e = Wc,
      n = e.length,
      r,
      s = "value" in Hn ? Hn.value : Hn.textContent,
      i = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === s[i - r]; r++);
    return (Ba = s.slice(t, 1 < r ? 1 - r : void 0));
  }
  function za(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wa() {
    return !0;
  }
  function Um() {
    return !1;
  }
  function vt(t) {
    function e(n, r, s, i, o) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var a in t)
        t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(i) : i[a]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Wa
          : Um),
        (this.isPropagationStopped = Um),
        this
      );
    }
    return (
      _e(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wa));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wa));
        },
        persist: function () {},
        isPersistent: Wa,
      }),
      e
    );
  }
  var bs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hc = vt(bs),
    Hi = _e({}, bs, { view: 0, detail: 0 }),
    AS = vt(Hi),
    Gc,
    qc,
    Gi,
    Ha = _e({}, Hi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Gi &&
              (Gi && t.type === "mousemove"
                ? ((Gc = t.screenX - Gi.screenX), (qc = t.screenY - Gi.screenY))
                : (qc = Gc = 0),
              (Gi = t)),
            Gc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : qc;
      },
    }),
    Bm = vt(Ha),
    TS = _e({}, Ha, { dataTransfer: 0 }),
    PS = vt(TS),
    CS = _e({}, Hi, { relatedTarget: 0 }),
    Kc = vt(CS),
    RS = _e({}, bs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    NS = vt(RS),
    OS = _e({}, bs, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    MS = vt(OS),
    LS = _e({}, bs, { data: 0 }),
    zm = vt(LS),
    IS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    jS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    DS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $S(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = DS[t])
        ? !!e[t]
        : !1;
  }
  function Zc() {
    return $S;
  }
  var FS = _e({}, Hi, {
      key: function (t) {
        if (t.key) {
          var e = IS[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = za(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? jS[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zc,
      charCode: function (t) {
        return t.type === "keypress" ? za(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? za(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    VS = vt(FS),
    US = _e({}, Ha, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wm = vt(US),
    BS = _e({}, Hi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zc,
    }),
    zS = vt(BS),
    WS = _e({}, bs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    HS = vt(WS),
    GS = _e({}, Ha, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qS = vt(GS),
    KS = [9, 13, 27, 32],
    Qc = yn && "CompositionEvent" in window,
    qi = null;
  yn && "documentMode" in document && (qi = document.documentMode);
  var ZS = yn && "TextEvent" in window && !qi,
    Hm = yn && (!Qc || (qi && 8 < qi && 11 >= qi)),
    Gm = " ",
    qm = !1;
  function Km(t, e) {
    switch (t) {
      case "keyup":
        return KS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zm(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var xs = !1;
  function QS(t, e) {
    switch (t) {
      case "compositionend":
        return Zm(e);
      case "keypress":
        return e.which !== 32 ? null : ((qm = !0), Gm);
      case "textInput":
        return (t = e.data), t === Gm && qm ? null : t;
      default:
        return null;
    }
  }
  function XS(t, e) {
    if (xs)
      return t === "compositionend" || (!Qc && Km(t, e))
        ? ((t = Vm()), (Ba = Wc = Hn = null), (xs = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Hm && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var JS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!JS[t.type] : e === "textarea";
  }
  function Xm(t, e, n, r) {
    ym(r),
      (e = Qa(e, "onChange")),
      0 < e.length &&
        ((n = new Hc("onChange", "change", null, n, r)),
        t.push({ event: n, listeners: e }));
  }
  var Ki = null,
    Zi = null;
  function YS(t) {
    mg(t, 0);
  }
  function Ga(t) {
    var e = Ts(t);
    if (im(e)) return t;
  }
  function e1(t, e) {
    if (t === "change") return e;
  }
  var Jm = !1;
  if (yn) {
    var Xc;
    if (yn) {
      var Jc = "oninput" in document;
      if (!Jc) {
        var Ym = document.createElement("div");
        Ym.setAttribute("oninput", "return;"),
          (Jc = typeof Ym.oninput == "function");
      }
      Xc = Jc;
    } else Xc = !1;
    Jm = Xc && (!document.documentMode || 9 < document.documentMode);
  }
  function eg() {
    Ki && (Ki.detachEvent("onpropertychange", tg), (Zi = Ki = null));
  }
  function tg(t) {
    if (t.propertyName === "value" && Ga(Zi)) {
      var e = [];
      Xm(e, Zi, t, Nc(t)), bm(YS, e);
    }
  }
  function t1(t, e, n) {
    t === "focusin"
      ? (eg(), (Ki = e), (Zi = n), Ki.attachEvent("onpropertychange", tg))
      : t === "focusout" && eg();
  }
  function n1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ga(Zi);
  }
  function r1(t, e) {
    if (t === "click") return Ga(e);
  }
  function s1(t, e) {
    if (t === "input" || t === "change") return Ga(e);
  }
  function i1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ft = typeof Object.is == "function" ? Object.is : i1;
  function Qi(t, e) {
    if (Ft(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!uc.call(e, s) || !Ft(t[s], e[s])) return !1;
    }
    return !0;
  }
  function ng(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function rg(t, e) {
    var n = ng(t);
    t = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = t + n.textContent.length), t <= e && r >= e))
          return { node: n, offset: e - t };
        t = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ng(n);
    }
  }
  function sg(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? sg(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function ig() {
    for (var t = window, e = Ca(); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ca(t.document);
    }
    return e;
  }
  function Yc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function o1(t) {
    var e = ig(),
      n = t.focusedElem,
      r = t.selectionRange;
    if (
      e !== n &&
      n &&
      n.ownerDocument &&
      sg(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Yc(n)) {
        if (
          ((e = r.start),
          (t = r.end),
          t === void 0 && (t = e),
          "selectionStart" in n)
        )
          (n.selectionStart = e),
            (n.selectionEnd = Math.min(t, n.value.length));
        else if (
          ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
          t.getSelection)
        ) {
          t = t.getSelection();
          var s = n.textContent.length,
            i = Math.min(r.start, s);
          (r = r.end === void 0 ? i : Math.min(r.end, s)),
            !t.extend && i > r && ((s = r), (r = i), (i = s)),
            (s = rg(n, i));
          var o = rg(n, r);
          s &&
            o &&
            (t.rangeCount !== 1 ||
              t.anchorNode !== s.node ||
              t.anchorOffset !== s.offset ||
              t.focusNode !== o.node ||
              t.focusOffset !== o.offset) &&
            ((e = e.createRange()),
            e.setStart(s.node, s.offset),
            t.removeAllRanges(),
            i > r
              ? (t.addRange(e), t.extend(o.node, o.offset))
              : (e.setEnd(o.node, o.offset), t.addRange(e)));
        }
      }
      for (e = [], t = n; (t = t.parentNode); )
        t.nodeType === 1 &&
          e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
        (t = e[n]),
          (t.element.scrollLeft = t.left),
          (t.element.scrollTop = t.top);
    }
  }
  var a1 = yn && "documentMode" in document && 11 >= document.documentMode,
    Ss = null,
    ed = null,
    Xi = null,
    td = !1;
  function og(t, e, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    td ||
      Ss == null ||
      Ss !== Ca(r) ||
      ((r = Ss),
      "selectionStart" in r && Yc(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Xi && Qi(Xi, r)) ||
        ((Xi = r),
        (r = Qa(ed, "onSelect")),
        0 < r.length &&
          ((e = new Hc("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: r }),
          (e.target = Ss))));
  }
  function qa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var ks = {
      animationend: qa("Animation", "AnimationEnd"),
      animationiteration: qa("Animation", "AnimationIteration"),
      animationstart: qa("Animation", "AnimationStart"),
      transitionend: qa("Transition", "TransitionEnd"),
    },
    nd = {},
    ag = {};
  yn &&
    ((ag = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ks.animationend.animation,
      delete ks.animationiteration.animation,
      delete ks.animationstart.animation),
    "TransitionEvent" in window || delete ks.transitionend.transition);
  function Ka(t) {
    if (nd[t]) return nd[t];
    if (!ks[t]) return t;
    var e = ks[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ag) return (nd[t] = e[n]);
    return t;
  }
  var lg = Ka("animationend"),
    ug = Ka("animationiteration"),
    cg = Ka("animationstart"),
    dg = Ka("transitionend"),
    hg = new Map(),
    fg =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Gn(t, e) {
    hg.set(t, e), Mr(e, [t]);
  }
  for (var rd = 0; rd < fg.length; rd++) {
    var sd = fg[rd],
      l1 = sd.toLowerCase(),
      u1 = sd[0].toUpperCase() + sd.slice(1);
    Gn(l1, "on" + u1);
  }
  Gn(lg, "onAnimationEnd"),
    Gn(ug, "onAnimationIteration"),
    Gn(cg, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(dg, "onTransitionEnd"),
    ps("onMouseEnter", ["mouseout", "mouseover"]),
    ps("onMouseLeave", ["mouseout", "mouseover"]),
    ps("onPointerEnter", ["pointerout", "pointerover"]),
    ps("onPointerLeave", ["pointerout", "pointerover"]),
    Mr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Mr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Mr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Mr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Mr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Ji =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    c1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ji),
    );
  function pg(t, e, n) {
    var r = t.type || "unknown-event";
    (t.currentTarget = n), lS(r, e, void 0, t), (t.currentTarget = null);
  }
  function mg(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var r = t[n],
        s = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (e)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              l = a.instance,
              u = a.currentTarget;
            if (((a = a.listener), l !== i && s.isPropagationStopped()))
              break e;
            pg(s, a, u), (i = l);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== i && s.isPropagationStopped())
            )
              break e;
            pg(s, a, u), (i = l);
          }
      }
    }
    if (Oa) throw ((t = Ic), (Oa = !1), (Ic = null), t);
  }
  function me(t, e) {
    var n = e[hd];
    n === void 0 && (n = e[hd] = new Set());
    var r = t + "__bubble";
    n.has(r) || (gg(e, t, 2, !1), n.add(r));
  }
  function id(t, e, n) {
    var r = 0;
    e && (r |= 4), gg(n, t, r, e);
  }
  var Za = "_reactListening" + Math.random().toString(36).slice(2);
  function Yi(t) {
    if (!t[Za]) {
      (t[Za] = !0),
        Xp.forEach(function (n) {
          n !== "selectionchange" && (c1.has(n) || id(n, !1, t), id(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Za] || ((e[Za] = !0), id("selectionchange", !1, e));
    }
  }
  function gg(t, e, n, r) {
    switch (Fm(e)) {
      case 1:
        var s = kS;
        break;
      case 4:
        s = ES;
        break;
      default:
        s = Bc;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !Lc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      r
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1);
  }
  function od(t, e, n, r, s) {
    var i = r;
    if (!(e & 1) && !(e & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var l = o.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = o.stateNode.containerInfo),
                l === s || (l.nodeType === 8 && l.parentNode === s))
              )
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (((o = Ir(a)), o === null)) return;
            if (((l = o.tag), l === 5 || l === 6)) {
              r = i = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    bm(function () {
      var u = i,
        c = Nc(n),
        d = [];
      e: {
        var h = hg.get(t);
        if (h !== void 0) {
          var p = Hc,
            v = t;
          switch (t) {
            case "keypress":
              if (za(n) === 0) break e;
            case "keydown":
            case "keyup":
              p = VS;
              break;
            case "focusin":
              (v = "focus"), (p = Kc);
              break;
            case "focusout":
              (v = "blur"), (p = Kc);
              break;
            case "beforeblur":
            case "afterblur":
              p = Kc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Bm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = PS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = zS;
              break;
            case lg:
            case ug:
            case cg:
              p = NS;
              break;
            case dg:
              p = HS;
              break;
            case "scroll":
              p = AS;
              break;
            case "wheel":
              p = qS;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = MS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Wm;
          }
          var g = (e & 4) !== 0,
            w = !g && t === "scroll",
            m = g ? (h !== null ? h + "Capture" : null) : h;
          g = [];
          for (var f = u, y; f !== null; ) {
            y = f;
            var _ = y.stateNode;
            if (
              (y.tag === 5 &&
                _ !== null &&
                ((y = _),
                m !== null &&
                  ((_ = Ii(f, m)), _ != null && g.push(eo(f, _, y)))),
              w)
            )
              break;
            f = f.return;
          }
          0 < g.length &&
            ((h = new p(h, v, null, n, c)), d.push({ event: h, listeners: g }));
        }
      }
      if (!(e & 7)) {
        e: {
          if (
            ((h = t === "mouseover" || t === "pointerover"),
            (p = t === "mouseout" || t === "pointerout"),
            h &&
              n !== Rc &&
              (v = n.relatedTarget || n.fromElement) &&
              (Ir(v) || v[wn]))
          )
            break e;
          if (
            (p || h) &&
            ((h =
              c.window === c
                ? c
                : (h = c.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            p
              ? ((v = n.relatedTarget || n.toElement),
                (p = u),
                (v = v ? Ir(v) : null),
                v !== null &&
                  ((w = Lr(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                  (v = null))
              : ((p = null), (v = u)),
            p !== v)
          ) {
            if (
              ((g = Bm),
              (_ = "onMouseLeave"),
              (m = "onMouseEnter"),
              (f = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((g = Wm),
                (_ = "onPointerLeave"),
                (m = "onPointerEnter"),
                (f = "pointer")),
              (w = p == null ? h : Ts(p)),
              (y = v == null ? h : Ts(v)),
              (h = new g(_, f + "leave", p, n, c)),
              (h.target = w),
              (h.relatedTarget = y),
              (_ = null),
              Ir(c) === u &&
                ((g = new g(m, f + "enter", v, n, c)),
                (g.target = y),
                (g.relatedTarget = w),
                (_ = g)),
              (w = _),
              p && v)
            )
              t: {
                for (g = p, m = v, f = 0, y = g; y; y = Es(y)) f++;
                for (y = 0, _ = m; _; _ = Es(_)) y++;
                for (; 0 < f - y; ) (g = Es(g)), f--;
                for (; 0 < y - f; ) (m = Es(m)), y--;
                for (; f--; ) {
                  if (g === m || (m !== null && g === m.alternate)) break t;
                  (g = Es(g)), (m = Es(m));
                }
                g = null;
              }
            else g = null;
            p !== null && yg(d, h, p, g, !1),
              v !== null && w !== null && yg(d, w, v, g, !0);
          }
        }
        e: {
          if (
            ((h = u ? Ts(u) : window),
            (p = h.nodeName && h.nodeName.toLowerCase()),
            p === "select" || (p === "input" && h.type === "file"))
          )
            var S = e1;
          else if (Qm(h))
            if (Jm) S = s1;
            else {
              S = n1;
              var b = t1;
            }
          else
            (p = h.nodeName) &&
              p.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (S = r1);
          if (S && (S = S(t, u))) {
            Xm(d, S, n, c);
            break e;
          }
          b && b(t, h, u),
            t === "focusout" &&
              (b = h._wrapperState) &&
              b.controlled &&
              h.type === "number" &&
              Ec(h, "number", h.value);
        }
        switch (((b = u ? Ts(u) : window), t)) {
          case "focusin":
            (Qm(b) || b.contentEditable === "true") &&
              ((Ss = b), (ed = u), (Xi = null));
            break;
          case "focusout":
            Xi = ed = Ss = null;
            break;
          case "mousedown":
            td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (td = !1), og(d, n, c);
            break;
          case "selectionchange":
            if (a1) break;
          case "keydown":
          case "keyup":
            og(d, n, c);
        }
        var k;
        if (Qc)
          e: {
            switch (t) {
              case "compositionstart":
                var x = "onCompositionStart";
                break e;
              case "compositionend":
                x = "onCompositionEnd";
                break e;
              case "compositionupdate":
                x = "onCompositionUpdate";
                break e;
            }
            x = void 0;
          }
        else
          xs
            ? Km(t, n) && (x = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (x = "onCompositionStart");
        x &&
          (Hm &&
            n.locale !== "ko" &&
            (xs || x !== "onCompositionStart"
              ? x === "onCompositionEnd" && xs && (k = Vm())
              : ((Hn = c),
                (Wc = "value" in Hn ? Hn.value : Hn.textContent),
                (xs = !0))),
          (b = Qa(u, x)),
          0 < b.length &&
            ((x = new zm(x, t, null, n, c)),
            d.push({ event: x, listeners: b }),
            k ? (x.data = k) : ((k = Zm(n)), k !== null && (x.data = k)))),
          (k = ZS ? QS(t, n) : XS(t, n)) &&
            ((u = Qa(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new zm("onBeforeInput", "beforeinput", null, n, c)),
              d.push({ event: c, listeners: u }),
              (c.data = k)));
      }
      mg(d, e);
    });
  }
  function eo(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Qa(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
      var s = t,
        i = s.stateNode;
      s.tag === 5 &&
        i !== null &&
        ((s = i),
        (i = Ii(t, n)),
        i != null && r.unshift(eo(t, i, s)),
        (i = Ii(t, e)),
        i != null && r.push(eo(t, i, s))),
        (t = t.return);
    }
    return r;
  }
  function Es(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function yg(t, e, n, r, s) {
    for (var i = e._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        u = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        s
          ? ((l = Ii(n, i)), l != null && o.unshift(eo(n, l, a)))
          : s || ((l = Ii(n, i)), l != null && o.push(eo(n, l, a)))),
        (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var d1 = /\r\n?/g,
    h1 = /\u0000|\uFFFD/g;
  function vg(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        d1,
        `
`,
      )
      .replace(h1, "");
  }
  function Xa(t, e, n) {
    if (((e = vg(e)), vg(t) !== e && n)) throw Error(A(425));
  }
  function Ja() {}
  var ad = null,
    ld = null;
  function ud(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cd = typeof setTimeout == "function" ? setTimeout : void 0,
    f1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    wg = typeof Promise == "function" ? Promise : void 0,
    p1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof wg < "u"
          ? function (t) {
              return wg.resolve(null).then(t).catch(m1);
            }
          : cd;
  function m1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function dd(t, e) {
    var n = e,
      r = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$")) {
          if (r === 0) {
            t.removeChild(s), Wi(e);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = s;
    } while (n);
    Wi(e);
  }
  function qn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function _g(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var As = Math.random().toString(36).slice(2),
    en = "__reactFiber$" + As,
    to = "__reactProps$" + As,
    wn = "__reactContainer$" + As,
    hd = "__reactEvents$" + As,
    g1 = "__reactListeners$" + As,
    y1 = "__reactHandles$" + As;
  function Ir(t) {
    var e = t[en];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[wn] || n[en])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = _g(t); t !== null; ) {
            if ((n = t[en])) return n;
            t = _g(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function no(t) {
    return (
      (t = t[en] || t[wn]),
      !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3)
        ? null
        : t
    );
  }
  function Ts(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(A(33));
  }
  function Ya(t) {
    return t[to] || null;
  }
  var fd = [],
    Ps = -1;
  function Kn(t) {
    return { current: t };
  }
  function ge(t) {
    0 > Ps || ((t.current = fd[Ps]), (fd[Ps] = null), Ps--);
  }
  function he(t, e) {
    Ps++, (fd[Ps] = t.current), (t.current = e);
  }
  var Zn = {},
    ze = Kn(Zn),
    at = Kn(!1),
    jr = Zn;
  function Cs(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Zn;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
      return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      i;
    for (i in n) s[i] = e[i];
    return (
      r &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = e),
        (t.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function lt(t) {
    return (t = t.childContextTypes), t != null;
  }
  function el() {
    ge(at), ge(ze);
  }
  function bg(t, e, n) {
    if (ze.current !== Zn) throw Error(A(168));
    he(ze, e), he(at, n);
  }
  function xg(t, e, n) {
    var r = t.stateNode;
    if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in e)) throw Error(A(108, tS(t) || "Unknown", s));
    return _e({}, n, r);
  }
  function tl(t) {
    return (
      (t =
        ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) ||
        Zn),
      (jr = ze.current),
      he(ze, t),
      he(at, at.current),
      !0
    );
  }
  function Sg(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(A(169));
    n
      ? ((t = xg(t, e, jr)),
        (r.__reactInternalMemoizedMergedChildContext = t),
        ge(at),
        ge(ze),
        he(ze, t))
      : ge(at),
      he(at, n);
  }
  var _n = null,
    nl = !1,
    pd = !1;
  function kg(t) {
    _n === null ? (_n = [t]) : _n.push(t);
  }
  function v1(t) {
    (nl = !0), kg(t);
  }
  function Qn() {
    if (!pd && _n !== null) {
      pd = !0;
      var t = 0,
        e = ue;
      try {
        var n = _n;
        for (ue = 1; t < n.length; t++) {
          var r = n[t];
          do r = r(!0);
          while (r !== null);
        }
        (_n = null), (nl = !1);
      } catch (s) {
        throw (_n !== null && (_n = _n.slice(t + 1)), Am(jc, Qn), s);
      } finally {
        (ue = e), (pd = !1);
      }
    }
    return null;
  }
  var Rs = [],
    Ns = 0,
    rl = null,
    sl = 0,
    At = [],
    Tt = 0,
    Dr = null,
    bn = 1,
    xn = "";
  function $r(t, e) {
    (Rs[Ns++] = sl), (Rs[Ns++] = rl), (rl = t), (sl = e);
  }
  function Eg(t, e, n) {
    (At[Tt++] = bn), (At[Tt++] = xn), (At[Tt++] = Dr), (Dr = t);
    var r = bn;
    t = xn;
    var s = 32 - $t(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var i = 32 - $t(e) + s;
    if (30 < i) {
      var o = s - (s % 5);
      (i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (s -= o),
        (bn = (1 << (32 - $t(e) + s)) | (n << s) | r),
        (xn = i + t);
    } else (bn = (1 << i) | (n << s) | r), (xn = t);
  }
  function md(t) {
    t.return !== null && ($r(t, 1), Eg(t, 1, 0));
  }
  function gd(t) {
    for (; t === rl; )
      (rl = Rs[--Ns]), (Rs[Ns] = null), (sl = Rs[--Ns]), (Rs[Ns] = null);
    for (; t === Dr; )
      (Dr = At[--Tt]),
        (At[Tt] = null),
        (xn = At[--Tt]),
        (At[Tt] = null),
        (bn = At[--Tt]),
        (At[Tt] = null);
  }
  var wt = null,
    _t = null,
    we = !1,
    Vt = null;
  function Ag(t, e) {
    var n = Nt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = e),
      (n.return = t),
      (e = t.deletions),
      e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
  }
  function Tg(t, e) {
    switch (t.tag) {
      case 5:
        var n = t.type;
        return (
          (e =
            e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
              ? null
              : e),
          e !== null
            ? ((t.stateNode = e), (wt = t), (_t = qn(e.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
          e !== null ? ((t.stateNode = e), (wt = t), (_t = null), !0) : !1
        );
      case 13:
        return (
          (e = e.nodeType !== 8 ? null : e),
          e !== null
            ? ((n = Dr !== null ? { id: bn, overflow: xn } : null),
              (t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Nt(18, null, null, 0)),
              (n.stateNode = e),
              (n.return = t),
              (t.child = n),
              (wt = t),
              (_t = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function yd(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function vd(t) {
    if (we) {
      var e = _t;
      if (e) {
        var n = e;
        if (!Tg(t, e)) {
          if (yd(t)) throw Error(A(418));
          e = qn(n.nextSibling);
          var r = wt;
          e && Tg(t, e)
            ? Ag(r, n)
            : ((t.flags = (t.flags & -4097) | 2), (we = !1), (wt = t));
        }
      } else {
        if (yd(t)) throw Error(A(418));
        (t.flags = (t.flags & -4097) | 2), (we = !1), (wt = t);
      }
    }
  }
  function Pg(t) {
    for (
      t = t.return;
      t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;

    )
      t = t.return;
    wt = t;
  }
  function il(t) {
    if (t !== wt) return !1;
    if (!we) return Pg(t), (we = !0), !1;
    var e;
    if (
      ((e = t.tag !== 3) &&
        !(e = t.tag !== 5) &&
        ((e = t.type),
        (e = e !== "head" && e !== "body" && !ud(t.type, t.memoizedProps))),
      e && (e = _t))
    ) {
      if (yd(t)) throw (Cg(), Error(A(418)));
      for (; e; ) Ag(t, e), (e = qn(e.nextSibling));
    }
    if ((Pg(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(A(317));
      e: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) {
            var n = t.data;
            if (n === "/$") {
              if (e === 0) {
                _t = qn(t.nextSibling);
                break e;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          }
          t = t.nextSibling;
        }
        _t = null;
      }
    } else _t = wt ? qn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Cg() {
    for (var t = _t; t; ) t = qn(t.nextSibling);
  }
  function Os() {
    (_t = wt = null), (we = !1);
  }
  function wd(t) {
    Vt === null ? (Vt = [t]) : Vt.push(t);
  }
  var w1 = vn.ReactCurrentBatchConfig;
  function ro(t, e, n) {
    if (
      ((t = n.ref),
      t !== null && typeof t != "function" && typeof t != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(A(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(A(147, t));
        var s = r,
          i = "" + t;
        return e !== null &&
          e.ref !== null &&
          typeof e.ref == "function" &&
          e.ref._stringRef === i
          ? e.ref
          : ((e = function (o) {
              var a = s.refs;
              o === null ? delete a[i] : (a[i] = o);
            }),
            (e._stringRef = i),
            e);
      }
      if (typeof t != "string") throw Error(A(284));
      if (!n._owner) throw Error(A(290, t));
    }
    return t;
  }
  function ol(t, e) {
    throw (
      ((t = Object.prototype.toString.call(e)),
      Error(
        A(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t,
        ),
      ))
    );
  }
  function Rg(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Ng(t) {
    function e(m, f) {
      if (t) {
        var y = m.deletions;
        y === null ? ((m.deletions = [f]), (m.flags |= 16)) : y.push(f);
      }
    }
    function n(m, f) {
      if (!t) return null;
      for (; f !== null; ) e(m, f), (f = f.sibling);
      return null;
    }
    function r(m, f) {
      for (m = new Map(); f !== null; )
        f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
      return m;
    }
    function s(m, f) {
      return (m = sr(m, f)), (m.index = 0), (m.sibling = null), m;
    }
    function i(m, f, y) {
      return (
        (m.index = y),
        t
          ? ((y = m.alternate),
            y !== null
              ? ((y = y.index), y < f ? ((m.flags |= 2), f) : y)
              : ((m.flags |= 2), f))
          : ((m.flags |= 1048576), f)
      );
    }
    function o(m) {
      return t && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, f, y, _) {
      return f === null || f.tag !== 6
        ? ((f = ch(y, m.mode, _)), (f.return = m), f)
        : ((f = s(f, y)), (f.return = m), f);
    }
    function l(m, f, y, _) {
      var S = y.type;
      return S === gs
        ? c(m, f, y.props.children, _, y.key)
        : f !== null &&
            (f.elementType === S ||
              (typeof S == "object" &&
                S !== null &&
                S.$$typeof === Fn &&
                Rg(S) === f.type))
          ? ((_ = s(f, y.props)), (_.ref = ro(m, f, y)), (_.return = m), _)
          : ((_ = Rl(y.type, y.key, y.props, null, m.mode, _)),
            (_.ref = ro(m, f, y)),
            (_.return = m),
            _);
    }
    function u(m, f, y, _) {
      return f === null ||
        f.tag !== 4 ||
        f.stateNode.containerInfo !== y.containerInfo ||
        f.stateNode.implementation !== y.implementation
        ? ((f = dh(y, m.mode, _)), (f.return = m), f)
        : ((f = s(f, y.children || [])), (f.return = m), f);
    }
    function c(m, f, y, _, S) {
      return f === null || f.tag !== 7
        ? ((f = Gr(y, m.mode, _, S)), (f.return = m), f)
        : ((f = s(f, y)), (f.return = m), f);
    }
    function d(m, f, y) {
      if ((typeof f == "string" && f !== "") || typeof f == "number")
        return (f = ch("" + f, m.mode, y)), (f.return = m), f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case Ta:
            return (
              (y = Rl(f.type, f.key, f.props, null, m.mode, y)),
              (y.ref = ro(m, null, f)),
              (y.return = m),
              y
            );
          case ms:
            return (f = dh(f, m.mode, y)), (f.return = m), f;
          case Fn:
            var _ = f._init;
            return d(m, _(f._payload), y);
        }
        if (Oi(f) || Ri(f))
          return (f = Gr(f, m.mode, y, null)), (f.return = m), f;
        ol(m, f);
      }
      return null;
    }
    function h(m, f, y, _) {
      var S = f !== null ? f.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return S !== null ? null : a(m, f, "" + y, _);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Ta:
            return y.key === S ? l(m, f, y, _) : null;
          case ms:
            return y.key === S ? u(m, f, y, _) : null;
          case Fn:
            return (S = y._init), h(m, f, S(y._payload), _);
        }
        if (Oi(y) || Ri(y)) return S !== null ? null : c(m, f, y, _, null);
        ol(m, y);
      }
      return null;
    }
    function p(m, f, y, _, S) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return (m = m.get(y) || null), a(f, m, "" + _, S);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Ta:
            return (
              (m = m.get(_.key === null ? y : _.key) || null), l(f, m, _, S)
            );
          case ms:
            return (
              (m = m.get(_.key === null ? y : _.key) || null), u(f, m, _, S)
            );
          case Fn:
            var b = _._init;
            return p(m, f, y, b(_._payload), S);
        }
        if (Oi(_) || Ri(_)) return (m = m.get(y) || null), c(f, m, _, S, null);
        ol(f, _);
      }
      return null;
    }
    function v(m, f, y, _) {
      for (
        var S = null, b = null, k = f, x = (f = 0), R = null;
        k !== null && x < y.length;
        x++
      ) {
        k.index > x ? ((R = k), (k = null)) : (R = k.sibling);
        var N = h(m, k, y[x], _);
        if (N === null) {
          k === null && (k = R);
          break;
        }
        t && k && N.alternate === null && e(m, k),
          (f = i(N, f, x)),
          b === null ? (S = N) : (b.sibling = N),
          (b = N),
          (k = R);
      }
      if (x === y.length) return n(m, k), we && $r(m, x), S;
      if (k === null) {
        for (; x < y.length; x++)
          (k = d(m, y[x], _)),
            k !== null &&
              ((f = i(k, f, x)),
              b === null ? (S = k) : (b.sibling = k),
              (b = k));
        return we && $r(m, x), S;
      }
      for (k = r(m, k); x < y.length; x++)
        (R = p(k, m, x, y[x], _)),
          R !== null &&
            (t && R.alternate !== null && k.delete(R.key === null ? x : R.key),
            (f = i(R, f, x)),
            b === null ? (S = R) : (b.sibling = R),
            (b = R));
      return (
        t &&
          k.forEach(function (Z) {
            return e(m, Z);
          }),
        we && $r(m, x),
        S
      );
    }
    function g(m, f, y, _) {
      var S = Ri(y);
      if (typeof S != "function") throw Error(A(150));
      if (((y = S.call(y)), y == null)) throw Error(A(151));
      for (
        var b = (S = null), k = f, x = (f = 0), R = null, N = y.next();
        k !== null && !N.done;
        x++, N = y.next()
      ) {
        k.index > x ? ((R = k), (k = null)) : (R = k.sibling);
        var Z = h(m, k, N.value, _);
        if (Z === null) {
          k === null && (k = R);
          break;
        }
        t && k && Z.alternate === null && e(m, k),
          (f = i(Z, f, x)),
          b === null ? (S = Z) : (b.sibling = Z),
          (b = Z),
          (k = R);
      }
      if (N.done) return n(m, k), we && $r(m, x), S;
      if (k === null) {
        for (; !N.done; x++, N = y.next())
          (N = d(m, N.value, _)),
            N !== null &&
              ((f = i(N, f, x)),
              b === null ? (S = N) : (b.sibling = N),
              (b = N));
        return we && $r(m, x), S;
      }
      for (k = r(m, k); !N.done; x++, N = y.next())
        (N = p(k, m, x, N.value, _)),
          N !== null &&
            (t && N.alternate !== null && k.delete(N.key === null ? x : N.key),
            (f = i(N, f, x)),
            b === null ? (S = N) : (b.sibling = N),
            (b = N));
      return (
        t &&
          k.forEach(function (F) {
            return e(m, F);
          }),
        we && $r(m, x),
        S
      );
    }
    function w(m, f, y, _) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === gs &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Ta:
            e: {
              for (var S = y.key, b = f; b !== null; ) {
                if (b.key === S) {
                  if (((S = y.type), S === gs)) {
                    if (b.tag === 7) {
                      n(m, b.sibling),
                        (f = s(b, y.props.children)),
                        (f.return = m),
                        (m = f);
                      break e;
                    }
                  } else if (
                    b.elementType === S ||
                    (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === Fn &&
                      Rg(S) === b.type)
                  ) {
                    n(m, b.sibling),
                      (f = s(b, y.props)),
                      (f.ref = ro(m, b, y)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                  n(m, b);
                  break;
                } else e(m, b);
                b = b.sibling;
              }
              y.type === gs
                ? ((f = Gr(y.props.children, m.mode, _, y.key)),
                  (f.return = m),
                  (m = f))
                : ((_ = Rl(y.type, y.key, y.props, null, m.mode, _)),
                  (_.ref = ro(m, f, y)),
                  (_.return = m),
                  (m = _));
            }
            return o(m);
          case ms:
            e: {
              for (b = y.key; f !== null; ) {
                if (f.key === b)
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === y.containerInfo &&
                    f.stateNode.implementation === y.implementation
                  ) {
                    n(m, f.sibling),
                      (f = s(f, y.children || [])),
                      (f.return = m),
                      (m = f);
                    break e;
                  } else {
                    n(m, f);
                    break;
                  }
                else e(m, f);
                f = f.sibling;
              }
              (f = dh(y, m.mode, _)), (f.return = m), (m = f);
            }
            return o(m);
          case Fn:
            return (b = y._init), w(m, f, b(y._payload), _);
        }
        if (Oi(y)) return v(m, f, y, _);
        if (Ri(y)) return g(m, f, y, _);
        ol(m, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number"
        ? ((y = "" + y),
          f !== null && f.tag === 6
            ? (n(m, f.sibling), (f = s(f, y)), (f.return = m), (m = f))
            : (n(m, f), (f = ch(y, m.mode, _)), (f.return = m), (m = f)),
          o(m))
        : n(m, f);
    }
    return w;
  }
  var Ms = Ng(!0),
    Og = Ng(!1),
    al = Kn(null),
    ll = null,
    Ls = null,
    _d = null;
  function bd() {
    _d = Ls = ll = null;
  }
  function xd(t) {
    var e = al.current;
    ge(al), (t._currentValue = e);
  }
  function Sd(t, e, n) {
    for (; t !== null; ) {
      var r = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
          : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Is(t, e) {
    (ll = t),
      (_d = Ls = null),
      (t = t.dependencies),
      t !== null &&
        t.firstContext !== null &&
        (t.lanes & e && (ut = !0), (t.firstContext = null));
  }
  function Pt(t) {
    var e = t._currentValue;
    if (_d !== t)
      if (((t = { context: t, memoizedValue: e, next: null }), Ls === null)) {
        if (ll === null) throw Error(A(308));
        (Ls = t), (ll.dependencies = { lanes: 0, firstContext: t });
      } else Ls = Ls.next = t;
    return e;
  }
  var Fr = null;
  function kd(t) {
    Fr === null ? (Fr = [t]) : Fr.push(t);
  }
  function Mg(t, e, n, r) {
    var s = e.interleaved;
    return (
      s === null ? ((n.next = n), kd(e)) : ((n.next = s.next), (s.next = n)),
      (e.interleaved = n),
      Sn(t, r)
    );
  }
  function Sn(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
      (t.childLanes |= e),
        (n = t.alternate),
        n !== null && (n.childLanes |= e),
        (n = t),
        (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Xn = !1;
  function Ed(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Lg(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          effects: t.effects,
        });
  }
  function kn(t, e) {
    return {
      eventTime: t,
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Jn(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ie & 2)) {
      var s = r.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (r.pending = e),
        Sn(t, n)
      );
    }
    return (
      (s = r.interleaved),
      s === null ? ((e.next = e), kd(r)) : ((e.next = s.next), (s.next = e)),
      (r.interleaved = e),
      Sn(t, n)
    );
  }
  function ul(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
    ) {
      var r = e.lanes;
      (r &= t.pendingLanes), (n |= r), (e.lanes = n), Fc(t, n);
    }
  }
  function Ig(t, e) {
    var n = t.updateQueue,
      r = t.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var s = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
        } while (n !== null);
        i === null ? (s = i = e) : (i = i.next = e);
      } else s = i = e;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  function cl(t, e, n, r) {
    var s = t.updateQueue;
    Xn = !1;
    var i = s.firstBaseUpdate,
      o = s.lastBaseUpdate,
      a = s.shared.pending;
    if (a !== null) {
      s.shared.pending = null;
      var l = a,
        u = l.next;
      (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
      var c = t.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== o &&
          (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
          (c.lastBaseUpdate = l)));
    }
    if (i !== null) {
      var d = s.baseState;
      (o = 0), (c = u = l = null), (a = i);
      do {
        var h = a.lane,
          p = a.eventTime;
        if ((r & h) === h) {
          c !== null &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var v = t,
              g = a;
            switch (((h = e), (p = n), g.tag)) {
              case 1:
                if (((v = g.payload), typeof v == "function")) {
                  d = v.call(p, d, h);
                  break e;
                }
                d = v;
                break e;
              case 3:
                v.flags = (v.flags & -65537) | 128;
              case 0:
                if (
                  ((v = g.payload),
                  (h = typeof v == "function" ? v.call(p, d, h) : v),
                  h == null)
                )
                  break e;
                d = _e({}, d, h);
                break e;
              case 2:
                Xn = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((t.flags |= 64),
            (h = s.effects),
            h === null ? (s.effects = [a]) : h.push(a));
        } else
          (p = {
            eventTime: p,
            lane: h,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
            (o |= h);
        if (((a = a.next), a === null)) {
          if (((a = s.shared.pending), a === null)) break;
          (h = a),
            (a = h.next),
            (h.next = null),
            (s.lastBaseUpdate = h),
            (s.shared.pending = null);
        }
      } while (!0);
      if (
        (c === null && (l = d),
        (s.baseState = l),
        (s.firstBaseUpdate = u),
        (s.lastBaseUpdate = c),
        (e = s.shared.interleaved),
        e !== null)
      ) {
        s = e;
        do (o |= s.lane), (s = s.next);
        while (s !== e);
      } else i === null && (s.shared.lanes = 0);
      (Br |= o), (t.lanes = o), (t.memoizedState = d);
    }
  }
  function jg(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
      for (e = 0; e < t.length; e++) {
        var r = t[e],
          s = r.callback;
        if (s !== null) {
          if (((r.callback = null), (r = n), typeof s != "function"))
            throw Error(A(191, s));
          s.call(r);
        }
      }
  }
  var so = {},
    tn = Kn(so),
    io = Kn(so),
    oo = Kn(so);
  function Vr(t) {
    if (t === so) throw Error(A(174));
    return t;
  }
  function Ad(t, e) {
    switch ((he(oo, e), he(io, t), he(tn, so), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) ? e.namespaceURI : Tc(null, "");
        break;
      default:
        (t = t === 8 ? e.parentNode : e),
          (e = t.namespaceURI || null),
          (t = t.tagName),
          (e = Tc(e, t));
    }
    ge(tn), he(tn, e);
  }
  function js() {
    ge(tn), ge(io), ge(oo);
  }
  function Dg(t) {
    Vr(oo.current);
    var e = Vr(tn.current),
      n = Tc(e, t.type);
    e !== n && (he(io, t), he(tn, n));
  }
  function Td(t) {
    io.current === t && (ge(tn), ge(io));
  }
  var be = Kn(0);
  function dl(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Pd = [];
  function Cd() {
    for (var t = 0; t < Pd.length; t++)
      Pd[t]._workInProgressVersionPrimary = null;
    Pd.length = 0;
  }
  var hl = vn.ReactCurrentDispatcher,
    Rd = vn.ReactCurrentBatchConfig,
    Ur = 0,
    xe = null,
    Me = null,
    je = null,
    fl = !1,
    ao = !1,
    lo = 0,
    _1 = 0;
  function We() {
    throw Error(A(321));
  }
  function Nd(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ft(t[n], e[n])) return !1;
    return !0;
  }
  function Od(t, e, n, r, s, i) {
    if (
      ((Ur = i),
      (xe = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (hl.current = t === null || t.memoizedState === null ? k1 : E1),
      (t = n(r, s)),
      ao)
    ) {
      i = 0;
      do {
        if (((ao = !1), (lo = 0), 25 <= i)) throw Error(A(301));
        (i += 1),
          (je = Me = null),
          (e.updateQueue = null),
          (hl.current = A1),
          (t = n(r, s));
      } while (ao);
    }
    if (
      ((hl.current = gl),
      (e = Me !== null && Me.next !== null),
      (Ur = 0),
      (je = Me = xe = null),
      (fl = !1),
      e)
    )
      throw Error(A(300));
    return t;
  }
  function Md() {
    var t = lo !== 0;
    return (lo = 0), t;
  }
  function nn() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return je === null ? (xe.memoizedState = je = t) : (je = je.next = t), je;
  }
  function Ct() {
    if (Me === null) {
      var t = xe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Me.next;
    var e = je === null ? xe.memoizedState : je.next;
    if (e !== null) (je = e), (Me = t);
    else {
      if (t === null) throw Error(A(310));
      (Me = t),
        (t = {
          memoizedState: Me.memoizedState,
          baseState: Me.baseState,
          baseQueue: Me.baseQueue,
          queue: Me.queue,
          next: null,
        }),
        je === null ? (xe.memoizedState = je = t) : (je = je.next = t);
    }
    return je;
  }
  function uo(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ld(t) {
    var e = Ct(),
      n = e.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = t;
    var r = Me,
      s = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (s !== null) {
        var o = s.next;
        (s.next = i.next), (i.next = o);
      }
      (r.baseQueue = s = i), (n.pending = null);
    }
    if (s !== null) {
      (i = s.next), (r = r.baseState);
      var a = (o = null),
        l = null,
        u = i;
      do {
        var c = u.lane;
        if ((Ur & c) === c)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : t(r, u.action));
        else {
          var d = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
            (xe.lanes |= c),
            (Br |= c);
        }
        u = u.next;
      } while (u !== null && u !== i);
      l === null ? (o = r) : (l.next = a),
        Ft(r, e.memoizedState) || (ut = !0),
        (e.memoizedState = r),
        (e.baseState = o),
        (e.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((t = n.interleaved), t !== null)) {
      s = t;
      do (i = s.lane), (xe.lanes |= i), (Br |= i), (s = s.next);
      while (s !== t);
    } else s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
  }
  function Id(t) {
    var e = Ct(),
      n = e.queue;
    if (n === null) throw Error(A(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
      s = n.pending,
      i = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var o = (s = s.next);
      do (i = t(i, o.action)), (o = o.next);
      while (o !== s);
      Ft(i, e.memoizedState) || (ut = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function $g() {}
  function Fg(t, e) {
    var n = xe,
      r = Ct(),
      s = e(),
      i = !Ft(r.memoizedState, s);
    if (
      (i && ((r.memoizedState = s), (ut = !0)),
      (r = r.queue),
      jd(Bg.bind(null, n, r, t), [t]),
      r.getSnapshot !== e || i || (je !== null && je.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        co(9, Ug.bind(null, n, r, s, e), void 0, null),
        De === null)
      )
        throw Error(A(349));
      Ur & 30 || Vg(n, e, s);
    }
    return s;
  }
  function Vg(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = xe.updateQueue),
      e === null
        ? ((e = { lastEffect: null, stores: null }),
          (xe.updateQueue = e),
          (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Ug(t, e, n, r) {
    (e.value = n), (e.getSnapshot = r), zg(e) && Wg(t);
  }
  function Bg(t, e, n) {
    return n(function () {
      zg(e) && Wg(t);
    });
  }
  function zg(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ft(t, n);
    } catch {
      return !0;
    }
  }
  function Wg(t) {
    var e = Sn(t, 1);
    e !== null && Wt(e, t, 1, -1);
  }
  function Hg(t) {
    var e = nn();
    return (
      typeof t == "function" && (t = t()),
      (e.memoizedState = e.baseState = t),
      (t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uo,
        lastRenderedState: t,
      }),
      (e.queue = t),
      (t = t.dispatch = S1.bind(null, xe, t)),
      [e.memoizedState, t]
    );
  }
  function co(t, e, n, r) {
    return (
      (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
      (e = xe.updateQueue),
      e === null
        ? ((e = { lastEffect: null, stores: null }),
          (xe.updateQueue = e),
          (e.lastEffect = t.next = t))
        : ((n = e.lastEffect),
          n === null
            ? (e.lastEffect = t.next = t)
            : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
      t
    );
  }
  function Gg() {
    return Ct().memoizedState;
  }
  function pl(t, e, n, r) {
    var s = nn();
    (xe.flags |= t),
      (s.memoizedState = co(1 | e, n, void 0, r === void 0 ? null : r));
  }
  function ml(t, e, n, r) {
    var s = Ct();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Me !== null) {
      var o = Me.memoizedState;
      if (((i = o.destroy), r !== null && Nd(r, o.deps))) {
        s.memoizedState = co(e, n, i, r);
        return;
      }
    }
    (xe.flags |= t), (s.memoizedState = co(1 | e, n, i, r));
  }
  function qg(t, e) {
    return pl(8390656, 8, t, e);
  }
  function jd(t, e) {
    return ml(2048, 8, t, e);
  }
  function Kg(t, e) {
    return ml(4, 2, t, e);
  }
  function Zg(t, e) {
    return ml(4, 4, t, e);
  }
  function Qg(t, e) {
    if (typeof e == "function")
      return (
        (t = t()),
        e(t),
        function () {
          e(null);
        }
      );
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Xg(t, e, n) {
    return (
      (n = n != null ? n.concat([t]) : null), ml(4, 4, Qg.bind(null, e, t), n)
    );
  }
  function Dd() {}
  function Jg(t, e) {
    var n = Ct();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Nd(e, r[1])
      ? r[0]
      : ((n.memoizedState = [t, e]), t);
  }
  function Yg(t, e) {
    var n = Ct();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Nd(e, r[1])
      ? r[0]
      : ((t = t()), (n.memoizedState = [t, e]), t);
  }
  function ey(t, e, n) {
    return Ur & 21
      ? (Ft(n, e) ||
          ((n = Rm()), (xe.lanes |= n), (Br |= n), (t.baseState = !0)),
        e)
      : (t.baseState && ((t.baseState = !1), (ut = !0)), (t.memoizedState = n));
  }
  function b1(t, e) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), t(!0);
    var r = Rd.transition;
    Rd.transition = {};
    try {
      t(!1), e();
    } finally {
      (ue = n), (Rd.transition = r);
    }
  }
  function ty() {
    return Ct().memoizedState;
  }
  function x1(t, e, n) {
    var r = nr(t);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ny(t))
    )
      ry(e, n);
    else if (((n = Mg(t, e, n, r)), n !== null)) {
      var s = rt();
      Wt(n, t, r, s), sy(n, e, r);
    }
  }
  function S1(t, e, n) {
    var r = nr(t),
      s = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ny(t)) ry(e, s);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var o = e.lastRenderedState,
            a = i(o, n);
          if (((s.hasEagerState = !0), (s.eagerState = a), Ft(a, o))) {
            var l = e.interleaved;
            l === null
              ? ((s.next = s), kd(e))
              : ((s.next = l.next), (l.next = s)),
              (e.interleaved = s);
            return;
          }
        } catch {
        } finally {
        }
      (n = Mg(t, e, s, r)),
        n !== null && ((s = rt()), Wt(n, t, r, s), sy(n, e, r));
    }
  }
  function ny(t) {
    var e = t.alternate;
    return t === xe || (e !== null && e === xe);
  }
  function ry(t, e) {
    ao = fl = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function sy(t, e, n) {
    if (n & 4194240) {
      var r = e.lanes;
      (r &= t.pendingLanes), (n |= r), (e.lanes = n), Fc(t, n);
    }
  }
  var gl = {
      readContext: Pt,
      useCallback: We,
      useContext: We,
      useEffect: We,
      useImperativeHandle: We,
      useInsertionEffect: We,
      useLayoutEffect: We,
      useMemo: We,
      useReducer: We,
      useRef: We,
      useState: We,
      useDebugValue: We,
      useDeferredValue: We,
      useTransition: We,
      useMutableSource: We,
      useSyncExternalStore: We,
      useId: We,
      unstable_isNewReconciler: !1,
    },
    k1 = {
      readContext: Pt,
      useCallback: function (t, e) {
        return (nn().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Pt,
      useEffect: qg,
      useImperativeHandle: function (t, e, n) {
        return (
          (n = n != null ? n.concat([t]) : null),
          pl(4194308, 4, Qg.bind(null, e, t), n)
        );
      },
      useLayoutEffect: function (t, e) {
        return pl(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        return pl(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = nn();
        return (
          (e = e === void 0 ? null : e),
          (t = t()),
          (n.memoizedState = [t, e]),
          t
        );
      },
      useReducer: function (t, e, n) {
        var r = nn();
        return (
          (e = n !== void 0 ? n(e) : e),
          (r.memoizedState = r.baseState = e),
          (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e,
          }),
          (r.queue = t),
          (t = t.dispatch = x1.bind(null, xe, t)),
          [r.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = nn();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: Hg,
      useDebugValue: Dd,
      useDeferredValue: function (t) {
        return (nn().memoizedState = t);
      },
      useTransition: function () {
        var t = Hg(!1),
          e = t[0];
        return (t = b1.bind(null, t[1])), (nn().memoizedState = t), [e, t];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (t, e, n) {
        var r = xe,
          s = nn();
        if (we) {
          if (n === void 0) throw Error(A(407));
          n = n();
        } else {
          if (((n = e()), De === null)) throw Error(A(349));
          Ur & 30 || Vg(r, e, n);
        }
        s.memoizedState = n;
        var i = { value: n, getSnapshot: e };
        return (
          (s.queue = i),
          qg(Bg.bind(null, r, i, t), [t]),
          (r.flags |= 2048),
          co(9, Ug.bind(null, r, i, n, e), void 0, null),
          n
        );
      },
      useId: function () {
        var t = nn(),
          e = De.identifierPrefix;
        if (we) {
          var n = xn,
            r = bn;
          (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
            (e = ":" + e + "R" + n),
            (n = lo++),
            0 < n && (e += "H" + n.toString(32)),
            (e += ":");
        } else (n = _1++), (e = ":" + e + "r" + n.toString(32) + ":");
        return (t.memoizedState = e);
      },
      unstable_isNewReconciler: !1,
    },
    E1 = {
      readContext: Pt,
      useCallback: Jg,
      useContext: Pt,
      useEffect: jd,
      useImperativeHandle: Xg,
      useInsertionEffect: Kg,
      useLayoutEffect: Zg,
      useMemo: Yg,
      useReducer: Ld,
      useRef: Gg,
      useState: function () {
        return Ld(uo);
      },
      useDebugValue: Dd,
      useDeferredValue: function (t) {
        var e = Ct();
        return ey(e, Me.memoizedState, t);
      },
      useTransition: function () {
        var t = Ld(uo)[0],
          e = Ct().memoizedState;
        return [t, e];
      },
      useMutableSource: $g,
      useSyncExternalStore: Fg,
      useId: ty,
      unstable_isNewReconciler: !1,
    },
    A1 = {
      readContext: Pt,
      useCallback: Jg,
      useContext: Pt,
      useEffect: jd,
      useImperativeHandle: Xg,
      useInsertionEffect: Kg,
      useLayoutEffect: Zg,
      useMemo: Yg,
      useReducer: Id,
      useRef: Gg,
      useState: function () {
        return Id(uo);
      },
      useDebugValue: Dd,
      useDeferredValue: function (t) {
        var e = Ct();
        return Me === null ? (e.memoizedState = t) : ey(e, Me.memoizedState, t);
      },
      useTransition: function () {
        var t = Id(uo)[0],
          e = Ct().memoizedState;
        return [t, e];
      },
      useMutableSource: $g,
      useSyncExternalStore: Fg,
      useId: ty,
      unstable_isNewReconciler: !1,
    };
  function Ut(t, e) {
    if (t && t.defaultProps) {
      (e = _e({}, e)), (t = t.defaultProps);
      for (var n in t) e[n] === void 0 && (e[n] = t[n]);
      return e;
    }
    return e;
  }
  function $d(t, e, n, r) {
    (e = t.memoizedState),
      (n = n(r, e)),
      (n = n == null ? e : _e({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var yl = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? Lr(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var r = rt(),
        s = nr(t),
        i = kn(r, s);
      (i.payload = e),
        n != null && (i.callback = n),
        (e = Jn(t, i, s)),
        e !== null && (Wt(e, t, s, r), ul(e, t, s));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var r = rt(),
        s = nr(t),
        i = kn(r, s);
      (i.tag = 1),
        (i.payload = e),
        n != null && (i.callback = n),
        (e = Jn(t, i, s)),
        e !== null && (Wt(e, t, s, r), ul(e, t, s));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = rt(),
        r = nr(t),
        s = kn(n, r);
      (s.tag = 2),
        e != null && (s.callback = e),
        (e = Jn(t, s, r)),
        e !== null && (Wt(e, t, r, n), ul(e, t, r));
    },
  };
  function iy(t, e, n, r, s, i, o) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(r, i, o)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Qi(n, r) || !Qi(s, i)
          : !0
    );
  }
  function oy(t, e, n) {
    var r = !1,
      s = Zn,
      i = e.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Pt(i))
        : ((s = lt(e) ? jr : ze.current),
          (r = e.contextTypes),
          (i = (r = r != null) ? Cs(t, s) : Zn)),
      (e = new e(n, i)),
      (t.memoizedState =
        e.state !== null && e.state !== void 0 ? e.state : null),
      (e.updater = yl),
      (t.stateNode = e),
      (e._reactInternals = t),
      r &&
        ((t = t.stateNode),
        (t.__reactInternalMemoizedUnmaskedChildContext = s),
        (t.__reactInternalMemoizedMaskedChildContext = i)),
      e
    );
  }
  function ay(t, e, n, r) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, r),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, r),
      e.state !== t && yl.enqueueReplaceState(e, e.state, null);
  }
  function Fd(t, e, n, r) {
    var s = t.stateNode;
    (s.props = n), (s.state = t.memoizedState), (s.refs = {}), Ed(t);
    var i = e.contextType;
    typeof i == "object" && i !== null
      ? (s.context = Pt(i))
      : ((i = lt(e) ? jr : ze.current), (s.context = Cs(t, i))),
      (s.state = t.memoizedState),
      (i = e.getDerivedStateFromProps),
      typeof i == "function" && ($d(t, e, i, n), (s.state = t.memoizedState)),
      typeof e.getDerivedStateFromProps == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function" ||
        (typeof s.UNSAFE_componentWillMount != "function" &&
          typeof s.componentWillMount != "function") ||
        ((e = s.state),
        typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" &&
          s.UNSAFE_componentWillMount(),
        e !== s.state && yl.enqueueReplaceState(s, s.state, null),
        cl(t, n, s, r),
        (s.state = t.memoizedState)),
      typeof s.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Ds(t, e) {
    try {
      var n = "",
        r = e;
      do (n += eS(r)), (r = r.return);
      while (r);
      var s = n;
    } catch (i) {
      s =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: t, source: e, stack: s, digest: null };
  }
  function Vd(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null };
  }
  function Ud(t, e) {
    try {
      console.error(e.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var T1 = typeof WeakMap == "function" ? WeakMap : Map;
  function ly(t, e, n) {
    (n = kn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = e.value;
    return (
      (n.callback = function () {
        kl || ((kl = !0), (nh = r)), Ud(t, e);
      }),
      n
    );
  }
  function uy(t, e, n) {
    (n = kn(-1, n)), (n.tag = 3);
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = e.value;
      (n.payload = function () {
        return r(s);
      }),
        (n.callback = function () {
          Ud(t, e);
        });
    }
    var i = t.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          Ud(t, e),
            typeof r != "function" &&
              (er === null ? (er = new Set([this])) : er.add(this));
          var o = e.stack;
          this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function cy(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new T1();
      var s = new Set();
      r.set(e, s);
    } else (s = r.get(e)), s === void 0 && ((s = new Set()), r.set(e, s));
    s.has(n) || (s.add(n), (t = U1.bind(null, t, e, n)), e.then(t, t));
  }
  function dy(t) {
    do {
      var e;
      if (
        ((e = t.tag === 13) &&
          ((e = t.memoizedState),
          (e = e !== null ? e.dehydrated !== null : !0)),
        e)
      )
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function hy(t, e, n, r, s) {
    return t.mode & 1
      ? ((t.flags |= 65536), (t.lanes = s), t)
      : (t === e
          ? (t.flags |= 65536)
          : ((t.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((e = kn(-1, 1)), (e.tag = 2), Jn(n, e, 1))),
            (n.lanes |= 1)),
        t);
  }
  var P1 = vn.ReactCurrentOwner,
    ut = !1;
  function nt(t, e, n, r) {
    e.child = t === null ? Og(e, null, n, r) : Ms(e, t.child, n, r);
  }
  function fy(t, e, n, r, s) {
    n = n.render;
    var i = e.ref;
    return (
      Is(e, s),
      (r = Od(t, e, n, r, i, s)),
      (n = Md()),
      t !== null && !ut
        ? ((e.updateQueue = t.updateQueue),
          (e.flags &= -2053),
          (t.lanes &= ~s),
          En(t, e, s))
        : (we && n && md(e), (e.flags |= 1), nt(t, e, r, s), e.child)
    );
  }
  function py(t, e, n, r, s) {
    if (t === null) {
      var i = n.type;
      return typeof i == "function" &&
        !uh(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((e.tag = 15), (e.type = i), my(t, e, i, r, s))
        : ((t = Rl(n.type, null, r, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !(t.lanes & s))) {
      var o = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Qi), n(o, r) && t.ref === e.ref)
      )
        return En(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = sr(i, r)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function my(t, e, n, r, s) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Qi(i, r) && t.ref === e.ref)
        if (((ut = !1), (e.pendingProps = r = i), (t.lanes & s) !== 0))
          t.flags & 131072 && (ut = !0);
        else return (e.lanes = t.lanes), En(t, e, s);
    }
    return Bd(t, e, n, r, s);
  }
  function gy(t, e, n) {
    var r = e.pendingProps,
      s = r.children,
      i = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
      if (!(e.mode & 1))
        (e.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          he(Fs, bt),
          (bt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (t = i !== null ? i.baseLanes | n : n),
            (e.lanes = e.childLanes = 1073741824),
            (e.memoizedState = {
              baseLanes: t,
              cachePool: null,
              transitions: null,
            }),
            (e.updateQueue = null),
            he(Fs, bt),
            (bt |= t),
            null
          );
        (e.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          he(Fs, bt),
          (bt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (e.memoizedState = null)) : (r = n),
        he(Fs, bt),
        (bt |= r);
    return nt(t, e, s, n), e.child;
  }
  function yy(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
      ((e.flags |= 512), (e.flags |= 2097152));
  }
  function Bd(t, e, n, r, s) {
    var i = lt(n) ? jr : ze.current;
    return (
      (i = Cs(e, i)),
      Is(e, s),
      (n = Od(t, e, n, r, i, s)),
      (r = Md()),
      t !== null && !ut
        ? ((e.updateQueue = t.updateQueue),
          (e.flags &= -2053),
          (t.lanes &= ~s),
          En(t, e, s))
        : (we && r && md(e), (e.flags |= 1), nt(t, e, n, s), e.child)
    );
  }
  function vy(t, e, n, r, s) {
    if (lt(n)) {
      var i = !0;
      tl(e);
    } else i = !1;
    if ((Is(e, s), e.stateNode === null))
      wl(t, e), oy(e, n, r), Fd(e, n, r, s), (r = !0);
    else if (t === null) {
      var o = e.stateNode,
        a = e.memoizedProps;
      o.props = a;
      var l = o.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = Pt(u))
        : ((u = lt(n) ? jr : ze.current), (u = Cs(e, u)));
      var c = n.getDerivedStateFromProps,
        d =
          typeof c == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      d ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && ay(e, o, r, u)),
        (Xn = !1);
      var h = e.memoizedState;
      (o.state = h),
        cl(e, r, o, s),
        (l = e.memoizedState),
        a !== r || h !== l || at.current || Xn
          ? (typeof c == "function" && ($d(e, n, c, r), (l = e.memoizedState)),
            (a = Xn || iy(e, n, a, r, h, l, u))
              ? (d ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = r),
                (e.memoizedState = l)),
            (o.props = r),
            (o.state = l),
            (o.context = u),
            (r = a))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (r = !1));
    } else {
      (o = e.stateNode),
        Lg(t, e),
        (a = e.memoizedProps),
        (u = e.type === e.elementType ? a : Ut(e.type, a)),
        (o.props = u),
        (d = e.pendingProps),
        (h = o.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Pt(l))
          : ((l = lt(n) ? jr : ze.current), (l = Cs(e, l)));
      var p = n.getDerivedStateFromProps;
      (c =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== d || h !== l) && ay(e, o, r, l)),
        (Xn = !1),
        (h = e.memoizedState),
        (o.state = h),
        cl(e, r, o, s);
      var v = e.memoizedState;
      a !== d || h !== v || at.current || Xn
        ? (typeof p == "function" && ($d(e, n, p, r), (v = e.memoizedState)),
          (u = Xn || iy(e, n, u, r, h, v, l) || !1)
            ? (c ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, v, l),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, v, l)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (a === t.memoizedProps && h === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === t.memoizedProps && h === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = r),
              (e.memoizedState = v)),
          (o.props = r),
          (o.state = v),
          (o.context = l),
          (r = u))
        : (typeof o.componentDidUpdate != "function" ||
            (a === t.memoizedProps && h === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === t.memoizedProps && h === t.memoizedState) ||
            (e.flags |= 1024),
          (r = !1));
    }
    return zd(t, e, n, r, i, s);
  }
  function zd(t, e, n, r, s, i) {
    yy(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o) return s && Sg(e, n, !1), En(t, e, i);
    (r = e.stateNode), (P1.current = e);
    var a =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (e.flags |= 1),
      t !== null && o
        ? ((e.child = Ms(e, t.child, null, i)), (e.child = Ms(e, null, a, i)))
        : nt(t, e, a, i),
      (e.memoizedState = r.state),
      s && Sg(e, n, !0),
      e.child
    );
  }
  function wy(t) {
    var e = t.stateNode;
    e.pendingContext
      ? bg(t, e.pendingContext, e.pendingContext !== e.context)
      : e.context && bg(t, e.context, !1),
      Ad(t, e.containerInfo);
  }
  function _y(t, e, n, r, s) {
    return Os(), wd(s), (e.flags |= 256), nt(t, e, n, r), e.child;
  }
  var Wd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Hd(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function by(t, e, n) {
    var r = e.pendingProps,
      s = be.current,
      i = !1,
      o = (e.flags & 128) !== 0,
      a;
    if (
      ((a = o) ||
        (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
      a
        ? ((i = !0), (e.flags &= -129))
        : (t === null || t.memoizedState !== null) && (s |= 1),
      he(be, s & 1),
      t === null)
    )
      return (
        vd(e),
        (t = e.memoizedState),
        t !== null && ((t = t.dehydrated), t !== null)
          ? (e.mode & 1
              ? t.data === "$!"
                ? (e.lanes = 8)
                : (e.lanes = 1073741824)
              : (e.lanes = 1),
            null)
          : ((o = r.children),
            (t = r.fallback),
            i
              ? ((r = e.mode),
                (i = e.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = o))
                  : (i = Nl(o, r, 0, null)),
                (t = Gr(t, r, n, null)),
                (i.return = e),
                (t.return = e),
                (i.sibling = t),
                (e.child = i),
                (e.child.memoizedState = Hd(n)),
                (e.memoizedState = Wd),
                t)
              : Gd(e, o))
      );
    if (((s = t.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
      return C1(t, e, o, r, a, s, n);
    if (i) {
      (i = r.fallback), (o = e.mode), (s = t.child), (a = s.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && e.child !== s
          ? ((r = e.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (e.deletions = null))
          : ((r = sr(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
        a !== null ? (i = sr(a, i)) : ((i = Gr(i, o, n, null)), (i.flags |= 2)),
        (i.return = e),
        (r.return = e),
        (r.sibling = i),
        (e.child = r),
        (r = i),
        (i = e.child),
        (o = t.child.memoizedState),
        (o =
          o === null
            ? Hd(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (i.memoizedState = o),
        (i.childLanes = t.childLanes & ~n),
        (e.memoizedState = Wd),
        r
      );
    }
    return (
      (i = t.child),
      (t = i.sibling),
      (r = sr(i, { mode: "visible", children: r.children })),
      !(e.mode & 1) && (r.lanes = n),
      (r.return = e),
      (r.sibling = null),
      t !== null &&
        ((n = e.deletions),
        n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
      (e.child = r),
      (e.memoizedState = null),
      r
    );
  }
  function Gd(t, e) {
    return (
      (e = Nl({ mode: "visible", children: e }, t.mode, 0, null)),
      (e.return = t),
      (t.child = e)
    );
  }
  function vl(t, e, n, r) {
    return (
      r !== null && wd(r),
      Ms(e, t.child, null, n),
      (t = Gd(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function C1(t, e, n, r, s, i, o) {
    if (n)
      return e.flags & 256
        ? ((e.flags &= -257), (r = Vd(Error(A(422)))), vl(t, e, o, r))
        : e.memoizedState !== null
          ? ((e.child = t.child), (e.flags |= 128), null)
          : ((i = r.fallback),
            (s = e.mode),
            (r = Nl({ mode: "visible", children: r.children }, s, 0, null)),
            (i = Gr(i, s, o, null)),
            (i.flags |= 2),
            (r.return = e),
            (i.return = e),
            (r.sibling = i),
            (e.child = r),
            e.mode & 1 && Ms(e, t.child, null, o),
            (e.child.memoizedState = Hd(o)),
            (e.memoizedState = Wd),
            i);
    if (!(e.mode & 1)) return vl(t, e, o, null);
    if (s.data === "$!") {
      if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (i = Error(A(419))), (r = Vd(i, r, void 0)), vl(t, e, o, r)
      );
    }
    if (((a = (o & t.childLanes) !== 0), ut || a)) {
      if (((r = De), r !== null)) {
        switch (o & -o) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        (s = s & (r.suspendedLanes | o) ? 0 : s),
          s !== 0 &&
            s !== i.retryLane &&
            ((i.retryLane = s), Sn(t, s), Wt(r, t, s, -1));
      }
      return lh(), (r = Vd(Error(A(421)))), vl(t, e, o, r);
    }
    return s.data === "$?"
      ? ((e.flags |= 128),
        (e.child = t.child),
        (e = B1.bind(null, t)),
        (s._reactRetry = e),
        null)
      : ((t = i.treeContext),
        (_t = qn(s.nextSibling)),
        (wt = e),
        (we = !0),
        (Vt = null),
        t !== null &&
          ((At[Tt++] = bn),
          (At[Tt++] = xn),
          (At[Tt++] = Dr),
          (bn = t.id),
          (xn = t.overflow),
          (Dr = e)),
        (e = Gd(e, r.children)),
        (e.flags |= 4096),
        e);
  }
  function xy(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), Sd(t.return, e, n);
  }
  function qd(t, e, n, r, s) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: s,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = s));
  }
  function Sy(t, e, n) {
    var r = e.pendingProps,
      s = r.revealOrder,
      i = r.tail;
    if ((nt(t, e, r.children, n), (r = be.current), r & 2))
      (r = (r & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && t.flags & 128)
        e: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && xy(t, n, e);
          else if (t.tag === 19) xy(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      r &= 1;
    }
    if ((he(be, r), !(e.mode & 1))) e.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (n = e.child, s = null; n !== null; )
            (t = n.alternate),
              t !== null && dl(t) === null && (s = n),
              (n = n.sibling);
          (n = s),
            n === null
              ? ((s = e.child), (e.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            qd(e, !1, s, n, i);
          break;
        case "backwards":
          for (n = null, s = e.child, e.child = null; s !== null; ) {
            if (((t = s.alternate), t !== null && dl(t) === null)) {
              e.child = s;
              break;
            }
            (t = s.sibling), (s.sibling = n), (n = s), (s = t);
          }
          qd(e, !0, n, null, i);
          break;
        case "together":
          qd(e, !1, null, null, void 0);
          break;
        default:
          e.memoizedState = null;
      }
    return e.child;
  }
  function wl(t, e) {
    !(e.mode & 1) &&
      t !== null &&
      ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
  }
  function En(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Br |= e.lanes),
      !(n & e.childLanes))
    )
      return null;
    if (t !== null && e.child !== t.child) throw Error(A(153));
    if (e.child !== null) {
      for (
        t = e.child, n = sr(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = sr(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function R1(t, e, n) {
    switch (e.tag) {
      case 3:
        wy(e), Os();
        break;
      case 5:
        Dg(e);
        break;
      case 1:
        lt(e.type) && tl(e);
        break;
      case 4:
        Ad(e, e.stateNode.containerInfo);
        break;
      case 10:
        var r = e.type._context,
          s = e.memoizedProps.value;
        he(al, r._currentValue), (r._currentValue = s);
        break;
      case 13:
        if (((r = e.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (he(be, be.current & 1), (e.flags |= 128), null)
            : n & e.child.childLanes
              ? by(t, e, n)
              : (he(be, be.current & 1),
                (t = En(t, e, n)),
                t !== null ? t.sibling : null);
        he(be, be.current & 1);
        break;
      case 19:
        if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
          if (r) return Sy(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          he(be, be.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), gy(t, e, n);
    }
    return En(t, e, n);
  }
  var ky, Kd, Ey, Ay;
  (ky = function (t, e) {
    for (var n = e.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Kd = function () {}),
    (Ey = function (t, e, n, r) {
      var s = t.memoizedProps;
      if (s !== r) {
        (t = e.stateNode), Vr(tn.current);
        var i = null;
        switch (n) {
          case "input":
            (s = Sc(t, s)), (r = Sc(t, r)), (i = []);
            break;
          case "select":
            (s = _e({}, s, { value: void 0 })),
              (r = _e({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (s = Ac(t, s)), (r = Ac(t, r)), (i = []);
            break;
          default:
            typeof s.onClick != "function" &&
              typeof r.onClick == "function" &&
              (t.onclick = Ja);
        }
        Pc(n, r);
        var o;
        n = null;
        for (u in s)
          if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
            if (u === "style") {
              var a = s[u];
              for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              u !== "dangerouslySetInnerHTML" &&
                u !== "children" &&
                u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                u !== "autoFocus" &&
                (Ci.hasOwnProperty(u)
                  ? i || (i = [])
                  : (i = i || []).push(u, null));
        for (u in r) {
          var l = r[u];
          if (
            ((a = s != null ? s[u] : void 0),
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
          )
            if (u === "style")
              if (a) {
                for (o in a)
                  !a.hasOwnProperty(o) ||
                    (l && l.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in l)
                  l.hasOwnProperty(o) &&
                    a[o] !== l[o] &&
                    (n || (n = {}), (n[o] = l[o]));
              } else n || (i || (i = []), i.push(u, n)), (n = l);
            else
              u === "dangerouslySetInnerHTML"
                ? ((l = l ? l.__html : void 0),
                  (a = a ? a.__html : void 0),
                  l != null && a !== l && (i = i || []).push(u, l))
                : u === "children"
                  ? (typeof l != "string" && typeof l != "number") ||
                    (i = i || []).push(u, "" + l)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    (Ci.hasOwnProperty(u)
                      ? (l != null && u === "onScroll" && me("scroll", t),
                        i || a === l || (i = []))
                      : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (e.updateQueue = u) && (e.flags |= 4);
      }
    }),
    (Ay = function (t, e, n, r) {
      n !== r && (e.flags |= 4);
    });
  function ho(t, e) {
    if (!we)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function He(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      r = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags & 14680064),
          (r |= s.flags & 14680064),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (r |= s.subtreeFlags),
          (r |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= r), (t.childLanes = n), e;
  }
  function N1(t, e, n) {
    var r = e.pendingProps;
    switch ((gd(e), e.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(e), null;
      case 1:
        return lt(e.type) && el(), He(e), null;
      case 3:
        return (
          (r = e.stateNode),
          js(),
          ge(at),
          ge(ze),
          Cd(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (t === null || t.child === null) &&
            (il(e)
              ? (e.flags |= 4)
              : t === null ||
                (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                ((e.flags |= 1024), Vt !== null && (ih(Vt), (Vt = null)))),
          Kd(t, e),
          He(e),
          null
        );
      case 5:
        Td(e);
        var s = Vr(oo.current);
        if (((n = e.type), t !== null && e.stateNode != null))
          Ey(t, e, n, r, s),
            t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(A(166));
            return He(e), null;
          }
          if (((t = Vr(tn.current)), il(e))) {
            (r = e.stateNode), (n = e.type);
            var i = e.memoizedProps;
            switch (((r[en] = e), (r[to] = i), (t = (e.mode & 1) !== 0), n)) {
              case "dialog":
                me("cancel", r), me("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Ji.length; s++) me(Ji[s], r);
                break;
              case "source":
                me("error", r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", r), me("load", r);
                break;
              case "details":
                me("toggle", r);
                break;
              case "input":
                om(r, i), me("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  me("invalid", r);
                break;
              case "textarea":
                um(r, i), me("invalid", r);
            }
            Pc(n, i), (s = null);
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var a = i[o];
                o === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (i.suppressHydrationWarning !== !0 &&
                        Xa(r.textContent, a, t),
                      (s = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (i.suppressHydrationWarning !== !0 &&
                        Xa(r.textContent, a, t),
                      (s = ["children", "" + a]))
                  : Ci.hasOwnProperty(o) &&
                    a != null &&
                    o === "onScroll" &&
                    me("scroll", r);
              }
            switch (n) {
              case "input":
                Pa(r), lm(r, i, !0);
                break;
              case "textarea":
                Pa(r), dm(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Ja);
            }
            (r = s), (e.updateQueue = r), r !== null && (e.flags |= 4);
          } else {
            (o = s.nodeType === 9 ? s : s.ownerDocument),
              t === "http://www.w3.org/1999/xhtml" && (t = hm(n)),
              t === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((t = o.createElement("div")),
                    (t.innerHTML = "<script></script>"),
                    (t = t.removeChild(t.firstChild)))
                  : typeof r.is == "string"
                    ? (t = o.createElement(n, { is: r.is }))
                    : ((t = o.createElement(n)),
                      n === "select" &&
                        ((o = t),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (t = o.createElementNS(t, n)),
              (t[en] = e),
              (t[to] = r),
              ky(t, e, !1, !1),
              (e.stateNode = t);
            e: {
              switch (((o = Cc(n, r)), n)) {
                case "dialog":
                  me("cancel", t), me("close", t), (s = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  me("load", t), (s = r);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < Ji.length; s++) me(Ji[s], t);
                  s = r;
                  break;
                case "source":
                  me("error", t), (s = r);
                  break;
                case "img":
                case "image":
                case "link":
                  me("error", t), me("load", t), (s = r);
                  break;
                case "details":
                  me("toggle", t), (s = r);
                  break;
                case "input":
                  om(t, r), (s = Sc(t, r)), me("invalid", t);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  (t._wrapperState = { wasMultiple: !!r.multiple }),
                    (s = _e({}, r, { value: void 0 })),
                    me("invalid", t);
                  break;
                case "textarea":
                  um(t, r), (s = Ac(t, r)), me("invalid", t);
                  break;
                default:
                  s = r;
              }
              Pc(n, s), (a = s);
              for (i in a)
                if (a.hasOwnProperty(i)) {
                  var l = a[i];
                  i === "style"
                    ? mm(t, l)
                    : i === "dangerouslySetInnerHTML"
                      ? ((l = l ? l.__html : void 0), l != null && fm(t, l))
                      : i === "children"
                        ? typeof l == "string"
                          ? (n !== "textarea" || l !== "") && Mi(t, l)
                          : typeof l == "number" && Mi(t, "" + l)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (Ci.hasOwnProperty(i)
                            ? l != null && i === "onScroll" && me("scroll", t)
                            : l != null && hc(t, i, l, o));
                }
              switch (n) {
                case "input":
                  Pa(t), lm(t, r, !1);
                  break;
                case "textarea":
                  Pa(t), dm(t);
                  break;
                case "option":
                  r.value != null && t.setAttribute("value", "" + Vn(r.value));
                  break;
                case "select":
                  (t.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? ys(t, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        ys(t, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof s.onClick == "function" && (t.onclick = Ja);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (e.flags |= 4);
          }
          e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
        }
        return He(e), null;
      case 6:
        if (t && e.stateNode != null) Ay(t, e, t.memoizedProps, r);
        else {
          if (typeof r != "string" && e.stateNode === null) throw Error(A(166));
          if (((n = Vr(oo.current)), Vr(tn.current), il(e))) {
            if (
              ((r = e.stateNode),
              (n = e.memoizedProps),
              (r[en] = e),
              (i = r.nodeValue !== n) && ((t = wt), t !== null))
            )
              switch (t.tag) {
                case 3:
                  Xa(r.nodeValue, n, (t.mode & 1) !== 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 &&
                    Xa(r.nodeValue, n, (t.mode & 1) !== 0);
              }
            i && (e.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[en] = e),
              (e.stateNode = r);
        }
        return He(e), null;
      case 13:
        if (
          (ge(be),
          (r = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (we && _t !== null && e.mode & 1 && !(e.flags & 128))
            Cg(), Os(), (e.flags |= 98560), (i = !1);
          else if (((i = il(e)), r !== null && r.dehydrated !== null)) {
            if (t === null) {
              if (!i) throw Error(A(318));
              if (
                ((i = e.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(A(317));
              i[en] = e;
            } else
              Os(),
                !(e.flags & 128) && (e.memoizedState = null),
                (e.flags |= 4);
            He(e), (i = !1);
          } else Vt !== null && (ih(Vt), (Vt = null)), (i = !0);
          if (!i) return e.flags & 65536 ? e : null;
        }
        return e.flags & 128
          ? ((e.lanes = n), e)
          : ((r = r !== null),
            r !== (t !== null && t.memoizedState !== null) &&
              r &&
              ((e.child.flags |= 8192),
              e.mode & 1 &&
                (t === null || be.current & 1 ? Le === 0 && (Le = 3) : lh())),
            e.updateQueue !== null && (e.flags |= 4),
            He(e),
            null);
      case 4:
        return (
          js(),
          Kd(t, e),
          t === null && Yi(e.stateNode.containerInfo),
          He(e),
          null
        );
      case 10:
        return xd(e.type._context), He(e), null;
      case 17:
        return lt(e.type) && el(), He(e), null;
      case 19:
        if ((ge(be), (i = e.memoizedState), i === null)) return He(e), null;
        if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) ho(i, !1);
          else {
            if (Le !== 0 || (t !== null && t.flags & 128))
              for (t = e.child; t !== null; ) {
                if (((o = dl(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      ho(i, !1),
                      r = o.updateQueue,
                      r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                      e.subtreeFlags = 0,
                      r = n,
                      n = e.child;
                    n !== null;

                  )
                    (i = n),
                      (t = r),
                      (i.flags &= 14680066),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = t),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (t = o.dependencies),
                          (i.dependencies =
                            t === null
                              ? null
                              : {
                                  lanes: t.lanes,
                                  firstContext: t.firstContext,
                                })),
                      (n = n.sibling);
                  return he(be, (be.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null &&
              Ce() > Vs &&
              ((e.flags |= 128), (r = !0), ho(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = dl(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (n = t.updateQueue),
                n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                ho(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !we)
              )
                return He(e), null;
            } else
              2 * Ce() - i.renderingStartTime > Vs &&
                n !== 1073741824 &&
                ((e.flags |= 128), (r = !0), ho(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((n = i.last),
              n !== null ? (n.sibling = o) : (e.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((e = i.tail),
            (i.rendering = e),
            (i.tail = e.sibling),
            (i.renderingStartTime = Ce()),
            (e.sibling = null),
            (n = be.current),
            he(be, r ? (n & 1) | 2 : n & 1),
            e)
          : (He(e), null);
      case 22:
      case 23:
        return (
          ah(),
          (r = e.memoizedState !== null),
          t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
          r && e.mode & 1
            ? bt & 1073741824 &&
              (He(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : He(e),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, e.tag));
  }
  function O1(t, e) {
    switch ((gd(e), e.tag)) {
      case 1:
        return (
          lt(e.type) && el(),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          js(),
          ge(at),
          ge(ze),
          Cd(),
          (t = e.flags),
          t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 5:
        return Td(e), null;
      case 13:
        if (
          (ge(be), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(A(340));
          Os();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return ge(be), null;
      case 4:
        return js(), null;
      case 10:
        return xd(e.type._context), null;
      case 22:
      case 23:
        return ah(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _l = !1,
    Ge = !1,
    M1 = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;
  function $s(t, e) {
    var n = t.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ee(t, e, r);
        }
      else n.current = null;
  }
  function Zd(t, e, n) {
    try {
      n();
    } catch (r) {
      Ee(t, e, r);
    }
  }
  var Ty = !1;
  function L1(t, e) {
    if (((ad = Va), (t = ig()), Yc(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              a = -1,
              l = -1,
              u = 0,
              c = 0,
              d = t,
              h = null;
            t: for (;;) {
              for (
                var p;
                d !== n || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                  d !== i || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                  d.nodeType === 3 && (o += d.nodeValue.length),
                  (p = d.firstChild) !== null;

              )
                (h = d), (d = p);
              for (;;) {
                if (d === t) break t;
                if (
                  (h === n && ++u === s && (a = o),
                  h === i && ++c === r && (l = o),
                  (p = d.nextSibling) !== null)
                )
                  break;
                (d = h), (h = d.parentNode);
              }
              d = p;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ld = { focusedElem: t, selectionRange: n }, Va = !1, L = e;
      L !== null;

    )
      if (((e = L), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        (t.return = e), (L = t);
      else
        for (; L !== null; ) {
          e = L;
          try {
            var v = e.alternate;
            if (e.flags & 1024)
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var g = v.memoizedProps,
                      w = v.memoizedState,
                      m = e.stateNode,
                      f = m.getSnapshotBeforeUpdate(
                        e.elementType === e.type ? g : Ut(e.type, g),
                        w,
                      );
                    m.__reactInternalSnapshotBeforeUpdate = f;
                  }
                  break;
                case 3:
                  var y = e.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = "")
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (_) {
            Ee(e, e.return, _);
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (L = t);
            break;
          }
          L = e.return;
        }
    return (v = Ty), (Ty = !1), v;
  }
  function fo(t, e, n) {
    var r = e.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var s = (r = r.next);
      do {
        if ((s.tag & t) === t) {
          var i = s.destroy;
          (s.destroy = void 0), i !== void 0 && Zd(e, n, i);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function bl(t, e) {
    if (
      ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
    ) {
      var n = (e = e.next);
      do {
        if ((n.tag & t) === t) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== e);
    }
  }
  function Qd(t) {
    var e = t.ref;
    if (e !== null) {
      var n = t.stateNode;
      switch (t.tag) {
        case 5:
          t = n;
          break;
        default:
          t = n;
      }
      typeof e == "function" ? e(t) : (e.current = t);
    }
  }
  function Py(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Py(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 &&
        ((e = t.stateNode),
        e !== null &&
          (delete e[en],
          delete e[to],
          delete e[hd],
          delete e[g1],
          delete e[y1])),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  function Cy(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function Ry(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Cy(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xd(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
      (t = t.stateNode),
        e
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(t, e)
            : n.insertBefore(t, e)
          : (n.nodeType === 8
              ? ((e = n.parentNode), e.insertBefore(t, n))
              : ((e = n), e.appendChild(t)),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Ja));
    else if (r !== 4 && ((t = t.child), t !== null))
      for (Xd(t, e, n), t = t.sibling; t !== null; )
        Xd(t, e, n), (t = t.sibling);
  }
  function Jd(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && ((t = t.child), t !== null))
      for (Jd(t, e, n), t = t.sibling; t !== null; )
        Jd(t, e, n), (t = t.sibling);
  }
  var Ve = null,
    Bt = !1;
  function Yn(t, e, n) {
    for (n = n.child; n !== null; ) Ny(t, e, n), (n = n.sibling);
  }
  function Ny(t, e, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
      try {
        Yt.onCommitFiberUnmount(La, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ge || $s(n, e);
      case 6:
        var r = Ve,
          s = Bt;
        (Ve = null),
          Yn(t, e, n),
          (Ve = r),
          (Bt = s),
          Ve !== null &&
            (Bt
              ? ((t = Ve),
                (n = n.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(n)
                  : t.removeChild(n))
              : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null &&
          (Bt
            ? ((t = Ve),
              (n = n.stateNode),
              t.nodeType === 8
                ? dd(t.parentNode, n)
                : t.nodeType === 1 && dd(t, n),
              Wi(t))
            : dd(Ve, n.stateNode));
        break;
      case 4:
        (r = Ve),
          (s = Bt),
          (Ve = n.stateNode.containerInfo),
          (Bt = !0),
          Yn(t, e, n),
          (Ve = r),
          (Bt = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ge &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          s = r = r.next;
          do {
            var i = s,
              o = i.destroy;
            (i = i.tag),
              o !== void 0 && (i & 2 || i & 4) && Zd(n, e, o),
              (s = s.next);
          } while (s !== r);
        }
        Yn(t, e, n);
        break;
      case 1:
        if (
          !Ge &&
          ($s(n, e),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            Ee(n, e, a);
          }
        Yn(t, e, n);
        break;
      case 21:
        Yn(t, e, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ge = (r = Ge) || n.memoizedState !== null), Yn(t, e, n), (Ge = r))
          : Yn(t, e, n);
        break;
      default:
        Yn(t, e, n);
    }
  }
  function Oy(t) {
    var e = t.updateQueue;
    if (e !== null) {
      t.updateQueue = null;
      var n = t.stateNode;
      n === null && (n = t.stateNode = new M1()),
        e.forEach(function (r) {
          var s = z1.bind(null, t, r);
          n.has(r) || (n.add(r), r.then(s, s));
        });
    }
  }
  function zt(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        try {
          var i = t,
            o = e,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (Ve = a.stateNode), (Bt = !1);
                break e;
              case 3:
                (Ve = a.stateNode.containerInfo), (Bt = !0);
                break e;
              case 4:
                (Ve = a.stateNode.containerInfo), (Bt = !0);
                break e;
            }
            a = a.return;
          }
          if (Ve === null) throw Error(A(160));
          Ny(i, o, s), (Ve = null), (Bt = !1);
          var l = s.alternate;
          l !== null && (l.return = null), (s.return = null);
        } catch (u) {
          Ee(s, e, u);
        }
      }
    if (e.subtreeFlags & 12854)
      for (e = e.child; e !== null; ) My(e, t), (e = e.sibling);
  }
  function My(t, e) {
    var n = t.alternate,
      r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((zt(e, t), rn(t), r & 4)) {
          try {
            fo(3, t, t.return), bl(3, t);
          } catch (g) {
            Ee(t, t.return, g);
          }
          try {
            fo(5, t, t.return);
          } catch (g) {
            Ee(t, t.return, g);
          }
        }
        break;
      case 1:
        zt(e, t), rn(t), r & 512 && n !== null && $s(n, n.return);
        break;
      case 5:
        if (
          (zt(e, t),
          rn(t),
          r & 512 && n !== null && $s(n, n.return),
          t.flags & 32)
        ) {
          var s = t.stateNode;
          try {
            Mi(s, "");
          } catch (g) {
            Ee(t, t.return, g);
          }
        }
        if (r & 4 && ((s = t.stateNode), s != null)) {
          var i = t.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            a = t.type,
            l = t.updateQueue;
          if (((t.updateQueue = null), l !== null))
            try {
              a === "input" && i.type === "radio" && i.name != null && am(s, i),
                Cc(a, o);
              var u = Cc(a, i);
              for (o = 0; o < l.length; o += 2) {
                var c = l[o],
                  d = l[o + 1];
                c === "style"
                  ? mm(s, d)
                  : c === "dangerouslySetInnerHTML"
                    ? fm(s, d)
                    : c === "children"
                      ? Mi(s, d)
                      : hc(s, c, d, u);
              }
              switch (a) {
                case "input":
                  kc(s, i);
                  break;
                case "textarea":
                  cm(s, i);
                  break;
                case "select":
                  var h = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!i.multiple;
                  var p = i.value;
                  p != null
                    ? ys(s, !!i.multiple, p, !1)
                    : h !== !!i.multiple &&
                      (i.defaultValue != null
                        ? ys(s, !!i.multiple, i.defaultValue, !0)
                        : ys(s, !!i.multiple, i.multiple ? [] : "", !1));
              }
              s[to] = i;
            } catch (g) {
              Ee(t, t.return, g);
            }
        }
        break;
      case 6:
        if ((zt(e, t), rn(t), r & 4)) {
          if (t.stateNode === null) throw Error(A(162));
          (s = t.stateNode), (i = t.memoizedProps);
          try {
            s.nodeValue = i;
          } catch (g) {
            Ee(t, t.return, g);
          }
        }
        break;
      case 3:
        if (
          (zt(e, t), rn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Wi(e.containerInfo);
          } catch (g) {
            Ee(t, t.return, g);
          }
        break;
      case 4:
        zt(e, t), rn(t);
        break;
      case 13:
        zt(e, t),
          rn(t),
          (s = t.child),
          s.flags & 8192 &&
            ((i = s.memoizedState !== null),
            (s.stateNode.isHidden = i),
            !i ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (th = Ce())),
          r & 4 && Oy(t);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          t.mode & 1 ? ((Ge = (u = Ge) || c), zt(e, t), (Ge = u)) : zt(e, t),
          rn(t),
          r & 8192)
        ) {
          if (
            ((u = t.memoizedState !== null),
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
          )
            for (L = t, c = t.child; c !== null; ) {
              for (d = L = c; L !== null; ) {
                switch (((h = L), (p = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fo(4, h, h.return);
                    break;
                  case 1:
                    $s(h, h.return);
                    var v = h.stateNode;
                    if (typeof v.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (e = r),
                          (v.props = e.memoizedProps),
                          (v.state = e.memoizedState),
                          v.componentWillUnmount();
                      } catch (g) {
                        Ee(r, n, g);
                      }
                    }
                    break;
                  case 5:
                    $s(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      jy(d);
                      continue;
                    }
                }
                p !== null ? ((p.return = h), (L = p)) : jy(d);
              }
              c = c.sibling;
            }
          e: for (c = null, d = t; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  (s = d.stateNode),
                    u
                      ? ((i = s.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((a = d.stateNode),
                        (l = d.memoizedProps.style),
                        (o =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = pm("display", o)));
                } catch (g) {
                  Ee(t, t.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  Ee(t, t.return, g);
                }
            } else if (
              ((d.tag !== 22 && d.tag !== 23) ||
                d.memoizedState === null ||
                d === t) &&
              d.child !== null
            ) {
              (d.child.return = d), (d = d.child);
              continue;
            }
            if (d === t) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === t) break e;
              c === d && (c = null), (d = d.return);
            }
            c === d && (c = null),
              (d.sibling.return = d.return),
              (d = d.sibling);
          }
        }
        break;
      case 19:
        zt(e, t), rn(t), r & 4 && Oy(t);
        break;
      case 21:
        break;
      default:
        zt(e, t), rn(t);
    }
  }
  function rn(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        e: {
          for (var n = t.return; n !== null; ) {
            if (Cy(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(A(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (Mi(s, ""), (r.flags &= -33));
            var i = Ry(t);
            Jd(t, i, s);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = Ry(t);
            Xd(t, a, o);
            break;
          default:
            throw Error(A(161));
        }
      } catch (l) {
        Ee(t, t.return, l);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function I1(t, e, n) {
    (L = t), Ly(t);
  }
  function Ly(t, e, n) {
    for (var r = (t.mode & 1) !== 0; L !== null; ) {
      var s = L,
        i = s.child;
      if (s.tag === 22 && r) {
        var o = s.memoizedState !== null || _l;
        if (!o) {
          var a = s.alternate,
            l = (a !== null && a.memoizedState !== null) || Ge;
          a = _l;
          var u = Ge;
          if (((_l = o), (Ge = l) && !u))
            for (L = s; L !== null; )
              (o = L),
                (l = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Dy(s)
                  : l !== null
                    ? ((l.return = o), (L = l))
                    : Dy(s);
          for (; i !== null; ) (L = i), Ly(i), (i = i.sibling);
          (L = s), (_l = a), (Ge = u);
        }
        Iy(t);
      } else
        s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (L = i)) : Iy(t);
    }
  }
  function Iy(t) {
    for (; L !== null; ) {
      var e = L;
      if (e.flags & 8772) {
        var n = e.alternate;
        try {
          if (e.flags & 8772)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                Ge || bl(5, e);
                break;
              case 1:
                var r = e.stateNode;
                if (e.flags & 4 && !Ge)
                  if (n === null) r.componentDidMount();
                  else {
                    var s =
                      e.elementType === e.type
                        ? n.memoizedProps
                        : Ut(e.type, n.memoizedProps);
                    r.componentDidUpdate(
                      s,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var i = e.updateQueue;
                i !== null && jg(e, i, r);
                break;
              case 3:
                var o = e.updateQueue;
                if (o !== null) {
                  if (((n = null), e.child !== null))
                    switch (e.child.tag) {
                      case 5:
                        n = e.child.stateNode;
                        break;
                      case 1:
                        n = e.child.stateNode;
                    }
                  jg(e, o, n);
                }
                break;
              case 5:
                var a = e.stateNode;
                if (n === null && e.flags & 4) {
                  n = a;
                  var l = e.memoizedProps;
                  switch (e.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (e.memoizedState === null) {
                  var u = e.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var d = c.dehydrated;
                      d !== null && Wi(d);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(A(163));
            }
          Ge || (e.flags & 512 && Qd(e));
        } catch (h) {
          Ee(e, e.return, h);
        }
      }
      if (e === t) {
        L = null;
        break;
      }
      if (((n = e.sibling), n !== null)) {
        (n.return = e.return), (L = n);
        break;
      }
      L = e.return;
    }
  }
  function jy(t) {
    for (; L !== null; ) {
      var e = L;
      if (e === t) {
        L = null;
        break;
      }
      var n = e.sibling;
      if (n !== null) {
        (n.return = e.return), (L = n);
        break;
      }
      L = e.return;
    }
  }
  function Dy(t) {
    for (; L !== null; ) {
      var e = L;
      try {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            var n = e.return;
            try {
              bl(4, e);
            } catch (l) {
              Ee(e, n, l);
            }
            break;
          case 1:
            var r = e.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = e.return;
              try {
                r.componentDidMount();
              } catch (l) {
                Ee(e, s, l);
              }
            }
            var i = e.return;
            try {
              Qd(e);
            } catch (l) {
              Ee(e, i, l);
            }
            break;
          case 5:
            var o = e.return;
            try {
              Qd(e);
            } catch (l) {
              Ee(e, o, l);
            }
        }
      } catch (l) {
        Ee(e, e.return, l);
      }
      if (e === t) {
        L = null;
        break;
      }
      var a = e.sibling;
      if (a !== null) {
        (a.return = e.return), (L = a);
        break;
      }
      L = e.return;
    }
  }
  var j1 = Math.ceil,
    xl = vn.ReactCurrentDispatcher,
    Yd = vn.ReactCurrentOwner,
    Rt = vn.ReactCurrentBatchConfig,
    ie = 0,
    De = null,
    Ne = null,
    Ue = 0,
    bt = 0,
    Fs = Kn(0),
    Le = 0,
    po = null,
    Br = 0,
    Sl = 0,
    eh = 0,
    mo = null,
    ct = null,
    th = 0,
    Vs = 1 / 0,
    An = null,
    kl = !1,
    nh = null,
    er = null,
    El = !1,
    tr = null,
    Al = 0,
    go = 0,
    rh = null,
    Tl = -1,
    Pl = 0;
  function rt() {
    return ie & 6 ? Ce() : Tl !== -1 ? Tl : (Tl = Ce());
  }
  function nr(t) {
    return t.mode & 1
      ? ie & 2 && Ue !== 0
        ? Ue & -Ue
        : w1.transition !== null
          ? (Pl === 0 && (Pl = Rm()), Pl)
          : ((t = ue),
            t !== 0 ||
              ((t = window.event), (t = t === void 0 ? 16 : Fm(t.type))),
            t)
      : 1;
  }
  function Wt(t, e, n, r) {
    if (50 < go) throw ((go = 0), (rh = null), Error(A(185)));
    Fi(t, n, r),
      (!(ie & 2) || t !== De) &&
        (t === De && (!(ie & 2) && (Sl |= n), Le === 4 && rr(t, Ue)),
        dt(t, r),
        n === 1 &&
          ie === 0 &&
          !(e.mode & 1) &&
          ((Vs = Ce() + 500), nl && Qn()));
  }
  function dt(t, e) {
    var n = t.callbackNode;
    wS(t, e);
    var r = Da(t, t === De ? Ue : 0);
    if (r === 0)
      n !== null && Tm(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = r & -r), t.callbackPriority !== e)) {
      if ((n != null && Tm(n), e === 1))
        t.tag === 0 ? v1(Fy.bind(null, t)) : kg(Fy.bind(null, t)),
          p1(function () {
            !(ie & 6) && Qn();
          }),
          (n = null);
      else {
        switch (Nm(r)) {
          case 1:
            n = jc;
            break;
          case 4:
            n = Pm;
            break;
          case 16:
            n = Ma;
            break;
          case 536870912:
            n = Cm;
            break;
          default:
            n = Ma;
        }
        n = qy(n, $y.bind(null, t));
      }
      (t.callbackPriority = e), (t.callbackNode = n);
    }
  }
  function $y(t, e) {
    if (((Tl = -1), (Pl = 0), ie & 6)) throw Error(A(327));
    var n = t.callbackNode;
    if (Us() && t.callbackNode !== n) return null;
    var r = Da(t, t === De ? Ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = Cl(t, r);
    else {
      e = r;
      var s = ie;
      ie |= 2;
      var i = Uy();
      (De !== t || Ue !== e) && ((An = null), (Vs = Ce() + 500), Wr(t, e));
      do
        try {
          F1();
          break;
        } catch (a) {
          Vy(t, a);
        }
      while (!0);
      bd(),
        (xl.current = i),
        (ie = s),
        Ne !== null ? (e = 0) : ((De = null), (Ue = 0), (e = Le));
    }
    if (e !== 0) {
      if (
        (e === 2 && ((s = Dc(t)), s !== 0 && ((r = s), (e = sh(t, s)))),
        e === 1)
      )
        throw ((n = po), Wr(t, 0), rr(t, r), dt(t, Ce()), n);
      if (e === 6) rr(t, r);
      else {
        if (
          ((s = t.current.alternate),
          !(r & 30) &&
            !D1(s) &&
            ((e = Cl(t, r)),
            e === 2 && ((i = Dc(t)), i !== 0 && ((r = i), (e = sh(t, i)))),
            e === 1))
        )
          throw ((n = po), Wr(t, 0), rr(t, r), dt(t, Ce()), n);
        switch (((t.finishedWork = s), (t.finishedLanes = r), e)) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Hr(t, ct, An);
            break;
          case 3:
            if (
              (rr(t, r),
              (r & 130023424) === r && ((e = th + 500 - Ce()), 10 < e))
            ) {
              if (Da(t, 0) !== 0) break;
              if (((s = t.suspendedLanes), (s & r) !== r)) {
                rt(), (t.pingedLanes |= t.suspendedLanes & s);
                break;
              }
              t.timeoutHandle = cd(Hr.bind(null, t, ct, An), e);
              break;
            }
            Hr(t, ct, An);
            break;
          case 4:
            if ((rr(t, r), (r & 4194240) === r)) break;
            for (e = t.eventTimes, s = -1; 0 < r; ) {
              var o = 31 - $t(r);
              (i = 1 << o), (o = e[o]), o > s && (s = o), (r &= ~i);
            }
            if (
              ((r = s),
              (r = Ce() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * j1(r / 1960)) - r),
              10 < r)
            ) {
              t.timeoutHandle = cd(Hr.bind(null, t, ct, An), r);
              break;
            }
            Hr(t, ct, An);
            break;
          case 5:
            Hr(t, ct, An);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return dt(t, Ce()), t.callbackNode === n ? $y.bind(null, t) : null;
  }
  function sh(t, e) {
    var n = mo;
    return (
      t.current.memoizedState.isDehydrated && (Wr(t, e).flags |= 256),
      (t = Cl(t, e)),
      t !== 2 && ((e = ct), (ct = n), e !== null && ih(e)),
      t
    );
  }
  function ih(t) {
    ct === null ? (ct = t) : ct.push.apply(ct, t);
  }
  function D1(t) {
    for (var e = t; ; ) {
      if (e.flags & 16384) {
        var n = e.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var s = n[r],
              i = s.getSnapshot;
            s = s.value;
            try {
              if (!Ft(i(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function rr(t, e) {
    for (
      e &= ~eh,
        e &= ~Sl,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        t = t.expirationTimes;
      0 < e;

    ) {
      var n = 31 - $t(e),
        r = 1 << n;
      (t[n] = -1), (e &= ~r);
    }
  }
  function Fy(t) {
    if (ie & 6) throw Error(A(327));
    Us();
    var e = Da(t, 0);
    if (!(e & 1)) return dt(t, Ce()), null;
    var n = Cl(t, e);
    if (t.tag !== 0 && n === 2) {
      var r = Dc(t);
      r !== 0 && ((e = r), (n = sh(t, r)));
    }
    if (n === 1) throw ((n = po), Wr(t, 0), rr(t, e), dt(t, Ce()), n);
    if (n === 6) throw Error(A(345));
    return (
      (t.finishedWork = t.current.alternate),
      (t.finishedLanes = e),
      Hr(t, ct, An),
      dt(t, Ce()),
      null
    );
  }
  function oh(t, e) {
    var n = ie;
    ie |= 1;
    try {
      return t(e);
    } finally {
      (ie = n), ie === 0 && ((Vs = Ce() + 500), nl && Qn());
    }
  }
  function zr(t) {
    tr !== null && tr.tag === 0 && !(ie & 6) && Us();
    var e = ie;
    ie |= 1;
    var n = Rt.transition,
      r = ue;
    try {
      if (((Rt.transition = null), (ue = 1), t)) return t();
    } finally {
      (ue = r), (Rt.transition = n), (ie = e), !(ie & 6) && Qn();
    }
  }
  function ah() {
    (bt = Fs.current), ge(Fs);
  }
  function Wr(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), f1(n)), Ne !== null))
      for (n = Ne.return; n !== null; ) {
        var r = n;
        switch ((gd(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && el();
            break;
          case 3:
            js(), ge(at), ge(ze), Cd();
            break;
          case 5:
            Td(r);
            break;
          case 4:
            js();
            break;
          case 13:
            ge(be);
            break;
          case 19:
            ge(be);
            break;
          case 10:
            xd(r.type._context);
            break;
          case 22:
          case 23:
            ah();
        }
        n = n.return;
      }
    if (
      ((De = t),
      (Ne = t = sr(t.current, null)),
      (Ue = bt = e),
      (Le = 0),
      (po = null),
      (eh = Sl = Br = 0),
      (ct = mo = null),
      Fr !== null)
    ) {
      for (e = 0; e < Fr.length; e++)
        if (((n = Fr[e]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var s = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            (i.next = s), (r.next = o);
          }
          n.pending = r;
        }
      Fr = null;
    }
    return t;
  }
  function Vy(t, e) {
    do {
      var n = Ne;
      try {
        if ((bd(), (hl.current = gl), fl)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), (r = r.next);
          }
          fl = !1;
        }
        if (
          ((Ur = 0),
          (je = Me = xe = null),
          (ao = !1),
          (lo = 0),
          (Yd.current = null),
          n === null || n.return === null)
        ) {
          (Le = 1), (po = e), (Ne = null);
          break;
        }
        e: {
          var i = t,
            o = n.return,
            a = n,
            l = e;
          if (
            ((e = Ue),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              c = a,
              d = c.tag;
            if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var h = c.alternate;
              h
                ? ((c.updateQueue = h.updateQueue),
                  (c.memoizedState = h.memoizedState),
                  (c.lanes = h.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = dy(o);
            if (p !== null) {
              (p.flags &= -257),
                hy(p, o, a, i, e),
                p.mode & 1 && cy(i, u, e),
                (e = p),
                (l = u);
              var v = e.updateQueue;
              if (v === null) {
                var g = new Set();
                g.add(l), (e.updateQueue = g);
              } else v.add(l);
              break e;
            } else {
              if (!(e & 1)) {
                cy(i, u, e), lh();
                break e;
              }
              l = Error(A(426));
            }
          } else if (we && a.mode & 1) {
            var w = dy(o);
            if (w !== null) {
              !(w.flags & 65536) && (w.flags |= 256),
                hy(w, o, a, i, e),
                wd(Ds(l, a));
              break e;
            }
          }
          (i = l = Ds(l, a)),
            Le !== 4 && (Le = 2),
            mo === null ? (mo = [i]) : mo.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var m = ly(i, l, e);
                Ig(i, m);
                break e;
              case 1:
                a = l;
                var f = i.type,
                  y = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof f.getDerivedStateFromError == "function" ||
                    (y !== null &&
                      typeof y.componentDidCatch == "function" &&
                      (er === null || !er.has(y))))
                ) {
                  (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                  var _ = uy(i, a, e);
                  Ig(i, _);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        zy(n);
      } catch (S) {
        (e = S), Ne === n && n !== null && (Ne = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uy() {
    var t = xl.current;
    return (xl.current = gl), t === null ? gl : t;
  }
  function lh() {
    (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
      De === null || (!(Br & 268435455) && !(Sl & 268435455)) || rr(De, Ue);
  }
  function Cl(t, e) {
    var n = ie;
    ie |= 2;
    var r = Uy();
    (De !== t || Ue !== e) && ((An = null), Wr(t, e));
    do
      try {
        $1();
        break;
      } catch (s) {
        Vy(t, s);
      }
    while (!0);
    if ((bd(), (ie = n), (xl.current = r), Ne !== null)) throw Error(A(261));
    return (De = null), (Ue = 0), Le;
  }
  function $1() {
    for (; Ne !== null; ) By(Ne);
  }
  function F1() {
    for (; Ne !== null && !cS(); ) By(Ne);
  }
  function By(t) {
    var e = Gy(t.alternate, t, bt);
    (t.memoizedProps = t.pendingProps),
      e === null ? zy(t) : (Ne = e),
      (Yd.current = null);
  }
  function zy(t) {
    var e = t;
    do {
      var n = e.alternate;
      if (((t = e.return), e.flags & 32768)) {
        if (((n = O1(n, e)), n !== null)) {
          (n.flags &= 32767), (Ne = n);
          return;
        }
        if (t !== null)
          (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
        else {
          (Le = 6), (Ne = null);
          return;
        }
      } else if (((n = N1(n, e, bt)), n !== null)) {
        Ne = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ne = e;
        return;
      }
      Ne = e = t;
    } while (e !== null);
    Le === 0 && (Le = 5);
  }
  function Hr(t, e, n) {
    var r = ue,
      s = Rt.transition;
    try {
      (Rt.transition = null), (ue = 1), V1(t, e, n, r);
    } finally {
      (Rt.transition = s), (ue = r);
    }
    return null;
  }
  function V1(t, e, n, r) {
    do Us();
    while (tr !== null);
    if (ie & 6) throw Error(A(327));
    n = t.finishedWork;
    var s = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
      throw Error(A(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (_S(t, i),
      t === De && ((Ne = De = null), (Ue = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        El ||
        ((El = !0),
        qy(Ma, function () {
          return Us(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = Rt.transition), (Rt.transition = null);
      var o = ue;
      ue = 1;
      var a = ie;
      (ie |= 4),
        (Yd.current = null),
        L1(t, n),
        My(n, t),
        o1(ld),
        (Va = !!ad),
        (ld = ad = null),
        (t.current = n),
        I1(n),
        dS(),
        (ie = a),
        (ue = o),
        (Rt.transition = i);
    } else t.current = n;
    if (
      (El && ((El = !1), (tr = t), (Al = s)),
      (i = t.pendingLanes),
      i === 0 && (er = null),
      pS(n.stateNode),
      dt(t, Ce()),
      e !== null)
    )
      for (r = t.onRecoverableError, n = 0; n < e.length; n++)
        (s = e[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (kl) throw ((kl = !1), (t = nh), (nh = null), t);
    return (
      Al & 1 && t.tag !== 0 && Us(),
      (i = t.pendingLanes),
      i & 1 ? (t === rh ? go++ : ((go = 0), (rh = t))) : (go = 0),
      Qn(),
      null
    );
  }
  function Us() {
    if (tr !== null) {
      var t = Nm(Al),
        e = Rt.transition,
        n = ue;
      try {
        if (((Rt.transition = null), (ue = 16 > t ? 16 : t), tr === null))
          var r = !1;
        else {
          if (((t = tr), (tr = null), (Al = 0), ie & 6)) throw Error(A(331));
          var s = ie;
          for (ie |= 4, L = t.current; L !== null; ) {
            var i = L,
              o = i.child;
            if (L.flags & 16) {
              var a = i.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (L = u; L !== null; ) {
                    var c = L;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fo(8, c, i);
                    }
                    var d = c.child;
                    if (d !== null) (d.return = c), (L = d);
                    else
                      for (; L !== null; ) {
                        c = L;
                        var h = c.sibling,
                          p = c.return;
                        if ((Py(c), c === u)) {
                          L = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = p), (L = h);
                          break;
                        }
                        L = p;
                      }
                  }
                }
                var v = i.alternate;
                if (v !== null) {
                  var g = v.child;
                  if (g !== null) {
                    v.child = null;
                    do {
                      var w = g.sibling;
                      (g.sibling = null), (g = w);
                    } while (g !== null);
                  }
                }
                L = i;
              }
            }
            if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (L = o);
            else
              e: for (; L !== null; ) {
                if (((i = L), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  (m.return = i.return), (L = m);
                  break e;
                }
                L = i.return;
              }
          }
          var f = t.current;
          for (L = f; L !== null; ) {
            o = L;
            var y = o.child;
            if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (L = y);
            else
              e: for (o = f; L !== null; ) {
                if (((a = L), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bl(9, a);
                    }
                  } catch (S) {
                    Ee(a, a.return, S);
                  }
                if (a === o) {
                  L = null;
                  break e;
                }
                var _ = a.sibling;
                if (_ !== null) {
                  (_.return = a.return), (L = _);
                  break e;
                }
                L = a.return;
              }
          }
          if (
            ((ie = s),
            Qn(),
            Yt && typeof Yt.onPostCommitFiberRoot == "function")
          )
            try {
              Yt.onPostCommitFiberRoot(La, t);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (Rt.transition = e);
      }
    }
    return !1;
  }
  function Wy(t, e, n) {
    (e = Ds(n, e)),
      (e = ly(t, e, 1)),
      (t = Jn(t, e, 1)),
      (e = rt()),
      t !== null && (Fi(t, 1, e), dt(t, e));
  }
  function Ee(t, e, n) {
    if (t.tag === 3) Wy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Wy(e, t, n);
          break;
        } else if (e.tag === 1) {
          var r = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (er === null || !er.has(r)))
          ) {
            (t = Ds(n, t)),
              (t = uy(e, t, 1)),
              (e = Jn(e, t, 1)),
              (t = rt()),
              e !== null && (Fi(e, 1, t), dt(e, t));
            break;
          }
        }
        e = e.return;
      }
  }
  function U1(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
      (e = rt()),
      (t.pingedLanes |= t.suspendedLanes & n),
      De === t &&
        (Ue & n) === n &&
        (Le === 4 || (Le === 3 && (Ue & 130023424) === Ue && 500 > Ce() - th)
          ? Wr(t, 0)
          : (eh |= n)),
      dt(t, e);
  }
  function Hy(t, e) {
    e === 0 &&
      (t.mode & 1
        ? ((e = ja), (ja <<= 1), !(ja & 130023424) && (ja = 4194304))
        : (e = 1));
    var n = rt();
    (t = Sn(t, e)), t !== null && (Fi(t, e, n), dt(t, n));
  }
  function B1(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Hy(t, n);
  }
  function z1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    r !== null && r.delete(e), Hy(t, n);
  }
  var Gy;
  Gy = function (t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps || at.current) ut = !0;
      else {
        if (!(t.lanes & n) && !(e.flags & 128)) return (ut = !1), R1(t, e, n);
        ut = !!(t.flags & 131072);
      }
    else (ut = !1), we && e.flags & 1048576 && Eg(e, sl, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 2:
        var r = e.type;
        wl(t, e), (t = e.pendingProps);
        var s = Cs(e, ze.current);
        Is(e, n), (s = Od(null, e, r, t, s, n));
        var i = Md();
        return (
          (e.flags |= 1),
          typeof s == "object" &&
          s !== null &&
          typeof s.render == "function" &&
          s.$$typeof === void 0
            ? ((e.tag = 1),
              (e.memoizedState = null),
              (e.updateQueue = null),
              lt(r) ? ((i = !0), tl(e)) : (i = !1),
              (e.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              Ed(e),
              (s.updater = yl),
              (e.stateNode = s),
              (s._reactInternals = e),
              Fd(e, r, t, n),
              (e = zd(null, e, r, !0, i, n)))
            : ((e.tag = 0), we && i && md(e), nt(null, e, s, n), (e = e.child)),
          e
        );
      case 16:
        r = e.elementType;
        e: {
          switch (
            (wl(t, e),
            (t = e.pendingProps),
            (s = r._init),
            (r = s(r._payload)),
            (e.type = r),
            (s = e.tag = H1(r)),
            (t = Ut(r, t)),
            s)
          ) {
            case 0:
              e = Bd(null, e, r, t, n);
              break e;
            case 1:
              e = vy(null, e, r, t, n);
              break e;
            case 11:
              e = fy(null, e, r, t, n);
              break e;
            case 14:
              e = py(null, e, r, Ut(r.type, t), n);
              break e;
          }
          throw Error(A(306, r, ""));
        }
        return e;
      case 0:
        return (
          (r = e.type),
          (s = e.pendingProps),
          (s = e.elementType === r ? s : Ut(r, s)),
          Bd(t, e, r, s, n)
        );
      case 1:
        return (
          (r = e.type),
          (s = e.pendingProps),
          (s = e.elementType === r ? s : Ut(r, s)),
          vy(t, e, r, s, n)
        );
      case 3:
        e: {
          if ((wy(e), t === null)) throw Error(A(387));
          (r = e.pendingProps),
            (i = e.memoizedState),
            (s = i.element),
            Lg(t, e),
            cl(e, r, null, n);
          var o = e.memoizedState;
          if (((r = o.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              (s = Ds(Error(A(423)), e)), (e = _y(t, e, r, n, s));
              break e;
            } else if (r !== s) {
              (s = Ds(Error(A(424)), e)), (e = _y(t, e, r, n, s));
              break e;
            } else
              for (
                _t = qn(e.stateNode.containerInfo.firstChild),
                  wt = e,
                  we = !0,
                  Vt = null,
                  n = Og(e, null, r, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Os(), r === s)) {
              e = En(t, e, n);
              break e;
            }
            nt(t, e, r, n);
          }
          e = e.child;
        }
        return e;
      case 5:
        return (
          Dg(e),
          t === null && vd(e),
          (r = e.type),
          (s = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (o = s.children),
          ud(r, s) ? (o = null) : i !== null && ud(r, i) && (e.flags |= 32),
          yy(t, e),
          nt(t, e, o, n),
          e.child
        );
      case 6:
        return t === null && vd(e), null;
      case 13:
        return by(t, e, n);
      case 4:
        return (
          Ad(e, e.stateNode.containerInfo),
          (r = e.pendingProps),
          t === null ? (e.child = Ms(e, null, r, n)) : nt(t, e, r, n),
          e.child
        );
      case 11:
        return (
          (r = e.type),
          (s = e.pendingProps),
          (s = e.elementType === r ? s : Ut(r, s)),
          fy(t, e, r, s, n)
        );
      case 7:
        return nt(t, e, e.pendingProps, n), e.child;
      case 8:
        return nt(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return nt(t, e, e.pendingProps.children, n), e.child;
      case 10:
        e: {
          if (
            ((r = e.type._context),
            (s = e.pendingProps),
            (i = e.memoizedProps),
            (o = s.value),
            he(al, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (Ft(i.value, o)) {
              if (i.children === s.children && !at.current) {
                e = En(t, e, n);
                break e;
              }
            } else
              for (i = e.child, i !== null && (i.return = e); i !== null; ) {
                var a = i.dependencies;
                if (a !== null) {
                  o = i.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (i.tag === 1) {
                        (l = kn(-1, n & -n)), (l.tag = 2);
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
                            (u.pending = l);
                        }
                      }
                      (i.lanes |= n),
                        (l = i.alternate),
                        l !== null && (l.lanes |= n),
                        Sd(i.return, n, e),
                        (a.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((o = i.return), o === null)) throw Error(A(341));
                  (o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    Sd(o, n, e),
                    (o = i.sibling);
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                  for (o = i; o !== null; ) {
                    if (o === e) {
                      o = null;
                      break;
                    }
                    if (((i = o.sibling), i !== null)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          nt(t, e, s.children, n), (e = e.child);
        }
        return e;
      case 9:
        return (
          (s = e.type),
          (r = e.pendingProps.children),
          Is(e, n),
          (s = Pt(s)),
          (r = r(s)),
          (e.flags |= 1),
          nt(t, e, r, n),
          e.child
        );
      case 14:
        return (
          (r = e.type),
          (s = Ut(r, e.pendingProps)),
          (s = Ut(r.type, s)),
          py(t, e, r, s, n)
        );
      case 15:
        return my(t, e, e.type, e.pendingProps, n);
      case 17:
        return (
          (r = e.type),
          (s = e.pendingProps),
          (s = e.elementType === r ? s : Ut(r, s)),
          wl(t, e),
          (e.tag = 1),
          lt(r) ? ((t = !0), tl(e)) : (t = !1),
          Is(e, n),
          oy(e, r, s),
          Fd(e, r, s, n),
          zd(null, e, r, !0, t, n)
        );
      case 19:
        return Sy(t, e, n);
      case 22:
        return gy(t, e, n);
    }
    throw Error(A(156, e.tag));
  };
  function qy(t, e) {
    return Am(t, e);
  }
  function W1(t, e, n, r) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Nt(t, e, n, r) {
    return new W1(t, e, n, r);
  }
  function uh(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function H1(t) {
    if (typeof t == "function") return uh(t) ? 1 : 0;
    if (t != null) {
      if (((t = t.$$typeof), t === mc)) return 11;
      if (t === vc) return 14;
    }
    return 2;
  }
  function sr(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Nt(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 14680064),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      n
    );
  }
  function Rl(t, e, n, r, s, i) {
    var o = 2;
    if (((r = t), typeof t == "function")) uh(t) && (o = 1);
    else if (typeof t == "string") o = 5;
    else
      e: switch (t) {
        case gs:
          return Gr(n.children, s, i, e);
        case fc:
          (o = 8), (s |= 8);
          break;
        case pc:
          return (
            (t = Nt(12, n, e, s | 2)), (t.elementType = pc), (t.lanes = i), t
          );
        case gc:
          return (t = Nt(13, n, e, s)), (t.elementType = gc), (t.lanes = i), t;
        case yc:
          return (t = Nt(19, n, e, s)), (t.elementType = yc), (t.lanes = i), t;
        case nm:
          return Nl(n, s, i, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case em:
                o = 10;
                break e;
              case tm:
                o = 9;
                break e;
              case mc:
                o = 11;
                break e;
              case vc:
                o = 14;
                break e;
              case Fn:
                (o = 16), (r = null);
                break e;
            }
          throw Error(A(130, t == null ? t : typeof t, ""));
      }
    return (
      (e = Nt(o, n, e, s)), (e.elementType = t), (e.type = r), (e.lanes = i), e
    );
  }
  function Gr(t, e, n, r) {
    return (t = Nt(7, t, r, e)), (t.lanes = n), t;
  }
  function Nl(t, e, n, r) {
    return (
      (t = Nt(22, t, r, e)),
      (t.elementType = nm),
      (t.lanes = n),
      (t.stateNode = { isHidden: !1 }),
      t
    );
  }
  function ch(t, e, n) {
    return (t = Nt(6, t, null, e)), (t.lanes = n), t;
  }
  function dh(t, e, n) {
    return (
      (e = Nt(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function G1(t, e, n, r, s) {
    (this.tag = e),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $c(0)),
      (this.expirationTimes = $c(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $c(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
  }
  function hh(t, e, n, r, s, i, o, a, l) {
    return (
      (t = new G1(t, e, n, a, l)),
      e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
      (i = Nt(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ed(i),
      t
    );
  }
  function q1(t, e, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ms,
      key: r == null ? null : "" + r,
      children: t,
      containerInfo: e,
      implementation: n,
    };
  }
  function Ky(t) {
    if (!t) return Zn;
    t = t._reactInternals;
    e: {
      if (Lr(t) !== t || t.tag !== 1) throw Error(A(170));
      var e = t;
      do {
        switch (e.tag) {
          case 3:
            e = e.stateNode.context;
            break e;
          case 1:
            if (lt(e.type)) {
              e = e.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        e = e.return;
      } while (e !== null);
      throw Error(A(171));
    }
    if (t.tag === 1) {
      var n = t.type;
      if (lt(n)) return xg(t, n, e);
    }
    return e;
  }
  function Zy(t, e, n, r, s, i, o, a, l) {
    return (
      (t = hh(n, r, !0, t, s, i, o, a, l)),
      (t.context = Ky(null)),
      (n = t.current),
      (r = rt()),
      (s = nr(n)),
      (i = kn(r, s)),
      (i.callback = e ?? null),
      Jn(n, i, s),
      (t.current.lanes = s),
      Fi(t, s, r),
      dt(t, r),
      t
    );
  }
  function Ol(t, e, n, r) {
    var s = e.current,
      i = rt(),
      o = nr(s);
    return (
      (n = Ky(n)),
      e.context === null ? (e.context = n) : (e.pendingContext = n),
      (e = kn(i, o)),
      (e.payload = { element: t }),
      (r = r === void 0 ? null : r),
      r !== null && (e.callback = r),
      (t = Jn(s, e, o)),
      t !== null && (Wt(t, s, o, i), ul(t, s, o)),
      o
    );
  }
  function Ml(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Qy(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function fh(t, e) {
    Qy(t, e), (t = t.alternate) && Qy(t, e);
  }
  function K1() {
    return null;
  }
  var Xy =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          console.error(t);
        };
  function ph(t) {
    this._internalRoot = t;
  }
  (Ll.prototype.render = ph.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(A(409));
      Ol(t, e, null, null);
    }),
    (Ll.prototype.unmount = ph.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          zr(function () {
            Ol(null, t, null, null);
          }),
            (e[wn] = null);
        }
      });
  function Ll(t) {
    this._internalRoot = t;
  }
  Ll.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Lm();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Wn.length && e !== 0 && e < Wn[n].priority; n++);
      Wn.splice(n, 0, t), n === 0 && Dm(t);
    }
  };
  function mh(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function Il(t) {
    return !(
      !t ||
      (t.nodeType !== 1 &&
        t.nodeType !== 9 &&
        t.nodeType !== 11 &&
        (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Jy() {}
  function Z1(t, e, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = Ml(o);
          i.call(u);
        };
      }
      var o = Zy(e, r, t, 0, null, !1, !1, "", Jy);
      return (
        (t._reactRootContainer = o),
        (t[wn] = o.current),
        Yi(t.nodeType === 8 ? t.parentNode : t),
        zr(),
        o
      );
    }
    for (; (s = t.lastChild); ) t.removeChild(s);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = Ml(l);
        a.call(u);
      };
    }
    var l = hh(t, 0, !1, null, null, !1, !1, "", Jy);
    return (
      (t._reactRootContainer = l),
      (t[wn] = l.current),
      Yi(t.nodeType === 8 ? t.parentNode : t),
      zr(function () {
        Ol(e, l, n, r);
      }),
      l
    );
  }
  function jl(t, e, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof s == "function") {
        var a = s;
        s = function () {
          var l = Ml(o);
          a.call(l);
        };
      }
      Ol(e, o, t, s);
    } else o = Z1(n, e, t, s, r);
    return Ml(o);
  }
  (Om = function (t) {
    switch (t.tag) {
      case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
          var n = $i(e.pendingLanes);
          n !== 0 &&
            (Fc(e, n | 1), dt(e, Ce()), !(ie & 6) && ((Vs = Ce() + 500), Qn()));
        }
        break;
      case 13:
        zr(function () {
          var r = Sn(t, 1);
          if (r !== null) {
            var s = rt();
            Wt(r, t, 1, s);
          }
        }),
          fh(t, 1);
    }
  }),
    (Vc = function (t) {
      if (t.tag === 13) {
        var e = Sn(t, 134217728);
        if (e !== null) {
          var n = rt();
          Wt(e, t, 134217728, n);
        }
        fh(t, 134217728);
      }
    }),
    (Mm = function (t) {
      if (t.tag === 13) {
        var e = nr(t),
          n = Sn(t, e);
        if (n !== null) {
          var r = rt();
          Wt(n, t, e, r);
        }
        fh(t, e);
      }
    }),
    (Lm = function () {
      return ue;
    }),
    (Im = function (t, e) {
      var n = ue;
      try {
        return (ue = t), e();
      } finally {
        ue = n;
      }
    }),
    (Oc = function (t, e, n) {
      switch (e) {
        case "input":
          if ((kc(t, n), (e = n.name), n.type === "radio" && e != null)) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var r = n[e];
              if (r !== t && r.form === t.form) {
                var s = Ya(r);
                if (!s) throw Error(A(90));
                im(r), kc(r, s);
              }
            }
          }
          break;
        case "textarea":
          cm(t, n);
          break;
        case "select":
          (e = n.value), e != null && ys(t, !!n.multiple, e, !1);
      }
    }),
    (wm = oh),
    (_m = zr);
  var Q1 = { usingClientEntryPoint: !1, Events: [no, Ts, Ya, ym, vm, oh] },
    yo = {
      findFiberByHostInstance: Ir,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    X1 = {
      bundleType: yo.bundleType,
      version: yo.version,
      rendererPackageName: yo.rendererPackageName,
      rendererConfig: yo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: vn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (t) {
        return (t = km(t)), t === null ? null : t.stateNode;
      },
      findFiberByHostInstance: yo.findFiberByHostInstance || K1,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dl.isDisabled && Dl.supportsFiber)
      try {
        (La = Dl.inject(X1)), (Yt = Dl);
      } catch {}
  }
  (gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q1),
    (gt.createPortal = function (t, e) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!mh(e)) throw Error(A(200));
      return q1(t, e, null, n);
    }),
    (gt.createRoot = function (t, e) {
      if (!mh(t)) throw Error(A(299));
      var n = !1,
        r = "",
        s = Xy;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
          e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
        (e = hh(t, 1, !1, null, null, n, !1, r, s)),
        (t[wn] = e.current),
        Yi(t.nodeType === 8 ? t.parentNode : t),
        new ph(e)
      );
    }),
    (gt.findDOMNode = function (t) {
      if (t == null) return null;
      if (t.nodeType === 1) return t;
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function"
          ? Error(A(188))
          : ((t = Object.keys(t).join(",")), Error(A(268, t)));
      return (t = km(e)), (t = t === null ? null : t.stateNode), t;
    }),
    (gt.flushSync = function (t) {
      return zr(t);
    }),
    (gt.hydrate = function (t, e, n) {
      if (!Il(e)) throw Error(A(200));
      return jl(null, t, e, !0, n);
    }),
    (gt.hydrateRoot = function (t, e, n) {
      if (!mh(t)) throw Error(A(405));
      var r = (n != null && n.hydratedSources) || null,
        s = !1,
        i = "",
        o = Xy;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (e = Zy(e, null, t, 1, n ?? null, s, !1, i, o)),
        (t[wn] = e.current),
        Yi(t),
        r)
      )
        for (t = 0; t < r.length; t++)
          (n = r[t]),
            (s = n._getVersion),
            (s = s(n._source)),
            e.mutableSourceEagerHydrationData == null
              ? (e.mutableSourceEagerHydrationData = [n, s])
              : e.mutableSourceEagerHydrationData.push(n, s);
      return new Ll(e);
    }),
    (gt.render = function (t, e, n) {
      if (!Il(e)) throw Error(A(200));
      return jl(null, t, e, !1, n);
    }),
    (gt.unmountComponentAtNode = function (t) {
      if (!Il(t)) throw Error(A(40));
      return t._reactRootContainer
        ? (zr(function () {
            jl(null, null, t, !1, function () {
              (t._reactRootContainer = null), (t[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (gt.unstable_batchedUpdates = oh),
    (gt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
      if (!Il(n)) throw Error(A(200));
      if (t == null || t._reactInternals === void 0) throw Error(A(38));
      return jl(t, e, n, !1, r);
    }),
    (gt.version = "18.3.1-next-f1338f8080-20240426");
  function Yy() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yy);
      } catch (t) {
        console.error(t);
      }
  }
  Yy(), (jp.exports = gt);
  var J1 = jp.exports,
    ev,
    tv = J1;
  (ev = tv.createRoot), tv.hydrateRoot;
  var nv = { exports: {} },
    $l = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Y1 = C,
    ek = Symbol.for("react.element"),
    tk = Symbol.for("react.fragment"),
    nk = Object.prototype.hasOwnProperty,
    rk =
      Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    sk = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rv(t, e, n) {
    var r,
      s = {},
      i = null,
      o = null;
    n !== void 0 && (i = "" + n),
      e.key !== void 0 && (i = "" + e.key),
      e.ref !== void 0 && (o = e.ref);
    for (r in e) nk.call(e, r) && !sk.hasOwnProperty(r) && (s[r] = e[r]);
    if (t && t.defaultProps)
      for (r in ((e = t.defaultProps), e)) s[r] === void 0 && (s[r] = e[r]);
    return {
      $$typeof: ek,
      type: t,
      key: i,
      ref: o,
      props: s,
      _owner: rk.current,
    };
  }
  ($l.Fragment = tk), ($l.jsx = rv), ($l.jsxs = rv), (nv.exports = $l);
  var D = nv.exports,
    Fl = class {
      constructor() {
        (this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this));
      }
      subscribe(t) {
        return (
          this.listeners.add(t),
          this.onSubscribe(),
          () => {
            this.listeners.delete(t), this.onUnsubscribe();
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    },
    Vl = typeof window > "u" || "Deno" in globalThis;
  function Ht() {}
  function ik(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function ok(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0;
  }
  function ak(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0);
  }
  function sv(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function lk(t, e) {
    return typeof t == "function" ? t(e) : t;
  }
  function iv(t, e) {
    const {
      type: n = "all",
      exact: r,
      fetchStatus: s,
      predicate: i,
      queryKey: o,
      stale: a,
    } = t;
    if (o) {
      if (r) {
        if (e.queryHash !== gh(o, e.options)) return !1;
      } else if (!wo(e.queryKey, o)) return !1;
    }
    if (n !== "all") {
      const l = e.isActive();
      if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !(
      (typeof a == "boolean" && e.isStale() !== a) ||
      (s && s !== e.state.fetchStatus) ||
      (i && !i(e))
    );
  }
  function ov(t, e) {
    const { exact: n, status: r, predicate: s, mutationKey: i } = t;
    if (i) {
      if (!e.options.mutationKey) return !1;
      if (n) {
        if (vo(e.options.mutationKey) !== vo(i)) return !1;
      } else if (!wo(e.options.mutationKey, i)) return !1;
    }
    return !((r && e.state.status !== r) || (s && !s(e)));
  }
  function gh(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || vo)(t);
  }
  function vo(t) {
    return JSON.stringify(t, (e, n) =>
      yh(n)
        ? Object.keys(n)
            .sort()
            .reduce((r, s) => ((r[s] = n[s]), r), {})
        : n,
    );
  }
  function wo(t, e) {
    return t === e
      ? !0
      : typeof t != typeof e
        ? !1
        : t && e && typeof t == "object" && typeof e == "object"
          ? !Object.keys(e).some((n) => !wo(t[n], e[n]))
          : !1;
  }
  function av(t, e) {
    if (t === e) return t;
    const n = lv(t) && lv(e);
    if (n || (yh(t) && yh(e))) {
      const r = n ? t : Object.keys(t),
        s = r.length,
        i = n ? e : Object.keys(e),
        o = i.length,
        a = n ? [] : {};
      let l = 0;
      for (let u = 0; u < o; u++) {
        const c = n ? u : i[u];
        ((!n && r.includes(c)) || n) && t[c] === void 0 && e[c] === void 0
          ? ((a[c] = void 0), l++)
          : ((a[c] = av(t[c], e[c])), a[c] === t[c] && t[c] !== void 0 && l++);
      }
      return s === o && l === s ? t : a;
    }
    return e;
  }
  function lv(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length;
  }
  function yh(t) {
    if (!uv(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const n = e.prototype;
    return !(
      !uv(n) ||
      !n.hasOwnProperty("isPrototypeOf") ||
      Object.getPrototypeOf(t) !== Object.prototype
    );
  }
  function uv(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function uk(t) {
    return new Promise((e) => {
      setTimeout(e, t);
    });
  }
  function ck(t, e, n) {
    return typeof n.structuralSharing == "function"
      ? n.structuralSharing(t, e)
      : n.structuralSharing !== !1
        ? av(t, e)
        : e;
  }
  function dk(t, e, n = 0) {
    const r = [...t, e];
    return n && r.length > n ? r.slice(1) : r;
  }
  function hk(t, e, n = 0) {
    const r = [e, ...t];
    return n && r.length > n ? r.slice(0, -1) : r;
  }
  var vh = Symbol();
  function cv(t, e) {
    return !t.queryFn && e != null && e.initialPromise
      ? () => e.initialPromise
      : !t.queryFn || t.queryFn === vh
        ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
        : t.queryFn;
  }
  var fk =
      ((lx = class extends Fl {
        constructor() {
          super();
          le(this, ls);
          le(this, kr);
          le(this, yi);
          Q(this, yi, (e) => {
            if (!Vl && window.addEventListener) {
              const n = () => e();
              return (
                window.addEventListener("visibilitychange", n, !1),
                () => {
                  window.removeEventListener("visibilitychange", n);
                }
              );
            }
          });
        }
        onSubscribe() {
          E(this, kr) || this.setEventListener(E(this, yi));
        }
        onUnsubscribe() {
          var e;
          this.hasListeners() ||
            ((e = E(this, kr)) == null || e.call(this), Q(this, kr, void 0));
        }
        setEventListener(e) {
          var n;
          Q(this, yi, e),
            (n = E(this, kr)) == null || n.call(this),
            Q(
              this,
              kr,
              e((r) => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
              }),
            );
        }
        setFocused(e) {
          E(this, ls) !== e && (Q(this, ls, e), this.onFocus());
        }
        onFocus() {
          const e = this.isFocused();
          this.listeners.forEach((n) => {
            n(e);
          });
        }
        isFocused() {
          var e;
          return typeof E(this, ls) == "boolean"
            ? E(this, ls)
            : ((e = globalThis.document) == null
                ? void 0
                : e.visibilityState) !== "hidden";
        }
      }),
      (ls = new WeakMap()),
      (kr = new WeakMap()),
      (yi = new WeakMap()),
      lx),
    dv = new fk(),
    pk =
      ((ux = class extends Fl {
        constructor() {
          super();
          le(this, vi, !0);
          le(this, Er);
          le(this, wi);
          Q(this, wi, (e) => {
            if (!Vl && window.addEventListener) {
              const n = () => e(!0),
                r = () => e(!1);
              return (
                window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                  window.removeEventListener("online", n),
                    window.removeEventListener("offline", r);
                }
              );
            }
          });
        }
        onSubscribe() {
          E(this, Er) || this.setEventListener(E(this, wi));
        }
        onUnsubscribe() {
          var e;
          this.hasListeners() ||
            ((e = E(this, Er)) == null || e.call(this), Q(this, Er, void 0));
        }
        setEventListener(e) {
          var n;
          Q(this, wi, e),
            (n = E(this, Er)) == null || n.call(this),
            Q(this, Er, e(this.setOnline.bind(this)));
        }
        setOnline(e) {
          E(this, vi) !== e &&
            (Q(this, vi, e),
            this.listeners.forEach((r) => {
              r(e);
            }));
        }
        isOnline() {
          return E(this, vi);
        }
      }),
      (vi = new WeakMap()),
      (Er = new WeakMap()),
      (wi = new WeakMap()),
      ux),
    Ul = new pk();
  function mk() {
    let t, e;
    const n = new Promise((s, i) => {
      (t = s), (e = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(s) {
      Object.assign(n, s), delete n.resolve, delete n.reject;
    }
    return (
      (n.resolve = (s) => {
        r({ status: "fulfilled", value: s }), t(s);
      }),
      (n.reject = (s) => {
        r({ status: "rejected", reason: s }), e(s);
      }),
      n
    );
  }
  function gk(t) {
    return Math.min(1e3 * 2 ** t, 3e4);
  }
  function hv(t) {
    return (t ?? "online") === "online" ? Ul.isOnline() : !0;
  }
  var fv = class extends Error {
    constructor(t) {
      super("CancelledError"),
        (this.revert = t == null ? void 0 : t.revert),
        (this.silent = t == null ? void 0 : t.silent);
    }
  };
  function wh(t) {
    return t instanceof fv;
  }
  function pv(t) {
    let e = !1,
      n = 0,
      r = !1,
      s;
    const i = mk(),
      o = (g) => {
        var w;
        r || (h(new fv(g)), (w = t.abort) == null || w.call(t));
      },
      a = () => {
        e = !0;
      },
      l = () => {
        e = !1;
      },
      u = () =>
        dv.isFocused() &&
        (t.networkMode === "always" || Ul.isOnline()) &&
        t.canRun(),
      c = () => hv(t.networkMode) && t.canRun(),
      d = (g) => {
        var w;
        r ||
          ((r = !0),
          (w = t.onSuccess) == null || w.call(t, g),
          s == null || s(),
          i.resolve(g));
      },
      h = (g) => {
        var w;
        r ||
          ((r = !0),
          (w = t.onError) == null || w.call(t, g),
          s == null || s(),
          i.reject(g));
      },
      p = () =>
        new Promise((g) => {
          var w;
          (s = (m) => {
            (r || u()) && g(m);
          }),
            (w = t.onPause) == null || w.call(t);
        }).then(() => {
          var g;
          (s = void 0), r || (g = t.onContinue) == null || g.call(t);
        }),
      v = () => {
        if (r) return;
        let g;
        const w = n === 0 ? t.initialPromise : void 0;
        try {
          g = w ?? t.fn();
        } catch (m) {
          g = Promise.reject(m);
        }
        Promise.resolve(g)
          .then(d)
          .catch((m) => {
            var b;
            if (r) return;
            const f = t.retry ?? (Vl ? 0 : 3),
              y = t.retryDelay ?? gk,
              _ = typeof y == "function" ? y(n, m) : y,
              S =
                f === !0 ||
                (typeof f == "number" && n < f) ||
                (typeof f == "function" && f(n, m));
            if (e || !S) {
              h(m);
              return;
            }
            n++,
              (b = t.onFail) == null || b.call(t, n, m),
              uk(_)
                .then(() => (u() ? void 0 : p()))
                .then(() => {
                  e ? h(m) : v();
                });
          });
      };
    return {
      promise: i,
      cancel: o,
      continue: () => (s == null || s(), i),
      cancelRetry: a,
      continueRetry: l,
      canStart: c,
      start: () => (c() ? v() : p().then(v), i),
    };
  }
  function yk() {
    let t = [],
      e = 0,
      n = (a) => {
        a();
      },
      r = (a) => {
        a();
      },
      s = (a) => setTimeout(a, 0);
    const i = (a) => {
        e
          ? t.push(a)
          : s(() => {
              n(a);
            });
      },
      o = () => {
        const a = t;
        (t = []),
          a.length &&
            s(() => {
              r(() => {
                a.forEach((l) => {
                  n(l);
                });
              });
            });
      };
    return {
      batch: (a) => {
        let l;
        e++;
        try {
          l = a();
        } finally {
          e--, e || o();
        }
        return l;
      },
      batchCalls:
        (a) =>
        (...l) => {
          i(() => {
            a(...l);
          });
        },
      schedule: i,
      setNotifyFunction: (a) => {
        n = a;
      },
      setBatchNotifyFunction: (a) => {
        r = a;
      },
      setScheduler: (a) => {
        s = a;
      },
    };
  }
  var st = yk(),
    mv =
      ((cx = class {
        constructor() {
          le(this, us);
        }
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            ok(this.gcTime) &&
              Q(
                this,
                us,
                setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime),
              );
        }
        updateGcTime(t) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            t ?? (Vl ? 1 / 0 : 5 * 60 * 1e3),
          );
        }
        clearGcTimeout() {
          E(this, us) && (clearTimeout(E(this, us)), Q(this, us, void 0));
        }
      }),
      (us = new WeakMap()),
      cx),
    vk =
      ((dx = class extends mv {
        constructor(e) {
          super();
          le(this, Jt);
          le(this, _i);
          le(this, bi);
          le(this, jt);
          le(this, Je);
          le(this, wa);
          le(this, cs);
          Q(this, cs, !1),
            Q(this, wa, e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            Q(this, jt, e.cache),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            Q(this, _i, _k(this.options)),
            (this.state = e.state ?? E(this, _i)),
            this.scheduleGc();
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          var e;
          return (e = E(this, Je)) == null ? void 0 : e.promise;
        }
        setOptions(e) {
          (this.options = { ...E(this, wa), ...e }),
            this.updateGcTime(this.options.gcTime);
        }
        optionalRemove() {
          !this.observers.length &&
            this.state.fetchStatus === "idle" &&
            E(this, jt).remove(this);
        }
        setData(e, n) {
          const r = ck(this.state.data, e, this.options);
          return (
            Ye(this, Jt, $n).call(this, {
              data: r,
              type: "success",
              dataUpdatedAt: n == null ? void 0 : n.updatedAt,
              manual: n == null ? void 0 : n.manual,
            }),
            r
          );
        }
        setState(e, n) {
          Ye(this, Jt, $n).call(this, {
            type: "setState",
            state: e,
            setStateOptions: n,
          });
        }
        cancel(e) {
          var r, s;
          const n = (r = E(this, Je)) == null ? void 0 : r.promise;
          return (
            (s = E(this, Je)) == null || s.cancel(e),
            n ? n.then(Ht).catch(Ht) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(E(this, _i));
        }
        isActive() {
          return this.observers.some((e) => lk(e.options.enabled, this) !== !1);
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === vh ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStale() {
          return this.state.isInvalidated
            ? !0
            : this.getObserversCount() > 0
              ? this.observers.some((e) => e.getCurrentResult().isStale)
              : this.state.data === void 0;
        }
        isStaleByTime(e = 0) {
          return (
            this.state.isInvalidated ||
            this.state.data === void 0 ||
            !ak(this.state.dataUpdatedAt, e)
          );
        }
        onFocus() {
          var n;
          const e = this.observers.find((r) => r.shouldFetchOnWindowFocus());
          e == null || e.refetch({ cancelRefetch: !1 }),
            (n = E(this, Je)) == null || n.continue();
        }
        onOnline() {
          var n;
          const e = this.observers.find((r) => r.shouldFetchOnReconnect());
          e == null || e.refetch({ cancelRefetch: !1 }),
            (n = E(this, Je)) == null || n.continue();
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            E(this, jt).notify({
              type: "observerAdded",
              query: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((n) => n !== e)),
            this.observers.length ||
              (E(this, Je) &&
                (E(this, cs)
                  ? E(this, Je).cancel({ revert: !0 })
                  : E(this, Je).cancelRetry()),
              this.scheduleGc()),
            E(this, jt).notify({
              type: "observerRemoved",
              query: this,
              observer: e,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated ||
            Ye(this, Jt, $n).call(this, { type: "invalidate" });
        }
        fetch(e, n) {
          var l, u, c;
          if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && n != null && n.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (E(this, Je))
              return E(this, Je).continueRetry(), E(this, Je).promise;
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            const d = this.observers.find((h) => h.options.queryFn);
            d && this.setOptions(d.options);
          }
          const r = new AbortController(),
            s = (d) => {
              Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (Q(this, cs, !0), r.signal),
              });
            },
            i = () => {
              const d = cv(this.options, n),
                h = { queryKey: this.queryKey, meta: this.meta };
              return (
                s(h),
                Q(this, cs, !1),
                this.options.persister
                  ? this.options.persister(d, h, this)
                  : d(h)
              );
            },
            o = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: i,
            };
          s(o),
            (l = this.options.behavior) == null || l.onFetch(o, this),
            Q(this, bi, this.state),
            (this.state.fetchStatus === "idle" ||
              this.state.fetchMeta !==
                ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
              Ye(this, Jt, $n).call(this, {
                type: "fetch",
                meta: (c = o.fetchOptions) == null ? void 0 : c.meta,
              });
          const a = (d) => {
            var h, p, v, g;
            (wh(d) && d.silent) ||
              Ye(this, Jt, $n).call(this, { type: "error", error: d }),
              wh(d) ||
                ((p = (h = E(this, jt).config).onError) == null ||
                  p.call(h, d, this),
                (g = (v = E(this, jt).config).onSettled) == null ||
                  g.call(v, this.state.data, d, this)),
              this.scheduleGc();
          };
          return (
            Q(
              this,
              Je,
              pv({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: o.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (d) => {
                  var h, p, v, g;
                  if (d === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(d);
                  } catch (w) {
                    a(w);
                    return;
                  }
                  (p = (h = E(this, jt).config).onSuccess) == null ||
                    p.call(h, d, this),
                    (g = (v = E(this, jt).config).onSettled) == null ||
                      g.call(v, d, this.state.error, this),
                    this.scheduleGc();
                },
                onError: a,
                onFail: (d, h) => {
                  Ye(this, Jt, $n).call(this, {
                    type: "failed",
                    failureCount: d,
                    error: h,
                  });
                },
                onPause: () => {
                  Ye(this, Jt, $n).call(this, { type: "pause" });
                },
                onContinue: () => {
                  Ye(this, Jt, $n).call(this, { type: "continue" });
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0,
              }),
            ),
            E(this, Je).start()
          );
        }
      }),
      (_i = new WeakMap()),
      (bi = new WeakMap()),
      (jt = new WeakMap()),
      (Je = new WeakMap()),
      (wa = new WeakMap()),
      (cs = new WeakMap()),
      (Jt = new WeakSet()),
      ($n = function (e) {
        const n = (r) => {
          switch (e.type) {
            case "failed":
              return {
                ...r,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error,
              };
            case "pause":
              return { ...r, fetchStatus: "paused" };
            case "continue":
              return { ...r, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...r,
                ...wk(r.data, this.options),
                fetchMeta: e.meta ?? null,
              };
            case "success":
              return {
                ...r,
                data: e.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              const s = e.error;
              return wh(s) && s.revert && E(this, bi)
                ? { ...E(this, bi), fetchStatus: "idle" }
                : {
                    ...r,
                    error: s,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error",
                  };
            case "invalidate":
              return { ...r, isInvalidated: !0 };
            case "setState":
              return { ...r, ...e.state };
          }
        };
        (this.state = n(this.state)),
          st.batch(() => {
            this.observers.forEach((r) => {
              r.onQueryUpdate();
            }),
              E(this, jt).notify({ query: this, type: "updated", action: e });
          });
      }),
      dx);
  function wk(t, e) {
    return {
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchStatus: hv(e.networkMode) ? "fetching" : "paused",
      ...(t === void 0 && { error: null, status: "pending" }),
    };
  }
  function _k(t) {
    const e =
        typeof t.initialData == "function" ? t.initialData() : t.initialData,
      n = e !== void 0,
      r = n
        ? typeof t.initialDataUpdatedAt == "function"
          ? t.initialDataUpdatedAt()
          : t.initialDataUpdatedAt
        : 0;
    return {
      data: e,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? (r ?? Date.now()) : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: n ? "success" : "pending",
      fetchStatus: "idle",
    };
  }
  var bk =
      ((hx = class extends Fl {
        constructor(e = {}) {
          super();
          le(this, dn);
          (this.config = e), Q(this, dn, new Map());
        }
        build(e, n, r) {
          const s = n.queryKey,
            i = n.queryHash ?? gh(s, n);
          let o = this.get(i);
          return (
            o ||
              ((o = new vk({
                cache: this,
                queryKey: s,
                queryHash: i,
                options: e.defaultQueryOptions(n),
                state: r,
                defaultOptions: e.getQueryDefaults(s),
              })),
              this.add(o)),
            o
          );
        }
        add(e) {
          E(this, dn).has(e.queryHash) ||
            (E(this, dn).set(e.queryHash, e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          const n = E(this, dn).get(e.queryHash);
          n &&
            (e.destroy(),
            n === e && E(this, dn).delete(e.queryHash),
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          st.batch(() => {
            this.getAll().forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return E(this, dn).get(e);
        }
        getAll() {
          return [...E(this, dn).values()];
        }
        find(e) {
          const n = { exact: !0, ...e };
          return this.getAll().find((r) => iv(n, r));
        }
        findAll(e = {}) {
          const n = this.getAll();
          return Object.keys(e).length > 0 ? n.filter((r) => iv(e, r)) : n;
        }
        notify(e) {
          st.batch(() => {
            this.listeners.forEach((n) => {
              n(e);
            });
          });
        }
        onFocus() {
          st.batch(() => {
            this.getAll().forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          st.batch(() => {
            this.getAll().forEach((e) => {
              e.onOnline();
            });
          });
        }
      }),
      (dn = new WeakMap()),
      hx),
    xk =
      ((fx = class extends mv {
        constructor(e) {
          super();
          le(this, fn);
          le(this, hn);
          le(this, ot);
          le(this, ds);
          (this.mutationId = e.mutationId),
            Q(this, ot, e.mutationCache),
            Q(this, hn, []),
            (this.state = e.state || Sk()),
            this.setOptions(e.options),
            this.scheduleGc();
        }
        setOptions(e) {
          (this.options = e), this.updateGcTime(this.options.gcTime);
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(e) {
          E(this, hn).includes(e) ||
            (E(this, hn).push(e),
            this.clearGcTimeout(),
            E(this, ot).notify({
              type: "observerAdded",
              mutation: this,
              observer: e,
            }));
        }
        removeObserver(e) {
          Q(
            this,
            hn,
            E(this, hn).filter((n) => n !== e),
          ),
            this.scheduleGc(),
            E(this, ot).notify({
              type: "observerRemoved",
              mutation: this,
              observer: e,
            });
        }
        optionalRemove() {
          E(this, hn).length ||
            (this.state.status === "pending"
              ? this.scheduleGc()
              : E(this, ot).remove(this));
        }
        continue() {
          var e;
          return (
            ((e = E(this, ds)) == null ? void 0 : e.continue()) ??
            this.execute(this.state.variables)
          );
        }
        async execute(e) {
          var s, i, o, a, l, u, c, d, h, p, v, g, w, m, f, y, _, S, b, k;
          Q(
            this,
            ds,
            pv({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(new Error("No mutationFn found")),
              onFail: (x, R) => {
                Ye(this, fn, Nr).call(this, {
                  type: "failed",
                  failureCount: x,
                  error: R,
                });
              },
              onPause: () => {
                Ye(this, fn, Nr).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ye(this, fn, Nr).call(this, { type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => E(this, ot).canRun(this),
            }),
          );
          const n = this.state.status === "pending",
            r = !E(this, ds).canStart();
          try {
            if (!n) {
              Ye(this, fn, Nr).call(this, {
                type: "pending",
                variables: e,
                isPaused: r,
              }),
                await ((i = (s = E(this, ot).config).onMutate) == null
                  ? void 0
                  : i.call(s, e, this));
              const R = await ((a = (o = this.options).onMutate) == null
                ? void 0
                : a.call(o, e));
              R !== this.state.context &&
                Ye(this, fn, Nr).call(this, {
                  type: "pending",
                  context: R,
                  variables: e,
                  isPaused: r,
                });
            }
            const x = await E(this, ds).start();
            return (
              await ((u = (l = E(this, ot).config).onSuccess) == null
                ? void 0
                : u.call(l, x, e, this.state.context, this)),
              await ((d = (c = this.options).onSuccess) == null
                ? void 0
                : d.call(c, x, e, this.state.context)),
              await ((p = (h = E(this, ot).config).onSettled) == null
                ? void 0
                : p.call(
                    h,
                    x,
                    null,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((g = (v = this.options).onSettled) == null
                ? void 0
                : g.call(v, x, null, e, this.state.context)),
              Ye(this, fn, Nr).call(this, { type: "success", data: x }),
              x
            );
          } catch (x) {
            try {
              throw (
                (await ((m = (w = E(this, ot).config).onError) == null
                  ? void 0
                  : m.call(w, x, e, this.state.context, this)),
                await ((y = (f = this.options).onError) == null
                  ? void 0
                  : y.call(f, x, e, this.state.context)),
                await ((S = (_ = E(this, ot).config).onSettled) == null
                  ? void 0
                  : S.call(
                      _,
                      void 0,
                      x,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await ((k = (b = this.options).onSettled) == null
                  ? void 0
                  : k.call(b, void 0, x, e, this.state.context)),
                x)
              );
            } finally {
              Ye(this, fn, Nr).call(this, { type: "error", error: x });
            }
          } finally {
            E(this, ot).runNext(this);
          }
        }
      }),
      (hn = new WeakMap()),
      (ot = new WeakMap()),
      (ds = new WeakMap()),
      (fn = new WeakSet()),
      (Nr = function (e) {
        const n = (r) => {
          switch (e.type) {
            case "failed":
              return {
                ...r,
                failureCount: e.failureCount,
                failureReason: e.error,
              };
            case "pause":
              return { ...r, isPaused: !0 };
            case "continue":
              return { ...r, isPaused: !1 };
            case "pending":
              return {
                ...r,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: e.isPaused,
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...r,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...r,
                data: void 0,
                error: e.error,
                failureCount: r.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error",
              };
          }
        };
        (this.state = n(this.state)),
          st.batch(() => {
            E(this, hn).forEach((r) => {
              r.onMutationUpdate(e);
            }),
              E(this, ot).notify({
                mutation: this,
                type: "updated",
                action: e,
              });
          });
      }),
      fx);
  function Sk() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
      submittedAt: 0,
    };
  }
  var kk =
    ((px = class extends Fl {
      constructor(e = {}) {
        super();
        le(this, Et);
        le(this, _a);
        (this.config = e), Q(this, Et, new Map()), Q(this, _a, Date.now());
      }
      build(e, n, r) {
        const s = new xk({
          mutationCache: this,
          mutationId: ++Yu(this, _a)._,
          options: e.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(e) {
        const n = Bl(e),
          r = E(this, Et).get(n) ?? [];
        r.push(e),
          E(this, Et).set(n, r),
          this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        var r;
        const n = Bl(e);
        if (E(this, Et).has(n)) {
          const s =
            (r = E(this, Et).get(n)) == null
              ? void 0
              : r.filter((i) => i !== e);
          s && (s.length === 0 ? E(this, Et).delete(n) : E(this, Et).set(n, s));
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        var r;
        const n =
          (r = E(this, Et).get(Bl(e))) == null
            ? void 0
            : r.find((s) => s.state.status === "pending");
        return !n || n === e;
      }
      runNext(e) {
        var r;
        const n =
          (r = E(this, Et).get(Bl(e))) == null
            ? void 0
            : r.find((s) => s !== e && s.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        st.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      getAll() {
        return [...E(this, Et).values()].flat();
      }
      find(e) {
        const n = { exact: !0, ...e };
        return this.getAll().find((r) => ov(n, r));
      }
      findAll(e = {}) {
        return this.getAll().filter((n) => ov(e, n));
      }
      notify(e) {
        st.batch(() => {
          this.listeners.forEach((n) => {
            n(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((n) => n.state.isPaused);
        return st.batch(() =>
          Promise.all(e.map((n) => n.continue().catch(Ht))),
        );
      }
    }),
    (Et = new WeakMap()),
    (_a = new WeakMap()),
    px);
  function Bl(t) {
    var e;
    return (
      ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId)
    );
  }
  function gv(t) {
    return {
      onFetch: (e, n) => {
        var c, d, h, p, v;
        const r = e.options,
          s =
            (h =
              (d = (c = e.fetchOptions) == null ? void 0 : c.meta) == null
                ? void 0
                : d.fetchMore) == null
              ? void 0
              : h.direction,
          i = ((p = e.state.data) == null ? void 0 : p.pages) || [],
          o = ((v = e.state.data) == null ? void 0 : v.pageParams) || [];
        let a = { pages: [], pageParams: [] },
          l = 0;
        const u = async () => {
          let g = !1;
          const w = (y) => {
              Object.defineProperty(y, "signal", {
                enumerable: !0,
                get: () => (
                  e.signal.aborted
                    ? (g = !0)
                    : e.signal.addEventListener("abort", () => {
                        g = !0;
                      }),
                  e.signal
                ),
              });
            },
            m = cv(e.options, e.fetchOptions),
            f = async (y, _, S) => {
              if (g) return Promise.reject();
              if (_ == null && y.pages.length) return Promise.resolve(y);
              const b = {
                queryKey: e.queryKey,
                pageParam: _,
                direction: S ? "backward" : "forward",
                meta: e.options.meta,
              };
              w(b);
              const k = await m(b),
                { maxPages: x } = e.options,
                R = S ? hk : dk;
              return {
                pages: R(y.pages, k, x),
                pageParams: R(y.pageParams, _, x),
              };
            };
          if (s && i.length) {
            const y = s === "backward",
              _ = y ? Ek : yv,
              S = { pages: i, pageParams: o },
              b = _(r, S);
            a = await f(S, b, y);
          } else {
            const y = t ?? i.length;
            do {
              const _ = l === 0 ? (o[0] ?? r.initialPageParam) : yv(r, a);
              if (l > 0 && _ == null) break;
              (a = await f(a, _)), l++;
            } while (l < y);
          }
          return a;
        };
        e.options.persister
          ? (e.fetchFn = () => {
              var g, w;
              return (w = (g = e.options).persister) == null
                ? void 0
                : w.call(
                    g,
                    u,
                    {
                      queryKey: e.queryKey,
                      meta: e.options.meta,
                      signal: e.signal,
                    },
                    n,
                  );
            })
          : (e.fetchFn = u);
      },
    };
  }
  function yv(t, { pages: e, pageParams: n }) {
    const r = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[r], e, n[r], n) : void 0;
  }
  function Ek(t, { pages: e, pageParams: n }) {
    var r;
    return e.length > 0
      ? (r = t.getPreviousPageParam) == null
        ? void 0
        : r.call(t, e[0], e, n[0], n)
      : void 0;
  }
  var Ak =
      ((mx = class {
        constructor(t = {}) {
          le(this, Te);
          le(this, Ar);
          le(this, Tr);
          le(this, xi);
          le(this, Si);
          le(this, Pr);
          le(this, ki);
          le(this, Ei);
          Q(this, Te, t.queryCache || new bk()),
            Q(this, Ar, t.mutationCache || new kk()),
            Q(this, Tr, t.defaultOptions || {}),
            Q(this, xi, new Map()),
            Q(this, Si, new Map()),
            Q(this, Pr, 0);
        }
        mount() {
          Yu(this, Pr)._++,
            E(this, Pr) === 1 &&
              (Q(
                this,
                ki,
                dv.subscribe(async (t) => {
                  t &&
                    (await this.resumePausedMutations(), E(this, Te).onFocus());
                }),
              ),
              Q(
                this,
                Ei,
                Ul.subscribe(async (t) => {
                  t &&
                    (await this.resumePausedMutations(),
                    E(this, Te).onOnline());
                }),
              ));
        }
        unmount() {
          var t, e;
          Yu(this, Pr)._--,
            E(this, Pr) === 0 &&
              ((t = E(this, ki)) == null || t.call(this),
              Q(this, ki, void 0),
              (e = E(this, Ei)) == null || e.call(this),
              Q(this, Ei, void 0));
        }
        isFetching(t) {
          return E(this, Te).findAll({ ...t, fetchStatus: "fetching" }).length;
        }
        isMutating(t) {
          return E(this, Ar).findAll({ ...t, status: "pending" }).length;
        }
        getQueryData(t) {
          var n;
          const e = this.defaultQueryOptions({ queryKey: t });
          return (n = E(this, Te).get(e.queryHash)) == null
            ? void 0
            : n.state.data;
        }
        ensureQueryData(t) {
          const e = this.getQueryData(t.queryKey);
          if (e === void 0) return this.fetchQuery(t);
          {
            const n = this.defaultQueryOptions(t),
              r = E(this, Te).build(this, n);
            return (
              t.revalidateIfStale &&
                r.isStaleByTime(sv(n.staleTime, r)) &&
                this.prefetchQuery(n),
              Promise.resolve(e)
            );
          }
        }
        getQueriesData(t) {
          return E(this, Te)
            .findAll(t)
            .map(({ queryKey: e, state: n }) => {
              const r = n.data;
              return [e, r];
            });
        }
        setQueryData(t, e, n) {
          const r = this.defaultQueryOptions({ queryKey: t }),
            s = E(this, Te).get(r.queryHash),
            i = s == null ? void 0 : s.state.data,
            o = ik(e, i);
          if (o !== void 0)
            return E(this, Te)
              .build(this, r)
              .setData(o, { ...n, manual: !0 });
        }
        setQueriesData(t, e, n) {
          return st.batch(() =>
            E(this, Te)
              .findAll(t)
              .map(({ queryKey: r }) => [r, this.setQueryData(r, e, n)]),
          );
        }
        getQueryState(t) {
          var n;
          const e = this.defaultQueryOptions({ queryKey: t });
          return (n = E(this, Te).get(e.queryHash)) == null ? void 0 : n.state;
        }
        removeQueries(t) {
          const e = E(this, Te);
          st.batch(() => {
            e.findAll(t).forEach((n) => {
              e.remove(n);
            });
          });
        }
        resetQueries(t, e) {
          const n = E(this, Te),
            r = { type: "active", ...t };
          return st.batch(
            () => (
              n.findAll(t).forEach((s) => {
                s.reset();
              }),
              this.refetchQueries(r, e)
            ),
          );
        }
        cancelQueries(t = {}, e = {}) {
          const n = { revert: !0, ...e },
            r = st.batch(() =>
              E(this, Te)
                .findAll(t)
                .map((s) => s.cancel(n)),
            );
          return Promise.all(r).then(Ht).catch(Ht);
        }
        invalidateQueries(t = {}, e = {}) {
          return st.batch(() => {
            if (
              (E(this, Te)
                .findAll(t)
                .forEach((r) => {
                  r.invalidate();
                }),
              t.refetchType === "none")
            )
              return Promise.resolve();
            const n = { ...t, type: t.refetchType ?? t.type ?? "active" };
            return this.refetchQueries(n, e);
          });
        }
        refetchQueries(t = {}, e) {
          const n = {
              ...e,
              cancelRefetch: (e == null ? void 0 : e.cancelRefetch) ?? !0,
            },
            r = st.batch(() =>
              E(this, Te)
                .findAll(t)
                .filter((s) => !s.isDisabled())
                .map((s) => {
                  let i = s.fetch(void 0, n);
                  return (
                    n.throwOnError || (i = i.catch(Ht)),
                    s.state.fetchStatus === "paused" ? Promise.resolve() : i
                  );
                }),
            );
          return Promise.all(r).then(Ht);
        }
        fetchQuery(t) {
          const e = this.defaultQueryOptions(t);
          e.retry === void 0 && (e.retry = !1);
          const n = E(this, Te).build(this, e);
          return n.isStaleByTime(sv(e.staleTime, n))
            ? n.fetch(e)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(t) {
          return this.fetchQuery(t).then(Ht).catch(Ht);
        }
        fetchInfiniteQuery(t) {
          return (t.behavior = gv(t.pages)), this.fetchQuery(t);
        }
        prefetchInfiniteQuery(t) {
          return this.fetchInfiniteQuery(t).then(Ht).catch(Ht);
        }
        ensureInfiniteQueryData(t) {
          return (t.behavior = gv(t.pages)), this.ensureQueryData(t);
        }
        resumePausedMutations() {
          return Ul.isOnline()
            ? E(this, Ar).resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return E(this, Te);
        }
        getMutationCache() {
          return E(this, Ar);
        }
        getDefaultOptions() {
          return E(this, Tr);
        }
        setDefaultOptions(t) {
          Q(this, Tr, t);
        }
        setQueryDefaults(t, e) {
          E(this, xi).set(vo(t), { queryKey: t, defaultOptions: e });
        }
        getQueryDefaults(t) {
          const e = [...E(this, xi).values()];
          let n = {};
          return (
            e.forEach((r) => {
              wo(t, r.queryKey) && (n = { ...n, ...r.defaultOptions });
            }),
            n
          );
        }
        setMutationDefaults(t, e) {
          E(this, Si).set(vo(t), { mutationKey: t, defaultOptions: e });
        }
        getMutationDefaults(t) {
          const e = [...E(this, Si).values()];
          let n = {};
          return (
            e.forEach((r) => {
              wo(t, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
            }),
            n
          );
        }
        defaultQueryOptions(t) {
          if (t._defaulted) return t;
          const e = {
            ...E(this, Tr).queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0,
          };
          return (
            e.queryHash || (e.queryHash = gh(e.queryKey, e)),
            e.refetchOnReconnect === void 0 &&
              (e.refetchOnReconnect = e.networkMode !== "always"),
            e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
            !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
            e.enabled !== !0 && e.queryFn === vh && (e.enabled = !1),
            e
          );
        }
        defaultMutationOptions(t) {
          return t != null && t._defaulted
            ? t
            : {
                ...E(this, Tr).mutations,
                ...((t == null ? void 0 : t.mutationKey) &&
                  this.getMutationDefaults(t.mutationKey)),
                ...t,
                _defaulted: !0,
              };
        }
        clear() {
          E(this, Te).clear(), E(this, Ar).clear();
        }
      }),
      (Te = new WeakMap()),
      (Ar = new WeakMap()),
      (Tr = new WeakMap()),
      (xi = new WeakMap()),
      (Si = new WeakMap()),
      (Pr = new WeakMap()),
      (ki = new WeakMap()),
      (Ei = new WeakMap()),
      mx),
    Tk = C.createContext(void 0),
    Pk = ({ client: t, children: e }) => (
      C.useEffect(
        () => (
          t.mount(),
          () => {
            t.unmount();
          }
        ),
        [t],
      ),
      D.jsx(Tk.Provider, { value: t, children: e })
    );
  const Ck = new Ak();
  function Rk({ children: t }) {
    return D.jsx(Pk, { client: Ck, children: t });
  }
  const vv = "web-companion-chat-container";
  var re;
  (function (t) {
    t.assertEqual = (s) => s;
    function e(s) {}
    t.assertIs = e;
    function n(s) {
      throw new Error();
    }
    (t.assertNever = n),
      (t.arrayToEnum = (s) => {
        const i = {};
        for (const o of s) i[o] = o;
        return i;
      }),
      (t.getValidEnumValues = (s) => {
        const i = t.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
          o = {};
        for (const a of i) o[a] = s[a];
        return t.objectValues(o);
      }),
      (t.objectValues = (s) =>
        t.objectKeys(s).map(function (i) {
          return s[i];
        })),
      (t.objectKeys =
        typeof Object.keys == "function"
          ? (s) => Object.keys(s)
          : (s) => {
              const i = [];
              for (const o in s)
                Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
              return i;
            }),
      (t.find = (s, i) => {
        for (const o of s) if (i(o)) return o;
      }),
      (t.isInteger =
        typeof Number.isInteger == "function"
          ? (s) => Number.isInteger(s)
          : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
    function r(s, i = " | ") {
      return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(i);
    }
    (t.joinValues = r),
      (t.jsonStringifyReplacer = (s, i) =>
        typeof i == "bigint" ? i.toString() : i);
  })(re || (re = {}));
  var _h;
  (function (t) {
    t.mergeShapes = (e, n) => ({ ...e, ...n });
  })(_h || (_h = {}));
  const M = re.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
    ]),
    ir = (t) => {
      switch (typeof t) {
        case "undefined":
          return M.undefined;
        case "string":
          return M.string;
        case "number":
          return isNaN(t) ? M.nan : M.number;
        case "boolean":
          return M.boolean;
        case "function":
          return M.function;
        case "bigint":
          return M.bigint;
        case "symbol":
          return M.symbol;
        case "object":
          return Array.isArray(t)
            ? M.array
            : t === null
              ? M.null
              : t.then &&
                  typeof t.then == "function" &&
                  t.catch &&
                  typeof t.catch == "function"
                ? M.promise
                : typeof Map < "u" && t instanceof Map
                  ? M.map
                  : typeof Set < "u" && t instanceof Set
                    ? M.set
                    : typeof Date < "u" && t instanceof Date
                      ? M.date
                      : M.object;
        default:
          return M.unknown;
      }
    },
    T = re.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
    ]),
    Nk = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
  class xt extends Error {
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (r) => {
          this.issues = [...this.issues, r];
        }),
        (this.addIssues = (r = []) => {
          this.issues = [...this.issues, ...r];
        });
      const n = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, n)
        : (this.__proto__ = n),
        (this.name = "ZodError"),
        (this.issues = e);
    }
    get errors() {
      return this.issues;
    }
    format(e) {
      const n =
          e ||
          function (i) {
            return i.message;
          },
        r = { _errors: [] },
        s = (i) => {
          for (const o of i.issues)
            if (o.code === "invalid_union") o.unionErrors.map(s);
            else if (o.code === "invalid_return_type") s(o.returnTypeError);
            else if (o.code === "invalid_arguments") s(o.argumentsError);
            else if (o.path.length === 0) r._errors.push(n(o));
            else {
              let a = r,
                l = 0;
              for (; l < o.path.length; ) {
                const u = o.path[l];
                l === o.path.length - 1
                  ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(o)))
                  : (a[u] = a[u] || { _errors: [] }),
                  (a = a[u]),
                  l++;
              }
            }
        };
      return s(this), r;
    }
    static assert(e) {
      if (!(e instanceof xt)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, re.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (n) => n.message) {
      const n = {},
        r = [];
      for (const s of this.issues)
        s.path.length > 0
          ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(e(s)))
          : r.push(e(s));
      return { formErrors: r, fieldErrors: n };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  xt.create = (t) => new xt(t);
  const Bs = (t, e) => {
    let n;
    switch (t.code) {
      case T.invalid_type:
        t.received === M.undefined
          ? (n = "Required")
          : (n = `Expected ${t.expected}, received ${t.received}`);
        break;
      case T.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(t.expected, re.jsonStringifyReplacer)}`;
        break;
      case T.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${re.joinValues(t.keys, ", ")}`;
        break;
      case T.invalid_union:
        n = "Invalid input";
        break;
      case T.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${re.joinValues(t.options)}`;
        break;
      case T.invalid_enum_value:
        n = `Invalid enum value. Expected ${re.joinValues(t.options)}, received '${t.received}'`;
        break;
      case T.invalid_arguments:
        n = "Invalid function arguments";
        break;
      case T.invalid_return_type:
        n = "Invalid function return type";
        break;
      case T.invalid_date:
        n = "Invalid date";
        break;
      case T.invalid_string:
        typeof t.validation == "object"
          ? "includes" in t.validation
            ? ((n = `Invalid input: must include "${t.validation.includes}"`),
              typeof t.validation.position == "number" &&
                (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`))
            : "startsWith" in t.validation
              ? (n = `Invalid input: must start with "${t.validation.startsWith}"`)
              : "endsWith" in t.validation
                ? (n = `Invalid input: must end with "${t.validation.endsWith}"`)
                : re.assertNever(t.validation)
          : t.validation !== "regex"
            ? (n = `Invalid ${t.validation}`)
            : (n = "Invalid");
        break;
      case T.too_small:
        t.type === "array"
          ? (n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`)
          : t.type === "string"
            ? (n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`)
            : t.type === "number"
              ? (n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
              : t.type === "date"
                ? (n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`)
                : (n = "Invalid input");
        break;
      case T.too_big:
        t.type === "array"
          ? (n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`)
          : t.type === "string"
            ? (n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`)
            : t.type === "number"
              ? (n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
              : t.type === "bigint"
                ? (n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
                : t.type === "date"
                  ? (n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`)
                  : (n = "Invalid input");
        break;
      case T.custom:
        n = "Invalid input";
        break;
      case T.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
      case T.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;
      case T.not_finite:
        n = "Number must be finite";
        break;
      default:
        (n = e.defaultError), re.assertNever(t);
    }
    return { message: n };
  };
  let wv = Bs;
  function Ok(t) {
    wv = t;
  }
  function zl() {
    return wv;
  }
  const Wl = (t) => {
      const { data: e, path: n, errorMaps: r, issueData: s } = t,
        i = [...n, ...(s.path || [])],
        o = { ...s, path: i };
      if (s.message !== void 0) return { ...s, path: i, message: s.message };
      let a = "";
      const l = r
        .filter((u) => !!u)
        .slice()
        .reverse();
      for (const u of l) a = u(o, { data: e, defaultError: a }).message;
      return { ...s, path: i, message: a };
    },
    Mk = [];
  function O(t, e) {
    const n = zl(),
      r = Wl({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          n,
          n === Bs ? void 0 : Bs,
        ].filter((s) => !!s),
      });
    t.common.issues.push(r);
  }
  class qe {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(e, n) {
      const r = [];
      for (const s of n) {
        if (s.status === "aborted") return z;
        s.status === "dirty" && e.dirty(), r.push(s.value);
      }
      return { status: e.value, value: r };
    }
    static async mergeObjectAsync(e, n) {
      const r = [];
      for (const s of n) {
        const i = await s.key,
          o = await s.value;
        r.push({ key: i, value: o });
      }
      return qe.mergeObjectSync(e, r);
    }
    static mergeObjectSync(e, n) {
      const r = {};
      for (const s of n) {
        const { key: i, value: o } = s;
        if (i.status === "aborted" || o.status === "aborted") return z;
        i.status === "dirty" && e.dirty(),
          o.status === "dirty" && e.dirty(),
          i.value !== "__proto__" &&
            (typeof o.value < "u" || s.alwaysSet) &&
            (r[i.value] = o.value);
      }
      return { status: e.value, value: r };
    }
  }
  const z = Object.freeze({ status: "aborted" }),
    zs = (t) => ({ status: "dirty", value: t }),
    it = (t) => ({ status: "valid", value: t }),
    bh = (t) => t.status === "aborted",
    xh = (t) => t.status === "dirty",
    _o = (t) => t.status === "valid",
    bo = (t) => typeof Promise < "u" && t instanceof Promise;
  function Hl(t, e, n, r) {
    if (typeof e == "function" ? t !== e || !r : !e.has(t))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return e.get(t);
  }
  function _v(t, e, n, r, s) {
    if (typeof e == "function" ? t !== e || !s : !e.has(t))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return e.set(t, n), n;
  }
  typeof SuppressedError == "function" && SuppressedError;
  var j;
  (function (t) {
    (t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
      (t.toString = (e) =>
        typeof e == "string" ? e : e == null ? void 0 : e.message);
  })(j || (j = {}));
  var xo, So;
  class sn {
    constructor(e, n, r, s) {
      (this._cachedPath = []),
        (this.parent = e),
        (this.data = n),
        (this._path = r),
        (this._key = s);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (this._key instanceof Array
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  }
  const bv = (t, e) => {
    if (_o(e)) return { success: !0, data: e.value };
    if (!t.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        const n = new xt(t.common.issues);
        return (this._error = n), this._error;
      },
    };
  };
  function H(t) {
    if (!t) return {};
    const {
      errorMap: e,
      invalid_type_error: n,
      required_error: r,
      description: s,
    } = t;
    if (e && (n || r))
      throw new Error(
        `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
      );
    return e
      ? { errorMap: e, description: s }
      : {
          errorMap: (o, a) => {
            var l, u;
            const { message: c } = t;
            return o.code === "invalid_enum_value"
              ? { message: c ?? a.defaultError }
              : typeof a.data > "u"
                ? {
                    message:
                      (l = c ?? r) !== null && l !== void 0
                        ? l
                        : a.defaultError,
                  }
                : o.code !== "invalid_type"
                  ? { message: a.defaultError }
                  : {
                      message:
                        (u = c ?? n) !== null && u !== void 0
                          ? u
                          : a.defaultError,
                    };
          },
          description: s,
        };
  }
  class K {
    constructor(e) {
      (this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this));
    }
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return ir(e.data);
    }
    _getOrReturnCtx(e, n) {
      return (
        n || {
          common: e.parent.common,
          data: e.data,
          parsedType: ir(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new qe(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: ir(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      const n = this._parse(e);
      if (bo(n)) throw new Error("Synchronous parse encountered promise.");
      return n;
    }
    _parseAsync(e) {
      const n = this._parse(e);
      return Promise.resolve(n);
    }
    parse(e, n) {
      const r = this.safeParse(e, n);
      if (r.success) return r.data;
      throw r.error;
    }
    safeParse(e, n) {
      var r;
      const s = {
          common: {
            issues: [],
            async:
              (r = n == null ? void 0 : n.async) !== null && r !== void 0
                ? r
                : !1,
            contextualErrorMap: n == null ? void 0 : n.errorMap,
          },
          path: (n == null ? void 0 : n.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: ir(e),
        },
        i = this._parseSync({ data: e, path: s.path, parent: s });
      return bv(s, i);
    }
    async parseAsync(e, n) {
      const r = await this.safeParseAsync(e, n);
      if (r.success) return r.data;
      throw r.error;
    }
    async safeParseAsync(e, n) {
      const r = {
          common: {
            issues: [],
            contextualErrorMap: n == null ? void 0 : n.errorMap,
            async: !0,
          },
          path: (n == null ? void 0 : n.path) || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: ir(e),
        },
        s = this._parse({ data: e, path: r.path, parent: r }),
        i = await (bo(s) ? s : Promise.resolve(s));
      return bv(r, i);
    }
    refine(e, n) {
      const r = (s) =>
        typeof n == "string" || typeof n > "u"
          ? { message: n }
          : typeof n == "function"
            ? n(s)
            : n;
      return this._refinement((s, i) => {
        const o = e(s),
          a = () => i.addIssue({ code: T.custom, ...r(s) });
        return typeof Promise < "u" && o instanceof Promise
          ? o.then((l) => (l ? !0 : (a(), !1)))
          : o
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, n) {
      return this._refinement((r, s) =>
        e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1),
      );
    }
    _refinement(e) {
      return new Kt({
        schema: this,
        typeName: B.ZodEffects,
        effect: { type: "refinement", refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    optional() {
      return an.create(this, this._def);
    }
    nullable() {
      return ur.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return qt.create(this, this._def);
    }
    promise() {
      return qs.create(this, this._def);
    }
    or(e) {
      return To.create([this, e], this._def);
    }
    and(e) {
      return Po.create(this, e, this._def);
    }
    transform(e) {
      return new Kt({
        ...H(this._def),
        schema: this,
        typeName: B.ZodEffects,
        effect: { type: "transform", transform: e },
      });
    }
    default(e) {
      const n = typeof e == "function" ? e : () => e;
      return new Mo({
        ...H(this._def),
        innerType: this,
        defaultValue: n,
        typeName: B.ZodDefault,
      });
    }
    brand() {
      return new Eh({ typeName: B.ZodBranded, type: this, ...H(this._def) });
    }
    catch(e) {
      const n = typeof e == "function" ? e : () => e;
      return new Lo({
        ...H(this._def),
        innerType: this,
        catchValue: n,
        typeName: B.ZodCatch,
      });
    }
    describe(e) {
      const n = this.constructor;
      return new n({ ...this._def, description: e });
    }
    pipe(e) {
      return Io.create(this, e);
    }
    readonly() {
      return jo.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const Lk = /^c[^\s-]{8,}$/i,
    Ik = /^[0-9a-z]+$/,
    jk = /^[0-9A-HJKMNP-TV-Z]{26}$/,
    Dk =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    $k = /^[a-z0-9_-]{21}$/i,
    Fk =
      /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    Vk =
      /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    Uk = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  let Sh;
  const Bk =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    zk =
      /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    Wk = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    xv =
      "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    Hk = new RegExp(`^${xv}$`);
  function Sv(t) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return (
      t.precision
        ? (e = `${e}\\.\\d{${t.precision}}`)
        : t.precision == null && (e = `${e}(\\.\\d+)?`),
      e
    );
  }
  function Gk(t) {
    return new RegExp(`^${Sv(t)}$`);
  }
  function kv(t) {
    let e = `${xv}T${Sv(t)}`;
    const n = [];
    return (
      n.push(t.local ? "Z?" : "Z"),
      t.offset && n.push("([+-]\\d{2}:?\\d{2})"),
      (e = `${e}(${n.join("|")})`),
      new RegExp(`^${e}$`)
    );
  }
  function qk(t, e) {
    return !!(
      ((e === "v4" || !e) && Bk.test(t)) ||
      ((e === "v6" || !e) && zk.test(t))
    );
  }
  class Gt extends K {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== M.string)
      ) {
        const i = this._getOrReturnCtx(e);
        return (
          O(i, {
            code: T.invalid_type,
            expected: M.string,
            received: i.parsedType,
          }),
          z
        );
      }
      const r = new qe();
      let s;
      for (const i of this._def.checks)
        if (i.kind === "min")
          e.data.length < i.value &&
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              code: T.too_small,
              minimum: i.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "max")
          e.data.length > i.value &&
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              code: T.too_big,
              maximum: i.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "length") {
          const o = e.data.length > i.value,
            a = e.data.length < i.value;
          (o || a) &&
            ((s = this._getOrReturnCtx(e, s)),
            o
              ? O(s, {
                  code: T.too_big,
                  maximum: i.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: i.message,
                })
              : a &&
                O(s, {
                  code: T.too_small,
                  minimum: i.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: i.message,
                }),
            r.dirty());
        } else if (i.kind === "email")
          Vk.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              validation: "email",
              code: T.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "emoji")
          Sh || (Sh = new RegExp(Uk, "u")),
            Sh.test(e.data) ||
              ((s = this._getOrReturnCtx(e, s)),
              O(s, {
                validation: "emoji",
                code: T.invalid_string,
                message: i.message,
              }),
              r.dirty());
        else if (i.kind === "uuid")
          Dk.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              validation: "uuid",
              code: T.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "nanoid")
          $k.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              validation: "nanoid",
              code: T.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "cuid")
          Lk.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              validation: "cuid",
              code: T.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "cuid2")
          Ik.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              validation: "cuid2",
              code: T.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "ulid")
          jk.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              validation: "ulid",
              code: T.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "url")
          try {
            new URL(e.data);
          } catch {
            (s = this._getOrReturnCtx(e, s)),
              O(s, {
                validation: "url",
                code: T.invalid_string,
                message: i.message,
              }),
              r.dirty();
          }
        else
          i.kind === "regex"
            ? ((i.regex.lastIndex = 0),
              i.regex.test(e.data) ||
                ((s = this._getOrReturnCtx(e, s)),
                O(s, {
                  validation: "regex",
                  code: T.invalid_string,
                  message: i.message,
                }),
                r.dirty()))
            : i.kind === "trim"
              ? (e.data = e.data.trim())
              : i.kind === "includes"
                ? e.data.includes(i.value, i.position) ||
                  ((s = this._getOrReturnCtx(e, s)),
                  O(s, {
                    code: T.invalid_string,
                    validation: { includes: i.value, position: i.position },
                    message: i.message,
                  }),
                  r.dirty())
                : i.kind === "toLowerCase"
                  ? (e.data = e.data.toLowerCase())
                  : i.kind === "toUpperCase"
                    ? (e.data = e.data.toUpperCase())
                    : i.kind === "startsWith"
                      ? e.data.startsWith(i.value) ||
                        ((s = this._getOrReturnCtx(e, s)),
                        O(s, {
                          code: T.invalid_string,
                          validation: { startsWith: i.value },
                          message: i.message,
                        }),
                        r.dirty())
                      : i.kind === "endsWith"
                        ? e.data.endsWith(i.value) ||
                          ((s = this._getOrReturnCtx(e, s)),
                          O(s, {
                            code: T.invalid_string,
                            validation: { endsWith: i.value },
                            message: i.message,
                          }),
                          r.dirty())
                        : i.kind === "datetime"
                          ? kv(i).test(e.data) ||
                            ((s = this._getOrReturnCtx(e, s)),
                            O(s, {
                              code: T.invalid_string,
                              validation: "datetime",
                              message: i.message,
                            }),
                            r.dirty())
                          : i.kind === "date"
                            ? Hk.test(e.data) ||
                              ((s = this._getOrReturnCtx(e, s)),
                              O(s, {
                                code: T.invalid_string,
                                validation: "date",
                                message: i.message,
                              }),
                              r.dirty())
                            : i.kind === "time"
                              ? Gk(i).test(e.data) ||
                                ((s = this._getOrReturnCtx(e, s)),
                                O(s, {
                                  code: T.invalid_string,
                                  validation: "time",
                                  message: i.message,
                                }),
                                r.dirty())
                              : i.kind === "duration"
                                ? Fk.test(e.data) ||
                                  ((s = this._getOrReturnCtx(e, s)),
                                  O(s, {
                                    validation: "duration",
                                    code: T.invalid_string,
                                    message: i.message,
                                  }),
                                  r.dirty())
                                : i.kind === "ip"
                                  ? qk(e.data, i.version) ||
                                    ((s = this._getOrReturnCtx(e, s)),
                                    O(s, {
                                      validation: "ip",
                                      code: T.invalid_string,
                                      message: i.message,
                                    }),
                                    r.dirty())
                                  : i.kind === "base64"
                                    ? Wk.test(e.data) ||
                                      ((s = this._getOrReturnCtx(e, s)),
                                      O(s, {
                                        validation: "base64",
                                        code: T.invalid_string,
                                        message: i.message,
                                      }),
                                      r.dirty())
                                    : re.assertNever(i);
      return { status: r.value, value: e.data };
    }
    _regex(e, n, r) {
      return this.refinement((s) => e.test(s), {
        validation: n,
        code: T.invalid_string,
        ...j.errToObj(r),
      });
    }
    _addCheck(e) {
      return new Gt({ ...this._def, checks: [...this._def.checks, e] });
    }
    email(e) {
      return this._addCheck({ kind: "email", ...j.errToObj(e) });
    }
    url(e) {
      return this._addCheck({ kind: "url", ...j.errToObj(e) });
    }
    emoji(e) {
      return this._addCheck({ kind: "emoji", ...j.errToObj(e) });
    }
    uuid(e) {
      return this._addCheck({ kind: "uuid", ...j.errToObj(e) });
    }
    nanoid(e) {
      return this._addCheck({ kind: "nanoid", ...j.errToObj(e) });
    }
    cuid(e) {
      return this._addCheck({ kind: "cuid", ...j.errToObj(e) });
    }
    cuid2(e) {
      return this._addCheck({ kind: "cuid2", ...j.errToObj(e) });
    }
    ulid(e) {
      return this._addCheck({ kind: "ulid", ...j.errToObj(e) });
    }
    base64(e) {
      return this._addCheck({ kind: "base64", ...j.errToObj(e) });
    }
    ip(e) {
      return this._addCheck({ kind: "ip", ...j.errToObj(e) });
    }
    datetime(e) {
      var n, r;
      return typeof e == "string"
        ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e,
          })
        : this._addCheck({
            kind: "datetime",
            precision:
              typeof (e == null ? void 0 : e.precision) > "u"
                ? null
                : e == null
                  ? void 0
                  : e.precision,
            offset:
              (n = e == null ? void 0 : e.offset) !== null && n !== void 0
                ? n
                : !1,
            local:
              (r = e == null ? void 0 : e.local) !== null && r !== void 0
                ? r
                : !1,
            ...j.errToObj(e == null ? void 0 : e.message),
          });
    }
    date(e) {
      return this._addCheck({ kind: "date", message: e });
    }
    time(e) {
      return typeof e == "string"
        ? this._addCheck({ kind: "time", precision: null, message: e })
        : this._addCheck({
            kind: "time",
            precision:
              typeof (e == null ? void 0 : e.precision) > "u"
                ? null
                : e == null
                  ? void 0
                  : e.precision,
            ...j.errToObj(e == null ? void 0 : e.message),
          });
    }
    duration(e) {
      return this._addCheck({ kind: "duration", ...j.errToObj(e) });
    }
    regex(e, n) {
      return this._addCheck({ kind: "regex", regex: e, ...j.errToObj(n) });
    }
    includes(e, n) {
      return this._addCheck({
        kind: "includes",
        value: e,
        position: n == null ? void 0 : n.position,
        ...j.errToObj(n == null ? void 0 : n.message),
      });
    }
    startsWith(e, n) {
      return this._addCheck({ kind: "startsWith", value: e, ...j.errToObj(n) });
    }
    endsWith(e, n) {
      return this._addCheck({ kind: "endsWith", value: e, ...j.errToObj(n) });
    }
    min(e, n) {
      return this._addCheck({ kind: "min", value: e, ...j.errToObj(n) });
    }
    max(e, n) {
      return this._addCheck({ kind: "max", value: e, ...j.errToObj(n) });
    }
    length(e, n) {
      return this._addCheck({ kind: "length", value: e, ...j.errToObj(n) });
    }
    nonempty(e) {
      return this.min(1, j.errToObj(e));
    }
    trim() {
      return new Gt({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }],
      });
    }
    toLowerCase() {
      return new Gt({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }],
      });
    }
    toUpperCase() {
      return new Gt({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }],
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((e) => e.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((e) => e.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((e) => e.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((e) => e.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((e) => e.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((e) => e.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((e) => e.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((e) => e.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((e) => e.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((e) => e.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((e) => e.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((e) => e.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((e) => e.kind === "ip");
    }
    get isBase64() {
      return !!this._def.checks.find((e) => e.kind === "base64");
    }
    get minLength() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "min" && (e === null || n.value > e) && (e = n.value);
      return e;
    }
    get maxLength() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "max" && (e === null || n.value < e) && (e = n.value);
      return e;
    }
  }
  Gt.create = (t) => {
    var e;
    return new Gt({
      checks: [],
      typeName: B.ZodString,
      coerce:
        (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
      ...H(t),
    });
  };
  function Kk(t, e) {
    const n = (t.toString().split(".")[1] || "").length,
      r = (e.toString().split(".")[1] || "").length,
      s = n > r ? n : r,
      i = parseInt(t.toFixed(s).replace(".", "")),
      o = parseInt(e.toFixed(s).replace(".", ""));
    return (i % o) / Math.pow(10, s);
  }
  class or extends K {
    constructor() {
      super(...arguments),
        (this.min = this.gte),
        (this.max = this.lte),
        (this.step = this.multipleOf);
    }
    _parse(e) {
      if (
        (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== M.number)
      ) {
        const i = this._getOrReturnCtx(e);
        return (
          O(i, {
            code: T.invalid_type,
            expected: M.number,
            received: i.parsedType,
          }),
          z
        );
      }
      let r;
      const s = new qe();
      for (const i of this._def.checks)
        i.kind === "int"
          ? re.isInteger(e.data) ||
            ((r = this._getOrReturnCtx(e, r)),
            O(r, {
              code: T.invalid_type,
              expected: "integer",
              received: "float",
              message: i.message,
            }),
            s.dirty())
          : i.kind === "min"
            ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
              ((r = this._getOrReturnCtx(e, r)),
              O(r, {
                code: T.too_small,
                minimum: i.value,
                type: "number",
                inclusive: i.inclusive,
                exact: !1,
                message: i.message,
              }),
              s.dirty())
            : i.kind === "max"
              ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
                ((r = this._getOrReturnCtx(e, r)),
                O(r, {
                  code: T.too_big,
                  maximum: i.value,
                  type: "number",
                  inclusive: i.inclusive,
                  exact: !1,
                  message: i.message,
                }),
                s.dirty())
              : i.kind === "multipleOf"
                ? Kk(e.data, i.value) !== 0 &&
                  ((r = this._getOrReturnCtx(e, r)),
                  O(r, {
                    code: T.not_multiple_of,
                    multipleOf: i.value,
                    message: i.message,
                  }),
                  s.dirty())
                : i.kind === "finite"
                  ? Number.isFinite(e.data) ||
                    ((r = this._getOrReturnCtx(e, r)),
                    O(r, { code: T.not_finite, message: i.message }),
                    s.dirty())
                  : re.assertNever(i);
      return { status: s.value, value: e.data };
    }
    gte(e, n) {
      return this.setLimit("min", e, !0, j.toString(n));
    }
    gt(e, n) {
      return this.setLimit("min", e, !1, j.toString(n));
    }
    lte(e, n) {
      return this.setLimit("max", e, !0, j.toString(n));
    }
    lt(e, n) {
      return this.setLimit("max", e, !1, j.toString(n));
    }
    setLimit(e, n, r, s) {
      return new or({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: e, value: n, inclusive: r, message: j.toString(s) },
        ],
      });
    }
    _addCheck(e) {
      return new or({ ...this._def, checks: [...this._def.checks, e] });
    }
    int(e) {
      return this._addCheck({ kind: "int", message: j.toString(e) });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !1,
        message: j.toString(e),
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !1,
        message: j.toString(e),
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !0,
        message: j.toString(e),
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !0,
        message: j.toString(e),
      });
    }
    multipleOf(e, n) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: j.toString(n),
      });
    }
    finite(e) {
      return this._addCheck({ kind: "finite", message: j.toString(e) });
    }
    safe(e) {
      return this._addCheck({
        kind: "min",
        inclusive: !0,
        value: Number.MIN_SAFE_INTEGER,
        message: j.toString(e),
      })._addCheck({
        kind: "max",
        inclusive: !0,
        value: Number.MAX_SAFE_INTEGER,
        message: j.toString(e),
      });
    }
    get minValue() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "min" && (e === null || n.value > e) && (e = n.value);
      return e;
    }
    get maxValue() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "max" && (e === null || n.value < e) && (e = n.value);
      return e;
    }
    get isInt() {
      return !!this._def.checks.find(
        (e) =>
          e.kind === "int" ||
          (e.kind === "multipleOf" && re.isInteger(e.value)),
      );
    }
    get isFinite() {
      let e = null,
        n = null;
      for (const r of this._def.checks) {
        if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
          return !0;
        r.kind === "min"
          ? (n === null || r.value > n) && (n = r.value)
          : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
      }
      return Number.isFinite(n) && Number.isFinite(e);
    }
  }
  or.create = (t) =>
    new or({
      checks: [],
      typeName: B.ZodNumber,
      coerce: (t == null ? void 0 : t.coerce) || !1,
      ...H(t),
    });
  class ar extends K {
    constructor() {
      super(...arguments), (this.min = this.gte), (this.max = this.lte);
    }
    _parse(e) {
      if (
        (this._def.coerce && (e.data = BigInt(e.data)),
        this._getType(e) !== M.bigint)
      ) {
        const i = this._getOrReturnCtx(e);
        return (
          O(i, {
            code: T.invalid_type,
            expected: M.bigint,
            received: i.parsedType,
          }),
          z
        );
      }
      let r;
      const s = new qe();
      for (const i of this._def.checks)
        i.kind === "min"
          ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
            ((r = this._getOrReturnCtx(e, r)),
            O(r, {
              code: T.too_small,
              type: "bigint",
              minimum: i.value,
              inclusive: i.inclusive,
              message: i.message,
            }),
            s.dirty())
          : i.kind === "max"
            ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
              ((r = this._getOrReturnCtx(e, r)),
              O(r, {
                code: T.too_big,
                type: "bigint",
                maximum: i.value,
                inclusive: i.inclusive,
                message: i.message,
              }),
              s.dirty())
            : i.kind === "multipleOf"
              ? e.data % i.value !== BigInt(0) &&
                ((r = this._getOrReturnCtx(e, r)),
                O(r, {
                  code: T.not_multiple_of,
                  multipleOf: i.value,
                  message: i.message,
                }),
                s.dirty())
              : re.assertNever(i);
      return { status: s.value, value: e.data };
    }
    gte(e, n) {
      return this.setLimit("min", e, !0, j.toString(n));
    }
    gt(e, n) {
      return this.setLimit("min", e, !1, j.toString(n));
    }
    lte(e, n) {
      return this.setLimit("max", e, !0, j.toString(n));
    }
    lt(e, n) {
      return this.setLimit("max", e, !1, j.toString(n));
    }
    setLimit(e, n, r, s) {
      return new ar({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: e, value: n, inclusive: r, message: j.toString(s) },
        ],
      });
    }
    _addCheck(e) {
      return new ar({ ...this._def, checks: [...this._def.checks, e] });
    }
    positive(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !1,
        message: j.toString(e),
      });
    }
    negative(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !1,
        message: j.toString(e),
      });
    }
    nonpositive(e) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !0,
        message: j.toString(e),
      });
    }
    nonnegative(e) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !0,
        message: j.toString(e),
      });
    }
    multipleOf(e, n) {
      return this._addCheck({
        kind: "multipleOf",
        value: e,
        message: j.toString(n),
      });
    }
    get minValue() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "min" && (e === null || n.value > e) && (e = n.value);
      return e;
    }
    get maxValue() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "max" && (e === null || n.value < e) && (e = n.value);
      return e;
    }
  }
  ar.create = (t) => {
    var e;
    return new ar({
      checks: [],
      typeName: B.ZodBigInt,
      coerce:
        (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
      ...H(t),
    });
  };
  class ko extends K {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== M.boolean)
      ) {
        const r = this._getOrReturnCtx(e);
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.boolean,
            received: r.parsedType,
          }),
          z
        );
      }
      return it(e.data);
    }
  }
  ko.create = (t) =>
    new ko({
      typeName: B.ZodBoolean,
      coerce: (t == null ? void 0 : t.coerce) || !1,
      ...H(t),
    });
  class qr extends K {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== M.date)
      ) {
        const i = this._getOrReturnCtx(e);
        return (
          O(i, {
            code: T.invalid_type,
            expected: M.date,
            received: i.parsedType,
          }),
          z
        );
      }
      if (isNaN(e.data.getTime())) {
        const i = this._getOrReturnCtx(e);
        return O(i, { code: T.invalid_date }), z;
      }
      const r = new qe();
      let s;
      for (const i of this._def.checks)
        i.kind === "min"
          ? e.data.getTime() < i.value &&
            ((s = this._getOrReturnCtx(e, s)),
            O(s, {
              code: T.too_small,
              message: i.message,
              inclusive: !0,
              exact: !1,
              minimum: i.value,
              type: "date",
            }),
            r.dirty())
          : i.kind === "max"
            ? e.data.getTime() > i.value &&
              ((s = this._getOrReturnCtx(e, s)),
              O(s, {
                code: T.too_big,
                message: i.message,
                inclusive: !0,
                exact: !1,
                maximum: i.value,
                type: "date",
              }),
              r.dirty())
            : re.assertNever(i);
      return { status: r.value, value: new Date(e.data.getTime()) };
    }
    _addCheck(e) {
      return new qr({ ...this._def, checks: [...this._def.checks, e] });
    }
    min(e, n) {
      return this._addCheck({
        kind: "min",
        value: e.getTime(),
        message: j.toString(n),
      });
    }
    max(e, n) {
      return this._addCheck({
        kind: "max",
        value: e.getTime(),
        message: j.toString(n),
      });
    }
    get minDate() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "min" && (e === null || n.value > e) && (e = n.value);
      return e != null ? new Date(e) : null;
    }
    get maxDate() {
      let e = null;
      for (const n of this._def.checks)
        n.kind === "max" && (e === null || n.value < e) && (e = n.value);
      return e != null ? new Date(e) : null;
    }
  }
  qr.create = (t) =>
    new qr({
      checks: [],
      coerce: (t == null ? void 0 : t.coerce) || !1,
      typeName: B.ZodDate,
      ...H(t),
    });
  class Gl extends K {
    _parse(e) {
      if (this._getType(e) !== M.symbol) {
        const r = this._getOrReturnCtx(e);
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.symbol,
            received: r.parsedType,
          }),
          z
        );
      }
      return it(e.data);
    }
  }
  Gl.create = (t) => new Gl({ typeName: B.ZodSymbol, ...H(t) });
  class Eo extends K {
    _parse(e) {
      if (this._getType(e) !== M.undefined) {
        const r = this._getOrReturnCtx(e);
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.undefined,
            received: r.parsedType,
          }),
          z
        );
      }
      return it(e.data);
    }
  }
  Eo.create = (t) => new Eo({ typeName: B.ZodUndefined, ...H(t) });
  class Ao extends K {
    _parse(e) {
      if (this._getType(e) !== M.null) {
        const r = this._getOrReturnCtx(e);
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.null,
            received: r.parsedType,
          }),
          z
        );
      }
      return it(e.data);
    }
  }
  Ao.create = (t) => new Ao({ typeName: B.ZodNull, ...H(t) });
  class Ws extends K {
    constructor() {
      super(...arguments), (this._any = !0);
    }
    _parse(e) {
      return it(e.data);
    }
  }
  Ws.create = (t) => new Ws({ typeName: B.ZodAny, ...H(t) });
  class Kr extends K {
    constructor() {
      super(...arguments), (this._unknown = !0);
    }
    _parse(e) {
      return it(e.data);
    }
  }
  Kr.create = (t) => new Kr({ typeName: B.ZodUnknown, ...H(t) });
  class Tn extends K {
    _parse(e) {
      const n = this._getOrReturnCtx(e);
      return (
        O(n, {
          code: T.invalid_type,
          expected: M.never,
          received: n.parsedType,
        }),
        z
      );
    }
  }
  Tn.create = (t) => new Tn({ typeName: B.ZodNever, ...H(t) });
  class ql extends K {
    _parse(e) {
      if (this._getType(e) !== M.undefined) {
        const r = this._getOrReturnCtx(e);
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.void,
            received: r.parsedType,
          }),
          z
        );
      }
      return it(e.data);
    }
  }
  ql.create = (t) => new ql({ typeName: B.ZodVoid, ...H(t) });
  class qt extends K {
    _parse(e) {
      const { ctx: n, status: r } = this._processInputParams(e),
        s = this._def;
      if (n.parsedType !== M.array)
        return (
          O(n, {
            code: T.invalid_type,
            expected: M.array,
            received: n.parsedType,
          }),
          z
        );
      if (s.exactLength !== null) {
        const o = n.data.length > s.exactLength.value,
          a = n.data.length < s.exactLength.value;
        (o || a) &&
          (O(n, {
            code: o ? T.too_big : T.too_small,
            minimum: a ? s.exactLength.value : void 0,
            maximum: o ? s.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: s.exactLength.message,
          }),
          r.dirty());
      }
      if (
        (s.minLength !== null &&
          n.data.length < s.minLength.value &&
          (O(n, {
            code: T.too_small,
            minimum: s.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.minLength.message,
          }),
          r.dirty()),
        s.maxLength !== null &&
          n.data.length > s.maxLength.value &&
          (O(n, {
            code: T.too_big,
            maximum: s.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: s.maxLength.message,
          }),
          r.dirty()),
        n.common.async)
      )
        return Promise.all(
          [...n.data].map((o, a) =>
            s.type._parseAsync(new sn(n, o, n.path, a)),
          ),
        ).then((o) => qe.mergeArray(r, o));
      const i = [...n.data].map((o, a) =>
        s.type._parseSync(new sn(n, o, n.path, a)),
      );
      return qe.mergeArray(r, i);
    }
    get element() {
      return this._def.type;
    }
    min(e, n) {
      return new qt({
        ...this._def,
        minLength: { value: e, message: j.toString(n) },
      });
    }
    max(e, n) {
      return new qt({
        ...this._def,
        maxLength: { value: e, message: j.toString(n) },
      });
    }
    length(e, n) {
      return new qt({
        ...this._def,
        exactLength: { value: e, message: j.toString(n) },
      });
    }
    nonempty(e) {
      return this.min(1, e);
    }
  }
  qt.create = (t, e) =>
    new qt({
      type: t,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: B.ZodArray,
      ...H(e),
    });
  function Hs(t) {
    if (t instanceof Se) {
      const e = {};
      for (const n in t.shape) {
        const r = t.shape[n];
        e[n] = an.create(Hs(r));
      }
      return new Se({ ...t._def, shape: () => e });
    } else
      return t instanceof qt
        ? new qt({ ...t._def, type: Hs(t.element) })
        : t instanceof an
          ? an.create(Hs(t.unwrap()))
          : t instanceof ur
            ? ur.create(Hs(t.unwrap()))
            : t instanceof on
              ? on.create(t.items.map((e) => Hs(e)))
              : t;
  }
  class Se extends K {
    constructor() {
      super(...arguments),
        (this._cached = null),
        (this.nonstrict = this.passthrough),
        (this.augment = this.extend);
    }
    _getCached() {
      if (this._cached !== null) return this._cached;
      const e = this._def.shape(),
        n = re.objectKeys(e);
      return (this._cached = { shape: e, keys: n });
    }
    _parse(e) {
      if (this._getType(e) !== M.object) {
        const u = this._getOrReturnCtx(e);
        return (
          O(u, {
            code: T.invalid_type,
            expected: M.object,
            received: u.parsedType,
          }),
          z
        );
      }
      const { status: r, ctx: s } = this._processInputParams(e),
        { shape: i, keys: o } = this._getCached(),
        a = [];
      if (
        !(this._def.catchall instanceof Tn && this._def.unknownKeys === "strip")
      )
        for (const u in s.data) o.includes(u) || a.push(u);
      const l = [];
      for (const u of o) {
        const c = i[u],
          d = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(new sn(s, d, s.path, u)),
          alwaysSet: u in s.data,
        });
      }
      if (this._def.catchall instanceof Tn) {
        const u = this._def.unknownKeys;
        if (u === "passthrough")
          for (const c of a)
            l.push({
              key: { status: "valid", value: c },
              value: { status: "valid", value: s.data[c] },
            });
        else if (u === "strict")
          a.length > 0 &&
            (O(s, { code: T.unrecognized_keys, keys: a }), r.dirty());
        else if (u !== "strip")
          throw new Error(
            "Internal ZodObject error: invalid unknownKeys value.",
          );
      } else {
        const u = this._def.catchall;
        for (const c of a) {
          const d = s.data[c];
          l.push({
            key: { status: "valid", value: c },
            value: u._parse(new sn(s, d, s.path, c)),
            alwaysSet: c in s.data,
          });
        }
      }
      return s.common.async
        ? Promise.resolve()
            .then(async () => {
              const u = [];
              for (const c of l) {
                const d = await c.key,
                  h = await c.value;
                u.push({ key: d, value: h, alwaysSet: c.alwaysSet });
              }
              return u;
            })
            .then((u) => qe.mergeObjectSync(r, u))
        : qe.mergeObjectSync(r, l);
    }
    get shape() {
      return this._def.shape();
    }
    strict(e) {
      return (
        j.errToObj,
        new Se({
          ...this._def,
          unknownKeys: "strict",
          ...(e !== void 0
            ? {
                errorMap: (n, r) => {
                  var s, i, o, a;
                  const l =
                    (o =
                      (i = (s = this._def).errorMap) === null || i === void 0
                        ? void 0
                        : i.call(s, n, r).message) !== null && o !== void 0
                      ? o
                      : r.defaultError;
                  return n.code === "unrecognized_keys"
                    ? {
                        message:
                          (a = j.errToObj(e).message) !== null && a !== void 0
                            ? a
                            : l,
                      }
                    : { message: l };
                },
              }
            : {}),
        })
      );
    }
    strip() {
      return new Se({ ...this._def, unknownKeys: "strip" });
    }
    passthrough() {
      return new Se({ ...this._def, unknownKeys: "passthrough" });
    }
    extend(e) {
      return new Se({
        ...this._def,
        shape: () => ({ ...this._def.shape(), ...e }),
      });
    }
    merge(e) {
      return new Se({
        unknownKeys: e._def.unknownKeys,
        catchall: e._def.catchall,
        shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
        typeName: B.ZodObject,
      });
    }
    setKey(e, n) {
      return this.augment({ [e]: n });
    }
    catchall(e) {
      return new Se({ ...this._def, catchall: e });
    }
    pick(e) {
      const n = {};
      return (
        re.objectKeys(e).forEach((r) => {
          e[r] && this.shape[r] && (n[r] = this.shape[r]);
        }),
        new Se({ ...this._def, shape: () => n })
      );
    }
    omit(e) {
      const n = {};
      return (
        re.objectKeys(this.shape).forEach((r) => {
          e[r] || (n[r] = this.shape[r]);
        }),
        new Se({ ...this._def, shape: () => n })
      );
    }
    deepPartial() {
      return Hs(this);
    }
    partial(e) {
      const n = {};
      return (
        re.objectKeys(this.shape).forEach((r) => {
          const s = this.shape[r];
          e && !e[r] ? (n[r] = s) : (n[r] = s.optional());
        }),
        new Se({ ...this._def, shape: () => n })
      );
    }
    required(e) {
      const n = {};
      return (
        re.objectKeys(this.shape).forEach((r) => {
          if (e && !e[r]) n[r] = this.shape[r];
          else {
            let i = this.shape[r];
            for (; i instanceof an; ) i = i._def.innerType;
            n[r] = i;
          }
        }),
        new Se({ ...this._def, shape: () => n })
      );
    }
    keyof() {
      return Ev(re.objectKeys(this.shape));
    }
  }
  (Se.create = (t, e) =>
    new Se({
      shape: () => t,
      unknownKeys: "strip",
      catchall: Tn.create(),
      typeName: B.ZodObject,
      ...H(e),
    })),
    (Se.strictCreate = (t, e) =>
      new Se({
        shape: () => t,
        unknownKeys: "strict",
        catchall: Tn.create(),
        typeName: B.ZodObject,
        ...H(e),
      })),
    (Se.lazycreate = (t, e) =>
      new Se({
        shape: t,
        unknownKeys: "strip",
        catchall: Tn.create(),
        typeName: B.ZodObject,
        ...H(e),
      }));
  class To extends K {
    _parse(e) {
      const { ctx: n } = this._processInputParams(e),
        r = this._def.options;
      function s(i) {
        for (const a of i) if (a.result.status === "valid") return a.result;
        for (const a of i)
          if (a.result.status === "dirty")
            return n.common.issues.push(...a.ctx.common.issues), a.result;
        const o = i.map((a) => new xt(a.ctx.common.issues));
        return O(n, { code: T.invalid_union, unionErrors: o }), z;
      }
      if (n.common.async)
        return Promise.all(
          r.map(async (i) => {
            const o = {
              ...n,
              common: { ...n.common, issues: [] },
              parent: null,
            };
            return {
              result: await i._parseAsync({
                data: n.data,
                path: n.path,
                parent: o,
              }),
              ctx: o,
            };
          }),
        ).then(s);
      {
        let i;
        const o = [];
        for (const l of r) {
          const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
            c = l._parseSync({ data: n.data, path: n.path, parent: u });
          if (c.status === "valid") return c;
          c.status === "dirty" && !i && (i = { result: c, ctx: u }),
            u.common.issues.length && o.push(u.common.issues);
        }
        if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
        const a = o.map((l) => new xt(l));
        return O(n, { code: T.invalid_union, unionErrors: a }), z;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  To.create = (t, e) => new To({ options: t, typeName: B.ZodUnion, ...H(e) });
  const Pn = (t) =>
    t instanceof Ro
      ? Pn(t.schema)
      : t instanceof Kt
        ? Pn(t.innerType())
        : t instanceof No
          ? [t.value]
          : t instanceof lr
            ? t.options
            : t instanceof Oo
              ? re.objectValues(t.enum)
              : t instanceof Mo
                ? Pn(t._def.innerType)
                : t instanceof Eo
                  ? [void 0]
                  : t instanceof Ao
                    ? [null]
                    : t instanceof an
                      ? [void 0, ...Pn(t.unwrap())]
                      : t instanceof ur
                        ? [null, ...Pn(t.unwrap())]
                        : t instanceof Eh || t instanceof jo
                          ? Pn(t.unwrap())
                          : t instanceof Lo
                            ? Pn(t._def.innerType)
                            : [];
  class Kl extends K {
    _parse(e) {
      const { ctx: n } = this._processInputParams(e);
      if (n.parsedType !== M.object)
        return (
          O(n, {
            code: T.invalid_type,
            expected: M.object,
            received: n.parsedType,
          }),
          z
        );
      const r = this.discriminator,
        s = n.data[r],
        i = this.optionsMap.get(s);
      return i
        ? n.common.async
          ? i._parseAsync({ data: n.data, path: n.path, parent: n })
          : i._parseSync({ data: n.data, path: n.path, parent: n })
        : (O(n, {
            code: T.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r],
          }),
          z);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, n, r) {
      const s = new Map();
      for (const i of n) {
        const o = Pn(i.shape[e]);
        if (!o.length)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
          );
        for (const a of o) {
          if (s.has(a))
            throw new Error(
              `Discriminator property ${String(e)} has duplicate value ${String(a)}`,
            );
          s.set(a, i);
        }
      }
      return new Kl({
        typeName: B.ZodDiscriminatedUnion,
        discriminator: e,
        options: n,
        optionsMap: s,
        ...H(r),
      });
    }
  }
  function kh(t, e) {
    const n = ir(t),
      r = ir(e);
    if (t === e) return { valid: !0, data: t };
    if (n === M.object && r === M.object) {
      const s = re.objectKeys(e),
        i = re.objectKeys(t).filter((a) => s.indexOf(a) !== -1),
        o = { ...t, ...e };
      for (const a of i) {
        const l = kh(t[a], e[a]);
        if (!l.valid) return { valid: !1 };
        o[a] = l.data;
      }
      return { valid: !0, data: o };
    } else if (n === M.array && r === M.array) {
      if (t.length !== e.length) return { valid: !1 };
      const s = [];
      for (let i = 0; i < t.length; i++) {
        const o = t[i],
          a = e[i],
          l = kh(o, a);
        if (!l.valid) return { valid: !1 };
        s.push(l.data);
      }
      return { valid: !0, data: s };
    } else
      return n === M.date && r === M.date && +t == +e
        ? { valid: !0, data: t }
        : { valid: !1 };
  }
  class Po extends K {
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e),
        s = (i, o) => {
          if (bh(i) || bh(o)) return z;
          const a = kh(i.value, o.value);
          return a.valid
            ? ((xh(i) || xh(o)) && n.dirty(),
              { status: n.value, value: a.data })
            : (O(r, { code: T.invalid_intersection_types }), z);
        };
      return r.common.async
        ? Promise.all([
            this._def.left._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
          ]).then(([i, o]) => s(i, o))
        : s(
            this._def.left._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
          );
    }
  }
  Po.create = (t, e, n) =>
    new Po({ left: t, right: e, typeName: B.ZodIntersection, ...H(n) });
  class on extends K {
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== M.array)
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.array,
            received: r.parsedType,
          }),
          z
        );
      if (r.data.length < this._def.items.length)
        return (
          O(r, {
            code: T.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          z
        );
      !this._def.rest &&
        r.data.length > this._def.items.length &&
        (O(r, {
          code: T.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        n.dirty());
      const i = [...r.data]
        .map((o, a) => {
          const l = this._def.items[a] || this._def.rest;
          return l ? l._parse(new sn(r, o, r.path, a)) : null;
        })
        .filter((o) => !!o);
      return r.common.async
        ? Promise.all(i).then((o) => qe.mergeArray(n, o))
        : qe.mergeArray(n, i);
    }
    get items() {
      return this._def.items;
    }
    rest(e) {
      return new on({ ...this._def, rest: e });
    }
  }
  on.create = (t, e) => {
    if (!Array.isArray(t))
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new on({ items: t, typeName: B.ZodTuple, rest: null, ...H(e) });
  };
  class Co extends K {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== M.object)
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.object,
            received: r.parsedType,
          }),
          z
        );
      const s = [],
        i = this._def.keyType,
        o = this._def.valueType;
      for (const a in r.data)
        s.push({
          key: i._parse(new sn(r, a, r.path, a)),
          value: o._parse(new sn(r, r.data[a], r.path, a)),
          alwaysSet: a in r.data,
        });
      return r.common.async
        ? qe.mergeObjectAsync(n, s)
        : qe.mergeObjectSync(n, s);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, n, r) {
      return n instanceof K
        ? new Co({ keyType: e, valueType: n, typeName: B.ZodRecord, ...H(r) })
        : new Co({
            keyType: Gt.create(),
            valueType: e,
            typeName: B.ZodRecord,
            ...H(n),
          });
    }
  }
  class Zl extends K {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== M.map)
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.map,
            received: r.parsedType,
          }),
          z
        );
      const s = this._def.keyType,
        i = this._def.valueType,
        o = [...r.data.entries()].map(([a, l], u) => ({
          key: s._parse(new sn(r, a, r.path, [u, "key"])),
          value: i._parse(new sn(r, l, r.path, [u, "value"])),
        }));
      if (r.common.async) {
        const a = new Map();
        return Promise.resolve().then(async () => {
          for (const l of o) {
            const u = await l.key,
              c = await l.value;
            if (u.status === "aborted" || c.status === "aborted") return z;
            (u.status === "dirty" || c.status === "dirty") && n.dirty(),
              a.set(u.value, c.value);
          }
          return { status: n.value, value: a };
        });
      } else {
        const a = new Map();
        for (const l of o) {
          const u = l.key,
            c = l.value;
          if (u.status === "aborted" || c.status === "aborted") return z;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(),
            a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      }
    }
  }
  Zl.create = (t, e, n) =>
    new Zl({ valueType: e, keyType: t, typeName: B.ZodMap, ...H(n) });
  class Zr extends K {
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e);
      if (r.parsedType !== M.set)
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.set,
            received: r.parsedType,
          }),
          z
        );
      const s = this._def;
      s.minSize !== null &&
        r.data.size < s.minSize.value &&
        (O(r, {
          code: T.too_small,
          minimum: s.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.minSize.message,
        }),
        n.dirty()),
        s.maxSize !== null &&
          r.data.size > s.maxSize.value &&
          (O(r, {
            code: T.too_big,
            maximum: s.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: s.maxSize.message,
          }),
          n.dirty());
      const i = this._def.valueType;
      function o(l) {
        const u = new Set();
        for (const c of l) {
          if (c.status === "aborted") return z;
          c.status === "dirty" && n.dirty(), u.add(c.value);
        }
        return { status: n.value, value: u };
      }
      const a = [...r.data.values()].map((l, u) =>
        i._parse(new sn(r, l, r.path, u)),
      );
      return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
    }
    min(e, n) {
      return new Zr({
        ...this._def,
        minSize: { value: e, message: j.toString(n) },
      });
    }
    max(e, n) {
      return new Zr({
        ...this._def,
        maxSize: { value: e, message: j.toString(n) },
      });
    }
    size(e, n) {
      return this.min(e, n).max(e, n);
    }
    nonempty(e) {
      return this.min(1, e);
    }
  }
  Zr.create = (t, e) =>
    new Zr({
      valueType: t,
      minSize: null,
      maxSize: null,
      typeName: B.ZodSet,
      ...H(e),
    });
  class Gs extends K {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      const { ctx: n } = this._processInputParams(e);
      if (n.parsedType !== M.function)
        return (
          O(n, {
            code: T.invalid_type,
            expected: M.function,
            received: n.parsedType,
          }),
          z
        );
      function r(a, l) {
        return Wl({
          data: a,
          path: n.path,
          errorMaps: [
            n.common.contextualErrorMap,
            n.schemaErrorMap,
            zl(),
            Bs,
          ].filter((u) => !!u),
          issueData: { code: T.invalid_arguments, argumentsError: l },
        });
      }
      function s(a, l) {
        return Wl({
          data: a,
          path: n.path,
          errorMaps: [
            n.common.contextualErrorMap,
            n.schemaErrorMap,
            zl(),
            Bs,
          ].filter((u) => !!u),
          issueData: { code: T.invalid_return_type, returnTypeError: l },
        });
      }
      const i = { errorMap: n.common.contextualErrorMap },
        o = n.data;
      if (this._def.returns instanceof qs) {
        const a = this;
        return it(async function (...l) {
          const u = new xt([]),
            c = await a._def.args.parseAsync(l, i).catch((p) => {
              throw (u.addIssue(r(l, p)), u);
            }),
            d = await Reflect.apply(o, this, c);
          return await a._def.returns._def.type.parseAsync(d, i).catch((p) => {
            throw (u.addIssue(s(d, p)), u);
          });
        });
      } else {
        const a = this;
        return it(function (...l) {
          const u = a._def.args.safeParse(l, i);
          if (!u.success) throw new xt([r(l, u.error)]);
          const c = Reflect.apply(o, this, u.data),
            d = a._def.returns.safeParse(c, i);
          if (!d.success) throw new xt([s(c, d.error)]);
          return d.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new Gs({ ...this._def, args: on.create(e).rest(Kr.create()) });
    }
    returns(e) {
      return new Gs({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, n, r) {
      return new Gs({
        args: e || on.create([]).rest(Kr.create()),
        returns: n || Kr.create(),
        typeName: B.ZodFunction,
        ...H(r),
      });
    }
  }
  class Ro extends K {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      const { ctx: n } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: n.data, path: n.path, parent: n });
    }
  }
  Ro.create = (t, e) => new Ro({ getter: t, typeName: B.ZodLazy, ...H(e) });
  class No extends K {
    _parse(e) {
      if (e.data !== this._def.value) {
        const n = this._getOrReturnCtx(e);
        return (
          O(n, {
            received: n.data,
            code: T.invalid_literal,
            expected: this._def.value,
          }),
          z
        );
      }
      return { status: "valid", value: e.data };
    }
    get value() {
      return this._def.value;
    }
  }
  No.create = (t, e) => new No({ value: t, typeName: B.ZodLiteral, ...H(e) });
  function Ev(t, e) {
    return new lr({ values: t, typeName: B.ZodEnum, ...H(e) });
  }
  class lr extends K {
    constructor() {
      super(...arguments), xo.set(this, void 0);
    }
    _parse(e) {
      if (typeof e.data != "string") {
        const n = this._getOrReturnCtx(e),
          r = this._def.values;
        return (
          O(n, {
            expected: re.joinValues(r),
            received: n.parsedType,
            code: T.invalid_type,
          }),
          z
        );
      }
      if (
        (Hl(this, xo) || _v(this, xo, new Set(this._def.values)),
        !Hl(this, xo).has(e.data))
      ) {
        const n = this._getOrReturnCtx(e),
          r = this._def.values;
        return (
          O(n, { received: n.data, code: T.invalid_enum_value, options: r }), z
        );
      }
      return it(e.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const e = {};
      for (const n of this._def.values) e[n] = n;
      return e;
    }
    get Values() {
      const e = {};
      for (const n of this._def.values) e[n] = n;
      return e;
    }
    get Enum() {
      const e = {};
      for (const n of this._def.values) e[n] = n;
      return e;
    }
    extract(e, n = this._def) {
      return lr.create(e, { ...this._def, ...n });
    }
    exclude(e, n = this._def) {
      return lr.create(
        this.options.filter((r) => !e.includes(r)),
        { ...this._def, ...n },
      );
    }
  }
  (xo = new WeakMap()), (lr.create = Ev);
  class Oo extends K {
    constructor() {
      super(...arguments), So.set(this, void 0);
    }
    _parse(e) {
      const n = re.getValidEnumValues(this._def.values),
        r = this._getOrReturnCtx(e);
      if (r.parsedType !== M.string && r.parsedType !== M.number) {
        const s = re.objectValues(n);
        return (
          O(r, {
            expected: re.joinValues(s),
            received: r.parsedType,
            code: T.invalid_type,
          }),
          z
        );
      }
      if (
        (Hl(this, So) ||
          _v(this, So, new Set(re.getValidEnumValues(this._def.values))),
        !Hl(this, So).has(e.data))
      ) {
        const s = re.objectValues(n);
        return (
          O(r, { received: r.data, code: T.invalid_enum_value, options: s }), z
        );
      }
      return it(e.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  (So = new WeakMap()),
    (Oo.create = (t, e) =>
      new Oo({ values: t, typeName: B.ZodNativeEnum, ...H(e) }));
  class qs extends K {
    unwrap() {
      return this._def.type;
    }
    _parse(e) {
      const { ctx: n } = this._processInputParams(e);
      if (n.parsedType !== M.promise && n.common.async === !1)
        return (
          O(n, {
            code: T.invalid_type,
            expected: M.promise,
            received: n.parsedType,
          }),
          z
        );
      const r = n.parsedType === M.promise ? n.data : Promise.resolve(n.data);
      return it(
        r.then((s) =>
          this._def.type.parseAsync(s, {
            path: n.path,
            errorMap: n.common.contextualErrorMap,
          }),
        ),
      );
    }
  }
  qs.create = (t, e) => new qs({ type: t, typeName: B.ZodPromise, ...H(e) });
  class Kt extends K {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === B.ZodEffects
        ? this._def.schema.sourceType()
        : this._def.schema;
    }
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e),
        s = this._def.effect || null,
        i = {
          addIssue: (o) => {
            O(r, o), o.fatal ? n.abort() : n.dirty();
          },
          get path() {
            return r.path;
          },
        };
      if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
        const o = s.transform(r.data, i);
        if (r.common.async)
          return Promise.resolve(o).then(async (a) => {
            if (n.value === "aborted") return z;
            const l = await this._def.schema._parseAsync({
              data: a,
              path: r.path,
              parent: r,
            });
            return l.status === "aborted"
              ? z
              : l.status === "dirty" || n.value === "dirty"
                ? zs(l.value)
                : l;
          });
        {
          if (n.value === "aborted") return z;
          const a = this._def.schema._parseSync({
            data: o,
            path: r.path,
            parent: r,
          });
          return a.status === "aborted"
            ? z
            : a.status === "dirty" || n.value === "dirty"
              ? zs(a.value)
              : a;
        }
      }
      if (s.type === "refinement") {
        const o = (a) => {
          const l = s.refinement(a, i);
          if (r.common.async) return Promise.resolve(l);
          if (l instanceof Promise)
            throw new Error(
              "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
            );
          return a;
        };
        if (r.common.async === !1) {
          const a = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          return a.status === "aborted"
            ? z
            : (a.status === "dirty" && n.dirty(),
              o(a.value),
              { status: n.value, value: a.value });
        } else
          return this._def.schema
            ._parseAsync({ data: r.data, path: r.path, parent: r })
            .then((a) =>
              a.status === "aborted"
                ? z
                : (a.status === "dirty" && n.dirty(),
                  o(a.value).then(() => ({ status: n.value, value: a.value }))),
            );
      }
      if (s.type === "transform")
        if (r.common.async === !1) {
          const o = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          if (!_o(o)) return o;
          const a = s.transform(o.value, i);
          if (a instanceof Promise)
            throw new Error(
              "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
            );
          return { status: n.value, value: a };
        } else
          return this._def.schema
            ._parseAsync({ data: r.data, path: r.path, parent: r })
            .then((o) =>
              _o(o)
                ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                    status: n.value,
                    value: a,
                  }))
                : o,
            );
      re.assertNever(s);
    }
  }
  (Kt.create = (t, e, n) =>
    new Kt({ schema: t, typeName: B.ZodEffects, effect: e, ...H(n) })),
    (Kt.createWithPreprocess = (t, e, n) =>
      new Kt({
        schema: e,
        effect: { type: "preprocess", transform: t },
        typeName: B.ZodEffects,
        ...H(n),
      }));
  class an extends K {
    _parse(e) {
      return this._getType(e) === M.undefined
        ? it(void 0)
        : this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  an.create = (t, e) =>
    new an({ innerType: t, typeName: B.ZodOptional, ...H(e) });
  class ur extends K {
    _parse(e) {
      return this._getType(e) === M.null
        ? it(null)
        : this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ur.create = (t, e) =>
    new ur({ innerType: t, typeName: B.ZodNullable, ...H(e) });
  class Mo extends K {
    _parse(e) {
      const { ctx: n } = this._processInputParams(e);
      let r = n.data;
      return (
        n.parsedType === M.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({ data: r, path: n.path, parent: n })
      );
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  Mo.create = (t, e) =>
    new Mo({
      innerType: t,
      typeName: B.ZodDefault,
      defaultValue:
        typeof e.default == "function" ? e.default : () => e.default,
      ...H(e),
    });
  class Lo extends K {
    _parse(e) {
      const { ctx: n } = this._processInputParams(e),
        r = { ...n, common: { ...n.common, issues: [] } },
        s = this._def.innerType._parse({
          data: r.data,
          path: r.path,
          parent: { ...r },
        });
      return bo(s)
        ? s.then((i) => ({
            status: "valid",
            value:
              i.status === "valid"
                ? i.value
                : this._def.catchValue({
                    get error() {
                      return new xt(r.common.issues);
                    },
                    input: r.data,
                  }),
          }))
        : {
            status: "valid",
            value:
              s.status === "valid"
                ? s.value
                : this._def.catchValue({
                    get error() {
                      return new xt(r.common.issues);
                    },
                    input: r.data,
                  }),
          };
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  Lo.create = (t, e) =>
    new Lo({
      innerType: t,
      typeName: B.ZodCatch,
      catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
      ...H(e),
    });
  class Ql extends K {
    _parse(e) {
      if (this._getType(e) !== M.nan) {
        const r = this._getOrReturnCtx(e);
        return (
          O(r, {
            code: T.invalid_type,
            expected: M.nan,
            received: r.parsedType,
          }),
          z
        );
      }
      return { status: "valid", value: e.data };
    }
  }
  Ql.create = (t) => new Ql({ typeName: B.ZodNaN, ...H(t) });
  const Zk = Symbol("zod_brand");
  class Eh extends K {
    _parse(e) {
      const { ctx: n } = this._processInputParams(e),
        r = n.data;
      return this._def.type._parse({ data: r, path: n.path, parent: n });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class Io extends K {
    _parse(e) {
      const { status: n, ctx: r } = this._processInputParams(e);
      if (r.common.async)
        return (async () => {
          const i = await this._def.in._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          return i.status === "aborted"
            ? z
            : i.status === "dirty"
              ? (n.dirty(), zs(i.value))
              : this._def.out._parseAsync({
                  data: i.value,
                  path: r.path,
                  parent: r,
                });
        })();
      {
        const s = this._def.in._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return s.status === "aborted"
          ? z
          : s.status === "dirty"
            ? (n.dirty(), { status: "dirty", value: s.value })
            : this._def.out._parseSync({
                data: s.value,
                path: r.path,
                parent: r,
              });
      }
    }
    static create(e, n) {
      return new Io({ in: e, out: n, typeName: B.ZodPipeline });
    }
  }
  class jo extends K {
    _parse(e) {
      const n = this._def.innerType._parse(e),
        r = (s) => (_o(s) && (s.value = Object.freeze(s.value)), s);
      return bo(n) ? n.then((s) => r(s)) : r(n);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  jo.create = (t, e) =>
    new jo({ innerType: t, typeName: B.ZodReadonly, ...H(e) });
  function Av(t, e = {}, n) {
    return t
      ? Ws.create().superRefine((r, s) => {
          var i, o;
          if (!t(r)) {
            const a =
                typeof e == "function"
                  ? e(r)
                  : typeof e == "string"
                    ? { message: e }
                    : e,
              l =
                (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null &&
                o !== void 0
                  ? o
                  : !0,
              u = typeof a == "string" ? { message: a } : a;
            s.addIssue({ code: "custom", ...u, fatal: l });
          }
        })
      : Ws.create();
  }
  const Qk = { object: Se.lazycreate };
  var B;
  (function (t) {
    (t.ZodString = "ZodString"),
      (t.ZodNumber = "ZodNumber"),
      (t.ZodNaN = "ZodNaN"),
      (t.ZodBigInt = "ZodBigInt"),
      (t.ZodBoolean = "ZodBoolean"),
      (t.ZodDate = "ZodDate"),
      (t.ZodSymbol = "ZodSymbol"),
      (t.ZodUndefined = "ZodUndefined"),
      (t.ZodNull = "ZodNull"),
      (t.ZodAny = "ZodAny"),
      (t.ZodUnknown = "ZodUnknown"),
      (t.ZodNever = "ZodNever"),
      (t.ZodVoid = "ZodVoid"),
      (t.ZodArray = "ZodArray"),
      (t.ZodObject = "ZodObject"),
      (t.ZodUnion = "ZodUnion"),
      (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
      (t.ZodIntersection = "ZodIntersection"),
      (t.ZodTuple = "ZodTuple"),
      (t.ZodRecord = "ZodRecord"),
      (t.ZodMap = "ZodMap"),
      (t.ZodSet = "ZodSet"),
      (t.ZodFunction = "ZodFunction"),
      (t.ZodLazy = "ZodLazy"),
      (t.ZodLiteral = "ZodLiteral"),
      (t.ZodEnum = "ZodEnum"),
      (t.ZodEffects = "ZodEffects"),
      (t.ZodNativeEnum = "ZodNativeEnum"),
      (t.ZodOptional = "ZodOptional"),
      (t.ZodNullable = "ZodNullable"),
      (t.ZodDefault = "ZodDefault"),
      (t.ZodCatch = "ZodCatch"),
      (t.ZodPromise = "ZodPromise"),
      (t.ZodBranded = "ZodBranded"),
      (t.ZodPipeline = "ZodPipeline"),
      (t.ZodReadonly = "ZodReadonly");
  })(B || (B = {}));
  const Xk = (t, e = { message: `Input not instance of ${t.name}` }) =>
      Av((n) => n instanceof t, e),
    Tv = Gt.create,
    Pv = or.create,
    Jk = Ql.create,
    Yk = ar.create,
    Cv = ko.create,
    eE = qr.create,
    tE = Gl.create,
    nE = Eo.create,
    rE = Ao.create,
    sE = Ws.create,
    iE = Kr.create,
    oE = Tn.create,
    aE = ql.create,
    lE = qt.create,
    uE = Se.create,
    cE = Se.strictCreate,
    dE = To.create,
    hE = Kl.create,
    fE = Po.create,
    pE = on.create,
    mE = Co.create,
    gE = Zl.create,
    yE = Zr.create,
    vE = Gs.create,
    wE = Ro.create,
    _E = No.create,
    bE = lr.create,
    xE = Oo.create,
    SE = qs.create,
    Rv = Kt.create,
    kE = an.create,
    EE = ur.create,
    AE = Kt.createWithPreprocess,
    TE = Io.create;
  var Ae = Object.freeze({
    __proto__: null,
    defaultErrorMap: Bs,
    setErrorMap: Ok,
    getErrorMap: zl,
    makeIssue: Wl,
    EMPTY_PATH: Mk,
    addIssueToContext: O,
    ParseStatus: qe,
    INVALID: z,
    DIRTY: zs,
    OK: it,
    isAborted: bh,
    isDirty: xh,
    isValid: _o,
    isAsync: bo,
    get util() {
      return re;
    },
    get objectUtil() {
      return _h;
    },
    ZodParsedType: M,
    getParsedType: ir,
    ZodType: K,
    datetimeRegex: kv,
    ZodString: Gt,
    ZodNumber: or,
    ZodBigInt: ar,
    ZodBoolean: ko,
    ZodDate: qr,
    ZodSymbol: Gl,
    ZodUndefined: Eo,
    ZodNull: Ao,
    ZodAny: Ws,
    ZodUnknown: Kr,
    ZodNever: Tn,
    ZodVoid: ql,
    ZodArray: qt,
    ZodObject: Se,
    ZodUnion: To,
    ZodDiscriminatedUnion: Kl,
    ZodIntersection: Po,
    ZodTuple: on,
    ZodRecord: Co,
    ZodMap: Zl,
    ZodSet: Zr,
    ZodFunction: Gs,
    ZodLazy: Ro,
    ZodLiteral: No,
    ZodEnum: lr,
    ZodNativeEnum: Oo,
    ZodPromise: qs,
    ZodEffects: Kt,
    ZodTransformer: Kt,
    ZodOptional: an,
    ZodNullable: ur,
    ZodDefault: Mo,
    ZodCatch: Lo,
    ZodNaN: Ql,
    BRAND: Zk,
    ZodBranded: Eh,
    ZodPipeline: Io,
    ZodReadonly: jo,
    custom: Av,
    Schema: K,
    ZodSchema: K,
    late: Qk,
    get ZodFirstPartyTypeKind() {
      return B;
    },
    coerce: {
      string: (t) => Gt.create({ ...t, coerce: !0 }),
      number: (t) => or.create({ ...t, coerce: !0 }),
      boolean: (t) => ko.create({ ...t, coerce: !0 }),
      bigint: (t) => ar.create({ ...t, coerce: !0 }),
      date: (t) => qr.create({ ...t, coerce: !0 }),
    },
    any: sE,
    array: lE,
    bigint: Yk,
    boolean: Cv,
    date: eE,
    discriminatedUnion: hE,
    effect: Rv,
    enum: bE,
    function: vE,
    instanceof: Xk,
    intersection: fE,
    lazy: wE,
    literal: _E,
    map: gE,
    nan: Jk,
    nativeEnum: xE,
    never: oE,
    null: rE,
    nullable: EE,
    number: Pv,
    object: uE,
    oboolean: () => Cv().optional(),
    onumber: () => Pv().optional(),
    optional: kE,
    ostring: () => Tv().optional(),
    pipeline: TE,
    preprocess: AE,
    promise: SE,
    record: mE,
    set: yE,
    strictObject: cE,
    string: Tv,
    symbol: tE,
    transformer: Rv,
    tuple: pE,
    undefined: nE,
    union: dE,
    unknown: iE,
    void: aE,
    NEVER: z,
    ZodIssueCode: T,
    quotelessJson: Nk,
    ZodError: xt,
  });
  Ae.enum(["click", "navigate", "type"]);
  const Do = Ae.enum(["before", "after"]);
  class PE {
    logWithLevel(e, n, r) {
      console[e](`[${e.toUpperCase()}] ${n} ${r || ""}`);
    }
    info(e, n) {
      this.logWithLevel("info", e, n);
    }
    warn(e, n) {
      this.logWithLevel("warn", e, n);
    }
    error(e, n) {
      this.logWithLevel("error", e, n);
    }
  }
  const Oe = new PE(),
    Ah = Ae.object({ phase: Do });
  Ae.object({ text: Ae.string() });
  const CE = (t) => {
    let e;
    return (
      t
        ? (e = t)
        : typeof fetch > "u"
          ? (e = (...n) =>
              Promise.resolve()
                .then(() => Zs)
                .then(({ default: r }) => r(...n)))
          : (e = fetch),
      (...n) => e(...n)
    );
  };
  class Th extends Error {
    constructor(e, n = "FunctionsError", r) {
      super(e), (this.name = n), (this.context = r);
    }
  }
  class RE extends Th {
    constructor(e) {
      super(
        "Failed to send a request to the Edge Function",
        "FunctionsFetchError",
        e,
      );
    }
  }
  class NE extends Th {
    constructor(e) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
    }
  }
  class OE extends Th {
    constructor(e) {
      super(
        "Edge Function returned a non-2xx status code",
        "FunctionsHttpError",
        e,
      );
    }
  }
  var Ph;
  (function (t) {
    (t.Any = "any"),
      (t.ApNortheast1 = "ap-northeast-1"),
      (t.ApNortheast2 = "ap-northeast-2"),
      (t.ApSouth1 = "ap-south-1"),
      (t.ApSoutheast1 = "ap-southeast-1"),
      (t.ApSoutheast2 = "ap-southeast-2"),
      (t.CaCentral1 = "ca-central-1"),
      (t.EuCentral1 = "eu-central-1"),
      (t.EuWest1 = "eu-west-1"),
      (t.EuWest2 = "eu-west-2"),
      (t.EuWest3 = "eu-west-3"),
      (t.SaEast1 = "sa-east-1"),
      (t.UsEast1 = "us-east-1"),
      (t.UsWest1 = "us-west-1"),
      (t.UsWest2 = "us-west-2");
  })(Ph || (Ph = {}));
  var ME = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  class LE {
    constructor(
      e,
      { headers: n = {}, customFetch: r, region: s = Ph.Any } = {},
    ) {
      (this.url = e),
        (this.headers = n),
        (this.region = s),
        (this.fetch = CE(r));
    }
    setAuth(e) {
      this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e, n = {}) {
      var r;
      return ME(this, void 0, void 0, function* () {
        try {
          const { headers: s, method: i, body: o } = n;
          let a = {},
            { region: l } = n;
          l || (l = this.region), l && l !== "any" && (a["x-region"] = l);
          let u;
          o &&
            ((s && !Object.prototype.hasOwnProperty.call(s, "Content-Type")) ||
              !s) &&
            ((typeof Blob < "u" && o instanceof Blob) ||
            o instanceof ArrayBuffer
              ? ((a["Content-Type"] = "application/octet-stream"), (u = o))
              : typeof o == "string"
                ? ((a["Content-Type"] = "text/plain"), (u = o))
                : typeof FormData < "u" && o instanceof FormData
                  ? (u = o)
                  : ((a["Content-Type"] = "application/json"),
                    (u = JSON.stringify(o))));
          const c = yield this.fetch(`${this.url}/${e}`, {
              method: i || "POST",
              headers: Object.assign(
                Object.assign(Object.assign({}, a), this.headers),
                s,
              ),
              body: u,
            }).catch((v) => {
              throw new RE(v);
            }),
            d = c.headers.get("x-relay-error");
          if (d && d === "true") throw new NE(c);
          if (!c.ok) throw new OE(c);
          let h = (
              (r = c.headers.get("Content-Type")) !== null && r !== void 0
                ? r
                : "text/plain"
            )
              .split(";")[0]
              .trim(),
            p;
          return (
            h === "application/json"
              ? (p = yield c.json())
              : h === "application/octet-stream"
                ? (p = yield c.blob())
                : h === "text/event-stream"
                  ? (p = c)
                  : h === "multipart/form-data"
                    ? (p = yield c.formData())
                    : (p = yield c.text()),
            { data: p, error: null }
          );
        } catch (s) {
          return { data: null, error: s };
        }
      });
    }
  }
  var ht = {},
    Ch = {},
    Xl = {},
    $o = {},
    Jl = {},
    Yl = {},
    IE = function () {
      if (typeof self < "u") return self;
      if (typeof window < "u") return window;
      if (typeof global < "u") return global;
      throw new Error("unable to locate global object");
    },
    Ks = IE();
  const jE = Ks.fetch,
    Nv = Ks.fetch.bind(Ks),
    Ov = Ks.Headers,
    DE = Ks.Request,
    $E = Ks.Response,
    Zs = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Headers: Ov,
          Request: DE,
          Response: $E,
          default: Nv,
          fetch: jE,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    FE = Pe(Zs);
  var eu = {};
  Object.defineProperty(eu, "__esModule", { value: !0 });
  class VE extends Error {
    constructor(e) {
      super(e.message),
        (this.name = "PostgrestError"),
        (this.details = e.details),
        (this.hint = e.hint),
        (this.code = e.code);
    }
  }
  eu.default = VE;
  var Mv =
    (q && q.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Yl, "__esModule", { value: !0 });
  const UE = Mv(FE),
    BE = Mv(eu);
  let zE = class {
    constructor(e) {
      (this.shouldThrowOnError = !1),
        (this.method = e.method),
        (this.url = e.url),
        (this.headers = e.headers),
        (this.schema = e.schema),
        (this.body = e.body),
        (this.shouldThrowOnError = e.shouldThrowOnError),
        (this.signal = e.signal),
        (this.isMaybeSingle = e.isMaybeSingle),
        e.fetch
          ? (this.fetch = e.fetch)
          : typeof fetch > "u"
            ? (this.fetch = UE.default)
            : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(e, n) {
      return (
        (this.headers = Object.assign({}, this.headers)),
        (this.headers[e] = n),
        this
      );
    }
    then(e, n) {
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? (this.headers["Accept-Profile"] = this.schema)
          : (this.headers["Content-Profile"] = this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          (this.headers["Content-Type"] = "application/json");
      const r = this.fetch;
      let s = r(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (i) => {
        var o, a, l;
        let u = null,
          c = null,
          d = null,
          h = i.status,
          p = i.statusText;
        if (i.ok) {
          if (this.method !== "HEAD") {
            const m = await i.text();
            m === "" ||
              (this.headers.Accept === "text/csv" ||
              (this.headers.Accept &&
                this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
                ? (c = m)
                : (c = JSON.parse(m)));
          }
          const g =
              (o = this.headers.Prefer) === null || o === void 0
                ? void 0
                : o.match(/count=(exact|planned|estimated)/),
            w =
              (a = i.headers.get("content-range")) === null || a === void 0
                ? void 0
                : a.split("/");
          g && w && w.length > 1 && (d = parseInt(w[1])),
            this.isMaybeSingle &&
              this.method === "GET" &&
              Array.isArray(c) &&
              (c.length > 1
                ? ((u = {
                    code: "PGRST116",
                    details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (c = null),
                  (d = null),
                  (h = 406),
                  (p = "Not Acceptable"))
                : c.length === 1
                  ? (c = c[0])
                  : (c = null));
        } else {
          const g = await i.text();
          try {
            (u = JSON.parse(g)),
              Array.isArray(u) &&
                i.status === 404 &&
                ((c = []), (u = null), (h = 200), (p = "OK"));
          } catch {
            i.status === 404 && g === ""
              ? ((h = 204), (p = "No Content"))
              : (u = { message: g });
          }
          if (
            (u &&
              this.isMaybeSingle &&
              !(
                (l = u == null ? void 0 : u.details) === null || l === void 0
              ) &&
              l.includes("0 rows") &&
              ((u = null), (h = 200), (p = "OK")),
            u && this.shouldThrowOnError)
          )
            throw new BE.default(u);
        }
        return { error: u, data: c, count: d, status: h, statusText: p };
      });
      return (
        this.shouldThrowOnError ||
          (s = s.catch((i) => {
            var o, a, l;
            return {
              error: {
                message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : "FetchError"}: ${i == null ? void 0 : i.message}`,
                details: `${(a = i == null ? void 0 : i.stack) !== null && a !== void 0 ? a : ""}`,
                hint: "",
                code: `${(l = i == null ? void 0 : i.code) !== null && l !== void 0 ? l : ""}`,
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        s.then(e, n)
      );
    }
  };
  Yl.default = zE;
  var WE =
    (q && q.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Jl, "__esModule", { value: !0 });
  const HE = WE(Yl);
  let GE = class extends HE.default {
    select(e) {
      let n = !1;
      const r = (e ?? "*")
        .split("")
        .map((s) => (/\s/.test(s) && !n ? "" : (s === '"' && (n = !n), s)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.Prefer && (this.headers.Prefer += ","),
        (this.headers.Prefer += "return=representation"),
        this
      );
    }
    order(
      e,
      {
        ascending: n = !0,
        nullsFirst: r,
        foreignTable: s,
        referencedTable: i = s,
      } = {},
    ) {
      const o = i ? `${i}.order` : "order",
        a = this.url.searchParams.get(o);
      return (
        this.url.searchParams.set(
          o,
          `${a ? `${a},` : ""}${e}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`,
        ),
        this
      );
    }
    limit(e, { foreignTable: n, referencedTable: r = n } = {}) {
      const s = typeof r > "u" ? "limit" : `${r}.limit`;
      return this.url.searchParams.set(s, `${e}`), this;
    }
    range(e, n, { foreignTable: r, referencedTable: s = r } = {}) {
      const i = typeof s > "u" ? "offset" : `${s}.offset`,
        o = typeof s > "u" ? "limit" : `${s}.limit`;
      return (
        this.url.searchParams.set(i, `${e}`),
        this.url.searchParams.set(o, `${n - e + 1}`),
        this
      );
    }
    abortSignal(e) {
      return (this.signal = e), this;
    }
    single() {
      return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? (this.headers.Accept = "application/json")
          : (this.headers.Accept = "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return (this.headers.Accept = "text/csv"), this;
    }
    geojson() {
      return (this.headers.Accept = "application/geo+json"), this;
    }
    explain({
      analyze: e = !1,
      verbose: n = !1,
      settings: r = !1,
      buffers: s = !1,
      wal: i = !1,
      format: o = "text",
    } = {}) {
      var a;
      const l = [
          e ? "analyze" : null,
          n ? "verbose" : null,
          r ? "settings" : null,
          s ? "buffers" : null,
          i ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        u =
          (a = this.headers.Accept) !== null && a !== void 0
            ? a
            : "application/json";
      return (
        (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`),
        o === "json" ? this : this
      );
    }
    rollback() {
      var e;
      return (
        ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim()
          .length > 0
          ? (this.headers.Prefer += ",tx=rollback")
          : (this.headers.Prefer = "tx=rollback"),
        this
      );
    }
    returns() {
      return this;
    }
  };
  Jl.default = GE;
  var qE =
    (q && q.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty($o, "__esModule", { value: !0 });
  const KE = qE(Jl);
  let ZE = class extends KE.default {
    eq(e, n) {
      return this.url.searchParams.append(e, `eq.${n}`), this;
    }
    neq(e, n) {
      return this.url.searchParams.append(e, `neq.${n}`), this;
    }
    gt(e, n) {
      return this.url.searchParams.append(e, `gt.${n}`), this;
    }
    gte(e, n) {
      return this.url.searchParams.append(e, `gte.${n}`), this;
    }
    lt(e, n) {
      return this.url.searchParams.append(e, `lt.${n}`), this;
    }
    lte(e, n) {
      return this.url.searchParams.append(e, `lte.${n}`), this;
    }
    like(e, n) {
      return this.url.searchParams.append(e, `like.${n}`), this;
    }
    likeAllOf(e, n) {
      return (
        this.url.searchParams.append(e, `like(all).{${n.join(",")}}`), this
      );
    }
    likeAnyOf(e, n) {
      return (
        this.url.searchParams.append(e, `like(any).{${n.join(",")}}`), this
      );
    }
    ilike(e, n) {
      return this.url.searchParams.append(e, `ilike.${n}`), this;
    }
    ilikeAllOf(e, n) {
      return (
        this.url.searchParams.append(e, `ilike(all).{${n.join(",")}}`), this
      );
    }
    ilikeAnyOf(e, n) {
      return (
        this.url.searchParams.append(e, `ilike(any).{${n.join(",")}}`), this
      );
    }
    is(e, n) {
      return this.url.searchParams.append(e, `is.${n}`), this;
    }
    in(e, n) {
      const r = Array.from(new Set(n))
        .map((s) =>
          typeof s == "string" && new RegExp("[,()]").test(s)
            ? `"${s}"`
            : `${s}`,
        )
        .join(",");
      return this.url.searchParams.append(e, `in.(${r})`), this;
    }
    contains(e, n) {
      return (
        typeof n == "string"
          ? this.url.searchParams.append(e, `cs.${n}`)
          : Array.isArray(n)
            ? this.url.searchParams.append(e, `cs.{${n.join(",")}}`)
            : this.url.searchParams.append(e, `cs.${JSON.stringify(n)}`),
        this
      );
    }
    containedBy(e, n) {
      return (
        typeof n == "string"
          ? this.url.searchParams.append(e, `cd.${n}`)
          : Array.isArray(n)
            ? this.url.searchParams.append(e, `cd.{${n.join(",")}}`)
            : this.url.searchParams.append(e, `cd.${JSON.stringify(n)}`),
        this
      );
    }
    rangeGt(e, n) {
      return this.url.searchParams.append(e, `sr.${n}`), this;
    }
    rangeGte(e, n) {
      return this.url.searchParams.append(e, `nxl.${n}`), this;
    }
    rangeLt(e, n) {
      return this.url.searchParams.append(e, `sl.${n}`), this;
    }
    rangeLte(e, n) {
      return this.url.searchParams.append(e, `nxr.${n}`), this;
    }
    rangeAdjacent(e, n) {
      return this.url.searchParams.append(e, `adj.${n}`), this;
    }
    overlaps(e, n) {
      return (
        typeof n == "string"
          ? this.url.searchParams.append(e, `ov.${n}`)
          : this.url.searchParams.append(e, `ov.{${n.join(",")}}`),
        this
      );
    }
    textSearch(e, n, { config: r, type: s } = {}) {
      let i = "";
      s === "plain"
        ? (i = "pl")
        : s === "phrase"
          ? (i = "ph")
          : s === "websearch" && (i = "w");
      const o = r === void 0 ? "" : `(${r})`;
      return this.url.searchParams.append(e, `${i}fts${o}.${n}`), this;
    }
    match(e) {
      return (
        Object.entries(e).forEach(([n, r]) => {
          this.url.searchParams.append(n, `eq.${r}`);
        }),
        this
      );
    }
    not(e, n, r) {
      return this.url.searchParams.append(e, `not.${n}.${r}`), this;
    }
    or(e, { foreignTable: n, referencedTable: r = n } = {}) {
      const s = r ? `${r}.or` : "or";
      return this.url.searchParams.append(s, `(${e})`), this;
    }
    filter(e, n, r) {
      return this.url.searchParams.append(e, `${n}.${r}`), this;
    }
  };
  $o.default = ZE;
  var QE =
    (q && q.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Xl, "__esModule", { value: !0 });
  const Fo = QE($o);
  let XE = class {
    constructor(e, { headers: n = {}, schema: r, fetch: s }) {
      (this.url = e), (this.headers = n), (this.schema = r), (this.fetch = s);
    }
    select(e, { head: n = !1, count: r } = {}) {
      const s = n ? "HEAD" : "GET";
      let i = !1;
      const o = (e ?? "*")
        .split("")
        .map((a) => (/\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)))
        .join("");
      return (
        this.url.searchParams.set("select", o),
        r && (this.headers.Prefer = `count=${r}`),
        new Fo.default({
          method: s,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    insert(e, { count: n, defaultToNull: r = !0 } = {}) {
      const s = "POST",
        i = [];
      if (
        (this.headers.Prefer && i.push(this.headers.Prefer),
        n && i.push(`count=${n}`),
        r || i.push("missing=default"),
        (this.headers.Prefer = i.join(",")),
        Array.isArray(e))
      ) {
        const o = e.reduce((a, l) => a.concat(Object.keys(l)), []);
        if (o.length > 0) {
          const a = [...new Set(o)].map((l) => `"${l}"`);
          this.url.searchParams.set("columns", a.join(","));
        }
      }
      return new Fo.default({
        method: s,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: e,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    upsert(
      e,
      {
        onConflict: n,
        ignoreDuplicates: r = !1,
        count: s,
        defaultToNull: i = !0,
      } = {},
    ) {
      const o = "POST",
        a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
      if (
        (n !== void 0 && this.url.searchParams.set("on_conflict", n),
        this.headers.Prefer && a.push(this.headers.Prefer),
        s && a.push(`count=${s}`),
        i || a.push("missing=default"),
        (this.headers.Prefer = a.join(",")),
        Array.isArray(e))
      ) {
        const l = e.reduce((u, c) => u.concat(Object.keys(c)), []);
        if (l.length > 0) {
          const u = [...new Set(l)].map((c) => `"${c}"`);
          this.url.searchParams.set("columns", u.join(","));
        }
      }
      return new Fo.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: e,
        fetch: this.fetch,
        allowEmpty: !1,
      });
    }
    update(e, { count: n } = {}) {
      const r = "PATCH",
        s = [];
      return (
        this.headers.Prefer && s.push(this.headers.Prefer),
        n && s.push(`count=${n}`),
        (this.headers.Prefer = s.join(",")),
        new Fo.default({
          method: r,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: e,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
    delete({ count: e } = {}) {
      const n = "DELETE",
        r = [];
      return (
        e && r.push(`count=${e}`),
        this.headers.Prefer && r.unshift(this.headers.Prefer),
        (this.headers.Prefer = r.join(",")),
        new Fo.default({
          method: n,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  };
  Xl.default = XE;
  var tu = {},
    nu = {};
  Object.defineProperty(nu, "__esModule", { value: !0 }),
    (nu.version = void 0),
    (nu.version = "0.0.0-automated"),
    Object.defineProperty(tu, "__esModule", { value: !0 }),
    (tu.DEFAULT_HEADERS = void 0);
  const JE = nu;
  tu.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${JE.version}` };
  var Lv =
    (q && q.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Ch, "__esModule", { value: !0 });
  const YE = Lv(Xl),
    eA = Lv($o),
    tA = tu;
  let nA = class wx {
    constructor(e, { headers: n = {}, schema: r, fetch: s } = {}) {
      (this.url = e),
        (this.headers = Object.assign(
          Object.assign({}, tA.DEFAULT_HEADERS),
          n,
        )),
        (this.schemaName = r),
        (this.fetch = s);
    }
    from(e) {
      const n = new URL(`${this.url}/${e}`);
      return new YE.default(n, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(e) {
      return new wx(this.url, {
        headers: this.headers,
        schema: e,
        fetch: this.fetch,
      });
    }
    rpc(e, n = {}, { head: r = !1, get: s = !1, count: i } = {}) {
      let o;
      const a = new URL(`${this.url}/rpc/${e}`);
      let l;
      r || s
        ? ((o = r ? "HEAD" : "GET"),
          Object.entries(n)
            .filter(([c, d]) => d !== void 0)
            .map(([c, d]) => [
              c,
              Array.isArray(d) ? `{${d.join(",")}}` : `${d}`,
            ])
            .forEach(([c, d]) => {
              a.searchParams.append(c, d);
            }))
        : ((o = "POST"), (l = n));
      const u = Object.assign({}, this.headers);
      return (
        i && (u.Prefer = `count=${i}`),
        new eA.default({
          method: o,
          url: a,
          headers: u,
          schema: this.schemaName,
          body: l,
          fetch: this.fetch,
          allowEmpty: !1,
        })
      );
    }
  };
  Ch.default = nA;
  var Qs =
    (q && q.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(ht, "__esModule", { value: !0 }),
    (ht.PostgrestError =
      ht.PostgrestBuilder =
      ht.PostgrestTransformBuilder =
      ht.PostgrestFilterBuilder =
      ht.PostgrestQueryBuilder =
      ht.PostgrestClient =
        void 0);
  const Iv = Qs(Ch);
  ht.PostgrestClient = Iv.default;
  const jv = Qs(Xl);
  ht.PostgrestQueryBuilder = jv.default;
  const Dv = Qs($o);
  ht.PostgrestFilterBuilder = Dv.default;
  const $v = Qs(Jl);
  ht.PostgrestTransformBuilder = $v.default;
  const Fv = Qs(Yl);
  ht.PostgrestBuilder = Fv.default;
  const Vv = Qs(eu);
  ht.PostgrestError = Vv.default;
  var rA = (ht.default = {
    PostgrestClient: Iv.default,
    PostgrestQueryBuilder: jv.default,
    PostgrestFilterBuilder: Dv.default,
    PostgrestTransformBuilder: $v.default,
    PostgrestBuilder: Fv.default,
    PostgrestError: Vv.default,
  });
  const {
      PostgrestClient: sA,
      PostgrestQueryBuilder: LL,
      PostgrestFilterBuilder: IL,
      PostgrestTransformBuilder: jL,
      PostgrestBuilder: DL,
    } = rA,
    iA = { "X-Client-Info": "realtime-js/2.10.7" },
    oA = "1.0.0",
    Uv = 1e4,
    aA = 1e3;
  var Xs;
  (function (t) {
    (t[(t.connecting = 0)] = "connecting"),
      (t[(t.open = 1)] = "open"),
      (t[(t.closing = 2)] = "closing"),
      (t[(t.closed = 3)] = "closed");
  })(Xs || (Xs = {}));
  var St;
  (function (t) {
    (t.closed = "closed"),
      (t.errored = "errored"),
      (t.joined = "joined"),
      (t.joining = "joining"),
      (t.leaving = "leaving");
  })(St || (St = {}));
  var Zt;
  (function (t) {
    (t.close = "phx_close"),
      (t.error = "phx_error"),
      (t.join = "phx_join"),
      (t.reply = "phx_reply"),
      (t.leave = "phx_leave"),
      (t.access_token = "access_token");
  })(Zt || (Zt = {}));
  var Rh;
  (function (t) {
    t.websocket = "websocket";
  })(Rh || (Rh = {}));
  var Qr;
  (function (t) {
    (t.Connecting = "connecting"),
      (t.Open = "open"),
      (t.Closing = "closing"),
      (t.Closed = "closed");
  })(Qr || (Qr = {}));
  class lA {
    constructor() {
      this.HEADER_LENGTH = 1;
    }
    decode(e, n) {
      return e.constructor === ArrayBuffer
        ? n(this._binaryDecode(e))
        : n(typeof e == "string" ? JSON.parse(e) : {});
    }
    _binaryDecode(e) {
      const n = new DataView(e),
        r = new TextDecoder();
      return this._decodeBroadcast(e, n, r);
    }
    _decodeBroadcast(e, n, r) {
      const s = n.getUint8(1),
        i = n.getUint8(2);
      let o = this.HEADER_LENGTH + 2;
      const a = r.decode(e.slice(o, o + s));
      o = o + s;
      const l = r.decode(e.slice(o, o + i));
      o = o + i;
      const u = JSON.parse(r.decode(e.slice(o, e.byteLength)));
      return { ref: null, topic: a, event: l, payload: u };
    }
  }
  class Bv {
    constructor(e, n) {
      (this.callback = e),
        (this.timerCalc = n),
        (this.timer = void 0),
        (this.tries = 0),
        (this.callback = e),
        (this.timerCalc = n);
    }
    reset() {
      (this.tries = 0), clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer),
        (this.timer = setTimeout(
          () => {
            (this.tries = this.tries + 1), this.callback();
          },
          this.timerCalc(this.tries + 1),
        ));
    }
  }
  var fe;
  (function (t) {
    (t.abstime = "abstime"),
      (t.bool = "bool"),
      (t.date = "date"),
      (t.daterange = "daterange"),
      (t.float4 = "float4"),
      (t.float8 = "float8"),
      (t.int2 = "int2"),
      (t.int4 = "int4"),
      (t.int4range = "int4range"),
      (t.int8 = "int8"),
      (t.int8range = "int8range"),
      (t.json = "json"),
      (t.jsonb = "jsonb"),
      (t.money = "money"),
      (t.numeric = "numeric"),
      (t.oid = "oid"),
      (t.reltime = "reltime"),
      (t.text = "text"),
      (t.time = "time"),
      (t.timestamp = "timestamp"),
      (t.timestamptz = "timestamptz"),
      (t.timetz = "timetz"),
      (t.tsrange = "tsrange"),
      (t.tstzrange = "tstzrange");
  })(fe || (fe = {}));
  const zv = (t, e, n = {}) => {
      var r;
      const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
      return Object.keys(e).reduce((i, o) => ((i[o] = uA(o, t, e, s)), i), {});
    },
    uA = (t, e, n, r) => {
      const s = e.find((a) => a.name === t),
        i = s == null ? void 0 : s.type,
        o = n[t];
      return i && !r.includes(i) ? Wv(i, o) : Nh(o);
    },
    Wv = (t, e) => {
      if (t.charAt(0) === "_") {
        const n = t.slice(1, t.length);
        return fA(e, n);
      }
      switch (t) {
        case fe.bool:
          return cA(e);
        case fe.float4:
        case fe.float8:
        case fe.int2:
        case fe.int4:
        case fe.int8:
        case fe.numeric:
        case fe.oid:
          return dA(e);
        case fe.json:
        case fe.jsonb:
          return hA(e);
        case fe.timestamp:
          return pA(e);
        case fe.abstime:
        case fe.date:
        case fe.daterange:
        case fe.int4range:
        case fe.int8range:
        case fe.money:
        case fe.reltime:
        case fe.text:
        case fe.time:
        case fe.timestamptz:
        case fe.timetz:
        case fe.tsrange:
        case fe.tstzrange:
          return Nh(e);
        default:
          return Nh(e);
      }
    },
    Nh = (t) => t,
    cA = (t) => {
      switch (t) {
        case "t":
          return !0;
        case "f":
          return !1;
        default:
          return t;
      }
    },
    dA = (t) => {
      if (typeof t == "string") {
        const e = parseFloat(t);
        if (!Number.isNaN(e)) return e;
      }
      return t;
    },
    hA = (t) => {
      if (typeof t == "string")
        try {
          return JSON.parse(t);
        } catch (e) {
          return console.log(`JSON parse error: ${e}`), t;
        }
      return t;
    },
    fA = (t, e) => {
      if (typeof t != "string") return t;
      const n = t.length - 1,
        r = t[n];
      if (t[0] === "{" && r === "}") {
        let i;
        const o = t.slice(1, n);
        try {
          i = JSON.parse("[" + o + "]");
        } catch {
          i = o ? o.split(",") : [];
        }
        return i.map((a) => Wv(e, a));
      }
      return t;
    },
    pA = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
    Hv = (t) => {
      let e = t;
      return (
        (e = e.replace(/^ws/i, "http")),
        (e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
        e.replace(/\/+$/, "")
      );
    };
  class Oh {
    constructor(e, n, r = {}, s = Uv) {
      (this.channel = e),
        (this.event = n),
        (this.payload = r),
        (this.timeout = s),
        (this.sent = !1),
        (this.timeoutTimer = void 0),
        (this.ref = ""),
        (this.receivedResp = null),
        (this.recHooks = []),
        (this.refEvent = null);
    }
    resend(e) {
      (this.timeout = e),
        this._cancelRefEvent(),
        (this.ref = ""),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1),
        this.send();
    }
    send() {
      this._hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload,
          ref: this.ref,
          join_ref: this.channel._joinRef(),
        }));
    }
    updatePayload(e) {
      this.payload = Object.assign(Object.assign({}, this.payload), e);
    }
    receive(e, n) {
      var r;
      return (
        this._hasReceived(e) &&
          n(
            (r = this.receivedResp) === null || r === void 0
              ? void 0
              : r.response,
          ),
        this.recHooks.push({ status: e, callback: n }),
        this
      );
    }
    startTimeout() {
      if (this.timeoutTimer) return;
      (this.ref = this.channel.socket._makeRef()),
        (this.refEvent = this.channel._replyEventName(this.ref));
      const e = (n) => {
        this._cancelRefEvent(),
          this._cancelTimeout(),
          (this.receivedResp = n),
          this._matchReceive(n);
      };
      this.channel._on(this.refEvent, {}, e),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
    }
    trigger(e, n) {
      this.refEvent &&
        this.channel._trigger(this.refEvent, { status: e, response: n });
    }
    destroy() {
      this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
      this.refEvent && this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
    }
    _matchReceive({ status: e, response: n }) {
      this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(n));
    }
    _hasReceived(e) {
      return this.receivedResp && this.receivedResp.status === e;
    }
  }
  var Gv;
  (function (t) {
    (t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave");
  })(Gv || (Gv = {}));
  class Vo {
    constructor(e, n) {
      (this.channel = e),
        (this.state = {}),
        (this.pendingDiffs = []),
        (this.joinRef = null),
        (this.caller = {
          onJoin: () => {},
          onLeave: () => {},
          onSync: () => {},
        });
      const r = (n == null ? void 0 : n.events) || {
        state: "presence_state",
        diff: "presence_diff",
      };
      this.channel._on(r.state, {}, (s) => {
        const { onJoin: i, onLeave: o, onSync: a } = this.caller;
        (this.joinRef = this.channel._joinRef()),
          (this.state = Vo.syncState(this.state, s, i, o)),
          this.pendingDiffs.forEach((l) => {
            this.state = Vo.syncDiff(this.state, l, i, o);
          }),
          (this.pendingDiffs = []),
          a();
      }),
        this.channel._on(r.diff, {}, (s) => {
          const { onJoin: i, onLeave: o, onSync: a } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(s)
            : ((this.state = Vo.syncDiff(this.state, s, i, o)), a());
        }),
        this.onJoin((s, i, o) => {
          this.channel._trigger("presence", {
            event: "join",
            key: s,
            currentPresences: i,
            newPresences: o,
          });
        }),
        this.onLeave((s, i, o) => {
          this.channel._trigger("presence", {
            event: "leave",
            key: s,
            currentPresences: i,
            leftPresences: o,
          });
        }),
        this.onSync(() => {
          this.channel._trigger("presence", { event: "sync" });
        });
    }
    static syncState(e, n, r, s) {
      const i = this.cloneDeep(e),
        o = this.transformState(n),
        a = {},
        l = {};
      return (
        this.map(i, (u, c) => {
          o[u] || (l[u] = c);
        }),
        this.map(o, (u, c) => {
          const d = i[u];
          if (d) {
            const h = c.map((w) => w.presence_ref),
              p = d.map((w) => w.presence_ref),
              v = c.filter((w) => p.indexOf(w.presence_ref) < 0),
              g = d.filter((w) => h.indexOf(w.presence_ref) < 0);
            v.length > 0 && (a[u] = v), g.length > 0 && (l[u] = g);
          } else a[u] = c;
        }),
        this.syncDiff(i, { joins: a, leaves: l }, r, s)
      );
    }
    static syncDiff(e, n, r, s) {
      const { joins: i, leaves: o } = {
        joins: this.transformState(n.joins),
        leaves: this.transformState(n.leaves),
      };
      return (
        r || (r = () => {}),
        s || (s = () => {}),
        this.map(i, (a, l) => {
          var u;
          const c = (u = e[a]) !== null && u !== void 0 ? u : [];
          if (((e[a] = this.cloneDeep(l)), c.length > 0)) {
            const d = e[a].map((p) => p.presence_ref),
              h = c.filter((p) => d.indexOf(p.presence_ref) < 0);
            e[a].unshift(...h);
          }
          r(a, c, l);
        }),
        this.map(o, (a, l) => {
          let u = e[a];
          if (!u) return;
          const c = l.map((d) => d.presence_ref);
          (u = u.filter((d) => c.indexOf(d.presence_ref) < 0)),
            (e[a] = u),
            s(a, u, l),
            u.length === 0 && delete e[a];
        }),
        e
      );
    }
    static map(e, n) {
      return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
    }
    static transformState(e) {
      return (
        (e = this.cloneDeep(e)),
        Object.getOwnPropertyNames(e).reduce((n, r) => {
          const s = e[r];
          return (
            "metas" in s
              ? (n[r] = s.metas.map(
                  (i) => (
                    (i.presence_ref = i.phx_ref),
                    delete i.phx_ref,
                    delete i.phx_ref_prev,
                    i
                  ),
                ))
              : (n[r] = s),
            n
          );
        }, {})
      );
    }
    static cloneDeep(e) {
      return JSON.parse(JSON.stringify(e));
    }
    onJoin(e) {
      this.caller.onJoin = e;
    }
    onLeave(e) {
      this.caller.onLeave = e;
    }
    onSync(e) {
      this.caller.onSync = e;
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  }
  var qv;
  (function (t) {
    (t.ALL = "*"),
      (t.INSERT = "INSERT"),
      (t.UPDATE = "UPDATE"),
      (t.DELETE = "DELETE");
  })(qv || (qv = {}));
  var Kv;
  (function (t) {
    (t.BROADCAST = "broadcast"),
      (t.PRESENCE = "presence"),
      (t.POSTGRES_CHANGES = "postgres_changes"),
      (t.SYSTEM = "system");
  })(Kv || (Kv = {}));
  var Zv;
  (function (t) {
    (t.SUBSCRIBED = "SUBSCRIBED"),
      (t.TIMED_OUT = "TIMED_OUT"),
      (t.CLOSED = "CLOSED"),
      (t.CHANNEL_ERROR = "CHANNEL_ERROR");
  })(Zv || (Zv = {}));
  class Mh {
    constructor(e, n = { config: {} }, r) {
      (this.topic = e),
        (this.params = n),
        (this.socket = r),
        (this.bindings = {}),
        (this.state = St.closed),
        (this.joinedOnce = !1),
        (this.pushBuffer = []),
        (this.subTopic = e.replace(/^realtime:/i, "")),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: "" },
            private: !1,
          },
          n.config,
        )),
        (this.timeout = this.socket.timeout),
        (this.joinPush = new Oh(this, Zt.join, this.params, this.timeout)),
        (this.rejoinTimer = new Bv(
          () => this._rejoinUntilConnected(),
          this.socket.reconnectAfterMs,
        )),
        this.joinPush.receive("ok", () => {
          (this.state = St.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((s) => s.send()),
            (this.pushBuffer = []);
        }),
        this._onClose(() => {
          this.rejoinTimer.reset(),
            this.socket.log(
              "channel",
              `close ${this.topic} ${this._joinRef()}`,
            ),
            (this.state = St.closed),
            this.socket._remove(this);
        }),
        this._onError((s) => {
          this._isLeaving() ||
            this._isClosed() ||
            (this.socket.log("channel", `error ${this.topic}`, s),
            (this.state = St.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this.joinPush.receive("timeout", () => {
          this._isJoining() &&
            (this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout,
            ),
            (this.state = St.errored),
            this.rejoinTimer.scheduleTimeout());
        }),
        this._on(Zt.reply, {}, (s, i) => {
          this._trigger(this._replyEventName(i), s);
        }),
        (this.presence = new Vo(this)),
        (this.broadcastEndpointURL =
          Hv(this.socket.endPoint) + "/api/broadcast"),
        (this.private = this.params.config.private || !1);
    }
    subscribe(e, n = this.timeout) {
      var r, s;
      if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      {
        const {
          config: { broadcast: i, presence: o, private: a },
        } = this.params;
        this._onError((c) => e && e("CHANNEL_ERROR", c)),
          this._onClose(() => e && e("CLOSED"));
        const l = {},
          u = {
            broadcast: i,
            presence: o,
            postgres_changes:
              (s =
                (r = this.bindings.postgres_changes) === null || r === void 0
                  ? void 0
                  : r.map((c) => c.filter)) !== null && s !== void 0
                ? s
                : [],
            private: a,
          };
        this.socket.accessToken && (l.access_token = this.socket.accessToken),
          this.updateJoinPayload(Object.assign({ config: u }, l)),
          (this.joinedOnce = !0),
          this._rejoin(n),
          this.joinPush
            .receive("ok", ({ postgres_changes: c }) => {
              var d;
              if (
                (this.socket.accessToken &&
                  this.socket.setAuth(this.socket.accessToken),
                c === void 0)
              ) {
                e && e("SUBSCRIBED");
                return;
              } else {
                const h = this.bindings.postgres_changes,
                  p =
                    (d = h == null ? void 0 : h.length) !== null && d !== void 0
                      ? d
                      : 0,
                  v = [];
                for (let g = 0; g < p; g++) {
                  const w = h[g],
                    {
                      filter: { event: m, schema: f, table: y, filter: _ },
                    } = w,
                    S = c && c[g];
                  if (
                    S &&
                    S.event === m &&
                    S.schema === f &&
                    S.table === y &&
                    S.filter === _
                  )
                    v.push(Object.assign(Object.assign({}, w), { id: S.id }));
                  else {
                    this.unsubscribe(),
                      e &&
                        e(
                          "CHANNEL_ERROR",
                          new Error(
                            "mismatch between server and client bindings for postgres changes",
                          ),
                        );
                    return;
                  }
                }
                (this.bindings.postgres_changes = v), e && e("SUBSCRIBED");
                return;
              }
            })
            .receive("error", (c) => {
              e &&
                e(
                  "CHANNEL_ERROR",
                  new Error(
                    JSON.stringify(Object.values(c).join(", ") || "error"),
                  ),
                );
            })
            .receive("timeout", () => {
              e && e("TIMED_OUT");
            });
      }
      return this;
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, n = {}) {
      return await this.send(
        { type: "presence", event: "track", payload: e },
        n.timeout || this.timeout,
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: "presence", event: "untrack" }, e);
    }
    on(e, n, r) {
      return this._on(e, n, r);
    }
    async send(e, n = {}) {
      var r, s;
      if (!this._canPush() && e.type === "broadcast") {
        const { event: i, payload: o } = e,
          a = {
            method: "POST",
            headers: {
              Authorization: this.socket.accessToken
                ? `Bearer ${this.socket.accessToken}`
                : "",
              apikey: this.socket.apiKey ? this.socket.apiKey : "",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messages: [
                {
                  topic: this.subTopic,
                  event: i,
                  payload: o,
                  private: this.private,
                },
              ],
            }),
          };
        try {
          const l = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            a,
            (r = n.timeout) !== null && r !== void 0 ? r : this.timeout,
          );
          return (
            await ((s = l.body) === null || s === void 0 ? void 0 : s.cancel()),
            l.ok ? "ok" : "error"
          );
        } catch (l) {
          return l.name === "AbortError" ? "timed out" : "error";
        }
      } else
        return new Promise((i) => {
          var o, a, l;
          const u = this._push(e.type, e, n.timeout || this.timeout);
          e.type === "broadcast" &&
            !(
              !(
                (l =
                  (a =
                    (o = this.params) === null || o === void 0
                      ? void 0
                      : o.config) === null || a === void 0
                    ? void 0
                    : a.broadcast) === null || l === void 0
              ) && l.ack
            ) &&
            i("ok"),
            u.receive("ok", () => i("ok")),
            u.receive("error", () => i("error")),
            u.receive("timeout", () => i("timed out"));
        });
    }
    updateJoinPayload(e) {
      this.joinPush.updatePayload(e);
    }
    unsubscribe(e = this.timeout) {
      this.state = St.leaving;
      const n = () => {
        this.socket.log("channel", `leave ${this.topic}`),
          this._trigger(Zt.close, "leave", this._joinRef());
      };
      return (
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        new Promise((r) => {
          const s = new Oh(this, Zt.leave, {}, e);
          s
            .receive("ok", () => {
              n(), r("ok");
            })
            .receive("timeout", () => {
              n(), r("timed out");
            })
            .receive("error", () => {
              r("error");
            }),
            s.send(),
            this._canPush() || s.trigger("ok", {});
        })
      );
    }
    async _fetchWithTimeout(e, n, r) {
      const s = new AbortController(),
        i = setTimeout(() => s.abort(), r),
        o = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, n), { signal: s.signal }),
        );
      return clearTimeout(i), o;
    }
    _push(e, n, r = this.timeout) {
      if (!this.joinedOnce)
        throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      let s = new Oh(this, e, n, r);
      return (
        this._canPush()
          ? s.send()
          : (s.startTimeout(), this.pushBuffer.push(s)),
        s
      );
    }
    _onMessage(e, n, r) {
      return n;
    }
    _isMember(e) {
      return this.topic === e;
    }
    _joinRef() {
      return this.joinPush.ref;
    }
    _trigger(e, n, r) {
      var s, i;
      const o = e.toLocaleLowerCase(),
        { close: a, error: l, leave: u, join: c } = Zt;
      if (r && [a, l, u, c].indexOf(o) >= 0 && r !== this._joinRef()) return;
      let h = this._onMessage(o, n, r);
      if (n && !h)
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      ["insert", "update", "delete"].includes(o)
        ? (s = this.bindings.postgres_changes) === null ||
          s === void 0 ||
          s
            .filter((p) => {
              var v, g, w;
              return (
                ((v = p.filter) === null || v === void 0 ? void 0 : v.event) ===
                  "*" ||
                ((w =
                  (g = p.filter) === null || g === void 0
                    ? void 0
                    : g.event) === null || w === void 0
                  ? void 0
                  : w.toLocaleLowerCase()) === o
              );
            })
            .map((p) => p.callback(h, r))
        : (i = this.bindings[o]) === null ||
          i === void 0 ||
          i
            .filter((p) => {
              var v, g, w, m, f, y;
              if (["broadcast", "presence", "postgres_changes"].includes(o))
                if ("id" in p) {
                  const _ = p.id,
                    S =
                      (v = p.filter) === null || v === void 0
                        ? void 0
                        : v.event;
                  return (
                    _ &&
                    ((g = n.ids) === null || g === void 0
                      ? void 0
                      : g.includes(_)) &&
                    (S === "*" ||
                      (S == null ? void 0 : S.toLocaleLowerCase()) ===
                        ((w = n.data) === null || w === void 0
                          ? void 0
                          : w.type.toLocaleLowerCase()))
                  );
                } else {
                  const _ =
                    (f =
                      (m = p == null ? void 0 : p.filter) === null ||
                      m === void 0
                        ? void 0
                        : m.event) === null || f === void 0
                      ? void 0
                      : f.toLocaleLowerCase();
                  return (
                    _ === "*" ||
                    _ ===
                      ((y = n == null ? void 0 : n.event) === null ||
                      y === void 0
                        ? void 0
                        : y.toLocaleLowerCase())
                  );
                }
              else return p.type.toLocaleLowerCase() === o;
            })
            .map((p) => {
              if (typeof h == "object" && "ids" in h) {
                const v = h.data,
                  {
                    schema: g,
                    table: w,
                    commit_timestamp: m,
                    type: f,
                    errors: y,
                  } = v;
                h = Object.assign(
                  Object.assign(
                    {},
                    {
                      schema: g,
                      table: w,
                      commit_timestamp: m,
                      eventType: f,
                      new: {},
                      old: {},
                      errors: y,
                    },
                  ),
                  this._getPayloadRecords(v),
                );
              }
              p.callback(h, r);
            });
    }
    _isClosed() {
      return this.state === St.closed;
    }
    _isJoined() {
      return this.state === St.joined;
    }
    _isJoining() {
      return this.state === St.joining;
    }
    _isLeaving() {
      return this.state === St.leaving;
    }
    _replyEventName(e) {
      return `chan_reply_${e}`;
    }
    _on(e, n, r) {
      const s = e.toLocaleLowerCase(),
        i = { type: s, filter: n, callback: r };
      return (
        this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]),
        this
      );
    }
    _off(e, n) {
      const r = e.toLocaleLowerCase();
      return (
        (this.bindings[r] = this.bindings[r].filter((s) => {
          var i;
          return !(
            ((i = s.type) === null || i === void 0
              ? void 0
              : i.toLocaleLowerCase()) === r && Mh.isEqual(s.filter, n)
          );
        })),
        this
      );
    }
    static isEqual(e, n) {
      if (Object.keys(e).length !== Object.keys(n).length) return !1;
      for (const r in e) if (e[r] !== n[r]) return !1;
      return !0;
    }
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout(),
        this.socket.isConnected() && this._rejoin();
    }
    _onClose(e) {
      this._on(Zt.close, {}, e);
    }
    _onError(e) {
      this._on(Zt.error, {}, (n) => e(n));
    }
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(e = this.timeout) {
      this._isLeaving() ||
        (this.socket._leaveOpenTopic(this.topic),
        (this.state = St.joining),
        this.joinPush.resend(e));
    }
    _getPayloadRecords(e) {
      const n = { new: {}, old: {} };
      return (
        (e.type === "INSERT" || e.type === "UPDATE") &&
          (n.new = zv(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") &&
          (n.old = zv(e.columns, e.old_record)),
        n
      );
    }
  }
  const mA = () => {},
    gA = typeof WebSocket < "u",
    yA = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
  class vA {
    constructor(e, n) {
      var r;
      (this.accessToken = null),
        (this.apiKey = null),
        (this.channels = []),
        (this.endPoint = ""),
        (this.httpEndpoint = ""),
        (this.headers = iA),
        (this.params = {}),
        (this.timeout = Uv),
        (this.heartbeatIntervalMs = 3e4),
        (this.heartbeatTimer = void 0),
        (this.pendingHeartbeatRef = null),
        (this.ref = 0),
        (this.logger = mA),
        (this.conn = null),
        (this.sendBuffer = []),
        (this.serializer = new lA()),
        (this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        }),
        (this._resolveFetch = (i) => {
          let o;
          return (
            i
              ? (o = i)
              : typeof fetch > "u"
                ? (o = (...a) =>
                    Promise.resolve()
                      .then(() => Zs)
                      .then(({ default: l }) => l(...a)))
                : (o = fetch),
            (...a) => o(...a)
          );
        }),
        (this.endPoint = `${e}/${Rh.websocket}`),
        (this.httpEndpoint = Hv(e)),
        n != null && n.transport
          ? (this.transport = n.transport)
          : (this.transport = null),
        n != null && n.params && (this.params = n.params),
        n != null &&
          n.headers &&
          (this.headers = Object.assign(
            Object.assign({}, this.headers),
            n.headers,
          )),
        n != null && n.timeout && (this.timeout = n.timeout),
        n != null && n.logger && (this.logger = n.logger),
        n != null &&
          n.heartbeatIntervalMs &&
          (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
      const s =
        (r = n == null ? void 0 : n.params) === null || r === void 0
          ? void 0
          : r.apikey;
      if (
        (s && ((this.accessToken = s), (this.apiKey = s)),
        (this.reconnectAfterMs =
          n != null && n.reconnectAfterMs
            ? n.reconnectAfterMs
            : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
        (this.encode =
          n != null && n.encode ? n.encode : (i, o) => o(JSON.stringify(i))),
        (this.decode =
          n != null && n.decode
            ? n.decode
            : this.serializer.decode.bind(this.serializer)),
        (this.reconnectTimer = new Bv(async () => {
          this.disconnect(), this.connect();
        }, this.reconnectAfterMs)),
        (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch)),
        n != null && n.worker)
      ) {
        if (typeof window < "u" && !window.Worker)
          throw new Error("Web Worker is not supported");
        (this.worker = (n == null ? void 0 : n.worker) || !1),
          (this.workerUrl = n == null ? void 0 : n.workerUrl);
      }
    }
    connect() {
      if (!this.conn) {
        if (this.transport) {
          this.conn = new this.transport(this._endPointURL(), void 0, {
            headers: this.headers,
          });
          return;
        }
        if (gA) {
          (this.conn = new WebSocket(this._endPointURL())),
            this.setupConnection();
          return;
        }
        (this.conn = new wA(this._endPointURL(), void 0, {
          close: () => {
            this.conn = null;
          },
        })),
          Promise.resolve()
            .then(() => kL)
            .then(({ default: e }) => {
              (this.conn = new e(this._endPointURL(), void 0, {
                headers: this.headers,
              })),
                this.setupConnection();
            });
      }
    }
    disconnect(e, n) {
      this.conn &&
        ((this.conn.onclose = function () {}),
        e ? this.conn.close(e, n ?? "") : this.conn.close(),
        (this.conn = null),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.reset());
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e) {
      const n = await e.unsubscribe();
      return this.channels.length === 0 && this.disconnect(), n;
    }
    async removeAllChannels() {
      const e = await Promise.all(this.channels.map((n) => n.unsubscribe()));
      return this.disconnect(), e;
    }
    log(e, n, r) {
      this.logger(e, n, r);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case Xs.connecting:
          return Qr.Connecting;
        case Xs.open:
          return Qr.Open;
        case Xs.closing:
          return Qr.Closing;
        default:
          return Qr.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === Qr.Open;
    }
    channel(e, n = { config: {} }) {
      const r = new Mh(`realtime:${e}`, n, this);
      return this.channels.push(r), r;
    }
    push(e) {
      const { topic: n, event: r, payload: s, ref: i } = e,
        o = () => {
          this.encode(e, (a) => {
            var l;
            (l = this.conn) === null || l === void 0 || l.send(a);
          });
        };
      this.log("push", `${n} ${r} (${i})`, s),
        this.isConnected() ? o() : this.sendBuffer.push(o);
    }
    setAuth(e) {
      (this.accessToken = e),
        this.channels.forEach((n) => {
          e && n.updateJoinPayload({ access_token: e }),
            n.joinedOnce &&
              n._isJoined() &&
              n._push(Zt.access_token, { access_token: e });
        });
    }
    _makeRef() {
      let e = this.ref + 1;
      return (
        e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
      );
    }
    _leaveOpenTopic(e) {
      let n = this.channels.find(
        (r) => r.topic === e && (r._isJoined() || r._isJoining()),
      );
      n &&
        (this.log("transport", `leaving duplicate topic "${e}"`),
        n.unsubscribe());
    }
    _remove(e) {
      this.channels = this.channels.filter(
        (n) => n._joinRef() !== e._joinRef(),
      );
    }
    setupConnection() {
      this.conn &&
        ((this.conn.binaryType = "arraybuffer"),
        (this.conn.onopen = () => this._onConnOpen()),
        (this.conn.onerror = (e) => this._onConnError(e)),
        (this.conn.onmessage = (e) => this._onConnMessage(e)),
        (this.conn.onclose = (e) => this._onConnClose(e)));
    }
    _endPointURL() {
      return this._appendParams(
        this.endPoint,
        Object.assign({}, this.params, { vsn: oA }),
      );
    }
    _onConnMessage(e) {
      this.decode(e.data, (n) => {
        let { topic: r, event: s, payload: i, ref: o } = n;
        ((o && o === this.pendingHeartbeatRef) ||
          s === (i == null ? void 0 : i.type)) &&
          (this.pendingHeartbeatRef = null),
          this.log(
            "receive",
            `${i.status || ""} ${r} ${s} ${(o && "(" + o + ")") || ""}`,
            i,
          ),
          this.channels
            .filter((a) => a._isMember(r))
            .forEach((a) => a._trigger(s, i, o)),
          this.stateChangeCallbacks.message.forEach((a) => a(n));
      });
    }
    async _onConnOpen() {
      if (
        (this.log("transport", `connected to ${this._endPointURL()}`),
        this._flushSendBuffer(),
        this.reconnectTimer.reset(),
        !this.worker)
      )
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
          (this.heartbeatTimer = setInterval(
            () => this._sendHeartbeat(),
            this.heartbeatIntervalMs,
          ));
      else {
        this.workerUrl
          ? this.log("worker", `starting worker for from ${this.workerUrl}`)
          : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        (this.workerRef = new Worker(e)),
          (this.workerRef.onerror = (n) => {
            this.log("worker", "worker error", n.message),
              this.workerRef.terminate();
          }),
          (this.workerRef.onmessage = (n) => {
            n.data.event === "keepAlive" && this._sendHeartbeat();
          }),
          this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs,
          });
      }
      this.stateChangeCallbacks.open.forEach((e) => e());
    }
    _onConnClose(e) {
      this.log("transport", "close", e),
        this._triggerChanError(),
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
        this.reconnectTimer.scheduleTimeout(),
        this.stateChangeCallbacks.close.forEach((n) => n(e));
    }
    _onConnError(e) {
      this.log("transport", e.message),
        this._triggerChanError(),
        this.stateChangeCallbacks.error.forEach((n) => n(e));
    }
    _triggerChanError() {
      this.channels.forEach((e) => e._trigger(Zt.error));
    }
    _appendParams(e, n) {
      if (Object.keys(n).length === 0) return e;
      const r = e.match(/\?/) ? "&" : "?",
        s = new URLSearchParams(n);
      return `${e}${r}${s}`;
    }
    _flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    _sendHeartbeat() {
      var e;
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) {
          (this.pendingHeartbeatRef = null),
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection",
            ),
            (e = this.conn) === null ||
              e === void 0 ||
              e.close(aA, "hearbeat timeout");
          return;
        }
        (this.pendingHeartbeatRef = this._makeRef()),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }),
          this.setAuth(this.accessToken);
      }
    }
    _workerObjectUrl(e) {
      let n;
      if (e) n = e;
      else {
        const r = new Blob([yA], { type: "application/javascript" });
        n = URL.createObjectURL(r);
      }
      return n;
    }
  }
  class wA {
    constructor(e, n, r) {
      (this.binaryType = "arraybuffer"),
        (this.onclose = () => {}),
        (this.onerror = () => {}),
        (this.onmessage = () => {}),
        (this.onopen = () => {}),
        (this.readyState = Xs.connecting),
        (this.send = () => {}),
        (this.url = null),
        (this.url = e),
        (this.close = r.close);
    }
  }
  class Lh extends Error {
    constructor(e) {
      super(e), (this.__isStorageError = !0), (this.name = "StorageError");
    }
  }
  function $e(t) {
    return typeof t == "object" && t !== null && "__isStorageError" in t;
  }
  class _A extends Lh {
    constructor(e, n) {
      super(e), (this.name = "StorageApiError"), (this.status = n);
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  }
  class Ih extends Lh {
    constructor(e, n) {
      super(e), (this.name = "StorageUnknownError"), (this.originalError = n);
    }
  }
  var bA = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const Qv = (t) => {
      let e;
      return (
        t
          ? (e = t)
          : typeof fetch > "u"
            ? (e = (...n) =>
                Promise.resolve()
                  .then(() => Zs)
                  .then(({ default: r }) => r(...n)))
            : (e = fetch),
        (...n) => e(...n)
      );
    },
    xA = () =>
      bA(void 0, void 0, void 0, function* () {
        return typeof Response > "u"
          ? (yield Promise.resolve().then(() => Zs)).Response
          : Response;
      }),
    jh = (t) => {
      if (Array.isArray(t)) return t.map((n) => jh(n));
      if (typeof t == "function" || t !== Object(t)) return t;
      const e = {};
      return (
        Object.entries(t).forEach(([n, r]) => {
          const s = n.replace(/([-_][a-z])/gi, (i) =>
            i.toUpperCase().replace(/[-_]/g, ""),
          );
          e[s] = jh(r);
        }),
        e
      );
    };
  var Xr = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const Dh = (t) =>
      t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    SA = (t, e, n) =>
      Xr(void 0, void 0, void 0, function* () {
        const r = yield xA();
        t instanceof r && !(n != null && n.noResolveJson)
          ? t
              .json()
              .then((s) => {
                e(new _A(Dh(s), t.status || 500));
              })
              .catch((s) => {
                e(new Ih(Dh(s), s));
              })
          : e(new Ih(Dh(t), t));
      }),
    kA = (t, e, n, r) => {
      const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
      return t === "GET"
        ? s
        : ((s.headers = Object.assign(
            { "Content-Type": "application/json" },
            e == null ? void 0 : e.headers,
          )),
          r && (s.body = JSON.stringify(r)),
          Object.assign(Object.assign({}, s), n));
    };
  function Uo(t, e, n, r, s, i) {
    return Xr(this, void 0, void 0, function* () {
      return new Promise((o, a) => {
        t(n, kA(e, r, s, i))
          .then((l) => {
            if (!l.ok) throw l;
            return r != null && r.noResolveJson ? l : l.json();
          })
          .then((l) => o(l))
          .catch((l) => SA(l, a, r));
      });
    });
  }
  function ru(t, e, n, r) {
    return Xr(this, void 0, void 0, function* () {
      return Uo(t, "GET", e, n, r);
    });
  }
  function cr(t, e, n, r, s) {
    return Xr(this, void 0, void 0, function* () {
      return Uo(t, "POST", e, r, s, n);
    });
  }
  function EA(t, e, n, r, s) {
    return Xr(this, void 0, void 0, function* () {
      return Uo(t, "PUT", e, r, s, n);
    });
  }
  function AA(t, e, n, r) {
    return Xr(this, void 0, void 0, function* () {
      return Uo(
        t,
        "HEAD",
        e,
        Object.assign(Object.assign({}, n), { noResolveJson: !0 }),
        r,
      );
    });
  }
  function Xv(t, e, n, r, s) {
    return Xr(this, void 0, void 0, function* () {
      return Uo(t, "DELETE", e, r, s, n);
    });
  }
  var ft = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const TA = {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    },
    Jv = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: !1,
    };
  class PA {
    constructor(e, n = {}, r, s) {
      (this.url = e),
        (this.headers = n),
        (this.bucketId = r),
        (this.fetch = Qv(s));
    }
    uploadOrUpdate(e, n, r, s) {
      return ft(this, void 0, void 0, function* () {
        try {
          let i;
          const o = Object.assign(Object.assign({}, Jv), s);
          let a = Object.assign(
            Object.assign({}, this.headers),
            e === "POST" && { "x-upsert": String(o.upsert) },
          );
          const l = o.metadata;
          typeof Blob < "u" && r instanceof Blob
            ? ((i = new FormData()),
              i.append("cacheControl", o.cacheControl),
              l && i.append("metadata", this.encodeMetadata(l)),
              i.append("", r))
            : typeof FormData < "u" && r instanceof FormData
              ? ((i = r),
                i.append("cacheControl", o.cacheControl),
                l && i.append("metadata", this.encodeMetadata(l)))
              : ((i = r),
                (a["cache-control"] = `max-age=${o.cacheControl}`),
                (a["content-type"] = o.contentType),
                l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
            s != null &&
              s.headers &&
              (a = Object.assign(Object.assign({}, a), s.headers));
          const u = this._removeEmptyFolders(n),
            c = this._getFinalPath(u),
            d = yield this.fetch(
              `${this.url}/object/${c}`,
              Object.assign(
                { method: e, body: i, headers: a },
                o != null && o.duplex ? { duplex: o.duplex } : {},
              ),
            ),
            h = yield d.json();
          return d.ok
            ? { data: { path: u, id: h.Id, fullPath: h.Key }, error: null }
            : { data: null, error: h };
        } catch (i) {
          if ($e(i)) return { data: null, error: i };
          throw i;
        }
      });
    }
    upload(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("POST", e, n, r);
      });
    }
    uploadToSignedUrl(e, n, r, s) {
      return ft(this, void 0, void 0, function* () {
        const i = this._removeEmptyFolders(e),
          o = this._getFinalPath(i),
          a = new URL(this.url + `/object/upload/sign/${o}`);
        a.searchParams.set("token", n);
        try {
          let l;
          const u = Object.assign({ upsert: Jv.upsert }, s),
            c = Object.assign(Object.assign({}, this.headers), {
              "x-upsert": String(u.upsert),
            });
          typeof Blob < "u" && r instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", u.cacheControl),
              l.append("", r))
            : typeof FormData < "u" && r instanceof FormData
              ? ((l = r), l.append("cacheControl", u.cacheControl))
              : ((l = r),
                (c["cache-control"] = `max-age=${u.cacheControl}`),
                (c["content-type"] = u.contentType));
          const d = yield this.fetch(a.toString(), {
              method: "PUT",
              body: l,
              headers: c,
            }),
            h = yield d.json();
          return d.ok
            ? { data: { path: i, fullPath: h.Key }, error: null }
            : { data: null, error: h };
        } catch (l) {
          if ($e(l)) return { data: null, error: l };
          throw l;
        }
      });
    }
    createSignedUploadUrl(e, n) {
      return ft(this, void 0, void 0, function* () {
        try {
          let r = this._getFinalPath(e);
          const s = Object.assign({}, this.headers);
          n != null && n.upsert && (s["x-upsert"] = "true");
          const i = yield cr(
              this.fetch,
              `${this.url}/object/upload/sign/${r}`,
              {},
              { headers: s },
            ),
            o = new URL(this.url + i.url),
            a = o.searchParams.get("token");
          if (!a) throw new Lh("No token returned by API");
          return {
            data: { signedUrl: o.toString(), path: e, token: a },
            error: null,
          };
        } catch (r) {
          if ($e(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    update(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("PUT", e, n, r);
      });
    }
    move(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        try {
          return {
            data: yield cr(
              this.fetch,
              `${this.url}/object/move`,
              {
                bucketId: this.bucketId,
                sourceKey: e,
                destinationKey: n,
                destinationBucket: r == null ? void 0 : r.destinationBucket,
              },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (s) {
          if ($e(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    copy(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        try {
          return {
            data: {
              path: (yield cr(
                this.fetch,
                `${this.url}/object/copy`,
                {
                  bucketId: this.bucketId,
                  sourceKey: e,
                  destinationKey: n,
                  destinationBucket: r == null ? void 0 : r.destinationBucket,
                },
                { headers: this.headers },
              )).Key,
            },
            error: null,
          };
        } catch (s) {
          if ($e(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    createSignedUrl(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        try {
          let s = this._getFinalPath(e),
            i = yield cr(
              this.fetch,
              `${this.url}/object/sign/${s}`,
              Object.assign(
                { expiresIn: n },
                r != null && r.transform ? { transform: r.transform } : {},
              ),
              { headers: this.headers },
            );
          const o =
            r != null && r.download
              ? `&download=${r.download === !0 ? "" : r.download}`
              : "";
          return (
            (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }),
            { data: i, error: null }
          );
        } catch (s) {
          if ($e(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    createSignedUrls(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        try {
          const s = yield cr(
              this.fetch,
              `${this.url}/object/sign/${this.bucketId}`,
              { expiresIn: n, paths: e },
              { headers: this.headers },
            ),
            i =
              r != null && r.download
                ? `&download=${r.download === !0 ? "" : r.download}`
                : "";
          return {
            data: s.map((o) =>
              Object.assign(Object.assign({}, o), {
                signedUrl: o.signedURL
                  ? encodeURI(`${this.url}${o.signedURL}${i}`)
                  : null,
              }),
            ),
            error: null,
          };
        } catch (s) {
          if ($e(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    download(e, n) {
      return ft(this, void 0, void 0, function* () {
        const s =
            typeof (n == null ? void 0 : n.transform) < "u"
              ? "render/image/authenticated"
              : "object",
          i = this.transformOptsToQueryString(
            (n == null ? void 0 : n.transform) || {},
          ),
          o = i ? `?${i}` : "";
        try {
          const a = this._getFinalPath(e);
          return {
            data: yield (yield ru(this.fetch, `${this.url}/${s}/${a}${o}`, {
              headers: this.headers,
              noResolveJson: !0,
            })).blob(),
            error: null,
          };
        } catch (a) {
          if ($e(a)) return { data: null, error: a };
          throw a;
        }
      });
    }
    info(e) {
      return ft(this, void 0, void 0, function* () {
        const n = this._getFinalPath(e);
        try {
          const r = yield ru(this.fetch, `${this.url}/object/info/${n}`, {
            headers: this.headers,
          });
          return { data: jh(r), error: null };
        } catch (r) {
          if ($e(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    exists(e) {
      return ft(this, void 0, void 0, function* () {
        const n = this._getFinalPath(e);
        try {
          return (
            yield AA(this.fetch, `${this.url}/object/${n}`, {
              headers: this.headers,
            }),
            { data: !0, error: null }
          );
        } catch (r) {
          if ($e(r) && r instanceof Ih) {
            const s = r.originalError;
            if ([400, 404].includes(s == null ? void 0 : s.status))
              return { data: !1, error: r };
          }
          throw r;
        }
      });
    }
    getPublicUrl(e, n) {
      const r = this._getFinalPath(e),
        s = [],
        i =
          n != null && n.download
            ? `download=${n.download === !0 ? "" : n.download}`
            : "";
      i !== "" && s.push(i);
      const a =
          typeof (n == null ? void 0 : n.transform) < "u"
            ? "render/image"
            : "object",
        l = this.transformOptsToQueryString(
          (n == null ? void 0 : n.transform) || {},
        );
      l !== "" && s.push(l);
      let u = s.join("&");
      return (
        u !== "" && (u = `?${u}`),
        { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`) } }
      );
    }
    remove(e) {
      return ft(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Xv(
              this.fetch,
              `${this.url}/object/${this.bucketId}`,
              { prefixes: e },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (n) {
          if ($e(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    list(e, n, r) {
      return ft(this, void 0, void 0, function* () {
        try {
          const s = Object.assign(Object.assign(Object.assign({}, TA), n), {
            prefix: e || "",
          });
          return {
            data: yield cr(
              this.fetch,
              `${this.url}/object/list/${this.bucketId}`,
              s,
              { headers: this.headers },
              r,
            ),
            error: null,
          };
        } catch (s) {
          if ($e(s)) return { data: null, error: s };
          throw s;
        }
      });
    }
    encodeMetadata(e) {
      return JSON.stringify(e);
    }
    toBase64(e) {
      return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
    }
    _getFinalPath(e) {
      return `${this.bucketId}/${e}`;
    }
    _removeEmptyFolders(e) {
      return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(e) {
      const n = [];
      return (
        e.width && n.push(`width=${e.width}`),
        e.height && n.push(`height=${e.height}`),
        e.resize && n.push(`resize=${e.resize}`),
        e.format && n.push(`format=${e.format}`),
        e.quality && n.push(`quality=${e.quality}`),
        n.join("&")
      );
    }
  }
  const CA = { "X-Client-Info": "storage-js/2.7.1" };
  var Js = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  class RA {
    constructor(e, n = {}, r) {
      (this.url = e),
        (this.headers = Object.assign(Object.assign({}, CA), n)),
        (this.fetch = Qv(r));
    }
    listBuckets() {
      return Js(this, void 0, void 0, function* () {
        try {
          return {
            data: yield ru(this.fetch, `${this.url}/bucket`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (e) {
          if ($e(e)) return { data: null, error: e };
          throw e;
        }
      });
    }
    getBucket(e) {
      return Js(this, void 0, void 0, function* () {
        try {
          return {
            data: yield ru(this.fetch, `${this.url}/bucket/${e}`, {
              headers: this.headers,
            }),
            error: null,
          };
        } catch (n) {
          if ($e(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    createBucket(e, n = { public: !1 }) {
      return Js(this, void 0, void 0, function* () {
        try {
          return {
            data: yield cr(
              this.fetch,
              `${this.url}/bucket`,
              {
                id: e,
                name: e,
                public: n.public,
                file_size_limit: n.fileSizeLimit,
                allowed_mime_types: n.allowedMimeTypes,
              },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (r) {
          if ($e(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    updateBucket(e, n) {
      return Js(this, void 0, void 0, function* () {
        try {
          return {
            data: yield EA(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {
                id: e,
                name: e,
                public: n.public,
                file_size_limit: n.fileSizeLimit,
                allowed_mime_types: n.allowedMimeTypes,
              },
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (r) {
          if ($e(r)) return { data: null, error: r };
          throw r;
        }
      });
    }
    emptyBucket(e) {
      return Js(this, void 0, void 0, function* () {
        try {
          return {
            data: yield cr(
              this.fetch,
              `${this.url}/bucket/${e}/empty`,
              {},
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (n) {
          if ($e(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    deleteBucket(e) {
      return Js(this, void 0, void 0, function* () {
        try {
          return {
            data: yield Xv(
              this.fetch,
              `${this.url}/bucket/${e}`,
              {},
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (n) {
          if ($e(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
  }
  class NA extends RA {
    constructor(e, n = {}, r) {
      super(e, n, r);
    }
    from(e) {
      return new PA(this.url, this.headers, e, this.fetch);
    }
  }
  const OA = "2.46.1";
  let Bo = "";
  typeof Deno < "u"
    ? (Bo = "deno")
    : typeof document < "u"
      ? (Bo = "web")
      : typeof navigator < "u" && navigator.product === "ReactNative"
        ? (Bo = "react-native")
        : (Bo = "node");
  const MA = { headers: { "X-Client-Info": `supabase-js-${Bo}/${OA}` } },
    LA = { schema: "public" },
    IA = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit",
    },
    jA = {};
  var DA = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  const $A = (t) => {
      let e;
      return (
        t ? (e = t) : typeof fetch > "u" ? (e = Nv) : (e = fetch),
        (...n) => e(...n)
      );
    },
    FA = () => (typeof Headers > "u" ? Ov : Headers),
    VA = (t, e, n) => {
      const r = $A(n),
        s = FA();
      return (i, o) =>
        DA(void 0, void 0, void 0, function* () {
          var a;
          const l = (a = yield e()) !== null && a !== void 0 ? a : t;
          let u = new s(o == null ? void 0 : o.headers);
          return (
            u.has("apikey") || u.set("apikey", t),
            u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
            r(i, Object.assign(Object.assign({}, o), { headers: u }))
          );
        });
    };
  var UA = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  function BA(t) {
    return t.replace(/\/$/, "");
  }
  function zA(t, e) {
    const { db: n, auth: r, realtime: s, global: i } = t,
      { db: o, auth: a, realtime: l, global: u } = e,
      c = {
        db: Object.assign(Object.assign({}, o), n),
        auth: Object.assign(Object.assign({}, a), r),
        realtime: Object.assign(Object.assign({}, l), s),
        global: Object.assign(Object.assign({}, u), i),
        accessToken: () =>
          UA(this, void 0, void 0, function* () {
            return "";
          }),
      };
    return (
      t.accessToken ? (c.accessToken = t.accessToken) : delete c.accessToken, c
    );
  }
  const Yv = "2.65.1",
    WA = "http://localhost:9999",
    HA = "supabase.auth.token",
    GA = { "X-Client-Info": `gotrue-js/${Yv}` },
    e0 = 10,
    $h = "X-Supabase-Api-Version",
    t0 = {
      "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01",
      },
    };
  function qA(t) {
    return Math.round(Date.now() / 1e3) + t;
  }
  function KA() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (t) {
        const e = (Math.random() * 16) | 0;
        return (t == "x" ? e : (e & 3) | 8).toString(16);
      },
    );
  }
  const Qt = () => typeof document < "u",
    Jr = { tested: !1, writable: !1 },
    zo = () => {
      if (!Qt()) return !1;
      try {
        if (typeof globalThis.localStorage != "object") return !1;
      } catch {
        return !1;
      }
      if (Jr.tested) return Jr.writable;
      const t = `lswt-${Math.random()}${Math.random()}`;
      try {
        globalThis.localStorage.setItem(t, t),
          globalThis.localStorage.removeItem(t),
          (Jr.tested = !0),
          (Jr.writable = !0);
      } catch {
        (Jr.tested = !0), (Jr.writable = !1);
      }
      return Jr.writable;
    };
  function Fh(t) {
    const e = {},
      n = new URL(t);
    if (n.hash && n.hash[0] === "#")
      try {
        new URLSearchParams(n.hash.substring(1)).forEach((s, i) => {
          e[i] = s;
        });
      } catch {}
    return (
      n.searchParams.forEach((r, s) => {
        e[s] = r;
      }),
      e
    );
  }
  const n0 = (t) => {
      let e;
      return (
        t
          ? (e = t)
          : typeof fetch > "u"
            ? (e = (...n) =>
                Promise.resolve()
                  .then(() => Zs)
                  .then(({ default: r }) => r(...n)))
            : (e = fetch),
        (...n) => e(...n)
      );
    },
    ZA = (t) =>
      typeof t == "object" &&
      t !== null &&
      "status" in t &&
      "ok" in t &&
      "json" in t &&
      typeof t.json == "function",
    r0 = async (t, e, n) => {
      await t.setItem(e, JSON.stringify(n));
    },
    su = async (t, e) => {
      const n = await t.getItem(e);
      if (!n) return null;
      try {
        return JSON.parse(n);
      } catch {
        return n;
      }
    },
    iu = async (t, e) => {
      await t.removeItem(e);
    };
  function QA(t) {
    const e =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let n = "",
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c = 0;
    for (t = t.replace("-", "+").replace("_", "/"); c < t.length; )
      (o = e.indexOf(t.charAt(c++))),
        (a = e.indexOf(t.charAt(c++))),
        (l = e.indexOf(t.charAt(c++))),
        (u = e.indexOf(t.charAt(c++))),
        (r = (o << 2) | (a >> 4)),
        (s = ((a & 15) << 4) | (l >> 2)),
        (i = ((l & 3) << 6) | u),
        (n = n + String.fromCharCode(r)),
        l != 64 && s != 0 && (n = n + String.fromCharCode(s)),
        u != 64 && i != 0 && (n = n + String.fromCharCode(i));
    return n;
  }
  class ou {
    constructor() {
      this.promise = new ou.promiseConstructor((e, n) => {
        (this.resolve = e), (this.reject = n);
      });
    }
  }
  ou.promiseConstructor = Promise;
  function s0(t) {
    const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
      n = t.split(".");
    if (n.length !== 3)
      throw new Error("JWT is not valid: not a JWT structure");
    if (!e.test(n[1]))
      throw new Error("JWT is not valid: payload is not in base64url format");
    const r = n[1];
    return JSON.parse(QA(r));
  }
  async function XA(t) {
    return await new Promise((e) => {
      setTimeout(() => e(null), t);
    });
  }
  function JA(t, e) {
    return new Promise((r, s) => {
      (async () => {
        for (let i = 0; i < 1 / 0; i++)
          try {
            const o = await t(i);
            if (!e(i, null, o)) {
              r(o);
              return;
            }
          } catch (o) {
            if (!e(i, o)) {
              s(o);
              return;
            }
          }
      })();
    });
  }
  function YA(t) {
    return ("0" + t.toString(16)).substr(-2);
  }
  function eT() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
      const n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
        r = n.length;
      let s = "";
      for (let i = 0; i < 56; i++) s += n.charAt(Math.floor(Math.random() * r));
      return s;
    }
    return crypto.getRandomValues(e), Array.from(e, YA).join("");
  }
  async function tT(t) {
    const n = new TextEncoder().encode(t),
      r = await crypto.subtle.digest("SHA-256", n),
      s = new Uint8Array(r);
    return Array.from(s)
      .map((i) => String.fromCharCode(i))
      .join("");
  }
  function nT(t) {
    return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function rT(t) {
    if (
      !(
        typeof crypto < "u" &&
        typeof crypto.subtle < "u" &&
        typeof TextEncoder < "u"
      )
    )
      return (
        console.warn(
          "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
        ),
        t
      );
    const n = await tT(t);
    return nT(n);
  }
  async function Ys(t, e, n = !1) {
    const r = eT();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"), await r0(t, `${e}-code-verifier`, s);
    const i = await rT(r);
    return [i, r === i ? "plain" : "s256"];
  }
  const sT = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function iT(t) {
    const e = t.headers.get($h);
    if (!e || !e.match(sT)) return null;
    try {
      return new Date(`${e}T00:00:00.0Z`);
    } catch {
      return null;
    }
  }
  class Vh extends Error {
    constructor(e, n, r) {
      super(e),
        (this.__isAuthError = !0),
        (this.name = "AuthError"),
        (this.status = n),
        (this.code = r);
    }
  }
  function X(t) {
    return typeof t == "object" && t !== null && "__isAuthError" in t;
  }
  class oT extends Vh {
    constructor(e, n, r) {
      super(e, n, r),
        (this.name = "AuthApiError"),
        (this.status = n),
        (this.code = r);
    }
  }
  function aT(t) {
    return X(t) && t.name === "AuthApiError";
  }
  class i0 extends Vh {
    constructor(e, n) {
      super(e), (this.name = "AuthUnknownError"), (this.originalError = n);
    }
  }
  class Yr extends Vh {
    constructor(e, n, r, s) {
      super(e, r, s), (this.name = n), (this.status = r);
    }
  }
  class dr extends Yr {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
  }
  function lT(t) {
    return X(t) && t.name === "AuthSessionMissingError";
  }
  class Uh extends Yr {
    constructor() {
      super(
        "Auth session or user missing",
        "AuthInvalidTokenResponseError",
        500,
        void 0,
      );
    }
  }
  class au extends Yr {
    constructor(e) {
      super(e, "AuthInvalidCredentialsError", 400, void 0);
    }
  }
  class lu extends Yr {
    constructor(e, n = null) {
      super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        (this.details = null),
        (this.details = n);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  class o0 extends Yr {
    constructor(e, n = null) {
      super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        (this.details = null),
        (this.details = n);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        details: this.details,
      };
    }
  }
  class Bh extends Yr {
    constructor(e, n) {
      super(e, "AuthRetryableFetchError", n, void 0);
    }
  }
  function zh(t) {
    return X(t) && t.name === "AuthRetryableFetchError";
  }
  class a0 extends Yr {
    constructor(e, n, r) {
      super(e, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r);
    }
  }
  var uT = function (t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
        e.indexOf(r[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
          (n[r[s]] = t[r[s]]);
    return n;
  };
  const es = (t) =>
      t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    cT = [502, 503, 504];
  async function l0(t) {
    var e;
    if (!ZA(t)) throw new Bh(es(t), 0);
    if (cT.includes(t.status)) throw new Bh(es(t), t.status);
    let n;
    try {
      n = await t.json();
    } catch (i) {
      throw new i0(es(i), i);
    }
    let r;
    const s = iT(t);
    if (
      (s &&
      s.getTime() >= t0["2024-01-01"].timestamp &&
      typeof n == "object" &&
      n &&
      typeof n.code == "string"
        ? (r = n.code)
        : typeof n == "object" &&
          n &&
          typeof n.error_code == "string" &&
          (r = n.error_code),
      r)
    ) {
      if (r === "weak_password")
        throw new a0(
          es(n),
          t.status,
          ((e = n.weak_password) === null || e === void 0
            ? void 0
            : e.reasons) || [],
        );
      if (r === "session_not_found") throw new dr();
    } else if (
      typeof n == "object" &&
      n &&
      typeof n.weak_password == "object" &&
      n.weak_password &&
      Array.isArray(n.weak_password.reasons) &&
      n.weak_password.reasons.length &&
      n.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
    )
      throw new a0(es(n), t.status, n.weak_password.reasons);
    throw new oT(es(n), t.status || 500, r);
  }
  const dT = (t, e, n, r) => {
    const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    return t === "GET"
      ? s
      : ((s.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e == null ? void 0 : e.headers,
        )),
        (s.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, s), n));
  };
  async function ne(t, e, n, r) {
    var s;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[$h] || (i[$h] = t0["2024-01-01"].name),
      r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const o =
      (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const a = Object.keys(o).length
        ? "?" + new URLSearchParams(o).toString()
        : "",
      l = await hT(
        t,
        e,
        n + a,
        { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
        {},
        r == null ? void 0 : r.body,
      );
    return r != null && r.xform
      ? r == null
        ? void 0
        : r.xform(l)
      : { data: Object.assign({}, l), error: null };
  }
  async function hT(t, e, n, r, s, i) {
    const o = dT(e, r, s, i);
    let a;
    try {
      a = await t(n, Object.assign({}, o));
    } catch (l) {
      throw (console.error(l), new Bh(es(l), 0));
    }
    if ((a.ok || (await l0(a)), r != null && r.noResolveJson)) return a;
    try {
      return await a.json();
    } catch (l) {
      await l0(l);
    }
  }
  function hr(t) {
    var e;
    let n = null;
    gT(t) &&
      ((n = Object.assign({}, t)),
      t.expires_at || (n.expires_at = qA(t.expires_in)));
    const r = (e = t.user) !== null && e !== void 0 ? e : t;
    return { data: { session: n, user: r }, error: null };
  }
  function u0(t) {
    const e = hr(t);
    return (
      !e.error &&
        t.weak_password &&
        typeof t.weak_password == "object" &&
        Array.isArray(t.weak_password.reasons) &&
        t.weak_password.reasons.length &&
        t.weak_password.message &&
        typeof t.weak_password.message == "string" &&
        t.weak_password.reasons.reduce(
          (n, r) => n && typeof r == "string",
          !0,
        ) &&
        (e.data.weak_password = t.weak_password),
      e
    );
  }
  function fr(t) {
    var e;
    return {
      data: { user: (e = t.user) !== null && e !== void 0 ? e : t },
      error: null,
    };
  }
  function fT(t) {
    return { data: t, error: null };
  }
  function pT(t) {
    const {
        action_link: e,
        email_otp: n,
        hashed_token: r,
        redirect_to: s,
        verification_type: i,
      } = t,
      o = uT(t, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type",
      ]),
      a = {
        action_link: e,
        email_otp: n,
        hashed_token: r,
        redirect_to: s,
        verification_type: i,
      },
      l = Object.assign({}, o);
    return { data: { properties: a, user: l }, error: null };
  }
  function mT(t) {
    return t;
  }
  function gT(t) {
    return t.access_token && t.refresh_token && t.expires_in;
  }
  var yT = function (t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
        e.indexOf(r[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
          (n[r[s]] = t[r[s]]);
    return n;
  };
  class vT {
    constructor({ url: e = "", headers: n = {}, fetch: r }) {
      (this.url = e),
        (this.headers = n),
        (this.fetch = n0(r)),
        (this.mfa = {
          listFactors: this._listFactors.bind(this),
          deleteFactor: this._deleteFactor.bind(this),
        });
    }
    async signOut(e, n = "global") {
      try {
        return (
          await ne(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
            headers: this.headers,
            jwt: e,
            noResolveJson: !0,
          }),
          { data: null, error: null }
        );
      } catch (r) {
        if (X(r)) return { data: null, error: r };
        throw r;
      }
    }
    async inviteUserByEmail(e, n = {}) {
      try {
        return await ne(this.fetch, "POST", `${this.url}/invite`, {
          body: { email: e, data: n.data },
          headers: this.headers,
          redirectTo: n.redirectTo,
          xform: fr,
        });
      } catch (r) {
        if (X(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async generateLink(e) {
      try {
        const { options: n } = e,
          r = yT(e, ["options"]),
          s = Object.assign(Object.assign({}, r), n);
        return (
          "newEmail" in r &&
            ((s.new_email = r == null ? void 0 : r.newEmail),
            delete s.newEmail),
          await ne(this.fetch, "POST", `${this.url}/admin/generate_link`, {
            body: s,
            headers: this.headers,
            xform: pT,
            redirectTo: n == null ? void 0 : n.redirectTo,
          })
        );
      } catch (n) {
        if (X(n)) return { data: { properties: null, user: null }, error: n };
        throw n;
      }
    }
    async createUser(e) {
      try {
        return await ne(this.fetch, "POST", `${this.url}/admin/users`, {
          body: e,
          headers: this.headers,
          xform: fr,
        });
      } catch (n) {
        if (X(n)) return { data: { user: null }, error: n };
        throw n;
      }
    }
    async listUsers(e) {
      var n, r, s, i, o, a, l;
      try {
        const u = { nextPage: null, lastPage: 0, total: 0 },
          c = await ne(this.fetch, "GET", `${this.url}/admin/users`, {
            headers: this.headers,
            noResolveJson: !0,
            query: {
              page:
                (r =
                  (n = e == null ? void 0 : e.page) === null || n === void 0
                    ? void 0
                    : n.toString()) !== null && r !== void 0
                  ? r
                  : "",
              per_page:
                (i =
                  (s = e == null ? void 0 : e.perPage) === null || s === void 0
                    ? void 0
                    : s.toString()) !== null && i !== void 0
                  ? i
                  : "",
            },
            xform: mT,
          });
        if (c.error) throw c.error;
        const d = await c.json(),
          h =
            (o = c.headers.get("x-total-count")) !== null && o !== void 0
              ? o
              : 0,
          p =
            (l =
              (a = c.headers.get("link")) === null || a === void 0
                ? void 0
                : a.split(",")) !== null && l !== void 0
              ? l
              : [];
        return (
          p.length > 0 &&
            (p.forEach((v) => {
              const g = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
                w = JSON.parse(v.split(";")[1].split("=")[1]);
              u[`${w}Page`] = g;
            }),
            (u.total = parseInt(h))),
          { data: Object.assign(Object.assign({}, d), u), error: null }
        );
      } catch (u) {
        if (X(u)) return { data: { users: [] }, error: u };
        throw u;
      }
    }
    async getUserById(e) {
      try {
        return await ne(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          xform: fr,
        });
      } catch (n) {
        if (X(n)) return { data: { user: null }, error: n };
        throw n;
      }
    }
    async updateUserById(e, n) {
      try {
        return await ne(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
          body: n,
          headers: this.headers,
          xform: fr,
        });
      } catch (r) {
        if (X(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async deleteUser(e, n = !1) {
      try {
        return await ne(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
          headers: this.headers,
          body: { should_soft_delete: n },
          xform: fr,
        });
      } catch (r) {
        if (X(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    async _listFactors(e) {
      try {
        const { data: n, error: r } = await ne(
          this.fetch,
          "GET",
          `${this.url}/admin/users/${e.userId}/factors`,
          {
            headers: this.headers,
            xform: (s) => ({ data: { factors: s }, error: null }),
          },
        );
        return { data: n, error: r };
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _deleteFactor(e) {
      try {
        return {
          data: await ne(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
            { headers: this.headers },
          ),
          error: null,
        };
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    }
  }
  const wT = {
    getItem: (t) => (zo() ? globalThis.localStorage.getItem(t) : null),
    setItem: (t, e) => {
      zo() && globalThis.localStorage.setItem(t, e);
    },
    removeItem: (t) => {
      zo() && globalThis.localStorage.removeItem(t);
    },
  };
  function c0(t = {}) {
    return {
      getItem: (e) => t[e] || null,
      setItem: (e, n) => {
        t[e] = n;
      },
      removeItem: (e) => {
        delete t[e];
      },
    };
  }
  function _T() {
    if (typeof globalThis != "object")
      try {
        Object.defineProperty(Object.prototype, "__magic__", {
          get: function () {
            return this;
          },
          configurable: !0,
        }),
          (__magic__.globalThis = __magic__),
          delete Object.prototype.__magic__;
      } catch {
        typeof self < "u" && (self.globalThis = self);
      }
  }
  const ei = {
    debug: !!(
      globalThis &&
      zo() &&
      globalThis.localStorage &&
      globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") ===
        "true"
    ),
  };
  class d0 extends Error {
    constructor(e) {
      super(e), (this.isAcquireTimeout = !0);
    }
  }
  class bT extends d0 {}
  async function xT(t, e, n) {
    ei.debug &&
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const r = new globalThis.AbortController();
    return (
      e > 0 &&
        setTimeout(() => {
          r.abort(),
            ei.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock acquire timed out",
                t,
              );
        }, e),
      await globalThis.navigator.locks.request(
        t,
        e === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: r.signal },
        async (s) => {
          if (s) {
            ei.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                t,
                s.name,
              );
            try {
              return await n();
            } finally {
              ei.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  t,
                  s.name,
                );
            }
          } else {
            if (e === 0)
              throw (
                (ei.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    t,
                  ),
                new bT(
                  `Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`,
                ))
              );
            if (ei.debug)
              try {
                const i = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(i, null, "  "),
                );
              } catch (i) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  i,
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
              ),
              await n()
            );
          }
        },
      )
    );
  }
  _T();
  const ST = {
      url: WA,
      storageKey: HA,
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      headers: GA,
      flowType: "implicit",
      debug: !1,
      hasCustomAuthorizationHeader: !1,
    },
    Wo = 30 * 1e3,
    h0 = 3;
  async function f0(t, e, n) {
    return await n();
  }
  class Ho {
    constructor(e) {
      var n, r;
      (this.memoryStorage = null),
        (this.stateChangeEmitters = new Map()),
        (this.autoRefreshTicker = null),
        (this.visibilityChangedCallback = null),
        (this.refreshingDeferred = null),
        (this.initializePromise = null),
        (this.detectSessionInUrl = !0),
        (this.hasCustomAuthorizationHeader = !1),
        (this.suppressGetSessionWarning = !1),
        (this.lockAcquired = !1),
        (this.pendingInLock = []),
        (this.broadcastChannel = null),
        (this.logger = console.log),
        (this.instanceID = Ho.nextInstanceID),
        (Ho.nextInstanceID += 1),
        this.instanceID > 0 &&
          Qt() &&
          console.warn(
            "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.",
          );
      const s = Object.assign(Object.assign({}, ST), e);
      if (
        ((this.logDebugMessages = !!s.debug),
        typeof s.debug == "function" && (this.logger = s.debug),
        (this.persistSession = s.persistSession),
        (this.storageKey = s.storageKey),
        (this.autoRefreshToken = s.autoRefreshToken),
        (this.admin = new vT({
          url: s.url,
          headers: s.headers,
          fetch: s.fetch,
        })),
        (this.url = s.url),
        (this.headers = s.headers),
        (this.fetch = n0(s.fetch)),
        (this.lock = s.lock || f0),
        (this.detectSessionInUrl = s.detectSessionInUrl),
        (this.flowType = s.flowType),
        (this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader),
        s.lock
          ? (this.lock = s.lock)
          : Qt() &&
              !(
                (n = globalThis == null ? void 0 : globalThis.navigator) ===
                  null || n === void 0
              ) &&
              n.locks
            ? (this.lock = xT)
            : (this.lock = f0),
        (this.mfa = {
          verify: this._verify.bind(this),
          enroll: this._enroll.bind(this),
          unenroll: this._unenroll.bind(this),
          challenge: this._challenge.bind(this),
          listFactors: this._listFactors.bind(this),
          challengeAndVerify: this._challengeAndVerify.bind(this),
          getAuthenticatorAssuranceLevel:
            this._getAuthenticatorAssuranceLevel.bind(this),
        }),
        this.persistSession
          ? s.storage
            ? (this.storage = s.storage)
            : zo()
              ? (this.storage = wT)
              : ((this.memoryStorage = {}),
                (this.storage = c0(this.memoryStorage)))
          : ((this.memoryStorage = {}),
            (this.storage = c0(this.memoryStorage))),
        Qt() &&
          globalThis.BroadcastChannel &&
          this.persistSession &&
          this.storageKey)
      ) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(
            this.storageKey,
          );
        } catch (i) {
          console.error(
            "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
            i,
          );
        }
        (r = this.broadcastChannel) === null ||
          r === void 0 ||
          r.addEventListener("message", async (i) => {
            this._debug(
              "received broadcast notification from other tab or client",
              i,
            ),
              await this._notifyAllSubscribers(
                i.data.event,
                i.data.session,
                !1,
              );
          });
      }
      this.initialize();
    }
    _debug(...e) {
      return (
        this.logDebugMessages &&
          this.logger(
            `GoTrueClient@${this.instanceID} (${Yv}) ${new Date().toISOString()}`,
            ...e,
          ),
        this
      );
    }
    async initialize() {
      return this.initializePromise
        ? await this.initializePromise
        : ((this.initializePromise = (async () =>
            await this._acquireLock(
              -1,
              async () => await this._initialize(),
            ))()),
          await this.initializePromise);
    }
    async _initialize() {
      try {
        const e = Qt() ? await this._isPKCEFlow() : !1;
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", e),
          e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
        ) {
          const { data: n, error: r } = await this._getSessionFromURL(e);
          if (r)
            return (
              this._debug(
                "#_initialize()",
                "error detecting session from URL",
                r,
              ),
              (r == null ? void 0 : r.code) === "identity_already_exists"
                ? { error: r }
                : (await this._removeSession(), { error: r })
            );
          const { session: s, redirectType: i } = n;
          return (
            this._debug(
              "#_initialize()",
              "detected session in URL",
              s,
              "redirect type",
              i,
            ),
            await this._saveSession(s),
            setTimeout(async () => {
              i === "recovery"
                ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", s)
                : await this._notifyAllSubscribers("SIGNED_IN", s);
            }, 0),
            { error: null }
          );
        }
        return await this._recoverAndRefresh(), { error: null };
      } catch (e) {
        return X(e)
          ? { error: e }
          : { error: new i0("Unexpected error during initialization", e) };
      } finally {
        await this._handleVisibilityChange(),
          this._debug("#_initialize()", "end");
      }
    }
    async signInAnonymously(e) {
      var n, r, s;
      try {
        const i = await ne(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              data:
                (r =
                  (n = e == null ? void 0 : e.options) === null || n === void 0
                    ? void 0
                    : n.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token:
                  (s = e == null ? void 0 : e.options) === null || s === void 0
                    ? void 0
                    : s.captchaToken,
              },
            },
            xform: hr,
          }),
          { data: o, error: a } = i;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const l = o.session,
          u = o.user;
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: u, session: l }, error: null }
        );
      } catch (i) {
        if (X(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signUp(e) {
      var n, r, s;
      try {
        let i;
        if ("email" in e) {
          const { email: c, password: d, options: h } = e;
          let p = null,
            v = null;
          this.flowType === "pkce" &&
            ([p, v] = await Ys(this.storage, this.storageKey)),
            (i = await ne(this.fetch, "POST", `${this.url}/signup`, {
              headers: this.headers,
              redirectTo: h == null ? void 0 : h.emailRedirectTo,
              body: {
                email: c,
                password: d,
                data:
                  (n = h == null ? void 0 : h.data) !== null && n !== void 0
                    ? n
                    : {},
                gotrue_meta_security: {
                  captcha_token: h == null ? void 0 : h.captchaToken,
                },
                code_challenge: p,
                code_challenge_method: v,
              },
              xform: hr,
            }));
        } else if ("phone" in e) {
          const { phone: c, password: d, options: h } = e;
          i = await ne(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            body: {
              phone: c,
              password: d,
              data:
                (r = h == null ? void 0 : h.data) !== null && r !== void 0
                  ? r
                  : {},
              channel:
                (s = h == null ? void 0 : h.channel) !== null && s !== void 0
                  ? s
                  : "sms",
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
            xform: hr,
          });
        } else
          throw new au(
            "You must provide either an email or phone number and a password",
          );
        const { data: o, error: a } = i;
        if (a || !o) return { data: { user: null, session: null }, error: a };
        const l = o.session,
          u = o.user;
        return (
          o.session &&
            (await this._saveSession(o.session),
            await this._notifyAllSubscribers("SIGNED_IN", l)),
          { data: { user: u, session: l }, error: null }
        );
      } catch (i) {
        if (X(i)) return { data: { user: null, session: null }, error: i };
        throw i;
      }
    }
    async signInWithPassword(e) {
      try {
        let n;
        if ("email" in e) {
          const { email: i, password: o, options: a } = e;
          n = await ne(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                email: i,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: u0,
            },
          );
        } else if ("phone" in e) {
          const { phone: i, password: o, options: a } = e;
          n = await ne(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=password`,
            {
              headers: this.headers,
              body: {
                phone: i,
                password: o,
                gotrue_meta_security: {
                  captcha_token: a == null ? void 0 : a.captchaToken,
                },
              },
              xform: u0,
            },
          );
        } else
          throw new au(
            "You must provide either an email or phone number and a password",
          );
        const { data: r, error: s } = n;
        return s
          ? { data: { user: null, session: null }, error: s }
          : !r || !r.session || !r.user
            ? { data: { user: null, session: null }, error: new Uh() }
            : (r.session &&
                (await this._saveSession(r.session),
                await this._notifyAllSubscribers("SIGNED_IN", r.session)),
              {
                data: Object.assign(
                  { user: r.user, session: r.session },
                  r.weak_password ? { weakPassword: r.weak_password } : null,
                ),
                error: s,
              });
      } catch (n) {
        if (X(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async signInWithOAuth(e) {
      var n, r, s, i;
      return await this._handleProviderSignIn(e.provider, {
        redirectTo:
          (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
        scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
        skipBrowserRedirect:
          (i = e.options) === null || i === void 0
            ? void 0
            : i.skipBrowserRedirect,
      });
    }
    async exchangeCodeForSession(e) {
      return (
        await this.initializePromise,
        this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
      );
    }
    async _exchangeCodeForSession(e) {
      const n = await su(this.storage, `${this.storageKey}-code-verifier`),
        [r, s] = (n ?? "").split("/");
      try {
        const { data: i, error: o } = await ne(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=pkce`,
          {
            headers: this.headers,
            body: { auth_code: e, code_verifier: r },
            xform: hr,
          },
        );
        if ((await iu(this.storage, `${this.storageKey}-code-verifier`), o))
          throw o;
        return !i || !i.session || !i.user
          ? {
              data: { user: null, session: null, redirectType: null },
              error: new Uh(),
            }
          : (i.session &&
              (await this._saveSession(i.session),
              await this._notifyAllSubscribers("SIGNED_IN", i.session)),
            {
              data: Object.assign(Object.assign({}, i), {
                redirectType: s ?? null,
              }),
              error: o,
            });
      } catch (i) {
        if (X(i))
          return {
            data: { user: null, session: null, redirectType: null },
            error: i,
          };
        throw i;
      }
    }
    async signInWithIdToken(e) {
      try {
        const {
            options: n,
            provider: r,
            token: s,
            access_token: i,
            nonce: o,
          } = e,
          a = await ne(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              body: {
                provider: r,
                id_token: s,
                access_token: i,
                nonce: o,
                gotrue_meta_security: {
                  captcha_token: n == null ? void 0 : n.captchaToken,
                },
              },
              xform: hr,
            },
          ),
          { data: l, error: u } = a;
        return u
          ? { data: { user: null, session: null }, error: u }
          : !l || !l.session || !l.user
            ? { data: { user: null, session: null }, error: new Uh() }
            : (l.session &&
                (await this._saveSession(l.session),
                await this._notifyAllSubscribers("SIGNED_IN", l.session)),
              { data: l, error: u });
      } catch (n) {
        if (X(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async signInWithOtp(e) {
      var n, r, s, i, o;
      try {
        if ("email" in e) {
          const { email: a, options: l } = e;
          let u = null,
            c = null;
          this.flowType === "pkce" &&
            ([u, c] = await Ys(this.storage, this.storageKey));
          const { error: d } = await ne(this.fetch, "POST", `${this.url}/otp`, {
            headers: this.headers,
            body: {
              email: a,
              data:
                (n = l == null ? void 0 : l.data) !== null && n !== void 0
                  ? n
                  : {},
              create_user:
                (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
                r !== void 0
                  ? r
                  : !0,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
              code_challenge: u,
              code_challenge_method: c,
            },
            redirectTo: l == null ? void 0 : l.emailRedirectTo,
          });
          return { data: { user: null, session: null }, error: d };
        }
        if ("phone" in e) {
          const { phone: a, options: l } = e,
            { data: u, error: c } = await ne(
              this.fetch,
              "POST",
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  phone: a,
                  data:
                    (s = l == null ? void 0 : l.data) !== null && s !== void 0
                      ? s
                      : {},
                  create_user:
                    (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                    i !== void 0
                      ? i
                      : !0,
                  gotrue_meta_security: {
                    captcha_token: l == null ? void 0 : l.captchaToken,
                  },
                  channel:
                    (o = l == null ? void 0 : l.channel) !== null &&
                    o !== void 0
                      ? o
                      : "sms",
                },
              },
            );
          return {
            data: {
              user: null,
              session: null,
              messageId: u == null ? void 0 : u.message_id,
            },
            error: c,
          };
        }
        throw new au("You must provide either an email or phone number.");
      } catch (a) {
        if (X(a)) return { data: { user: null, session: null }, error: a };
        throw a;
      }
    }
    async verifyOtp(e) {
      var n, r;
      try {
        let s, i;
        "options" in e &&
          ((s =
            (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo),
          (i =
            (r = e.options) === null || r === void 0
              ? void 0
              : r.captchaToken));
        const { data: o, error: a } = await ne(
          this.fetch,
          "POST",
          `${this.url}/verify`,
          {
            headers: this.headers,
            body: Object.assign(Object.assign({}, e), {
              gotrue_meta_security: { captcha_token: i },
            }),
            redirectTo: s,
            xform: hr,
          },
        );
        if (a) throw a;
        if (!o) throw new Error("An error occurred on token verification.");
        const l = o.session,
          u = o.user;
        return (
          l != null &&
            l.access_token &&
            (await this._saveSession(l),
            await this._notifyAllSubscribers(
              e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
              l,
            )),
          { data: { user: u, session: l }, error: null }
        );
      } catch (s) {
        if (X(s)) return { data: { user: null, session: null }, error: s };
        throw s;
      }
    }
    async signInWithSSO(e) {
      var n, r, s;
      try {
        let i = null,
          o = null;
        return (
          this.flowType === "pkce" &&
            ([i, o] = await Ys(this.storage, this.storageKey)),
          await ne(this.fetch, "POST", `${this.url}/sso`, {
            body: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      "providerId" in e ? { provider_id: e.providerId } : null,
                    ),
                    "domain" in e ? { domain: e.domain } : null,
                  ),
                  {
                    redirect_to:
                      (r =
                        (n = e.options) === null || n === void 0
                          ? void 0
                          : n.redirectTo) !== null && r !== void 0
                        ? r
                        : void 0,
                  },
                ),
                !(
                  (s = e == null ? void 0 : e.options) === null || s === void 0
                ) && s.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token: e.options.captchaToken,
                      },
                    }
                  : null,
              ),
              {
                skip_http_redirect: !0,
                code_challenge: i,
                code_challenge_method: o,
              },
            ),
            headers: this.headers,
            xform: fT,
          })
        );
      } catch (i) {
        if (X(i)) return { data: null, error: i };
        throw i;
      }
    }
    async reauthenticate() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._reauthenticate())
      );
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (e) => {
          const {
            data: { session: n },
            error: r,
          } = e;
          if (r) throw r;
          if (!n) throw new dr();
          const { error: s } = await ne(
            this.fetch,
            "GET",
            `${this.url}/reauthenticate`,
            { headers: this.headers, jwt: n.access_token },
          );
          return { data: { user: null, session: null }, error: s };
        });
      } catch (e) {
        if (X(e)) return { data: { user: null, session: null }, error: e };
        throw e;
      }
    }
    async resend(e) {
      try {
        const n = `${this.url}/resend`;
        if ("email" in e) {
          const { email: r, type: s, options: i } = e,
            { error: o } = await ne(this.fetch, "POST", n, {
              headers: this.headers,
              body: {
                email: r,
                type: s,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
              redirectTo: i == null ? void 0 : i.emailRedirectTo,
            });
          return { data: { user: null, session: null }, error: o };
        } else if ("phone" in e) {
          const { phone: r, type: s, options: i } = e,
            { data: o, error: a } = await ne(this.fetch, "POST", n, {
              headers: this.headers,
              body: {
                phone: r,
                type: s,
                gotrue_meta_security: {
                  captcha_token: i == null ? void 0 : i.captchaToken,
                },
              },
            });
          return {
            data: {
              user: null,
              session: null,
              messageId: o == null ? void 0 : o.message_id,
            },
            error: a,
          };
        }
        throw new au(
          "You must provide either an email or phone number and a type",
        );
      } catch (n) {
        if (X(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async getSession() {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () =>
          this._useSession(async (n) => n),
        )
      );
    }
    async _acquireLock(e, n) {
      this._debug("#_acquireLock", "begin", e);
      try {
        if (this.lockAcquired) {
          const r = this.pendingInLock.length
              ? this.pendingInLock[this.pendingInLock.length - 1]
              : Promise.resolve(),
            s = (async () => (await r, await n()))();
          return (
            this.pendingInLock.push(
              (async () => {
                try {
                  await s;
                } catch {}
              })(),
            ),
            s
          );
        }
        return await this.lock(`lock:${this.storageKey}`, e, async () => {
          this._debug(
            "#_acquireLock",
            "lock acquired for storage key",
            this.storageKey,
          );
          try {
            this.lockAcquired = !0;
            const r = n();
            for (
              this.pendingInLock.push(
                (async () => {
                  try {
                    await r;
                  } catch {}
                })(),
              ),
                await r;
              this.pendingInLock.length;

            ) {
              const s = [...this.pendingInLock];
              await Promise.all(s), this.pendingInLock.splice(0, s.length);
            }
            return await r;
          } finally {
            this._debug(
              "#_acquireLock",
              "lock released for storage key",
              this.storageKey,
            ),
              (this.lockAcquired = !1);
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(e) {
      this._debug("#_useSession", "begin");
      try {
        const n = await this.__loadSession();
        return await e(n);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin"),
        this.lockAcquired ||
          this._debug(
            "#__loadSession()",
            "used outside of an acquired lock!",
            new Error().stack,
          );
      try {
        let e = null;
        const n = await su(this.storage, this.storageKey);
        if (
          (this._debug("#getSession()", "session from storage", n),
          n !== null &&
            (this._isValidSession(n)
              ? (e = n)
              : (this._debug(
                  "#getSession()",
                  "session from storage is not valid",
                ),
                await this._removeSession())),
          !e)
        )
          return { data: { session: null }, error: null };
        const r = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
        if (
          (this._debug(
            "#__loadSession()",
            `session has${r ? "" : " not"} expired`,
            "expires_at",
            e.expires_at,
          ),
          !r)
        ) {
          if (this.storage.isServer) {
            let o = this.suppressGetSessionWarning;
            e = new Proxy(e, {
              get: (l, u, c) => (
                !o &&
                  u === "user" &&
                  (console.warn(
                    "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
                  ),
                  (o = !0),
                  (this.suppressGetSessionWarning = !0)),
                Reflect.get(l, u, c)
              ),
            });
          }
          return { data: { session: e }, error: null };
        }
        const { session: s, error: i } = await this._callRefreshToken(
          e.refresh_token,
        );
        return i
          ? { data: { session: null }, error: i }
          : { data: { session: s }, error: null };
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(e) {
      return e
        ? await this._getUser(e)
        : (await this.initializePromise,
          await this._acquireLock(-1, async () => await this._getUser()));
    }
    async _getUser(e) {
      try {
        return e
          ? await ne(this.fetch, "GET", `${this.url}/user`, {
              headers: this.headers,
              jwt: e,
              xform: fr,
            })
          : await this._useSession(async (n) => {
              var r, s, i;
              const { data: o, error: a } = n;
              if (a) throw a;
              return !(
                !((r = o.session) === null || r === void 0) && r.access_token
              ) && !this.hasCustomAuthorizationHeader
                ? { data: { user: null }, error: new dr() }
                : await ne(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                      (i =
                        (s = o.session) === null || s === void 0
                          ? void 0
                          : s.access_token) !== null && i !== void 0
                        ? i
                        : void 0,
                    xform: fr,
                  });
            });
      } catch (n) {
        if (X(n))
          return (
            lT(n) &&
              (await this._removeSession(),
              await iu(this.storage, `${this.storageKey}-code-verifier`)),
            { data: { user: null }, error: n }
          );
        throw n;
      }
    }
    async updateUser(e, n = {}) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._updateUser(e, n))
      );
    }
    async _updateUser(e, n = {}) {
      try {
        return await this._useSession(async (r) => {
          const { data: s, error: i } = r;
          if (i) throw i;
          if (!s.session) throw new dr();
          const o = s.session;
          let a = null,
            l = null;
          this.flowType === "pkce" &&
            e.email != null &&
            ([a, l] = await Ys(this.storage, this.storageKey));
          const { data: u, error: c } = await ne(
            this.fetch,
            "PUT",
            `${this.url}/user`,
            {
              headers: this.headers,
              redirectTo: n == null ? void 0 : n.emailRedirectTo,
              body: Object.assign(Object.assign({}, e), {
                code_challenge: a,
                code_challenge_method: l,
              }),
              jwt: o.access_token,
              xform: fr,
            },
          );
          if (c) throw c;
          return (
            (o.user = u.user),
            await this._saveSession(o),
            await this._notifyAllSubscribers("USER_UPDATED", o),
            { data: { user: o.user }, error: null }
          );
        });
      } catch (r) {
        if (X(r)) return { data: { user: null }, error: r };
        throw r;
      }
    }
    _decodeJWT(e) {
      return s0(e);
    }
    async setSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._setSession(e))
      );
    }
    async _setSession(e) {
      try {
        if (!e.access_token || !e.refresh_token) throw new dr();
        const n = Date.now() / 1e3;
        let r = n,
          s = !0,
          i = null;
        const o = s0(e.access_token);
        if ((o.exp && ((r = o.exp), (s = r <= n)), s)) {
          const { session: a, error: l } = await this._callRefreshToken(
            e.refresh_token,
          );
          if (l) return { data: { user: null, session: null }, error: l };
          if (!a) return { data: { user: null, session: null }, error: null };
          i = a;
        } else {
          const { data: a, error: l } = await this._getUser(e.access_token);
          if (l) throw l;
          (i = {
            access_token: e.access_token,
            refresh_token: e.refresh_token,
            user: a.user,
            token_type: "bearer",
            expires_in: r - n,
            expires_at: r,
          }),
            await this._saveSession(i),
            await this._notifyAllSubscribers("SIGNED_IN", i);
        }
        return { data: { user: i.user, session: i }, error: null };
      } catch (n) {
        if (X(n)) return { data: { session: null, user: null }, error: n };
        throw n;
      }
    }
    async refreshSession(e) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._refreshSession(e))
      );
    }
    async _refreshSession(e) {
      try {
        return await this._useSession(async (n) => {
          var r;
          if (!e) {
            const { data: o, error: a } = n;
            if (a) throw a;
            e = (r = o.session) !== null && r !== void 0 ? r : void 0;
          }
          if (!(e != null && e.refresh_token)) throw new dr();
          const { session: s, error: i } = await this._callRefreshToken(
            e.refresh_token,
          );
          return i
            ? { data: { user: null, session: null }, error: i }
            : s
              ? { data: { user: s.user, session: s }, error: null }
              : { data: { user: null, session: null }, error: null };
        });
      } catch (n) {
        if (X(n)) return { data: { user: null, session: null }, error: n };
        throw n;
      }
    }
    async _getSessionFromURL(e) {
      try {
        if (!Qt()) throw new lu("No browser detected.");
        if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
          throw new lu("Not a valid implicit grant flow url.");
        if (this.flowType == "pkce" && !e)
          throw new o0("Not a valid PKCE flow url.");
        const n = Fh(window.location.href);
        if (e) {
          if (!n.code) throw new o0("No code detected.");
          const { data: f, error: y } = await this._exchangeCodeForSession(
            n.code,
          );
          if (y) throw y;
          const _ = new URL(window.location.href);
          return (
            _.searchParams.delete("code"),
            window.history.replaceState(window.history.state, "", _.toString()),
            { data: { session: f.session, redirectType: null }, error: null }
          );
        }
        if (n.error || n.error_description || n.error_code)
          throw new lu(
            n.error_description ||
              "Error in URL with unspecified error_description",
            {
              error: n.error || "unspecified_error",
              code: n.error_code || "unspecified_code",
            },
          );
        const {
          provider_token: r,
          provider_refresh_token: s,
          access_token: i,
          refresh_token: o,
          expires_in: a,
          expires_at: l,
          token_type: u,
        } = n;
        if (!i || !a || !o || !u) throw new lu("No session defined in URL");
        const c = Math.round(Date.now() / 1e3),
          d = parseInt(a);
        let h = c + d;
        l && (h = parseInt(l));
        const p = h - c;
        p * 1e3 <= Wo &&
          console.warn(
            `@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${d}s`,
          );
        const v = h - d;
        c - v >= 120
          ? console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
              v,
              h,
              c,
            )
          : c - v < 0 &&
            console.warn(
              "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
              v,
              h,
              c,
            );
        const { data: g, error: w } = await this._getUser(i);
        if (w) throw w;
        const m = {
          provider_token: r,
          provider_refresh_token: s,
          access_token: i,
          expires_in: d,
          expires_at: h,
          refresh_token: o,
          token_type: u,
          user: g.user,
        };
        return (
          (window.location.hash = ""),
          this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
          { data: { session: m, redirectType: n.type }, error: null }
        );
      } catch (n) {
        if (X(n))
          return { data: { session: null, redirectType: null }, error: n };
        throw n;
      }
    }
    _isImplicitGrantFlow() {
      const e = Fh(window.location.href);
      return !!(Qt() && (e.access_token || e.error_description));
    }
    async _isPKCEFlow() {
      const e = Fh(window.location.href),
        n = await su(this.storage, `${this.storageKey}-code-verifier`);
      return !!(e.code && n);
    }
    async signOut(e = { scope: "global" }) {
      return (
        await this.initializePromise,
        await this._acquireLock(-1, async () => await this._signOut(e))
      );
    }
    async _signOut({ scope: e } = { scope: "global" }) {
      return await this._useSession(async (n) => {
        var r;
        const { data: s, error: i } = n;
        if (i) return { error: i };
        const o =
          (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
        if (o) {
          const { error: a } = await this.admin.signOut(o, e);
          if (
            a &&
            !(
              aT(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)
            )
          )
            return { error: a };
        }
        return (
          e !== "others" &&
            (await this._removeSession(),
            await iu(this.storage, `${this.storageKey}-code-verifier`)),
          { error: null }
        );
      });
    }
    onAuthStateChange(e) {
      const n = KA(),
        r = {
          id: n,
          callback: e,
          unsubscribe: () => {
            this._debug(
              "#unsubscribe()",
              "state change callback with id removed",
              n,
            ),
              this.stateChangeEmitters.delete(n);
          },
        };
      return (
        this._debug("#onAuthStateChange()", "registered callback with id", n),
        this.stateChangeEmitters.set(n, r),
        (async () => (
          await this.initializePromise,
          await this._acquireLock(-1, async () => {
            this._emitInitialSession(n);
          })
        ))(),
        { data: { subscription: r } }
      );
    }
    async _emitInitialSession(e) {
      return await this._useSession(async (n) => {
        var r, s;
        try {
          const {
            data: { session: i },
            error: o,
          } = n;
          if (o) throw o;
          await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
            ? void 0
            : r.callback("INITIAL_SESSION", i)),
            this._debug("INITIAL_SESSION", "callback id", e, "session", i);
        } catch (i) {
          await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
            ? void 0
            : s.callback("INITIAL_SESSION", null)),
            this._debug("INITIAL_SESSION", "callback id", e, "error", i),
            console.error(i);
        }
      });
    }
    async resetPasswordForEmail(e, n = {}) {
      let r = null,
        s = null;
      this.flowType === "pkce" &&
        ([r, s] = await Ys(this.storage, this.storageKey, !0));
      try {
        return await ne(this.fetch, "POST", `${this.url}/recover`, {
          body: {
            email: e,
            code_challenge: r,
            code_challenge_method: s,
            gotrue_meta_security: { captcha_token: n.captchaToken },
          },
          headers: this.headers,
          redirectTo: n.redirectTo,
        });
      } catch (i) {
        if (X(i)) return { data: null, error: i };
        throw i;
      }
    }
    async getUserIdentities() {
      var e;
      try {
        const { data: n, error: r } = await this.getUser();
        if (r) throw r;
        return {
          data: {
            identities:
              (e = n.user.identities) !== null && e !== void 0 ? e : [],
          },
          error: null,
        };
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    }
    async linkIdentity(e) {
      var n;
      try {
        const { data: r, error: s } = await this._useSession(async (i) => {
          var o, a, l, u, c;
          const { data: d, error: h } = i;
          if (h) throw h;
          const p = await this._getUrlForProvider(
            `${this.url}/user/identities/authorize`,
            e.provider,
            {
              redirectTo:
                (o = e.options) === null || o === void 0
                  ? void 0
                  : o.redirectTo,
              scopes:
                (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
              queryParams:
                (l = e.options) === null || l === void 0
                  ? void 0
                  : l.queryParams,
              skipBrowserRedirect: !0,
            },
          );
          return await ne(this.fetch, "GET", p, {
            headers: this.headers,
            jwt:
              (c =
                (u = d.session) === null || u === void 0
                  ? void 0
                  : u.access_token) !== null && c !== void 0
                ? c
                : void 0,
          });
        });
        if (s) throw s;
        return (
          Qt() &&
            !(
              !((n = e.options) === null || n === void 0) &&
              n.skipBrowserRedirect
            ) &&
            window.location.assign(r == null ? void 0 : r.url),
          {
            data: { provider: e.provider, url: r == null ? void 0 : r.url },
            error: null,
          }
        );
      } catch (r) {
        if (X(r))
          return { data: { provider: e.provider, url: null }, error: r };
        throw r;
      }
    }
    async unlinkIdentity(e) {
      try {
        return await this._useSession(async (n) => {
          var r, s;
          const { data: i, error: o } = n;
          if (o) throw o;
          return await ne(
            this.fetch,
            "DELETE",
            `${this.url}/user/identities/${e.identity_id}`,
            {
              headers: this.headers,
              jwt:
                (s =
                  (r = i.session) === null || r === void 0
                    ? void 0
                    : r.access_token) !== null && s !== void 0
                  ? s
                  : void 0,
            },
          );
        });
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _refreshAccessToken(e) {
      const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
      this._debug(n, "begin");
      try {
        const r = Date.now();
        return await JA(
          async (s) => (
            s > 0 && (await XA(200 * Math.pow(2, s - 1))),
            this._debug(n, "refreshing attempt", s),
            await ne(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=refresh_token`,
              { body: { refresh_token: e }, headers: this.headers, xform: hr },
            )
          ),
          (s, i) => {
            const o = 200 * Math.pow(2, s);
            return i && zh(i) && Date.now() + o - r < Wo;
          },
        );
      } catch (r) {
        if ((this._debug(n, "error", r), X(r)))
          return { data: { session: null, user: null }, error: r };
        throw r;
      } finally {
        this._debug(n, "end");
      }
    }
    _isValidSession(e) {
      return (
        typeof e == "object" &&
        e !== null &&
        "access_token" in e &&
        "refresh_token" in e &&
        "expires_at" in e
      );
    }
    async _handleProviderSignIn(e, n) {
      const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
        redirectTo: n.redirectTo,
        scopes: n.scopes,
        queryParams: n.queryParams,
      });
      return (
        this._debug(
          "#_handleProviderSignIn()",
          "provider",
          e,
          "options",
          n,
          "url",
          r,
        ),
        Qt() && !n.skipBrowserRedirect && window.location.assign(r),
        { data: { provider: e, url: r }, error: null }
      );
    }
    async _recoverAndRefresh() {
      var e;
      const n = "#_recoverAndRefresh()";
      this._debug(n, "begin");
      try {
        const r = await su(this.storage, this.storageKey);
        if (
          (this._debug(n, "session from storage", r), !this._isValidSession(r))
        ) {
          this._debug(n, "session is not valid"),
            r !== null && (await this._removeSession());
          return;
        }
        const s = Math.round(Date.now() / 1e3),
          i =
            ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) < s + e0;
        if (
          (this._debug(
            n,
            `session has${i ? "" : " not"} expired with margin of ${e0}s`,
          ),
          i)
        ) {
          if (this.autoRefreshToken && r.refresh_token) {
            const { error: o } = await this._callRefreshToken(r.refresh_token);
            o &&
              (console.error(o),
              zh(o) ||
                (this._debug(
                  n,
                  "refresh failed with a non-retryable error, removing the session",
                  o,
                ),
                await this._removeSession()));
          }
        } else await this._notifyAllSubscribers("SIGNED_IN", r);
      } catch (r) {
        this._debug(n, "error", r), console.error(r);
        return;
      } finally {
        this._debug(n, "end");
      }
    }
    async _callRefreshToken(e) {
      var n, r;
      if (!e) throw new dr();
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
      this._debug(s, "begin");
      try {
        this.refreshingDeferred = new ou();
        const { data: i, error: o } = await this._refreshAccessToken(e);
        if (o) throw o;
        if (!i.session) throw new dr();
        await this._saveSession(i.session),
          await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
        const a = { session: i.session, error: null };
        return this.refreshingDeferred.resolve(a), a;
      } catch (i) {
        if ((this._debug(s, "error", i), X(i))) {
          const o = { session: null, error: i };
          return (
            zh(i) || (await this._removeSession()),
            (n = this.refreshingDeferred) === null ||
              n === void 0 ||
              n.resolve(o),
            o
          );
        }
        throw (
          ((r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.reject(i),
          i)
        );
      } finally {
        (this.refreshingDeferred = null), this._debug(s, "end");
      }
    }
    async _notifyAllSubscribers(e, n, r = !0) {
      const s = `#_notifyAllSubscribers(${e})`;
      this._debug(s, "begin", n, `broadcast = ${r}`);
      try {
        this.broadcastChannel &&
          r &&
          this.broadcastChannel.postMessage({ event: e, session: n });
        const i = [],
          o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
            try {
              await a.callback(e, n);
            } catch (l) {
              i.push(l);
            }
          });
        if ((await Promise.all(o), i.length > 0)) {
          for (let a = 0; a < i.length; a += 1) console.error(i[a]);
          throw i[0];
        }
      } finally {
        this._debug(s, "end");
      }
    }
    async _saveSession(e) {
      this._debug("#_saveSession()", e),
        (this.suppressGetSessionWarning = !0),
        await r0(this.storage, this.storageKey, e);
    }
    async _removeSession() {
      this._debug("#_removeSession()"),
        await iu(this.storage, this.storageKey),
        await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const e = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        e &&
          Qt() &&
          window != null &&
          window.removeEventListener &&
          window.removeEventListener("visibilitychange", e);
      } catch (n) {
        console.error("removing visibilitychange callback failed", n);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
      const e = setInterval(() => this._autoRefreshTokenTick(), Wo);
      (this.autoRefreshTicker = e),
        e && typeof e == "object" && typeof e.unref == "function"
          ? e.unref()
          : typeof Deno < "u" &&
            typeof Deno.unrefTimer == "function" &&
            Deno.unrefTimer(e),
        setTimeout(async () => {
          await this.initializePromise, await this._autoRefreshTokenTick();
        }, 0);
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const e = this.autoRefreshTicker;
      (this.autoRefreshTicker = null), e && clearInterval(e);
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async (n) => {
                const {
                  data: { session: r },
                } = n;
                if (!r || !r.refresh_token || !r.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const s = Math.floor((r.expires_at * 1e3 - e) / Wo);
                this._debug(
                  "#_autoRefreshTokenTick()",
                  `access token expires in ${s} ticks, a tick lasts ${Wo}ms, refresh threshold is ${h0} ticks`,
                ),
                  s <= h0 && (await this._callRefreshToken(r.refresh_token));
              });
            } catch (n) {
              console.error(
                "Auto refresh tick failed with error. This is likely a transient error.",
                n,
              );
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e.isAcquireTimeout || e instanceof d0)
          this._debug("auto refresh token tick lock not available");
        else throw e;
      }
    }
    async _handleVisibilityChange() {
      if (
        (this._debug("#_handleVisibilityChange()"),
        !Qt() || !(window != null && window.addEventListener))
      )
        return this.autoRefreshToken && this.startAutoRefresh(), !1;
      try {
        (this.visibilityChangedCallback = async () =>
          await this._onVisibilityChanged(!1)),
          window == null ||
            window.addEventListener(
              "visibilitychange",
              this.visibilityChangedCallback,
            ),
          await this._onVisibilityChanged(!0);
      } catch (e) {
        console.error("_handleVisibilityChange", e);
      }
    }
    async _onVisibilityChanged(e) {
      const n = `#_onVisibilityChanged(${e})`;
      this._debug(n, "visibilityState", document.visibilityState),
        document.visibilityState === "visible"
          ? (this.autoRefreshToken && this._startAutoRefresh(),
            e ||
              (await this.initializePromise,
              await this._acquireLock(-1, async () => {
                if (document.visibilityState !== "visible") {
                  this._debug(
                    n,
                    "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                  );
                  return;
                }
                await this._recoverAndRefresh();
              })))
          : document.visibilityState === "hidden" &&
            this.autoRefreshToken &&
            this._stopAutoRefresh();
    }
    async _getUrlForProvider(e, n, r) {
      const s = [`provider=${encodeURIComponent(n)}`];
      if (
        (r != null &&
          r.redirectTo &&
          s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
        r != null &&
          r.scopes &&
          s.push(`scopes=${encodeURIComponent(r.scopes)}`),
        this.flowType === "pkce")
      ) {
        const [i, o] = await Ys(this.storage, this.storageKey),
          a = new URLSearchParams({
            code_challenge: `${encodeURIComponent(i)}`,
            code_challenge_method: `${encodeURIComponent(o)}`,
          });
        s.push(a.toString());
      }
      if (r != null && r.queryParams) {
        const i = new URLSearchParams(r.queryParams);
        s.push(i.toString());
      }
      return (
        r != null &&
          r.skipBrowserRedirect &&
          s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
        `${e}?${s.join("&")}`
      );
    }
    async _unenroll(e) {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: s, error: i } = n;
          return i
            ? { data: null, error: i }
            : await ne(
                this.fetch,
                "DELETE",
                `${this.url}/factors/${e.factorId}`,
                {
                  headers: this.headers,
                  jwt:
                    (r = s == null ? void 0 : s.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                },
              );
        });
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _enroll(e) {
      try {
        return await this._useSession(async (n) => {
          var r, s;
          const { data: i, error: o } = n;
          if (o) return { data: null, error: o };
          const a = Object.assign(
              { friendly_name: e.friendlyName, factor_type: e.factorType },
              e.factorType === "phone"
                ? { phone: e.phone }
                : { issuer: e.issuer },
            ),
            { data: l, error: u } = await ne(
              this.fetch,
              "POST",
              `${this.url}/factors`,
              {
                body: a,
                headers: this.headers,
                jwt:
                  (r = i == null ? void 0 : i.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              },
            );
          return u
            ? { data: null, error: u }
            : (e.factorType === "totp" &&
                !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
                s.qr_code &&
                (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
              { data: l, error: null });
        });
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    }
    async _verify(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (n) => {
            var r;
            const { data: s, error: i } = n;
            if (i) return { data: null, error: i };
            const { data: o, error: a } = await ne(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: { code: e.code, challenge_id: e.challengeId },
                headers: this.headers,
                jwt:
                  (r = s == null ? void 0 : s.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              },
            );
            return a
              ? { data: null, error: a }
              : (await this._saveSession(
                  Object.assign(
                    { expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
                    o,
                  ),
                ),
                await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                { data: o, error: a });
          });
        } catch (n) {
          if (X(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    async _challenge(e) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (n) => {
            var r;
            const { data: s, error: i } = n;
            return i
              ? { data: null, error: i }
              : await ne(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/challenge`,
                  {
                    body: { channel: e.channel },
                    headers: this.headers,
                    jwt:
                      (r = s == null ? void 0 : s.session) === null ||
                      r === void 0
                        ? void 0
                        : r.access_token,
                  },
                );
          });
        } catch (n) {
          if (X(n)) return { data: null, error: n };
          throw n;
        }
      });
    }
    async _challengeAndVerify(e) {
      const { data: n, error: r } = await this._challenge({
        factorId: e.factorId,
      });
      return r
        ? { data: null, error: r }
        : await this._verify({
            factorId: e.factorId,
            challengeId: n.id,
            code: e.code,
          });
    }
    async _listFactors() {
      const {
        data: { user: e },
        error: n,
      } = await this.getUser();
      if (n) return { data: null, error: n };
      const r = (e == null ? void 0 : e.factors) || [],
        s = r.filter(
          (o) => o.factor_type === "totp" && o.status === "verified",
        ),
        i = r.filter(
          (o) => o.factor_type === "phone" && o.status === "verified",
        );
      return { data: { all: r, totp: s, phone: i }, error: null };
    }
    async _getAuthenticatorAssuranceLevel() {
      return this._acquireLock(
        -1,
        async () =>
          await this._useSession(async (e) => {
            var n, r;
            const {
              data: { session: s },
              error: i,
            } = e;
            if (i) return { data: null, error: i };
            if (!s)
              return {
                data: {
                  currentLevel: null,
                  nextLevel: null,
                  currentAuthenticationMethods: [],
                },
                error: null,
              };
            const o = this._decodeJWT(s.access_token);
            let a = null;
            o.aal && (a = o.aal);
            let l = a;
            ((r =
              (n = s.user.factors) === null || n === void 0
                ? void 0
                : n.filter((d) => d.status === "verified")) !== null &&
            r !== void 0
              ? r
              : []
            ).length > 0 && (l = "aal2");
            const c = o.amr || [];
            return {
              data: {
                currentLevel: a,
                nextLevel: l,
                currentAuthenticationMethods: c,
              },
              error: null,
            };
          }),
      );
    }
  }
  Ho.nextInstanceID = 0;
  const kT = Ho;
  class ET extends kT {
    constructor(e) {
      super(e);
    }
  }
  var AT = function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function a(c) {
        try {
          u(r.next(c));
        } catch (d) {
          o(d);
        }
      }
      function l(c) {
        try {
          u(r.throw(c));
        } catch (d) {
          o(d);
        }
      }
      function u(c) {
        c.done ? i(c.value) : s(c.value).then(a, l);
      }
      u((r = r.apply(t, e || [])).next());
    });
  };
  class TT {
    constructor(e, n, r) {
      var s, i, o;
      if (((this.supabaseUrl = e), (this.supabaseKey = n), !e))
        throw new Error("supabaseUrl is required.");
      if (!n) throw new Error("supabaseKey is required.");
      const a = BA(e);
      (this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws")),
        (this.authUrl = `${a}/auth/v1`),
        (this.storageUrl = `${a}/storage/v1`),
        (this.functionsUrl = `${a}/functions/v1`);
      const l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
        u = {
          db: LA,
          realtime: jA,
          auth: Object.assign(Object.assign({}, IA), { storageKey: l }),
          global: MA,
        },
        c = zA(r ?? {}, u);
      (this.storageKey =
        (s = c.auth.storageKey) !== null && s !== void 0 ? s : ""),
        (this.headers =
          (i = c.global.headers) !== null && i !== void 0 ? i : {}),
        c.accessToken
          ? ((this.accessToken = c.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (d, h) => {
                  throw new Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`,
                  );
                },
              },
            )))
          : (this.auth = this._initSupabaseAuthClient(
              (o = c.auth) !== null && o !== void 0 ? o : {},
              this.headers,
              c.global.fetch,
            )),
        (this.fetch = VA(n, this._getAccessToken.bind(this), c.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Object.assign({ headers: this.headers }, c.realtime),
        )),
        (this.rest = new sA(`${a}/rest/v1`, {
          headers: this.headers,
          schema: c.db.schema,
          fetch: this.fetch,
        })),
        c.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new LE(this.functionsUrl, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    get storage() {
      return new NA(this.storageUrl, this.headers, this.fetch);
    }
    from(e) {
      return this.rest.from(e);
    }
    schema(e) {
      return this.rest.schema(e);
    }
    rpc(e, n = {}, r = {}) {
      return this.rest.rpc(e, n, r);
    }
    channel(e, n = { config: {} }) {
      return this.realtime.channel(e, n);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e) {
      return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
      var e, n;
      return AT(this, void 0, void 0, function* () {
        if (this.accessToken) return yield this.accessToken();
        const { data: r } = yield this.auth.getSession();
        return (n =
          (e = r.session) === null || e === void 0
            ? void 0
            : e.access_token) !== null && n !== void 0
          ? n
          : null;
      });
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: e,
        persistSession: n,
        detectSessionInUrl: r,
        storage: s,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: l,
      },
      u,
      c,
    ) {
      var d;
      const h = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new ET({
        url: this.authUrl,
        headers: Object.assign(Object.assign({}, h), u),
        storageKey: i,
        autoRefreshToken: e,
        persistSession: n,
        detectSessionInUrl: r,
        storage: s,
        flowType: o,
        lock: a,
        debug: l,
        fetch: c,
        hasCustomAuthorizationHeader:
          (d = "Authorization" in this.headers) !== null && d !== void 0
            ? d
            : !1,
      });
    }
    _initRealtimeClient(e) {
      return new vA(
        this.realtimeUrl,
        Object.assign(Object.assign({}, e), {
          params: Object.assign(
            { apikey: this.supabaseKey },
            e == null ? void 0 : e.params,
          ),
        }),
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((n, r) => {
        this._handleTokenChanged(
          n,
          "CLIENT",
          r == null ? void 0 : r.access_token,
        );
      });
    }
    _handleTokenChanged(e, n, r) {
      (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
        : e === "SIGNED_OUT" &&
          (this.realtime.setAuth(this.supabaseKey),
          n == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  }
  const PT = (t, e, n) => new TT(t, e, n);
  let Wh = null;
  async function Hh() {
    if (!Wh) {
      const t = await Dt.storage.sync.get("supabaseKey"),
        e = await Dt.storage.sync.get("supabaseUrl");
      Wh = PT(e.supabaseUrl, t.supabaseKey);
    }
    return Wh;
  }
  async function p0(t, e) {
    let r = (await Hh()).from(t).select("*");
    e &&
      Object.entries(e).forEach(([o, a]) => {
        r = r.eq(o, a);
      });
    const { data: s, error: i } = await r;
    if (i) throw i;
    return s;
  }
  async function CT(t, e) {
    const n = await Hh(),
      r = e.map((o) =>
        Object.fromEntries(Object.entries(o).filter(([a, l]) => l != null)),
      ),
      { data: s, error: i } = await n.from(t).insert(r).select();
    if (i) throw i;
    return s;
  }
  async function RT(t, e, n) {
    let s = (await Hh()).from(t).update(n);
    Object.entries(e).forEach(([a, l]) => {
      s = s.eq(a, l);
    });
    const { data: i, error: o } = await s;
    if (o) throw o;
    return i;
  }
  const ti = "0.32.1";
  let m0 = !1,
    Go,
    g0,
    Gh,
    y0,
    v0,
    w0;
  function NT(t, e = { auto: !1 }) {
    if (m0)
      throw new Error(
        `you must \`import '@anthropic-ai/sdk/shims/${t.kind}'\` before importing anything else from @anthropic-ai/sdk`,
      );
    if (Go)
      throw new Error(
        `can't \`import '@anthropic-ai/sdk/shims/${t.kind}'\` after \`import '@anthropic-ai/sdk/shims/${Go}'\``,
      );
    (m0 = e.auto),
      (Go = t.kind),
      (g0 = t.fetch),
      (Gh = t.File),
      (y0 = t.ReadableStream),
      (v0 = t.getDefaultAgent),
      (w0 = t.fileFromPath);
  }
  class OT {
    constructor(e) {
      this.body = e;
    }
    get [Symbol.toStringTag]() {
      return "MultipartBody";
    }
  }
  function MT({ manuallyImported: t } = {}) {
    const e = t
      ? "You may need to use polyfills"
      : "Add one of these imports before your first `import … from '@anthropic-ai/sdk'`:\n- `import '@anthropic-ai/sdk/shims/node'` (if you're running on Node)\n- `import '@anthropic-ai/sdk/shims/web'` (otherwise)\n";
    let n, r, s, i;
    try {
      (n = fetch), (r = Request), (s = Response), (i = Headers);
    } catch (o) {
      throw new Error(
        `this environment is missing the following Web Fetch API type: ${o.message}. ${e}`,
      );
    }
    return {
      kind: "web",
      fetch: n,
      Request: r,
      Response: s,
      Headers: i,
      FormData:
        typeof FormData < "u"
          ? FormData
          : class {
              constructor() {
                throw new Error(
                  `file uploads aren't supported in this environment yet as 'FormData' is undefined. ${e}`,
                );
              }
            },
      Blob:
        typeof Blob < "u"
          ? Blob
          : class {
              constructor() {
                throw new Error(
                  `file uploads aren't supported in this environment yet as 'Blob' is undefined. ${e}`,
                );
              }
            },
      File:
        typeof File < "u"
          ? File
          : class {
              constructor() {
                throw new Error(
                  `file uploads aren't supported in this environment yet as 'File' is undefined. ${e}`,
                );
              }
            },
      ReadableStream:
        typeof ReadableStream < "u"
          ? ReadableStream
          : class {
              constructor() {
                throw new Error(
                  `streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${e}`,
                );
              }
            },
      getMultipartRequestOptions: async (o, a) => ({ ...a, body: new OT(o) }),
      getDefaultAgent: (o) => {},
      fileFromPath: () => {
        throw new Error(
          "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/anthropics/anthropic-sdk-typescript#file-uploads",
        );
      },
      isFsReadStream: (o) => !1,
    };
  }
  Go || NT(MT(), { auto: !0 });
  class oe extends Error {}
  class Ke extends oe {
    constructor(e, n, r, s) {
      super(`${Ke.makeMessage(e, n, r)}`),
        (this.status = e),
        (this.headers = s),
        (this.request_id = s == null ? void 0 : s["request-id"]),
        (this.error = n);
    }
    static makeMessage(e, n, r) {
      const s =
        n != null && n.message
          ? typeof n.message == "string"
            ? n.message
            : JSON.stringify(n.message)
          : n
            ? JSON.stringify(n)
            : r;
      return e && s
        ? `${e} ${s}`
        : e
          ? `${e} status code (no body)`
          : s || "(no status code or body)";
    }
    static generate(e, n, r, s) {
      if (!e) return new uu({ message: r, cause: Qh(n) });
      const i = n;
      return e === 400
        ? new b0(e, i, r, s)
        : e === 401
          ? new x0(e, i, r, s)
          : e === 403
            ? new S0(e, i, r, s)
            : e === 404
              ? new k0(e, i, r, s)
              : e === 409
                ? new E0(e, i, r, s)
                : e === 422
                  ? new A0(e, i, r, s)
                  : e === 429
                    ? new T0(e, i, r, s)
                    : e >= 500
                      ? new P0(e, i, r, s)
                      : new Ke(e, i, r, s);
    }
  }
  class Xt extends Ke {
    constructor({ message: e } = {}) {
      super(void 0, void 0, e || "Request was aborted.", void 0),
        (this.status = void 0);
    }
  }
  class uu extends Ke {
    constructor({ message: e, cause: n }) {
      super(void 0, void 0, e || "Connection error.", void 0),
        (this.status = void 0),
        n && (this.cause = n);
    }
  }
  class _0 extends uu {
    constructor({ message: e } = {}) {
      super({ message: e ?? "Request timed out." });
    }
  }
  class b0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 400);
    }
  }
  class x0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 401);
    }
  }
  class S0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 403);
    }
  }
  class k0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 404);
    }
  }
  class E0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 409);
    }
  }
  class A0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 422);
    }
  }
  class T0 extends Ke {
    constructor() {
      super(...arguments), (this.status = 429);
    }
  }
  class P0 extends Ke {}
  class pr {
    constructor() {
      (this.buffer = []), (this.trailingCR = !1);
    }
    decode(e) {
      let n = this.decodeText(e);
      if (
        (this.trailingCR && ((n = "\r" + n), (this.trailingCR = !1)),
        n.endsWith("\r") && ((this.trailingCR = !0), (n = n.slice(0, -1))),
        !n)
      )
        return [];
      const r = pr.NEWLINE_CHARS.has(n[n.length - 1] || "");
      let s = n.split(pr.NEWLINE_REGEXP);
      return (
        r && s.pop(),
        s.length === 1 && !r
          ? (this.buffer.push(s[0]), [])
          : (this.buffer.length > 0 &&
              ((s = [this.buffer.join("") + s[0], ...s.slice(1)]),
              (this.buffer = [])),
            r || (this.buffer = [s.pop() || ""]),
            s)
      );
    }
    decodeText(e) {
      if (e == null) return "";
      if (typeof e == "string") return e;
      if (typeof Buffer < "u") {
        if (e instanceof Buffer) return e.toString();
        if (e instanceof Uint8Array) return Buffer.from(e).toString();
        throw new oe(
          `Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`,
        );
      }
      if (typeof TextDecoder < "u") {
        if (e instanceof Uint8Array || e instanceof ArrayBuffer)
          return (
            this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8")),
            this.textDecoder.decode(e)
          );
        throw new oe(
          `Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`,
        );
      }
      throw new oe(
        "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.",
      );
    }
    flush() {
      if (!this.buffer.length && !this.trailingCR) return [];
      const e = [this.buffer.join("")];
      return (this.buffer = []), (this.trailingCR = !1), e;
    }
  }
  (pr.NEWLINE_CHARS = new Set([
    `
`,
    "\r",
  ])),
    (pr.NEWLINE_REGEXP = /\r\n|[\n\r]/g);
  class ln {
    constructor(e, n) {
      (this.iterator = e), (this.controller = n);
    }
    static fromSSEResponse(e, n) {
      let r = !1;
      async function* s() {
        if (r)
          throw new Error(
            "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
          );
        r = !0;
        let i = !1;
        try {
          for await (const o of LT(e, n)) {
            if (o.event === "completion")
              try {
                yield JSON.parse(o.data);
              } catch (a) {
                throw (
                  (console.error("Could not parse message into JSON:", o.data),
                  console.error("From chunk:", o.raw),
                  a)
                );
              }
            if (
              o.event === "message_start" ||
              o.event === "message_delta" ||
              o.event === "message_stop" ||
              o.event === "content_block_start" ||
              o.event === "content_block_delta" ||
              o.event === "content_block_stop"
            )
              try {
                yield JSON.parse(o.data);
              } catch (a) {
                throw (
                  (console.error("Could not parse message into JSON:", o.data),
                  console.error("From chunk:", o.raw),
                  a)
                );
              }
            if (o.event !== "ping" && o.event === "error")
              throw Ke.generate(
                void 0,
                `SSE Error: ${o.data}`,
                o.data,
                N0(e.headers),
              );
          }
          i = !0;
        } catch (o) {
          if (o instanceof Error && o.name === "AbortError") return;
          throw o;
        } finally {
          i || n.abort();
        }
      }
      return new ln(s, n);
    }
    static fromReadableStream(e, n) {
      let r = !1;
      async function* s() {
        const o = new pr(),
          a = qh(e);
        for await (const l of a) for (const u of o.decode(l)) yield u;
        for (const l of o.flush()) yield l;
      }
      async function* i() {
        if (r)
          throw new Error(
            "Cannot iterate over a consumed stream, use `.tee()` to split the stream.",
          );
        r = !0;
        let o = !1;
        try {
          for await (const a of s()) o || (a && (yield JSON.parse(a)));
          o = !0;
        } catch (a) {
          if (a instanceof Error && a.name === "AbortError") return;
          throw a;
        } finally {
          o || n.abort();
        }
      }
      return new ln(i, n);
    }
    [Symbol.asyncIterator]() {
      return this.iterator();
    }
    tee() {
      const e = [],
        n = [],
        r = this.iterator(),
        s = (i) => ({
          next: () => {
            if (i.length === 0) {
              const o = r.next();
              e.push(o), n.push(o);
            }
            return i.shift();
          },
        });
      return [
        new ln(() => s(e), this.controller),
        new ln(() => s(n), this.controller),
      ];
    }
    toReadableStream() {
      const e = this;
      let n;
      const r = new TextEncoder();
      return new y0({
        async start() {
          n = e[Symbol.asyncIterator]();
        },
        async pull(s) {
          try {
            const { value: i, done: o } = await n.next();
            if (o) return s.close();
            const a = r.encode(
              JSON.stringify(i) +
                `
`,
            );
            s.enqueue(a);
          } catch (i) {
            s.error(i);
          }
        },
        async cancel() {
          var s;
          await ((s = n.return) == null ? void 0 : s.call(n));
        },
      });
    }
  }
  async function* LT(t, e) {
    if (!t.body)
      throw (
        (e.abort(), new oe("Attempted to iterate over a response with no body"))
      );
    const n = new DT(),
      r = new pr(),
      s = qh(t.body);
    for await (const i of IT(s))
      for (const o of r.decode(i)) {
        const a = n.decode(o);
        a && (yield a);
      }
    for (const i of r.flush()) {
      const o = n.decode(i);
      o && (yield o);
    }
  }
  async function* IT(t) {
    let e = new Uint8Array();
    for await (const n of t) {
      if (n == null) continue;
      const r =
        n instanceof ArrayBuffer
          ? new Uint8Array(n)
          : typeof n == "string"
            ? new TextEncoder().encode(n)
            : n;
      let s = new Uint8Array(e.length + r.length);
      s.set(e), s.set(r, e.length), (e = s);
      let i;
      for (; (i = jT(e)) !== -1; ) yield e.slice(0, i), (e = e.slice(i));
    }
    e.length > 0 && (yield e);
  }
  function jT(t) {
    for (let r = 0; r < t.length - 2; r++) {
      if ((t[r] === 10 && t[r + 1] === 10) || (t[r] === 13 && t[r + 1] === 13))
        return r + 2;
      if (
        t[r] === 13 &&
        t[r + 1] === 10 &&
        r + 3 < t.length &&
        t[r + 2] === 13 &&
        t[r + 3] === 10
      )
        return r + 4;
    }
    return -1;
  }
  class DT {
    constructor() {
      (this.event = null), (this.data = []), (this.chunks = []);
    }
    decode(e) {
      if ((e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e)) {
        if (!this.event && !this.data.length) return null;
        const i = {
          event: this.event,
          data: this.data.join(`
`),
          raw: this.chunks,
        };
        return (this.event = null), (this.data = []), (this.chunks = []), i;
      }
      if ((this.chunks.push(e), e.startsWith(":"))) return null;
      let [n, r, s] = $T(e, ":");
      return (
        s.startsWith(" ") && (s = s.substring(1)),
        n === "event" ? (this.event = s) : n === "data" && this.data.push(s),
        null
      );
    }
  }
  function $T(t, e) {
    const n = t.indexOf(e);
    return n !== -1
      ? [t.substring(0, n), e, t.substring(n + e.length)]
      : [t, "", ""];
  }
  function qh(t) {
    if (t[Symbol.asyncIterator]) return t;
    const e = t.getReader();
    return {
      async next() {
        try {
          const n = await e.read();
          return n != null && n.done && e.releaseLock(), n;
        } catch (n) {
          throw (e.releaseLock(), n);
        }
      },
      async return() {
        const n = e.cancel();
        return e.releaseLock(), await n, { done: !0, value: void 0 };
      },
      [Symbol.asyncIterator]() {
        return this;
      },
    };
  }
  const FT = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t.url == "string" &&
      typeof t.blob == "function",
    VT = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t.name == "string" &&
      typeof t.lastModified == "number" &&
      cu(t),
    cu = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t.size == "number" &&
      typeof t.type == "string" &&
      typeof t.text == "function" &&
      typeof t.slice == "function" &&
      typeof t.arrayBuffer == "function";
  async function UT(t, e, n) {
    var s;
    if (((t = await t), VT(t))) return t;
    if (FT(t)) {
      const i = await t.blob();
      e || (e = new URL(t.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
      const o = cu(i) ? [await i.arrayBuffer()] : [i];
      return new Gh(o, e, n);
    }
    const r = await BT(t);
    if ((e || (e = WT(t) ?? "unknown_file"), !(n != null && n.type))) {
      const i = (s = r[0]) == null ? void 0 : s.type;
      typeof i == "string" && (n = { ...n, type: i });
    }
    return new Gh(r, e, n);
  }
  async function BT(t) {
    var n;
    let e = [];
    if (
      typeof t == "string" ||
      ArrayBuffer.isView(t) ||
      t instanceof ArrayBuffer
    )
      e.push(t);
    else if (cu(t)) e.push(await t.arrayBuffer());
    else if (HT(t)) for await (const r of t) e.push(r);
    else
      throw new Error(
        `Unexpected data type: ${typeof t}; constructor: ${(n = t == null ? void 0 : t.constructor) == null ? void 0 : n.name}; props: ${zT(t)}`,
      );
    return e;
  }
  function zT(t) {
    return `[${Object.getOwnPropertyNames(t)
      .map((n) => `"${n}"`)
      .join(", ")}]`;
  }
  function WT(t) {
    var e;
    return (
      Kh(t.name) ||
      Kh(t.filename) ||
      ((e = Kh(t.path)) == null ? void 0 : e.split(/[\\/]/).pop())
    );
  }
  const Kh = (t) => {
      if (typeof t == "string") return t;
      if (typeof Buffer < "u" && t instanceof Buffer) return String(t);
    },
    HT = (t) =>
      t != null &&
      typeof t == "object" &&
      typeof t[Symbol.asyncIterator] == "function",
    C0 = (t) =>
      t &&
      typeof t == "object" &&
      t.body &&
      t[Symbol.toStringTag] === "MultipartBody";
  var GT = function (t, e, n, r, s) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !s : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it",
        );
      return r === "a" ? s.call(t, n) : s ? (s.value = n) : e.set(t, n), n;
    },
    qT = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it",
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    du;
  async function R0(t) {
    const { response: e } = t;
    if (t.options.stream)
      return (
        ni("response", e.status, e.url, e.headers, e.body),
        t.options.__streamClass
          ? t.options.__streamClass.fromSSEResponse(e, t.controller)
          : ln.fromSSEResponse(e, t.controller)
      );
    if (e.status === 204) return null;
    if (t.options.__binaryResponse) return e;
    const n = e.headers.get("content-type");
    if (
      (n == null ? void 0 : n.includes("application/json")) ||
      (n == null ? void 0 : n.includes("application/vnd.api+json"))
    ) {
      const i = await e.json();
      return ni("response", e.status, e.url, e.headers, i), i;
    }
    const s = await e.text();
    return ni("response", e.status, e.url, e.headers, s), s;
  }
  class hu extends Promise {
    constructor(e, n = R0) {
      super((r) => {
        r(null);
      }),
        (this.responsePromise = e),
        (this.parseResponse = n);
    }
    _thenUnwrap(e) {
      return new hu(this.responsePromise, async (n) =>
        e(await this.parseResponse(n), n),
      );
    }
    asResponse() {
      return this.responsePromise.then((e) => e.response);
    }
    async withResponse() {
      const [e, n] = await Promise.all([this.parse(), this.asResponse()]);
      return { data: e, response: n };
    }
    parse() {
      return (
        this.parsedPromise ||
          (this.parsedPromise = this.responsePromise.then(this.parseResponse)),
        this.parsedPromise
      );
    }
    then(e, n) {
      return this.parse().then(e, n);
    }
    catch(e) {
      return this.parse().catch(e);
    }
    finally(e) {
      return this.parse().finally(e);
    }
  }
  class KT {
    constructor({
      baseURL: e,
      maxRetries: n = 2,
      timeout: r = 6e5,
      httpAgent: s,
      fetch: i,
    }) {
      (this.baseURL = e),
        (this.maxRetries = Zh("maxRetries", n)),
        (this.timeout = Zh("timeout", r)),
        (this.httpAgent = s),
        (this.fetch = i ?? g0);
    }
    authHeaders(e) {
      return {};
    }
    defaultHeaders(e) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": this.getUserAgent(),
        ...eP(),
        ...this.authHeaders(e),
      };
    }
    validateHeaders(e, n) {}
    defaultIdempotencyKey() {
      return `stainless-node-retry-${iP()}`;
    }
    get(e, n) {
      return this.methodRequest("get", e, n);
    }
    post(e, n) {
      return this.methodRequest("post", e, n);
    }
    patch(e, n) {
      return this.methodRequest("patch", e, n);
    }
    put(e, n) {
      return this.methodRequest("put", e, n);
    }
    delete(e, n) {
      return this.methodRequest("delete", e, n);
    }
    methodRequest(e, n, r) {
      return this.request(
        Promise.resolve(r).then(async (s) => {
          const i =
            s && cu(s == null ? void 0 : s.body)
              ? new DataView(await s.body.arrayBuffer())
              : (s == null ? void 0 : s.body) instanceof DataView
                ? s.body
                : (s == null ? void 0 : s.body) instanceof ArrayBuffer
                  ? new DataView(s.body)
                  : s && ArrayBuffer.isView(s == null ? void 0 : s.body)
                    ? new DataView(s.body.buffer)
                    : s == null
                      ? void 0
                      : s.body;
          return { method: e, path: n, ...s, body: i };
        }),
      );
    }
    getAPIList(e, n, r) {
      return this.requestAPIList(n, { method: "get", path: e, ...r });
    }
    calculateContentLength(e) {
      if (typeof e == "string") {
        if (typeof Buffer < "u") return Buffer.byteLength(e, "utf8").toString();
        if (typeof TextEncoder < "u")
          return new TextEncoder().encode(e).length.toString();
      } else if (ArrayBuffer.isView(e)) return e.byteLength.toString();
      return null;
    }
    buildRequest(e, { retryCount: n = 0 } = {}) {
      var g;
      const { method: r, path: s, query: i, headers: o = {} } = e,
        a =
          ArrayBuffer.isView(e.body) ||
          (e.__binaryRequest && typeof e.body == "string")
            ? e.body
            : C0(e.body)
              ? e.body.body
              : e.body
                ? JSON.stringify(e.body, null, 2)
                : null,
        l = this.calculateContentLength(a),
        u = this.buildURL(s, i);
      "timeout" in e && Zh("timeout", e.timeout);
      const c = e.timeout ?? this.timeout,
        d = e.httpAgent ?? this.httpAgent ?? v0(u),
        h = c + 1e3;
      typeof ((g = d == null ? void 0 : d.options) == null
        ? void 0
        : g.timeout) == "number" &&
        h > (d.options.timeout ?? 0) &&
        (d.options.timeout = h),
        this.idempotencyHeader &&
          r !== "get" &&
          (e.idempotencyKey ||
            (e.idempotencyKey = this.defaultIdempotencyKey()),
          (o[this.idempotencyHeader] = e.idempotencyKey));
      const p = this.buildHeaders({
        options: e,
        headers: o,
        contentLength: l,
        retryCount: n,
      });
      return {
        req: {
          method: r,
          ...(a && { body: a }),
          headers: p,
          ...(d && { agent: d }),
          signal: e.signal ?? null,
        },
        url: u,
        timeout: c,
      };
    }
    buildHeaders({ options: e, headers: n, contentLength: r, retryCount: s }) {
      const i = {};
      r && (i["content-length"] = r);
      const o = this.defaultHeaders(e);
      return (
        j0(i, o),
        j0(i, n),
        C0(e.body) && Go !== "node" && delete i["content-type"],
        D0(o, "x-stainless-retry-count") === void 0 &&
          D0(n, "x-stainless-retry-count") === void 0 &&
          (i["x-stainless-retry-count"] = String(s)),
        this.validateHeaders(i, n),
        i
      );
    }
    async prepareOptions(e) {}
    async prepareRequest(e, { url: n, options: r }) {}
    parseHeaders(e) {
      return e
        ? Symbol.iterator in e
          ? Object.fromEntries(Array.from(e).map((n) => [...n]))
          : { ...e }
        : {};
    }
    makeStatusError(e, n, r, s) {
      return Ke.generate(e, n, r, s);
    }
    request(e, n = null) {
      return new hu(this.makeRequest(e, n));
    }
    async makeRequest(e, n) {
      var d, h;
      const r = await e,
        s = r.maxRetries ?? this.maxRetries;
      n == null && (n = s), await this.prepareOptions(r);
      const {
        req: i,
        url: o,
        timeout: a,
      } = this.buildRequest(r, { retryCount: s - n });
      if (
        (await this.prepareRequest(i, { url: o, options: r }),
        ni("request", o, r, i.headers),
        (d = r.signal) != null && d.aborted)
      )
        throw new Xt();
      const l = new AbortController(),
        u = await this.fetchWithTimeout(o, i, a, l).catch(Qh);
      if (u instanceof Error) {
        if ((h = r.signal) != null && h.aborted) throw new Xt();
        if (n) return this.retryRequest(r, n);
        throw u.name === "AbortError" ? new _0() : new uu({ cause: u });
      }
      const c = N0(u.headers);
      if (!u.ok) {
        if (n && this.shouldRetry(u)) {
          const f = `retrying, ${n} attempts remaining`;
          return (
            ni(`response (error; ${f})`, u.status, o, c),
            this.retryRequest(r, n, c)
          );
        }
        const p = await u.text().catch((f) => Qh(f).message),
          v = tP(p),
          g = v ? void 0 : p;
        throw (
          (ni(
            `response (error; ${n ? "(error; no more retries left)" : "(error; not retryable)"})`,
            u.status,
            o,
            c,
            g,
          ),
          this.makeStatusError(u.status, v, g, c))
        );
      }
      return { response: u, options: r, controller: l };
    }
    requestAPIList(e, n) {
      const r = this.makeRequest(n, null);
      return new QT(this, r, e);
    }
    buildURL(e, n) {
      const r = rP(e)
          ? new URL(e)
          : new URL(
              this.baseURL +
                (this.baseURL.endsWith("/") && e.startsWith("/")
                  ? e.slice(1)
                  : e),
            ),
        s = this.defaultQuery();
      return (
        pu(s) || (n = { ...s, ...n }),
        typeof n == "object" &&
          n &&
          !Array.isArray(n) &&
          (r.search = this.stringifyQuery(n)),
        r.toString()
      );
    }
    stringifyQuery(e) {
      return Object.entries(e)
        .filter(([n, r]) => typeof r < "u")
        .map(([n, r]) => {
          if (
            typeof r == "string" ||
            typeof r == "number" ||
            typeof r == "boolean"
          )
            return `${encodeURIComponent(n)}=${encodeURIComponent(r)}`;
          if (r === null) return `${encodeURIComponent(n)}=`;
          throw new oe(
            `Cannot stringify type ${typeof r}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
          );
        })
        .join("&");
    }
    async fetchWithTimeout(e, n, r, s) {
      const { signal: i, ...o } = n || {};
      i && i.addEventListener("abort", () => s.abort());
      const a = setTimeout(() => s.abort(), r);
      return this.getRequestClient()
        .fetch.call(void 0, e, { signal: s.signal, ...o })
        .finally(() => {
          clearTimeout(a);
        });
    }
    getRequestClient() {
      return { fetch: this.fetch };
    }
    shouldRetry(e) {
      const n = e.headers.get("x-should-retry");
      return n === "true"
        ? !0
        : n === "false"
          ? !1
          : e.status === 408 ||
            e.status === 409 ||
            e.status === 429 ||
            e.status >= 500;
    }
    async retryRequest(e, n, r) {
      let s;
      const i = r == null ? void 0 : r["retry-after-ms"];
      if (i) {
        const a = parseFloat(i);
        Number.isNaN(a) || (s = a);
      }
      const o = r == null ? void 0 : r["retry-after"];
      if (o && !s) {
        const a = parseFloat(o);
        Number.isNaN(a) ? (s = Date.parse(o) - Date.now()) : (s = a * 1e3);
      }
      if (!(s && 0 <= s && s < 6e4)) {
        const a = e.maxRetries ?? this.maxRetries;
        s = this.calculateDefaultRetryTimeoutMillis(n, a);
      }
      return await sP(s), this.makeRequest(e, n - 1);
    }
    calculateDefaultRetryTimeoutMillis(e, n) {
      const i = n - e,
        o = Math.min(0.5 * Math.pow(2, i), 8),
        a = 1 - Math.random() * 0.25;
      return o * a * 1e3;
    }
    getUserAgent() {
      return `${this.constructor.name}/JS ${ti}`;
    }
  }
  class ZT {
    constructor(e, n, r, s) {
      du.set(this, void 0),
        GT(this, du, e, "f"),
        (this.options = s),
        (this.response = n),
        (this.body = r);
    }
    hasNextPage() {
      return this.getPaginatedItems().length ? this.nextPageInfo() != null : !1;
    }
    async getNextPage() {
      const e = this.nextPageInfo();
      if (!e)
        throw new oe(
          "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.",
        );
      const n = { ...this.options };
      if ("params" in e && typeof n.query == "object")
        n.query = { ...n.query, ...e.params };
      else if ("url" in e) {
        const r = [
          ...Object.entries(n.query || {}),
          ...e.url.searchParams.entries(),
        ];
        for (const [s, i] of r) e.url.searchParams.set(s, i);
        (n.query = void 0), (n.path = e.url.toString());
      }
      return await qT(this, du, "f").requestAPIList(this.constructor, n);
    }
    async *iterPages() {
      let e = this;
      for (yield e; e.hasNextPage(); ) (e = await e.getNextPage()), yield e;
    }
    async *[((du = new WeakMap()), Symbol.asyncIterator)]() {
      for await (const e of this.iterPages())
        for (const n of e.getPaginatedItems()) yield n;
    }
  }
  class QT extends hu {
    constructor(e, n, r) {
      super(n, async (s) => new r(e, s.response, await R0(s), s.options));
    }
    async *[Symbol.asyncIterator]() {
      const e = await this;
      for await (const n of e) yield n;
    }
  }
  const N0 = (t) =>
      new Proxy(Object.fromEntries(t.entries()), {
        get(e, n) {
          const r = n.toString();
          return e[r.toLowerCase()] || e[r];
        },
      }),
    XT = {
      method: !0,
      path: !0,
      query: !0,
      body: !0,
      headers: !0,
      maxRetries: !0,
      stream: !0,
      timeout: !0,
      httpAgent: !0,
      signal: !0,
      idempotencyKey: !0,
      __binaryRequest: !0,
      __binaryResponse: !0,
      __streamClass: !0,
    },
    fu = (t) =>
      typeof t == "object" &&
      t !== null &&
      !pu(t) &&
      Object.keys(t).every((e) => I0(XT, e)),
    JT = () => {
      var e;
      if (typeof Deno < "u" && Deno.build != null)
        return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ti,
          "X-Stainless-OS": M0(Deno.build.os),
          "X-Stainless-Arch": O0(Deno.build.arch),
          "X-Stainless-Runtime": "deno",
          "X-Stainless-Runtime-Version":
            typeof Deno.version == "string"
              ? Deno.version
              : (((e = Deno.version) == null ? void 0 : e.deno) ?? "unknown"),
        };
      if (typeof EdgeRuntime < "u")
        return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ti,
          "X-Stainless-OS": "Unknown",
          "X-Stainless-Arch": `other:${EdgeRuntime}`,
          "X-Stainless-Runtime": "edge",
          "X-Stainless-Runtime-Version": process.version,
        };
      if (
        Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
        "[object process]"
      )
        return {
          "X-Stainless-Lang": "js",
          "X-Stainless-Package-Version": ti,
          "X-Stainless-OS": M0(process.platform),
          "X-Stainless-Arch": O0(process.arch),
          "X-Stainless-Runtime": "node",
          "X-Stainless-Runtime-Version": process.version,
        };
      const t = YT();
      return t
        ? {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": ti,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": `browser:${t.browser}`,
            "X-Stainless-Runtime-Version": t.version,
          }
        : {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": ti,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": "unknown",
            "X-Stainless-Runtime-Version": "unknown",
          };
    };
  function YT() {
    if (typeof navigator > "u" || !navigator) return null;
    const t = [
      { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      {
        key: "safari",
        pattern:
          /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
      },
    ];
    for (const { key: e, pattern: n } of t) {
      const r = n.exec(navigator.userAgent);
      if (r) {
        const s = r[1] || 0,
          i = r[2] || 0,
          o = r[3] || 0;
        return { browser: e, version: `${s}.${i}.${o}` };
      }
    }
    return null;
  }
  const O0 = (t) =>
      t === "x32"
        ? "x32"
        : t === "x86_64" || t === "x64"
          ? "x64"
          : t === "arm"
            ? "arm"
            : t === "aarch64" || t === "arm64"
              ? "arm64"
              : t
                ? `other:${t}`
                : "unknown",
    M0 = (t) => (
      (t = t.toLowerCase()),
      t.includes("ios")
        ? "iOS"
        : t === "android"
          ? "Android"
          : t === "darwin"
            ? "MacOS"
            : t === "win32"
              ? "Windows"
              : t === "freebsd"
                ? "FreeBSD"
                : t === "openbsd"
                  ? "OpenBSD"
                  : t === "linux"
                    ? "Linux"
                    : t
                      ? `Other:${t}`
                      : "Unknown"
    );
  let L0;
  const eP = () => L0 ?? (L0 = JT()),
    tP = (t) => {
      try {
        return JSON.parse(t);
      } catch {
        return;
      }
    },
    nP = new RegExp("^(?:[a-z]+:)?//", "i"),
    rP = (t) => nP.test(t),
    sP = (t) => new Promise((e) => setTimeout(e, t)),
    Zh = (t, e) => {
      if (typeof e != "number" || !Number.isInteger(e))
        throw new oe(`${t} must be an integer`);
      if (e < 0) throw new oe(`${t} must be a positive integer`);
      return e;
    },
    Qh = (t) => {
      if (t instanceof Error) return t;
      if (typeof t == "object" && t !== null)
        try {
          return new Error(JSON.stringify(t));
        } catch {}
      return new Error(String(t));
    },
    Xh = (t) => {
      var e, n, r, s, i;
      if (typeof process < "u")
        return (
          ((n = (e = process.env) == null ? void 0 : e[t]) == null
            ? void 0
            : n.trim()) ?? void 0
        );
      if (typeof Deno < "u")
        return (i =
          (s = (r = Deno.env) == null ? void 0 : r.get) == null
            ? void 0
            : s.call(r, t)) == null
          ? void 0
          : i.trim();
    };
  function pu(t) {
    if (!t) return !0;
    for (const e in t) return !1;
    return !0;
  }
  function I0(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function j0(t, e) {
    for (const n in e) {
      if (!I0(e, n)) continue;
      const r = n.toLowerCase();
      if (!r) continue;
      const s = e[n];
      s === null ? delete t[r] : s !== void 0 && (t[r] = s);
    }
  }
  function ni(t, ...e) {
    var n;
    typeof process < "u" &&
      ((n = process == null ? void 0 : process.env) == null
        ? void 0
        : n.DEBUG) === "true" &&
      console.log(`Anthropic:DEBUG:${t}`, ...e);
  }
  const iP = () =>
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const e = (Math.random() * 16) | 0;
        return (t === "x" ? e : (e & 3) | 8).toString(16);
      }),
    oP = () =>
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof navigator < "u",
    aP = (t) => typeof (t == null ? void 0 : t.get) == "function",
    D0 = (t, e) => {
      var r;
      const n = e.toLowerCase();
      if (aP(t)) {
        const s =
          ((r = e[0]) == null ? void 0 : r.toUpperCase()) +
          e
            .substring(1)
            .replace(/([^\w])(\w)/g, (i, o, a) => o + a.toUpperCase());
        for (const i of [e, n, e.toUpperCase(), s]) {
          const o = t.get(i);
          if (o) return o;
        }
      }
      for (const [s, i] of Object.entries(t))
        if (s.toLowerCase() === n)
          return Array.isArray(i)
            ? (i.length <= 1 ||
                console.warn(
                  `Received ${i.length} entries for the ${e} header, using the first entry.`,
                ),
              i[0])
            : i;
    };
  class lP extends ZT {
    constructor(e, n, r, s) {
      super(e, n, r, s),
        (this.data = r.data || []),
        (this.has_more = r.has_more || !1),
        (this.first_id = r.first_id || null),
        (this.last_id = r.last_id || null);
    }
    getPaginatedItems() {
      return this.data ?? [];
    }
    nextPageParams() {
      const e = this.nextPageInfo();
      if (!e) return null;
      if ("params" in e) return e.params;
      const n = Object.fromEntries(e.url.searchParams);
      return Object.keys(n).length ? n : null;
    }
    nextPageInfo() {
      var n;
      if ((n = this.options.query) != null && n.before_id) {
        const r = this.first_id;
        return r ? { params: { before_id: r } } : null;
      }
      const e = this.last_id;
      return e ? { params: { after_id: e } } : null;
    }
  }
  class ts {
    constructor(e) {
      this._client = e;
    }
  }
  class Jh {
    constructor(e, n) {
      (this.iterator = e), (this.controller = n);
    }
    async *decoder() {
      const e = new pr();
      for await (const n of this.iterator)
        for (const r of e.decode(n)) yield JSON.parse(r);
      for (const n of e.flush()) yield JSON.parse(n);
    }
    [Symbol.asyncIterator]() {
      return this.decoder();
    }
    static fromResponse(e, n) {
      if (!e.body)
        throw (
          (n.abort(),
          new oe("Attempted to iterate over a response with no body"))
        );
      return new Jh(qh(e.body), n);
    }
  }
  class Yh extends ts {
    create(e, n) {
      const { betas: r, ...s } = e;
      return this._client.post("/v1/messages/batches?beta=true", {
        body: s,
        ...n,
        headers: {
          "anthropic-beta": [
            ...(r ?? []),
            "message-batches-2024-09-24",
          ].toString(),
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    retrieve(e, n = {}, r) {
      if (fu(n)) return this.retrieve(e, {}, n);
      const { betas: s } = n;
      return this._client.get(`/v1/messages/batches/${e}?beta=true`, {
        ...r,
        headers: {
          "anthropic-beta": [
            ...(s ?? []),
            "message-batches-2024-09-24",
          ].toString(),
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    list(e = {}, n) {
      if (fu(e)) return this.list({}, e);
      const { betas: r, ...s } = e;
      return this._client.getAPIList("/v1/messages/batches?beta=true", ef, {
        query: s,
        ...n,
        headers: {
          "anthropic-beta": [
            ...(r ?? []),
            "message-batches-2024-09-24",
          ].toString(),
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
    cancel(e, n = {}, r) {
      if (fu(n)) return this.cancel(e, {}, n);
      const { betas: s } = n;
      return this._client.post(`/v1/messages/batches/${e}/cancel?beta=true`, {
        ...r,
        headers: {
          "anthropic-beta": [
            ...(s ?? []),
            "message-batches-2024-09-24",
          ].toString(),
          ...(r == null ? void 0 : r.headers),
        },
      });
    }
    async results(e, n = {}, r) {
      if (fu(n)) return this.results(e, {}, n);
      const s = await this.retrieve(e);
      if (!s.results_url)
        throw new oe(
          `No batch \`results_url\`; Has it finished processing? ${s.processing_status} - ${s.id}`,
        );
      const { betas: i } = n;
      return this._client
        .get(s.results_url, {
          ...r,
          headers: {
            "anthropic-beta": [
              ...(i ?? []),
              "message-batches-2024-09-24",
            ].toString(),
            ...(r == null ? void 0 : r.headers),
          },
          __binaryResponse: !0,
        })
        ._thenUnwrap((o, a) => Jh.fromResponse(a.response, a.controller));
    }
  }
  class ef extends lP {}
  Yh.BetaMessageBatchesPage = ef;
  let mu = class extends ts {
    constructor() {
      super(...arguments), (this.batches = new Yh(this._client));
    }
    create(e, n) {
      const { betas: r, ...s } = e;
      return this._client.post("/v1/messages?beta=true", {
        body: s,
        timeout: this._client._options.timeout ?? 6e5,
        ...n,
        headers: {
          ...((r == null ? void 0 : r.toString()) != null
            ? { "anthropic-beta": r == null ? void 0 : r.toString() }
            : void 0),
          ...(n == null ? void 0 : n.headers),
        },
        stream: e.stream ?? !1,
      });
    }
    countTokens(e, n) {
      const { betas: r, ...s } = e;
      return this._client.post("/v1/messages/count_tokens?beta=true", {
        body: s,
        ...n,
        headers: {
          "anthropic-beta": [
            ...(r ?? []),
            "token-counting-2024-11-01",
          ].toString(),
          ...(n == null ? void 0 : n.headers),
        },
      });
    }
  };
  (mu.Batches = Yh), (mu.BetaMessageBatchesPage = ef);
  const uP = (t) => {
      let e = 0,
        n = [];
      for (; e < t.length; ) {
        let r = t[e];
        if (r === "\\") {
          e++;
          continue;
        }
        if (r === "{") {
          n.push({ type: "brace", value: "{" }), e++;
          continue;
        }
        if (r === "}") {
          n.push({ type: "brace", value: "}" }), e++;
          continue;
        }
        if (r === "[") {
          n.push({ type: "paren", value: "[" }), e++;
          continue;
        }
        if (r === "]") {
          n.push({ type: "paren", value: "]" }), e++;
          continue;
        }
        if (r === ":") {
          n.push({ type: "separator", value: ":" }), e++;
          continue;
        }
        if (r === ",") {
          n.push({ type: "delimiter", value: "," }), e++;
          continue;
        }
        if (r === '"') {
          let a = "",
            l = !1;
          for (r = t[++e]; r !== '"'; ) {
            if (e === t.length) {
              l = !0;
              break;
            }
            if (r === "\\") {
              if ((e++, e === t.length)) {
                l = !0;
                break;
              }
              (a += r + t[e]), (r = t[++e]);
            } else (a += r), (r = t[++e]);
          }
          (r = t[++e]), l || n.push({ type: "string", value: a });
          continue;
        }
        if (r && /\s/.test(r)) {
          e++;
          continue;
        }
        let i = /[0-9]/;
        if ((r && i.test(r)) || r === "-" || r === ".") {
          let a = "";
          for (
            r === "-" && ((a += r), (r = t[++e]));
            (r && i.test(r)) || r === ".";

          )
            (a += r), (r = t[++e]);
          n.push({ type: "number", value: a });
          continue;
        }
        let o = /[a-z]/i;
        if (r && o.test(r)) {
          let a = "";
          for (; r && o.test(r) && e !== t.length; ) (a += r), (r = t[++e]);
          if (a == "true" || a == "false" || a === "null")
            n.push({ type: "name", value: a });
          else {
            e++;
            continue;
          }
          continue;
        }
        e++;
      }
      return n;
    },
    ri = (t) => {
      if (t.length === 0) return t;
      let e = t[t.length - 1];
      switch (e.type) {
        case "separator":
          return (t = t.slice(0, t.length - 1)), ri(t);
        case "number":
          let n = e.value[e.value.length - 1];
          if (n === "." || n === "-")
            return (t = t.slice(0, t.length - 1)), ri(t);
        case "string":
          let r = t[t.length - 2];
          if ((r == null ? void 0 : r.type) === "delimiter")
            return (t = t.slice(0, t.length - 1)), ri(t);
          if ((r == null ? void 0 : r.type) === "brace" && r.value === "{")
            return (t = t.slice(0, t.length - 1)), ri(t);
          break;
        case "delimiter":
          return (t = t.slice(0, t.length - 1)), ri(t);
      }
      return t;
    },
    cP = (t) => {
      let e = [];
      return (
        t.map((n) => {
          n.type === "brace" &&
            (n.value === "{" ? e.push("}") : e.splice(e.lastIndexOf("}"), 1)),
            n.type === "paren" &&
              (n.value === "[" ? e.push("]") : e.splice(e.lastIndexOf("]"), 1));
        }),
        e.length > 0 &&
          e.reverse().map((n) => {
            n === "}"
              ? t.push({ type: "brace", value: "}" })
              : n === "]" && t.push({ type: "paren", value: "]" });
          }),
        t
      );
    },
    dP = (t) => {
      let e = "";
      return (
        t.map((n) => {
          switch (n.type) {
            case "string":
              e += '"' + n.value + '"';
              break;
            default:
              e += n.value;
              break;
          }
        }),
        e
      );
    },
    $0 = (t) => JSON.parse(dP(cP(ri(uP(t)))));
  var pt = function (t, e, n, r, s) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !s : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it",
        );
      return r === "a" ? s.call(t, n) : s ? (s.value = n) : e.set(t, n), n;
    },
    ee = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it",
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    Ot,
    mr,
    gu,
    yu,
    qo,
    Ko,
    vu,
    Zo,
    Cn,
    Qo,
    wu,
    _u,
    si,
    tf,
    F0,
    nf,
    rf,
    sf,
    of,
    V0;
  const U0 = "__json_buf";
  class bu {
    constructor() {
      Ot.add(this),
        (this.messages = []),
        (this.receivedMessages = []),
        mr.set(this, void 0),
        (this.controller = new AbortController()),
        gu.set(this, void 0),
        yu.set(this, () => {}),
        qo.set(this, () => {}),
        Ko.set(this, void 0),
        vu.set(this, () => {}),
        Zo.set(this, () => {}),
        Cn.set(this, {}),
        Qo.set(this, !1),
        wu.set(this, !1),
        _u.set(this, !1),
        si.set(this, !1),
        nf.set(this, (e) => {
          if (
            (pt(this, wu, !0, "f"),
            e instanceof Error && e.name === "AbortError" && (e = new Xt()),
            e instanceof Xt)
          )
            return pt(this, _u, !0, "f"), this._emit("abort", e);
          if (e instanceof oe) return this._emit("error", e);
          if (e instanceof Error) {
            const n = new oe(e.message);
            return (n.cause = e), this._emit("error", n);
          }
          return this._emit("error", new oe(String(e)));
        }),
        pt(
          this,
          gu,
          new Promise((e, n) => {
            pt(this, yu, e, "f"), pt(this, qo, n, "f");
          }),
          "f",
        ),
        pt(
          this,
          Ko,
          new Promise((e, n) => {
            pt(this, vu, e, "f"), pt(this, Zo, n, "f");
          }),
          "f",
        ),
        ee(this, gu, "f").catch(() => {}),
        ee(this, Ko, "f").catch(() => {});
    }
    static fromReadableStream(e) {
      const n = new bu();
      return n._run(() => n._fromReadableStream(e)), n;
    }
    static createMessage(e, n, r) {
      const s = new bu();
      for (const i of n.messages) s._addPromptCachingBetaMessageParam(i);
      return (
        s._run(() =>
          s._createPromptCachingBetaMessage(
            e,
            { ...n, stream: !0 },
            {
              ...r,
              headers: {
                ...(r == null ? void 0 : r.headers),
                "X-Stainless-Helper-Method": "stream",
              },
            },
          ),
        ),
        s
      );
    }
    _run(e) {
      e().then(
        () => {
          this._emitFinal(), this._emit("end");
        },
        ee(this, nf, "f"),
      );
    }
    _addPromptCachingBetaMessageParam(e) {
      this.messages.push(e);
    }
    _addPromptCachingBetaMessage(e, n = !0) {
      this.receivedMessages.push(e), n && this._emit("message", e);
    }
    async _createPromptCachingBetaMessage(e, n, r) {
      var o;
      const s = r == null ? void 0 : r.signal;
      s &&
        (s.aborted && this.controller.abort(),
        s.addEventListener("abort", () => this.controller.abort())),
        ee(this, Ot, "m", rf).call(this);
      const i = await e.create(
        { ...n, stream: !0 },
        { ...r, signal: this.controller.signal },
      );
      this._connected();
      for await (const a of i) ee(this, Ot, "m", sf).call(this, a);
      if ((o = i.controller.signal) != null && o.aborted) throw new Xt();
      ee(this, Ot, "m", of).call(this);
    }
    _connected() {
      this.ended || (ee(this, yu, "f").call(this), this._emit("connect"));
    }
    get ended() {
      return ee(this, Qo, "f");
    }
    get errored() {
      return ee(this, wu, "f");
    }
    get aborted() {
      return ee(this, _u, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(e, n) {
      return (
        (ee(this, Cn, "f")[e] || (ee(this, Cn, "f")[e] = [])).push({
          listener: n,
        }),
        this
      );
    }
    off(e, n) {
      const r = ee(this, Cn, "f")[e];
      if (!r) return this;
      const s = r.findIndex((i) => i.listener === n);
      return s >= 0 && r.splice(s, 1), this;
    }
    once(e, n) {
      return (
        (ee(this, Cn, "f")[e] || (ee(this, Cn, "f")[e] = [])).push({
          listener: n,
          once: !0,
        }),
        this
      );
    }
    emitted(e) {
      return new Promise((n, r) => {
        pt(this, si, !0, "f"),
          e !== "error" && this.once("error", r),
          this.once(e, n);
      });
    }
    async done() {
      pt(this, si, !0, "f"), await ee(this, Ko, "f");
    }
    get currentMessage() {
      return ee(this, mr, "f");
    }
    async finalMessage() {
      return await this.done(), ee(this, Ot, "m", tf).call(this);
    }
    async finalText() {
      return await this.done(), ee(this, Ot, "m", F0).call(this);
    }
    _emit(e, ...n) {
      if (ee(this, Qo, "f")) return;
      e === "end" && (pt(this, Qo, !0, "f"), ee(this, vu, "f").call(this));
      const r = ee(this, Cn, "f")[e];
      if (
        (r &&
          ((ee(this, Cn, "f")[e] = r.filter((s) => !s.once)),
          r.forEach(({ listener: s }) => s(...n))),
        e === "abort")
      ) {
        const s = n[0];
        !ee(this, si, "f") && !(r != null && r.length) && Promise.reject(s),
          ee(this, qo, "f").call(this, s),
          ee(this, Zo, "f").call(this, s),
          this._emit("end");
        return;
      }
      if (e === "error") {
        const s = n[0];
        !ee(this, si, "f") && !(r != null && r.length) && Promise.reject(s),
          ee(this, qo, "f").call(this, s),
          ee(this, Zo, "f").call(this, s),
          this._emit("end");
      }
    }
    _emitFinal() {
      this.receivedMessages.at(-1) &&
        this._emit(
          "finalPromptCachingBetaMessage",
          ee(this, Ot, "m", tf).call(this),
        );
    }
    async _fromReadableStream(e, n) {
      var i;
      const r = n == null ? void 0 : n.signal;
      r &&
        (r.aborted && this.controller.abort(),
        r.addEventListener("abort", () => this.controller.abort())),
        ee(this, Ot, "m", rf).call(this),
        this._connected();
      const s = ln.fromReadableStream(e, this.controller);
      for await (const o of s) ee(this, Ot, "m", sf).call(this, o);
      if ((i = s.controller.signal) != null && i.aborted) throw new Xt();
      ee(this, Ot, "m", of).call(this);
    }
    [((mr = new WeakMap()),
    (gu = new WeakMap()),
    (yu = new WeakMap()),
    (qo = new WeakMap()),
    (Ko = new WeakMap()),
    (vu = new WeakMap()),
    (Zo = new WeakMap()),
    (Cn = new WeakMap()),
    (Qo = new WeakMap()),
    (wu = new WeakMap()),
    (_u = new WeakMap()),
    (si = new WeakMap()),
    (nf = new WeakMap()),
    (Ot = new WeakSet()),
    (tf = function () {
      if (this.receivedMessages.length === 0)
        throw new oe(
          "stream ended without producing a PromptCachingBetaMessage with role=assistant",
        );
      return this.receivedMessages.at(-1);
    }),
    (F0 = function () {
      if (this.receivedMessages.length === 0)
        throw new oe(
          "stream ended without producing a PromptCachingBetaMessage with role=assistant",
        );
      const n = this.receivedMessages
        .at(-1)
        .content.filter((r) => r.type === "text")
        .map((r) => r.text);
      if (n.length === 0)
        throw new oe(
          "stream ended without producing a content block with type=text",
        );
      return n.join(" ");
    }),
    (rf = function () {
      this.ended || pt(this, mr, void 0, "f");
    }),
    (sf = function (n) {
      if (this.ended) return;
      const r = ee(this, Ot, "m", V0).call(this, n);
      switch ((this._emit("streamEvent", n, r), n.type)) {
        case "content_block_delta": {
          const s = r.content.at(-1);
          n.delta.type === "text_delta" && s.type === "text"
            ? this._emit("text", n.delta.text, s.text || "")
            : n.delta.type === "input_json_delta" &&
              s.type === "tool_use" &&
              s.input &&
              this._emit("inputJson", n.delta.partial_json, s.input);
          break;
        }
        case "message_stop": {
          this._addPromptCachingBetaMessageParam(r),
            this._addPromptCachingBetaMessage(r, !0);
          break;
        }
        case "content_block_stop": {
          this._emit("contentBlock", r.content.at(-1));
          break;
        }
        case "message_start": {
          pt(this, mr, r, "f");
          break;
        }
      }
    }),
    (of = function () {
      if (this.ended) throw new oe("stream has ended, this shouldn't happen");
      const n = ee(this, mr, "f");
      if (!n) throw new oe("request ended without sending any chunks");
      return pt(this, mr, void 0, "f"), n;
    }),
    (V0 = function (n) {
      let r = ee(this, mr, "f");
      if (n.type === "message_start") {
        if (r)
          throw new oe(
            `Unexpected event order, got ${n.type} before receiving "message_stop"`,
          );
        return n.message;
      }
      if (!r)
        throw new oe(
          `Unexpected event order, got ${n.type} before "message_start"`,
        );
      switch (n.type) {
        case "message_stop":
          return r;
        case "message_delta":
          return (
            (r.stop_reason = n.delta.stop_reason),
            (r.stop_sequence = n.delta.stop_sequence),
            (r.usage.output_tokens = n.usage.output_tokens),
            r
          );
        case "content_block_start":
          return r.content.push(n.content_block), r;
        case "content_block_delta": {
          const s = r.content.at(n.index);
          if (
            (s == null ? void 0 : s.type) === "text" &&
            n.delta.type === "text_delta"
          )
            s.text += n.delta.text;
          else if (
            (s == null ? void 0 : s.type) === "tool_use" &&
            n.delta.type === "input_json_delta"
          ) {
            let i = s[U0] || "";
            (i += n.delta.partial_json),
              Object.defineProperty(s, U0, {
                value: i,
                enumerable: !1,
                writable: !0,
              }),
              i && (s.input = $0(i));
          }
          return r;
        }
        case "content_block_stop":
          return r;
      }
    }),
    Symbol.asyncIterator)]() {
      const e = [],
        n = [];
      let r = !1;
      return (
        this.on("streamEvent", (s) => {
          const i = n.shift();
          i ? i.resolve(s) : e.push(s);
        }),
        this.on("end", () => {
          r = !0;
          for (const s of n) s.resolve(void 0);
          n.length = 0;
        }),
        this.on("abort", (s) => {
          r = !0;
          for (const i of n) i.reject(s);
          n.length = 0;
        }),
        this.on("error", (s) => {
          r = !0;
          for (const i of n) i.reject(s);
          n.length = 0;
        }),
        {
          next: async () =>
            e.length
              ? { value: e.shift(), done: !1 }
              : r
                ? { value: void 0, done: !0 }
                : new Promise((i, o) => n.push({ resolve: i, reject: o })).then(
                    (i) =>
                      i ? { value: i, done: !1 } : { value: void 0, done: !0 },
                  ),
          return: async () => (this.abort(), { value: void 0, done: !0 }),
        }
      );
    }
    toReadableStream() {
      return new ln(
        this[Symbol.asyncIterator].bind(this),
        this.controller,
      ).toReadableStream();
    }
  }
  let B0 = class extends ts {
    create(e, n) {
      const { betas: r, ...s } = e;
      return this._client.post("/v1/messages?beta=prompt_caching", {
        body: s,
        timeout: this._client._options.timeout ?? 6e5,
        ...n,
        headers: {
          "anthropic-beta": [
            ...(r ?? []),
            "prompt-caching-2024-07-31",
          ].toString(),
          ...(n == null ? void 0 : n.headers),
        },
        stream: e.stream ?? !1,
      });
    }
    stream(e, n) {
      return bu.createMessage(this, e, n);
    }
  };
  class af extends ts {
    constructor() {
      super(...arguments), (this.messages = new B0(this._client));
    }
  }
  af.Messages = B0;
  class xu extends ts {
    constructor() {
      super(...arguments),
        (this.messages = new mu(this._client)),
        (this.promptCaching = new af(this._client));
    }
  }
  (xu.Messages = mu), (xu.PromptCaching = af);
  class z0 extends ts {
    create(e, n) {
      return this._client.post("/v1/complete", {
        body: e,
        timeout: this._client._options.timeout ?? 6e5,
        ...n,
        stream: e.stream ?? !1,
      });
    }
  }
  var mt = function (t, e, n, r, s) {
      if (r === "m") throw new TypeError("Private method is not writable");
      if (r === "a" && !s)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof e == "function" ? t !== e || !s : !e.has(t))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it",
        );
      return r === "a" ? s.call(t, n) : s ? (s.value = n) : e.set(t, n), n;
    },
    te = function (t, e, n, r) {
      if (n === "a" && !r)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof e == "function" ? t !== e || !r : !e.has(t))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it",
        );
      return n === "m" ? r : n === "a" ? r.call(t) : r ? r.value : e.get(t);
    },
    Mt,
    gr,
    Su,
    ku,
    Xo,
    Jo,
    Eu,
    Yo,
    Rn,
    ea,
    Au,
    Tu,
    ii,
    lf,
    W0,
    uf,
    cf,
    df,
    hf,
    H0;
  const G0 = "__json_buf";
  class Pu {
    constructor() {
      Mt.add(this),
        (this.messages = []),
        (this.receivedMessages = []),
        gr.set(this, void 0),
        (this.controller = new AbortController()),
        Su.set(this, void 0),
        ku.set(this, () => {}),
        Xo.set(this, () => {}),
        Jo.set(this, void 0),
        Eu.set(this, () => {}),
        Yo.set(this, () => {}),
        Rn.set(this, {}),
        ea.set(this, !1),
        Au.set(this, !1),
        Tu.set(this, !1),
        ii.set(this, !1),
        uf.set(this, (e) => {
          if (
            (mt(this, Au, !0, "f"),
            e instanceof Error && e.name === "AbortError" && (e = new Xt()),
            e instanceof Xt)
          )
            return mt(this, Tu, !0, "f"), this._emit("abort", e);
          if (e instanceof oe) return this._emit("error", e);
          if (e instanceof Error) {
            const n = new oe(e.message);
            return (n.cause = e), this._emit("error", n);
          }
          return this._emit("error", new oe(String(e)));
        }),
        mt(
          this,
          Su,
          new Promise((e, n) => {
            mt(this, ku, e, "f"), mt(this, Xo, n, "f");
          }),
          "f",
        ),
        mt(
          this,
          Jo,
          new Promise((e, n) => {
            mt(this, Eu, e, "f"), mt(this, Yo, n, "f");
          }),
          "f",
        ),
        te(this, Su, "f").catch(() => {}),
        te(this, Jo, "f").catch(() => {});
    }
    static fromReadableStream(e) {
      const n = new Pu();
      return n._run(() => n._fromReadableStream(e)), n;
    }
    static createMessage(e, n, r) {
      const s = new Pu();
      for (const i of n.messages) s._addMessageParam(i);
      return (
        s._run(() =>
          s._createMessage(
            e,
            { ...n, stream: !0 },
            {
              ...r,
              headers: {
                ...(r == null ? void 0 : r.headers),
                "X-Stainless-Helper-Method": "stream",
              },
            },
          ),
        ),
        s
      );
    }
    _run(e) {
      e().then(
        () => {
          this._emitFinal(), this._emit("end");
        },
        te(this, uf, "f"),
      );
    }
    _addMessageParam(e) {
      this.messages.push(e);
    }
    _addMessage(e, n = !0) {
      this.receivedMessages.push(e), n && this._emit("message", e);
    }
    async _createMessage(e, n, r) {
      var o;
      const s = r == null ? void 0 : r.signal;
      s &&
        (s.aborted && this.controller.abort(),
        s.addEventListener("abort", () => this.controller.abort())),
        te(this, Mt, "m", cf).call(this);
      const i = await e.create(
        { ...n, stream: !0 },
        { ...r, signal: this.controller.signal },
      );
      this._connected();
      for await (const a of i) te(this, Mt, "m", df).call(this, a);
      if ((o = i.controller.signal) != null && o.aborted) throw new Xt();
      te(this, Mt, "m", hf).call(this);
    }
    _connected() {
      this.ended || (te(this, ku, "f").call(this), this._emit("connect"));
    }
    get ended() {
      return te(this, ea, "f");
    }
    get errored() {
      return te(this, Au, "f");
    }
    get aborted() {
      return te(this, Tu, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(e, n) {
      return (
        (te(this, Rn, "f")[e] || (te(this, Rn, "f")[e] = [])).push({
          listener: n,
        }),
        this
      );
    }
    off(e, n) {
      const r = te(this, Rn, "f")[e];
      if (!r) return this;
      const s = r.findIndex((i) => i.listener === n);
      return s >= 0 && r.splice(s, 1), this;
    }
    once(e, n) {
      return (
        (te(this, Rn, "f")[e] || (te(this, Rn, "f")[e] = [])).push({
          listener: n,
          once: !0,
        }),
        this
      );
    }
    emitted(e) {
      return new Promise((n, r) => {
        mt(this, ii, !0, "f"),
          e !== "error" && this.once("error", r),
          this.once(e, n);
      });
    }
    async done() {
      mt(this, ii, !0, "f"), await te(this, Jo, "f");
    }
    get currentMessage() {
      return te(this, gr, "f");
    }
    async finalMessage() {
      return await this.done(), te(this, Mt, "m", lf).call(this);
    }
    async finalText() {
      return await this.done(), te(this, Mt, "m", W0).call(this);
    }
    _emit(e, ...n) {
      if (te(this, ea, "f")) return;
      e === "end" && (mt(this, ea, !0, "f"), te(this, Eu, "f").call(this));
      const r = te(this, Rn, "f")[e];
      if (
        (r &&
          ((te(this, Rn, "f")[e] = r.filter((s) => !s.once)),
          r.forEach(({ listener: s }) => s(...n))),
        e === "abort")
      ) {
        const s = n[0];
        !te(this, ii, "f") && !(r != null && r.length) && Promise.reject(s),
          te(this, Xo, "f").call(this, s),
          te(this, Yo, "f").call(this, s),
          this._emit("end");
        return;
      }
      if (e === "error") {
        const s = n[0];
        !te(this, ii, "f") && !(r != null && r.length) && Promise.reject(s),
          te(this, Xo, "f").call(this, s),
          te(this, Yo, "f").call(this, s),
          this._emit("end");
      }
    }
    _emitFinal() {
      this.receivedMessages.at(-1) &&
        this._emit("finalMessage", te(this, Mt, "m", lf).call(this));
    }
    async _fromReadableStream(e, n) {
      var i;
      const r = n == null ? void 0 : n.signal;
      r &&
        (r.aborted && this.controller.abort(),
        r.addEventListener("abort", () => this.controller.abort())),
        te(this, Mt, "m", cf).call(this),
        this._connected();
      const s = ln.fromReadableStream(e, this.controller);
      for await (const o of s) te(this, Mt, "m", df).call(this, o);
      if ((i = s.controller.signal) != null && i.aborted) throw new Xt();
      te(this, Mt, "m", hf).call(this);
    }
    [((gr = new WeakMap()),
    (Su = new WeakMap()),
    (ku = new WeakMap()),
    (Xo = new WeakMap()),
    (Jo = new WeakMap()),
    (Eu = new WeakMap()),
    (Yo = new WeakMap()),
    (Rn = new WeakMap()),
    (ea = new WeakMap()),
    (Au = new WeakMap()),
    (Tu = new WeakMap()),
    (ii = new WeakMap()),
    (uf = new WeakMap()),
    (Mt = new WeakSet()),
    (lf = function () {
      if (this.receivedMessages.length === 0)
        throw new oe(
          "stream ended without producing a Message with role=assistant",
        );
      return this.receivedMessages.at(-1);
    }),
    (W0 = function () {
      if (this.receivedMessages.length === 0)
        throw new oe(
          "stream ended without producing a Message with role=assistant",
        );
      const n = this.receivedMessages
        .at(-1)
        .content.filter((r) => r.type === "text")
        .map((r) => r.text);
      if (n.length === 0)
        throw new oe(
          "stream ended without producing a content block with type=text",
        );
      return n.join(" ");
    }),
    (cf = function () {
      this.ended || mt(this, gr, void 0, "f");
    }),
    (df = function (n) {
      if (this.ended) return;
      const r = te(this, Mt, "m", H0).call(this, n);
      switch ((this._emit("streamEvent", n, r), n.type)) {
        case "content_block_delta": {
          const s = r.content.at(-1);
          n.delta.type === "text_delta" && s.type === "text"
            ? this._emit("text", n.delta.text, s.text || "")
            : n.delta.type === "input_json_delta" &&
              s.type === "tool_use" &&
              s.input &&
              this._emit("inputJson", n.delta.partial_json, s.input);
          break;
        }
        case "message_stop": {
          this._addMessageParam(r), this._addMessage(r, !0);
          break;
        }
        case "content_block_stop": {
          this._emit("contentBlock", r.content.at(-1));
          break;
        }
        case "message_start": {
          mt(this, gr, r, "f");
          break;
        }
      }
    }),
    (hf = function () {
      if (this.ended) throw new oe("stream has ended, this shouldn't happen");
      const n = te(this, gr, "f");
      if (!n) throw new oe("request ended without sending any chunks");
      return mt(this, gr, void 0, "f"), n;
    }),
    (H0 = function (n) {
      let r = te(this, gr, "f");
      if (n.type === "message_start") {
        if (r)
          throw new oe(
            `Unexpected event order, got ${n.type} before receiving "message_stop"`,
          );
        return n.message;
      }
      if (!r)
        throw new oe(
          `Unexpected event order, got ${n.type} before "message_start"`,
        );
      switch (n.type) {
        case "message_stop":
          return r;
        case "message_delta":
          return (
            (r.stop_reason = n.delta.stop_reason),
            (r.stop_sequence = n.delta.stop_sequence),
            (r.usage.output_tokens = n.usage.output_tokens),
            r
          );
        case "content_block_start":
          return r.content.push(n.content_block), r;
        case "content_block_delta": {
          const s = r.content.at(n.index);
          if (
            (s == null ? void 0 : s.type) === "text" &&
            n.delta.type === "text_delta"
          )
            s.text += n.delta.text;
          else if (
            (s == null ? void 0 : s.type) === "tool_use" &&
            n.delta.type === "input_json_delta"
          ) {
            let i = s[G0] || "";
            (i += n.delta.partial_json),
              Object.defineProperty(s, G0, {
                value: i,
                enumerable: !1,
                writable: !0,
              }),
              i && (s.input = $0(i));
          }
          return r;
        }
        case "content_block_stop":
          return r;
      }
    }),
    Symbol.asyncIterator)]() {
      const e = [],
        n = [];
      let r = !1;
      return (
        this.on("streamEvent", (s) => {
          const i = n.shift();
          i ? i.resolve(s) : e.push(s);
        }),
        this.on("end", () => {
          r = !0;
          for (const s of n) s.resolve(void 0);
          n.length = 0;
        }),
        this.on("abort", (s) => {
          r = !0;
          for (const i of n) i.reject(s);
          n.length = 0;
        }),
        this.on("error", (s) => {
          r = !0;
          for (const i of n) i.reject(s);
          n.length = 0;
        }),
        {
          next: async () =>
            e.length
              ? { value: e.shift(), done: !1 }
              : r
                ? { value: void 0, done: !0 }
                : new Promise((i, o) => n.push({ resolve: i, reject: o })).then(
                    (i) =>
                      i ? { value: i, done: !1 } : { value: void 0, done: !0 },
                  ),
          return: async () => (this.abort(), { value: void 0, done: !0 }),
        }
      );
    }
    toReadableStream() {
      return new ln(
        this[Symbol.asyncIterator].bind(this),
        this.controller,
      ).toReadableStream();
    }
  }
  class q0 extends ts {
    create(e, n) {
      return (
        e.model in K0 &&
          console.warn(`The model '${e.model}' is deprecated and will reach end-of-life on ${K0[e.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),
        this._client.post("/v1/messages", {
          body: e,
          timeout: this._client._options.timeout ?? 6e5,
          ...n,
          stream: e.stream ?? !1,
        })
      );
    }
    stream(e, n) {
      return Pu.createMessage(this, e, n);
    }
  }
  const K0 = {
    "claude-1.3": "November 6th, 2024",
    "claude-1.3-100k": "November 6th, 2024",
    "claude-instant-1.1": "November 6th, 2024",
    "claude-instant-1.1-100k": "November 6th, 2024",
    "claude-instant-1.2": "November 6th, 2024",
  };
  var Z0;
  class ye extends KT {
    constructor({
      baseURL: e = Xh("ANTHROPIC_BASE_URL"),
      apiKey: n = Xh("ANTHROPIC_API_KEY") ?? null,
      authToken: r = Xh("ANTHROPIC_AUTH_TOKEN") ?? null,
      ...s
    } = {}) {
      const i = {
        apiKey: n,
        authToken: r,
        ...s,
        baseURL: e || "https://api.anthropic.com",
      };
      if (!i.dangerouslyAllowBrowser && oP())
        throw new oe(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

TODO: link!
`);
      super({
        baseURL: i.baseURL,
        timeout: i.timeout ?? 6e5,
        httpAgent: i.httpAgent,
        maxRetries: i.maxRetries,
        fetch: i.fetch,
      }),
        (this.completions = new z0(this)),
        (this.messages = new q0(this)),
        (this.beta = new xu(this)),
        (this._options = i),
        (this.apiKey = n),
        (this.authToken = r);
    }
    defaultQuery() {
      return this._options.defaultQuery;
    }
    defaultHeaders(e) {
      return {
        ...super.defaultHeaders(e),
        ...(this._options.dangerouslyAllowBrowser
          ? { "anthropic-dangerous-direct-browser-access": "true" }
          : void 0),
        "anthropic-version": "2023-06-01",
        ...this._options.defaultHeaders,
      };
    }
    validateHeaders(e, n) {
      if (
        !(this.apiKey && e["x-api-key"]) &&
        n["x-api-key"] !== null &&
        !(this.authToken && e.authorization) &&
        n.authorization !== null
      )
        throw new Error(
          'Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted',
        );
    }
    authHeaders(e) {
      const n = this.apiKeyAuth(e),
        r = this.bearerAuth(e);
      return n != null && !pu(n) ? n : r != null && !pu(r) ? r : {};
    }
    apiKeyAuth(e) {
      return this.apiKey == null ? {} : { "X-Api-Key": this.apiKey };
    }
    bearerAuth(e) {
      return this.authToken == null
        ? {}
        : { Authorization: `Bearer ${this.authToken}` };
    }
  }
  (Z0 = ye),
    (ye.Anthropic = Z0),
    (ye.HUMAN_PROMPT = `

Human:`),
    (ye.AI_PROMPT = `

Assistant:`),
    (ye.DEFAULT_TIMEOUT = 6e5),
    (ye.AnthropicError = oe),
    (ye.APIError = Ke),
    (ye.APIConnectionError = uu),
    (ye.APIConnectionTimeoutError = _0),
    (ye.APIUserAbortError = Xt),
    (ye.NotFoundError = k0),
    (ye.ConflictError = E0),
    (ye.RateLimitError = T0),
    (ye.BadRequestError = b0),
    (ye.AuthenticationError = x0),
    (ye.InternalServerError = P0),
    (ye.PermissionDeniedError = S0),
    (ye.UnprocessableEntityError = A0),
    (ye.toFile = UT),
    (ye.fileFromPath = w0);
  const { HUMAN_PROMPT: UL, AI_PROMPT: BL } = ye;
  (ye.Completions = z0), (ye.Messages = q0), (ye.Beta = xu);
  function hP(t) {
    return fP(t.text);
  }
  function fP(t) {
    let e = t;
    return (
      (e[0] === '"' || e[0] === "'") && (e = e.slice(1)),
      (e[e.length - 1] === '"' || e[e.length - 1] === "'") &&
        (e = e.slice(0, -1)),
      e
    );
  }
  async function ff(t) {
    try {
      const { apiKey: e } = await Lp.storage.sync.get("apiKey");
      if (!e) throw new Error("Claude API key not found");
      Oe.info("Invoking Claude API");
      const r = await new ye({
        apiKey: e.toString(),
        dangerouslyAllowBrowser: !0,
      }).messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: t }],
      });
      return hP(r.content[0]);
    } catch (e) {
      throw (Oe.error(`Claude API error: ${e}`), e);
    }
  }
  const pP = async (t = 1) => {
      const e = await p0("users", { id: t });
      if (!e || e.length < 1 || e.length > 1)
        throw new Error("Invalid user data");
      const n = e[0];
      return {
        name: n.name,
        date_of_birth: n.date_of_birth,
        gender: n.gender,
        email: n.email,
        phone: n.phone,
        location: n.location,
        nationality: n.nationality,
        languages: n.languages,
        health_conditions: n.health_conditions,
        fitness_goals: n.fitness_goals,
        sleep_hours: n.sleep_hours,
        occupation: n.occupation,
        industry: n.industry,
        skills: n.skills,
        hobbies: n.hobbies,
        food: n.food,
        goals: n.goals,
        allergies: n.allergies,
      };
    },
    mP = `Look at the user's webpage history by an user and find if there are visual patterns 
about the user's intents and behaviors. You should only return a JSON with keys 'relevant' and 'url'. The word 
count should be less than 25 words:

URLs and content: {context}

Identify patterns and return a JSON with:
{
  "relevant": boolean, 
  "url": string, 
}

the 'url' in the output should be one of the URLs in the context.

Focus on finding meaningful patterns like:
- Common subject matter or themes
- Similar types of activities (shopping, learning, research)
- Technical topics or documentation
- Content format patterns (tutorials, product pages, documentation)

GOOD RESPONSE:
If an user has been browsing a lot of jobs sites, it means they could be looking for a job. 
So that's a pattern worth remembering. In this case, is_relevant would be true.

If no clear pattern exists, set is_relevant to false.`;
  async function gP() {
    try {
      const [t, e] = await Promise.all([
        p0("webpages", { is_analyzed: !1 }),
        pP(),
      ]);
      if (t.length < 10) return;
      if (!t.length) {
        Oe.info("No new pages to analyze");
        return;
      }
      const n = mP.replace(
          "{context}",
          t.map((s) => s.url).join(`
`),
        ),
        r = await ff(n);
      return (
        await Promise.all(
          t.map((s) =>
            RT("webpages", { id: s.id }, { response: r, is_analyzed: !0 }),
          ),
        ),
        Oe.info(`Analyzed ${t.length} new pages`),
        console.log("long term memory analysis", r),
        r
      );
    } catch (t) {
      throw (Oe.error(`Page analysis failed: ${t}`), t);
    }
  }
  function Q0(t) {
    return t.map(
      (e) => `URL: ${e.url}
Response: ${e.textContent}`,
    ).join(`

`);
  }
  const yP = `Given a webpage with:
- URL: {url}
- Current web page text content: {textContent}

- History of previous web pages: {history}

Your task is to identify what is the objective of the user, and help the user achieve their objective in 
the most efficient and concise way possible. Try to understand the user's intent and provide a really concise (15 words or less) response.

- User details: {user_details}


<GOOD RESPONSES>
- "There's a Ramen restaurant nearby  which you might like"
- "This link seems to have all the info."

Above are good responses because they are concise and direct.

<BAD RESPONSES>
bad responses: 
"Based on the URL and text content, the user is looking for information about "swimming lessons" - this appears to be a search query on Google.

This can be determined from:
1. The search query parameter in the URL (q=swimming)
2. The swimming related terms in the page content"
</BAD RESPONSES>
Above is a bad response because it is contains a lot of redundant information like reasoning, a good reponse would be "I am looking for swimming lessons"
`;
  async function vP(t) {
    try {
      Oe.info("Invoke request initiated"), Oe.info(t.pageState.textContent);
      const e = {
        url: t.pageState.url,
        page_data: t.pageState.textContent,
        base64_image: t.pageState.screenshot,
        response: null,
        session_id: 1,
      };
      await CT("webpages", [e]);
      const n = await Cp(),
        r = Q0(n),
        s = yP
          .replace("{url}", t.pageState.url)
          .replace("{textContent}", t.pageState.textContent)
          .replace("{history}", r);
      return { response: await ff(s) };
    } catch (e) {
      throw (Oe.error(`Invoke error: ${e}`), e);
    }
  }
  const ta = Ae.enum(["user", "assistant"]);
  Ae.object({ role: ta, content: Ae.string() });
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const wP = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    X0 = (...t) =>
      t
        .filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n)
        .join(" ")
        .trim();
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var _P = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const bP = C.forwardRef(
    (
      {
        color: t = "currentColor",
        size: e = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: s = "",
        children: i,
        iconNode: o,
        ...a
      },
      l,
    ) =>
      C.createElement(
        "svg",
        {
          ref: l,
          ..._P,
          width: e,
          height: e,
          stroke: t,
          strokeWidth: r ? (Number(n) * 24) / Number(e) : n,
          className: X0("lucide", s),
          ...a,
        },
        [
          ...o.map(([u, c]) => C.createElement(u, c)),
          ...(Array.isArray(i) ? i : [i]),
        ],
      ),
  );
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const na = (t, e) => {
    const n = C.forwardRef(({ className: r, ...s }, i) =>
      C.createElement(bP, {
        ref: i,
        iconNode: e,
        className: X0(`lucide-${wP(t)}`, r),
        ...s,
      }),
    );
    return (n.displayName = `${t}`), n;
  };
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const J0 = na("Eye", [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]);
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const xP = na("Pause", [
    [
      "rect",
      { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
    ],
    [
      "rect",
      { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
    ],
  ]);
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const SP = na("Play", [
    ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
  ]);
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const kP = na("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]);
  /**
   * @license lucide-react v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const EP = na("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]);
  function AP(t, e) {
    typeof t == "function" ? t(e) : t != null && (t.current = e);
  }
  function TP(...t) {
    return (e) => t.forEach((n) => AP(n, e));
  }
  var pf = C.forwardRef((t, e) => {
    const { children: n, ...r } = t,
      s = C.Children.toArray(n),
      i = s.find(CP);
    if (i) {
      const o = i.props.children,
        a = s.map((l) =>
          l === i
            ? C.Children.count(o) > 1
              ? C.Children.only(null)
              : C.isValidElement(o)
                ? o.props.children
                : null
            : l,
        );
      return D.jsx(mf, {
        ...r,
        ref: e,
        children: C.isValidElement(o) ? C.cloneElement(o, void 0, a) : null,
      });
    }
    return D.jsx(mf, { ...r, ref: e, children: n });
  });
  pf.displayName = "Slot";
  var mf = C.forwardRef((t, e) => {
    const { children: n, ...r } = t;
    if (C.isValidElement(n)) {
      const s = NP(n);
      return C.cloneElement(n, { ...RP(r, n.props), ref: e ? TP(e, s) : s });
    }
    return C.Children.count(n) > 1 ? C.Children.only(null) : null;
  });
  mf.displayName = "SlotClone";
  var PP = ({ children: t }) => D.jsx(D.Fragment, { children: t });
  function CP(t) {
    return C.isValidElement(t) && t.type === PP;
  }
  function RP(t, e) {
    const n = { ...e };
    for (const r in e) {
      const s = t[r],
        i = e[r];
      /^on[A-Z]/.test(r)
        ? s && i
          ? (n[r] = (...a) => {
              i(...a), s(...a);
            })
          : s && (n[r] = s)
        : r === "style"
          ? (n[r] = { ...s, ...i })
          : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
    }
    return { ...t, ...n };
  }
  function NP(t) {
    var r, s;
    let e =
        (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
          ? void 0
          : r.get,
      n = e && "isReactWarning" in e && e.isReactWarning;
    return n
      ? t.ref
      : ((e =
          (s = Object.getOwnPropertyDescriptor(t, "ref")) == null
            ? void 0
            : s.get),
        (n = e && "isReactWarning" in e && e.isReactWarning),
        n ? t.props.ref : t.props.ref || t.ref);
  }
  function Y0(t) {
    var e,
      n,
      r = "";
    if (typeof t == "string" || typeof t == "number") r += t;
    else if (typeof t == "object")
      if (Array.isArray(t))
        for (e = 0; e < t.length; e++)
          t[e] && (n = Y0(t[e])) && (r && (r += " "), (r += n));
      else for (e in t) t[e] && (r && (r += " "), (r += e));
    return r;
  }
  function OP() {
    for (var t, e, n = 0, r = ""; n < arguments.length; )
      (t = arguments[n++]) && (e = Y0(t)) && (r && (r += " "), (r += e));
    return r;
  }
  const ew = (t) => (typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t),
    tw = OP,
    nw = (t, e) => (n) => {
      var r;
      if ((e == null ? void 0 : e.variants) == null)
        return tw(
          t,
          n == null ? void 0 : n.class,
          n == null ? void 0 : n.className,
        );
      const { variants: s, defaultVariants: i } = e,
        o = Object.keys(s).map((u) => {
          const c = n == null ? void 0 : n[u],
            d = i == null ? void 0 : i[u];
          if (c === null) return null;
          const h = ew(c) || ew(d);
          return s[u][h];
        }),
        a =
          n &&
          Object.entries(n).reduce((u, c) => {
            let [d, h] = c;
            return h === void 0 || (u[d] = h), u;
          }, {}),
        l =
          e == null || (r = e.compoundVariants) === null || r === void 0
            ? void 0
            : r.reduce((u, c) => {
                let { class: d, className: h, ...p } = c;
                return Object.entries(p).every((v) => {
                  let [g, w] = v;
                  return Array.isArray(w)
                    ? w.includes({ ...i, ...a }[g])
                    : { ...i, ...a }[g] === w;
                })
                  ? [...u, d, h]
                  : u;
              }, []);
      return tw(
        t,
        o,
        l,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    };
  function rw(t) {
    var e,
      n,
      r = "";
    if (typeof t == "string" || typeof t == "number") r += t;
    else if (typeof t == "object")
      if (Array.isArray(t)) {
        var s = t.length;
        for (e = 0; e < s; e++)
          t[e] && (n = rw(t[e])) && (r && (r += " "), (r += n));
      } else for (n in t) t[n] && (r && (r += " "), (r += n));
    return r;
  }
  function MP() {
    for (var t, e, n = 0, r = "", s = arguments.length; n < s; n++)
      (t = arguments[n]) && (e = rw(t)) && (r && (r += " "), (r += e));
    return r;
  }
  const gf = "-",
    LP = (t) => {
      const e = jP(t),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = t;
      return {
        getClassGroupId: (o) => {
          const a = o.split(gf);
          return a[0] === "" && a.length !== 1 && a.shift(), sw(a, e) || IP(o);
        },
        getConflictingClassGroupIds: (o, a) => {
          const l = n[o] || [];
          return a && r[o] ? [...l, ...r[o]] : l;
        },
      };
    },
    sw = (t, e) => {
      var o;
      if (t.length === 0) return e.classGroupId;
      const n = t[0],
        r = e.nextPart.get(n),
        s = r ? sw(t.slice(1), r) : void 0;
      if (s) return s;
      if (e.validators.length === 0) return;
      const i = t.join(gf);
      return (o = e.validators.find(({ validator: a }) => a(i))) == null
        ? void 0
        : o.classGroupId;
    },
    iw = /^\[(.+)\]$/,
    IP = (t) => {
      if (iw.test(t)) {
        const e = iw.exec(t)[1],
          n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    jP = (t) => {
      const { theme: e, prefix: n } = t,
        r = { nextPart: new Map(), validators: [] };
      return (
        $P(Object.entries(t.classGroups), n).forEach(([i, o]) => {
          yf(o, r, i, e);
        }),
        r
      );
    },
    yf = (t, e, n, r) => {
      t.forEach((s) => {
        if (typeof s == "string") {
          const i = s === "" ? e : ow(e, s);
          i.classGroupId = n;
          return;
        }
        if (typeof s == "function") {
          if (DP(s)) {
            yf(s(r), e, n, r);
            return;
          }
          e.validators.push({ validator: s, classGroupId: n });
          return;
        }
        Object.entries(s).forEach(([i, o]) => {
          yf(o, ow(e, i), n, r);
        });
      });
    },
    ow = (t, e) => {
      let n = t;
      return (
        e.split(gf).forEach((r) => {
          n.nextPart.has(r) ||
            n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(r));
        }),
        n
      );
    },
    DP = (t) => t.isThemeGetter,
    $P = (t, e) =>
      e
        ? t.map(([n, r]) => {
            const s = r.map((i) =>
              typeof i == "string"
                ? e + i
                : typeof i == "object"
                  ? Object.fromEntries(
                      Object.entries(i).map(([o, a]) => [e + o, a]),
                    )
                  : i,
            );
            return [n, s];
          })
        : t,
    FP = (t) => {
      if (t < 1) return { get: () => {}, set: () => {} };
      let e = 0,
        n = new Map(),
        r = new Map();
      const s = (i, o) => {
        n.set(i, o), e++, e > t && ((e = 0), (r = n), (n = new Map()));
      };
      return {
        get(i) {
          let o = n.get(i);
          if (o !== void 0) return o;
          if ((o = r.get(i)) !== void 0) return s(i, o), o;
        },
        set(i, o) {
          n.has(i) ? n.set(i, o) : s(i, o);
        },
      };
    },
    aw = "!",
    VP = (t) => {
      const { separator: e, experimentalParseClassName: n } = t,
        r = e.length === 1,
        s = e[0],
        i = e.length,
        o = (a) => {
          const l = [];
          let u = 0,
            c = 0,
            d;
          for (let w = 0; w < a.length; w++) {
            let m = a[w];
            if (u === 0) {
              if (m === s && (r || a.slice(w, w + i) === e)) {
                l.push(a.slice(c, w)), (c = w + i);
                continue;
              }
              if (m === "/") {
                d = w;
                continue;
              }
            }
            m === "[" ? u++ : m === "]" && u--;
          }
          const h = l.length === 0 ? a : a.substring(c),
            p = h.startsWith(aw),
            v = p ? h.substring(1) : h,
            g = d && d > c ? d - c : void 0;
          return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: v,
            maybePostfixModifierPosition: g,
          };
        };
      return n ? (a) => n({ className: a, parseClassName: o }) : o;
    },
    UP = (t) => {
      if (t.length <= 1) return t;
      const e = [];
      let n = [];
      return (
        t.forEach((r) => {
          r[0] === "[" ? (e.push(...n.sort(), r), (n = [])) : n.push(r);
        }),
        e.push(...n.sort()),
        e
      );
    },
    BP = (t) => ({ cache: FP(t.cacheSize), parseClassName: VP(t), ...LP(t) }),
    zP = /\s+/,
    WP = (t, e) => {
      const {
          parseClassName: n,
          getClassGroupId: r,
          getConflictingClassGroupIds: s,
        } = e,
        i = [],
        o = t.trim().split(zP);
      let a = "";
      for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l],
          {
            modifiers: c,
            hasImportantModifier: d,
            baseClassName: h,
            maybePostfixModifierPosition: p,
          } = n(u);
        let v = !!p,
          g = r(v ? h.substring(0, p) : h);
        if (!g) {
          if (!v) {
            a = u + (a.length > 0 ? " " + a : a);
            continue;
          }
          if (((g = r(h)), !g)) {
            a = u + (a.length > 0 ? " " + a : a);
            continue;
          }
          v = !1;
        }
        const w = UP(c).join(":"),
          m = d ? w + aw : w,
          f = m + g;
        if (i.includes(f)) continue;
        i.push(f);
        const y = s(g, v);
        for (let _ = 0; _ < y.length; ++_) {
          const S = y[_];
          i.push(m + S);
        }
        a = u + (a.length > 0 ? " " + a : a);
      }
      return a;
    };
  function HP() {
    let t = 0,
      e,
      n,
      r = "";
    for (; t < arguments.length; )
      (e = arguments[t++]) && (n = lw(e)) && (r && (r += " "), (r += n));
    return r;
  }
  const lw = (t) => {
    if (typeof t == "string") return t;
    let e,
      n = "";
    for (let r = 0; r < t.length; r++)
      t[r] && (e = lw(t[r])) && (n && (n += " "), (n += e));
    return n;
  };
  function GP(t, ...e) {
    let n,
      r,
      s,
      i = o;
    function o(l) {
      const u = e.reduce((c, d) => d(c), t());
      return (n = BP(u)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l);
    }
    function a(l) {
      const u = r(l);
      if (u) return u;
      const c = WP(l, n);
      return s(l, c), c;
    }
    return function () {
      return i(HP.apply(null, arguments));
    };
  }
  const ve = (t) => {
      const e = (n) => n[t] || [];
      return (e.isThemeGetter = !0), e;
    },
    uw = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    qP = /^\d+\/\d+$/,
    KP = new Set(["px", "full", "screen"]),
    ZP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    QP =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    XP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    JP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    YP =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Nn = (t) => oi(t) || KP.has(t) || qP.test(t),
    yr = (t) => ai(t, "length", aC),
    oi = (t) => !!t && !Number.isNaN(Number(t)),
    vf = (t) => ai(t, "number", oi),
    ra = (t) => !!t && Number.isInteger(Number(t)),
    eC = (t) => t.endsWith("%") && oi(t.slice(0, -1)),
    G = (t) => uw.test(t),
    vr = (t) => ZP.test(t),
    tC = new Set(["length", "size", "percentage"]),
    nC = (t) => ai(t, tC, cw),
    rC = (t) => ai(t, "position", cw),
    sC = new Set(["image", "url"]),
    iC = (t) => ai(t, sC, uC),
    oC = (t) => ai(t, "", lC),
    sa = () => !0,
    ai = (t, e, n) => {
      const r = uw.exec(t);
      return r
        ? r[1]
          ? typeof e == "string"
            ? r[1] === e
            : e.has(r[1])
          : n(r[2])
        : !1;
    },
    aC = (t) => QP.test(t) && !XP.test(t),
    cw = () => !1,
    lC = (t) => JP.test(t),
    uC = (t) => YP.test(t),
    cC = GP(() => {
      const t = ve("colors"),
        e = ve("spacing"),
        n = ve("blur"),
        r = ve("brightness"),
        s = ve("borderColor"),
        i = ve("borderRadius"),
        o = ve("borderSpacing"),
        a = ve("borderWidth"),
        l = ve("contrast"),
        u = ve("grayscale"),
        c = ve("hueRotate"),
        d = ve("invert"),
        h = ve("gap"),
        p = ve("gradientColorStops"),
        v = ve("gradientColorStopPositions"),
        g = ve("inset"),
        w = ve("margin"),
        m = ve("opacity"),
        f = ve("padding"),
        y = ve("saturate"),
        _ = ve("scale"),
        S = ve("sepia"),
        b = ve("skew"),
        k = ve("space"),
        x = ve("translate"),
        R = () => ["auto", "contain", "none"],
        N = () => ["auto", "hidden", "clip", "visible", "scroll"],
        Z = () => ["auto", G, e],
        F = () => [G, e],
        V = () => ["", Nn, yr],
        de = () => ["auto", oi, G],
        pe = () => [
          "bottom",
          "center",
          "left",
          "left-bottom",
          "left-top",
          "right",
          "right-bottom",
          "right-top",
          "top",
        ],
        Ie = () => ["solid", "dashed", "dotted", "double", "none"],
        W = () => [
          "normal",
          "multiply",
          "screen",
          "overlay",
          "darken",
          "lighten",
          "color-dodge",
          "color-burn",
          "hard-light",
          "soft-light",
          "difference",
          "exclusion",
          "hue",
          "saturation",
          "color",
          "luminosity",
        ],
        P = () => [
          "start",
          "end",
          "center",
          "between",
          "around",
          "evenly",
          "stretch",
        ],
        I = () => ["", "0", G],
        U = () => [
          "auto",
          "avoid",
          "all",
          "avoid-page",
          "page",
          "left",
          "right",
          "column",
        ],
        se = () => [oi, G];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [sa],
          spacing: [Nn, yr],
          blur: ["none", "", vr, G],
          brightness: se(),
          borderColor: [t],
          borderRadius: ["none", "", "full", vr, G],
          borderSpacing: F(),
          borderWidth: V(),
          contrast: se(),
          grayscale: I(),
          hueRotate: se(),
          invert: I(),
          gap: F(),
          gradientColorStops: [t],
          gradientColorStopPositions: [eC, yr],
          inset: Z(),
          margin: Z(),
          opacity: se(),
          padding: F(),
          saturate: se(),
          scale: se(),
          sepia: I(),
          skew: se(),
          space: F(),
          translate: F(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", G] }],
          container: ["container"],
          columns: [{ columns: [vr] }],
          "break-after": [{ "break-after": U() }],
          "break-before": [{ "break-before": U() }],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [{ object: [...pe(), G] }],
          overflow: [{ overflow: N() }],
          "overflow-x": [{ "overflow-x": N() }],
          "overflow-y": [{ "overflow-y": N() }],
          overscroll: [{ overscroll: R() }],
          "overscroll-x": [{ "overscroll-x": R() }],
          "overscroll-y": [{ "overscroll-y": R() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [g] }],
          "inset-x": [{ "inset-x": [g] }],
          "inset-y": [{ "inset-y": [g] }],
          start: [{ start: [g] }],
          end: [{ end: [g] }],
          top: [{ top: [g] }],
          right: [{ right: [g] }],
          bottom: [{ bottom: [g] }],
          left: [{ left: [g] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", ra, G] }],
          basis: [{ basis: Z() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", G] }],
          grow: [{ grow: I() }],
          shrink: [{ shrink: I() }],
          order: [{ order: ["first", "last", "none", ra, G] }],
          "grid-cols": [{ "grid-cols": [sa] }],
          "col-start-end": [{ col: ["auto", { span: ["full", ra, G] }, G] }],
          "col-start": [{ "col-start": de() }],
          "col-end": [{ "col-end": de() }],
          "grid-rows": [{ "grid-rows": [sa] }],
          "row-start-end": [{ row: ["auto", { span: [ra, G] }, G] }],
          "row-start": [{ "row-start": de() }],
          "row-end": [{ "row-end": de() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
          gap: [{ gap: [h] }],
          "gap-x": [{ "gap-x": [h] }],
          "gap-y": [{ "gap-y": [h] }],
          "justify-content": [{ justify: ["normal", ...P()] }],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [{ content: ["normal", ...P(), "baseline"] }],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [{ "place-content": [...P(), "baseline"] }],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [f] }],
          px: [{ px: [f] }],
          py: [{ py: [f] }],
          ps: [{ ps: [f] }],
          pe: [{ pe: [f] }],
          pt: [{ pt: [f] }],
          pr: [{ pr: [f] }],
          pb: [{ pb: [f] }],
          pl: [{ pl: [f] }],
          m: [{ m: [w] }],
          mx: [{ mx: [w] }],
          my: [{ my: [w] }],
          ms: [{ ms: [w] }],
          me: [{ me: [w] }],
          mt: [{ mt: [w] }],
          mr: [{ mr: [w] }],
          mb: [{ mb: [w] }],
          ml: [{ ml: [w] }],
          "space-x": [{ "space-x": [k] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [k] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, e] }],
          "min-w": [{ "min-w": [G, e, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                G,
                e,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [vr] },
                vr,
              ],
            },
          ],
          h: [{ h: [G, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [G, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [G, e, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", vr, yr] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                vf,
              ],
            },
          ],
          "font-family": [{ font: [sa] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                G,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", oi, vf] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                Nn,
                G,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", G] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [t] }],
          "placeholder-opacity": [{ "placeholder-opacity": [m] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [t] }],
          "text-opacity": [{ "text-opacity": [m] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [{ decoration: [...Ie(), "wavy"] }],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", Nn, yr] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", Nn, G] }],
          "text-decoration-color": [{ decoration: [t] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: F() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                G,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", G] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [m] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [...pe(), rC] }],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", nC] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                iC,
              ],
            },
          ],
          "bg-color": [{ bg: [t] }],
          "gradient-from-pos": [{ from: [v] }],
          "gradient-via-pos": [{ via: [v] }],
          "gradient-to-pos": [{ to: [v] }],
          "gradient-from": [{ from: [p] }],
          "gradient-via": [{ via: [p] }],
          "gradient-to": [{ to: [p] }],
          rounded: [{ rounded: [i] }],
          "rounded-s": [{ "rounded-s": [i] }],
          "rounded-e": [{ "rounded-e": [i] }],
          "rounded-t": [{ "rounded-t": [i] }],
          "rounded-r": [{ "rounded-r": [i] }],
          "rounded-b": [{ "rounded-b": [i] }],
          "rounded-l": [{ "rounded-l": [i] }],
          "rounded-ss": [{ "rounded-ss": [i] }],
          "rounded-se": [{ "rounded-se": [i] }],
          "rounded-ee": [{ "rounded-ee": [i] }],
          "rounded-es": [{ "rounded-es": [i] }],
          "rounded-tl": [{ "rounded-tl": [i] }],
          "rounded-tr": [{ "rounded-tr": [i] }],
          "rounded-br": [{ "rounded-br": [i] }],
          "rounded-bl": [{ "rounded-bl": [i] }],
          "border-w": [{ border: [a] }],
          "border-w-x": [{ "border-x": [a] }],
          "border-w-y": [{ "border-y": [a] }],
          "border-w-s": [{ "border-s": [a] }],
          "border-w-e": [{ "border-e": [a] }],
          "border-w-t": [{ "border-t": [a] }],
          "border-w-r": [{ "border-r": [a] }],
          "border-w-b": [{ "border-b": [a] }],
          "border-w-l": [{ "border-l": [a] }],
          "border-opacity": [{ "border-opacity": [m] }],
          "border-style": [{ border: [...Ie(), "hidden"] }],
          "divide-x": [{ "divide-x": [a] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [a] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [m] }],
          "divide-style": [{ divide: Ie() }],
          "border-color": [{ border: [s] }],
          "border-color-x": [{ "border-x": [s] }],
          "border-color-y": [{ "border-y": [s] }],
          "border-color-s": [{ "border-s": [s] }],
          "border-color-e": [{ "border-e": [s] }],
          "border-color-t": [{ "border-t": [s] }],
          "border-color-r": [{ "border-r": [s] }],
          "border-color-b": [{ "border-b": [s] }],
          "border-color-l": [{ "border-l": [s] }],
          "divide-color": [{ divide: [s] }],
          "outline-style": [{ outline: ["", ...Ie()] }],
          "outline-offset": [{ "outline-offset": [Nn, G] }],
          "outline-w": [{ outline: [Nn, yr] }],
          "outline-color": [{ outline: [t] }],
          "ring-w": [{ ring: V() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [t] }],
          "ring-opacity": [{ "ring-opacity": [m] }],
          "ring-offset-w": [{ "ring-offset": [Nn, yr] }],
          "ring-offset-color": [{ "ring-offset": [t] }],
          shadow: [{ shadow: ["", "inner", "none", vr, oC] }],
          "shadow-color": [{ shadow: [sa] }],
          opacity: [{ opacity: [m] }],
          "mix-blend": [
            { "mix-blend": [...W(), "plus-lighter", "plus-darker"] },
          ],
          "bg-blend": [{ "bg-blend": W() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [r] }],
          contrast: [{ contrast: [l] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", vr, G] }],
          grayscale: [{ grayscale: [u] }],
          "hue-rotate": [{ "hue-rotate": [c] }],
          invert: [{ invert: [d] }],
          saturate: [{ saturate: [y] }],
          sepia: [{ sepia: [S] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [r] }],
          "backdrop-contrast": [{ "backdrop-contrast": [l] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
          "backdrop-invert": [{ "backdrop-invert": [d] }],
          "backdrop-opacity": [{ "backdrop-opacity": [m] }],
          "backdrop-saturate": [{ "backdrop-saturate": [y] }],
          "backdrop-sepia": [{ "backdrop-sepia": [S] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [o] }],
          "border-spacing-x": [{ "border-spacing-x": [o] }],
          "border-spacing-y": [{ "border-spacing-y": [o] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                G,
              ],
            },
          ],
          duration: [{ duration: se() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
          delay: [{ delay: se() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", G] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [_] }],
          "scale-x": [{ "scale-x": [_] }],
          "scale-y": [{ "scale-y": [_] }],
          rotate: [{ rotate: [ra, G] }],
          "translate-x": [{ "translate-x": [x] }],
          "translate-y": [{ "translate-y": [x] }],
          "skew-x": [{ "skew-x": [b] }],
          "skew-y": [{ "skew-y": [b] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                G,
              ],
            },
          ],
          accent: [{ accent: ["auto", t] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                G,
              ],
            },
          ],
          "caret-color": [{ caret: [t] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": F() }],
          "scroll-mx": [{ "scroll-mx": F() }],
          "scroll-my": [{ "scroll-my": F() }],
          "scroll-ms": [{ "scroll-ms": F() }],
          "scroll-me": [{ "scroll-me": F() }],
          "scroll-mt": [{ "scroll-mt": F() }],
          "scroll-mr": [{ "scroll-mr": F() }],
          "scroll-mb": [{ "scroll-mb": F() }],
          "scroll-ml": [{ "scroll-ml": F() }],
          "scroll-p": [{ "scroll-p": F() }],
          "scroll-px": [{ "scroll-px": F() }],
          "scroll-py": [{ "scroll-py": F() }],
          "scroll-ps": [{ "scroll-ps": F() }],
          "scroll-pe": [{ "scroll-pe": F() }],
          "scroll-pt": [{ "scroll-pt": F() }],
          "scroll-pr": [{ "scroll-pr": F() }],
          "scroll-pb": [{ "scroll-pb": F() }],
          "scroll-pl": [{ "scroll-pl": F() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", G] },
          ],
          fill: [{ fill: [t, "none"] }],
          "stroke-w": [{ stroke: [Nn, yr, vf] }],
          stroke: [{ stroke: [t, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-s",
            "border-color-e",
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    });
  function Cu(...t) {
    return cC(MP(t));
  }
  const dC = nw(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      {
        variants: {
          variant: {
            default:
              "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline:
              "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      },
    ),
    wf = C.forwardRef(
      ({ className: t, variant: e, size: n, asChild: r = !1, ...s }, i) => {
        const o = r ? pf : "button";
        return D.jsx(o, {
          className: Cu(dC({ variant: e, size: n, className: t })),
          ref: i,
          ...s,
        });
      },
    );
  wf.displayName = "Button";
  var hC = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    fC = hC.reduce((t, e) => {
      const n = C.forwardRef((r, s) => {
        const { asChild: i, ...o } = r,
          a = i ? pf : e;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          D.jsx(a, { ...o, ref: s })
        );
      });
      return (n.displayName = `Primitive.${e}`), { ...t, [e]: n };
    }, {}),
    pC = "Separator",
    dw = "horizontal",
    mC = ["horizontal", "vertical"],
    hw = C.forwardRef((t, e) => {
      const { decorative: n, orientation: r = dw, ...s } = t,
        i = gC(r) ? r : dw,
        a = n
          ? { role: "none" }
          : {
              "aria-orientation": i === "vertical" ? i : void 0,
              role: "separator",
            };
      return D.jsx(fC.div, { "data-orientation": i, ...a, ...s, ref: e });
    });
  hw.displayName = pC;
  function gC(t) {
    return mC.includes(t);
  }
  var fw = hw;
  const pw = C.forwardRef(
    (
      { className: t, orientation: e = "horizontal", decorative: n = !0, ...r },
      s,
    ) =>
      D.jsx(fw, {
        ref: s,
        decorative: n,
        orientation: e,
        className: Cu(
          "shrink-0 bg-border",
          e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          t,
        ),
        ...r,
      }),
  );
  pw.displayName = fw.displayName;
  const mw = C.forwardRef(({ className: t, type: e, ...n }, r) =>
    D.jsx("input", {
      type: e,
      className: Cu(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t,
      ),
      ref: r,
      ...n,
    }),
  );
  mw.displayName = "Input";
  const yC = nw(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  );
  function vC({ className: t, variant: e, ...n }) {
    return D.jsx("div", { className: Cu(yC({ variant: e }), t), ...n });
  }
  function wC({ isRecording: t, onPlayButtonClick: e, onPauseButtonClick: n }) {
    return D.jsxs("div", {
      className: "flex items-center gap-2",
      children: [
        D.jsx(vC, {
          variant: t ? "default" : "secondary",
          className: `flex items-center gap-1 ${t ? "border-green-500 animate-pulse" : "border-red-500"}`,
          children: t
            ? D.jsxs(D.Fragment, {
                children: [D.jsx(J0, { size: 12 }), "Observing"],
              })
            : D.jsxs(D.Fragment, {
                children: [D.jsx(J0, { size: 12 }), "Not Observing"],
              }),
        }),
        t
          ? D.jsx("div", {
              onClick: n,
              className:
                "w-5 h-5 p-1 bg-black dark:bg-white text-white dark:text-black rounded-xs rounded-full cursor-pointer",
              children: D.jsx(xP, { size: 11 }),
            })
          : D.jsx("div", {
              onClick: e,
              className:
                "w-5 h-5 p-1 bg-black dark:bg-white text-white dark:text-black rounded-full cursor-pointer",
              children: D.jsx(SP, { size: 11 }),
            }),
      ],
    });
  }
  const _f = Ae.object({
      url: Ae.string(),
      textContent: Ae.string(),
      screenshot: Ae.string(),
    }),
    _C = Ae.object({ prompt: Ae.string(), pageState: _f }),
    bC = Ae.object({ response: Ae.string() });
  var gw = { exports: {} };
  (function (t) {
    function e(n, r) {
      if (r && r.documentElement) (n = r), (r = arguments[2]);
      else if (!n || !n.documentElement)
        throw new Error(
          "First argument to Readability constructor should be a document object.",
        );
      if (
        ((r = r || {}),
        (this._doc = n),
        (this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__),
        (this._articleTitle = null),
        (this._articleByline = null),
        (this._articleDir = null),
        (this._articleSiteName = null),
        (this._attempts = []),
        (this._debug = !!r.debug),
        (this._maxElemsToParse =
          r.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE),
        (this._nbTopCandidates =
          r.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES),
        (this._charThreshold = r.charThreshold || this.DEFAULT_CHAR_THRESHOLD),
        (this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(
          r.classesToPreserve || [],
        )),
        (this._keepClasses = !!r.keepClasses),
        (this._serializer =
          r.serializer ||
          function (s) {
            return s.innerHTML;
          }),
        (this._disableJSONLD = !!r.disableJSONLD),
        (this._allowedVideoRegex = r.allowedVideoRegex || this.REGEXPS.videos),
        (this._flags =
          this.FLAG_STRIP_UNLIKELYS |
          this.FLAG_WEIGHT_CLASSES |
          this.FLAG_CLEAN_CONDITIONALLY),
        this._debug)
      ) {
        let s = function (i) {
          if (i.nodeType == i.TEXT_NODE)
            return `${i.nodeName} ("${i.textContent}")`;
          let o = Array.from(i.attributes || [], function (a) {
            return `${a.name}="${a.value}"`;
          }).join(" ");
          return `<${i.localName} ${o}>`;
        };
        this.log = function () {
          if (typeof console < "u") {
            let o = Array.from(arguments, (a) =>
              a && a.nodeType == this.ELEMENT_NODE ? s(a) : a,
            );
            o.unshift("Reader: (Readability)"), console.log.apply(console, o);
          } else if (typeof dump < "u") {
            var i = Array.prototype.map
              .call(arguments, function (o) {
                return o && o.nodeName ? s(o) : o;
              })
              .join(" ");
            dump(
              "Reader: (Readability) " +
                i +
                `
`,
            );
          }
        };
      } else this.log = function () {};
    }
    (e.prototype = {
      FLAG_STRIP_UNLIKELYS: 1,
      FLAG_WEIGHT_CLASSES: 2,
      FLAG_CLEAN_CONDITIONALLY: 4,
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,
      DEFAULT_N_TOP_CANDIDATES: 5,
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre"
        .toUpperCase()
        .split(","),
      DEFAULT_CHAR_THRESHOLD: 500,
      REGEXPS: {
        unlikelyCandidates:
          /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
        positive:
          /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative:
          /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous:
          /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos:
          /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        tokenize: /\W+/g,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        hashUrl: /^#.+/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
        commas:
          /\u002C|\u060C|\uFE50|\uFE10|\uFE11|\u2E41|\u2E34|\u2E32|\uFF0C/g,
        jsonLdArticleTypes:
          /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/,
      },
      UNLIKELY_ROLES: [
        "menu",
        "menubar",
        "complementary",
        "navigation",
        "alert",
        "alertdialog",
        "dialog",
      ],
      DIV_TO_P_ELEMS: new Set([
        "BLOCKQUOTE",
        "DL",
        "DIV",
        "IMG",
        "OL",
        "P",
        "PRE",
        "TABLE",
        "UL",
      ]),
      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
      PRESENTATIONAL_ATTRIBUTES: [
        "align",
        "background",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "frame",
        "hspace",
        "rules",
        "style",
        "valign",
        "vspace",
      ],
      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
      PHRASING_ELEMS: [
        "ABBR",
        "AUDIO",
        "B",
        "BDO",
        "BR",
        "BUTTON",
        "CITE",
        "CODE",
        "DATA",
        "DATALIST",
        "DFN",
        "EM",
        "EMBED",
        "I",
        "IMG",
        "INPUT",
        "KBD",
        "LABEL",
        "MARK",
        "MATH",
        "METER",
        "NOSCRIPT",
        "OBJECT",
        "OUTPUT",
        "PROGRESS",
        "Q",
        "RUBY",
        "SAMP",
        "SCRIPT",
        "SELECT",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "TEXTAREA",
        "TIME",
        "VAR",
        "WBR",
      ],
      CLASSES_TO_PRESERVE: ["page"],
      HTML_ESCAPE_MAP: { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" },
      _postProcessContent: function (n) {
        this._fixRelativeUris(n),
          this._simplifyNestedElements(n),
          this._keepClasses || this._cleanClasses(n);
      },
      _removeNodes: function (n, r) {
        if (this._docJSDOMParser && n._isLiveNodeList)
          throw new Error("Do not pass live node lists to _removeNodes");
        for (var s = n.length - 1; s >= 0; s--) {
          var i = n[s],
            o = i.parentNode;
          o && (!r || r.call(this, i, s, n)) && o.removeChild(i);
        }
      },
      _replaceNodeTags: function (n, r) {
        if (this._docJSDOMParser && n._isLiveNodeList)
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        for (const s of n) this._setNodeTag(s, r);
      },
      _forEachNode: function (n, r) {
        Array.prototype.forEach.call(n, r, this);
      },
      _findNode: function (n, r) {
        return Array.prototype.find.call(n, r, this);
      },
      _someNode: function (n, r) {
        return Array.prototype.some.call(n, r, this);
      },
      _everyNode: function (n, r) {
        return Array.prototype.every.call(n, r, this);
      },
      _concatNodeLists: function () {
        var n = Array.prototype.slice,
          r = n.call(arguments),
          s = r.map(function (i) {
            return n.call(i);
          });
        return Array.prototype.concat.apply([], s);
      },
      _getAllNodesWithTag: function (n, r) {
        return n.querySelectorAll
          ? n.querySelectorAll(r.join(","))
          : [].concat.apply(
              [],
              r.map(function (s) {
                var i = n.getElementsByTagName(s);
                return Array.isArray(i) ? i : Array.from(i);
              }),
            );
      },
      _cleanClasses: function (n) {
        var r = this._classesToPreserve,
          s = (n.getAttribute("class") || "")
            .split(/\s+/)
            .filter(function (i) {
              return r.indexOf(i) != -1;
            })
            .join(" ");
        for (
          s ? n.setAttribute("class", s) : n.removeAttribute("class"),
            n = n.firstElementChild;
          n;
          n = n.nextElementSibling
        )
          this._cleanClasses(n);
      },
      _fixRelativeUris: function (n) {
        var r = this._doc.baseURI,
          s = this._doc.documentURI;
        function i(l) {
          if (r == s && l.charAt(0) == "#") return l;
          try {
            return new URL(l, r).href;
          } catch {}
          return l;
        }
        var o = this._getAllNodesWithTag(n, ["a"]);
        this._forEachNode(o, function (l) {
          var u = l.getAttribute("href");
          if (u)
            if (u.indexOf("javascript:") === 0)
              if (
                l.childNodes.length === 1 &&
                l.childNodes[0].nodeType === this.TEXT_NODE
              ) {
                var c = this._doc.createTextNode(l.textContent);
                l.parentNode.replaceChild(c, l);
              } else {
                for (var d = this._doc.createElement("span"); l.firstChild; )
                  d.appendChild(l.firstChild);
                l.parentNode.replaceChild(d, l);
              }
            else l.setAttribute("href", i(u));
        });
        var a = this._getAllNodesWithTag(n, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source",
        ]);
        this._forEachNode(a, function (l) {
          var u = l.getAttribute("src"),
            c = l.getAttribute("poster"),
            d = l.getAttribute("srcset");
          if (
            (u && l.setAttribute("src", i(u)),
            c && l.setAttribute("poster", i(c)),
            d)
          ) {
            var h = d.replace(this.REGEXPS.srcsetUrl, function (p, v, g, w) {
              return i(v) + (g || "") + w;
            });
            l.setAttribute("srcset", h);
          }
        });
      },
      _simplifyNestedElements: function (n) {
        for (var r = n; r; ) {
          if (
            r.parentNode &&
            ["DIV", "SECTION"].includes(r.tagName) &&
            !(r.id && r.id.startsWith("readability"))
          ) {
            if (this._isElementWithoutContent(r)) {
              r = this._removeAndGetNext(r);
              continue;
            } else if (
              this._hasSingleTagInsideElement(r, "DIV") ||
              this._hasSingleTagInsideElement(r, "SECTION")
            ) {
              for (var s = r.children[0], i = 0; i < r.attributes.length; i++)
                s.setAttribute(r.attributes[i].name, r.attributes[i].value);
              r.parentNode.replaceChild(s, r), (r = s);
              continue;
            }
          }
          r = this._getNextNode(r);
        }
      },
      _getArticleTitle: function () {
        var n = this._doc,
          r = "",
          s = "";
        try {
          (r = s = n.title.trim()),
            typeof r != "string" &&
              (r = s = this._getInnerText(n.getElementsByTagName("title")[0]));
        } catch {}
        var i = !1;
        function o(h) {
          return h.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>»] /.test(r))
          (i = / [\\\/>»] /.test(r)),
            (r = s.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1")),
            o(r) < 3 &&
              (r = s.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1"));
        else if (r.indexOf(": ") !== -1) {
          var a = this._concatNodeLists(
              n.getElementsByTagName("h1"),
              n.getElementsByTagName("h2"),
            ),
            l = r.trim(),
            u = this._someNode(a, function (h) {
              return h.textContent.trim() === l;
            });
          u ||
            ((r = s.substring(s.lastIndexOf(":") + 1)),
            o(r) < 3
              ? (r = s.substring(s.indexOf(":") + 1))
              : o(s.substr(0, s.indexOf(":"))) > 5 && (r = s));
        } else if (r.length > 150 || r.length < 15) {
          var c = n.getElementsByTagName("h1");
          c.length === 1 && (r = this._getInnerText(c[0]));
        }
        r = r.trim().replace(this.REGEXPS.normalize, " ");
        var d = o(r);
        return (
          d <= 4 &&
            (!i || d != o(s.replace(/[\|\-\\\/>»]+/g, "")) - 1) &&
            (r = s),
          r
        );
      },
      _prepDocument: function () {
        var n = this._doc;
        this._removeNodes(this._getAllNodesWithTag(n, ["style"])),
          n.body && this._replaceBrs(n.body),
          this._replaceNodeTags(this._getAllNodesWithTag(n, ["font"]), "SPAN");
      },
      _nextNode: function (n) {
        for (
          var r = n;
          r &&
          r.nodeType != this.ELEMENT_NODE &&
          this.REGEXPS.whitespace.test(r.textContent);

        )
          r = r.nextSibling;
        return r;
      },
      _replaceBrs: function (n) {
        this._forEachNode(this._getAllNodesWithTag(n, ["br"]), function (r) {
          for (
            var s = r.nextSibling, i = !1;
            (s = this._nextNode(s)) && s.tagName == "BR";

          ) {
            i = !0;
            var o = s.nextSibling;
            s.parentNode.removeChild(s), (s = o);
          }
          if (i) {
            var a = this._doc.createElement("p");
            for (r.parentNode.replaceChild(a, r), s = a.nextSibling; s; ) {
              if (s.tagName == "BR") {
                var l = this._nextNode(s.nextSibling);
                if (l && l.tagName == "BR") break;
              }
              if (!this._isPhrasingContent(s)) break;
              var u = s.nextSibling;
              a.appendChild(s), (s = u);
            }
            for (; a.lastChild && this._isWhitespace(a.lastChild); )
              a.removeChild(a.lastChild);
            a.parentNode.tagName === "P" &&
              this._setNodeTag(a.parentNode, "DIV");
          }
        });
      },
      _setNodeTag: function (n, r) {
        if ((this.log("_setNodeTag", n, r), this._docJSDOMParser))
          return (
            (n.localName = r.toLowerCase()), (n.tagName = r.toUpperCase()), n
          );
        for (var s = n.ownerDocument.createElement(r); n.firstChild; )
          s.appendChild(n.firstChild);
        n.parentNode.replaceChild(s, n),
          n.readability && (s.readability = n.readability);
        for (var i = 0; i < n.attributes.length; i++)
          try {
            s.setAttribute(n.attributes[i].name, n.attributes[i].value);
          } catch {}
        return s;
      },
      _prepArticle: function (n) {
        this._cleanStyles(n),
          this._markDataTables(n),
          this._fixLazyImages(n),
          this._cleanConditionally(n, "form"),
          this._cleanConditionally(n, "fieldset"),
          this._clean(n, "object"),
          this._clean(n, "embed"),
          this._clean(n, "footer"),
          this._clean(n, "link"),
          this._clean(n, "aside");
        var r = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(n.children, function (s) {
          this._cleanMatchedNodes(s, function (i, o) {
            return (
              this.REGEXPS.shareElements.test(o) && i.textContent.length < r
            );
          });
        }),
          this._clean(n, "iframe"),
          this._clean(n, "input"),
          this._clean(n, "textarea"),
          this._clean(n, "select"),
          this._clean(n, "button"),
          this._cleanHeaders(n),
          this._cleanConditionally(n, "table"),
          this._cleanConditionally(n, "ul"),
          this._cleanConditionally(n, "div"),
          this._replaceNodeTags(this._getAllNodesWithTag(n, ["h1"]), "h2"),
          this._removeNodes(this._getAllNodesWithTag(n, ["p"]), function (s) {
            var i = s.getElementsByTagName("img").length,
              o = s.getElementsByTagName("embed").length,
              a = s.getElementsByTagName("object").length,
              l = s.getElementsByTagName("iframe").length,
              u = i + o + a + l;
            return u === 0 && !this._getInnerText(s, !1);
          }),
          this._forEachNode(this._getAllNodesWithTag(n, ["br"]), function (s) {
            var i = this._nextNode(s.nextSibling);
            i && i.tagName == "P" && s.parentNode.removeChild(s);
          }),
          this._forEachNode(
            this._getAllNodesWithTag(n, ["table"]),
            function (s) {
              var i = this._hasSingleTagInsideElement(s, "TBODY")
                ? s.firstElementChild
                : s;
              if (this._hasSingleTagInsideElement(i, "TR")) {
                var o = i.firstElementChild;
                if (this._hasSingleTagInsideElement(o, "TD")) {
                  var a = o.firstElementChild;
                  (a = this._setNodeTag(
                    a,
                    this._everyNode(a.childNodes, this._isPhrasingContent)
                      ? "P"
                      : "DIV",
                  )),
                    s.parentNode.replaceChild(a, s);
                }
              }
            },
          );
      },
      _initializeNode: function (n) {
        switch (((n.readability = { contentScore: 0 }), n.tagName)) {
          case "DIV":
            n.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            n.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            n.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            n.readability.contentScore -= 5;
            break;
        }
        n.readability.contentScore += this._getClassWeight(n);
      },
      _removeAndGetNext: function (n) {
        var r = this._getNextNode(n, !0);
        return n.parentNode.removeChild(n), r;
      },
      _getNextNode: function (n, r) {
        if (!r && n.firstElementChild) return n.firstElementChild;
        if (n.nextElementSibling) return n.nextElementSibling;
        do n = n.parentNode;
        while (n && !n.nextElementSibling);
        return n && n.nextElementSibling;
      },
      _textSimilarity: function (n, r) {
        var s = n.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean),
          i = r.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!s.length || !i.length) return 0;
        var o = i.filter((l) => !s.includes(l)),
          a = o.join(" ").length / i.join(" ").length;
        return 1 - a;
      },
      _checkByline: function (n, r) {
        if (this._articleByline) return !1;
        if (n.getAttribute !== void 0)
          var s = n.getAttribute("rel"),
            i = n.getAttribute("itemprop");
        return (s === "author" ||
          (i && i.indexOf("author") !== -1) ||
          this.REGEXPS.byline.test(r)) &&
          this._isValidByline(n.textContent)
          ? ((this._articleByline = n.textContent.trim()), !0)
          : !1;
      },
      _getNodeAncestors: function (n, r) {
        r = r || 0;
        for (
          var s = 0, i = [];
          n.parentNode && (i.push(n.parentNode), !(r && ++s === r));

        )
          n = n.parentNode;
        return i;
      },
      _grabArticle: function (n) {
        this.log("**** grabArticle ****");
        var r = this._doc,
          s = n !== null;
        if (((n = n || this._doc.body), !n))
          return this.log("No body found in document. Abort."), null;
        for (var i = n.innerHTML; ; ) {
          this.log("Starting grabArticle loop");
          var o = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),
            a = [],
            l = this._doc.documentElement;
          let gx = !0;
          for (; l; ) {
            l.tagName === "HTML" &&
              (this._articleLang = l.getAttribute("lang"));
            var u = l.className + " " + l.id;
            if (!this._isProbablyVisible(l)) {
              this.log("Removing hidden node - " + u),
                (l = this._removeAndGetNext(l));
              continue;
            }
            if (
              l.getAttribute("aria-modal") == "true" &&
              l.getAttribute("role") == "dialog"
            ) {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (this._checkByline(l, u)) {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (gx && this._headerDuplicatesTitle(l)) {
              this.log(
                "Removing header: ",
                l.textContent.trim(),
                this._articleTitle.trim(),
              ),
                (gx = !1),
                (l = this._removeAndGetNext(l));
              continue;
            }
            if (o) {
              if (
                this.REGEXPS.unlikelyCandidates.test(u) &&
                !this.REGEXPS.okMaybeItsACandidate.test(u) &&
                !this._hasAncestorTag(l, "table") &&
                !this._hasAncestorTag(l, "code") &&
                l.tagName !== "BODY" &&
                l.tagName !== "A"
              ) {
                this.log("Removing unlikely candidate - " + u),
                  (l = this._removeAndGetNext(l));
                continue;
              }
              if (this.UNLIKELY_ROLES.includes(l.getAttribute("role"))) {
                this.log(
                  "Removing content with role " +
                    l.getAttribute("role") +
                    " - " +
                    u,
                ),
                  (l = this._removeAndGetNext(l));
                continue;
              }
            }
            if (
              (l.tagName === "DIV" ||
                l.tagName === "SECTION" ||
                l.tagName === "HEADER" ||
                l.tagName === "H1" ||
                l.tagName === "H2" ||
                l.tagName === "H3" ||
                l.tagName === "H4" ||
                l.tagName === "H5" ||
                l.tagName === "H6") &&
              this._isElementWithoutContent(l)
            ) {
              l = this._removeAndGetNext(l);
              continue;
            }
            if (
              (this.DEFAULT_TAGS_TO_SCORE.indexOf(l.tagName) !== -1 &&
                a.push(l),
              l.tagName === "DIV")
            ) {
              for (var c = null, d = l.firstChild; d; ) {
                var h = d.nextSibling;
                if (this._isPhrasingContent(d))
                  c !== null
                    ? c.appendChild(d)
                    : this._isWhitespace(d) ||
                      ((c = r.createElement("p")),
                      l.replaceChild(c, d),
                      c.appendChild(d));
                else if (c !== null) {
                  for (; c.lastChild && this._isWhitespace(c.lastChild); )
                    c.removeChild(c.lastChild);
                  c = null;
                }
                d = h;
              }
              if (
                this._hasSingleTagInsideElement(l, "P") &&
                this._getLinkDensity(l) < 0.25
              ) {
                var p = l.children[0];
                l.parentNode.replaceChild(p, l), (l = p), a.push(l);
              } else
                this._hasChildBlockElement(l) ||
                  ((l = this._setNodeTag(l, "P")), a.push(l));
            }
            l = this._getNextNode(l);
          }
          var v = [];
          this._forEachNode(a, function (Dn) {
            if (!(!Dn.parentNode || typeof Dn.parentNode.tagName > "u")) {
              var Rr = this._getInnerText(Dn);
              if (!(Rr.length < 25)) {
                var yx = this._getNodeAncestors(Dn, 5);
                if (yx.length !== 0) {
                  var Ju = 0;
                  (Ju += 1),
                    (Ju += Rr.split(this.REGEXPS.commas).length),
                    (Ju += Math.min(Math.floor(Rr.length / 100), 3)),
                    this._forEachNode(yx, function (hs, Np) {
                      if (
                        !(
                          !hs.tagName ||
                          !hs.parentNode ||
                          typeof hs.parentNode.tagName > "u"
                        )
                      ) {
                        if (
                          (typeof hs.readability > "u" &&
                            (this._initializeNode(hs), v.push(hs)),
                          Np === 0)
                        )
                          var Op = 1;
                        else Np === 1 ? (Op = 2) : (Op = Np * 3);
                        hs.readability.contentScore += Ju / Op;
                      }
                    });
                }
              }
            }
          });
          for (var g = [], w = 0, m = v.length; w < m; w += 1) {
            var f = v[w],
              y = f.readability.contentScore * (1 - this._getLinkDensity(f));
            (f.readability.contentScore = y),
              this.log("Candidate:", f, "with score " + y);
            for (var _ = 0; _ < this._nbTopCandidates; _++) {
              var S = g[_];
              if (!S || y > S.readability.contentScore) {
                g.splice(_, 0, f), g.length > this._nbTopCandidates && g.pop();
                break;
              }
            }
          }
          var b = g[0] || null,
            k = !1,
            x;
          if (b === null || b.tagName === "BODY") {
            for (b = r.createElement("DIV"), k = !0; n.firstChild; )
              this.log("Moving child out:", n.firstChild),
                b.appendChild(n.firstChild);
            n.appendChild(b), this._initializeNode(b);
          } else if (b) {
            for (var R = [], N = 1; N < g.length; N++)
              g[N].readability.contentScore / b.readability.contentScore >=
                0.75 && R.push(this._getNodeAncestors(g[N]));
            var Z = 3;
            if (R.length >= Z)
              for (x = b.parentNode; x.tagName !== "BODY"; ) {
                for (var F = 0, V = 0; V < R.length && F < Z; V++)
                  F += Number(R[V].includes(x));
                if (F >= Z) {
                  b = x;
                  break;
                }
                x = x.parentNode;
              }
            b.readability || this._initializeNode(b), (x = b.parentNode);
            for (
              var de = b.readability.contentScore, pe = de / 3;
              x.tagName !== "BODY";

            ) {
              if (!x.readability) {
                x = x.parentNode;
                continue;
              }
              var Ie = x.readability.contentScore;
              if (Ie < pe) break;
              if (Ie > de) {
                b = x;
                break;
              }
              (de = x.readability.contentScore), (x = x.parentNode);
            }
            for (
              x = b.parentNode;
              x.tagName != "BODY" && x.children.length == 1;

            )
              (b = x), (x = b.parentNode);
            b.readability || this._initializeNode(b);
          }
          var W = r.createElement("DIV");
          s && (W.id = "readability-content");
          var P = Math.max(10, b.readability.contentScore * 0.2);
          x = b.parentNode;
          for (var I = x.children, U = 0, se = I.length; U < se; U++) {
            var Y = I[U],
              pn = !1;
            if (
              (this.log(
                "Looking at sibling node:",
                Y,
                Y.readability ? "with score " + Y.readability.contentScore : "",
              ),
              this.log(
                "Sibling has score",
                Y.readability ? Y.readability.contentScore : "Unknown",
              ),
              Y === b)
            )
              pn = !0;
            else {
              var mn = 0;
              if (
                (Y.className === b.className &&
                  b.className !== "" &&
                  (mn += b.readability.contentScore * 0.2),
                Y.readability && Y.readability.contentScore + mn >= P)
              )
                pn = !0;
              else if (Y.nodeName === "P") {
                var Ai = this._getLinkDensity(Y),
                  gn = this._getInnerText(Y),
                  Cr = gn.length;
                ((Cr > 80 && Ai < 0.25) ||
                  (Cr < 80 &&
                    Cr > 0 &&
                    Ai === 0 &&
                    gn.search(/\.( |$)/) !== -1)) &&
                  (pn = !0);
              }
            }
            pn &&
              (this.log("Appending node:", Y),
              this.ALTER_TO_DIV_EXCEPTIONS.indexOf(Y.nodeName) === -1 &&
                (this.log("Altering sibling:", Y, "to div."),
                (Y = this._setNodeTag(Y, "DIV"))),
              W.appendChild(Y),
              (I = x.children),
              (U -= 1),
              (se -= 1));
          }
          if (
            (this._debug &&
              this.log("Article content pre-prep: " + W.innerHTML),
            this._prepArticle(W),
            this._debug &&
              this.log("Article content post-prep: " + W.innerHTML),
            k)
          )
            (b.id = "readability-page-1"), (b.className = "page");
          else {
            var Xu = r.createElement("DIV");
            for (
              Xu.id = "readability-page-1", Xu.className = "page";
              W.firstChild;

            )
              Xu.appendChild(W.firstChild);
            W.appendChild(Xu);
          }
          this._debug &&
            this.log("Article content after paging: " + W.innerHTML);
          var Rp = !0,
            ba = this._getInnerText(W, !0).length;
          if (ba < this._charThreshold)
            if (
              ((Rp = !1),
              (n.innerHTML = i),
              this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))
            )
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS),
                this._attempts.push({ articleContent: W, textLength: ba });
            else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
              this._removeFlag(this.FLAG_WEIGHT_CLASSES),
                this._attempts.push({ articleContent: W, textLength: ba });
            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),
                this._attempts.push({ articleContent: W, textLength: ba });
            else {
              if (
                (this._attempts.push({ articleContent: W, textLength: ba }),
                this._attempts.sort(function (Dn, Rr) {
                  return Rr.textLength - Dn.textLength;
                }),
                !this._attempts[0].textLength)
              )
                return null;
              (W = this._attempts[0].articleContent), (Rp = !0);
            }
          if (Rp) {
            var EL = [x, b].concat(this._getNodeAncestors(x));
            return (
              this._someNode(EL, function (Dn) {
                if (!Dn.tagName) return !1;
                var Rr = Dn.getAttribute("dir");
                return Rr ? ((this._articleDir = Rr), !0) : !1;
              }),
              W
            );
          }
        }
      },
      _isValidByline: function (n) {
        return typeof n == "string" || n instanceof String
          ? ((n = n.trim()), n.length > 0 && n.length < 100)
          : !1;
      },
      _unescapeHtmlEntities: function (n) {
        if (!n) return n;
        var r = this.HTML_ESCAPE_MAP;
        return n
          .replace(/&(quot|amp|apos|lt|gt);/g, function (s, i) {
            return r[i];
          })
          .replace(
            /&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi,
            function (s, i, o) {
              var a = parseInt(i || o, i ? 16 : 10);
              return String.fromCharCode(a);
            },
          );
      },
      _getJSONLD: function (n) {
        var r = this._getAllNodesWithTag(n, ["script"]),
          s;
        return (
          this._forEachNode(r, function (i) {
            if (!s && i.getAttribute("type") === "application/ld+json")
              try {
                var o = i.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, ""),
                  a = JSON.parse(o);
                if (
                  !a["@context"] ||
                  !a["@context"].match(/^https?\:\/\/schema\.org$/) ||
                  (!a["@type"] &&
                    Array.isArray(a["@graph"]) &&
                    (a = a["@graph"].find(function (d) {
                      return (d["@type"] || "").match(
                        this.REGEXPS.jsonLdArticleTypes,
                      );
                    })),
                  !a ||
                    !a["@type"] ||
                    !a["@type"].match(this.REGEXPS.jsonLdArticleTypes))
                )
                  return;
                if (
                  ((s = {}),
                  typeof a.name == "string" &&
                    typeof a.headline == "string" &&
                    a.name !== a.headline)
                ) {
                  var l = this._getArticleTitle(),
                    u = this._textSimilarity(a.name, l) > 0.75,
                    c = this._textSimilarity(a.headline, l) > 0.75;
                  c && !u ? (s.title = a.headline) : (s.title = a.name);
                } else
                  typeof a.name == "string"
                    ? (s.title = a.name.trim())
                    : typeof a.headline == "string" &&
                      (s.title = a.headline.trim());
                a.author &&
                  (typeof a.author.name == "string"
                    ? (s.byline = a.author.name.trim())
                    : Array.isArray(a.author) &&
                      a.author[0] &&
                      typeof a.author[0].name == "string" &&
                      (s.byline = a.author
                        .filter(function (d) {
                          return d && typeof d.name == "string";
                        })
                        .map(function (d) {
                          return d.name.trim();
                        })
                        .join(", "))),
                  typeof a.description == "string" &&
                    (s.excerpt = a.description.trim()),
                  a.publisher &&
                    typeof a.publisher.name == "string" &&
                    (s.siteName = a.publisher.name.trim()),
                  typeof a.datePublished == "string" &&
                    (s.datePublished = a.datePublished.trim());
                return;
              } catch (d) {
                this.log(d.message);
              }
          }),
          s || {}
        );
      },
      _getArticleMetadata: function (n) {
        var r = {},
          s = {},
          i = this._doc.getElementsByTagName("meta"),
          o =
            /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi,
          a =
            /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
        return (
          this._forEachNode(i, function (l) {
            var u = l.getAttribute("name"),
              c = l.getAttribute("property"),
              d = l.getAttribute("content");
            if (d) {
              var h = null,
                p = null;
              c &&
                ((h = c.match(o)),
                h &&
                  ((p = h[0].toLowerCase().replace(/\s/g, "")),
                  (s[p] = d.trim()))),
                !h &&
                  u &&
                  a.test(u) &&
                  ((p = u),
                  d &&
                    ((p = p
                      .toLowerCase()
                      .replace(/\s/g, "")
                      .replace(/\./g, ":")),
                    (s[p] = d.trim())));
            }
          }),
          (r.title =
            n.title ||
            s["dc:title"] ||
            s["dcterm:title"] ||
            s["og:title"] ||
            s["weibo:article:title"] ||
            s["weibo:webpage:title"] ||
            s.title ||
            s["twitter:title"]),
          r.title || (r.title = this._getArticleTitle()),
          (r.byline =
            n.byline || s["dc:creator"] || s["dcterm:creator"] || s.author),
          (r.excerpt =
            n.excerpt ||
            s["dc:description"] ||
            s["dcterm:description"] ||
            s["og:description"] ||
            s["weibo:article:description"] ||
            s["weibo:webpage:description"] ||
            s.description ||
            s["twitter:description"]),
          (r.siteName = n.siteName || s["og:site_name"]),
          (r.publishedTime =
            n.datePublished || s["article:published_time"] || null),
          (r.title = this._unescapeHtmlEntities(r.title)),
          (r.byline = this._unescapeHtmlEntities(r.byline)),
          (r.excerpt = this._unescapeHtmlEntities(r.excerpt)),
          (r.siteName = this._unescapeHtmlEntities(r.siteName)),
          (r.publishedTime = this._unescapeHtmlEntities(r.publishedTime)),
          r
        );
      },
      _isSingleImage: function (n) {
        return n.tagName === "IMG"
          ? !0
          : n.children.length !== 1 || n.textContent.trim() !== ""
            ? !1
            : this._isSingleImage(n.children[0]);
      },
      _unwrapNoscriptImages: function (n) {
        var r = Array.from(n.getElementsByTagName("img"));
        this._forEachNode(r, function (i) {
          for (var o = 0; o < i.attributes.length; o++) {
            var a = i.attributes[o];
            switch (a.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(a.value)) return;
          }
          i.parentNode.removeChild(i);
        });
        var s = Array.from(n.getElementsByTagName("noscript"));
        this._forEachNode(s, function (i) {
          var o = n.createElement("div");
          if (((o.innerHTML = i.innerHTML), !!this._isSingleImage(o))) {
            var a = i.previousElementSibling;
            if (a && this._isSingleImage(a)) {
              var l = a;
              l.tagName !== "IMG" && (l = a.getElementsByTagName("img")[0]);
              for (
                var u = o.getElementsByTagName("img")[0], c = 0;
                c < l.attributes.length;
                c++
              ) {
                var d = l.attributes[c];
                if (
                  d.value !== "" &&
                  (d.name === "src" ||
                    d.name === "srcset" ||
                    /\.(jpg|jpeg|png|webp)/i.test(d.value))
                ) {
                  if (u.getAttribute(d.name) === d.value) continue;
                  var h = d.name;
                  u.hasAttribute(h) && (h = "data-old-" + h),
                    u.setAttribute(h, d.value);
                }
              }
              i.parentNode.replaceChild(o.firstElementChild, a);
            }
          }
        });
      },
      _removeScripts: function (n) {
        this._removeNodes(this._getAllNodesWithTag(n, ["script", "noscript"]));
      },
      _hasSingleTagInsideElement: function (n, r) {
        return n.children.length != 1 || n.children[0].tagName !== r
          ? !1
          : !this._someNode(n.childNodes, function (s) {
              return (
                s.nodeType === this.TEXT_NODE &&
                this.REGEXPS.hasContent.test(s.textContent)
              );
            });
      },
      _isElementWithoutContent: function (n) {
        return (
          n.nodeType === this.ELEMENT_NODE &&
          n.textContent.trim().length == 0 &&
          (n.children.length == 0 ||
            n.children.length ==
              n.getElementsByTagName("br").length +
                n.getElementsByTagName("hr").length)
        );
      },
      _hasChildBlockElement: function (n) {
        return this._someNode(n.childNodes, function (r) {
          return (
            this.DIV_TO_P_ELEMS.has(r.tagName) || this._hasChildBlockElement(r)
          );
        });
      },
      _isPhrasingContent: function (n) {
        return (
          n.nodeType === this.TEXT_NODE ||
          this.PHRASING_ELEMS.indexOf(n.tagName) !== -1 ||
          ((n.tagName === "A" || n.tagName === "DEL" || n.tagName === "INS") &&
            this._everyNode(n.childNodes, this._isPhrasingContent))
        );
      },
      _isWhitespace: function (n) {
        return (
          (n.nodeType === this.TEXT_NODE &&
            n.textContent.trim().length === 0) ||
          (n.nodeType === this.ELEMENT_NODE && n.tagName === "BR")
        );
      },
      _getInnerText: function (n, r) {
        r = typeof r > "u" ? !0 : r;
        var s = n.textContent.trim();
        return r ? s.replace(this.REGEXPS.normalize, " ") : s;
      },
      _getCharCount: function (n, r) {
        return (r = r || ","), this._getInnerText(n).split(r).length - 1;
      },
      _cleanStyles: function (n) {
        if (!(!n || n.tagName.toLowerCase() === "svg")) {
          for (var r = 0; r < this.PRESENTATIONAL_ATTRIBUTES.length; r++)
            n.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[r]);
          this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(n.tagName) !== -1 &&
            (n.removeAttribute("width"), n.removeAttribute("height"));
          for (var s = n.firstElementChild; s !== null; )
            this._cleanStyles(s), (s = s.nextElementSibling);
        }
      },
      _getLinkDensity: function (n) {
        var r = this._getInnerText(n).length;
        if (r === 0) return 0;
        var s = 0;
        return (
          this._forEachNode(n.getElementsByTagName("a"), function (i) {
            var o = i.getAttribute("href"),
              a = o && this.REGEXPS.hashUrl.test(o) ? 0.3 : 1;
            s += this._getInnerText(i).length * a;
          }),
          s / r
        );
      },
      _getClassWeight: function (n) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) return 0;
        var r = 0;
        return (
          typeof n.className == "string" &&
            n.className !== "" &&
            (this.REGEXPS.negative.test(n.className) && (r -= 25),
            this.REGEXPS.positive.test(n.className) && (r += 25)),
          typeof n.id == "string" &&
            n.id !== "" &&
            (this.REGEXPS.negative.test(n.id) && (r -= 25),
            this.REGEXPS.positive.test(n.id) && (r += 25)),
          r
        );
      },
      _clean: function (n, r) {
        var s = ["object", "embed", "iframe"].indexOf(r) !== -1;
        this._removeNodes(this._getAllNodesWithTag(n, [r]), function (i) {
          if (s) {
            for (var o = 0; o < i.attributes.length; o++)
              if (this._allowedVideoRegex.test(i.attributes[o].value))
                return !1;
            if (
              i.tagName === "object" &&
              this._allowedVideoRegex.test(i.innerHTML)
            )
              return !1;
          }
          return !0;
        });
      },
      _hasAncestorTag: function (n, r, s, i) {
        (s = s || 3), (r = r.toUpperCase());
        for (var o = 0; n.parentNode; ) {
          if (s > 0 && o > s) return !1;
          if (n.parentNode.tagName === r && (!i || i(n.parentNode))) return !0;
          (n = n.parentNode), o++;
        }
        return !1;
      },
      _getRowAndColumnCount: function (n) {
        for (
          var r = 0, s = 0, i = n.getElementsByTagName("tr"), o = 0;
          o < i.length;
          o++
        ) {
          var a = i[o].getAttribute("rowspan") || 0;
          a && (a = parseInt(a, 10)), (r += a || 1);
          for (
            var l = 0, u = i[o].getElementsByTagName("td"), c = 0;
            c < u.length;
            c++
          ) {
            var d = u[c].getAttribute("colspan") || 0;
            d && (d = parseInt(d, 10)), (l += d || 1);
          }
          s = Math.max(s, l);
        }
        return { rows: r, columns: s };
      },
      _markDataTables: function (n) {
        for (
          var r = n.getElementsByTagName("table"), s = 0;
          s < r.length;
          s++
        ) {
          var i = r[s],
            o = i.getAttribute("role");
          if (o == "presentation") {
            i._readabilityDataTable = !1;
            continue;
          }
          var a = i.getAttribute("datatable");
          if (a == "0") {
            i._readabilityDataTable = !1;
            continue;
          }
          var l = i.getAttribute("summary");
          if (l) {
            i._readabilityDataTable = !0;
            continue;
          }
          var u = i.getElementsByTagName("caption")[0];
          if (u && u.childNodes.length > 0) {
            i._readabilityDataTable = !0;
            continue;
          }
          var c = ["col", "colgroup", "tfoot", "thead", "th"],
            d = function (p) {
              return !!i.getElementsByTagName(p)[0];
            };
          if (c.some(d)) {
            this.log("Data table because found data-y descendant"),
              (i._readabilityDataTable = !0);
            continue;
          }
          if (i.getElementsByTagName("table")[0]) {
            i._readabilityDataTable = !1;
            continue;
          }
          var h = this._getRowAndColumnCount(i);
          if (h.rows >= 10 || h.columns > 4) {
            i._readabilityDataTable = !0;
            continue;
          }
          i._readabilityDataTable = h.rows * h.columns > 10;
        }
      },
      _fixLazyImages: function (n) {
        this._forEachNode(
          this._getAllNodesWithTag(n, ["img", "picture", "figure"]),
          function (r) {
            if (r.src && this.REGEXPS.b64DataUrl.test(r.src)) {
              var s = this.REGEXPS.b64DataUrl.exec(r.src);
              if (s[1] === "image/svg+xml") return;
              for (var i = !1, o = 0; o < r.attributes.length; o++) {
                var a = r.attributes[o];
                if (
                  a.name !== "src" &&
                  /\.(jpg|jpeg|png|webp)/i.test(a.value)
                ) {
                  i = !0;
                  break;
                }
              }
              if (i) {
                var l = r.src.search(/base64\s*/i) + 7,
                  u = r.src.length - l;
                u < 133 && r.removeAttribute("src");
              }
            }
            if (
              !(
                (r.src || (r.srcset && r.srcset != "null")) &&
                r.className.toLowerCase().indexOf("lazy") === -1
              )
            ) {
              for (var c = 0; c < r.attributes.length; c++)
                if (
                  ((a = r.attributes[c]),
                  !(
                    a.name === "src" ||
                    a.name === "srcset" ||
                    a.name === "alt"
                  ))
                ) {
                  var d = null;
                  if (
                    (/\.(jpg|jpeg|png|webp)\s+\d/.test(a.value)
                      ? (d = "srcset")
                      : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(a.value) &&
                        (d = "src"),
                    d)
                  ) {
                    if (r.tagName === "IMG" || r.tagName === "PICTURE")
                      r.setAttribute(d, a.value);
                    else if (
                      r.tagName === "FIGURE" &&
                      !this._getAllNodesWithTag(r, ["img", "picture"]).length
                    ) {
                      var h = this._doc.createElement("img");
                      h.setAttribute(d, a.value), r.appendChild(h);
                    }
                  }
                }
            }
          },
        );
      },
      _getTextDensity: function (n, r) {
        var s = this._getInnerText(n, !0).length;
        if (s === 0) return 0;
        var i = 0,
          o = this._getAllNodesWithTag(n, r);
        return (
          this._forEachNode(o, (a) => (i += this._getInnerText(a, !0).length)),
          i / s
        );
      },
      _cleanConditionally: function (n, r) {
        this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY) &&
          this._removeNodes(this._getAllNodesWithTag(n, [r]), function (s) {
            var i = function (x) {
                return x._readabilityDataTable;
              },
              o = r === "ul" || r === "ol";
            if (!o) {
              var a = 0,
                l = this._getAllNodesWithTag(s, ["ul", "ol"]);
              this._forEachNode(l, (x) => (a += this._getInnerText(x).length)),
                (o = a / this._getInnerText(s).length > 0.9);
            }
            if (
              (r === "table" && i(s)) ||
              this._hasAncestorTag(s, "table", -1, i) ||
              this._hasAncestorTag(s, "code")
            )
              return !1;
            var u = this._getClassWeight(s);
            this.log("Cleaning Conditionally", s);
            var c = 0;
            if (u + c < 0) return !0;
            if (this._getCharCount(s, ",") < 10) {
              for (
                var d = s.getElementsByTagName("p").length,
                  h = s.getElementsByTagName("img").length,
                  p = s.getElementsByTagName("li").length - 100,
                  v = s.getElementsByTagName("input").length,
                  g = this._getTextDensity(s, [
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                  ]),
                  w = 0,
                  m = this._getAllNodesWithTag(s, [
                    "object",
                    "embed",
                    "iframe",
                  ]),
                  f = 0;
                f < m.length;
                f++
              ) {
                for (var y = 0; y < m[f].attributes.length; y++)
                  if (this._allowedVideoRegex.test(m[f].attributes[y].value))
                    return !1;
                if (
                  m[f].tagName === "object" &&
                  this._allowedVideoRegex.test(m[f].innerHTML)
                )
                  return !1;
                w++;
              }
              var _ = this._getLinkDensity(s),
                S = this._getInnerText(s).length,
                b =
                  (h > 1 &&
                    d / h < 0.5 &&
                    !this._hasAncestorTag(s, "figure")) ||
                  (!o && p > d) ||
                  v > Math.floor(d / 3) ||
                  (!o &&
                    g < 0.9 &&
                    S < 25 &&
                    (h === 0 || h > 2) &&
                    !this._hasAncestorTag(s, "figure")) ||
                  (!o && u < 25 && _ > 0.2) ||
                  (u >= 25 && _ > 0.5) ||
                  (w === 1 && S < 75) ||
                  w > 1;
              if (o && b) {
                for (var k = 0; k < s.children.length; k++)
                  if (s.children[k].children.length > 1) return b;
                let x = s.getElementsByTagName("li").length;
                if (h == x) return !1;
              }
              return b;
            }
            return !1;
          });
      },
      _cleanMatchedNodes: function (n, r) {
        for (
          var s = this._getNextNode(n, !0), i = this._getNextNode(n);
          i && i != s;

        )
          r.call(this, i, i.className + " " + i.id)
            ? (i = this._removeAndGetNext(i))
            : (i = this._getNextNode(i));
      },
      _cleanHeaders: function (n) {
        let r = this._getAllNodesWithTag(n, ["h1", "h2"]);
        this._removeNodes(r, function (s) {
          let i = this._getClassWeight(s) < 0;
          return i && this.log("Removing header with low class weight:", s), i;
        });
      },
      _headerDuplicatesTitle: function (n) {
        if (n.tagName != "H1" && n.tagName != "H2") return !1;
        var r = this._getInnerText(n, !1);
        return (
          this.log("Evaluating similarity of header:", r, this._articleTitle),
          this._textSimilarity(this._articleTitle, r) > 0.75
        );
      },
      _flagIsActive: function (n) {
        return (this._flags & n) > 0;
      },
      _removeFlag: function (n) {
        this._flags = this._flags & ~n;
      },
      _isProbablyVisible: function (n) {
        return (
          (!n.style || n.style.display != "none") &&
          (!n.style || n.style.visibility != "hidden") &&
          !n.hasAttribute("hidden") &&
          (!n.hasAttribute("aria-hidden") ||
            n.getAttribute("aria-hidden") != "true" ||
            (n.className &&
              n.className.indexOf &&
              n.className.indexOf("fallback-image") !== -1))
        );
      },
      parse: function () {
        if (this._maxElemsToParse > 0) {
          var n = this._doc.getElementsByTagName("*").length;
          if (n > this._maxElemsToParse)
            throw new Error(
              "Aborting parsing document; " + n + " elements found",
            );
        }
        this._unwrapNoscriptImages(this._doc);
        var r = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
        this._removeScripts(this._doc), this._prepDocument();
        var s = this._getArticleMetadata(r);
        this._articleTitle = s.title;
        var i = this._grabArticle();
        if (!i) return null;
        if (
          (this.log("Grabbed: " + i.innerHTML),
          this._postProcessContent(i),
          !s.excerpt)
        ) {
          var o = i.getElementsByTagName("p");
          o.length > 0 && (s.excerpt = o[0].textContent.trim());
        }
        var a = i.textContent;
        return {
          title: this._articleTitle,
          byline: s.byline || this._articleByline,
          dir: this._articleDir,
          lang: this._articleLang,
          content: this._serializer(i),
          textContent: a,
          length: a.length,
          excerpt: s.excerpt,
          siteName: s.siteName || this._articleSiteName,
          publishedTime: s.publishedTime,
        };
      },
    }),
      (t.exports = e);
  })(gw);
  var xC = gw.exports,
    yw = { exports: {} };
  (function (t) {
    var e = {
      unlikelyCandidates:
        /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
    };
    function n(s) {
      return (
        (!s.style || s.style.display != "none") &&
        !s.hasAttribute("hidden") &&
        (!s.hasAttribute("aria-hidden") ||
          s.getAttribute("aria-hidden") != "true" ||
          (s.className &&
            s.className.indexOf &&
            s.className.indexOf("fallback-image") !== -1))
      );
    }
    function r(s, i = {}) {
      typeof i == "function" && (i = { visibilityChecker: i });
      var o = { minScore: 20, minContentLength: 140, visibilityChecker: n };
      i = Object.assign(o, i);
      var a = s.querySelectorAll("p, pre, article"),
        l = s.querySelectorAll("div > br");
      if (l.length) {
        var u = new Set(a);
        [].forEach.call(l, function (d) {
          u.add(d.parentNode);
        }),
          (a = Array.from(u));
      }
      var c = 0;
      return [].some.call(a, function (d) {
        if (!i.visibilityChecker(d)) return !1;
        var h = d.className + " " + d.id;
        if (
          (e.unlikelyCandidates.test(h) && !e.okMaybeItsACandidate.test(h)) ||
          d.matches("li p")
        )
          return !1;
        var p = d.textContent.trim().length;
        return p < i.minContentLength
          ? !1
          : ((c += Math.sqrt(p - i.minContentLength)), c > i.minScore);
      });
    }
    t.exports = r;
  })(yw);
  var SC = yw.exports,
    kC = xC,
    EC = SC,
    AC = { Readability: kC, isProbablyReaderable: EC };
  function TC() {
    const t = document.implementation.createHTMLDocument();
    return (
      (t.body.innerHTML = document.body.innerHTML),
      new AC.Readability(t).parse()
    );
  }
  const PC = "captureScreenshot";
  async function CC() {
    return new Promise((t, e) => {
      const n = Ah.parse({ phase: Do.Values.before });
      window.postMessage(n, "*"),
        setTimeout(() => {
          Dt.runtime
            .sendMessage({ action: PC })
            .then((r) => {
              t(r);
            })
            .catch((r) => {
              e(r);
            })
            .finally(() => {
              const r = Ah.parse({ phase: Do.Values.after });
              window.postMessage(r, "*");
            });
        }, 10);
    });
  }
  const RC = "text/plain",
    NC = "us-ascii",
    bf = (t, e) => e.some((n) => (n instanceof RegExp ? n.test(t) : n === t)),
    OC = new Set(["https:", "http:", "file:"]),
    MC = (t) => {
      try {
        const { protocol: e } = new URL(t);
        return e.endsWith(":") && !e.includes(".") && !OC.has(e);
      } catch {
        return !1;
      }
    },
    LC = (t, { stripHash: e }) => {
      var d;
      const n = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(
        t,
      );
      if (!n) throw new Error(`Invalid URL: ${t}`);
      let { type: r, data: s, hash: i } = n.groups;
      const o = r.split(";");
      i = e ? "" : i;
      let a = !1;
      o[o.length - 1] === "base64" && (o.pop(), (a = !0));
      const l = ((d = o.shift()) == null ? void 0 : d.toLowerCase()) ?? "",
        c = [
          ...o
            .map((h) => {
              let [p, v = ""] = h.split("=").map((g) => g.trim());
              return p === "charset" && ((v = v.toLowerCase()), v === NC)
                ? ""
                : `${p}${v ? `=${v}` : ""}`;
            })
            .filter(Boolean),
        ];
      return (
        a && c.push("base64"),
        (c.length > 0 || (l && l !== RC)) && c.unshift(l),
        `data:${c.join(";")},${a ? s.trim() : s}${i ? `#${i}` : ""}`
      );
    };
  function IC(t, e) {
    if (
      ((e = {
        defaultProtocol: "http",
        normalizeProtocol: !0,
        forceHttp: !1,
        forceHttps: !1,
        stripAuthentication: !0,
        stripHash: !1,
        stripTextFragment: !0,
        stripWWW: !0,
        removeQueryParameters: [/^utm_\w+/i],
        removeTrailingSlash: !0,
        removeSingleSlash: !0,
        removeDirectoryIndex: !1,
        removeExplicitPort: !1,
        sortQueryParameters: !0,
        ...e,
      }),
      typeof e.defaultProtocol == "string" &&
        !e.defaultProtocol.endsWith(":") &&
        (e.defaultProtocol = `${e.defaultProtocol}:`),
      (t = t.trim()),
      /^data:/i.test(t))
    )
      return LC(t, e);
    if (MC(t)) return t;
    const n = t.startsWith("//");
    (!n && /^\.*\//.test(t)) ||
      (t = t.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, e.defaultProtocol));
    const s = new URL(t);
    if (e.forceHttp && e.forceHttps)
      throw new Error(
        "The `forceHttp` and `forceHttps` options cannot be used together",
      );
    if (
      (e.forceHttp && s.protocol === "https:" && (s.protocol = "http:"),
      e.forceHttps && s.protocol === "http:" && (s.protocol = "https:"),
      e.stripAuthentication && ((s.username = ""), (s.password = "")),
      e.stripHash
        ? (s.hash = "")
        : e.stripTextFragment &&
          (s.hash = s.hash.replace(/#?:~:text.*?$/i, "")),
      s.pathname)
    ) {
      const o = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;
      let a = 0,
        l = "";
      for (;;) {
        const c = o.exec(s.pathname);
        if (!c) break;
        const d = c[0],
          h = c.index,
          p = s.pathname.slice(a, h);
        (l += p.replace(/\/{2,}/g, "/")), (l += d), (a = h + d.length);
      }
      const u = s.pathname.slice(a, s.pathname.length);
      (l += u.replace(/\/{2,}/g, "/")), (s.pathname = l);
    }
    if (s.pathname)
      try {
        s.pathname = decodeURI(s.pathname);
      } catch {}
    if (
      (e.removeDirectoryIndex === !0 &&
        (e.removeDirectoryIndex = [/^index\.[a-z]+$/]),
      Array.isArray(e.removeDirectoryIndex) &&
        e.removeDirectoryIndex.length > 0)
    ) {
      let o = s.pathname.split("/");
      const a = o[o.length - 1];
      bf(a, e.removeDirectoryIndex) &&
        ((o = o.slice(0, -1)), (s.pathname = o.slice(1).join("/") + "/"));
    }
    if (
      (s.hostname &&
        ((s.hostname = s.hostname.replace(/\.$/, "")),
        e.stripWWW &&
          /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(
            s.hostname,
          ) &&
          (s.hostname = s.hostname.replace(/^www\./, ""))),
      Array.isArray(e.removeQueryParameters))
    )
      for (const o of [...s.searchParams.keys()])
        bf(o, e.removeQueryParameters) && s.searchParams.delete(o);
    if (
      (!Array.isArray(e.keepQueryParameters) &&
        e.removeQueryParameters === !0 &&
        (s.search = ""),
      Array.isArray(e.keepQueryParameters) && e.keepQueryParameters.length > 0)
    )
      for (const o of [...s.searchParams.keys()])
        bf(o, e.keepQueryParameters) || s.searchParams.delete(o);
    if (e.sortQueryParameters) {
      s.searchParams.sort();
      try {
        s.search = decodeURIComponent(s.search);
      } catch {}
    }
    e.removeTrailingSlash && (s.pathname = s.pathname.replace(/\/$/, "")),
      e.removeExplicitPort && s.port && (s.port = "");
    const i = t;
    return (
      (t = s.toString()),
      !e.removeSingleSlash &&
        s.pathname === "/" &&
        !i.endsWith("/") &&
        s.hash === "" &&
        (t = t.replace(/\/$/, "")),
      (e.removeTrailingSlash || s.pathname === "/") &&
        s.hash === "" &&
        e.removeSingleSlash &&
        (t = t.replace(/\/$/, "")),
      n && !e.normalizeProtocol && (t = t.replace(/^http:\/\//, "//")),
      e.stripProtocol && (t = t.replace(/^(?:https?:)?\/\//, "")),
      t
    );
  }
  const vw = async () => {
      const t = TC();
      if (!t) {
        Oe.error("Accessibility tree is not available");
        return;
      }
      const e = t.textContent.replaceAll(
          `
`,
          " ",
        ),
        n = await CC();
      if (!n) {
        Oe.error("Screenshot is not available");
        return;
      }
      return _f.parse({
        url: IC(window.location.href),
        textContent: e,
        screenshot: n,
      });
    },
    jC = `You are a helpful assistant that answers a user's questions based on the provided page state.

The user is currently on the page {url} and the text content present on the page is as follows:
{textContent}.

The user has visited the following pages in the past before this:
{history}.

Please provide a short and concise response to the user's question/statement below. Your response should not be more than 2 sentences:

{prompt}
`;
  async function DC(t) {
    try {
      Oe.info("Ask request initiated");
      const e = await Cp(),
        n = Q0(e),
        r = jC
          .replace("{url}", t.pageState.url)
          .replace("{textContent}", t.pageState.textContent)
          .replace("{history}", n)
          .replace("{prompt}", t.prompt),
        s = await ff(r);
      return Oe.info(`Ask response received ${s}`), bC.parse({ response: s });
    } catch (e) {
      throw (Oe.error(`Ask error: ${e}`), e);
    }
  }
  function $C({
    messages: t,
    isVisible: e,
    isRecording: n,
    onContainerClose: r,
    onPlayButtonClick: s,
    onPauseButtonClick: i,
    onMessagesUpdate: o,
  }) {
    const a = C.useRef(null),
      [l, u] = C.useState(""),
      [c, d] = C.useState(!1),
      h = async () => {
        if (!(l.trim() === "" || c)) {
          d(!0);
          try {
            const v = { content: l, role: ta.Values.user },
              g = [...t, v];
            o(g), u("");
            const w = await vw(),
              m = _C.parse({ prompt: l, pageState: w }),
              y = {
                content: (await DC(m)).response,
                role: ta.Values.assistant,
              },
              _ = [...g, y];
            o(_), Oe.info("Updated messages", _);
          } catch {
            Oe.error("Error sending message:");
          } finally {
            d(!1);
          }
        }
      },
      p = (v) => {
        if (v.key === "Enter" && !v.shiftKey) {
          v.preventDefault(), h();
          return;
        }
      };
    return (
      C.useEffect(() => {
        var v;
        (v = a.current) == null || v.scrollIntoView({ behavior: "smooth" });
      }, [t]),
      e
        ? D.jsx("div", {
            className:
              "w-[350px] h-[500px] bg-white dark:bg-gray-900 transition-colors duration-200 border-2 border-black dark:border-white rounded-lg",
            children: D.jsxs("div", {
              className: "flex flex-col w-full h-full",
              children: [
                D.jsxs("div", {
                  className:
                    "px-4 py-3 flex justify-between items-center border-b dark:border-gray-700",
                  children: [
                    D.jsx("div", {
                      className: "flex items-center gap-2",
                      children: D.jsx("h1", {
                        className:
                          "font-semibold text-gray-900 dark:text-white",
                        children: "Browzy",
                      }),
                    }),
                    D.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [
                        D.jsx(wC, {
                          isRecording: n,
                          onPlayButtonClick: s,
                          onPauseButtonClick: i,
                        }),
                        D.jsx(wf, {
                          variant: "ghost",
                          size: "icon",
                          className: "text-gray-500 dark:text-gray-400",
                          onClick: r,
                          children: D.jsx(kP, { size: 20 }),
                        }),
                      ],
                    }),
                  ],
                }),
                D.jsxs("div", {
                  className:
                    "flex-1 overflow-y-auto p-4 flex flex-col gap-2 min-h-0",
                  children: [
                    t.map((v, g) =>
                      D.jsx(
                        "div",
                        {
                          className: `max-w-[80%] px-3 py-2 rounded-lg break-words ${v.role === ta.Values.user ? "bg-blue-500 text-white self-end rounded-br-none" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 self-start rounded-bl-none"}`,
                          children: v.content,
                        },
                        g,
                      ),
                    ),
                    D.jsx("div", { ref: a }),
                  ],
                }),
                D.jsxs("div", {
                  className:
                    "p-4 border-t border-gray-200 dark:border-gray-700 shadow-lg",
                  children: [
                    D.jsxs("div", {
                      className: "flex gap-2 w-full pb-2",
                      children: [
                        D.jsx(mw, {
                          type: "text",
                          className: `flex-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 
                dark:text-white dark:placeholder-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400`,
                          value: l,
                          onChange: (v) => u(v.target.value),
                          onKeyDown: p,
                          placeholder: "Type a message...",
                        }),
                        D.jsx(wf, { onClick: h, children: "Send" }),
                      ],
                    }),
                    D.jsx(pw, {}),
                  ],
                }),
              ],
            }),
          })
        : null
    );
  }
  function FC(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map(),
      n = (...r) => t(...r);
    return new Proxy(n, {
      get: (r, s) =>
        s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
    });
  }
  function Ru(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function";
  }
  const xf = (t) => Array.isArray(t);
  function ww(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
  function ia(t) {
    return typeof t == "string" || Array.isArray(t);
  }
  function _w(t) {
    const e = [{}, {}];
    return (
      t == null ||
        t.values.forEach((n, r) => {
          (e[0][r] = n.get()), (e[1][r] = n.getVelocity());
        }),
      e
    );
  }
  function Sf(t, e, n, r) {
    if (typeof e == "function") {
      const [s, i] = _w(r);
      e = e(n !== void 0 ? n : t.custom, s, i);
    }
    if (
      (typeof e == "string" && (e = t.variants && t.variants[e]),
      typeof e == "function")
    ) {
      const [s, i] = _w(r);
      e = e(n !== void 0 ? n : t.custom, s, i);
    }
    return e;
  }
  function Nu(t, e, n) {
    const r = t.getProps();
    return Sf(r, e, n !== void 0 ? n : r.custom, t);
  }
  const kf = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    Ef = ["initial", ...kf],
    oa = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    ns = new Set(oa),
    On = (t) => t * 1e3,
    Mn = (t) => t / 1e3,
    VC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    UC = (t) => ({
      type: "spring",
      stiffness: 550,
      damping: t === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    BC = { type: "keyframes", duration: 0.8 },
    zC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    WC = (t, { keyframes: e }) =>
      e.length > 2
        ? BC
        : ns.has(t)
          ? t.startsWith("scale")
            ? UC(e[1])
            : VC
          : zC;
  function Af(t, e) {
    return t ? t[e] || t.default || t : void 0;
  }
  const HC = { useManualTiming: !1 },
    GC = (t) => t !== null;
  function Ou(t, { repeat: e, repeatType: n = "loop" }, r) {
    const s = t.filter(GC),
      i = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
    return !i || r === void 0 ? s[i] : r;
  }
  const Ze = (t) => t;
  function qC(t) {
    let e = new Set(),
      n = new Set(),
      r = !1,
      s = !1;
    const i = new WeakSet();
    let o = { delta: 0, timestamp: 0, isProcessing: !1 };
    function a(u) {
      i.has(u) && (l.schedule(u), t()), u(o);
    }
    const l = {
      schedule: (u, c = !1, d = !1) => {
        const p = d && r ? e : n;
        return c && i.add(u), p.has(u) || p.add(u), u;
      },
      cancel: (u) => {
        n.delete(u), i.delete(u);
      },
      process: (u) => {
        if (((o = u), r)) {
          s = !0;
          return;
        }
        (r = !0),
          ([e, n] = [n, e]),
          n.clear(),
          e.forEach(a),
          (r = !1),
          s && ((s = !1), l.process(u));
      },
    };
    return l;
  }
  const Mu = [
      "read",
      "resolveKeyframes",
      "update",
      "preRender",
      "render",
      "postRender",
    ],
    KC = 40;
  function bw(t, e) {
    let n = !1,
      r = !0;
    const s = { delta: 0, timestamp: 0, isProcessing: !1 },
      i = () => (n = !0),
      o = Mu.reduce((m, f) => ((m[f] = qC(i)), m), {}),
      {
        read: a,
        resolveKeyframes: l,
        update: u,
        preRender: c,
        render: d,
        postRender: h,
      } = o,
      p = () => {
        const m = performance.now();
        (n = !1),
          (s.delta = r ? 1e3 / 60 : Math.max(Math.min(m - s.timestamp, KC), 1)),
          (s.timestamp = m),
          (s.isProcessing = !0),
          a.process(s),
          l.process(s),
          u.process(s),
          c.process(s),
          d.process(s),
          h.process(s),
          (s.isProcessing = !1),
          n && e && ((r = !1), t(p));
      },
      v = () => {
        (n = !0), (r = !0), s.isProcessing || t(p);
      };
    return {
      schedule: Mu.reduce((m, f) => {
        const y = o[f];
        return (
          (m[f] = (_, S = !1, b = !1) => (n || v(), y.schedule(_, S, b))), m
        );
      }, {}),
      cancel: (m) => {
        for (let f = 0; f < Mu.length; f++) o[Mu[f]].cancel(m);
      },
      state: s,
      steps: o,
    };
  }
  const {
      schedule: ce,
      cancel: wr,
      state: Be,
      steps: Tf,
    } = bw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ze, !0),
    xw = (t, e, n) =>
      (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    ZC = 1e-7,
    QC = 12;
  function XC(t, e, n, r, s) {
    let i,
      o,
      a = 0;
    do (o = e + (n - e) / 2), (i = xw(o, r, s) - t), i > 0 ? (n = o) : (e = o);
    while (Math.abs(i) > ZC && ++a < QC);
    return o;
  }
  function aa(t, e, n, r) {
    if (t === e && n === r) return Ze;
    const s = (i) => XC(i, 0, 1, t, n);
    return (i) => (i === 0 || i === 1 ? i : xw(s(i), e, r));
  }
  const Sw = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
    kw = (t) => (e) => 1 - t(1 - e),
    Ew = aa(0.33, 1.53, 0.69, 0.99),
    Pf = kw(Ew),
    Aw = Sw(Pf),
    Tw = (t) =>
      (t *= 2) < 1 ? 0.5 * Pf(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
    Cf = (t) => 1 - Math.sin(Math.acos(t)),
    Pw = kw(Cf),
    Cw = Sw(Cf),
    Rw = (t) => /^0[^.\s]+$/u.test(t);
  function JC(t) {
    return typeof t == "number"
      ? t === 0
      : t !== null
        ? t === "none" || t === "0" || Rw(t)
        : !0;
  }
  let Rf = Ze;
  const Nw = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    Ow = (t) => (e) => typeof e == "string" && e.startsWith(t),
    Mw = Ow("--"),
    YC = Ow("var(--"),
    Nf = (t) => (YC(t) ? eR.test(t.split("/*")[0].trim()) : !1),
    eR =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    tR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function nR(t) {
    const e = tR.exec(t);
    if (!e) return [,];
    const [, n, r, s] = e;
    return [`--${n ?? r}`, s];
  }
  function Lw(t, e, n = 1) {
    const [r, s] = nR(t);
    if (!r) return;
    const i = window.getComputedStyle(e).getPropertyValue(r);
    if (i) {
      const o = i.trim();
      return Nw(o) ? parseFloat(o) : o;
    }
    return Nf(s) ? Lw(s, e, n + 1) : s;
  }
  const _r = (t, e, n) => (n > e ? e : n < t ? t : n),
    li = {
      test: (t) => typeof t == "number",
      parse: parseFloat,
      transform: (t) => t,
    },
    la = { ...li, transform: (t) => _r(0, 1, t) },
    Lu = { ...li, default: 1 },
    ua = (t) => ({
      test: (e) =>
        typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
      parse: parseFloat,
      transform: (e) => `${e}${t}`,
    }),
    br = ua("deg"),
    un = ua("%"),
    $ = ua("px"),
    rR = ua("vh"),
    sR = ua("vw"),
    Iw = {
      ...un,
      parse: (t) => un.parse(t) / 100,
      transform: (t) => un.transform(t * 100),
    },
    iR = new Set([
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      "x",
      "y",
      "translateX",
      "translateY",
    ]),
    jw = (t) => t === li || t === $,
    Dw = (t, e) => parseFloat(t.split(", ")[e]),
    $w =
      (t, e) =>
      (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const s = r.match(/^matrix3d\((.+)\)$/u);
        if (s) return Dw(s[1], e);
        {
          const i = r.match(/^matrix\((.+)\)$/u);
          return i ? Dw(i[1], t) : 0;
        }
      },
    oR = new Set(["x", "y", "z"]),
    aR = oa.filter((t) => !oR.has(t));
  function lR(t) {
    const e = [];
    return (
      aR.forEach((n) => {
        const r = t.getValue(n);
        r !== void 0 &&
          (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
      }),
      e
    );
  }
  const ui = {
    width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
      t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
      t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, { top: e }) => parseFloat(e),
    left: (t, { left: e }) => parseFloat(e),
    bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
    right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
    x: $w(4, 13),
    y: $w(5, 14),
  };
  (ui.translateX = ui.x), (ui.translateY = ui.y);
  const Fw = (t) => (e) => e.test(t),
    Vw = [
      li,
      $,
      un,
      br,
      sR,
      rR,
      { test: (t) => t === "auto", parse: (t) => t },
    ],
    Uw = (t) => Vw.find(Fw(t)),
    rs = new Set();
  let Of = !1,
    Mf = !1;
  function Bw() {
    if (Mf) {
      const t = Array.from(rs).filter((r) => r.needsMeasurement),
        e = new Set(t.map((r) => r.element)),
        n = new Map();
      e.forEach((r) => {
        const s = lR(r);
        s.length && (n.set(r, s), r.render());
      }),
        t.forEach((r) => r.measureInitialState()),
        e.forEach((r) => {
          r.render();
          const s = n.get(r);
          s &&
            s.forEach(([i, o]) => {
              var a;
              (a = r.getValue(i)) === null || a === void 0 || a.set(o);
            });
        }),
        t.forEach((r) => r.measureEndState()),
        t.forEach((r) => {
          r.suspendedScrollY !== void 0 &&
            window.scrollTo(0, r.suspendedScrollY);
        });
    }
    (Mf = !1), (Of = !1), rs.forEach((t) => t.complete()), rs.clear();
  }
  function zw() {
    rs.forEach((t) => {
      t.readKeyframes(), t.needsMeasurement && (Mf = !0);
    });
  }
  function uR() {
    zw(), Bw();
  }
  class Lf {
    constructor(e, n, r, s, i, o = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = n),
        (this.name = r),
        (this.motionValue = s),
        (this.element = i),
        (this.isAsync = o);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (rs.add(this),
            Of || ((Of = !0), ce.read(zw), ce.resolveKeyframes(Bw)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: e,
        name: n,
        element: r,
        motionValue: s,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            const o = s == null ? void 0 : s.get(),
              a = e[e.length - 1];
            if (o !== void 0) e[0] = o;
            else if (r && n) {
              const l = r.readValue(n, a);
              l != null && (e[0] = l);
            }
            e[0] === void 0 && (e[0] = a), s && o === void 0 && s.set(e[0]);
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        rs.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), rs.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  const ca = (t) => Math.round(t * 1e5) / 1e5,
    If = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function cR(t) {
    return t == null;
  }
  const dR =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    jf = (t, e) => (n) =>
      !!(
        (typeof n == "string" && dR.test(n) && n.startsWith(t)) ||
        (e && !cR(n) && Object.prototype.hasOwnProperty.call(n, e))
      ),
    Ww = (t, e, n) => (r) => {
      if (typeof r != "string") return r;
      const [s, i, o, a] = r.match(If);
      return {
        [t]: parseFloat(s),
        [e]: parseFloat(i),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1,
      };
    },
    hR = (t) => _r(0, 255, t),
    Df = { ...li, transform: (t) => Math.round(hR(t)) },
    ss = {
      test: jf("rgb", "red"),
      parse: Ww("red", "green", "blue"),
      transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
        "rgba(" +
        Df.transform(t) +
        ", " +
        Df.transform(e) +
        ", " +
        Df.transform(n) +
        ", " +
        ca(la.transform(r)) +
        ")",
    };
  function fR(t) {
    let e = "",
      n = "",
      r = "",
      s = "";
    return (
      t.length > 5
        ? ((e = t.substring(1, 3)),
          (n = t.substring(3, 5)),
          (r = t.substring(5, 7)),
          (s = t.substring(7, 9)))
        : ((e = t.substring(1, 2)),
          (n = t.substring(2, 3)),
          (r = t.substring(3, 4)),
          (s = t.substring(4, 5)),
          (e += e),
          (n += n),
          (r += r),
          (s += s)),
      {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1,
      }
    );
  }
  const $f = { test: jf("#"), parse: fR, transform: ss.transform },
    ci = {
      test: jf("hsl", "hue"),
      parse: Ww("hue", "saturation", "lightness"),
      transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
        "hsla(" +
        Math.round(t) +
        ", " +
        un.transform(ca(e)) +
        ", " +
        un.transform(ca(n)) +
        ", " +
        ca(la.transform(r)) +
        ")",
    },
    Qe = {
      test: (t) => ss.test(t) || $f.test(t) || ci.test(t),
      parse: (t) =>
        ss.test(t) ? ss.parse(t) : ci.test(t) ? ci.parse(t) : $f.parse(t),
      transform: (t) =>
        typeof t == "string"
          ? t
          : t.hasOwnProperty("red")
            ? ss.transform(t)
            : ci.transform(t),
    },
    pR =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function mR(t) {
    var e, n;
    return (
      isNaN(t) &&
      typeof t == "string" &&
      (((e = t.match(If)) === null || e === void 0 ? void 0 : e.length) || 0) +
        (((n = t.match(pR)) === null || n === void 0 ? void 0 : n.length) ||
          0) >
        0
    );
  }
  const Hw = "number",
    Gw = "color",
    gR = "var",
    yR = "var(",
    qw = "${}",
    vR =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function da(t) {
    const e = t.toString(),
      n = [],
      r = { color: [], number: [], var: [] },
      s = [];
    let i = 0;
    const a = e
      .replace(
        vR,
        (l) => (
          Qe.test(l)
            ? (r.color.push(i), s.push(Gw), n.push(Qe.parse(l)))
            : l.startsWith(yR)
              ? (r.var.push(i), s.push(gR), n.push(l))
              : (r.number.push(i), s.push(Hw), n.push(parseFloat(l))),
          ++i,
          qw
        ),
      )
      .split(qw);
    return { values: n, split: a, indexes: r, types: s };
  }
  function Kw(t) {
    return da(t).values;
  }
  function Zw(t) {
    const { split: e, types: n } = da(t),
      r = e.length;
    return (s) => {
      let i = "";
      for (let o = 0; o < r; o++)
        if (((i += e[o]), s[o] !== void 0)) {
          const a = n[o];
          a === Hw
            ? (i += ca(s[o]))
            : a === Gw
              ? (i += Qe.transform(s[o]))
              : (i += s[o]);
        }
      return i;
    };
  }
  const wR = (t) => (typeof t == "number" ? 0 : t);
  function _R(t) {
    const e = Kw(t);
    return Zw(t)(e.map(wR));
  }
  const xr = {
      test: mR,
      parse: Kw,
      createTransformer: Zw,
      getAnimatableNone: _R,
    },
    bR = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function xR(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [r] = n.match(If) || [];
    if (!r) return t;
    const s = n.replace(r, "");
    let i = bR.has(e) ? 1 : 0;
    return r !== n && (i *= 100), e + "(" + i + s + ")";
  }
  const SR = /\b([a-z-]*)\(.*?\)/gu,
    Ff = {
      ...xr,
      getAnimatableNone: (t) => {
        const e = t.match(SR);
        return e ? e.map(xR).join(" ") : t;
      },
    },
    kR = {
      borderWidth: $,
      borderTopWidth: $,
      borderRightWidth: $,
      borderBottomWidth: $,
      borderLeftWidth: $,
      borderRadius: $,
      radius: $,
      borderTopLeftRadius: $,
      borderTopRightRadius: $,
      borderBottomRightRadius: $,
      borderBottomLeftRadius: $,
      width: $,
      maxWidth: $,
      height: $,
      maxHeight: $,
      top: $,
      right: $,
      bottom: $,
      left: $,
      padding: $,
      paddingTop: $,
      paddingRight: $,
      paddingBottom: $,
      paddingLeft: $,
      margin: $,
      marginTop: $,
      marginRight: $,
      marginBottom: $,
      marginLeft: $,
      backgroundPositionX: $,
      backgroundPositionY: $,
    },
    ER = {
      rotate: br,
      rotateX: br,
      rotateY: br,
      rotateZ: br,
      scale: Lu,
      scaleX: Lu,
      scaleY: Lu,
      scaleZ: Lu,
      skew: br,
      skewX: br,
      skewY: br,
      distance: $,
      translateX: $,
      translateY: $,
      translateZ: $,
      x: $,
      y: $,
      z: $,
      perspective: $,
      transformPerspective: $,
      opacity: la,
      originX: Iw,
      originY: Iw,
      originZ: $,
    },
    Qw = { ...li, transform: Math.round },
    Vf = {
      ...kR,
      ...ER,
      zIndex: Qw,
      size: $,
      fillOpacity: la,
      strokeOpacity: la,
      numOctaves: Qw,
    },
    AR = {
      ...Vf,
      color: Qe,
      backgroundColor: Qe,
      outlineColor: Qe,
      fill: Qe,
      stroke: Qe,
      borderColor: Qe,
      borderTopColor: Qe,
      borderRightColor: Qe,
      borderBottomColor: Qe,
      borderLeftColor: Qe,
      filter: Ff,
      WebkitFilter: Ff,
    },
    Uf = (t) => AR[t];
  function Xw(t, e) {
    let n = Uf(t);
    return (
      n !== Ff && (n = xr),
      n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
    );
  }
  const TR = new Set(["auto", "none", "0"]);
  function PR(t, e, n) {
    let r = 0,
      s;
    for (; r < t.length && !s; ) {
      const i = t[r];
      typeof i == "string" && !TR.has(i) && da(i).values.length && (s = t[r]),
        r++;
    }
    if (s && n) for (const i of e) t[i] = Xw(n, s);
  }
  class Jw extends Lf {
    constructor(e, n, r, s, i) {
      super(e, n, r, s, i, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: n, name: r } = this;
      if (!n || !n.current) return;
      super.readKeyframes();
      for (let l = 0; l < e.length; l++) {
        let u = e[l];
        if (typeof u == "string" && ((u = u.trim()), Nf(u))) {
          const c = Lw(u, n.current);
          c !== void 0 && (e[l] = c),
            l === e.length - 1 && (this.finalKeyframe = u);
        }
      }
      if ((this.resolveNoneKeyframes(), !iR.has(r) || e.length !== 2)) return;
      const [s, i] = e,
        o = Uw(s),
        a = Uw(i);
      if (o !== a)
        if (jw(o) && jw(a))
          for (let l = 0; l < e.length; l++) {
            const u = e[l];
            typeof u == "string" && (e[l] = parseFloat(u));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: n } = this,
        r = [];
      for (let s = 0; s < e.length; s++) JC(e[s]) && r.push(s);
      r.length && PR(e, r, n);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: n, name: r } = this;
      if (!e || !e.current) return;
      r === "height" && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = ui[r](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (n[0] = this.measuredOrigin);
      const s = n[n.length - 1];
      s !== void 0 && e.getValue(r, s).jump(s, !1);
    }
    measureEndState() {
      var e;
      const { element: n, name: r, unresolvedKeyframes: s } = this;
      if (!n || !n.current) return;
      const i = n.getValue(r);
      i && i.jump(this.measuredOrigin, !1);
      const o = s.length - 1,
        a = s[o];
      (s[o] = ui[r](
        n.measureViewportBox(),
        window.getComputedStyle(n.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((e = this.removedTransforms) === null || e === void 0) &&
          e.length &&
          this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u);
          }),
        this.resolveNoneKeyframes();
    }
  }
  function Bf(t) {
    return typeof t == "function";
  }
  let Iu;
  function CR() {
    Iu = void 0;
  }
  const cn = {
      now: () => (
        Iu === void 0 &&
          cn.set(
            Be.isProcessing || HC.useManualTiming
              ? Be.timestamp
              : performance.now(),
          ),
        Iu
      ),
      set: (t) => {
        (Iu = t), queueMicrotask(CR);
      },
    },
    Yw = (t, e) =>
      e === "zIndex"
        ? !1
        : !!(
            typeof t == "number" ||
            Array.isArray(t) ||
            (typeof t == "string" &&
              (xr.test(t) || t === "0") &&
              !t.startsWith("url("))
          );
  function RR(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
  }
  function NR(t, e, n, r) {
    const s = t[0];
    if (s === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const i = t[t.length - 1],
      o = Yw(s, e),
      a = Yw(i, e);
    return !o || !a ? !1 : RR(t) || ((n === "spring" || Bf(n)) && r);
  }
  const OR = 40;
  class e_ {
    constructor({
      autoplay: e = !0,
      delay: n = 0,
      type: r = "keyframes",
      repeat: s = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...a
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = cn.now()),
        (this.options = {
          autoplay: e,
          delay: n,
          type: r,
          repeat: s,
          repeatDelay: i,
          repeatType: o,
          ...a,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > OR
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && uR(), this._resolved
      );
    }
    onKeyframesResolved(e, n) {
      (this.resolvedAt = cn.now()), (this.hasAttemptedResolve = !0);
      const {
        name: r,
        type: s,
        velocity: i,
        delay: o,
        onComplete: a,
        onUpdate: l,
        isGenerator: u,
      } = this.options;
      if (!u && !NR(e, r, s, i))
        if (o) this.options.duration = 0;
        else {
          l == null || l(Ou(e, this.options, n)),
            a == null || a(),
            this.resolveFinishedPromise();
          return;
        }
      const c = this.initPlayback(e, n);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: n, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, n) {
      return this.currentFinishedPromise.then(e, n);
    }
    flatten() {
      (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  }
  function t_(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const MR = 5;
  function n_(t, e, n) {
    const r = Math.max(e - MR, 0);
    return t_(n - t(r), e - r);
  }
  const zf = 0.001,
    LR = 0.01,
    IR = 10,
    jR = 0.05,
    DR = 1;
  function $R({
    duration: t = 800,
    bounce: e = 0.25,
    velocity: n = 0,
    mass: r = 1,
  }) {
    let s,
      i,
      o = 1 - e;
    (o = _r(jR, DR, o)),
      (t = _r(LR, IR, Mn(t))),
      o < 1
        ? ((s = (u) => {
            const c = u * o,
              d = c * t,
              h = c - n,
              p = Wf(u, o),
              v = Math.exp(-d);
            return zf - (h / p) * v;
          }),
          (i = (u) => {
            const d = u * o * t,
              h = d * n + n,
              p = Math.pow(o, 2) * Math.pow(u, 2) * t,
              v = Math.exp(-d),
              g = Wf(Math.pow(u, 2), o);
            return ((-s(u) + zf > 0 ? -1 : 1) * ((h - p) * v)) / g;
          }))
        : ((s = (u) => {
            const c = Math.exp(-u * t),
              d = (u - n) * t + 1;
            return -zf + c * d;
          }),
          (i = (u) => {
            const c = Math.exp(-u * t),
              d = (n - u) * (t * t);
            return c * d;
          }));
    const a = 5 / t,
      l = VR(s, i, a);
    if (((t = On(t)), isNaN(l)))
      return { stiffness: 100, damping: 10, duration: t };
    {
      const u = Math.pow(l, 2) * r;
      return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: t };
    }
  }
  const FR = 12;
  function VR(t, e, n) {
    let r = n;
    for (let s = 1; s < FR; s++) r = r - t(r) / e(r);
    return r;
  }
  function Wf(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  const UR = ["duration", "bounce"],
    BR = ["stiffness", "damping", "mass"];
  function r_(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function zR(t) {
    let e = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...t,
    };
    if (!r_(t, BR) && r_(t, UR)) {
      const n = $R(t);
      (e = { ...e, ...n, mass: 1 }), (e.isResolvedFromDuration = !0);
    }
    return e;
  }
  function s_({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
    const s = t[0],
      i = t[t.length - 1],
      o = { done: !1, value: s },
      {
        stiffness: a,
        damping: l,
        mass: u,
        duration: c,
        velocity: d,
        isResolvedFromDuration: h,
      } = zR({ ...r, velocity: -Mn(r.velocity || 0) }),
      p = d || 0,
      v = l / (2 * Math.sqrt(a * u)),
      g = i - s,
      w = Mn(Math.sqrt(a / u)),
      m = Math.abs(g) < 5;
    n || (n = m ? 0.01 : 2), e || (e = m ? 0.005 : 0.5);
    let f;
    if (v < 1) {
      const y = Wf(w, v);
      f = (_) => {
        const S = Math.exp(-v * w * _);
        return (
          i -
          S * (((p + v * w * g) / y) * Math.sin(y * _) + g * Math.cos(y * _))
        );
      };
    } else if (v === 1) f = (y) => i - Math.exp(-w * y) * (g + (p + w * g) * y);
    else {
      const y = w * Math.sqrt(v * v - 1);
      f = (_) => {
        const S = Math.exp(-v * w * _),
          b = Math.min(y * _, 300);
        return (
          i - (S * ((p + v * w * g) * Math.sinh(b) + y * g * Math.cosh(b))) / y
        );
      };
    }
    return {
      calculatedDuration: (h && c) || null,
      next: (y) => {
        const _ = f(y);
        if (h) o.done = y >= c;
        else {
          let S = 0;
          v < 1 && (S = y === 0 ? On(p) : n_(f, y, _));
          const b = Math.abs(S) <= n,
            k = Math.abs(i - _) <= e;
          o.done = b && k;
        }
        return (o.value = o.done ? i : _), o;
      },
    };
  }
  function i_({
    keyframes: t,
    velocity: e = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: s = 10,
    bounceStiffness: i = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = 0.5,
    restSpeed: c,
  }) {
    const d = t[0],
      h = { done: !1, value: d },
      p = (x) => (a !== void 0 && x < a) || (l !== void 0 && x > l),
      v = (x) =>
        a === void 0
          ? l
          : l === void 0 || Math.abs(a - x) < Math.abs(l - x)
            ? a
            : l;
    let g = n * e;
    const w = d + g,
      m = o === void 0 ? w : o(w);
    m !== w && (g = m - d);
    const f = (x) => -g * Math.exp(-x / r),
      y = (x) => m + f(x),
      _ = (x) => {
        const R = f(x),
          N = y(x);
        (h.done = Math.abs(R) <= u), (h.value = h.done ? m : N);
      };
    let S, b;
    const k = (x) => {
      p(h.value) &&
        ((S = x),
        (b = s_({
          keyframes: [h.value, v(h.value)],
          velocity: n_(y, x, h.value),
          damping: s,
          stiffness: i,
          restDelta: u,
          restSpeed: c,
        })));
    };
    return (
      k(0),
      {
        calculatedDuration: null,
        next: (x) => {
          let R = !1;
          return (
            !b && S === void 0 && ((R = !0), _(x), k(x)),
            S !== void 0 && x >= S ? b.next(x - S) : (!R && _(x), h)
          );
        },
      }
    );
  }
  const WR = aa(0.42, 0, 1, 1),
    HR = aa(0, 0, 0.58, 1),
    o_ = aa(0.42, 0, 0.58, 1),
    GR = (t) => Array.isArray(t) && typeof t[0] != "number",
    Hf = (t) => Array.isArray(t) && typeof t[0] == "number",
    a_ = {
      linear: Ze,
      easeIn: WR,
      easeInOut: o_,
      easeOut: HR,
      circIn: Cf,
      circInOut: Cw,
      circOut: Pw,
      backIn: Pf,
      backInOut: Aw,
      backOut: Ew,
      anticipate: Tw,
    },
    l_ = (t) => {
      if (Hf(t)) {
        Rf(t.length === 4);
        const [e, n, r, s] = t;
        return aa(e, n, r, s);
      } else if (typeof t == "string") return Rf(a_[t] !== void 0), a_[t];
      return t;
    },
    qR = (t, e) => (n) => e(t(n)),
    Ln = (...t) => t.reduce(qR),
    di = (t, e, n) => {
      const r = e - t;
      return r === 0 ? 1 : (n - t) / r;
    },
    ke = (t, e, n) => t + (e - t) * n;
  function Gf(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 0.16666666666666666
        ? t + (e - t) * 6 * n
        : n < 0.5
          ? e
          : n < 0.6666666666666666
            ? t + (e - t) * (0.6666666666666666 - n) * 6
            : t
    );
  }
  function KR({ hue: t, saturation: e, lightness: n, alpha: r }) {
    (t /= 360), (e /= 100), (n /= 100);
    let s = 0,
      i = 0,
      o = 0;
    if (!e) s = i = o = n;
    else {
      const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
        l = 2 * n - a;
      (s = Gf(l, a, t + 0.3333333333333333)),
        (i = Gf(l, a, t)),
        (o = Gf(l, a, t - 0.3333333333333333));
    }
    return {
      red: Math.round(s * 255),
      green: Math.round(i * 255),
      blue: Math.round(o * 255),
      alpha: r,
    };
  }
  function ju(t, e) {
    return (n) => (n > 0 ? e : t);
  }
  const qf = (t, e, n) => {
      const r = t * t,
        s = n * (e * e - r) + r;
      return s < 0 ? 0 : Math.sqrt(s);
    },
    ZR = [$f, ss, ci],
    QR = (t) => ZR.find((e) => e.test(t));
  function u_(t) {
    const e = QR(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === ci && (n = KR(n)), n;
  }
  const c_ = (t, e) => {
      const n = u_(t),
        r = u_(e);
      if (!n || !r) return ju(t, e);
      const s = { ...n };
      return (i) => (
        (s.red = qf(n.red, r.red, i)),
        (s.green = qf(n.green, r.green, i)),
        (s.blue = qf(n.blue, r.blue, i)),
        (s.alpha = ke(n.alpha, r.alpha, i)),
        ss.transform(s)
      );
    },
    Kf = new Set(["none", "hidden"]);
  function XR(t, e) {
    return Kf.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
  }
  function JR(t, e) {
    return (n) => ke(t, e, n);
  }
  function Zf(t) {
    return typeof t == "number"
      ? JR
      : typeof t == "string"
        ? Nf(t)
          ? ju
          : Qe.test(t)
            ? c_
            : tN
        : Array.isArray(t)
          ? d_
          : typeof t == "object"
            ? Qe.test(t)
              ? c_
              : YR
            : ju;
  }
  function d_(t, e) {
    const n = [...t],
      r = n.length,
      s = t.map((i, o) => Zf(i)(i, e[o]));
    return (i) => {
      for (let o = 0; o < r; o++) n[o] = s[o](i);
      return n;
    };
  }
  function YR(t, e) {
    const n = { ...t, ...e },
      r = {};
    for (const s in n)
      t[s] !== void 0 && e[s] !== void 0 && (r[s] = Zf(t[s])(t[s], e[s]));
    return (s) => {
      for (const i in r) n[i] = r[i](s);
      return n;
    };
  }
  function eN(t, e) {
    var n;
    const r = [],
      s = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < e.values.length; i++) {
      const o = e.types[i],
        a = t.indexes[o][s[o]],
        l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
      (r[i] = l), s[o]++;
    }
    return r;
  }
  const tN = (t, e) => {
    const n = xr.createTransformer(e),
      r = da(t),
      s = da(e);
    return r.indexes.var.length === s.indexes.var.length &&
      r.indexes.color.length === s.indexes.color.length &&
      r.indexes.number.length >= s.indexes.number.length
      ? (Kf.has(t) && !s.values.length) || (Kf.has(e) && !r.values.length)
        ? XR(t, e)
        : Ln(d_(eN(r, s), s.values), n)
      : ju(t, e);
  };
  function h_(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number"
      ? ke(t, e, n)
      : Zf(t)(t, e);
  }
  function nN(t, e, n) {
    const r = [],
      s = n || h_,
      i = t.length - 1;
    for (let o = 0; o < i; o++) {
      let a = s(t[o], t[o + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[o] || Ze : e;
        a = Ln(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function rN(t, e, { clamp: n = !0, ease: r, mixer: s } = {}) {
    const i = t.length;
    if ((Rf(i === e.length), i === 1)) return () => e[0];
    if (i === 2 && t[0] === t[1]) return () => e[1];
    t[0] > t[i - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
    const o = nN(e, r, s),
      a = o.length,
      l = (u) => {
        let c = 0;
        if (a > 1) for (; c < t.length - 2 && !(u < t[c + 1]); c++);
        const d = di(t[c], t[c + 1], u);
        return o[c](d);
      };
    return n ? (u) => l(_r(t[0], t[i - 1], u)) : l;
  }
  function sN(t, e) {
    const n = t[t.length - 1];
    for (let r = 1; r <= e; r++) {
      const s = di(0, e, r);
      t.push(ke(n, 1, s));
    }
  }
  function iN(t) {
    const e = [0];
    return sN(e, t.length - 1), e;
  }
  function oN(t, e) {
    return t.map((n) => n * e);
  }
  function aN(t, e) {
    return t.map(() => e || o_).splice(0, t.length - 1);
  }
  function Du({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: r = "easeInOut",
  }) {
    const s = GR(r) ? r.map(l_) : l_(r),
      i = { done: !1, value: e[0] },
      o = oN(n && n.length === e.length ? n : iN(e), t),
      a = rN(o, e, { ease: Array.isArray(s) ? s : aN(e, s) });
    return {
      calculatedDuration: t,
      next: (l) => ((i.value = a(l)), (i.done = l >= t), i),
    };
  }
  const f_ = 2e4;
  function lN(t) {
    let e = 0;
    const n = 50;
    let r = t.next(e);
    for (; !r.done && e < f_; ) (e += n), (r = t.next(e));
    return e >= f_ ? 1 / 0 : e;
  }
  const uN = (t) => {
      const e = ({ timestamp: n }) => t(n);
      return {
        start: () => ce.update(e, !0),
        stop: () => wr(e),
        now: () => (Be.isProcessing ? Be.timestamp : cn.now()),
      };
    },
    cN = { decay: i_, inertia: i_, tween: Du, keyframes: Du, spring: s_ },
    dN = (t) => t / 100;
  class Qf extends e_ {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          const { onStop: l } = this.options;
          l && l();
        });
      const {
          name: n,
          motionValue: r,
          element: s,
          keyframes: i,
        } = this.options,
        o = (s == null ? void 0 : s.KeyframeResolver) || Lf,
        a = (l, u) => this.onKeyframesResolved(l, u);
      (this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          );
    }
    initPlayback(e) {
      const {
          type: n = "keyframes",
          repeat: r = 0,
          repeatDelay: s = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        a = Bf(n) ? n : cN[n] || Du;
      let l, u;
      a !== Du &&
        typeof e[0] != "number" &&
        ((l = Ln(dN, h_(e[0], e[1]))), (e = [0, 100]));
      const c = a({ ...this.options, keyframes: e });
      i === "mirror" &&
        (u = a({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = lN(c));
      const { calculatedDuration: d } = c,
        h = d + s,
        p = h * (r + 1) - s;
      return {
        generator: c,
        mirroredGenerator: u,
        mapPercentToKeyframes: l,
        calculatedDuration: d,
        resolvedDuration: h,
        totalDuration: p,
      };
    }
    onPostResolved() {
      const { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, n = !1) {
      const { resolved: r } = this;
      if (!r) {
        const { keyframes: x } = this.options;
        return { done: !0, value: x[x.length - 1] };
      }
      const {
        finalKeyframe: s,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: a,
        keyframes: l,
        calculatedDuration: u,
        totalDuration: c,
        resolvedDuration: d,
      } = r;
      if (this.startTime === null) return i.next(0);
      const {
        delay: h,
        repeat: p,
        repeatType: v,
        repeatDelay: g,
        onUpdate: w,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        n
          ? (this.currentTime = e)
          : this.holdTime !== null
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
        f = this.speed >= 0 ? m < 0 : m > c;
      (this.currentTime = Math.max(m, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let y = this.currentTime,
        _ = i;
      if (p) {
        const x = Math.min(this.currentTime, c) / d;
        let R = Math.floor(x),
          N = x % 1;
        !N && x >= 1 && (N = 1),
          N === 1 && R--,
          (R = Math.min(R, p + 1)),
          !!(R % 2) &&
            (v === "reverse"
              ? ((N = 1 - N), g && (N -= g / d))
              : v === "mirror" && (_ = o)),
          (y = _r(0, 1, N) * d);
      }
      const S = f ? { done: !1, value: l[0] } : _.next(y);
      a && (S.value = a(S.value));
      let { done: b } = S;
      !f &&
        u !== null &&
        (b = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      const k =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && b));
      return (
        k && s !== void 0 && (S.value = Ou(l, this.options, s)),
        w && w(S.value),
        k && this.finish(),
        S
      );
    }
    get duration() {
      const { resolved: e } = this;
      return e ? Mn(e.calculatedDuration) : 0;
    }
    get time() {
      return Mn(this.currentTime);
    }
    set time(e) {
      (e = On(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      const n = this.playbackSpeed !== e;
      (this.playbackSpeed = e), n && (this.time = Mn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      const { driver: e = uN, onPlay: n, startTime: r } = this.options;
      this.driver || (this.driver = e((i) => this.tick(i))), n && n();
      const s = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime
          ? this.state === "finished" && (this.startTime = s)
          : (this.startTime = r ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  }
  const hN = new Set(["opacity", "clipPath", "filter", "transform"]),
    fN = 10,
    pN = (t, e) => {
      let n = "";
      const r = Math.max(Math.round(e / fN), 2);
      for (let s = 0; s < r; s++) n += t(di(0, r - 1, s)) + ", ";
      return `linear(${n.substring(0, n.length - 2)})`;
    };
  function Xf(t) {
    let e;
    return () => (e === void 0 && (e = t()), e);
  }
  const mN = { linearEasing: void 0 };
  function gN(t, e) {
    const n = Xf(t);
    return () => {
      var r;
      return (r = mN[e]) !== null && r !== void 0 ? r : n();
    };
  }
  const $u = gN(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing");
  function p_(t) {
    return !!(
      (typeof t == "function" && $u()) ||
      !t ||
      (typeof t == "string" && (t in Jf || $u())) ||
      Hf(t) ||
      (Array.isArray(t) && t.every(p_))
    );
  }
  const ha = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
    Jf = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: ha([0, 0.65, 0.55, 1]),
      circOut: ha([0.55, 0, 1, 0.45]),
      backIn: ha([0.31, 0.01, 0.66, -0.59]),
      backOut: ha([0.33, 1.53, 0.69, 0.99]),
    };
  function m_(t, e) {
    if (t)
      return typeof t == "function" && $u()
        ? pN(t, e)
        : Hf(t)
          ? ha(t)
          : Array.isArray(t)
            ? t.map((n) => m_(n, e) || Jf.easeOut)
            : Jf[t];
  }
  function yN(
    t,
    e,
    n,
    {
      delay: r = 0,
      duration: s = 300,
      repeat: i = 0,
      repeatType: o = "loop",
      ease: a = "easeInOut",
      times: l,
    } = {},
  ) {
    const u = { [e]: n };
    l && (u.offset = l);
    const c = m_(a, s);
    return (
      Array.isArray(c) && (u.easing = c),
      t.animate(u, {
        delay: r,
        duration: s,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: i + 1,
        direction: o === "reverse" ? "alternate" : "normal",
      })
    );
  }
  function g_(t, e) {
    (t.timeline = e), (t.onfinish = null);
  }
  const vN = Xf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Fu = 10,
    wN = 2e4;
  function _N(t) {
    return Bf(t.type) || t.type === "spring" || !p_(t.ease);
  }
  function bN(t, e) {
    const n = new Qf({
      ...e,
      keyframes: t,
      repeat: 0,
      delay: 0,
      isGenerator: !0,
    });
    let r = { done: !1, value: t[0] };
    const s = [];
    let i = 0;
    for (; !r.done && i < wN; ) (r = n.sample(i)), s.push(r.value), (i += Fu);
    return { times: void 0, keyframes: s, duration: i - Fu, ease: "linear" };
  }
  const y_ = { anticipate: Tw, backInOut: Aw, circInOut: Cw };
  function xN(t) {
    return t in y_;
  }
  class v_ extends e_ {
    constructor(e) {
      super(e);
      const {
        name: n,
        motionValue: r,
        element: s,
        keyframes: i,
      } = this.options;
      (this.resolver = new Jw(
        i,
        (o, a) => this.onKeyframesResolved(o, a),
        n,
        r,
        s,
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(e, n) {
      var r;
      let {
        duration: s = 300,
        times: i,
        ease: o,
        type: a,
        motionValue: l,
        name: u,
        startTime: c,
      } = this.options;
      if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
      if (
        (typeof o == "string" && $u() && xN(o) && (o = y_[o]), _N(this.options))
      ) {
        const {
            onComplete: h,
            onUpdate: p,
            motionValue: v,
            element: g,
            ...w
          } = this.options,
          m = bN(e, w);
        (e = m.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (s = m.duration),
          (i = m.times),
          (o = m.ease),
          (a = "keyframes");
      }
      const d = yN(l.owner.current, u, e, {
        ...this.options,
        duration: s,
        times: i,
        ease: o,
      });
      return (
        (d.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (g_(d, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (d.onfinish = () => {
              const { onComplete: h } = this.options;
              l.set(Ou(e, this.options, n)),
                h && h(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: d, duration: s, times: i, type: a, ease: o, keyframes: e }
      );
    }
    get duration() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { duration: n } = e;
      return Mn(n);
    }
    get time() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { animation: n } = e;
      return Mn(n.currentTime || 0);
    }
    set time(e) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: r } = n;
      r.currentTime = On(e);
    }
    get speed() {
      const { resolved: e } = this;
      if (!e) return 1;
      const { animation: n } = e;
      return n.playbackRate;
    }
    set speed(e) {
      const { resolved: n } = this;
      if (!n) return;
      const { animation: r } = n;
      r.playbackRate = e;
    }
    get state() {
      const { resolved: e } = this;
      if (!e) return "idle";
      const { animation: n } = e;
      return n.playState;
    }
    get startTime() {
      const { resolved: e } = this;
      if (!e) return null;
      const { animation: n } = e;
      return n.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        const { resolved: n } = this;
        if (!n) return Ze;
        const { animation: r } = n;
        g_(r, e);
      }
      return Ze;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: e } = this;
      if (!e) return;
      const { animation: n } = e;
      n.playState === "finished" && this.updateFinishedPromise(), n.play();
    }
    pause() {
      const { resolved: e } = this;
      if (!e) return;
      const { animation: n } = e;
      n.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: e } = this;
      if (!e) return;
      const {
        animation: n,
        keyframes: r,
        duration: s,
        type: i,
        ease: o,
        times: a,
      } = e;
      if (n.playState === "idle" || n.playState === "finished") return;
      if (this.time) {
        const {
            motionValue: u,
            onUpdate: c,
            onComplete: d,
            element: h,
            ...p
          } = this.options,
          v = new Qf({
            ...p,
            keyframes: r,
            duration: s,
            type: i,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          g = On(this.time);
        u.setWithVelocity(v.sample(g - Fu).value, v.sample(g).value, Fu);
      }
      const { onStop: l } = this.options;
      l && l(), this.cancel();
    }
    complete() {
      const { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      const { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      const {
        motionValue: n,
        name: r,
        repeatDelay: s,
        repeatType: i,
        damping: o,
        type: a,
      } = e;
      return (
        vN() &&
        r &&
        hN.has(r) &&
        n &&
        n.owner &&
        n.owner.current instanceof HTMLElement &&
        !n.owner.getProps().onUpdate &&
        !s &&
        i !== "mirror" &&
        o !== 0 &&
        a !== "inertia"
      );
    }
  }
  const SN = Xf(() => window.ScrollTimeline !== void 0);
  class kN {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    then(e, n) {
      return Promise.all(this.animations).then(e).catch(n);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, n) {
      for (let r = 0; r < this.animations.length; r++)
        this.animations[r][e] = n;
    }
    attachTimeline(e, n) {
      const r = this.animations.map((s) =>
        SN() && s.attachTimeline ? s.attachTimeline(e) : n(s),
      );
      return () => {
        r.forEach((s, i) => {
          s && s(), this.animations[i].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let e = 0;
      for (let n = 0; n < this.animations.length; n++)
        e = Math.max(e, this.animations[n].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((n) => n[e]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  function EN({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: s,
    repeat: i,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
  }) {
    return !!Object.keys(c).length;
  }
  const Yf =
      (t, e, n, r = {}, s, i) =>
      (o) => {
        const a = Af(r, t) || {},
          l = a.delay || r.delay || 0;
        let { elapsed: u = 0 } = r;
        u = u - On(l);
        let c = {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: "easeOut",
          velocity: e.getVelocity(),
          ...a,
          delay: -u,
          onUpdate: (h) => {
            e.set(h), a.onUpdate && a.onUpdate(h);
          },
          onComplete: () => {
            o(), a.onComplete && a.onComplete();
          },
          name: t,
          motionValue: e,
          element: i ? void 0 : s,
        };
        EN(a) || (c = { ...c, ...WC(t, c) }),
          c.duration && (c.duration = On(c.duration)),
          c.repeatDelay && (c.repeatDelay = On(c.repeatDelay)),
          c.from !== void 0 && (c.keyframes[0] = c.from);
        let d = !1;
        if (
          ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
            ((c.duration = 0), c.delay === 0 && (d = !0)),
          d && !i && e.get() !== void 0)
        ) {
          const h = Ou(c.keyframes, a);
          if (h !== void 0)
            return (
              ce.update(() => {
                c.onUpdate(h), c.onComplete();
              }),
              new kN([])
            );
        }
        return !i && v_.supports(c) ? new v_(c) : new Qf(c);
      },
    AN = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
    TN = (t) => (xf(t) ? t[t.length - 1] || 0 : t);
  function ep(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function tp(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  class np {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return ep(this.subscriptions, e), () => tp(this.subscriptions, e);
    }
    notify(e, n, r) {
      const s = this.subscriptions.length;
      if (s)
        if (s === 1) this.subscriptions[0](e, n, r);
        else
          for (let i = 0; i < s; i++) {
            const o = this.subscriptions[i];
            o && o(e, n, r);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const w_ = 30,
    PN = (t) => !isNaN(parseFloat(t));
  class CN {
    constructor(e, n = {}) {
      (this.version = "11.11.17"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (r, s = !0) => {
          const i = cn.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(r),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            s &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = n.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = cn.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = PN(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, n) {
      this.events[e] || (this.events[e] = new np());
      const r = this.events[e].add(n);
      return e === "change"
        ? () => {
            r(),
              ce.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : r;
    }
    clearListeners() {
      for (const e in this.events) this.events[e].clear();
    }
    attach(e, n) {
      (this.passiveEffect = e), (this.stopPassiveEffect = n);
    }
    set(e, n = !0) {
      !n || !this.passiveEffect
        ? this.updateAndNotify(e, n)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, n, r) {
      this.set(n),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - r);
    }
    jump(e, n = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const e = cn.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > w_
      )
        return 0;
      const n = Math.min(this.updatedAt - this.prevUpdatedAt, w_);
      return t_(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((n) => {
          (this.hasAnimated = !0),
            (this.animation = e(n)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function fa(t, e) {
    return new CN(t, e);
  }
  function RN(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, fa(n));
  }
  function NN(t, e) {
    const n = Nu(t, e);
    let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
    i = { ...i, ...r };
    for (const o in i) {
      const a = TN(i[o]);
      RN(t, o, a);
    }
  }
  const rp = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    __ = "data-" + rp("framerAppearId");
  function b_(t) {
    return t.props[__];
  }
  const Xe = (t) => !!(t && t.getVelocity);
  function ON(t) {
    return !!(Xe(t) && t.add);
  }
  function sp(t, e) {
    const n = t.getValue("willChange");
    if (ON(n)) return n.add(e);
  }
  function MN({ protectedKeys: t, needsAnimating: e }, n) {
    const r = t.hasOwnProperty(n) && e[n] !== !0;
    return (e[n] = !1), r;
  }
  function x_(t, e, { delay: n = 0, transitionOverride: r, type: s } = {}) {
    var i;
    let {
      transition: o = t.getDefaultTransition(),
      transitionEnd: a,
      ...l
    } = e;
    r && (o = r);
    const u = [],
      c = s && t.animationState && t.animationState.getState()[s];
    for (const d in l) {
      const h = t.getValue(
          d,
          (i = t.latestValues[d]) !== null && i !== void 0 ? i : null,
        ),
        p = l[d];
      if (p === void 0 || (c && MN(c, d))) continue;
      const v = { delay: n, ...Af(o || {}, d) };
      let g = !1;
      if (window.MotionHandoffAnimation) {
        const m = b_(t);
        if (m) {
          const f = window.MotionHandoffAnimation(m, d, ce);
          f !== null && ((v.startTime = f), (g = !0));
        }
      }
      sp(t, d),
        h.start(
          Yf(
            d,
            h,
            p,
            t.shouldReduceMotion && ns.has(d) ? { type: !1 } : v,
            t,
            g,
          ),
        );
      const w = h.animation;
      w && u.push(w);
    }
    return (
      a &&
        Promise.all(u).then(() => {
          ce.update(() => {
            a && NN(t, a);
          });
        }),
      u
    );
  }
  function ip(t, e, n = {}) {
    var r;
    const s = Nu(
      t,
      e,
      n.type === "exit"
        ? (r = t.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0,
    );
    let { transition: i = t.getDefaultTransition() || {} } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(x_(t, s, n)) : () => Promise.resolve(),
      a =
        t.variantChildren && t.variantChildren.size
          ? (u = 0) => {
              const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: h,
              } = i;
              return LN(t, e, c + u, d, h, n);
            }
          : () => Promise.resolve(),
      { when: l } = i;
    if (l) {
      const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
      return u().then(() => c());
    } else return Promise.all([o(), a(n.delay)]);
  }
  function LN(t, e, n = 0, r = 0, s = 1, i) {
    const o = [],
      a = (t.variantChildren.size - 1) * r,
      l = s === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return (
      Array.from(t.variantChildren)
        .sort(IN)
        .forEach((u, c) => {
          u.notify("AnimationStart", e),
            o.push(
              ip(u, e, { ...i, delay: n + l(c) }).then(() =>
                u.notify("AnimationComplete", e),
              ),
            );
        }),
      Promise.all(o)
    );
  }
  function IN(t, e) {
    return t.sortNodePosition(e);
  }
  function jN(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let r;
    if (Array.isArray(e)) {
      const s = e.map((i) => ip(t, i, n));
      r = Promise.all(s);
    } else if (typeof e == "string") r = ip(t, e, n);
    else {
      const s = typeof e == "function" ? Nu(t, e, n.custom) : e;
      r = Promise.all(x_(t, s, n));
    }
    return r.then(() => {
      t.notify("AnimationComplete", e);
    });
  }
  const DN = Ef.length;
  function S_(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
      const n = t.parent ? S_(t.parent) || {} : {};
      return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
    }
    const e = {};
    for (let n = 0; n < DN; n++) {
      const r = Ef[n],
        s = t.props[r];
      (ia(s) || s === !1) && (e[r] = s);
    }
    return e;
  }
  const $N = [...kf].reverse(),
    FN = kf.length;
  function VN(t) {
    return (e) =>
      Promise.all(e.map(({ animation: n, options: r }) => jN(t, n, r)));
  }
  function UN(t) {
    let e = VN(t),
      n = k_(),
      r = !0;
    const s = (l) => (u, c) => {
      var d;
      const h = Nu(
        t,
        c,
        l === "exit"
          ? (d = t.presenceContext) === null || d === void 0
            ? void 0
            : d.custom
          : void 0,
      );
      if (h) {
        const { transition: p, transitionEnd: v, ...g } = h;
        u = { ...u, ...g, ...v };
      }
      return u;
    };
    function i(l) {
      e = l(t);
    }
    function o(l) {
      const { props: u } = t,
        c = S_(t.parent) || {},
        d = [],
        h = new Set();
      let p = {},
        v = 1 / 0;
      for (let w = 0; w < FN; w++) {
        const m = $N[w],
          f = n[m],
          y = u[m] !== void 0 ? u[m] : c[m],
          _ = ia(y),
          S = m === l ? f.isActive : null;
        S === !1 && (v = w);
        let b = y === c[m] && y !== u[m] && _;
        if (
          (b && r && t.manuallyAnimateOnMount && (b = !1),
          (f.protectedKeys = { ...p }),
          (!f.isActive && S === null) ||
            (!y && !f.prevProp) ||
            Ru(y) ||
            typeof y == "boolean")
        )
          continue;
        const k = BN(f.prevProp, y);
        let x = k || (m === l && f.isActive && !b && _) || (w > v && _),
          R = !1;
        const N = Array.isArray(y) ? y : [y];
        let Z = N.reduce(s(m), {});
        S === !1 && (Z = {});
        const { prevResolvedValues: F = {} } = f,
          V = { ...F, ...Z },
          de = (W) => {
            (x = !0),
              h.has(W) && ((R = !0), h.delete(W)),
              (f.needsAnimating[W] = !0);
            const P = t.getValue(W);
            P && (P.liveStyle = !1);
          };
        for (const W in V) {
          const P = Z[W],
            I = F[W];
          if (p.hasOwnProperty(W)) continue;
          let U = !1;
          xf(P) && xf(I) ? (U = !ww(P, I)) : (U = P !== I),
            U
              ? P != null
                ? de(W)
                : h.add(W)
              : P !== void 0 && h.has(W)
                ? de(W)
                : (f.protectedKeys[W] = !0);
        }
        (f.prevProp = y),
          (f.prevResolvedValues = Z),
          f.isActive && (p = { ...p, ...Z }),
          r && t.blockInitialAnimation && (x = !1),
          x &&
            (!(b && k) || R) &&
            d.push(...N.map((W) => ({ animation: W, options: { type: m } })));
      }
      if (h.size) {
        const w = {};
        h.forEach((m) => {
          const f = t.getBaseTarget(m),
            y = t.getValue(m);
          y && (y.liveStyle = !0), (w[m] = f ?? null);
        }),
          d.push({ animation: w });
      }
      let g = !!d.length;
      return (
        r &&
          (u.initial === !1 || u.initial === u.animate) &&
          !t.manuallyAnimateOnMount &&
          (g = !1),
        (r = !1),
        g ? e(d) : Promise.resolve()
      );
    }
    function a(l, u) {
      var c;
      if (n[l].isActive === u) return Promise.resolve();
      (c = t.variantChildren) === null ||
        c === void 0 ||
        c.forEach((h) => {
          var p;
          return (p = h.animationState) === null || p === void 0
            ? void 0
            : p.setActive(l, u);
        }),
        (n[l].isActive = u);
      const d = o(l);
      for (const h in n) n[h].protectedKeys = {};
      return d;
    }
    return {
      animateChanges: o,
      setActive: a,
      setAnimateFunction: i,
      getState: () => n,
      reset: () => {
        (n = k_()), (r = !0);
      },
    };
  }
  function BN(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !ww(e, t) : !1;
  }
  function is(t = !1) {
    return {
      isActive: t,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function k_() {
    return {
      animate: is(!0),
      whileInView: is(),
      whileHover: is(),
      whileTap: is(),
      whileDrag: is(),
      whileFocus: is(),
      exit: is(),
    };
  }
  class Sr {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  }
  class zN extends Sr {
    constructor(e) {
      super(e), e.animationState || (e.animationState = UN(e));
    }
    updateAnimationControlsSubscription() {
      const { animate: e } = this.node.getProps();
      Ru(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: e } = this.node.getProps(),
        { animate: n } = this.node.prevProps || {};
      e !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this);
    }
  }
  let WN = 0;
  class HN extends Sr {
    constructor() {
      super(...arguments), (this.id = WN++);
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
        { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === r) return;
      const s = this.node.animationState.setActive("exit", !e);
      n && !e && s.then(() => n(this.id));
    }
    mount() {
      const { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  }
  const GN = { animation: { Feature: zN }, exit: { Feature: HN } },
    E_ = (t) =>
      t.pointerType === "mouse"
        ? typeof t.button != "number" || t.button <= 0
        : t.isPrimary !== !1;
  function Vu(t, e = "page") {
    return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
  }
  const qN = (t) => (e) => E_(e) && t(e, Vu(e));
  function In(t, e, n, r = { passive: !0 }) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
  }
  function jn(t, e, n, r) {
    return In(t, e, qN(n), r);
  }
  const A_ = (t, e) => Math.abs(t - e);
  function KN(t, e) {
    const n = A_(t.x, e.x),
      r = A_(t.y, e.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class T_ {
    constructor(
      e,
      n,
      {
        transformPagePoint: r,
        contextWindow: s,
        dragSnapToOrigin: i = !1,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const d = ap(this.lastMoveEventInfo, this.history),
            h = this.startEvent !== null,
            p = KN(d.offset, { x: 0, y: 0 }) >= 3;
          if (!h && !p) return;
          const { point: v } = d,
            { timestamp: g } = Be;
          this.history.push({ ...v, timestamp: g });
          const { onStart: w, onMove: m } = this.handlers;
          h ||
            (w && w(this.lastMoveEvent, d),
            (this.startEvent = this.lastMoveEvent)),
            m && m(this.lastMoveEvent, d);
        }),
        (this.handlePointerMove = (d, h) => {
          (this.lastMoveEvent = d),
            (this.lastMoveEventInfo = op(h, this.transformPagePoint)),
            ce.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (d, h) => {
          this.end();
          const {
            onEnd: p,
            onSessionEnd: v,
            resumeAnimation: g,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const w = ap(
            d.type === "pointercancel"
              ? this.lastMoveEventInfo
              : op(h, this.transformPagePoint),
            this.history,
          );
          this.startEvent && p && p(d, w), v && v(d, w);
        }),
        !E_(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = n),
        (this.transformPagePoint = r),
        (this.contextWindow = s || window);
      const o = Vu(e),
        a = op(o, this.transformPagePoint),
        { point: l } = a,
        { timestamp: u } = Be;
      this.history = [{ ...l, timestamp: u }];
      const { onSessionStart: c } = n;
      c && c(e, ap(a, this.history)),
        (this.removeListeners = Ln(
          jn(this.contextWindow, "pointermove", this.handlePointerMove),
          jn(this.contextWindow, "pointerup", this.handlePointerUp),
          jn(this.contextWindow, "pointercancel", this.handlePointerUp),
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), wr(this.updatePoint);
    }
  }
  function op(t, e) {
    return e ? { point: e(t.point) } : t;
  }
  function P_(t, e) {
    return { x: t.x - e.x, y: t.y - e.y };
  }
  function ap({ point: t }, e) {
    return {
      point: t,
      delta: P_(t, C_(e)),
      offset: P_(t, ZN(e)),
      velocity: QN(e, 0.1),
    };
  }
  function ZN(t) {
    return t[0];
  }
  function C_(t) {
    return t[t.length - 1];
  }
  function QN(t, e) {
    if (t.length < 2) return { x: 0, y: 0 };
    let n = t.length - 1,
      r = null;
    const s = C_(t);
    for (; n >= 0 && ((r = t[n]), !(s.timestamp - r.timestamp > On(e))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const i = Mn(s.timestamp - r.timestamp);
    if (i === 0) return { x: 0, y: 0 };
    const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  function R_(t) {
    let e = null;
    return () => {
      const n = () => {
        e = null;
      };
      return e === null ? ((e = t), n) : !1;
    };
  }
  const N_ = R_("dragHorizontal"),
    O_ = R_("dragVertical");
  function M_(t) {
    let e = !1;
    if (t === "y") e = O_();
    else if (t === "x") e = N_();
    else {
      const n = N_(),
        r = O_();
      n && r
        ? (e = () => {
            n(), r();
          })
        : (n && n(), r && r());
    }
    return e;
  }
  function L_() {
    const t = M_(!0);
    return t ? (t(), !1) : !0;
  }
  function hi(t) {
    return (
      t &&
      typeof t == "object" &&
      Object.prototype.hasOwnProperty.call(t, "current")
    );
  }
  const I_ = 1e-4,
    XN = 1 - I_,
    JN = 1 + I_,
    j_ = 0.01,
    YN = 0 - j_,
    eO = 0 + j_;
  function kt(t) {
    return t.max - t.min;
  }
  function tO(t, e, n) {
    return Math.abs(t - e) <= n;
  }
  function D_(t, e, n, r = 0.5) {
    (t.origin = r),
      (t.originPoint = ke(e.min, e.max, t.origin)),
      (t.scale = kt(n) / kt(e)),
      (t.translate = ke(n.min, n.max, t.origin) - t.originPoint),
      ((t.scale >= XN && t.scale <= JN) || isNaN(t.scale)) && (t.scale = 1),
      ((t.translate >= YN && t.translate <= eO) || isNaN(t.translate)) &&
        (t.translate = 0);
  }
  function pa(t, e, n, r) {
    D_(t.x, e.x, n.x, r ? r.originX : void 0),
      D_(t.y, e.y, n.y, r ? r.originY : void 0);
  }
  function $_(t, e, n) {
    (t.min = n.min + e.min), (t.max = t.min + kt(e));
  }
  function nO(t, e, n) {
    $_(t.x, e.x, n.x), $_(t.y, e.y, n.y);
  }
  function F_(t, e, n) {
    (t.min = e.min - n.min), (t.max = t.min + kt(e));
  }
  function ma(t, e, n) {
    F_(t.x, e.x, n.x), F_(t.y, e.y, n.y);
  }
  function rO(t, { min: e, max: n }, r) {
    return (
      e !== void 0 && t < e
        ? (t = r ? ke(e, t, r.min) : Math.max(t, e))
        : n !== void 0 && t > n && (t = r ? ke(n, t, r.max) : Math.min(t, n)),
      t
    );
  }
  function V_(t, e, n) {
    return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
    };
  }
  function sO(t, { top: e, left: n, bottom: r, right: s }) {
    return { x: V_(t.x, n, s), y: V_(t.y, e, r) };
  }
  function U_(t, e) {
    let n = e.min - t.min,
      r = e.max - t.max;
    return (
      e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r }
    );
  }
  function iO(t, e) {
    return { x: U_(t.x, e.x), y: U_(t.y, e.y) };
  }
  function oO(t, e) {
    let n = 0.5;
    const r = kt(t),
      s = kt(e);
    return (
      s > r
        ? (n = di(e.min, e.max - r, t.min))
        : r > s && (n = di(t.min, t.max - s, e.min)),
      _r(0, 1, n)
    );
  }
  function aO(t, e) {
    const n = {};
    return (
      e.min !== void 0 && (n.min = e.min - t.min),
      e.max !== void 0 && (n.max = e.max - t.min),
      n
    );
  }
  const lp = 0.35;
  function lO(t = lp) {
    return (
      t === !1 ? (t = 0) : t === !0 && (t = lp),
      { x: B_(t, "left", "right"), y: B_(t, "top", "bottom") }
    );
  }
  function B_(t, e, n) {
    return { min: z_(t, e), max: z_(t, n) };
  }
  function z_(t, e) {
    return typeof t == "number" ? t : t[e] || 0;
  }
  const W_ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    fi = () => ({ x: W_(), y: W_() }),
    H_ = () => ({ min: 0, max: 0 }),
    Re = () => ({ x: H_(), y: H_() });
  function Lt(t) {
    return [t("x"), t("y")];
  }
  function G_({ top: t, left: e, right: n, bottom: r }) {
    return { x: { min: e, max: n }, y: { min: t, max: r } };
  }
  function uO({ x: t, y: e }) {
    return { top: e.min, right: t.max, bottom: e.max, left: t.min };
  }
  function cO(t, e) {
    if (!e) return t;
    const n = e({ x: t.left, y: t.top }),
      r = e({ x: t.right, y: t.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
  }
  function up(t) {
    return t === void 0 || t === 1;
  }
  function cp({ scale: t, scaleX: e, scaleY: n }) {
    return !up(t) || !up(e) || !up(n);
  }
  function os(t) {
    return (
      cp(t) ||
      q_(t) ||
      t.z ||
      t.rotate ||
      t.rotateX ||
      t.rotateY ||
      t.skewX ||
      t.skewY
    );
  }
  function q_(t) {
    return K_(t.x) || K_(t.y);
  }
  function K_(t) {
    return t && t !== "0%";
  }
  function Uu(t, e, n) {
    const r = t - n,
      s = e * r;
    return n + s;
  }
  function Z_(t, e, n, r, s) {
    return s !== void 0 && (t = Uu(t, s, r)), Uu(t, n, r) + e;
  }
  function dp(t, e = 0, n = 1, r, s) {
    (t.min = Z_(t.min, e, n, r, s)), (t.max = Z_(t.max, e, n, r, s));
  }
  function Q_(t, { x: e, y: n }) {
    dp(t.x, e.translate, e.scale, e.originPoint),
      dp(t.y, n.translate, n.scale, n.originPoint);
  }
  const X_ = 0.999999999999,
    J_ = 1.0000000000001;
  function dO(t, e, n, r = !1) {
    const s = n.length;
    if (!s) return;
    e.x = e.y = 1;
    let i, o;
    for (let a = 0; a < s; a++) {
      (i = n[a]), (o = i.projectionDelta);
      const { visualElement: l } = i.options;
      (l && l.props.style && l.props.style.display === "contents") ||
        (r &&
          i.options.layoutScroll &&
          i.scroll &&
          i !== i.root &&
          mi(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
        o && ((e.x *= o.x.scale), (e.y *= o.y.scale), Q_(t, o)),
        r && os(i.latestValues) && mi(t, i.latestValues));
    }
    e.x < J_ && e.x > X_ && (e.x = 1), e.y < J_ && e.y > X_ && (e.y = 1);
  }
  function pi(t, e) {
    (t.min = t.min + e), (t.max = t.max + e);
  }
  function Y_(t, e, n, r, s = 0.5) {
    const i = ke(t.min, t.max, s);
    dp(t, e, n, i, r);
  }
  function mi(t, e) {
    Y_(t.x, e.x, e.scaleX, e.scale, e.originX),
      Y_(t.y, e.y, e.scaleY, e.scale, e.originY);
  }
  function eb(t, e) {
    return G_(cO(t.getBoundingClientRect(), e));
  }
  function hO(t, e, n) {
    const r = eb(t, n),
      { scroll: s } = e;
    return s && (pi(r.x, s.offset.x), pi(r.y, s.offset.y)), r;
  }
  const tb = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
    fO = new WeakMap();
  class pO {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Re()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      const s = (c) => {
          const { dragSnapToOrigin: d } = this.getProps();
          d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Vu(c, "page").point);
        },
        i = (c, d) => {
          const {
            drag: h,
            dragPropagation: p,
            onDragStart: v,
          } = this.getProps();
          if (
            h &&
            !p &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = M_(h)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Lt((w) => {
              let m = this.getAxisMotionValue(w).get() || 0;
              if (un.test(m)) {
                const { projection: f } = this.visualElement;
                if (f && f.layout) {
                  const y = f.layout.layoutBox[w];
                  y && (m = kt(y) * (parseFloat(m) / 100));
                }
              }
              this.originPoint[w] = m;
            }),
            v && ce.postRender(() => v(c, d)),
            sp(this.visualElement, "transform");
          const { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        o = (c, d) => {
          const {
            dragPropagation: h,
            dragDirectionLock: p,
            onDirectionLock: v,
            onDrag: g,
          } = this.getProps();
          if (!h && !this.openGlobalLock) return;
          const { offset: w } = d;
          if (p && this.currentDirection === null) {
            (this.currentDirection = mO(w)),
              this.currentDirection !== null && v && v(this.currentDirection);
            return;
          }
          this.updateAxis("x", d.point, w),
            this.updateAxis("y", d.point, w),
            this.visualElement.render(),
            g && g(c, d);
        },
        a = (c, d) => this.stop(c, d),
        l = () =>
          Lt((c) => {
            var d;
            return (
              this.getAnimationState(c) === "paused" &&
              ((d = this.getAxisMotionValue(c).animation) === null ||
              d === void 0
                ? void 0
                : d.play())
            );
          }),
        { dragSnapToOrigin: u } = this.getProps();
      this.panSession = new T_(
        e,
        {
          onSessionStart: s,
          onStart: i,
          onMove: o,
          onSessionEnd: a,
          resumeAnimation: l,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: u,
          contextWindow: tb(this.visualElement),
        },
      );
    }
    stop(e, n) {
      const r = this.isDragging;
      if ((this.cancel(), !r)) return;
      const { velocity: s } = n;
      this.startAnimation(s);
      const { onDragEnd: i } = this.getProps();
      i && ce.postRender(() => i(e, n));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: e, animationState: n } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: r } = this.getProps();
      !r &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        n && n.setActive("whileDrag", !1);
    }
    updateAxis(e, n, r) {
      const { drag: s } = this.getProps();
      if (!r || !Bu(e, s, this.currentDirection)) return;
      const i = this.getAxisMotionValue(e);
      let o = this.originPoint[e] + r[e];
      this.constraints &&
        this.constraints[e] &&
        (o = rO(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      const { dragConstraints: n, dragElastic: r } = this.getProps(),
        s =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
              ? void 0
              : e.layout,
        i = this.constraints;
      n && hi(n)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : n && s
          ? (this.constraints = sO(s.layoutBox, n))
          : (this.constraints = !1),
        (this.elastic = lO(r)),
        i !== this.constraints &&
          s &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Lt((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = aO(s.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: n } =
        this.getProps();
      if (!e || !hi(e)) return !1;
      const r = e.current,
        { projection: s } = this.visualElement;
      if (!s || !s.layout) return !1;
      const i = hO(r, s.root, this.visualElement.getTransformPagePoint());
      let o = iO(s.layout.layoutBox, i);
      if (n) {
        const a = n(uO(o));
        (this.hasMutatedConstraints = !!a), a && (o = G_(a));
      }
      return o;
    }
    startAnimation(e) {
      const {
          drag: n,
          dragMomentum: r,
          dragElastic: s,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: a,
        } = this.getProps(),
        l = this.constraints || {},
        u = Lt((c) => {
          if (!Bu(c, n, this.currentDirection)) return;
          let d = (l && l[c]) || {};
          o && (d = { min: 0, max: 0 });
          const h = s ? 200 : 1e6,
            p = s ? 40 : 1e7,
            v = {
              type: "inertia",
              velocity: r ? e[c] : 0,
              bounceStiffness: h,
              bounceDamping: p,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...d,
            };
          return this.startAxisValueAnimation(c, v);
        });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(e, n) {
      const r = this.getAxisMotionValue(e);
      return (
        sp(this.visualElement, e),
        r.start(Yf(e, r, 0, n, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Lt((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Lt((e) => {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null ||
          n === void 0
          ? void 0
          : n.pause();
      });
    }
    getAnimationState(e) {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
        ? void 0
        : n.state;
    }
    getAxisMotionValue(e) {
      const n = `_drag${e.toUpperCase()}`,
        r = this.visualElement.getProps(),
        s = r[n];
      return (
        s ||
        this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Lt((n) => {
        const { drag: r } = this.getProps();
        if (!Bu(n, r, this.currentDirection)) return;
        const { projection: s } = this.visualElement,
          i = this.getAxisMotionValue(n);
        if (s && s.layout) {
          const { min: o, max: a } = s.layout.layoutBox[n];
          i.set(e[n] - ke(o, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: n } = this.getProps(),
        { projection: r } = this.visualElement;
      if (!hi(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const s = { x: 0, y: 0 };
      Lt((o) => {
        const a = this.getAxisMotionValue(o);
        if (a && this.constraints !== !1) {
          const l = a.get();
          s[o] = oO({ min: l, max: l }, this.constraints[o]);
        }
      });
      const { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Lt((o) => {
          if (!Bu(o, e, null)) return;
          const a = this.getAxisMotionValue(o),
            { min: l, max: u } = this.constraints[o];
          a.set(ke(l, u, s[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      fO.set(this.visualElement, this);
      const e = this.visualElement.current,
        n = jn(e, "pointerdown", (l) => {
          const { drag: u, dragListener: c = !0 } = this.getProps();
          u && c && this.start(l);
        }),
        r = () => {
          const { dragConstraints: l } = this.getProps();
          hi(l) &&
            l.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: s } = this.visualElement,
        i = s.addEventListener("measure", r);
      s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
        ce.read(r);
      const o = In(window, "resize", () =>
          this.scalePositionWithinConstraints(),
        ),
        a = s.addEventListener(
          "didUpdate",
          ({ delta: l, hasLayoutChanged: u }) => {
            this.isDragging &&
              u &&
              (Lt((c) => {
                const d = this.getAxisMotionValue(c);
                d &&
                  ((this.originPoint[c] += l[c].translate),
                  d.set(d.get() + l[c].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        o(), n(), i(), a && a();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(),
        {
          drag: n = !1,
          dragDirectionLock: r = !1,
          dragPropagation: s = !1,
          dragConstraints: i = !1,
          dragElastic: o = lp,
          dragMomentum: a = !0,
        } = e;
      return {
        ...e,
        drag: n,
        dragDirectionLock: r,
        dragPropagation: s,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: a,
      };
    }
  }
  function Bu(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t);
  }
  function mO(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
  }
  class gO extends Sr {
    constructor(e) {
      super(e),
        (this.removeGroupControls = Ze),
        (this.removeListeners = Ze),
        (this.controls = new pO(e));
    }
    mount() {
      const { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || Ze);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const nb = (t) => (e, n) => {
    t && ce.postRender(() => t(e, n));
  };
  class yO extends Sr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = Ze);
    }
    onPointerDown(e) {
      this.session = new T_(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: tb(this.node),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: e,
        onPanStart: n,
        onPan: r,
        onPanEnd: s,
      } = this.node.getProps();
      return {
        onSessionStart: nb(e),
        onStart: nb(n),
        onMove: r,
        onEnd: (i, o) => {
          delete this.session, s && ce.postRender(() => s(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = jn(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  const hp = C.createContext(null);
  function vO() {
    const t = C.useContext(hp);
    if (t === null) return [!0, null];
    const { isPresent: e, onExitComplete: n, register: r } = t,
      s = C.useId();
    C.useEffect(() => r(s), []);
    const i = C.useCallback(() => n && n(s), [s, n]);
    return !e && n ? [!1, i] : [!0];
  }
  const rb = C.createContext({}),
    sb = C.createContext({}),
    zu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function ib(t, e) {
    return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
  }
  const ga = {
      correct: (t, e) => {
        if (!e.target) return t;
        if (typeof t == "string")
          if ($.test(t)) t = parseFloat(t);
          else return t;
        const n = ib(t, e.target.x),
          r = ib(t, e.target.y);
        return `${n}% ${r}%`;
      },
    },
    wO = {
      correct: (t, { treeScale: e, projectionDelta: n }) => {
        const r = t,
          s = xr.parse(t);
        if (s.length > 5) return r;
        const i = xr.createTransformer(t),
          o = typeof s[0] != "number" ? 1 : 0,
          a = n.x.scale * e.x,
          l = n.y.scale * e.y;
        (s[0 + o] /= a), (s[1 + o] /= l);
        const u = ke(a, l, 0.5);
        return (
          typeof s[2 + o] == "number" && (s[2 + o] /= u),
          typeof s[3 + o] == "number" && (s[3 + o] /= u),
          i(s)
        );
      },
    },
    Wu = {};
  function _O(t) {
    Object.assign(Wu, t);
  }
  const { schedule: fp } = bw(queueMicrotask, !1);
  class bO extends C.Component {
    componentDidMount() {
      const {
          visualElement: e,
          layoutGroup: n,
          switchLayoutGroup: r,
          layoutId: s,
        } = this.props,
        { projection: i } = e;
      _O(xO),
        i &&
          (n.group && n.group.add(i),
          r && r.register && s && r.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (zu.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      const {
          layoutDependency: n,
          visualElement: r,
          drag: s,
          isPresent: i,
        } = this.props,
        o = r.projection;
      return (
        o &&
          ((o.isPresent = i),
          s || e.layoutDependency !== n || n === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                ce.postRender(() => {
                  const a = o.getStack();
                  (!a || !a.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        fp.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: e,
          layoutGroup: n,
          switchLayoutGroup: r,
        } = this.props,
        { projection: s } = e;
      s &&
        (s.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(s),
        r && r.deregister && r.deregister(s));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function ob(t) {
    const [e, n] = vO(),
      r = C.useContext(rb);
    return D.jsx(bO, {
      ...t,
      layoutGroup: r,
      switchLayoutGroup: C.useContext(sb),
      isPresent: e,
      safeToRemove: n,
    });
  }
  const xO = {
      borderRadius: {
        ...ga,
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      },
      borderTopLeftRadius: ga,
      borderTopRightRadius: ga,
      borderBottomLeftRadius: ga,
      borderBottomRightRadius: ga,
      boxShadow: wO,
    },
    ab = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    SO = ab.length,
    lb = (t) => (typeof t == "string" ? parseFloat(t) : t),
    ub = (t) => typeof t == "number" || $.test(t);
  function kO(t, e, n, r, s, i) {
    s
      ? ((t.opacity = ke(0, n.opacity !== void 0 ? n.opacity : 1, EO(r))),
        (t.opacityExit = ke(e.opacity !== void 0 ? e.opacity : 1, 0, AO(r))))
      : i &&
        (t.opacity = ke(
          e.opacity !== void 0 ? e.opacity : 1,
          n.opacity !== void 0 ? n.opacity : 1,
          r,
        ));
    for (let o = 0; o < SO; o++) {
      const a = `border${ab[o]}Radius`;
      let l = cb(e, a),
        u = cb(n, a);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || ub(l) === ub(u)
          ? ((t[a] = Math.max(ke(lb(l), lb(u), r), 0)),
            (un.test(u) || un.test(l)) && (t[a] += "%"))
          : (t[a] = u);
    }
    (e.rotate || n.rotate) && (t.rotate = ke(e.rotate || 0, n.rotate || 0, r));
  }
  function cb(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius;
  }
  const EO = db(0, 0.5, Pw),
    AO = db(0.5, 0.95, Ze);
  function db(t, e, n) {
    return (r) => (r < t ? 0 : r > e ? 1 : n(di(t, e, r)));
  }
  function hb(t, e) {
    (t.min = e.min), (t.max = e.max);
  }
  function It(t, e) {
    hb(t.x, e.x), hb(t.y, e.y);
  }
  function fb(t, e) {
    (t.translate = e.translate),
      (t.scale = e.scale),
      (t.originPoint = e.originPoint),
      (t.origin = e.origin);
  }
  function pb(t, e, n, r, s) {
    return (
      (t -= e), (t = Uu(t, 1 / n, r)), s !== void 0 && (t = Uu(t, 1 / s, r)), t
    );
  }
  function TO(t, e = 0, n = 1, r = 0.5, s, i = t, o = t) {
    if (
      (un.test(e) &&
        ((e = parseFloat(e)), (e = ke(o.min, o.max, e / 100) - o.min)),
      typeof e != "number")
    )
      return;
    let a = ke(i.min, i.max, r);
    t === i && (a -= e),
      (t.min = pb(t.min, e, n, a, s)),
      (t.max = pb(t.max, e, n, a, s));
  }
  function mb(t, e, [n, r, s], i, o) {
    TO(t, e[n], e[r], e[s], e.scale, i, o);
  }
  const PO = ["x", "scaleX", "originX"],
    CO = ["y", "scaleY", "originY"];
  function gb(t, e, n, r) {
    mb(t.x, e, PO, n ? n.x : void 0, r ? r.x : void 0),
      mb(t.y, e, CO, n ? n.y : void 0, r ? r.y : void 0);
  }
  function yb(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function vb(t) {
    return yb(t.x) && yb(t.y);
  }
  function wb(t, e) {
    return t.min === e.min && t.max === e.max;
  }
  function RO(t, e) {
    return wb(t.x, e.x) && wb(t.y, e.y);
  }
  function _b(t, e) {
    return (
      Math.round(t.min) === Math.round(e.min) &&
      Math.round(t.max) === Math.round(e.max)
    );
  }
  function bb(t, e) {
    return _b(t.x, e.x) && _b(t.y, e.y);
  }
  function xb(t) {
    return kt(t.x) / kt(t.y);
  }
  function Sb(t, e) {
    return (
      t.translate === e.translate &&
      t.scale === e.scale &&
      t.originPoint === e.originPoint
    );
  }
  class NO {
    constructor() {
      this.members = [];
    }
    add(e) {
      ep(this.members, e), e.scheduleRender();
    }
    remove(e) {
      if (
        (tp(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(e) {
      const n = this.members.findIndex((s) => e === s);
      if (n === 0) return !1;
      let r;
      for (let s = n; s >= 0; s--) {
        const i = this.members[s];
        if (i.isPresent !== !1) {
          r = i;
          break;
        }
      }
      return r ? (this.promote(r), !0) : !1;
    }
    promote(e, n) {
      const r = this.lead;
      if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
        r.instance && r.scheduleRender(),
          e.scheduleRender(),
          (e.resumeFrom = r),
          n && (e.resumeFrom.preserveOpacity = !0),
          r.snapshot &&
            ((e.snapshot = r.snapshot),
            (e.snapshot.latestValues = r.animationValues || r.latestValues)),
          e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
        const { crossfade: s } = e.options;
        s === !1 && r.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        const { options: n, resumingFrom: r } = e;
        n.onExitComplete && n.onExitComplete(),
          r && r.options.onExitComplete && r.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((e) => {
        e.instance && e.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function OO(t, e, n) {
    let r = "";
    const s = t.x.translate / e.x,
      i = t.y.translate / e.y,
      o = (n == null ? void 0 : n.z) || 0;
    if (
      ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
      (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
      n)
    ) {
      const {
        transformPerspective: u,
        rotate: c,
        rotateX: d,
        rotateY: h,
        skewX: p,
        skewY: v,
      } = n;
      u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        h && (r += `rotateY(${h}deg) `),
        p && (r += `skewX(${p}deg) `),
        v && (r += `skewY(${v}deg) `);
    }
    const a = t.x.scale * e.x,
      l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
  }
  const MO = (t, e) => t.depth - e.depth;
  class LO {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      ep(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      tp(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(MO),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  }
  function Hu(t) {
    const e = Xe(t) ? t.get() : t;
    return AN(e) ? e.toValue() : e;
  }
  function IO(t, e) {
    const n = cn.now(),
      r = ({ timestamp: s }) => {
        const i = s - n;
        i >= e && (wr(r), t(i - e));
      };
    return ce.read(r, !0), () => wr(r);
  }
  function jO(t) {
    return t instanceof SVGElement && t.tagName !== "svg";
  }
  function DO(t, e, n) {
    const r = Xe(t) ? t : fa(t);
    return r.start(Yf("", r, e, n)), r.animation;
  }
  const as = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0,
    },
    ya = typeof window < "u" && window.MotionDebug !== void 0,
    pp = ["", "X", "Y", "Z"],
    $O = { visibility: "hidden" },
    kb = 1e3;
  let FO = 0;
  function mp(t, e, n, r) {
    const { latestValues: s } = e;
    s[t] && ((n[t] = s[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
  }
  function Eb(t) {
    if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
    const { visualElement: e } = t.options;
    if (!e) return;
    const n = b_(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: s, layoutId: i } = t.options;
      window.MotionCancelOptimisedAnimation(n, "transform", ce, !(s || i));
    }
    const { parent: r } = t;
    r && !r.hasCheckedOptimisedAppear && Eb(r);
  }
  function Ab({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: s,
  }) {
    return class {
      constructor(o = {}, a = e == null ? void 0 : e()) {
        (this.id = FO++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              ya &&
                (as.totalNodes =
                  as.resolvedTargetDeltas =
                  as.recalculatedProjection =
                    0),
              this.nodes.forEach(BO),
              this.nodes.forEach(qO),
              this.nodes.forEach(KO),
              this.nodes.forEach(zO),
              ya && window.MotionDebug.record(as);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = o),
          (this.root = a ? a.root || a : this),
          (this.path = a ? [...a.path, a] : []),
          (this.parent = a),
          (this.depth = a ? a.depth + 1 : 0);
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new LO());
      }
      addEventListener(o, a) {
        return (
          this.eventHandlers.has(o) || this.eventHandlers.set(o, new np()),
          this.eventHandlers.get(o).add(a)
        );
      }
      notifyListeners(o, ...a) {
        const l = this.eventHandlers.get(o);
        l && l.notify(...a);
      }
      hasListeners(o) {
        return this.eventHandlers.has(o);
      }
      mount(o, a = this.root.hasTreeAnimated) {
        if (this.instance) return;
        (this.isSVG = jO(o)), (this.instance = o);
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (
          (c && !c.current && c.mount(o),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          a && (u || l) && (this.isLayoutDirty = !0),
          t)
        ) {
          let d;
          const h = () => (this.root.updateBlockedByResize = !1);
          t(o, () => {
            (this.root.updateBlockedByResize = !0),
              d && d(),
              (d = IO(h, 250)),
              zu.hasAnimatedSinceResize &&
                ((zu.hasAnimatedSinceResize = !1), this.nodes.forEach(Pb));
          });
        }
        l && this.root.registerSharedNode(l, this),
          this.options.animate !== !1 &&
            c &&
            (l || u) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: d,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: p,
                layout: v,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const g =
                    this.options.transition || c.getDefaultTransition() || YO,
                  { onLayoutAnimationStart: w, onLayoutAnimationComplete: m } =
                    c.getProps(),
                  f = !this.targetLayout || !bb(this.targetLayout, v) || p,
                  y = !h && p;
                if (
                  this.options.layoutRoot ||
                  (this.resumeFrom && this.resumeFrom.instance) ||
                  y ||
                  (h && (f || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(d, y);
                  const _ = { ...Af(g, "layout"), onPlay: w, onComplete: m };
                  (c.shouldReduceMotion || this.options.layoutRoot) &&
                    ((_.delay = 0), (_.type = !1)),
                    this.startAnimation(_);
                } else
                  h || Pb(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = v;
              },
            );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const o = this.getStack();
        o && o.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          wr(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(ZO),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: o } = this.options;
        return o && o.getProps().transformTemplate;
      }
      willUpdate(o = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            Eb(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let c = 0; c < this.path.length; c++) {
          const d = this.path[c];
          (d.shouldResetTransform = !0),
            d.updateScroll("snapshot"),
            d.options.layoutRoot && d.willUpdate(!1);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l) return;
        const u = this.getTransformTemplate();
        (this.prevTransformTemplateValue = u
          ? u(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          o && this.notifyListeners("willUpdate");
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(Tb);
          return;
        }
        this.isUpdating || this.nodes.forEach(HO),
          (this.isUpdating = !1),
          this.nodes.forEach(GO),
          this.nodes.forEach(VO),
          this.nodes.forEach(UO),
          this.clearAllSnapshots();
        const a = cn.now();
        (Be.delta = _r(0, 16.666666666666668, a - Be.timestamp)),
          (Be.timestamp = a),
          (Be.isProcessing = !0),
          Tf.update.process(Be),
          Tf.preRender.process(Be),
          Tf.render.process(Be),
          (Be.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), fp.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(WO), this.sharedNodes.forEach(QO);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          ce.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        ce.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let l = 0; l < this.path.length; l++)
            this.path[l].updateScroll();
        const o = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = Re()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: a } = this.options;
        a &&
          a.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            o ? o.layoutBox : void 0,
          );
      }
      updateScroll(o = "measure") {
        let a = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === o &&
            (a = !1),
          a)
        ) {
          const l = r(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: l,
            offset: n(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : l,
          };
        }
      }
      resetTransform() {
        if (!s) return;
        const o =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          a = this.projectionDelta && !vb(this.projectionDelta),
          l = this.getTransformTemplate(),
          u = l ? l(this.latestValues, "") : void 0,
          c = u !== this.prevTransformTemplateValue;
        o &&
          (a || os(this.latestValues) || c) &&
          (s(this.instance, u),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(o = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return (
          o && (l = this.removeTransform(l)),
          eM(l),
          {
            animationId: this.root.animationId,
            measuredBox: a,
            layoutBox: l,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var o;
        const { visualElement: a } = this.options;
        if (!a) return Re();
        const l = a.measureViewportBox();
        if (
          !(
            ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
            this.path.some(tM)
          )
        ) {
          const { scroll: c } = this.root;
          c && (pi(l.x, c.offset.x), pi(l.y, c.offset.y));
        }
        return l;
      }
      removeElementScroll(o) {
        var a;
        const l = Re();
        if (
          (It(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        )
          return l;
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u],
            { scroll: d, options: h } = c;
          c !== this.root &&
            d &&
            h.layoutScroll &&
            (d.wasRoot && It(l, o), pi(l.x, d.offset.x), pi(l.y, d.offset.y));
        }
        return l;
      }
      applyTransform(o, a = !1) {
        const l = Re();
        It(l, o);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a &&
            c.options.layoutScroll &&
            c.scroll &&
            c !== c.root &&
            mi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
            os(c.latestValues) && mi(l, c.latestValues);
        }
        return os(this.latestValues) && mi(l, this.latestValues), l;
      }
      removeTransform(o) {
        const a = Re();
        It(a, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !os(u.latestValues)) continue;
          cp(u.latestValues) && u.updateSnapshot();
          const c = Re(),
            d = u.measurePageBox();
          It(c, d),
            gb(
              a,
              u.latestValues,
              u.snapshot ? u.snapshot.layoutBox : void 0,
              c,
            );
        }
        return os(this.latestValues) && gb(a, this.latestValues), a;
      }
      setTargetDelta(o) {
        (this.targetDelta = o),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(o) {
        this.options = {
          ...this.options,
          ...o,
          crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== Be.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(o = !1) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = l.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (
          !(
            o ||
            (u && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (!((a = this.parent) === null || a === void 0) &&
              a.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: d, layoutId: h } = this.options;
        if (!(!this.layout || !(d || h))) {
          if (
            ((this.resolvedRelativeTargetAt = Be.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const p = this.getClosestProjectingParent();
            p && p.layout && this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Re()),
                (this.relativeTargetOrigin = Re()),
                ma(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  p.layout.layoutBox,
                ),
                It(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (
              (this.target ||
                ((this.target = Re()), (this.targetWithTransforms = Re())),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  nO(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target,
                  ))
                : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox,
                        ))
                      : It(this.target, this.layout.layoutBox),
                    Q_(this.target, this.targetDelta))
                  : It(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const p = this.getClosestProjectingParent();
              p &&
              !!p.resumingFrom == !!this.resumingFrom &&
              !p.options.layoutScroll &&
              p.target &&
              this.animationProgress !== 1
                ? ((this.relativeParent = p),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = Re()),
                  (this.relativeTargetOrigin = Re()),
                  ma(this.relativeTargetOrigin, this.target, p.target),
                  It(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            ya && as.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            cp(this.parent.latestValues) ||
            q_(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      calcProjection() {
        var o;
        const a = this.getLead(),
          l = !!this.resumingFrom || this !== a;
        let u = !0;
        if (
          ((this.isProjectionDirty ||
            (!((o = this.parent) === null || o === void 0) &&
              o.isProjectionDirty)) &&
            (u = !1),
          l &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (u = !1),
          this.resolvedRelativeTargetAt === Be.timestamp && (u = !1),
          u)
        )
          return;
        const { layout: c, layoutId: d } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(c || d))
        )
          return;
        It(this.layoutCorrected, this.layout.layoutBox);
        const h = this.treeScale.x,
          p = this.treeScale.y;
        dO(this.layoutCorrected, this.treeScale, this.path, l),
          a.layout &&
            !a.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Re()));
        const { target: v } = a;
        if (!v) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta
          ? this.createProjectionDeltas()
          : (fb(this.prevProjectionDelta.x, this.projectionDelta.x),
            fb(this.prevProjectionDelta.y, this.projectionDelta.y)),
          pa(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
          (this.treeScale.x !== h ||
            this.treeScale.y !== p ||
            !Sb(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !Sb(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
          ya && as.recalculatedProjection++;
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(o = !0) {
        var a;
        if (
          ((a = this.options.visualElement) === null ||
            a === void 0 ||
            a.scheduleRender(),
          o)
        ) {
          const l = this.getStack();
          l && l.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = fi()),
          (this.projectionDelta = fi()),
          (this.projectionDeltaWithTransform = fi());
      }
      setAnimationOrigin(o, a = !1) {
        const l = this.snapshot,
          u = l ? l.latestValues : {},
          c = { ...this.latestValues },
          d = fi();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !a);
        const h = Re(),
          p = l ? l.source : void 0,
          v = this.layout ? this.layout.source : void 0,
          g = p !== v,
          w = this.getStack(),
          m = !w || w.members.length <= 1,
          f = !!(
            g &&
            !m &&
            this.options.crossfade === !0 &&
            !this.path.some(JO)
          );
        this.animationProgress = 0;
        let y;
        (this.mixTargetDelta = (_) => {
          const S = _ / 1e3;
          Cb(d.x, o.x, S),
            Cb(d.y, o.y, S),
            this.setTargetDelta(d),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (ma(
                h,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox,
              ),
              XO(this.relativeTarget, this.relativeTargetOrigin, h, S),
              y && RO(this.relativeTarget, y) && (this.isProjectionDirty = !1),
              y || (y = Re()),
              It(y, this.relativeTarget)),
            g &&
              ((this.animationValues = c),
              kO(c, u, this.latestValues, S, f, m)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = S);
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(o) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (wr(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = ce.update(() => {
            (zu.hasAnimatedSinceResize = !0),
              (this.currentAnimation = DO(0, kb, {
                ...o,
                onUpdate: (a) => {
                  this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
                },
                onComplete: () => {
                  o.onComplete && o.onComplete(), this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const o = this.getStack();
        o && o.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(kb),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const o = this.getLead();
        let {
          targetWithTransforms: a,
          target: l,
          layout: u,
          latestValues: c,
        } = o;
        if (!(!a || !l || !u)) {
          if (
            this !== o &&
            this.layout &&
            u &&
            Lb(this.options.animationType, this.layout.layoutBox, u.layoutBox)
          ) {
            l = this.target || Re();
            const d = kt(this.layout.layoutBox.x);
            (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
            const h = kt(this.layout.layoutBox.y);
            (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
          }
          It(a, l),
            mi(a, c),
            pa(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(o, a) {
        this.sharedNodes.has(o) || this.sharedNodes.set(o, new NO()),
          this.sharedNodes.get(o).add(a);
        const u = a.options.initialPromotionConfig;
        a.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity:
            u && u.shouldPreserveFollowOpacity
              ? u.shouldPreserveFollowOpacity(a)
              : void 0,
        });
      }
      isLead() {
        const o = this.getStack();
        return o ? o.lead === this : !0;
      }
      getLead() {
        var o;
        const { layoutId: a } = this.options;
        return a
          ? ((o = this.getStack()) === null || o === void 0
              ? void 0
              : o.lead) || this
          : this;
      }
      getPrevLead() {
        var o;
        const { layoutId: a } = this.options;
        return a
          ? (o = this.getStack()) === null || o === void 0
            ? void 0
            : o.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: o } = this.options;
        if (o) return this.root.sharedNodes.get(o);
      }
      promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l),
          o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          a && this.setOptions({ transition: a });
      }
      relegate() {
        const o = this.getStack();
        return o ? o.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: o } = this.options;
        if (!o) return;
        let a = !1;
        const { latestValues: l } = o;
        if (
          ((l.z ||
            l.rotate ||
            l.rotateX ||
            l.rotateY ||
            l.rotateZ ||
            l.skewX ||
            l.skewY) &&
            (a = !0),
          !a)
        )
          return;
        const u = {};
        l.z && mp("z", o, u, this.animationValues);
        for (let c = 0; c < pp.length; c++)
          mp(`rotate${pp[c]}`, o, u, this.animationValues),
            mp(`skew${pp[c]}`, o, u, this.animationValues);
        o.render();
        for (const c in u)
          o.setStaticValue(c, u[c]),
            this.animationValues && (this.animationValues[c] = u[c]);
        o.scheduleRender();
      }
      getProjectionStyles(o) {
        var a, l;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return $O;
        const u = { visibility: "" },
          c = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (u.opacity = ""),
            (u.pointerEvents = Hu(o == null ? void 0 : o.pointerEvents) || ""),
            (u.transform = c ? c(this.latestValues, "") : "none"),
            u
          );
        const d = this.getLead();
        if (!this.projectionDelta || !this.layout || !d.target) {
          const g = {};
          return (
            this.options.layoutId &&
              ((g.opacity =
                this.latestValues.opacity !== void 0
                  ? this.latestValues.opacity
                  : 1),
              (g.pointerEvents =
                Hu(o == null ? void 0 : o.pointerEvents) || "")),
            this.hasProjected &&
              !os(this.latestValues) &&
              ((g.transform = c ? c({}, "") : "none"),
              (this.hasProjected = !1)),
            g
          );
        }
        const h = d.animationValues || d.latestValues;
        this.applyTransformsToTarget(),
          (u.transform = OO(
            this.projectionDeltaWithTransform,
            this.treeScale,
            h,
          )),
          c && (u.transform = c(h, u.transform));
        const { x: p, y: v } = this.projectionDelta;
        (u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
          d.animationValues
            ? (u.opacity =
                d === this
                  ? (l =
                      (a = h.opacity) !== null && a !== void 0
                        ? a
                        : this.latestValues.opacity) !== null && l !== void 0
                    ? l
                    : 1
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : h.opacityExit)
            : (u.opacity =
                d === this
                  ? h.opacity !== void 0
                    ? h.opacity
                    : ""
                  : h.opacityExit !== void 0
                    ? h.opacityExit
                    : 0);
        for (const g in Wu) {
          if (h[g] === void 0) continue;
          const { correct: w, applyTo: m } = Wu[g],
            f = u.transform === "none" ? h[g] : w(h[g], d);
          if (m) {
            const y = m.length;
            for (let _ = 0; _ < y; _++) u[m[_]] = f;
          } else u[g] = f;
        }
        return (
          this.options.layoutId &&
            (u.pointerEvents =
              d === this
                ? Hu(o == null ? void 0 : o.pointerEvents) || ""
                : "none"),
          u
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((o) => {
          var a;
          return (a = o.currentAnimation) === null || a === void 0
            ? void 0
            : a.stop();
        }),
          this.root.nodes.forEach(Tb),
          this.root.sharedNodes.clear();
      }
    };
  }
  function VO(t) {
    t.updateLayout();
  }
  function UO(t) {
    var e;
    const n =
      ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
      t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: s } = t.layout,
        { animationType: i } = t.options,
        o = n.source !== t.layout.source;
      i === "size"
        ? Lt((d) => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
              p = kt(h);
            (h.min = r[d].min), (h.max = h.min + p);
          })
        : Lb(i, n.layoutBox, r) &&
          Lt((d) => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
              p = kt(r[d]);
            (h.max = h.min + p),
              t.relativeTarget &&
                !t.currentAnimation &&
                ((t.isProjectionDirty = !0),
                (t.relativeTarget[d].max = t.relativeTarget[d].min + p));
          });
      const a = fi();
      pa(a, r, n.layoutBox);
      const l = fi();
      o ? pa(l, t.applyTransform(s, !0), n.measuredBox) : pa(l, r, n.layoutBox);
      const u = !vb(a);
      let c = !1;
      if (!t.resumeFrom) {
        const d = t.getClosestProjectingParent();
        if (d && !d.resumeFrom) {
          const { snapshot: h, layout: p } = d;
          if (h && p) {
            const v = Re();
            ma(v, n.layoutBox, h.layoutBox);
            const g = Re();
            ma(g, r, p.layoutBox),
              bb(v, g) || (c = !0),
              d.options.layoutRoot &&
                ((t.relativeTarget = g),
                (t.relativeTargetOrigin = v),
                (t.relativeParent = d));
          }
        }
      }
      t.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeTargetChanged: c,
      });
    } else if (t.isLead()) {
      const { onExitComplete: r } = t.options;
      r && r();
    }
    t.options.transition = void 0;
  }
  function BO(t) {
    ya && as.totalNodes++,
      t.parent &&
        (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty ||
          (t.isSharedProjectionDirty = !!(
            t.isProjectionDirty ||
            t.parent.isProjectionDirty ||
            t.parent.isSharedProjectionDirty
          )),
        t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
  }
  function zO(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
  }
  function WO(t) {
    t.clearSnapshot();
  }
  function Tb(t) {
    t.clearMeasurements();
  }
  function HO(t) {
    t.isLayoutDirty = !1;
  }
  function GO(t) {
    const { visualElement: e } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
      t.resetTransform();
  }
  function Pb(t) {
    t.finishAnimation(),
      (t.targetDelta = t.relativeTarget = t.target = void 0),
      (t.isProjectionDirty = !0);
  }
  function qO(t) {
    t.resolveTargetDelta();
  }
  function KO(t) {
    t.calcProjection();
  }
  function ZO(t) {
    t.resetSkewAndRotation();
  }
  function QO(t) {
    t.removeLeadSnapshot();
  }
  function Cb(t, e, n) {
    (t.translate = ke(e.translate, 0, n)),
      (t.scale = ke(e.scale, 1, n)),
      (t.origin = e.origin),
      (t.originPoint = e.originPoint);
  }
  function Rb(t, e, n, r) {
    (t.min = ke(e.min, n.min, r)), (t.max = ke(e.max, n.max, r));
  }
  function XO(t, e, n, r) {
    Rb(t.x, e.x, n.x, r), Rb(t.y, e.y, n.y, r);
  }
  function JO(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  const YO = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Nb = (t) =>
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(t),
    Ob = Nb("applewebkit/") && !Nb("chrome/") ? Math.round : Ze;
  function Mb(t) {
    (t.min = Ob(t.min)), (t.max = Ob(t.max));
  }
  function eM(t) {
    Mb(t.x), Mb(t.y);
  }
  function Lb(t, e, n) {
    return (
      t === "position" || (t === "preserve-aspect" && !tO(xb(e), xb(n), 0.2))
    );
  }
  function tM(t) {
    var e;
    return (
      t !== t.root &&
      ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
    );
  }
  const nM = Ab({
      attachResizeListener: (t, e) => In(t, "resize", e),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    gp = { current: void 0 },
    Ib = Ab({
      measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
      defaultParent: () => {
        if (!gp.current) {
          const t = new nM({});
          t.mount(window), t.setOptions({ layoutScroll: !0 }), (gp.current = t);
        }
        return gp.current;
      },
      resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none";
      },
      checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
    }),
    rM = {
      pan: { Feature: yO },
      drag: { Feature: gO, ProjectionNode: Ib, MeasureLayout: ob },
    };
  function jb(t, e) {
    const n = e ? "pointerenter" : "pointerleave",
      r = e ? "onHoverStart" : "onHoverEnd",
      s = (i, o) => {
        if (i.pointerType === "touch" || L_()) return;
        const a = t.getProps();
        t.animationState &&
          a.whileHover &&
          t.animationState.setActive("whileHover", e);
        const l = a[r];
        l && ce.postRender(() => l(i, o));
      };
    return jn(t.current, n, s, { passive: !t.getProps()[r] });
  }
  class sM extends Sr {
    mount() {
      this.unmount = Ln(jb(this.node, !0), jb(this.node, !1));
    }
    unmount() {}
  }
  class iM extends Sr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Ln(
        In(this.node.current, "focus", () => this.onFocus()),
        In(this.node.current, "blur", () => this.onBlur()),
      );
    }
    unmount() {}
  }
  const Db = (t, e) => (e ? (t === e ? !0 : Db(t, e.parentElement)) : !1);
  function yp(t, e) {
    if (!e) return;
    const n = new PointerEvent("pointer" + t);
    e(n, Vu(n));
  }
  class oM extends Sr {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = Ze),
        (this.removeEndListeners = Ze),
        (this.removeAccessibleListeners = Ze),
        (this.startPointerPress = (e, n) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          const r = this.node.getProps(),
            i = jn(
              window,
              "pointerup",
              (a, l) => {
                if (!this.checkPressEnd()) return;
                const {
                    onTap: u,
                    onTapCancel: c,
                    globalTapTarget: d,
                  } = this.node.getProps(),
                  h = !d && !Db(this.node.current, a.target) ? c : u;
                h && ce.update(() => h(a, l));
              },
              { passive: !(r.onTap || r.onPointerUp) },
            ),
            o = jn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
              passive: !(r.onTapCancel || r.onPointerCancel),
            });
          (this.removeEndListeners = Ln(i, o)), this.startPress(e, n);
        }),
        (this.startAccessiblePress = () => {
          const e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              const o = (a) => {
                a.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  yp("up", (l, u) => {
                    const { onTap: c } = this.node.getProps();
                    c && ce.postRender(() => c(l, u));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = In(this.node.current, "keyup", o)),
                yp("down", (a, l) => {
                  this.startPress(a, l);
                });
            },
            n = In(this.node.current, "keydown", e),
            r = () => {
              this.isPressing && yp("cancel", (i, o) => this.cancelPress(i, o));
            },
            s = In(this.node.current, "blur", r);
          this.removeAccessibleListeners = Ln(n, s);
        });
    }
    startPress(e, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: s } = this.node.getProps();
      s &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        r && ce.postRender(() => r(e, n));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !L_()
      );
    }
    cancelPress(e, n) {
      if (!this.checkPressEnd()) return;
      const { onTapCancel: r } = this.node.getProps();
      r && ce.postRender(() => r(e, n));
    }
    mount() {
      const e = this.node.getProps(),
        n = jn(
          e.globalTapTarget ? window : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) },
        ),
        r = In(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Ln(n, r);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  }
  const vp = new WeakMap(),
    wp = new WeakMap(),
    aM = (t) => {
      const e = vp.get(t.target);
      e && e(t);
    },
    lM = (t) => {
      t.forEach(aM);
    };
  function uM({ root: t, ...e }) {
    const n = t || document;
    wp.has(n) || wp.set(n, {});
    const r = wp.get(n),
      s = JSON.stringify(e);
    return (
      r[s] || (r[s] = new IntersectionObserver(lM, { root: t, ...e })), r[s]
    );
  }
  function cM(t, e, n) {
    const r = uM(e);
    return (
      vp.set(t, n),
      r.observe(t),
      () => {
        vp.delete(t), r.unobserve(t);
      }
    );
  }
  const dM = { some: 0, all: 1 };
  class hM extends Sr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      const { viewport: e = {} } = this.node.getProps(),
        { root: n, margin: r, amount: s = "some", once: i } = e,
        o = {
          root: n ? n.current : void 0,
          rootMargin: r,
          threshold: typeof s == "number" ? s : dM[s],
        },
        a = (l) => {
          const { isIntersecting: u } = l;
          if (
            this.isInView === u ||
            ((this.isInView = u), i && !u && this.hasEnteredView)
          )
            return;
          u && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", u);
          const { onViewportEnter: c, onViewportLeave: d } =
              this.node.getProps(),
            h = u ? c : d;
          h && h(l);
        };
      return cM(this.node.current, o, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: e, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(fM(e, n)) && this.startObserver();
    }
    unmount() {}
  }
  function fM({ viewport: t = {} }, { viewport: e = {} } = {}) {
    return (n) => t[n] !== e[n];
  }
  const pM = {
      inView: { Feature: hM },
      tap: { Feature: oM },
      focus: { Feature: iM },
      hover: { Feature: sM },
    },
    mM = { layout: { ProjectionNode: Ib, MeasureLayout: ob } },
    $b = C.createContext({
      transformPagePoint: (t) => t,
      isStatic: !1,
      reducedMotion: "never",
    }),
    Gu = C.createContext({}),
    _p = typeof window < "u",
    gM = _p ? C.useLayoutEffect : C.useEffect,
    Fb = C.createContext({ strict: !1 });
  function yM(t, e, n, r, s) {
    var i, o;
    const { visualElement: a } = C.useContext(Gu),
      l = C.useContext(Fb),
      u = C.useContext(hp),
      c = C.useContext($b).reducedMotion,
      d = C.useRef();
    (r = r || l.renderer),
      !d.current &&
        r &&
        (d.current = r(t, {
          visualState: e,
          parent: a,
          props: n,
          presenceContext: u,
          blockInitialAnimation: u ? u.initial === !1 : !1,
          reducedMotionConfig: c,
        }));
    const h = d.current,
      p = C.useContext(sb);
    h &&
      !h.projection &&
      s &&
      (h.type === "html" || h.type === "svg") &&
      vM(d.current, n, s, p);
    const v = C.useRef(!1);
    C.useInsertionEffect(() => {
      h && v.current && h.update(n, u);
    });
    const g = n[__],
      w = C.useRef(
        !!g &&
          !(
            !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
            i.call(window, g)
          ) &&
          ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
            ? void 0
            : o.call(window, g)),
      );
    return (
      gM(() => {
        h &&
          ((v.current = !0),
          (window.MotionIsMounted = !0),
          h.updateFeatures(),
          fp.render(h.render),
          w.current && h.animationState && h.animationState.animateChanges());
      }),
      C.useEffect(() => {
        h &&
          (!w.current && h.animationState && h.animationState.animateChanges(),
          w.current &&
            (queueMicrotask(() => {
              var m;
              (m = window.MotionHandoffMarkAsComplete) === null ||
                m === void 0 ||
                m.call(window, g);
            }),
            (w.current = !1)));
      }),
      h
    );
  }
  function vM(t, e, n, r) {
    const {
      layoutId: s,
      layout: i,
      drag: o,
      dragConstraints: a,
      layoutScroll: l,
      layoutRoot: u,
    } = e;
    (t.projection = new n(
      t.latestValues,
      e["data-framer-portal-id"] ? void 0 : Vb(t.parent),
    )),
      t.projection.setOptions({
        layoutId: s,
        layout: i,
        alwaysMeasureLayout: !!o || (a && hi(a)),
        visualElement: t,
        animationType: typeof i == "string" ? i : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u,
      });
  }
  function Vb(t) {
    if (t)
      return t.options.allowProjection !== !1 ? t.projection : Vb(t.parent);
  }
  function wM(t, e, n) {
    return C.useCallback(
      (r) => {
        r && t.mount && t.mount(r),
          e && (r ? e.mount(r) : e.unmount()),
          n && (typeof n == "function" ? n(r) : hi(n) && (n.current = r));
      },
      [e],
    );
  }
  function qu(t) {
    return Ru(t.animate) || Ef.some((e) => ia(t[e]));
  }
  function Ub(t) {
    return !!(qu(t) || t.variants);
  }
  function _M(t, e) {
    if (qu(t)) {
      const { initial: n, animate: r } = t;
      return {
        initial: n === !1 || ia(n) ? n : void 0,
        animate: ia(r) ? r : void 0,
      };
    }
    return t.inherit !== !1 ? e : {};
  }
  function bM(t) {
    const { initial: e, animate: n } = _M(t, C.useContext(Gu));
    return C.useMemo(() => ({ initial: e, animate: n }), [Bb(e), Bb(n)]);
  }
  function Bb(t) {
    return Array.isArray(t) ? t.join(" ") : t;
  }
  const zb = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    gi = {};
  for (const t in zb) gi[t] = { isEnabled: (e) => zb[t].some((n) => !!e[n]) };
  function xM(t) {
    for (const e in t) gi[e] = { ...gi[e], ...t[e] };
  }
  const SM = Symbol.for("motionComponentSymbol");
  function kM({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: r,
    Component: s,
  }) {
    t && xM(t);
    function i(a, l) {
      let u;
      const c = { ...C.useContext($b), ...a, layoutId: EM(a) },
        { isStatic: d } = c,
        h = bM(a),
        p = r(a, d);
      if (!d && _p) {
        AM();
        const v = TM(c);
        (u = v.MeasureLayout),
          (h.visualElement = yM(s, p, c, e, v.ProjectionNode));
      }
      return D.jsxs(Gu.Provider, {
        value: h,
        children: [
          u && h.visualElement
            ? D.jsx(u, { visualElement: h.visualElement, ...c })
            : null,
          n(s, a, wM(p, h.visualElement, l), p, d, h.visualElement),
        ],
      });
    }
    const o = C.forwardRef(i);
    return (o[SM] = s), o;
  }
  function EM({ layoutId: t }) {
    const e = C.useContext(rb).id;
    return e && t !== void 0 ? e + "-" + t : t;
  }
  function AM(t, e) {
    C.useContext(Fb).strict;
  }
  function TM(t) {
    const { drag: e, layout: n } = gi;
    if (!e && !n) return {};
    const r = { ...e, ...n };
    return {
      MeasureLayout:
        (e != null && e.isEnabled(t)) || (n != null && n.isEnabled(t))
          ? r.MeasureLayout
          : void 0,
      ProjectionNode: r.ProjectionNode,
    };
  }
  const PM = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function bp(t) {
    return typeof t != "string" || t.includes("-")
      ? !1
      : !!(PM.indexOf(t) > -1 || /[A-Z]/u.test(t));
  }
  function Wb(t, { style: e, vars: n }, r, s) {
    Object.assign(t.style, e, s && s.getProjectionStyles(r));
    for (const i in n) t.style.setProperty(i, n[i]);
  }
  const Hb = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function Gb(t, e, n, r) {
    Wb(t, e, void 0, r);
    for (const s in e.attrs) t.setAttribute(Hb.has(s) ? s : rp(s), e.attrs[s]);
  }
  function qb(t, { layout: e, layoutId: n }) {
    return (
      ns.has(t) ||
      t.startsWith("origin") ||
      ((e || n !== void 0) && (!!Wu[t] || t === "opacity"))
    );
  }
  function xp(t, e, n) {
    var r;
    const { style: s } = t,
      i = {};
    for (const o in s)
      (Xe(s[o]) ||
        (e.style && Xe(e.style[o])) ||
        qb(o, t) ||
        ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
          ? void 0
          : r.liveStyle) !== void 0) &&
        (i[o] = s[o]);
    return i;
  }
  function Kb(t, e, n) {
    const r = xp(t, e, n);
    for (const s in t)
      if (Xe(t[s]) || Xe(e[s])) {
        const i =
          oa.indexOf(s) !== -1
            ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
            : s;
        r[i] = t[s];
      }
    return r;
  }
  function CM(t) {
    const e = C.useRef(null);
    return e.current === null && (e.current = t()), e.current;
  }
  function RM(
    { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
    r,
    s,
    i,
  ) {
    const o = { latestValues: NM(r, s, i, t), renderState: e() };
    return n && (o.mount = (a) => n(r, a, o)), o;
  }
  const Zb = (t) => (e, n) => {
    const r = C.useContext(Gu),
      s = C.useContext(hp),
      i = () => RM(t, e, r, s);
    return n ? i() : CM(i);
  };
  function NM(t, e, n, r) {
    const s = {},
      i = r(t, {});
    for (const h in i) s[h] = Hu(i[h]);
    let { initial: o, animate: a } = t;
    const l = qu(t),
      u = Ub(t);
    e &&
      u &&
      !l &&
      t.inherit !== !1 &&
      (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    if (d && typeof d != "boolean" && !Ru(d)) {
      const h = Array.isArray(d) ? d : [d];
      for (let p = 0; p < h.length; p++) {
        const v = Sf(t, h[p]);
        if (v) {
          const { transitionEnd: g, transition: w, ...m } = v;
          for (const f in m) {
            let y = m[f];
            if (Array.isArray(y)) {
              const _ = c ? y.length - 1 : 0;
              y = y[_];
            }
            y !== null && (s[f] = y);
          }
          for (const f in g) s[f] = g[f];
        }
      }
    }
    return s;
  }
  const Sp = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    }),
    Qb = () => ({ ...Sp(), attrs: {} }),
    Xb = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
    OM = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    MM = oa.length;
  function LM(t, e, n) {
    let r = "",
      s = !0;
    for (let i = 0; i < MM; i++) {
      const o = oa[i],
        a = t[o];
      if (a === void 0) continue;
      let l = !0;
      if (
        (typeof a == "number"
          ? (l = a === (o.startsWith("scale") ? 1 : 0))
          : (l = parseFloat(a) === 0),
        !l || n)
      ) {
        const u = Xb(a, Vf[o]);
        if (!l) {
          s = !1;
          const c = OM[o] || o;
          r += `${c}(${u}) `;
        }
        n && (e[o] = u);
      }
    }
    return (r = r.trim()), n ? (r = n(e, s ? "" : r)) : s && (r = "none"), r;
  }
  function kp(t, e, n) {
    const { style: r, vars: s, transformOrigin: i } = t;
    let o = !1,
      a = !1;
    for (const l in e) {
      const u = e[l];
      if (ns.has(l)) {
        o = !0;
        continue;
      } else if (Mw(l)) {
        s[l] = u;
        continue;
      } else {
        const c = Xb(u, Vf[l]);
        l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
      }
    }
    if (
      (e.transform ||
        (o || n
          ? (r.transform = LM(e, t.transform, n))
          : r.transform && (r.transform = "none")),
      a)
    ) {
      const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
      r.transformOrigin = `${l} ${u} ${c}`;
    }
  }
  function Jb(t, e, n) {
    return typeof t == "string" ? t : $.transform(e + n * t);
  }
  function IM(t, e, n) {
    const r = Jb(e, t.x, t.width),
      s = Jb(n, t.y, t.height);
    return `${r} ${s}`;
  }
  const jM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    DM = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function $M(t, e, n = 1, r = 0, s = !0) {
    t.pathLength = 1;
    const i = s ? jM : DM;
    t[i.offset] = $.transform(-r);
    const o = $.transform(e),
      a = $.transform(n);
    t[i.array] = `${o} ${a}`;
  }
  function Ep(
    t,
    {
      attrX: e,
      attrY: n,
      attrScale: r,
      originX: s,
      originY: i,
      pathLength: o,
      pathSpacing: a = 1,
      pathOffset: l = 0,
      ...u
    },
    c,
    d,
  ) {
    if ((kp(t, u, d), c)) {
      t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
      return;
    }
    (t.attrs = t.style), (t.style = {});
    const { attrs: h, style: p, dimensions: v } = t;
    h.transform && (v && (p.transform = h.transform), delete h.transform),
      v &&
        (s !== void 0 || i !== void 0 || p.transform) &&
        (p.transformOrigin = IM(
          v,
          s !== void 0 ? s : 0.5,
          i !== void 0 ? i : 0.5,
        )),
      e !== void 0 && (h.x = e),
      n !== void 0 && (h.y = n),
      r !== void 0 && (h.scale = r),
      o !== void 0 && $M(h, o, a, l, !1);
  }
  const Ap = (t) => typeof t == "string" && t.toLowerCase() === "svg",
    FM = {
      useVisualState: Zb({
        scrapeMotionValuesFromProps: Kb,
        createRenderState: Qb,
        onMount: (t, e, { renderState: n, latestValues: r }) => {
          ce.read(() => {
            try {
              n.dimensions =
                typeof e.getBBox == "function"
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch {
              n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
          }),
            ce.render(() => {
              Ep(n, r, Ap(e.tagName), t.transformTemplate), Gb(e, n);
            });
        },
      }),
    },
    VM = {
      useVisualState: Zb({
        scrapeMotionValuesFromProps: xp,
        createRenderState: Sp,
      }),
    };
  function Yb(t, e, n) {
    for (const r in e) !Xe(e[r]) && !qb(r, n) && (t[r] = e[r]);
  }
  function UM({ transformTemplate: t }, e) {
    return C.useMemo(() => {
      const n = Sp();
      return kp(n, e, t), Object.assign({}, n.vars, n.style);
    }, [e]);
  }
  function BM(t, e) {
    const n = t.style || {},
      r = {};
    return Yb(r, n, t), Object.assign(r, UM(t, e)), r;
  }
  function zM(t, e) {
    const n = {},
      r = BM(t, e);
    return (
      t.drag &&
        t.dragListener !== !1 &&
        ((n.draggable = !1),
        (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
        (r.touchAction =
          t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
      t.tabIndex === void 0 &&
        (t.onTap || t.onTapStart || t.whileTap) &&
        (n.tabIndex = 0),
      (n.style = r),
      n
    );
  }
  const WM = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function Ku(t) {
    return (
      t.startsWith("while") ||
      (t.startsWith("drag") && t !== "draggable") ||
      t.startsWith("layout") ||
      t.startsWith("onTap") ||
      t.startsWith("onPan") ||
      t.startsWith("onLayout") ||
      WM.has(t)
    );
  }
  let ex = (t) => !Ku(t);
  function HM(t) {
    t && (ex = (e) => (e.startsWith("on") ? !Ku(e) : t(e)));
  }
  try {
    HM(require("@emotion/is-prop-valid").default);
  } catch {}
  function GM(t, e, n) {
    const r = {};
    for (const s in t)
      (s === "values" && typeof t.values == "object") ||
        ((ex(s) ||
          (n === !0 && Ku(s)) ||
          (!e && !Ku(s)) ||
          (t.draggable && s.startsWith("onDrag"))) &&
          (r[s] = t[s]));
    return r;
  }
  function qM(t, e, n, r) {
    const s = C.useMemo(() => {
      const i = Qb();
      return (
        Ep(i, e, Ap(r), t.transformTemplate),
        { ...i.attrs, style: { ...i.style } }
      );
    }, [e]);
    if (t.style) {
      const i = {};
      Yb(i, t.style, t), (s.style = { ...i, ...s.style });
    }
    return s;
  }
  function KM(t = !1) {
    return (n, r, s, { latestValues: i }, o) => {
      const l = (bp(n) ? qM : zM)(r, i, o, n),
        u = GM(r, typeof n == "string", t),
        c = n !== C.Fragment ? { ...u, ...l, ref: s } : {},
        { children: d } = r,
        h = C.useMemo(() => (Xe(d) ? d.get() : d), [d]);
      return C.createElement(n, { ...c, children: h });
    };
  }
  function ZM(t, e) {
    return function (
      r,
      { forwardMotionProps: s } = { forwardMotionProps: !1 },
    ) {
      const o = {
        ...(bp(r) ? FM : VM),
        preloadedFeatures: t,
        useRender: KM(s),
        createVisualElement: e,
        Component: r,
      };
      return kM(o);
    };
  }
  const Tp = { current: null },
    tx = { current: !1 };
  function QM() {
    if (((tx.current = !0), !!_p))
      if (window.matchMedia) {
        const t = window.matchMedia("(prefers-reduced-motion)"),
          e = () => (Tp.current = t.matches);
        t.addListener(e), e();
      } else Tp.current = !1;
  }
  function XM(t, e, n) {
    for (const r in e) {
      const s = e[r],
        i = n[r];
      if (Xe(s)) t.addValue(r, s);
      else if (Xe(i)) t.addValue(r, fa(s, { owner: t }));
      else if (i !== s)
        if (t.hasValue(r)) {
          const o = t.getValue(r);
          o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
        } else {
          const o = t.getStaticValue(r);
          t.addValue(r, fa(o !== void 0 ? o : s, { owner: t }));
        }
    }
    for (const r in n) e[r] === void 0 && t.removeValue(r);
    return e;
  }
  const nx = new WeakMap(),
    JM = [...Vw, Qe, xr],
    YM = (t) => JM.find(Fw(t)),
    rx = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ];
  class eL {
    scrapeMotionValuesFromProps(e, n, r) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: n,
        presenceContext: r,
        reducedMotionConfig: s,
        blockInitialAnimation: i,
        visualState: o,
      },
      a = {},
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = Lf),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const h = cn.now();
          this.renderScheduledAt < h &&
            ((this.renderScheduledAt = h), ce.render(this.render, !1, !0));
        });
      const { latestValues: l, renderState: u } = o;
      (this.latestValues = l),
        (this.baseTarget = { ...l }),
        (this.initialValues = n.initial ? { ...l } : {}),
        (this.renderState = u),
        (this.parent = e),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = s),
        (this.options = a),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = qu(n)),
        (this.isVariantNode = Ub(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
        n,
        {},
        this,
      );
      for (const h in d) {
        const p = d[h];
        l[h] !== void 0 && Xe(p) && p.set(l[h], !1);
      }
    }
    mount(e) {
      (this.current = e),
        nx.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
        tx.current || QM(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
              ? !0
              : Tp.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      nx.delete(this.current),
        this.projection && this.projection.unmount(),
        wr(this.notifyUpdate),
        wr(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) {
        const n = this.features[e];
        n && (n.unmount(), (n.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, n) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      const r = ns.has(e),
        s = n.on("change", (a) => {
          (this.latestValues[e] = a),
            this.props.onUpdate && ce.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = n.on("renderRequest", this.scheduleRender);
      let o;
      window.MotionCheckAppearSync &&
        (o = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, () => {
          s(), i(), o && o(), n.owner && n.stop();
        });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in gi) {
        const n = gi[e];
        if (!n) continue;
        const { isEnabled: r, Feature: s } = n;
        if (
          (!this.features[e] &&
            s &&
            r(this.props) &&
            (this.features[e] = new s(this)),
          this.features[e])
        ) {
          const i = this.features[e];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Re();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, n) {
      this.latestValues[e] = n;
    }
    update(e, n) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = n);
      for (let r = 0; r < rx.length; r++) {
        const s = rx[r];
        this.propEventSubscriptions[s] &&
          (this.propEventSubscriptions[s](),
          delete this.propEventSubscriptions[s]);
        const i = "on" + s,
          o = e[i];
        o && (this.propEventSubscriptions[s] = this.on(s, o));
      }
      (this.prevMotionValues = XM(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      const n = this.getClosestVariantNode();
      if (n)
        return (
          n.variantChildren && n.variantChildren.add(e),
          () => n.variantChildren.delete(e)
        );
    }
    addValue(e, n) {
      const r = this.values.get(e);
      n !== r &&
        (r && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        (this.latestValues[e] = n.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      const n = this.valueSubscriptions.get(e);
      n && (n(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, n) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let r = this.values.get(e);
      return (
        r === void 0 &&
          n !== void 0 &&
          ((r = fa(n === null ? void 0 : n, { owner: this })),
          this.addValue(e, r)),
        r
      );
    }
    readValue(e, n) {
      var r;
      let s =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (r = this.getBaseTargetFromProps(this.props, e)) !== null &&
              r !== void 0
            ? r
            : this.readValueFromInstance(this.current, e, this.options);
      return (
        s != null &&
          (typeof s == "string" && (Nw(s) || Rw(s))
            ? (s = parseFloat(s))
            : !YM(s) && xr.test(n) && (s = Xw(e, n)),
          this.setBaseTarget(e, Xe(s) ? s.get() : s)),
        Xe(s) ? s.get() : s
      );
    }
    setBaseTarget(e, n) {
      this.baseTarget[e] = n;
    }
    getBaseTarget(e) {
      var n;
      const { initial: r } = this.props;
      let s;
      if (typeof r == "string" || typeof r == "object") {
        const o = Sf(
          this.props,
          r,
          (n = this.presenceContext) === null || n === void 0
            ? void 0
            : n.custom,
        );
        o && (s = o[e]);
      }
      if (r && s !== void 0) return s;
      const i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !Xe(i)
        ? i
        : this.initialValues[e] !== void 0 && s === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, n) {
      return (
        this.events[e] || (this.events[e] = new np()), this.events[e].add(n)
      );
    }
    notify(e, ...n) {
      this.events[e] && this.events[e].notify(...n);
    }
  }
  class sx extends eL {
    constructor() {
      super(...arguments), (this.KeyframeResolver = Jw);
    }
    sortInstanceNodePosition(e, n) {
      return e.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, n) {
      return e.style ? e.style[n] : void 0;
    }
    removeValueFromRenderState(e, { vars: n, style: r }) {
      delete n[e], delete r[e];
    }
  }
  function tL(t) {
    return window.getComputedStyle(t);
  }
  class nL extends sx {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = Wb);
    }
    readValueFromInstance(e, n) {
      if (ns.has(n)) {
        const r = Uf(n);
        return (r && r.default) || 0;
      } else {
        const r = tL(e),
          s = (Mw(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof s == "string" ? s.trim() : s;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: n }) {
      return eb(e, n);
    }
    build(e, n, r) {
      kp(e, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, n, r) {
      return xp(e, n, r);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: e } = this.props;
      Xe(e) &&
        (this.childSubscription = e.on("change", (n) => {
          this.current && (this.current.textContent = `${n}`);
        }));
    }
  }
  class rL extends sx {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Re);
    }
    getBaseTargetFromProps(e, n) {
      return e[n];
    }
    readValueFromInstance(e, n) {
      if (ns.has(n)) {
        const r = Uf(n);
        return (r && r.default) || 0;
      }
      return (n = Hb.has(n) ? n : rp(n)), e.getAttribute(n);
    }
    scrapeMotionValuesFromProps(e, n, r) {
      return Kb(e, n, r);
    }
    build(e, n, r) {
      Ep(e, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, n, r, s) {
      Gb(e, n, r, s);
    }
    mount(e) {
      (this.isSVGTag = Ap(e.tagName)), super.mount(e);
    }
  }
  const sL = (t, e) =>
      bp(t) ? new rL(e) : new nL(e, { allowProjection: t !== C.Fragment }),
    iL = ZM({ ...GN, ...pM, ...rM, ...mM }, sL),
    ix = FC(iL);
  function oL({ isVisible: t, isRecording: e, onIconClick: n }) {
    const [r, s] = C.useState(!0);
    return (
      C.useEffect(() => {
        const i = setInterval(() => {
          s((o) => !o);
        }, 1e3);
        return () => clearInterval(i);
      }, []),
      t
        ? D.jsxs("div", {
            className: "relative w-16 h-16 rounded-full bg-transparent",
            children: [
              D.jsx(ix.div, {
                className: `absolute inset-0 rounded-full ${e ? "bg-green-500" : "bg-yellow-500"} opacity-50`,
                animate: { scale: [1, 1.1, 1] },
                transition: { duration: 2, repeat: 1 / 0, ease: "easeInOut" },
              }),
              D.jsx(ix.div, {
                className:
                  "absolute inset-0 rounded-full bg-white flex items-center justify-center",
                animate: { scale: r ? 1 : 0.9 },
                transition: { duration: 0.3 },
                children: D.jsx("div", {
                  className: `relative w-full h-full rounded-full overflow-hidden border-4 ${e ? "border-green-500" : "border-yellow-500"} flex items-center justify-center`,
                  children: D.jsx(EP, {
                    size: 24,
                    className: `${e ? "text-green-500" : "text-yellow-500"} cursor-pointer`,
                    onClick: n,
                  }),
                }),
              }),
            ],
          })
        : null
    );
  }
  const aL = Ae.object({ pageState: _f });
  Ae.object({ response: Ae.string() });
  const lL = Ae.object({ url: Ae.string(), isRecording: Ae.boolean() }),
    uL = { url: "", isRecording: !0 },
    ox = (t) => {
      let e;
      const n = new Set(),
        r = (u, c) => {
          const d = typeof u == "function" ? u(e) : u;
          if (!Object.is(d, e)) {
            const h = e;
            (e =
              (c ?? (typeof d != "object" || d === null))
                ? d
                : Object.assign({}, e, d)),
              n.forEach((p) => p(e, h));
          }
        },
        s = () => e,
        a = {
          setState: r,
          getState: s,
          getInitialState: () => l,
          subscribe: (u) => (n.add(u), () => n.delete(u)),
        },
        l = (e = t(r, s, a));
      return a;
    },
    cL = (t) => (t ? ox(t) : ox),
    dL = (t) => t;
  function hL(t, e = dL) {
    const n = Aa.useSyncExternalStore(
      t.subscribe,
      () => e(t.getState()),
      () => e(t.getInitialState()),
    );
    return Aa.useDebugValue(n), n;
  }
  const fL = (t) => {
      const e = cL(t),
        n = (r) => hL(e, r);
      return Object.assign(n, e), n;
    },
    pL = (t) => fL;
  function ax(t, e) {
    let n;
    try {
      n = t();
    } catch {
      return;
    }
    return {
      getItem: (s) => {
        var i;
        const o = (l) => (l === null ? null : JSON.parse(l, void 0)),
          a = (i = n.getItem(s)) != null ? i : null;
        return a instanceof Promise ? a.then(o) : o(a);
      },
      setItem: (s, i) => n.setItem(s, JSON.stringify(i, void 0)),
      removeItem: (s) => n.removeItem(s),
    };
  }
  const Pp = (t) => (e) => {
      try {
        const n = t(e);
        return n instanceof Promise
          ? n
          : {
              then(r) {
                return Pp(r)(n);
              },
              catch(r) {
                return this;
              },
            };
      } catch (n) {
        return {
          then(r) {
            return this;
          },
          catch(r) {
            return Pp(r)(n);
          },
        };
      }
    },
    mL = (t, e) => (n, r, s) => {
      let i = {
          storage: ax(() => localStorage),
          partialize: (g) => g,
          version: 0,
          merge: (g, w) => ({ ...w, ...g }),
          ...e,
        },
        o = !1;
      const a = new Set(),
        l = new Set();
      let u = i.storage;
      if (!u)
        return t(
          (...g) => {
            console.warn(
              `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`,
            ),
              n(...g);
          },
          r,
          s,
        );
      const c = () => {
          const g = i.partialize({ ...r() });
          return u.setItem(i.name, { state: g, version: i.version });
        },
        d = s.setState;
      s.setState = (g, w) => {
        d(g, w), c();
      };
      const h = t(
        (...g) => {
          n(...g), c();
        },
        r,
        s,
      );
      s.getInitialState = () => h;
      let p;
      const v = () => {
        var g, w;
        if (!u) return;
        (o = !1),
          a.forEach((f) => {
            var y;
            return f((y = r()) != null ? y : h);
          });
        const m =
          ((w = i.onRehydrateStorage) == null
            ? void 0
            : w.call(i, (g = r()) != null ? g : h)) || void 0;
        return Pp(u.getItem.bind(u))(i.name)
          .then((f) => {
            if (f)
              if (typeof f.version == "number" && f.version !== i.version) {
                if (i.migrate) return [!0, i.migrate(f.state, f.version)];
                console.error(
                  "State loaded from storage couldn't be migrated since no migrate function was provided",
                );
              } else return [!1, f.state];
            return [!1, void 0];
          })
          .then((f) => {
            var y;
            const [_, S] = f;
            if (((p = i.merge(S, (y = r()) != null ? y : h)), n(p, !0), _))
              return c();
          })
          .then(() => {
            m == null || m(p, void 0),
              (p = r()),
              (o = !0),
              l.forEach((f) => f(p));
          })
          .catch((f) => {
            m == null || m(void 0, f);
          });
      };
      return (
        (s.persist = {
          setOptions: (g) => {
            (i = { ...i, ...g }), g.storage && (u = g.storage);
          },
          clearStorage: () => {
            u == null || u.removeItem(i.name);
          },
          getOptions: () => i,
          rehydrate: () => v(),
          hasHydrated: () => o,
          onHydrate: (g) => (
            a.add(g),
            () => {
              a.delete(g);
            }
          ),
          onFinishHydration: (g) => (
            l.add(g),
            () => {
              l.delete(g);
            }
          ),
        }),
        i.skipHydration || v(),
        p || h
      );
    },
    gL = ((t, e, n, r, s) =>
      pL()(
        mL(
          (i) => ({
            [r]: e,
            [s]: (o) =>
              i((a) => {
                const l = { ...a[r], ...o };
                return n.safeParse(l).success ? { ...a, [r]: l } : a;
              }),
          }),
          {
            name: t,
            storage: ax(() => localStorage),
            onRehydrateStorage: () => (i) => {
              if (i && r in i && !n.safeParse(i[r]).success) return { [r]: e };
            },
          },
        ),
      ))("recording", uL, lL, "recordingState", "setRecordingState"),
    yL = (t) => {
      chrome.storage.local.set({ urlHistory: JSON.stringify(t) });
    },
    Cp = async () => {
      const t = await chrome.storage.local.get("urlHistory");
      return t != null && t.urlHistory ? JSON.parse(t.urlHistory) : [];
    };
  function vL() {
    const [t, e] = C.useState(!1),
      [n, r] = C.useState(!1),
      { recordingState: s, setRecordingState: i } = gL(),
      [o, a] = C.useState([]),
      [l, u] = C.useState(!1);
    C.useEffect(() => {
      r(!0);
    }, [t]);
    const c = async () => {
      const d = await vw();
      if (!d) {
        Oe.error("Page state is not available");
        return;
      }
      const h = aL.parse({ pageState: d }),
        p = await vP(h);
      a([...o, { content: p.response, role: ta.Values.assistant }]), t || u(!0);
      const v = { url: d.url, textContent: d.textContent },
        g = await Cp();
      return (
        yL([...g, v].slice(-10)),
        setTimeout(async () => {
          const w = await gP().catch((m) =>
            Oe.error("Failed to analyze pages:", m),
          );
          console.log("analysis on FE", w);
        }, 0),
        p
      );
    };
    return (
      C.useEffect(() => {
        const d = (h) => {
          if (
            ((h.metaKey || h.ctrlKey) &&
              h.key.toLowerCase() === "k" &&
              (h.preventDefault(), e((p) => !p)),
            (h.metaKey || h.ctrlKey) && h.key.toLowerCase() === "l")
          ) {
            h.preventDefault();
            const p = !s.isRecording;
            console.log(p);
            const v = window.location.href;
            if (s.url === v) {
              i({ isRecording: p, url: v });
              return;
            }
            i({ isRecording: p, url: v });
          }
        };
        return (
          window.addEventListener("keydown", d, !0),
          () => window.removeEventListener("keydown", d, !0)
        );
      }, [c, i]),
      C.useEffect(() => {
        s.isRecording && c();
      }, []),
      n
        ? t
          ? D.jsx($C, {
              messages: o,
              isVisible: t,
              isRecording: s.isRecording,
              onContainerClose: () => {
                e(!1);
              },
              onPlayButtonClick: () => {
                Oe.info("Play button clicked"), i({ ...s, isRecording: !0 });
              },
              onPauseButtonClick: () => {
                Oe.info("Pause button clicked"), i({ ...s, isRecording: !1 });
              },
              onMessagesUpdate: (d) => {
                a(d);
              },
            })
          : D.jsx("div", {
              className: `fixed inset-0 pointer-events-none ${l ? "animate-subtle-bounce" : ""}`,
              children: D.jsx("div", {
                className: "absolute bottom-4 right-4 pointer-events-auto",
                children: D.jsx(oL, {
                  isVisible: !t,
                  isRecording: s.isRecording,
                  onIconClick: () => {
                    r(!1), e(!0), u(!1);
                  },
                }),
              }),
            })
        : null
    );
  }
  const wL = {
      name: vv,
      position: "inline",
      anchor: "body",
      async onMount(t) {
        const { theme: e } = await Dt.storage.sync.get("theme"),
          n = document.createElement("div");
        (n.id = vv),
          n.classList.add(e),
          Object.assign(n.style, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "999999",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }),
          t.appendChild(n),
          ev(n).render(Aa.createElement(Rk, null, Aa.createElement(vL))),
          window.addEventListener("message", async (i) => {
            if (i.source !== window) return;
            const o = Ah.safeParse(i.data);
            if (o.success)
              switch (o.data.phase) {
                case Do.Values.before:
                  n.style.display = "none";
                  break;
                case Do.Values.after:
                  n.style.display = "";
                  break;
                default:
                  Oe.error(
                    "Invalid screenshot phase. Expected 'before' or 'after'",
                  );
                  break;
              }
          });
        const s = (i) => {
          i.theme &&
            (i.theme.newValue === "dark"
              ? (n.classList.add("dark"), n.classList.remove("light"))
              : (n.classList.add("light"), n.classList.remove("dark")));
        };
        return (
          Dt.storage.onChanged.addListener(s),
          () => {
            Dt.storage.onChanged.removeListener(s);
          }
        );
      },
    },
    _L = {
      matches: ["<all_urls>"],
      cssInjectionMode: "ui",
      async main(t) {
        (await Px(t, wL)).mount();
      },
    };
  function KL() {}
  function Zu(t, ...e) {}
  const bL = {
      debug: (...t) => Zu(console.debug, ...t),
      log: (...t) => Zu(console.log, ...t),
      warn: (...t) => Zu(console.warn, ...t),
      error: (...t) => Zu(console.error, ...t),
    },
    xL = (async () => {
      try {
        const { main: t, ...e } = _L,
          n = new rc("content", e);
        return await t(n);
      } catch (t) {
        throw (
          (bL.error('The content script "content" crashed on startup!', t), t)
        );
      }
    })();
  var SL = function () {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object",
    );
  };
  const kL = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ae(SL) },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
  return xL;
})();
content;