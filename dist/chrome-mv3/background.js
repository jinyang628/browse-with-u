var background = (function () {
  "use strict";
  function F(t) {
    return t == null || typeof t == "function" ? { main: t } : t;
  }
  var B =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
  function L(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var P = { exports: {} };
  (function (t, S) {
    (function (u, l) {
      l(t);
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : B,
      function (u) {
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
          u.exports = globalThis.browser;
        else {
          const l = "The message port closed before a response was received.",
            I = (x) => {
              const T = {
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
              if (Object.keys(T).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill",
                );
              class M extends WeakMap {
                constructor(r, n = void 0) {
                  super(n), (this.createItem = r);
                }
                get(r) {
                  return (
                    this.has(r) || this.set(r, this.createItem(r)), super.get(r)
                  );
                }
              }
              const U = (e) =>
                  e && typeof e == "object" && typeof e.then == "function",
                N =
                  (e, r) =>
                  (...n) => {
                    x.runtime.lastError
                      ? e.reject(new Error(x.runtime.lastError.message))
                      : r.singleCallbackArg ||
                          (n.length <= 1 && r.singleCallbackArg !== !1)
                        ? e.resolve(n[0])
                        : e.resolve(n);
                  },
                h = (e) => (e == 1 ? "argument" : "arguments"),
                D = (e, r) =>
                  function (g, ...a) {
                    if (a.length < r.minArgs)
                      throw new Error(
                        `Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${a.length}`,
                      );
                    if (a.length > r.maxArgs)
                      throw new Error(
                        `Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${a.length}`,
                      );
                    return new Promise((m, o) => {
                      if (r.fallbackToNoCallback)
                        try {
                          g[e](...a, N({ resolve: m, reject: o }, r));
                        } catch (s) {
                          console.warn(
                            `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            s,
                          ),
                            g[e](...a),
                            (r.fallbackToNoCallback = !1),
                            (r.noCallback = !0),
                            m();
                        }
                      else
                        r.noCallback
                          ? (g[e](...a), m())
                          : g[e](...a, N({ resolve: m, reject: o }, r));
                    });
                  },
                R = (e, r, n) =>
                  new Proxy(r, {
                    apply(g, a, m) {
                      return n.call(a, e, ...m);
                    },
                  });
              let w = Function.call.bind(Object.prototype.hasOwnProperty);
              const p = (e, r = {}, n = {}) => {
                  let g = Object.create(null),
                    a = {
                      has(o, s) {
                        return s in e || s in g;
                      },
                      get(o, s, A) {
                        if (s in g) return g[s];
                        if (!(s in e)) return;
                        let i = e[s];
                        if (typeof i == "function")
                          if (typeof r[s] == "function") i = R(e, e[s], r[s]);
                          else if (w(n, s)) {
                            let d = D(s, n[s]);
                            i = R(e, e[s], d);
                          } else i = i.bind(e);
                        else if (
                          typeof i == "object" &&
                          i !== null &&
                          (w(r, s) || w(n, s))
                        )
                          i = p(i, r[s], n[s]);
                        else if (w(n, "*")) i = p(i, r[s], n["*"]);
                        else
                          return (
                            Object.defineProperty(g, s, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return e[s];
                              },
                              set(d) {
                                e[s] = d;
                              },
                            }),
                            i
                          );
                        return (g[s] = i), i;
                      },
                      set(o, s, A, i) {
                        return s in g ? (g[s] = A) : (e[s] = A), !0;
                      },
                      defineProperty(o, s, A) {
                        return Reflect.defineProperty(g, s, A);
                      },
                      deleteProperty(o, s) {
                        return Reflect.deleteProperty(g, s);
                      },
                    },
                    m = Object.create(e);
                  return new Proxy(m, a);
                },
                C = (e) => ({
                  addListener(r, n, ...g) {
                    r.addListener(e.get(n), ...g);
                  },
                  hasListener(r, n) {
                    return r.hasListener(e.get(n));
                  },
                  removeListener(r, n) {
                    r.removeListener(e.get(n));
                  },
                }),
                Z = new M((e) =>
                  typeof e != "function"
                    ? e
                    : function (n) {
                        const g = p(
                          n,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } },
                        );
                        e(g);
                      },
                ),
                $ = new M((e) =>
                  typeof e != "function"
                    ? e
                    : function (n, g, a) {
                        let m = !1,
                          o,
                          s = new Promise((f) => {
                            o = function (c) {
                              (m = !0), f(c);
                            };
                          }),
                          A;
                        try {
                          A = e(n, g, o);
                        } catch (f) {
                          A = Promise.reject(f);
                        }
                        const i = A !== !0 && U(A);
                        if (A !== !0 && !i && !m) return !1;
                        const d = (f) => {
                          f.then(
                            (c) => {
                              a(c);
                            },
                            (c) => {
                              let E;
                              c &&
                              (c instanceof Error ||
                                typeof c.message == "string")
                                ? (E = c.message)
                                : (E = "An unexpected error occurred"),
                                a({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: E,
                                });
                            },
                          ).catch((c) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              c,
                            );
                          });
                        };
                        return d(i ? A : s), !0;
                      },
                ),
                z = ({ reject: e, resolve: r }, n) => {
                  x.runtime.lastError
                    ? x.runtime.lastError.message === l
                      ? r()
                      : e(new Error(x.runtime.lastError.message))
                    : n && n.__mozWebExtensionPolyfillReject__
                      ? e(new Error(n.message))
                      : r(n);
                },
                _ = (e, r, n, ...g) => {
                  if (g.length < r.minArgs)
                    throw new Error(
                      `Expected at least ${r.minArgs} ${h(r.minArgs)} for ${e}(), got ${g.length}`,
                    );
                  if (g.length > r.maxArgs)
                    throw new Error(
                      `Expected at most ${r.maxArgs} ${h(r.maxArgs)} for ${e}(), got ${g.length}`,
                    );
                  return new Promise((a, m) => {
                    const o = z.bind(null, { resolve: a, reject: m });
                    g.push(o), n.sendMessage(...g);
                  });
                },
                G = {
                  devtools: { network: { onRequestFinished: C(Z) } },
                  runtime: {
                    onMessage: C($),
                    onMessageExternal: C($),
                    sendMessage: _.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: _.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                v = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (T.privacy = {
                  network: { "*": v },
                  services: { "*": v },
                  websites: { "*": v },
                }),
                p(x, G, T)
              );
            };
          u.exports = I(chrome);
        }
      },
    );
  })(P);
  var O = P.exports;
  const k = L(O),
    j = "captureScreenshot",
    W = F(() => {
      k.runtime.onMessage.addListener((t, S, u) => {
        switch (t.action) {
          case j:
            k.tabs
              .query({ active: !0, currentWindow: !0 })
              .then((l) => {
                if (l.length > 0 && l[0].id !== void 0)
                  return k.tabs.captureVisibleTab(l[0].windowId || 0, {
                    format: "png",
                  });
                throw new Error("No active tab found");
              })
              .then((l) => {
                u(l);
              })
              .catch((l) => {
                u({ error: l.message });
              });
            break;
        }
        return !0;
      });
    });
  function V() {}
  function b(t, ...S) {}
  const q = {
    debug: (...t) => b(console.debug, ...t),
    log: (...t) => b(console.log, ...t),
    warn: (...t) => b(console.warn, ...t),
    error: (...t) => b(console.error, ...t),
  };
  let y;
  try {
    (y = W.main()),
      y instanceof Promise &&
        console.warn(
          "The background's main() function return a promise, but it must be synchronous",
        );
  } catch (t) {
    throw (q.error("The background crashed on startup!"), t);
  }
  return y;
})();
background;
