function jc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
try {
} catch (e) {
  console.error("[wxt] Failed to initialize plugins", e);
}
var Ic =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function fu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function am(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var du = { exports: {} },
  pl = {},
  pu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  Fc = Symbol.for("react.portal"),
  Dc = Symbol.for("react.fragment"),
  $c = Symbol.for("react.strict_mode"),
  Uc = Symbol.for("react.profiler"),
  Vc = Symbol.for("react.provider"),
  Wc = Symbol.for("react.context"),
  Bc = Symbol.for("react.forward_ref"),
  Hc = Symbol.for("react.suspense"),
  Qc = Symbol.for("react.memo"),
  Gc = Symbol.for("react.lazy"),
  Yi = Symbol.iterator;
function Kc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yi && e[Yi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gu = Object.assign,
  hu = {};
function hn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hu),
    (this.updater = n || mu);
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vu() {}
vu.prototype = hn.prototype;
function qo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hu),
    (this.updater = n || mu);
}
var bo = (qo.prototype = new vu());
bo.constructor = qo;
gu(bo, hn.prototype);
bo.isPureReactComponent = !0;
var Xi = Array.isArray,
  yu = Object.prototype.hasOwnProperty,
  ei = { current: null },
  wu = { key: !0, ref: !0, __self: !0, __source: !0 };
function xu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      yu.call(t, r) && !wu.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: sr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ei.current,
  };
}
function Yc(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ti(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function Xc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zi = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xc("" + e.key)
    : t.toString(36);
}
function Lr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case Fc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Tl(i, 0) : r),
      Xi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Zi, "$&/") + "/"),
          Lr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ti(l) &&
            (l = Yc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Zi, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Xi(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Tl(o, s);
      i += Lr(o, t, n, u, l);
    }
  else if (((u = Kc(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Tl(o, s++)), (i += Lr(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Zc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  Rr = { transition: null },
  Jc = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: ei,
  };
function ku() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: mr,
  forEach: function (e, t, n) {
    mr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ti(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = hn;
I.Fragment = Dc;
I.Profiler = Uc;
I.PureComponent = qo;
I.StrictMode = $c;
I.Suspense = Hc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jc;
I.act = ku;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = gu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ei.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      yu.call(t, u) &&
        !wu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vc, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = xu;
I.createFactory = function (e) {
  var t = xu.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Bc, render: e };
};
I.isValidElement = ti;
I.lazy = function (e) {
  return { $$typeof: Gc, _payload: { _status: -1, _result: e }, _init: Zc };
};
I.memo = function (e, t) {
  return { $$typeof: Qc, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
I.unstable_act = ku;
I.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ge.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
I.useId = function () {
  return ge.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ge.current.useRef(e);
};
I.useState = function (e) {
  return ge.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ge.current.useTransition();
};
I.version = "18.3.1";
pu.exports = I;
var j = pu.exports;
const qc = fu(j),
  cm = jc({ __proto__: null, default: qc }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bc = j,
  ef = Symbol.for("react.element"),
  tf = Symbol.for("react.fragment"),
  nf = Object.prototype.hasOwnProperty,
  rf = bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Su(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) nf.call(t, r) && !lf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ef,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: rf.current,
  };
}
pl.Fragment = tf;
pl.jsx = Su;
pl.jsxs = Su;
du.exports = pl;
var Bn = du.exports,
  Ji = {},
  Au = { exports: {} },
  _e = {},
  Eu = { exports: {} },
  Cu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, T) {
    var M = C.length;
    C.push(T);
    e: for (; 0 < M; ) {
      var $ = (M - 1) >>> 1,
        ne = C[$];
      if (0 < l(ne, T)) (C[$] = T), (C[M] = ne), (M = $);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var T = C[0],
      M = C.pop();
    if (M !== T) {
      C[0] = M;
      e: for (var $ = 0, ne = C.length, dr = ne >>> 1; $ < dr; ) {
        var _t = 2 * ($ + 1) - 1,
          zl = C[_t],
          Pt = _t + 1,
          pr = C[Pt];
        if (0 > l(zl, M))
          Pt < ne && 0 > l(pr, zl)
            ? ((C[$] = pr), (C[Pt] = M), ($ = Pt))
            : ((C[$] = zl), (C[_t] = M), ($ = _t));
        else if (Pt < ne && 0 > l(pr, M)) (C[$] = pr), (C[Pt] = M), ($ = Pt);
        else break e;
      }
    }
    return T;
  }
  function l(C, T) {
    var M = C.sortIndex - T.sortIndex;
    return M !== 0 ? M : C.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    m = 1,
    g = null,
    p = 3,
    y = !1,
    x = !1,
    k = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= C)
        r(c), (T.sortIndex = T.expirationTime), t(u, T);
      else break;
      T = n(c);
    }
  }
  function w(C) {
    if (((k = !1), d(C), !x))
      if (n(u) !== null) (x = !0), de(E);
      else {
        var T = n(c);
        T !== null && Ne(w, T.startTime - C);
      }
  }
  function E(C, T) {
    (x = !1), k && ((k = !1), f(A), (A = -1)), (y = !0);
    var M = p;
    try {
      for (
        d(T), g = n(u);
        g !== null && (!(g.expirationTime > T) || (C && !F()));

      ) {
        var $ = g.callback;
        if (typeof $ == "function") {
          (g.callback = null), (p = g.priorityLevel);
          var ne = $(g.expirationTime <= T);
          (T = e.unstable_now()),
            typeof ne == "function" ? (g.callback = ne) : g === n(u) && r(u),
            d(T);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var dr = !0;
      else {
        var _t = n(c);
        _t !== null && Ne(w, _t.startTime - T), (dr = !1);
      }
      return dr;
    } finally {
      (g = null), (p = M), (y = !1);
    }
  }
  var h = !1,
    v = null,
    A = -1,
    P = 5,
    N = -1;
  function F() {
    return !(e.unstable_now() - N < P);
  }
  function L() {
    if (v !== null) {
      var C = e.unstable_now();
      N = C;
      var T = !0;
      try {
        T = v(!0, C);
      } finally {
        T ? R() : ((h = !1), (v = null));
      }
    } else h = !1;
  }
  var R;
  if (typeof a == "function")
    R = function () {
      a(L);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      G = q.port2;
    (q.port1.onmessage = L),
      (R = function () {
        G.postMessage(null);
      });
  } else
    R = function () {
      z(L, 0);
    };
  function de(C) {
    (v = C), h || ((h = !0), R());
  }
  function Ne(C, T) {
    A = z(function () {
      C(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || y || ((x = !0), de(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (P = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var M = p;
      p = T;
      try {
        return C();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, T) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var M = p;
      p = C;
      try {
        return T();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (C, T, M) {
      var $ = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? $ + M : $))
          : (M = $),
        C)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = M + ne),
        (C = {
          id: m++,
          callback: T,
          priorityLevel: C,
          startTime: M,
          expirationTime: ne,
          sortIndex: -1,
        }),
        M > $
          ? ((C.sortIndex = M),
            t(c, C),
            n(u) === null &&
              C === n(c) &&
              (k ? (f(A), (A = -1)) : (k = !0), Ne(w, M - $)))
          : ((C.sortIndex = ne), t(u, C), x || y || ((x = !0), de(E))),
        C
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (C) {
      var T = p;
      return function () {
        var M = p;
        p = T;
        try {
          return C.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(Cu);
Eu.exports = Cu;
var of = Eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sf = j,
  Ce = of;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var _u = new Set(),
  Hn = {};
function Ut(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) _u.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ro = Object.prototype.hasOwnProperty,
  uf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qi = {},
  bi = {};
function af(e) {
  return ro.call(bi, e)
    ? !0
    : ro.call(qi, e)
      ? !1
      : uf.test(e)
        ? (bi[e] = !0)
        : ((qi[e] = !0), !1);
}
function cf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ff(e, t, n, r) {
  if (t === null || typeof t > "u" || cf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ni = /[\-:]([a-z])/g;
function ri(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ni, ri);
    se[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ni, ri);
    se[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ni, ri);
  se[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function li(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ff(t, n, l, r) && (n = null),
    r || l === null
      ? af(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for("react.element"),
  Bt = Symbol.for("react.portal"),
  Ht = Symbol.for("react.fragment"),
  oi = Symbol.for("react.strict_mode"),
  lo = Symbol.for("react.profiler"),
  Pu = Symbol.for("react.provider"),
  Nu = Symbol.for("react.context"),
  ii = Symbol.for("react.forward_ref"),
  oo = Symbol.for("react.suspense"),
  io = Symbol.for("react.suspense_list"),
  si = Symbol.for("react.memo"),
  st = Symbol.for("react.lazy"),
  zu = Symbol.for("react.offscreen"),
  es = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (es && e[es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Ll;
function Tn(e) {
  if (Ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ll = (t && t[1]) || "";
    }
  return (
    `
` +
    Ll +
    e
  );
}
var Rl = !1;
function Ml(e, t) {
  if (!e || Rl) return "";
  Rl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Rl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Tn(e) : "";
}
function df(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn("Lazy");
    case 13:
      return Tn("Suspense");
    case 19:
      return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ml(e.type, !1)), e;
    case 11:
      return (e = Ml(e.type.render, !1)), e;
    case 1:
      return (e = Ml(e.type, !0)), e;
    default:
      return "";
  }
}
function so(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ht:
      return "Fragment";
    case Bt:
      return "Portal";
    case lo:
      return "Profiler";
    case oi:
      return "StrictMode";
    case oo:
      return "Suspense";
    case io:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nu:
        return (e.displayName || "Context") + ".Consumer";
      case Pu:
        return (e._context.displayName || "Context") + ".Provider";
      case ii:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case si:
        return (
          (t = e.displayName || null), t !== null ? t : so(e.type) || "Memo"
        );
      case st:
        (t = e._payload), (e = e._init);
        try {
          return so(e(t));
        } catch {}
    }
  return null;
}
function pf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return so(t);
    case 8:
      return t === oi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Tu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function mf(e) {
  var t = Tu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = mf(e));
}
function Lu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Tu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Br(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uo(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ts(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ru(e, t) {
  (t = t.checked), t != null && li(e, "checked", t, !1);
}
function ao(e, t) {
  Ru(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? co(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && co(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ns(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function co(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function fo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function rs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Mu(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ls(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ou(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function po(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ou(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var vr,
  ju = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vr = vr || document.createElement("div"),
          vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var On = {
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
  gf = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function (e) {
  gf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (On[t] = On[e]);
  });
});
function Iu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (On.hasOwnProperty(e) && On[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Iu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var hf = X(
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
function mo(e, t) {
  if (t) {
    if (hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function go(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var ho = null;
function ui(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vo = null,
  nn = null,
  rn = null;
function os(e) {
  if ((e = cr(e))) {
    if (typeof vo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = yl(t)), vo(e.stateNode, e.type, t));
  }
}
function Du(e) {
  nn ? (rn ? rn.push(e) : (rn = [e])) : (nn = e);
}
function $u() {
  if (nn) {
    var e = nn,
      t = rn;
    if (((rn = nn = null), os(e), t)) for (e = 0; e < t.length; e++) os(t[e]);
  }
}
function Uu(e, t) {
  return e(t);
}
function Vu() {}
var Ol = !1;
function Wu(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return Uu(e, t, n);
  } finally {
    (Ol = !1), (nn !== null || rn !== null) && (Vu(), $u());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var yo = !1;
if (be)
  try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function () {
        yo = !0;
      },
    }),
      window.addEventListener("test", kn, kn),
      window.removeEventListener("test", kn, kn);
  } catch {
    yo = !1;
  }
function vf(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var jn = !1,
  Hr = null,
  Qr = !1,
  wo = null,
  yf = {
    onError: function (e) {
      (jn = !0), (Hr = e);
    },
  };
function wf(e, t, n, r, l, o, i, s, u) {
  (jn = !1), (Hr = null), vf.apply(yf, arguments);
}
function xf(e, t, n, r, l, o, i, s, u) {
  if ((wf.apply(this, arguments), jn)) {
    if (jn) {
      var c = Hr;
      (jn = !1), (Hr = null);
    } else throw Error(S(198));
    Qr || ((Qr = !0), (wo = c));
  }
}
function Vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Bu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function is(e) {
  if (Vt(e) !== e) throw Error(S(188));
}
function kf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return is(l), e;
        if (o === r) return is(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Hu(e) {
  return (e = kf(e)), e !== null ? Qu(e) : null;
}
function Qu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gu = Ce.unstable_scheduleCallback,
  ss = Ce.unstable_cancelCallback,
  Sf = Ce.unstable_shouldYield,
  Af = Ce.unstable_requestPaint,
  J = Ce.unstable_now,
  Ef = Ce.unstable_getCurrentPriorityLevel,
  ai = Ce.unstable_ImmediatePriority,
  Ku = Ce.unstable_UserBlockingPriority,
  Gr = Ce.unstable_NormalPriority,
  Cf = Ce.unstable_LowPriority,
  Yu = Ce.unstable_IdlePriority,
  ml = null,
  Qe = null;
function _f(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : zf,
  Pf = Math.log,
  Nf = Math.LN2;
function zf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Pf(e) / Nf) | 0)) | 0;
}
var yr = 64,
  wr = 4194304;
function Rn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Rn(s)) : ((o &= i), o !== 0 && (r = Rn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Rn(i)) : o !== 0 && (r = Rn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $e(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Tf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Lf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - $e(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = Tf(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function xo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xu() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ur(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n);
}
function Rf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - $e(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ci(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function Zu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ju,
  fi,
  qu,
  bu,
  ea,
  ko = !1,
  xr = [],
  pt = null,
  mt = null,
  gt = null,
  Kn = new Map(),
  Yn = new Map(),
  at = [],
  Mf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function us(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && fi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Of(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pt = Sn(pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (mt = Sn(mt, e, t, n, r, l)), !0;
    case "mouseover":
      return (gt = Sn(gt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kn.set(o, Sn(Kn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Yn.set(o, Sn(Yn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ta(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Bu(n)), t !== null)) {
          (e.blockedOn = t),
            ea(e.priority, function () {
              qu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = So(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ho = r), n.target.dispatchEvent(r), (ho = null);
    } else return (t = cr(n)), t !== null && fi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function as(e, t, n) {
  Mr(e) && n.delete(t);
}
function jf() {
  (ko = !1),
    pt !== null && Mr(pt) && (pt = null),
    mt !== null && Mr(mt) && (mt = null),
    gt !== null && Mr(gt) && (gt = null),
    Kn.forEach(as),
    Yn.forEach(as);
}
function An(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ko ||
      ((ko = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, jf)));
}
function Xn(e) {
  function t(l) {
    return An(l, e);
  }
  if (0 < xr.length) {
    An(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && An(pt, e),
      mt !== null && An(mt, e),
      gt !== null && An(gt, e),
      Kn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    ta(n), n.blockedOn === null && at.shift();
}
var ln = rt.ReactCurrentBatchConfig,
  Yr = !0;
function If(e, t, n, r) {
  var l = U,
    o = ln.transition;
  ln.transition = null;
  try {
    (U = 1), di(e, t, n, r);
  } finally {
    (U = l), (ln.transition = o);
  }
}
function Ff(e, t, n, r) {
  var l = U,
    o = ln.transition;
  ln.transition = null;
  try {
    (U = 4), di(e, t, n, r);
  } finally {
    (U = l), (ln.transition = o);
  }
}
function di(e, t, n, r) {
  if (Yr) {
    var l = So(e, t, n, r);
    if (l === null) Ql(e, t, r, Xr, n), us(e, r);
    else if (Of(l, e, t, n, r)) r.stopPropagation();
    else if ((us(e, r), t & 4 && -1 < Mf.indexOf(e))) {
      for (; l !== null; ) {
        var o = cr(l);
        if (
          (o !== null && Ju(o),
          (o = So(e, t, n, r)),
          o === null && Ql(e, t, r, Xr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var Xr = null;
function So(e, t, n, r) {
  if (((Xr = null), (e = ui(r)), (e = Tt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Bu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function na(e) {
  switch (e) {
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
      switch (Ef()) {
        case ai:
          return 1;
        case Ku:
          return 4;
        case Gr:
        case Cf:
          return 16;
        case Yu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ft = null,
  pi = null,
  Or = null;
function ra() {
  if (Or) return Or;
  var e,
    t = pi,
    n = t.length,
    r,
    l = "value" in ft ? ft.value : ft.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
}
function jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function cs() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : cs),
      (this.isPropagationStopped = cs),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mi = Pe(vn),
  ar = X({}, vn, { view: 0, detail: 0 }),
  Df = Pe(ar),
  Il,
  Fl,
  En,
  gl = X({}, ar, {
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
    getModifierState: gi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== En &&
            (En && e.type === "mousemove"
              ? ((Il = e.screenX - En.screenX), (Fl = e.screenY - En.screenY))
              : (Fl = Il = 0),
            (En = e)),
          Il);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fl;
    },
  }),
  fs = Pe(gl),
  $f = X({}, gl, { dataTransfer: 0 }),
  Uf = Pe($f),
  Vf = X({}, ar, { relatedTarget: 0 }),
  Dl = Pe(Vf),
  Wf = X({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bf = Pe(Wf),
  Hf = X({}, vn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qf = Pe(Hf),
  Gf = X({}, vn, { data: 0 }),
  ds = Pe(Gf),
  Kf = {
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
  Yf = {
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
  Xf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xf[e]) ? !!t[e] : !1;
}
function gi() {
  return Zf;
}
var Jf = X({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = Kf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Yf[e.keyCode] || "Unidentified"
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
    getModifierState: gi,
    charCode: function (e) {
      return e.type === "keypress" ? jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  qf = Pe(Jf),
  bf = X({}, gl, {
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
  ps = Pe(bf),
  ed = X({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gi,
  }),
  td = Pe(ed),
  nd = X({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rd = Pe(nd),
  ld = X({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  od = Pe(ld),
  id = [9, 13, 27, 32],
  hi = be && "CompositionEvent" in window,
  In = null;
be && "documentMode" in document && (In = document.documentMode);
var sd = be && "TextEvent" in window && !In,
  la = be && (!hi || (In && 8 < In && 11 >= In)),
  ms = " ",
  gs = !1;
function oa(e, t) {
  switch (e) {
    case "keyup":
      return id.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ia(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function ud(e, t) {
  switch (e) {
    case "compositionend":
      return ia(t);
    case "keypress":
      return t.which !== 32 ? null : ((gs = !0), ms);
    case "textInput":
      return (e = t.data), e === ms && gs ? null : e;
    default:
      return null;
  }
}
function ad(e, t) {
  if (Qt)
    return e === "compositionend" || (!hi && oa(e, t))
      ? ((e = ra()), (Or = pi = ft = null), (Qt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return la && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cd = {
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
function hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cd[e.type] : t === "textarea";
}
function sa(e, t, n, r) {
  Du(r),
    (t = Zr(t, "onChange")),
    0 < t.length &&
      ((n = new mi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fn = null,
  Zn = null;
function fd(e) {
  ya(e, 0);
}
function hl(e) {
  var t = Yt(e);
  if (Lu(t)) return e;
}
function dd(e, t) {
  if (e === "change") return t;
}
var ua = !1;
if (be) {
  var $l;
  if (be) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var vs = document.createElement("div");
      vs.setAttribute("oninput", "return;"),
        (Ul = typeof vs.oninput == "function");
    }
    $l = Ul;
  } else $l = !1;
  ua = $l && (!document.documentMode || 9 < document.documentMode);
}
function ys() {
  Fn && (Fn.detachEvent("onpropertychange", aa), (Zn = Fn = null));
}
function aa(e) {
  if (e.propertyName === "value" && hl(Zn)) {
    var t = [];
    sa(t, Zn, e, ui(e)), Wu(fd, t);
  }
}
function pd(e, t, n) {
  e === "focusin"
    ? (ys(), (Fn = t), (Zn = n), Fn.attachEvent("onpropertychange", aa))
    : e === "focusout" && ys();
}
function md(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hl(Zn);
}
function gd(e, t) {
  if (e === "click") return hl(t);
}
function hd(e, t) {
  if (e === "input" || e === "change") return hl(t);
}
function vd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ve = typeof Object.is == "function" ? Object.is : vd;
function Jn(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ro.call(t, l) || !Ve(e[l], t[l])) return !1;
  }
  return !0;
}
function ws(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xs(e, t) {
  var n = ws(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = ws(n);
  }
}
function ca(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ca(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function fa() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function vi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function yd(e) {
  var t = fa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ca(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = xs(n, o));
        var i = xs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var wd = be && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  Ao = null,
  Dn = null,
  Eo = !1;
function ks(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eo ||
    Gt == null ||
    Gt !== Br(r) ||
    ((r = Gt),
    "selectionStart" in r && vi(r)
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
    (Dn && Jn(Dn, r)) ||
      ((Dn = r),
      (r = Zr(Ao, "onSelect")),
      0 < r.length &&
        ((t = new mi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gt))));
}
function Sr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kt = {
    animationend: Sr("Animation", "AnimationEnd"),
    animationiteration: Sr("Animation", "AnimationIteration"),
    animationstart: Sr("Animation", "AnimationStart"),
    transitionend: Sr("Transition", "TransitionEnd"),
  },
  Vl = {},
  da = {};
be &&
  ((da = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kt.animationend.animation,
    delete Kt.animationiteration.animation,
    delete Kt.animationstart.animation),
  "TransitionEvent" in window || delete Kt.transitionend.transition);
function vl(e) {
  if (Vl[e]) return Vl[e];
  if (!Kt[e]) return e;
  var t = Kt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in da) return (Vl[e] = t[n]);
  return e;
}
var pa = vl("animationend"),
  ma = vl("animationiteration"),
  ga = vl("animationstart"),
  ha = vl("transitionend"),
  va = new Map(),
  Ss =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function At(e, t) {
  va.set(e, t), Ut(t, [e]);
}
for (var Wl = 0; Wl < Ss.length; Wl++) {
  var Bl = Ss[Wl],
    xd = Bl.toLowerCase(),
    kd = Bl[0].toUpperCase() + Bl.slice(1);
  At(xd, "on" + kd);
}
At(pa, "onAnimationEnd");
At(ma, "onAnimationIteration");
At(ga, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(ha, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Sd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function As(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), xf(r, t, void 0, e), (e.currentTarget = null);
}
function ya(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          As(l, s, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          As(l, s, c), (o = u);
        }
    }
  }
  if (Qr) throw ((e = wo), (Qr = !1), (wo = null), e);
}
function B(e, t) {
  var n = t[zo];
  n === void 0 && (n = t[zo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wa(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), wa(n, e, r, t);
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[Ar]) {
    (e[Ar] = !0),
      _u.forEach(function (n) {
        n !== "selectionchange" && (Sd.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ar] || ((t[Ar] = !0), Hl("selectionchange", !1, t));
  }
}
function wa(e, t, n, r) {
  switch (na(t)) {
    case 1:
      var l = If;
      break;
    case 4:
      l = Ff;
      break;
    default:
      l = di;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !yo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Tt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Wu(function () {
    var c = o,
      m = ui(n),
      g = [];
    e: {
      var p = va.get(e);
      if (p !== void 0) {
        var y = mi,
          x = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = qf;
            break;
          case "focusin":
            (x = "focus"), (y = Dl);
            break;
          case "focusout":
            (x = "blur"), (y = Dl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Dl;
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
            y = fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Uf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = td;
            break;
          case pa:
          case ma:
          case ga:
            y = Bf;
            break;
          case ha:
            y = rd;
            break;
          case "scroll":
            y = Df;
            break;
          case "wheel":
            y = od;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Qf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ps;
        }
        var k = (t & 4) !== 0,
          z = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var w = d.stateNode;
          if (
            (d.tag === 5 &&
              w !== null &&
              ((d = w),
              f !== null && ((w = Gn(a, f)), w != null && k.push(bn(a, w, d)))),
            z)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new y(p, x, null, n, m)), g.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ho &&
            (x = n.relatedTarget || n.fromElement) &&
            (Tt(x) || x[et]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((x = n.relatedTarget || n.toElement),
              (y = c),
              (x = x ? Tt(x) : null),
              x !== null &&
                ((z = Vt(x)), x !== z || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((y = null), (x = c)),
          y !== x)
        ) {
          if (
            ((k = fs),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ps),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (z = y == null ? p : Yt(y)),
            (d = x == null ? p : Yt(x)),
            (p = new k(w, a + "leave", y, n, m)),
            (p.target = z),
            (p.relatedTarget = d),
            (w = null),
            Tt(m) === c &&
              ((k = new k(f, a + "enter", x, n, m)),
              (k.target = d),
              (k.relatedTarget = z),
              (w = k)),
            (z = w),
            y && x)
          )
            t: {
              for (k = y, f = x, a = 0, d = k; d; d = Wt(d)) a++;
              for (d = 0, w = f; w; w = Wt(w)) d++;
              for (; 0 < a - d; ) (k = Wt(k)), a--;
              for (; 0 < d - a; ) (f = Wt(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Wt(k)), (f = Wt(f));
              }
              k = null;
            }
          else k = null;
          y !== null && Es(g, p, y, k, !1),
            x !== null && z !== null && Es(g, z, x, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Yt(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var E = dd;
        else if (hs(p))
          if (ua) E = hd;
          else {
            E = md;
            var h = pd;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = gd);
        if (E && (E = E(e, c))) {
          sa(g, E, n, m);
          break e;
        }
        h && h(e, p, c),
          e === "focusout" &&
            (h = p._wrapperState) &&
            h.controlled &&
            p.type === "number" &&
            co(p, "number", p.value);
      }
      switch (((h = c ? Yt(c) : window), e)) {
        case "focusin":
          (hs(h) || h.contentEditable === "true") &&
            ((Gt = h), (Ao = c), (Dn = null));
          break;
        case "focusout":
          Dn = Ao = Gt = null;
          break;
        case "mousedown":
          Eo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Eo = !1), ks(g, n, m);
          break;
        case "selectionchange":
          if (wd) break;
        case "keydown":
        case "keyup":
          ks(g, n, m);
      }
      var v;
      if (hi)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Qt
          ? oa(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (la &&
          n.locale !== "ko" &&
          (Qt || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Qt && (v = ra())
            : ((ft = m),
              (pi = "value" in ft ? ft.value : ft.textContent),
              (Qt = !0))),
        (h = Zr(c, A)),
        0 < h.length &&
          ((A = new ds(A, e, null, n, m)),
          g.push({ event: A, listeners: h }),
          v ? (A.data = v) : ((v = ia(n)), v !== null && (A.data = v)))),
        (v = sd ? ud(e, n) : ad(e, n)) &&
          ((c = Zr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new ds("onBeforeInput", "beforeinput", null, n, m)),
            g.push({ event: m, listeners: c }),
            (m.data = v)));
    }
    ya(g, t);
  });
}
function bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Gn(e, n)),
      o != null && r.unshift(bn(e, o, l)),
      (o = Gn(e, t)),
      o != null && r.push(bn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Es(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Gn(n, o)), u != null && i.unshift(bn(n, u, s)))
        : l || ((u = Gn(n, o)), u != null && i.push(bn(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ad = /\r\n?/g,
  Ed = /\u0000|\uFFFD/g;
function Cs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ad,
      `
`,
    )
    .replace(Ed, "");
}
function Er(e, t, n) {
  if (((t = Cs(t)), Cs(e) !== t && n)) throw Error(S(425));
}
function Jr() {}
var Co = null,
  _o = null;
function Po(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var No = typeof setTimeout == "function" ? setTimeout : void 0,
  Cd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _s = typeof Promise == "function" ? Promise : void 0,
  _d =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _s < "u"
        ? function (e) {
            return _s.resolve(null).then(e).catch(Pd);
          }
        : No;
function Pd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xn(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ps(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + yn,
  er = "__reactProps$" + yn,
  et = "__reactContainer$" + yn,
  zo = "__reactEvents$" + yn,
  Nd = "__reactListeners$" + yn,
  zd = "__reactHandles$" + yn;
function Tt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ps(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Ps(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[He] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function yl(e) {
  return e[er] || null;
}
var To = [],
  Xt = -1;
function Et(e) {
  return { current: e };
}
function H(e) {
  0 > Xt || ((e.current = To[Xt]), (To[Xt] = null), Xt--);
}
function V(e, t) {
  Xt++, (To[Xt] = e.current), (e.current = t);
}
var St = {},
  fe = Et(St),
  we = Et(!1),
  jt = St;
function cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  H(we), H(fe);
}
function Ns(e, t, n) {
  if (fe.current !== St) throw Error(S(168));
  V(fe, t), V(we, n);
}
function xa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, pf(e) || "Unknown", l));
  return X({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || St),
    (jt = fe.current),
    V(fe, e),
    V(we, we.current),
    !0
  );
}
function zs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = xa(e, t, jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(we),
      H(fe),
      V(fe, e))
    : H(we),
    V(we, n);
}
var Xe = null,
  wl = !1,
  Kl = !1;
function ka(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Td(e) {
  (wl = !0), ka(e);
}
function Ct() {
  if (!Kl && Xe !== null) {
    Kl = !0;
    var e = 0,
      t = U;
    try {
      var n = Xe;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (wl = !1);
    } catch (l) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), Gu(ai, Ct), l);
    } finally {
      (U = t), (Kl = !1);
    }
  }
  return null;
}
var Zt = [],
  Jt = 0,
  el = null,
  tl = 0,
  ze = [],
  Te = 0,
  It = null,
  Ze = 1,
  Je = "";
function Nt(e, t) {
  (Zt[Jt++] = tl), (Zt[Jt++] = el), (el = e), (tl = t);
}
function Sa(e, t, n) {
  (ze[Te++] = Ze), (ze[Te++] = Je), (ze[Te++] = It), (It = e);
  var r = Ze;
  e = Je;
  var l = 32 - $e(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - $e(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ze = (1 << (32 - $e(t) + l)) | (n << l) | r),
      (Je = o + e);
  } else (Ze = (1 << o) | (n << l) | r), (Je = e);
}
function yi(e) {
  e.return !== null && (Nt(e, 1), Sa(e, 1, 0));
}
function wi(e) {
  for (; e === el; )
    (el = Zt[--Jt]), (Zt[Jt] = null), (tl = Zt[--Jt]), (Zt[Jt] = null);
  for (; e === It; )
    (It = ze[--Te]),
      (ze[Te] = null),
      (Je = ze[--Te]),
      (ze[Te] = null),
      (Ze = ze[--Te]),
      (ze[Te] = null);
}
var Ee = null,
  Ae = null,
  Q = !1,
  De = null;
function Aa(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (Ae = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (Q) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Ts(e, t)) {
        if (Lo(e)) throw Error(S(418));
        t = ht(n.nextSibling);
        var r = Ee;
        t && Ts(e, t)
          ? Aa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ee = e));
      }
    } else {
      if (Lo(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Ee = e);
    }
  }
}
function Ls(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function Cr(e) {
  if (e !== Ee) return !1;
  if (!Q) return Ls(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Lo(e)) throw (Ea(), Error(S(418)));
    for (; t; ) Aa(e, t), (t = ht(t.nextSibling));
  }
  if ((Ls(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Ee ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Ea() {
  for (var e = Ae; e; ) e = ht(e.nextSibling);
}
function fn() {
  (Ae = Ee = null), (Q = !1);
}
function xi(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Ld = rt.ReactCurrentBatchConfig;
function Cn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Rs(e) {
  var t = e._init;
  return t(e._payload);
}
function Ca(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = xt(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, a, d, w) {
    return a === null || a.tag !== 6
      ? ((a = eo(d, f.mode, w)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function u(f, a, d, w) {
    var E = d.type;
    return E === Ht
      ? m(f, a, d.props.children, w, d.key)
      : a !== null &&
          (a.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === st &&
              Rs(E) === a.type))
        ? ((w = l(a, d.props)), (w.ref = Cn(f, a, d)), (w.return = f), w)
        : ((w = Wr(d.type, d.key, d.props, null, f.mode, w)),
          (w.ref = Cn(f, a, d)),
          (w.return = f),
          w);
  }
  function c(f, a, d, w) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = to(d, f.mode, w)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function m(f, a, d, w, E) {
    return a === null || a.tag !== 7
      ? ((a = Ot(d, f.mode, w, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function g(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = eo("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case gr:
          return (
            (d = Wr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = Cn(f, null, a)),
            (d.return = f),
            d
          );
        case Bt:
          return (a = to(a, f.mode, d)), (a.return = f), a;
        case st:
          var w = a._init;
          return g(f, w(a._payload), d);
      }
      if (Ln(a) || xn(a))
        return (a = Ot(a, f.mode, d, null)), (a.return = f), a;
      _r(f, a);
    }
    return null;
  }
  function p(f, a, d, w) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : s(f, a, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gr:
          return d.key === E ? u(f, a, d, w) : null;
        case Bt:
          return d.key === E ? c(f, a, d, w) : null;
        case st:
          return (E = d._init), p(f, a, E(d._payload), w);
      }
      if (Ln(d) || xn(d)) return E !== null ? null : m(f, a, d, w, null);
      _r(f, d);
    }
    return null;
  }
  function y(f, a, d, w, E) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(d) || null), s(a, f, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case gr:
          return (f = f.get(w.key === null ? d : w.key) || null), u(a, f, w, E);
        case Bt:
          return (f = f.get(w.key === null ? d : w.key) || null), c(a, f, w, E);
        case st:
          var h = w._init;
          return y(f, a, d, h(w._payload), E);
      }
      if (Ln(w) || xn(w)) return (f = f.get(d) || null), m(a, f, w, E, null);
      _r(a, w);
    }
    return null;
  }
  function x(f, a, d, w) {
    for (
      var E = null, h = null, v = a, A = (a = 0), P = null;
      v !== null && A < d.length;
      A++
    ) {
      v.index > A ? ((P = v), (v = null)) : (P = v.sibling);
      var N = p(f, v, d[A], w);
      if (N === null) {
        v === null && (v = P);
        break;
      }
      e && v && N.alternate === null && t(f, v),
        (a = o(N, a, A)),
        h === null ? (E = N) : (h.sibling = N),
        (h = N),
        (v = P);
    }
    if (A === d.length) return n(f, v), Q && Nt(f, A), E;
    if (v === null) {
      for (; A < d.length; A++)
        (v = g(f, d[A], w)),
          v !== null &&
            ((a = o(v, a, A)), h === null ? (E = v) : (h.sibling = v), (h = v));
      return Q && Nt(f, A), E;
    }
    for (v = r(f, v); A < d.length; A++)
      (P = y(v, f, A, d[A], w)),
        P !== null &&
          (e && P.alternate !== null && v.delete(P.key === null ? A : P.key),
          (a = o(P, a, A)),
          h === null ? (E = P) : (h.sibling = P),
          (h = P));
    return (
      e &&
        v.forEach(function (F) {
          return t(f, F);
        }),
      Q && Nt(f, A),
      E
    );
  }
  function k(f, a, d, w) {
    var E = xn(d);
    if (typeof E != "function") throw Error(S(150));
    if (((d = E.call(d)), d == null)) throw Error(S(151));
    for (
      var h = (E = null), v = a, A = (a = 0), P = null, N = d.next();
      v !== null && !N.done;
      A++, N = d.next()
    ) {
      v.index > A ? ((P = v), (v = null)) : (P = v.sibling);
      var F = p(f, v, N.value, w);
      if (F === null) {
        v === null && (v = P);
        break;
      }
      e && v && F.alternate === null && t(f, v),
        (a = o(F, a, A)),
        h === null ? (E = F) : (h.sibling = F),
        (h = F),
        (v = P);
    }
    if (N.done) return n(f, v), Q && Nt(f, A), E;
    if (v === null) {
      for (; !N.done; A++, N = d.next())
        (N = g(f, N.value, w)),
          N !== null &&
            ((a = o(N, a, A)), h === null ? (E = N) : (h.sibling = N), (h = N));
      return Q && Nt(f, A), E;
    }
    for (v = r(f, v); !N.done; A++, N = d.next())
      (N = y(v, f, A, N.value, w)),
        N !== null &&
          (e && N.alternate !== null && v.delete(N.key === null ? A : N.key),
          (a = o(N, a, A)),
          h === null ? (E = N) : (h.sibling = N),
          (h = N));
    return (
      e &&
        v.forEach(function (L) {
          return t(f, L);
        }),
      Q && Nt(f, A),
      E
    );
  }
  function z(f, a, d, w) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ht &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case gr:
          e: {
            for (var E = d.key, h = a; h !== null; ) {
              if (h.key === E) {
                if (((E = d.type), E === Ht)) {
                  if (h.tag === 7) {
                    n(f, h.sibling),
                      (a = l(h, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  h.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === st &&
                    Rs(E) === h.type)
                ) {
                  n(f, h.sibling),
                    (a = l(h, d.props)),
                    (a.ref = Cn(f, h, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, h);
                break;
              } else t(f, h);
              h = h.sibling;
            }
            d.type === Ht
              ? ((a = Ot(d.props.children, f.mode, w, d.key)),
                (a.return = f),
                (f = a))
              : ((w = Wr(d.type, d.key, d.props, null, f.mode, w)),
                (w.ref = Cn(f, a, d)),
                (w.return = f),
                (f = w));
          }
          return i(f);
        case Bt:
          e: {
            for (h = d.key; a !== null; ) {
              if (a.key === h)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = to(d, f.mode, w)), (a.return = f), (f = a);
          }
          return i(f);
        case st:
          return (h = d._init), z(f, a, h(d._payload), w);
      }
      if (Ln(d)) return x(f, a, d, w);
      if (xn(d)) return k(f, a, d, w);
      _r(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = eo(d, f.mode, w)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return z;
}
var dn = Ca(!0),
  _a = Ca(!1),
  nl = Et(null),
  rl = null,
  qt = null,
  ki = null;
function Si() {
  ki = qt = rl = null;
}
function Ai(e) {
  var t = nl.current;
  H(nl), (e._currentValue = t);
}
function Mo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function on(e, t) {
  (rl = e),
    (ki = qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (ki !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qt === null)) {
      if (rl === null) throw Error(S(308));
      (qt = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else qt = qt.next = e;
  return t;
}
var Lt = null;
function Ei(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function Pa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ei(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Ci(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Na(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ei(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Ir(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ci(e, n);
  }
}
function Ms(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== i &&
        (s === null ? (m.firstBaseUpdate = c) : (s.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = l.baseState;
    (i = 0), (m = c = u = null), (s = o);
    do {
      var p = s.lane,
        y = s.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            k = s;
          switch (((p = t), (y = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                g = x.call(y, g, p);
                break e;
              }
              g = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (p = typeof x == "function" ? x.call(y, g, p) : x),
                p == null)
              )
                break e;
              g = X({}, g, p);
              break e;
            case 2:
              ut = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [s]) : p.push(s));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((c = m = y), (u = g)) : (m = m.next = y),
          (i |= p);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Dt |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Os(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var fr = {},
  Ge = Et(fr),
  tr = Et(fr),
  nr = Et(fr);
function Rt(e) {
  if (e === fr) throw Error(S(174));
  return e;
}
function _i(e, t) {
  switch ((V(nr, t), V(tr, e), V(Ge, fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : po(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = po(t, e));
  }
  H(Ge), V(Ge, t);
}
function pn() {
  H(Ge), H(tr), H(nr);
}
function za(e) {
  Rt(nr.current);
  var t = Rt(Ge.current),
    n = po(t, e.type);
  t !== n && (V(tr, e), V(Ge, n));
}
function Pi(e) {
  tr.current === e && (H(Ge), H(tr));
}
var K = Et(0);
function ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Yl = [];
function Ni() {
  for (var e = 0; e < Yl.length; e++)
    Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var Fr = rt.ReactCurrentDispatcher,
  Xl = rt.ReactCurrentBatchConfig,
  Ft = 0,
  Y = null,
  ee = null,
  re = null,
  il = !1,
  $n = !1,
  rr = 0,
  Rd = 0;
function ue() {
  throw Error(S(321));
}
function zi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function Ti(e, t, n, r, l, o) {
  if (
    ((Ft = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fr.current = e === null || e.memoizedState === null ? Id : Fd),
    (e = n(r, l)),
    $n)
  ) {
    o = 0;
    do {
      if ((($n = !1), (rr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (re = ee = null),
        (t.updateQueue = null),
        (Fr.current = Dd),
        (e = n(r, l));
    } while ($n);
  }
  if (
    ((Fr.current = sl),
    (t = ee !== null && ee.next !== null),
    (Ft = 0),
    (re = ee = Y = null),
    (il = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Li() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Y.memoizedState = re = e) : (re = re.next = e), re;
}
function Oe() {
  if (ee === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = re === null ? Y.memoizedState : re.next;
  if (t !== null) (re = t), (ee = e);
  else {
    if (e === null) throw Error(S(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      re === null ? (Y.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ee,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      c = o;
    do {
      var m = c.lane;
      if ((Ft & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var g = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = g), (i = r)) : (u = u.next = g),
          (Y.lanes |= m),
          (Dt |= m);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = s),
      Ve(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Y.lanes |= o), (Dt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ve(o, t.memoizedState) || (ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ta() {}
function La(e, t) {
  var n = Y,
    r = Oe(),
    l = t(),
    o = !Ve(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    Ri(Oa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      or(9, Ma.bind(null, n, r, l, t), void 0, null),
      le === null)
    )
      throw Error(S(349));
    Ft & 30 || Ra(n, t, l);
  }
  return l;
}
function Ra(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ma(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ja(t) && Ia(e);
}
function Oa(e, t, n) {
  return n(function () {
    ja(t) && Ia(e);
  });
}
function ja(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function Ia(e) {
  var t = tt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function js(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jd.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function or(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fa() {
  return Oe().memoizedState;
}
function Dr(e, t, n, r) {
  var l = Be();
  (Y.flags |= e),
    (l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (((o = i.destroy), r !== null && zi(r, i.deps))) {
      l.memoizedState = or(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = or(1 | t, n, o, r));
}
function Is(e, t) {
  return Dr(8390656, 8, e, t);
}
function Ri(e, t) {
  return xl(2048, 8, e, t);
}
function Da(e, t) {
  return xl(4, 2, e, t);
}
function $a(e, t) {
  return xl(4, 4, e, t);
}
function Ua(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Va(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xl(4, 4, Ua.bind(null, t, e), n)
  );
}
function Mi() {}
function Wa(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ba(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ha(e, t, n) {
  return Ft & 21
    ? (Ve(n, t) || ((n = Xu()), (Y.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function Md(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Xl.transition = r);
  }
}
function Qa() {
  return Oe().memoizedState;
}
function Od(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ga(e))
  )
    Ka(t, n);
  else if (((n = Pa(e, t, n, r)), n !== null)) {
    var l = me();
    Ue(n, e, r, l), Ya(n, t, r);
  }
}
function jd(e, t, n) {
  var r = wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ga(e)) Ka(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ve(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ei(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pa(e, t, l, r)),
      n !== null && ((l = me()), Ue(n, e, r, l), Ya(n, t, r));
  }
}
function Ga(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Ka(e, t) {
  $n = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ya(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ci(e, n);
  }
}
var sl = {
    readContext: Me,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  Id = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: Is,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Dr(4194308, 4, Ua.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Dr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Dr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Od.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: js,
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = js(!1),
        t = e[0];
      return (e = Md.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = Be();
      if (Q) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(S(349));
        Ft & 30 || Ra(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Is(Oa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        or(9, Ma.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = le.identifierPrefix;
      if (Q) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Rd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Fd = {
    readContext: Me,
    useCallback: Wa,
    useContext: Me,
    useEffect: Ri,
    useImperativeHandle: Va,
    useInsertionEffect: Da,
    useLayoutEffect: $a,
    useMemo: Ba,
    useReducer: Zl,
    useRef: Fa,
    useState: function () {
      return Zl(lr);
    },
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      var t = Oe();
      return Ha(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(lr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ta,
    useSyncExternalStore: La,
    useId: Qa,
    unstable_isNewReconciler: !1,
  },
  Dd = {
    readContext: Me,
    useCallback: Wa,
    useContext: Me,
    useEffect: Ri,
    useImperativeHandle: Va,
    useInsertionEffect: Da,
    useLayoutEffect: $a,
    useMemo: Ba,
    useReducer: Jl,
    useRef: Fa,
    useState: function () {
      return Jl(lr);
    },
    useDebugValue: Mi,
    useDeferredValue: function (e) {
      var t = Oe();
      return ee === null ? (t.memoizedState = e) : Ha(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(lr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ta,
    useSyncExternalStore: La,
    useId: Qa,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Oo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var kl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = wt(e),
      o = qe(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (Ue(t, e, l, r), Ir(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = wt(e),
      o = qe(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (Ue(t, e, l, r), Ir(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = wt(e),
      l = qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && (Ue(t, e, r, n), Ir(t, e, r));
  },
};
function Fs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jn(n, r) || !Jn(l, o)
        : !0
  );
}
function Xa(e, t, n) {
  var r = !1,
    l = St,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Me(o))
      : ((l = xe(t) ? jt : fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? cn(e, l) : St)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = kl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ds(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && kl.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ci(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Me(o))
    : ((o = xe(t) ? jt : fe.current), (l.context = cn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Oo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && kl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += df(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Io(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $d = typeof WeakMap == "function" ? WeakMap : Map;
function Za(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (Go = r)), Io(e, t);
    }),
    n
  );
}
function Ja(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Io(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Io(e, t),
          typeof r != "function" &&
            (yt === null ? (yt = new Set([this])) : yt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function $s(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $d();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = bd.bind(null, e, t, n)), t.then(e, e));
}
function Us(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ud = rt.ReactCurrentOwner,
  ye = !1;
function pe(e, t, n, r) {
  t.child = e === null ? _a(t, null, n, r) : dn(t, e.child, n, r);
}
function Ws(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    on(t, l),
    (r = Ti(e, t, n, r, o, l)),
    (n = Li()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (Q && n && yi(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function Bs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Vi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qa(e, t, o, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jn(o, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return Fo(e, t, n, r, l);
}
function ba(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(en, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(en, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        V(en, Se),
        (Se |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(en, Se),
      (Se |= r);
  return pe(e, t, l, n), t.child;
}
function ec(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fo(e, t, n, r, l) {
  var o = xe(n) ? jt : fe.current;
  return (
    (o = cn(t, o)),
    on(t, l),
    (n = Ti(e, t, n, r, o, l)),
    (r = Li()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : (Q && r && yi(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function Hs(e, t, n, r, l) {
  if (xe(n)) {
    var o = !0;
    br(t);
  } else o = !1;
  if ((on(t, l), t.stateNode === null))
    $r(e, t), Xa(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Me(c))
      : ((c = xe(n) ? jt : fe.current), (c = cn(t, c)));
    var m = n.getDerivedStateFromProps,
      g =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && Ds(t, i, r, c)),
      (ut = !1);
    var p = t.memoizedState;
    (i.state = p),
      ll(t, r, i, l),
      (u = t.memoizedState),
      s !== r || p !== u || we.current || ut
        ? (typeof m == "function" && (Oo(t, n, m, r), (u = t.memoizedState)),
          (s = ut || Fs(t, n, s, r, p, u, c))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Na(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ie(t.type, s)),
      (i.props = c),
      (g = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Me(u))
        : ((u = xe(n) ? jt : fe.current), (u = cn(t, u)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== g || p !== u) && Ds(t, i, r, u)),
      (ut = !1),
      (p = t.memoizedState),
      (i.state = p),
      ll(t, r, i, l);
    var x = t.memoizedState;
    s !== g || p !== x || we.current || ut
      ? (typeof y == "function" && (Oo(t, n, y, r), (x = t.memoizedState)),
        (c = ut || Fs(t, n, c, r, p, x, u) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Do(e, t, n, r, o, l);
}
function Do(e, t, n, r, l, o) {
  ec(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && zs(t, n, !1), nt(e, t, o);
  (r = t.stateNode), (Ud.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = dn(t, e.child, null, o)), (t.child = dn(t, null, s, o)))
      : pe(e, t, s, o),
    (t.memoizedState = r.state),
    l && zs(t, n, !0),
    t.child
  );
}
function tc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ns(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ns(e, t.context, !1),
    _i(e, t.containerInfo);
}
function Qs(e, t, n, r, l) {
  return fn(), xi(l), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var $o = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(K, l & 1),
    e === null)
  )
    return (
      Ro(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = El(i, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Uo(n)),
              (t.memoizedState = $o),
              e)
            : Oi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Vd(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = xt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = xt(s, o)) : ((o = Ot(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Uo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = $o),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Oi(e, t) {
  return (
    (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pr(e, t, n, r) {
  return (
    r !== null && xi(r),
    dn(t, e.child, null, n),
    (e = Oi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(S(422)))), Pr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Ot(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && dn(t, e.child, null, i),
          (t.child.memoizedState = Uo(i)),
          (t.memoizedState = $o),
          o);
  if (!(t.mode & 1)) return Pr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(S(419))), (r = ql(o, r, void 0)), Pr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ye || s)) {
    if (((r = le), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), tt(e, l), Ue(r, e, l, -1));
    }
    return Ui(), (r = ql(Error(S(421)))), Pr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ep.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = ht(l.nextSibling)),
      (Ee = t),
      (Q = !0),
      (De = null),
      e !== null &&
        ((ze[Te++] = Ze),
        (ze[Te++] = Je),
        (ze[Te++] = It),
        (Ze = e.id),
        (Je = e.overflow),
        (It = t)),
      (t = Oi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mo(e.return, t, n);
}
function bl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function rc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gs(e, n, t);
        else if (e.tag === 19) Gs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          bl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        bl(t, !0, n, null, o);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wd(e, t, n) {
  switch (t.tag) {
    case 3:
      tc(t), fn();
      break;
    case 5:
      za(t);
      break;
    case 1:
      xe(t.type) && br(t);
      break;
    case 4:
      _i(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      V(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? nc(e, t, n)
            : (V(K, K.current & 1),
              (e = nt(e, t, n)),
              e !== null ? e.sibling : null);
      V(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ba(e, t, n);
  }
  return nt(e, t, n);
}
var lc, Vo, oc, ic;
lc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vo = function () {};
oc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Rt(Ge.current);
    var o = null;
    switch (n) {
      case "input":
        (l = uo(e, l)), (r = uo(e, r)), (o = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = fo(e, l)), (r = fo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jr);
    }
    mo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Hn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Hn.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && B("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ic = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Bd(e, t, n) {
  var r = t.pendingProps;
  switch ((wi(t), t.tag)) {
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
      return ae(t), null;
    case 1:
      return xe(t.type) && qr(), ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pn(),
        H(we),
        H(fe),
        Ni(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Xo(De), (De = null)))),
        Vo(e, t),
        ae(t),
        null
      );
    case 5:
      Pi(t);
      var l = Rt(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        oc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ae(t), null;
        }
        if (((e = Rt(Ge.current)), Cr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[He] = t), (r[er] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Mn.length; l++) B(Mn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ts(r, o), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              rs(r, o), B("invalid", r);
          }
          mo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Er(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Hn.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              hr(r), ns(r, o, !0);
              break;
            case "textarea":
              hr(r), ls(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ou(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[He] = t),
            (e[er] = r),
            lc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = go(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Mn.length; l++) B(Mn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (l = r);
                break;
              case "details":
                B("toggle", e), (l = r);
                break;
              case "input":
                ts(e, r), (l = uo(e, r)), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                rs(e, r), (l = fo(e, r)), B("invalid", e);
                break;
              default:
                l = r;
            }
            mo(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Fu(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && ju(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Qn(e, u)
                        : typeof u == "number" && Qn(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Hn.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && B("scroll", e)
                          : u != null && li(e, o, u, i));
              }
            switch (n) {
              case "input":
                hr(e), ns(e, r, !1);
                break;
              case "textarea":
                hr(e), ls(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? tn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      tn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Rt(nr.current)), Rt(Ge.current), Cr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (o = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Er(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Er(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return ae(t), null;
    case 13:
      if (
        (H(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Ea(), fn(), (t.flags |= 98560), (o = !1);
        else if (((o = Cr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[He] = t;
          } else
            fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (o = !1);
        } else De !== null && (Xo(De), (De = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? te === 0 && (te = 3) : Ui())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        pn(), Vo(e, t), e === null && qn(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return Ai(t.type._context), ae(t), null;
    case 17:
      return xe(t.type) && qr(), ae(t), null;
    case 19:
      if ((H(K), (o = t.memoizedState), o === null)) return ae(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) _n(o, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    _n(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > gn &&
            ((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Q)
            )
              return ae(t), null;
          } else
            2 * J() - o.renderingStartTime > gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          V(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        $i(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Hd(e, t) {
  switch ((wi(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(),
        H(we),
        H(fe),
        Ni(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Pi(t), null;
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        fn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(K), null;
    case 4:
      return pn(), null;
    case 10:
      return Ai(t.type._context), null;
    case 22:
    case 23:
      return $i(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ce = !1,
  Qd = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Wo(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Ks = !1;
function Gd(e, t) {
  if (((Co = Yr), (e = fa()), vi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            m = 0,
            g = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              g !== n || (l !== 0 && g.nodeType !== 3) || (s = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (y = g.firstChild) !== null;

            )
              (p = g), (g = y);
            for (;;) {
              if (g === e) break t;
              if (
                (p === n && ++c === l && (s = i),
                p === o && ++m === r && (u = i),
                (y = g.nextSibling) !== null)
              )
                break;
              (g = p), (p = g.parentNode);
            }
            g = y;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_o = { focusedElem: e, selectionRange: n }, Yr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    z = x.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ie(t.type, k),
                      z,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (w) {
          Z(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = Ks), (Ks = !1), x;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Wo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Sl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Bo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function sc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[er], delete t[zo], delete t[Nd], delete t[zd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ys(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), (e = e.sibling);
}
function Qo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qo(e, t, n), e = e.sibling; e !== null; ) Qo(e, t, n), (e = e.sibling);
}
var oe = null,
  Fe = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) ac(e, t, n), (n = n.sibling);
}
function ac(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || bt(n, t);
    case 6:
      var r = oe,
        l = Fe;
      (oe = null),
        lt(e, t, n),
        (oe = r),
        (Fe = l),
        oe !== null &&
          (Fe
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Fe
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, n)
              : e.nodeType === 1 && Gl(e, n),
            Xn(e))
          : Gl(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (l = Fe),
        (oe = n.stateNode.containerInfo),
        (Fe = !0),
        lt(e, t, n),
        (oe = r),
        (Fe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Wo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), lt(e, t, n), (ce = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function Xs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qd()),
      t.forEach(function (r) {
        var l = tp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (oe = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (oe = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (oe = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(S(160));
        ac(o, i, l), (oe = null), (Fe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        Z(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cc(t, e), (t = t.sibling);
}
function cc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), We(e), r & 4)) {
        try {
          Un(3, e, e.return), Sl(3, e);
        } catch (k) {
          Z(e, e.return, k);
        }
        try {
          Un(5, e, e.return);
        } catch (k) {
          Z(e, e.return, k);
        }
      }
      break;
    case 1:
      je(t, e), We(e), r & 512 && n !== null && bt(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        We(e),
        r & 512 && n !== null && bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (k) {
          Z(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Ru(l, o),
              go(s, i);
            var c = go(s, o);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i],
                g = u[i + 1];
              m === "style"
                ? Fu(l, g)
                : m === "dangerouslySetInnerHTML"
                  ? ju(l, g)
                  : m === "children"
                    ? Qn(l, g)
                    : li(l, m, g, c);
            }
            switch (s) {
              case "input":
                ao(l, o);
                break;
              case "textarea":
                Mu(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? tn(l, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? tn(l, !!o.multiple, o.defaultValue, !0)
                      : tn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[er] = o;
          } catch (k) {
            Z(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((je(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          Z(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (k) {
          Z(e, e.return, k);
        }
      break;
    case 4:
      je(t, e), We(e);
      break;
    case 13:
      je(t, e),
        We(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Fi = J())),
        r & 4 && Xs(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (c = ce) || m), je(t, e), (ce = c)) : je(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (_ = e, m = e.child; m !== null; ) {
            for (g = _ = m; _ !== null; ) {
              switch (((p = _), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, p, p.return);
                  break;
                case 1:
                  bt(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      Z(r, n, k);
                    }
                  }
                  break;
                case 5:
                  bt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Js(g);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (_ = y)) : Js(g);
            }
            m = m.sibling;
          }
        e: for (m = null, g = e; ; ) {
          if (g.tag === 5) {
            if (m === null) {
              m = g;
              try {
                (l = g.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Iu("display", i)));
              } catch (k) {
                Z(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (m === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (k) {
                Z(e, e.return, k);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            m === g && (m = null), (g = g.return);
          }
          m === g && (m = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      je(t, e), We(e), r & 4 && Xs(e);
      break;
    case 21:
      break;
    default:
      je(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
          var o = Ys(e);
          Qo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Ys(e);
          Ho(e, s, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (u) {
      Z(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kd(e, t, n) {
  (_ = e), fc(e);
}
function fc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Nr;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ce;
        s = Nr;
        var c = ce;
        if (((Nr = i), (ce = u) && !c))
          for (_ = l; _ !== null; )
            (i = _),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? qs(l)
                : u !== null
                  ? ((u.return = i), (_ = u))
                  : qs(l);
        for (; o !== null; ) (_ = o), fc(o), (o = o.sibling);
        (_ = l), (Nr = s), (ce = c);
      }
      Zs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Zs(e);
  }
}
function Zs(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || Sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Os(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Os(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var g = m.dehydrated;
                    g !== null && Xn(g);
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
              throw Error(S(163));
          }
        ce || (t.flags & 512 && Bo(t));
      } catch (p) {
        Z(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Js(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function qs(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Sl(4, t);
          } catch (u) {
            Z(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Z(t, l, u);
            }
          }
          var o = t.return;
          try {
            Bo(t);
          } catch (u) {
            Z(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Bo(t);
          } catch (u) {
            Z(t, i, u);
          }
      }
    } catch (u) {
      Z(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Yd = Math.ceil,
  ul = rt.ReactCurrentDispatcher,
  ji = rt.ReactCurrentOwner,
  Re = rt.ReactCurrentBatchConfig,
  D = 0,
  le = null,
  b = null,
  ie = 0,
  Se = 0,
  en = Et(0),
  te = 0,
  ir = null,
  Dt = 0,
  Al = 0,
  Ii = 0,
  Vn = null,
  ve = null,
  Fi = 0,
  gn = 1 / 0,
  Ye = null,
  al = !1,
  Go = null,
  yt = null,
  zr = !1,
  dt = null,
  cl = 0,
  Wn = 0,
  Ko = null,
  Ur = -1,
  Vr = 0;
function me() {
  return D & 6 ? J() : Ur !== -1 ? Ur : (Ur = J());
}
function wt(e) {
  return e.mode & 1
    ? D & 2 && ie !== 0
      ? ie & -ie
      : Ld.transition !== null
        ? (Vr === 0 && (Vr = Xu()), Vr)
        : ((e = U),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : na(e.type))),
          e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Wn) throw ((Wn = 0), (Ko = null), Error(S(185)));
  ur(e, n, r),
    (!(D & 2) || e !== le) &&
      (e === le && (!(D & 2) && (Al |= n), te === 4 && ct(e, ie)),
      ke(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((gn = J() + 500), wl && Ct()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Lf(e, t);
  var r = Kr(e, e === le ? ie : 0);
  if (r === 0)
    n !== null && ss(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ss(n), t === 1))
      e.tag === 0 ? Td(bs.bind(null, e)) : ka(bs.bind(null, e)),
        _d(function () {
          !(D & 6) && Ct();
        }),
        (n = null);
    else {
      switch (Zu(r)) {
        case 1:
          n = ai;
          break;
        case 4:
          n = Ku;
          break;
        case 16:
          n = Gr;
          break;
        case 536870912:
          n = Yu;
          break;
        default:
          n = Gr;
      }
      n = wc(n, dc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function dc(e, t) {
  if (((Ur = -1), (Vr = 0), D & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Kr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var o = mc();
    (le !== e || ie !== t) && ((Ye = null), (gn = J() + 500), Mt(e, t));
    do
      try {
        Jd();
        break;
      } catch (s) {
        pc(e, s);
      }
    while (!0);
    Si(),
      (ul.current = o),
      (D = l),
      b !== null ? (t = 0) : ((le = null), (ie = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = xo(e)), l !== 0 && ((r = l), (t = Yo(e, l)))), t === 1)
    )
      throw ((n = ir), Mt(e, 0), ct(e, r), ke(e, J()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Xd(l) &&
          ((t = fl(e, r)),
          t === 2 && ((o = xo(e)), o !== 0 && ((r = o), (t = Yo(e, o)))),
          t === 1))
      )
        throw ((n = ir), Mt(e, 0), ct(e, r), ke(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          zt(e, ve, Ye);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = Fi + 500 - J()), 10 < t))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = No(zt.bind(null, e, ve, Ye), t);
            break;
          }
          zt(e, ve, Ye);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - $e(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = J() - r),
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
                          : 1960 * Yd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = No(zt.bind(null, e, ve, Ye), r);
            break;
          }
          zt(e, ve, Ye);
          break;
        case 5:
          zt(e, ve, Ye);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ke(e, J()), e.callbackNode === n ? dc.bind(null, e) : null;
}
function Yo(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && Xo(t)),
    e
  );
}
function Xo(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function Xd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ve(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ct(e, t) {
  for (
    t &= ~Ii,
      t &= ~Al,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bs(e) {
  if (D & 6) throw Error(S(327));
  sn();
  var t = Kr(e, 0);
  if (!(t & 1)) return ke(e, J()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xo(e);
    r !== 0 && ((t = r), (n = Yo(e, r)));
  }
  if (n === 1) throw ((n = ir), Mt(e, 0), ct(e, t), ke(e, J()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, ve, Ye),
    ke(e, J()),
    null
  );
}
function Di(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((gn = J() + 500), wl && Ct());
  }
}
function $t(e) {
  dt !== null && dt.tag === 0 && !(D & 6) && sn();
  var t = D;
  D |= 1;
  var n = Re.transition,
    r = U;
  try {
    if (((Re.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Re.transition = n), (D = t), !(D & 6) && Ct();
  }
}
function $i() {
  (Se = en.current), H(en);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Cd(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((wi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          pn(), H(we), H(fe), Ni();
          break;
        case 5:
          Pi(r);
          break;
        case 4:
          pn();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          Ai(r.type._context);
          break;
        case 22:
        case 23:
          $i();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (b = e = xt(e.current, null)),
    (ie = Se = t),
    (te = 0),
    (ir = null),
    (Ii = Al = Dt = 0),
    (ve = Vn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function pc(e, t) {
  do {
    var n = b;
    try {
      if ((Si(), (Fr.current = sl), il)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Ft = 0),
        (re = ee = Y = null),
        ($n = !1),
        (rr = 0),
        (ji.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (ir = t), (b = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ie),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = s,
            g = m.tag;
          if (!(m.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = Us(i);
          if (y !== null) {
            (y.flags &= -257),
              Vs(y, i, s, o, t),
              y.mode & 1 && $s(o, c, t),
              (t = y),
              (u = c);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              $s(o, c, t), Ui();
              break e;
            }
            u = Error(S(426));
          }
        } else if (Q && s.mode & 1) {
          var z = Us(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              Vs(z, i, s, o, t),
              xi(mn(u, s));
            break e;
          }
        }
        (o = u = mn(u, s)),
          te !== 4 && (te = 2),
          Vn === null ? (Vn = [o]) : Vn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Za(o, u, t);
              Ms(o, f);
              break e;
            case 1:
              s = u;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (yt === null || !yt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Ja(o, s, t);
                Ms(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hc(n);
    } catch (E) {
      (t = E), b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mc() {
  var e = ul.current;
  return (ul.current = sl), e === null ? sl : e;
}
function Ui() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    le === null || (!(Dt & 268435455) && !(Al & 268435455)) || ct(le, ie);
}
function fl(e, t) {
  var n = D;
  D |= 2;
  var r = mc();
  (le !== e || ie !== t) && ((Ye = null), Mt(e, t));
  do
    try {
      Zd();
      break;
    } catch (l) {
      pc(e, l);
    }
  while (!0);
  if ((Si(), (D = n), (ul.current = r), b !== null)) throw Error(S(261));
  return (le = null), (ie = 0), te;
}
function Zd() {
  for (; b !== null; ) gc(b);
}
function Jd() {
  for (; b !== null && !Sf(); ) gc(b);
}
function gc(e) {
  var t = yc(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? hc(e) : (b = t),
    (ji.current = null);
}
function hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hd(n, t)), n !== null)) {
        (n.flags &= 32767), (b = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (b = null);
        return;
      }
    } else if (((n = Bd(n, t, Se)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function zt(e, t, n) {
  var r = U,
    l = Re.transition;
  try {
    (Re.transition = null), (U = 1), qd(e, t, n, r);
  } finally {
    (Re.transition = l), (U = r);
  }
  return null;
}
function qd(e, t, n, r) {
  do sn();
  while (dt !== null);
  if (D & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Rf(e, o),
    e === le && ((b = le = null), (ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      wc(Gr, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Re.transition), (Re.transition = null);
    var i = U;
    U = 1;
    var s = D;
    (D |= 4),
      (ji.current = null),
      Gd(e, n),
      cc(n, e),
      yd(_o),
      (Yr = !!Co),
      (_o = Co = null),
      (e.current = n),
      Kd(n),
      Af(),
      (D = s),
      (U = i),
      (Re.transition = o);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (dt = e), (cl = l)),
    (o = e.pendingLanes),
    o === 0 && (yt = null),
    _f(n.stateNode),
    ke(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = Go), (Go = null), e);
  return (
    cl & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ko ? Wn++ : ((Wn = 0), (Ko = e))) : (Wn = 0),
    Ct(),
    null
  );
}
function sn() {
  if (dt !== null) {
    var e = Zu(cl),
      t = Re.transition,
      n = U;
    try {
      if (((Re.transition = null), (U = 16 > e ? 16 : e), dt === null))
        var r = !1;
      else {
        if (((e = dt), (dt = null), (cl = 0), D & 6)) throw Error(S(331));
        var l = D;
        for (D |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (_ = c; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, m, o);
                  }
                  var g = m.child;
                  if (g !== null) (g.return = m), (_ = g);
                  else
                    for (; _ !== null; ) {
                      m = _;
                      var p = m.sibling,
                        y = m.return;
                      if ((sc(m), m === c)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (_ = p);
                        break;
                      }
                      _ = y;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var z = k.sibling;
                    (k.sibling = null), (k = z);
                  } while (k !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Un(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (_ = f);
                break e;
              }
              _ = o.return;
            }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (_ = d);
          else
            e: for (i = a; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sl(9, s);
                  }
                } catch (E) {
                  Z(s, s.return, E);
                }
              if (s === i) {
                _ = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (_ = w);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((D = l), Ct(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Re.transition = t);
    }
  }
  return !1;
}
function eu(e, t, n) {
  (t = mn(n, t)),
    (t = Za(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = me()),
    e !== null && (ur(e, 1, t), ke(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) eu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        eu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yt === null || !yt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = Ja(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = me()),
            t !== null && (ur(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ie & n) === n &&
      (te === 4 || (te === 3 && (ie & 130023424) === ie && 500 > J() - Fi)
        ? Mt(e, 0)
        : (Ii |= n)),
    ke(e, t);
}
function vc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = me();
  (e = tt(e, t)), e !== null && (ur(e, t, n), ke(e, n));
}
function ep(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vc(e, n);
}
function tp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), vc(e, n);
}
var yc;
yc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), Wd(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), Q && t.flags & 1048576 && Sa(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $r(e, t), (e = t.pendingProps);
      var l = cn(t, fe.current);
      on(t, n), (l = Ti(null, t, r, e, l, n));
      var o = Li();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((o = !0), br(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ci(t),
            (l.updater = kl),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = Do(null, t, r, !0, o, n)))
          : ((t.tag = 0), Q && o && yi(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = rp(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = Fo(null, t, r, e, n);
            break e;
          case 1:
            t = Hs(null, t, r, e, n);
            break e;
          case 11:
            t = Ws(null, t, r, e, n);
            break e;
          case 14:
            t = Bs(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Fo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Hs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((tc(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Na(e, t),
          ll(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = mn(Error(S(423)), t)), (t = Qs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(S(424)), t)), (t = Qs(e, t, r, n, l));
            break e;
          } else
            for (
              Ae = ht(t.stateNode.containerInfo.firstChild),
                Ee = t,
                Q = !0,
                De = null,
                n = _a(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        za(t),
        e === null && Ro(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Po(r, l) ? (i = null) : o !== null && Po(r, o) && (t.flags |= 32),
        ec(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return nc(e, t, n);
    case 4:
      return (
        _i(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = dn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Ws(e, t, r, l, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          V(nl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ve(o.value, i)) {
            if (o.children === l.children && !we.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = qe(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Mo(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Mo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        on(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        Bs(e, t, r, l, n)
      );
    case 15:
      return qa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        $r(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), br(t)) : (e = !1),
        on(t, n),
        Xa(t, r, l),
        jo(t, r, l, n),
        Do(null, t, r, !0, e, n)
      );
    case 19:
      return rc(e, t, n);
    case 22:
      return ba(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function wc(e, t) {
  return Gu(e, t);
}
function np(e, t, n, r) {
  (this.tag = e),
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
    (this.pendingProps = t),
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
function Le(e, t, n, r) {
  return new np(e, t, n, r);
}
function Vi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rp(e) {
  if (typeof e == "function") return Vi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ii)) return 11;
    if (e === si) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Vi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ht:
        return Ot(n.children, l, o, t);
      case oi:
        (i = 8), (l |= 8);
        break;
      case lo:
        return (
          (e = Le(12, n, t, l | 2)), (e.elementType = lo), (e.lanes = o), e
        );
      case oo:
        return (e = Le(13, n, t, l)), (e.elementType = oo), (e.lanes = o), e;
      case io:
        return (e = Le(19, n, t, l)), (e.elementType = io), (e.lanes = o), e;
      case zu:
        return El(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pu:
              i = 10;
              break e;
            case Nu:
              i = 9;
              break e;
            case ii:
              i = 11;
              break e;
            case si:
              i = 14;
              break e;
            case st:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ot(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function El(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = zu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function eo(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function to(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wi(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new lp(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Le(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ci(o),
    e
  );
}
function op(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return xa(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Wi(n, r, !0, e, l, o, i, s, u)),
    (e.context = xc(null)),
    (n = e.current),
    (r = me()),
    (l = wt(n)),
    (o = qe(r, l)),
    (o.callback = t ?? null),
    vt(n, o, l),
    (e.current.lanes = l),
    ur(e, l, r),
    ke(e, r),
    e
  );
}
function Cl(e, t, n, r) {
  var l = t.current,
    o = me(),
    i = wt(l);
  return (
    (n = xc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, i)),
    e !== null && (Ue(e, l, i, o), Ir(e, l, i)),
    i
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bi(e, t) {
  tu(e, t), (e = e.alternate) && tu(e, t);
}
function ip() {
  return null;
}
var Sc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hi(e) {
  this._internalRoot = e;
}
_l.prototype.render = Hi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Cl(e, t, null, null);
};
_l.prototype.unmount = Hi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      Cl(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && ta(e);
  }
};
function Qi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function nu() {}
function sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = dl(i);
        o.call(c);
      };
    }
    var i = kc(t, r, e, 0, null, !1, !1, "", nu);
    return (
      (e._reactRootContainer = i),
      (e[et] = i.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = dl(u);
      s.call(c);
    };
  }
  var u = Wi(e, 0, !1, null, null, !1, !1, "", nu);
  return (
    (e._reactRootContainer = u),
    (e[et] = u.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Cl(t, u, n, r);
    }),
    u
  );
}
function Nl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = dl(i);
        s.call(u);
      };
    }
    Cl(t, i, e, l);
  } else i = sp(n, t, e, l, r);
  return dl(i);
}
Ju = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 &&
          (ci(t, n | 1), ke(t, J()), !(D & 6) && ((gn = J() + 500), Ct()));
      }
      break;
    case 13:
      $t(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = me();
          Ue(r, e, 1, l);
        }
      }),
        Bi(e, 1);
  }
};
fi = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = me();
      Ue(t, e, 134217728, n);
    }
    Bi(e, 134217728);
  }
};
qu = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = me();
      Ue(n, e, t, r);
    }
    Bi(e, t);
  }
};
bu = function () {
  return U;
};
ea = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
vo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ao(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l) throw Error(S(90));
            Lu(r), ao(r, l);
          }
        }
      }
      break;
    case "textarea":
      Mu(e, n);
      break;
    case "select":
      (t = n.value), t != null && tn(e, !!n.multiple, t, !1);
  }
};
Uu = Di;
Vu = $t;
var up = { usingClientEntryPoint: !1, Events: [cr, Yt, yl, Du, $u, Di] },
  Pn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ap = {
    bundleType: Pn.bundleType,
    version: Pn.version,
    rendererPackageName: Pn.rendererPackageName,
    rendererConfig: Pn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Pn.findFiberByHostInstance || ip,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (ml = Tr.inject(ap)), (Qe = Tr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qi(t)) throw Error(S(200));
  return op(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Qi(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = Sc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Wi(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new Hi(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Hu(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return $t(e);
};
_e.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(S(200));
  return Nl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Qi(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Sc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = kc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[et] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _l(t);
};
_e.render = function (e, t, n) {
  if (!Pl(t)) throw Error(S(200));
  return Nl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? ($t(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Di;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Nl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Ac() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac);
    } catch (e) {
      console.error(e);
    }
}
Ac(), (Au.exports = _e);
var cp = Au.exports,
  ru = cp;
(Ji.createRoot = ru.createRoot), (Ji.hydrateRoot = ru.hydrateRoot);
var Ec = { exports: {} };
(function (e, t) {
  (function (n, r) {
    r(e);
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Ic,
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
          l = (o) => {
            const i = {
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
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
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
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
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
            if (Object.keys(i).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class s extends WeakMap {
              constructor(v, A = void 0) {
                super(A), (this.createItem = v);
              }
              get(v) {
                return (
                  this.has(v) || this.set(v, this.createItem(v)), super.get(v)
                );
              }
            }
            const u = (h) =>
                h && typeof h == "object" && typeof h.then == "function",
              c =
                (h, v) =>
                (...A) => {
                  o.runtime.lastError
                    ? h.reject(new Error(o.runtime.lastError.message))
                    : v.singleCallbackArg ||
                        (A.length <= 1 && v.singleCallbackArg !== !1)
                      ? h.resolve(A[0])
                      : h.resolve(A);
                },
              m = (h) => (h == 1 ? "argument" : "arguments"),
              g = (h, v) =>
                function (P, ...N) {
                  if (N.length < v.minArgs)
                    throw new Error(
                      `Expected at least ${v.minArgs} ${m(v.minArgs)} for ${h}(), got ${N.length}`,
                    );
                  if (N.length > v.maxArgs)
                    throw new Error(
                      `Expected at most ${v.maxArgs} ${m(v.maxArgs)} for ${h}(), got ${N.length}`,
                    );
                  return new Promise((F, L) => {
                    if (v.fallbackToNoCallback)
                      try {
                        P[h](...N, c({ resolve: F, reject: L }, v));
                      } catch (R) {
                        console.warn(
                          `${h} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          R,
                        ),
                          P[h](...N),
                          (v.fallbackToNoCallback = !1),
                          (v.noCallback = !0),
                          F();
                      }
                    else
                      v.noCallback
                        ? (P[h](...N), F())
                        : P[h](...N, c({ resolve: F, reject: L }, v));
                  });
                },
              p = (h, v, A) =>
                new Proxy(v, {
                  apply(P, N, F) {
                    return A.call(N, h, ...F);
                  },
                });
            let y = Function.call.bind(Object.prototype.hasOwnProperty);
            const x = (h, v = {}, A = {}) => {
                let P = Object.create(null),
                  N = {
                    has(L, R) {
                      return R in h || R in P;
                    },
                    get(L, R, q) {
                      if (R in P) return P[R];
                      if (!(R in h)) return;
                      let G = h[R];
                      if (typeof G == "function")
                        if (typeof v[R] == "function") G = p(h, h[R], v[R]);
                        else if (y(A, R)) {
                          let de = g(R, A[R]);
                          G = p(h, h[R], de);
                        } else G = G.bind(h);
                      else if (
                        typeof G == "object" &&
                        G !== null &&
                        (y(v, R) || y(A, R))
                      )
                        G = x(G, v[R], A[R]);
                      else if (y(A, "*")) G = x(G, v[R], A["*"]);
                      else
                        return (
                          Object.defineProperty(P, R, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return h[R];
                            },
                            set(de) {
                              h[R] = de;
                            },
                          }),
                          G
                        );
                      return (P[R] = G), G;
                    },
                    set(L, R, q, G) {
                      return R in P ? (P[R] = q) : (h[R] = q), !0;
                    },
                    defineProperty(L, R, q) {
                      return Reflect.defineProperty(P, R, q);
                    },
                    deleteProperty(L, R) {
                      return Reflect.deleteProperty(P, R);
                    },
                  },
                  F = Object.create(h);
                return new Proxy(F, N);
              },
              k = (h) => ({
                addListener(v, A, ...P) {
                  v.addListener(h.get(A), ...P);
                },
                hasListener(v, A) {
                  return v.hasListener(h.get(A));
                },
                removeListener(v, A) {
                  v.removeListener(h.get(A));
                },
              }),
              z = new s((h) =>
                typeof h != "function"
                  ? h
                  : function (A) {
                      const P = x(
                        A,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      h(P);
                    },
              ),
              f = new s((h) =>
                typeof h != "function"
                  ? h
                  : function (A, P, N) {
                      let F = !1,
                        L,
                        R = new Promise((Ne) => {
                          L = function (C) {
                            (F = !0), Ne(C);
                          };
                        }),
                        q;
                      try {
                        q = h(A, P, L);
                      } catch (Ne) {
                        q = Promise.reject(Ne);
                      }
                      const G = q !== !0 && u(q);
                      if (q !== !0 && !G && !F) return !1;
                      const de = (Ne) => {
                        Ne.then(
                          (C) => {
                            N(C);
                          },
                          (C) => {
                            let T;
                            C &&
                            (C instanceof Error || typeof C.message == "string")
                              ? (T = C.message)
                              : (T = "An unexpected error occurred"),
                              N({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: T,
                              });
                          },
                        ).catch((C) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            C,
                          );
                        });
                      };
                      return de(G ? q : R), !0;
                    },
              ),
              a = ({ reject: h, resolve: v }, A) => {
                o.runtime.lastError
                  ? o.runtime.lastError.message === r
                    ? v()
                    : h(new Error(o.runtime.lastError.message))
                  : A && A.__mozWebExtensionPolyfillReject__
                    ? h(new Error(A.message))
                    : v(A);
              },
              d = (h, v, A, ...P) => {
                if (P.length < v.minArgs)
                  throw new Error(
                    `Expected at least ${v.minArgs} ${m(v.minArgs)} for ${h}(), got ${P.length}`,
                  );
                if (P.length > v.maxArgs)
                  throw new Error(
                    `Expected at most ${v.maxArgs} ${m(v.maxArgs)} for ${h}(), got ${P.length}`,
                  );
                return new Promise((N, F) => {
                  const L = a.bind(null, { resolve: N, reject: F });
                  P.push(L), A.sendMessage(...P);
                });
              },
              w = {
                devtools: { network: { onRequestFinished: k(z) } },
                runtime: {
                  onMessage: k(f),
                  onMessageExternal: k(f),
                  sendMessage: d.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: d.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              E = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (i.privacy = {
                network: { "*": E },
                services: { "*": E },
                websites: { "*": E },
              }),
              x(o, w, i)
            );
          };
        n.exports = l(chrome);
      }
    },
  );
})(Ec);
var fp = Ec.exports;
const dp = fu(fp),
  fm = dp;
function pp(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Cc(...e) {
  return (t) => e.forEach((n) => pp(n, t));
}
function dm(...e) {
  return j.useCallback(Cc(...e), e);
}
var _c = j.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = j.Children.toArray(n),
    o = l.find(gp);
  if (o) {
    const i = o.props.children,
      s = l.map((u) =>
        u === o
          ? j.Children.count(i) > 1
            ? j.Children.only(null)
            : j.isValidElement(i)
              ? i.props.children
              : null
          : u,
      );
    return Bn.jsx(Zo, {
      ...r,
      ref: t,
      children: j.isValidElement(i) ? j.cloneElement(i, void 0, s) : null,
    });
  }
  return Bn.jsx(Zo, { ...r, ref: t, children: n });
});
_c.displayName = "Slot";
var Zo = j.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (j.isValidElement(n)) {
    const l = vp(n);
    return j.cloneElement(n, { ...hp(r, n.props), ref: t ? Cc(t, l) : l });
  }
  return j.Children.count(n) > 1 ? j.Children.only(null) : null;
});
Zo.displayName = "SlotClone";
var mp = ({ children: e }) => Bn.jsx(Bn.Fragment, { children: e });
function gp(e) {
  return j.isValidElement(e) && e.type === mp;
}
function hp(e, t) {
  const n = { ...t };
  for (const r in t) {
    const l = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? l && o
        ? (n[r] = (...s) => {
            o(...s), l(...s);
          })
        : l && (n[r] = l)
      : r === "style"
        ? (n[r] = { ...l, ...o })
        : r === "className" && (n[r] = [l, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vp(e) {
  var r, l;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Pc(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pc(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function yp() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Pc(e)) && (r && (r += " "), (r += t));
  return r;
}
const lu = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  ou = yp,
  wp = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return ou(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: l, defaultVariants: o } = t,
      i = Object.keys(l).map((c) => {
        const m = n == null ? void 0 : n[c],
          g = o == null ? void 0 : o[c];
        if (m === null) return null;
        const p = lu(m) || lu(g);
        return l[c][p];
      }),
      s =
        n &&
        Object.entries(n).reduce((c, m) => {
          let [g, p] = m;
          return p === void 0 || (c[g] = p), c;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, m) => {
              let { class: g, className: p, ...y } = m;
              return Object.entries(y).every((x) => {
                let [k, z] = x;
                return Array.isArray(z)
                  ? z.includes({ ...o, ...s }[k])
                  : { ...o, ...s }[k] === z;
              })
                ? [...c, g, p]
                : c;
            }, []);
    return ou(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
function Nc(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = Nc(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function xp() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Nc(e)) && (r && (r += " "), (r += t));
  return r;
}
const Gi = "-",
  kp = (e) => {
    const t = Ap(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Gi);
        return s[0] === "" && s.length !== 1 && s.shift(), zc(s, t) || Sp(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  zc = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      l = r ? zc(e.slice(1), r) : void 0;
    if (l) return l;
    if (t.validators.length === 0) return;
    const o = e.join(Gi);
    return (i = t.validators.find(({ validator: s }) => s(o))) == null
      ? void 0
      : i.classGroupId;
  },
  iu = /^\[(.+)\]$/,
  Sp = (e) => {
    if (iu.test(e)) {
      const t = iu.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ap = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Cp(Object.entries(e.classGroups), n).forEach(([o, i]) => {
        Jo(i, r, o, t);
      }),
      r
    );
  },
  Jo = (e, t, n, r) => {
    e.forEach((l) => {
      if (typeof l == "string") {
        const o = l === "" ? t : su(t, l);
        o.classGroupId = n;
        return;
      }
      if (typeof l == "function") {
        if (Ep(l)) {
          Jo(l(r), t, n, r);
          return;
        }
        t.validators.push({ validator: l, classGroupId: n });
        return;
      }
      Object.entries(l).forEach(([o, i]) => {
        Jo(i, su(t, o), n, r);
      });
    });
  },
  su = (e, t) => {
    let n = e;
    return (
      t.split(Gi).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Ep = (e) => e.isThemeGetter,
  Cp = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const l = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([i, s]) => [t + i, s]),
                  )
                : o,
          );
          return [n, l];
        })
      : e,
  _p = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const l = (o, i) => {
      n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0) return i;
        if ((i = r.get(o)) !== void 0) return l(o, i), i;
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : l(o, i);
      },
    };
  },
  Tc = "!",
  Pp = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      l = t[0],
      o = t.length,
      i = (s) => {
        const u = [];
        let c = 0,
          m = 0,
          g;
        for (let z = 0; z < s.length; z++) {
          let f = s[z];
          if (c === 0) {
            if (f === l && (r || s.slice(z, z + o) === t)) {
              u.push(s.slice(m, z)), (m = z + o);
              continue;
            }
            if (f === "/") {
              g = z;
              continue;
            }
          }
          f === "[" ? c++ : f === "]" && c--;
        }
        const p = u.length === 0 ? s : s.substring(m),
          y = p.startsWith(Tc),
          x = y ? p.substring(1) : p,
          k = g && g > m ? g - m : void 0;
        return {
          modifiers: u,
          hasImportantModifier: y,
          baseClassName: x,
          maybePostfixModifierPosition: k,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  Np = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  zp = (e) => ({ cache: _p(e.cacheSize), parseClassName: Pp(e), ...kp(e) }),
  Tp = /\s+/,
  Lp = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: l,
      } = t,
      o = [],
      i = e.trim().split(Tp);
    let s = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const c = i[u],
        {
          modifiers: m,
          hasImportantModifier: g,
          baseClassName: p,
          maybePostfixModifierPosition: y,
        } = n(c);
      let x = !!y,
        k = r(x ? p.substring(0, y) : p);
      if (!k) {
        if (!x) {
          s = c + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((k = r(p)), !k)) {
          s = c + (s.length > 0 ? " " + s : s);
          continue;
        }
        x = !1;
      }
      const z = Np(m).join(":"),
        f = g ? z + Tc : z,
        a = f + k;
      if (o.includes(a)) continue;
      o.push(a);
      const d = l(k, x);
      for (let w = 0; w < d.length; ++w) {
        const E = d[w];
        o.push(f + E);
      }
      s = c + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function Rp() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Lc(t)) && (r && (r += " "), (r += n));
  return r;
}
const Lc = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Lc(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Mp(e, ...t) {
  let n,
    r,
    l,
    o = i;
  function i(u) {
    const c = t.reduce((m, g) => g(m), e());
    return (n = zp(c)), (r = n.cache.get), (l = n.cache.set), (o = s), s(u);
  }
  function s(u) {
    const c = r(u);
    if (c) return c;
    const m = Lp(u, n);
    return l(u, m), m;
  }
  return function () {
    return o(Rp.apply(null, arguments));
  };
}
const W = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Rc = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Op = /^\d+\/\d+$/,
  jp = new Set(["px", "full", "screen"]),
  Ip = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Fp =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Dp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  $p = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Up =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ke = (e) => un(e) || jp.has(e) || Op.test(e),
  ot = (e) => wn(e, "length", Yp),
  un = (e) => !!e && !Number.isNaN(Number(e)),
  no = (e) => wn(e, "number", un),
  Nn = (e) => !!e && Number.isInteger(Number(e)),
  Vp = (e) => e.endsWith("%") && un(e.slice(0, -1)),
  O = (e) => Rc.test(e),
  it = (e) => Ip.test(e),
  Wp = new Set(["length", "size", "percentage"]),
  Bp = (e) => wn(e, Wp, Mc),
  Hp = (e) => wn(e, "position", Mc),
  Qp = new Set(["image", "url"]),
  Gp = (e) => wn(e, Qp, Zp),
  Kp = (e) => wn(e, "", Xp),
  zn = () => !0,
  wn = (e, t, n) => {
    const r = Rc.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Yp = (e) => Fp.test(e) && !Dp.test(e),
  Mc = () => !1,
  Xp = (e) => $p.test(e),
  Zp = (e) => Up.test(e),
  Jp = () => {
    const e = W("colors"),
      t = W("spacing"),
      n = W("blur"),
      r = W("brightness"),
      l = W("borderColor"),
      o = W("borderRadius"),
      i = W("borderSpacing"),
      s = W("borderWidth"),
      u = W("contrast"),
      c = W("grayscale"),
      m = W("hueRotate"),
      g = W("invert"),
      p = W("gap"),
      y = W("gradientColorStops"),
      x = W("gradientColorStopPositions"),
      k = W("inset"),
      z = W("margin"),
      f = W("opacity"),
      a = W("padding"),
      d = W("saturate"),
      w = W("scale"),
      E = W("sepia"),
      h = W("skew"),
      v = W("space"),
      A = W("translate"),
      P = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", O, t],
      L = () => [O, t],
      R = () => ["", Ke, ot],
      q = () => ["auto", un, O],
      G = () => [
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
      de = () => ["solid", "dashed", "dotted", "double", "none"],
      Ne = () => [
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
      C = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", O],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [un, O];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [zn],
        spacing: [Ke, ot],
        blur: ["none", "", it, O],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", it, O],
        borderSpacing: L(),
        borderWidth: R(),
        contrast: $(),
        grayscale: T(),
        hueRotate: $(),
        invert: T(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Vp, ot],
        inset: F(),
        margin: F(),
        opacity: $(),
        padding: L(),
        saturate: $(),
        scale: $(),
        sepia: T(),
        skew: $(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", O] }],
        container: ["container"],
        columns: [{ columns: [it] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
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
        "object-position": [{ object: [...G(), O] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: P() }],
        "overscroll-x": [{ "overscroll-x": P() }],
        "overscroll-y": [{ "overscroll-y": P() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [k] }],
        "inset-x": [{ "inset-x": [k] }],
        "inset-y": [{ "inset-y": [k] }],
        start: [{ start: [k] }],
        end: [{ end: [k] }],
        top: [{ top: [k] }],
        right: [{ right: [k] }],
        bottom: [{ bottom: [k] }],
        left: [{ left: [k] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Nn, O] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", O] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", Nn, O] }],
        "grid-cols": [{ "grid-cols": [zn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Nn, O] }, O] }],
        "col-start": [{ "col-start": q() }],
        "col-end": [{ "col-end": q() }],
        "grid-rows": [{ "grid-rows": [zn] }],
        "row-start-end": [{ row: ["auto", { span: [Nn, O] }, O] }],
        "row-start": [{ "row-start": q() }],
        "row-end": [{ "row-end": q() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", O] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", O] }],
        gap: [{ gap: [p] }],
        "gap-x": [{ "gap-x": [p] }],
        "gap-y": [{ "gap-y": [p] }],
        "justify-content": [{ justify: ["normal", ...C()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...C(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...C(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [a] }],
        px: [{ px: [a] }],
        py: [{ py: [a] }],
        ps: [{ ps: [a] }],
        pe: [{ pe: [a] }],
        pt: [{ pt: [a] }],
        pr: [{ pr: [a] }],
        pb: [{ pb: [a] }],
        pl: [{ pl: [a] }],
        m: [{ m: [z] }],
        mx: [{ mx: [z] }],
        my: [{ my: [z] }],
        ms: [{ ms: [z] }],
        me: [{ me: [z] }],
        mt: [{ mt: [z] }],
        mr: [{ mr: [z] }],
        mb: [{ mb: [z] }],
        ml: [{ ml: [z] }],
        "space-x": [{ "space-x": [v] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [v] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, t] }],
        "min-w": [{ "min-w": [O, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              O,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [it] },
              it,
            ],
          },
        ],
        h: [{ h: [O, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [O, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [O, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", it, ot] }],
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
              no,
            ],
          },
        ],
        "font-family": [{ font: [zn] }],
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
              O,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", un, no] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ke,
              O,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", O] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", O] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [f] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [f] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...de(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ke, ot] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ke, O] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
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
              O,
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
        content: [{ content: ["none", O] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [f] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...G(), Hp] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Bp] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Gp,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [f] }],
        "border-style": [{ border: [...de(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [f] }],
        "divide-style": [{ divide: de() }],
        "border-color": [{ border: [l] }],
        "border-color-x": [{ "border-x": [l] }],
        "border-color-y": [{ "border-y": [l] }],
        "border-color-s": [{ "border-s": [l] }],
        "border-color-e": [{ "border-e": [l] }],
        "border-color-t": [{ "border-t": [l] }],
        "border-color-r": [{ "border-r": [l] }],
        "border-color-b": [{ "border-b": [l] }],
        "border-color-l": [{ "border-l": [l] }],
        "divide-color": [{ divide: [l] }],
        "outline-style": [{ outline: ["", ...de()] }],
        "outline-offset": [{ "outline-offset": [Ke, O] }],
        "outline-w": [{ outline: [Ke, ot] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: R() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [f] }],
        "ring-offset-w": [{ "ring-offset": [Ke, ot] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", it, Kp] }],
        "shadow-color": [{ shadow: [zn] }],
        opacity: [{ opacity: [f] }],
        "mix-blend": [
          { "mix-blend": [...Ne(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": Ne() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", it, O] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [m] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [d] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [m] }],
        "backdrop-invert": [{ "backdrop-invert": [g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [f] }],
        "backdrop-saturate": [{ "backdrop-saturate": [d] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
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
              O,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", O] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", O] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [w] }],
        "scale-x": [{ "scale-x": [w] }],
        "scale-y": [{ "scale-y": [w] }],
        rotate: [{ rotate: [Nn, O] }],
        "translate-x": [{ "translate-x": [A] }],
        "translate-y": [{ "translate-y": [A] }],
        "skew-x": [{ "skew-x": [h] }],
        "skew-y": [{ "skew-y": [h] }],
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
              O,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
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
              O,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", O] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ke, ot, no] }],
        stroke: [{ stroke: [e, "none"] }],
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
  },
  qp = Mp(Jp);
function bp(...e) {
  return qp(xp(e));
}
const em = wp(
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
  tm = j.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...l }, o) => {
      const i = r ? _c : "button";
      return Bn.jsx(i, {
        className: bp(em({ variant: t, size: n, className: e })),
        ref: o,
        ...l,
      });
    },
  );
tm.displayName = "Button";
var nm = (e, t, n, r, l, o, i, s) => {
    let u = document.documentElement,
      c = ["light", "dark"];
    function m(y) {
      (Array.isArray(e) ? e : [e]).forEach((x) => {
        let k = x === "class",
          z = k && o ? l.map((f) => o[f] || f) : l;
        k
          ? (u.classList.remove(...z), u.classList.add(y))
          : u.setAttribute(x, y);
      }),
        g(y);
    }
    function g(y) {
      s && c.includes(y) && (u.style.colorScheme = y);
    }
    function p() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (r) m(r);
    else
      try {
        let y = localStorage.getItem(t) || n,
          x = i && y === "system" ? p() : y;
        m(x);
      } catch {}
  },
  uu = ["light", "dark"],
  Oc = "(prefers-color-scheme: dark)",
  rm = typeof window > "u",
  Ki = j.createContext(void 0),
  lm = { setTheme: (e) => {}, themes: [] },
  pm = () => {
    var e;
    return (e = j.useContext(Ki)) != null ? e : lm;
  },
  mm = (e) =>
    j.useContext(Ki)
      ? j.createElement(j.Fragment, null, e.children)
      : j.createElement(im, { ...e }),
  om = ["light", "dark"],
  im = ({
    forcedTheme: e,
    disableTransitionOnChange: t = !1,
    enableSystem: n = !0,
    enableColorScheme: r = !0,
    storageKey: l = "theme",
    themes: o = om,
    defaultTheme: i = n ? "system" : "light",
    attribute: s = "data-theme",
    value: u,
    children: c,
    nonce: m,
    scriptProps: g,
  }) => {
    let [p, y] = j.useState(() => au(l, i)),
      [x, k] = j.useState(() => au(l)),
      z = u ? Object.values(u) : o,
      f = j.useCallback(
        (E) => {
          let h = E;
          if (!h) return;
          E === "system" && n && (h = cu());
          let v = u ? u[h] : h,
            A = t ? um(m) : null,
            P = document.documentElement,
            N = (F) => {
              F === "class"
                ? (P.classList.remove(...z), v && P.classList.add(v))
                : F.startsWith("data-") &&
                  (v ? P.setAttribute(F, v) : P.removeAttribute(F));
            };
          if ((Array.isArray(s) ? s.forEach(N) : N(s), r)) {
            let F = uu.includes(i) ? i : null,
              L = uu.includes(h) ? h : F;
            P.style.colorScheme = L;
          }
          A == null || A();
        },
        [m],
      ),
      a = j.useCallback(
        (E) => {
          let h = typeof E == "function" ? E(p) : E;
          y(h);
          try {
            localStorage.setItem(l, h);
          } catch {}
        },
        [p],
      ),
      d = j.useCallback(
        (E) => {
          let h = cu(E);
          k(h), p === "system" && n && !e && f("system");
        },
        [p, e],
      );
    j.useEffect(() => {
      let E = window.matchMedia(Oc);
      return E.addListener(d), d(E), () => E.removeListener(d);
    }, [d]),
      j.useEffect(() => {
        let E = (h) => {
          if (h.key !== l) return;
          let v = h.newValue || i;
          a(v);
        };
        return (
          window.addEventListener("storage", E),
          () => window.removeEventListener("storage", E)
        );
      }, [a]),
      j.useEffect(() => {
        f(e ?? p);
      }, [e, p]);
    let w = j.useMemo(
      () => ({
        theme: p,
        setTheme: a,
        forcedTheme: e,
        resolvedTheme: p === "system" ? x : p,
        themes: n ? [...o, "system"] : o,
        systemTheme: n ? x : void 0,
      }),
      [p, a, e, x, n, o],
    );
    return j.createElement(
      Ki.Provider,
      { value: w },
      j.createElement(sm, {
        forcedTheme: e,
        storageKey: l,
        attribute: s,
        enableSystem: n,
        enableColorScheme: r,
        defaultTheme: i,
        value: u,
        themes: o,
        nonce: m,
        scriptProps: g,
      }),
      c,
    );
  },
  sm = j.memo(
    ({
      forcedTheme: e,
      storageKey: t,
      attribute: n,
      enableSystem: r,
      enableColorScheme: l,
      defaultTheme: o,
      value: i,
      themes: s,
      nonce: u,
      scriptProps: c,
    }) => {
      let m = JSON.stringify([n, t, o, e, s, i, r, l]).slice(1, -1);
      return j.createElement("script", {
        ...c,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? u : "",
        dangerouslySetInnerHTML: { __html: `(${nm.toString()})(${m})` },
      });
    },
  ),
  au = (e, t) => {
    if (rm) return;
    let n;
    try {
      n = localStorage.getItem(e) || void 0;
    } catch {}
    return n || t;
  },
  um = (e) => {
    let t = document.createElement("style");
    return (
      e && t.setAttribute("nonce", e),
      t.appendChild(
        document.createTextNode(
          "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
        ),
      ),
      document.head.appendChild(t),
      () => {
        window.getComputedStyle(document.body),
          setTimeout(() => {
            document.head.removeChild(t);
          }, 1);
      }
    );
  },
  cu = (e) => (e || (e = window.matchMedia(Oc)), e.matches ? "dark" : "light");
export {
  tm as B,
  mm as J,
  qc as R,
  _c as S,
  cm as a,
  wp as b,
  bp as c,
  Ic as d,
  fm as e,
  Ji as f,
  am as g,
  fu as h,
  Bn as j,
  j as r,
  dm as u,
  pm as z,
};
