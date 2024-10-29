var lc = Object.defineProperty;
var oc = (e, n, t) => n in e ? lc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var wl = (e, n, t) => oc(e, typeof n != "symbol" ? n + "" : n, t);
var Wu = { exports: {} }, el = {}, Qu = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt = Symbol.for("react.element"), ic = Symbol.for("react.portal"), uc = Symbol.for("react.fragment"), sc = Symbol.for("react.strict_mode"), ac = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), dc = Symbol.for("react.forward_ref"), pc = Symbol.for("react.suspense"), mc = Symbol.for("react.memo"), hc = Symbol.for("react.lazy"), Ii = Symbol.iterator;
function vc(e) {
  return e === null || typeof e != "object" ? null : (e = Ii && e[Ii] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ku = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yu = Object.assign, Zu = {};
function lt(e, n, t) {
  this.props = e, this.context = n, this.refs = Zu, this.updater = t || Ku;
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
lt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gu() {
}
Gu.prototype = lt.prototype;
function $o(e, n, t) {
  this.props = e, this.context = n, this.refs = Zu, this.updater = t || Ku;
}
var Vo = $o.prototype = new Gu();
Vo.constructor = $o;
Yu(Vo, lt.prototype);
Vo.isPureReactComponent = !0;
var Fi = Array.isArray, Xu = Object.prototype.hasOwnProperty, Bo = { current: null }, Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) Xu.call(n, r) && !Ju.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Yt, type: e, key: o, ref: i, props: l, _owner: Bo.current };
}
function yc(e, n) {
  return { $$typeof: Yt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yt;
}
function gc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var ji = /\/+/g;
function kl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? gc("" + e.key) : n.toString(36);
}
function yr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Yt:
        case ic:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + kl(i, 0) : r, Fi(l) ? (t = "", e != null && (t = e.replace(ji, "$&/") + "/"), yr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (Ho(l) && (l = yc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ji, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Fi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + kl(o, u);
    i += yr(o, n, t, s, l);
  }
  else if (s = vc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + kl(o, u++), i += yr(o, n, t, s, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function er(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return yr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function wc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ie = { current: null }, gr = { transition: null }, kc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: gr, ReactCurrentOwner: Bo };
function bu() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: er, forEach: function(e, n, t) {
  er(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return er(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return er(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = lt;
T.Fragment = uc;
T.Profiler = ac;
T.PureComponent = $o;
T.StrictMode = sc;
T.Suspense = pc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
T.act = bu;
T.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Bo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in n) Xu.call(n, s) && !Ju.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Yt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: fc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cc, _context: e }, e.Consumer = e;
};
T.createElement = qu;
T.createFactory = function(e) {
  var n = qu.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: dc, render: e };
};
T.isValidElement = Ho;
T.lazy = function(e) {
  return { $$typeof: hc, _payload: { _status: -1, _result: e }, _init: wc };
};
T.memo = function(e, n) {
  return { $$typeof: mc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = gr.transition;
  gr.transition = {};
  try {
    e();
  } finally {
    gr.transition = n;
  }
};
T.unstable_act = bu;
T.useCallback = function(e, n) {
  return ie.current.useCallback(e, n);
};
T.useContext = function(e) {
  return ie.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ie.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return ie.current.useEffect(e, n);
};
T.useId = function() {
  return ie.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return ie.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return ie.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return ie.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return ie.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return ie.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return ie.current.useRef(e);
};
T.useState = function(e) {
  return ie.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return ie.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return ie.current.useTransition();
};
T.version = "18.3.1";
Qu.exports = T;
var Tr = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sc = Tr, Ec = Symbol.for("react.element"), xc = Symbol.for("react.fragment"), Cc = Object.prototype.hasOwnProperty, _c = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Cc.call(n, r) && !Pc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Ec, type: e, key: o, ref: i, props: l, _owner: _c.current };
}
el.Fragment = xc;
el.jsx = es;
el.jsxs = es;
Wu.exports = el;
var se = Wu.exports, ns = { exports: {} }, ge = {}, ts = { exports: {} }, rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(x, N) {
    var z = x.length;
    x.push(N);
    e: for (; 0 < z; ) {
      var H = z - 1 >>> 1, Z = x[H];
      if (0 < l(Z, N)) x[H] = N, x[z] = Z, z = H;
      else break e;
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var N = x[0], z = x.pop();
    if (z !== N) {
      x[0] = z;
      e: for (var H = 0, Z = x.length, qt = Z >>> 1; H < qt; ) {
        var vn = 2 * (H + 1) - 1, gl = x[vn], yn = vn + 1, bt = x[yn];
        if (0 > l(gl, z)) yn < Z && 0 > l(bt, gl) ? (x[H] = bt, x[yn] = z, H = yn) : (x[H] = gl, x[vn] = z, H = vn);
        else if (yn < Z && 0 > l(bt, z)) x[H] = bt, x[yn] = z, H = yn;
        else break e;
      }
    }
    return N;
  }
  function l(x, N) {
    var z = x.sortIndex - N.sortIndex;
    return z !== 0 ? z : x.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= x) r(c), N.sortIndex = N.expirationTime, n(s, N);
      else break;
      N = t(c);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w) if (t(s) !== null) w = !0, vl(E);
    else {
      var N = t(c);
      N !== null && yl(v, N.startTime - x);
    }
  }
  function E(x, N) {
    w = !1, k && (k = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), m = t(s); m !== null && (!(m.expirationTime > N) || x && !Pe()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var Z = H(m.expirationTime <= N);
          N = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === t(s) && r(s), d(N);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var qt = !0;
      else {
        var vn = t(c);
        vn !== null && yl(v, vn.startTime - N), qt = !1;
      }
      return qt;
    } finally {
      m = null, p = z, g = !1;
    }
  }
  var C = !1, _ = null, P = -1, B = 5, L = -1;
  function Pe() {
    return !(e.unstable_now() - L < B);
  }
  function ut() {
    if (_ !== null) {
      var x = e.unstable_now();
      L = x;
      var N = !0;
      try {
        N = _(!0, x);
      } finally {
        N ? st() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var st;
  if (typeof a == "function") st = function() {
    a(ut);
  };
  else if (typeof MessageChannel < "u") {
    var Oi = new MessageChannel(), rc = Oi.port2;
    Oi.port1.onmessage = ut, st = function() {
      rc.postMessage(null);
    };
  } else st = function() {
    F(ut, 0);
  };
  function vl(x) {
    _ = x, C || (C = !0, st());
  }
  function yl(x, N) {
    P = F(function() {
      x(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, vl(E));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var z = p;
    p = N;
    try {
      return x();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, N) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var z = p;
    p = x;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(x, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, x) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = z + Z, x = { id: h++, callback: N, priorityLevel: x, startTime: z, expirationTime: Z, sortIndex: -1 }, z > H ? (x.sortIndex = z, n(c, x), t(s) === null && x === t(c) && (k ? (f(P), P = -1) : k = !0, yl(v, z - H))) : (x.sortIndex = Z, n(s, x), w || g || (w = !0, vl(E))), x;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(x) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return x.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(rs);
ts.exports = rs;
var Nc = ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc = Tr, ye = Nc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ls = /* @__PURE__ */ new Set(), Lt = {};
function Ln(e, n) {
  Jn(e, n), Jn(e + "Capture", n);
}
function Jn(e, n) {
  for (Lt[e] = n, e = 0; e < n.length; e++) ls.add(n[e]);
}
var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kl = Object.prototype.hasOwnProperty, Tc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ui = {}, Ai = {};
function Lc(e) {
  return Kl.call(Ai, e) ? !0 : Kl.call(Ui, e) ? !1 : Tc.test(e) ? Ai[e] = !0 : (Ui[e] = !0, !1);
}
function Mc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rc(e, n, t, r) {
  if (n === null || typeof n > "u" || Mc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !n;
    case 4:
      return n === !1;
    case 5:
      return isNaN(n);
    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}
function ue(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new ue(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  b[n] = new ue(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wo = /[\-:]([a-z])/g;
function Qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Wo,
    Qo
  );
  b[n] = new ue(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Wo, Qo);
  b[n] = new ue(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Wo, Qo);
  b[n] = new ue(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ko(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Rc(n, t, l, r) && (t = null), r || l === null ? Lc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ze = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nr = Symbol.for("react.element"), Dn = Symbol.for("react.portal"), On = Symbol.for("react.fragment"), Yo = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), os = Symbol.for("react.provider"), is = Symbol.for("react.context"), Zo = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), Go = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), us = Symbol.for("react.offscreen"), $i = Symbol.iterator;
function at(e) {
  return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $ = Object.assign, Sl;
function yt(e) {
  if (Sl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    Sl = n && n[1] || "";
  }
  return `
` + Sl + e;
}
var El = !1;
function xl(e, n) {
  if (!e || El) return "";
  El = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) if (n = function() {
      throw Error();
    }, Object.defineProperty(n.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(n, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (c) {
        r = c;
      }
      e.call(n.prototype);
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
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    El = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? yt(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return yt(e.type);
    case 16:
      return yt("Lazy");
    case 13:
      return yt("Suspense");
    case 19:
      return yt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xl(e.type, !1), e;
    case 11:
      return e = xl(e.type.render, !1), e;
    case 1:
      return e = xl(e.type, !0), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Dn:
      return "Portal";
    case Yl:
      return "Profiler";
    case Yo:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case is:
      return (e.displayName || "Context") + ".Consumer";
    case os:
      return (e._context.displayName || "Context") + ".Provider";
    case Zo:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Go:
      return n = e.displayName || null, n !== null ? n : Xl(e.type) || "Memo";
    case Xe:
      n = e._payload, e = e._init;
      try {
        return Xl(e(n));
      } catch {
      }
  }
  return null;
}
function Oc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xl(n);
    case 8:
      return n === Yo ? "StrictMode" : "Mode";
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
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function fn(e) {
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
function ss(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Ic(e) {
  var n = ss(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function tr(e) {
  e._valueTracker || (e._valueTracker = Ic(e));
}
function as(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = ss(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Lr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, n) {
  var t = n.checked;
  return $({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Vi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = fn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function cs(e, n) {
  n = n.checked, n != null && Ko(e, "checked", n, !1);
}
function ql(e, n) {
  cs(e, n);
  var t = fn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? bl(e, n.type, t) : n.hasOwnProperty("defaultValue") && bl(e, n.type, fn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Bi(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function bl(e, n, t) {
  (n !== "number" || Lr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var gt = Array.isArray;
function Qn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function eo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hi(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(y(92));
      if (gt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: fn(t) };
}
function fs(e, n) {
  var t = fn(n.value), r = fn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Wi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ds(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function no(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ds(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var rr, ps = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (rr = rr || document.createElement("div"), rr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Mt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var St = {
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
  strokeWidth: !0
}, Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(St).forEach(function(e) {
  Fc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), St[n] = St[e];
  });
});
function ms(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || St.hasOwnProperty(e) && St[e] ? ("" + n).trim() : n + "px";
}
function hs(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = ms(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var jc = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function to(e, n) {
  if (n) {
    if (jc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function ro(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
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
var lo = null;
function Xo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oo = null, Kn = null, Yn = null;
function Qi(e) {
  if (e = Xt(e)) {
    if (typeof oo != "function") throw Error(y(280));
    var n = e.stateNode;
    n && (n = ol(n), oo(e.stateNode, e.type, n));
  }
}
function vs(e) {
  Kn ? Yn ? Yn.push(e) : Yn = [e] : Kn = e;
}
function ys() {
  if (Kn) {
    var e = Kn, n = Yn;
    if (Yn = Kn = null, Qi(e), n) for (e = 0; e < n.length; e++) Qi(n[e]);
  }
}
function gs(e, n) {
  return e(n);
}
function ws() {
}
var Cl = !1;
function ks(e, n, t) {
  if (Cl) return e(n, t);
  Cl = !0;
  try {
    return gs(e, n, t);
  } finally {
    Cl = !1, (Kn !== null || Yn !== null) && (ws(), ys());
  }
}
function Rt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = ol(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var io = !1;
if (We) try {
  var ct = {};
  Object.defineProperty(ct, "passive", { get: function() {
    io = !0;
  } }), window.addEventListener("test", ct, ct), window.removeEventListener("test", ct, ct);
} catch {
  io = !1;
}
function Uc(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var Et = !1, Mr = null, Rr = !1, uo = null, Ac = { onError: function(e) {
  Et = !0, Mr = e;
} };
function $c(e, n, t, r, l, o, i, u, s) {
  Et = !1, Mr = null, Uc.apply(Ac, arguments);
}
function Vc(e, n, t, r, l, o, i, u, s) {
  if ($c.apply(this, arguments), Et) {
    if (Et) {
      var c = Mr;
      Et = !1, Mr = null;
    } else throw Error(y(198));
    Rr || (Rr = !0, uo = c);
  }
}
function Mn(e) {
  var n = e, t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Ss(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function Ki(e) {
  if (Mn(e) !== e) throw Error(y(188));
}
function Bc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Mn(e), n === null) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return Ki(l), e;
        if (o === r) return Ki(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Es(e) {
  return e = Bc(e), e !== null ? xs(e) : null;
}
function xs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = xs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Cs = ye.unstable_scheduleCallback, Yi = ye.unstable_cancelCallback, Hc = ye.unstable_shouldYield, Wc = ye.unstable_requestPaint, W = ye.unstable_now, Qc = ye.unstable_getCurrentPriorityLevel, Jo = ye.unstable_ImmediatePriority, _s = ye.unstable_UserBlockingPriority, Dr = ye.unstable_NormalPriority, Kc = ye.unstable_LowPriority, Ps = ye.unstable_IdlePriority, nl = null, je = null;
function Yc(e) {
  if (je && typeof je.onCommitFiberRoot == "function") try {
    je.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : Xc, Zc = Math.log, Gc = Math.LN2;
function Xc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zc(e) / Gc | 0) | 0;
}
var lr = 64, or = 4194304;
function wt(e) {
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
function Or(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = wt(u) : (o &= i, o !== 0 && (r = wt(o)));
  } else i = t & ~l, i !== 0 ? r = wt(i) : o !== 0 && (r = wt(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Me(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Jc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function qc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Me(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = Jc(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function so(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ns() {
  var e = lr;
  return lr <<= 1, !(lr & 4194240) && (lr = 64), e;
}
function _l(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Me(n), e[n] = t;
}
function bc(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Me(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function qo(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Me(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var R = 0;
function zs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ts, bo, Ls, Ms, Rs, ao = !1, ir = [], tn = null, rn = null, ln = null, Dt = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), qe = [], ef = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Zi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ot.delete(n.pointerId);
  }
}
function ft(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = Xt(n), n !== null && bo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function nf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return tn = ft(tn, e, n, t, r, l), !0;
    case "dragenter":
      return rn = ft(rn, e, n, t, r, l), !0;
    case "mouseover":
      return ln = ft(ln, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dt.set(o, ft(Dt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Ot.set(o, ft(Ot.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Ds(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = Mn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Ss(t), n !== null) {
          e.blockedOn = n, Rs(e.priority, function() {
            Ls(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = co(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      lo = r, t.target.dispatchEvent(r), lo = null;
    } else return n = Xt(t), n !== null && bo(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function Gi(e, n, t) {
  wr(e) && t.delete(n);
}
function tf() {
  ao = !1, tn !== null && wr(tn) && (tn = null), rn !== null && wr(rn) && (rn = null), ln !== null && wr(ln) && (ln = null), Dt.forEach(Gi), Ot.forEach(Gi);
}
function dt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, ao || (ao = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, tf)));
}
function It(e) {
  function n(l) {
    return dt(l, e);
  }
  if (0 < ir.length) {
    dt(ir[0], e);
    for (var t = 1; t < ir.length; t++) {
      var r = ir[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (tn !== null && dt(tn, e), rn !== null && dt(rn, e), ln !== null && dt(ln, e), Dt.forEach(n), Ot.forEach(n), t = 0; t < qe.length; t++) r = qe[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && (t = qe[0], t.blockedOn === null); ) Ds(t), t.blockedOn === null && qe.shift();
}
var Zn = Ze.ReactCurrentBatchConfig, Ir = !0;
function rf(e, n, t, r) {
  var l = R, o = Zn.transition;
  Zn.transition = null;
  try {
    R = 1, ei(e, n, t, r);
  } finally {
    R = l, Zn.transition = o;
  }
}
function lf(e, n, t, r) {
  var l = R, o = Zn.transition;
  Zn.transition = null;
  try {
    R = 4, ei(e, n, t, r);
  } finally {
    R = l, Zn.transition = o;
  }
}
function ei(e, n, t, r) {
  if (Ir) {
    var l = co(e, n, t, r);
    if (l === null) Il(e, n, r, Fr, t), Zi(e, r);
    else if (nf(l, e, n, t, r)) r.stopPropagation();
    else if (Zi(e, r), n & 4 && -1 < ef.indexOf(e)) {
      for (; l !== null; ) {
        var o = Xt(l);
        if (o !== null && Ts(o), o = co(e, n, t, r), o === null && Il(e, n, r, Fr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Il(e, n, r, null, t);
  }
}
var Fr = null;
function co(e, n, t, r) {
  if (Fr = null, e = Xo(r), e = kn(e), e !== null) if (n = Mn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Ss(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Fr = e, null;
}
function Os(e) {
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
      switch (Qc()) {
        case Jo:
          return 1;
        case _s:
          return 4;
        case Dr:
        case Kc:
          return 16;
        case Ps:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, ni = null, kr = null;
function Is() {
  if (kr) return kr;
  var e, n = ni, t = n.length, r, l = "value" in en ? en.value : en.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return kr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Sr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ur() {
  return !0;
}
function Xi() {
  return !1;
}
function we(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ur : Xi, this.isPropagationStopped = Xi, this;
  }
  return $(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ur);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ur);
  }, persist: function() {
  }, isPersistent: ur }), n;
}
var ot = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ti = we(ot), Gt = $({}, ot, { view: 0, detail: 0 }), of = we(Gt), Pl, Nl, pt, tl = $({}, Gt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ri, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pt && (pt && e.type === "mousemove" ? (Pl = e.screenX - pt.screenX, Nl = e.screenY - pt.screenY) : Nl = Pl = 0, pt = e), Pl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Nl;
} }), Ji = we(tl), uf = $({}, tl, { dataTransfer: 0 }), sf = we(uf), af = $({}, Gt, { relatedTarget: 0 }), zl = we(af), cf = $({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ff = we(cf), df = $({}, ot, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), pf = we(df), mf = $({}, ot, { data: 0 }), qi = we(mf), hf = {
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
  MozPrintableKey: "Unidentified"
}, vf = {
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
  224: "Meta"
}, yf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function gf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = yf[e]) ? !!n[e] : !1;
}
function ri() {
  return gf;
}
var wf = $({}, Gt, { key: function(e) {
  if (e.key) {
    var n = hf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Sr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ri, charCode: function(e) {
  return e.type === "keypress" ? Sr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Sr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), kf = we(wf), Sf = $({}, tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bi = we(Sf), Ef = $({}, Gt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ri }), xf = we(Ef), Cf = $({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), _f = we(Cf), Pf = $({}, tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Nf = we(Pf), zf = [9, 13, 27, 32], li = We && "CompositionEvent" in window, xt = null;
We && "documentMode" in document && (xt = document.documentMode);
var Tf = We && "TextEvent" in window && !xt, Fs = We && (!li || xt && 8 < xt && 11 >= xt), eu = " ", nu = !1;
function js(e, n) {
  switch (e) {
    case "keyup":
      return zf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Us(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function Lf(e, n) {
  switch (e) {
    case "compositionend":
      return Us(n);
    case "keypress":
      return n.which !== 32 ? null : (nu = !0, eu);
    case "textInput":
      return e = n.data, e === eu && nu ? null : e;
    default:
      return null;
  }
}
function Mf(e, n) {
  if (In) return e === "compositionend" || !li && js(e, n) ? (e = Is(), kr = ni = en = null, In = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Fs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Rf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function tu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Rf[e.type] : n === "textarea";
}
function As(e, n, t, r) {
  vs(r), n = jr(n, "onChange"), 0 < n.length && (t = new ti("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Ct = null, Ft = null;
function Df(e) {
  Xs(e, 0);
}
function rl(e) {
  var n = Un(e);
  if (as(n)) return e;
}
function Of(e, n) {
  if (e === "change") return n;
}
var $s = !1;
if (We) {
  var Tl;
  if (We) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var ru = document.createElement("div");
      ru.setAttribute("oninput", "return;"), Ll = typeof ru.oninput == "function";
    }
    Tl = Ll;
  } else Tl = !1;
  $s = Tl && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  Ct && (Ct.detachEvent("onpropertychange", Vs), Ft = Ct = null);
}
function Vs(e) {
  if (e.propertyName === "value" && rl(Ft)) {
    var n = [];
    As(n, Ft, e, Xo(e)), ks(Df, n);
  }
}
function If(e, n, t) {
  e === "focusin" ? (lu(), Ct = n, Ft = t, Ct.attachEvent("onpropertychange", Vs)) : e === "focusout" && lu();
}
function Ff(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return rl(Ft);
}
function jf(e, n) {
  if (e === "click") return rl(n);
}
function Uf(e, n) {
  if (e === "input" || e === "change") return rl(n);
}
function Af(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var De = typeof Object.is == "function" ? Object.is : Af;
function jt(e, n) {
  if (De(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Kl.call(n, l) || !De(e[l], n[l])) return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, n) {
  var t = ou(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ou(t);
  }
}
function Bs(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Hs() {
  for (var e = window, n = Lr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Lr(e.document);
  }
  return n;
}
function oi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function $f(e) {
  var n = Hs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Bs(t.ownerDocument.documentElement, t)) {
    if (r !== null && oi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = iu(t, o);
        var i = iu(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Vf = We && "documentMode" in document && 11 >= document.documentMode, Fn = null, fo = null, _t = null, po = !1;
function uu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  po || Fn == null || Fn !== Lr(r) || (r = Fn, "selectionStart" in r && oi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _t && jt(_t, r) || (_t = r, r = jr(fo, "onSelect"), 0 < r.length && (n = new ti("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Fn)));
}
function sr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var jn = { animationend: sr("Animation", "AnimationEnd"), animationiteration: sr("Animation", "AnimationIteration"), animationstart: sr("Animation", "AnimationStart"), transitionend: sr("Transition", "TransitionEnd") }, Ml = {}, Ws = {};
We && (Ws = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
function ll(e) {
  if (Ml[e]) return Ml[e];
  if (!jn[e]) return e;
  var n = jn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in Ws) return Ml[e] = n[t];
  return e;
}
var Qs = ll("animationend"), Ks = ll("animationiteration"), Ys = ll("animationstart"), Zs = ll("transitionend"), Gs = /* @__PURE__ */ new Map(), su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, n) {
  Gs.set(e, n), Ln(n, [e]);
}
for (var Rl = 0; Rl < su.length; Rl++) {
  var Dl = su[Rl], Bf = Dl.toLowerCase(), Hf = Dl[0].toUpperCase() + Dl.slice(1);
  pn(Bf, "on" + Hf);
}
pn(Qs, "onAnimationEnd");
pn(Ks, "onAnimationIteration");
pn(Ys, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Zs, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
function au(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, Vc(r, n, void 0, e), e.currentTarget = null;
}
function Xs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        au(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        au(l, u, c), o = s;
      }
    }
  }
  if (Rr) throw e = uo, Rr = !1, uo = null, e;
}
function O(e, n) {
  var t = n[go];
  t === void 0 && (t = n[go] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (Js(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), Js(t, e, r, n);
}
var ar = "_reactListening" + Math.random().toString(36).slice(2);
function Ut(e) {
  if (!e[ar]) {
    e[ar] = !0, ls.forEach(function(t) {
      t !== "selectionchange" && (Wf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[ar] || (n[ar] = !0, Ol("selectionchange", !1, n));
  }
}
function Js(e, n, t, r) {
  switch (Os(n)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = ei;
  }
  t = l.bind(null, n, t, e), l = void 0, !io || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = kn(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  ks(function() {
    var c = o, h = Xo(t), m = [];
    e: {
      var p = Gs.get(e);
      if (p !== void 0) {
        var g = ti, w = e;
        switch (e) {
          case "keypress":
            if (Sr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = kf;
            break;
          case "focusin":
            w = "focus", g = zl;
            break;
          case "focusout":
            w = "blur", g = zl;
            break;
          case "beforeblur":
          case "afterblur":
            g = zl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ji;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = xf;
            break;
          case Qs:
          case Ks:
          case Ys:
            g = ff;
            break;
          case Zs:
            g = _f;
            break;
          case "scroll":
            g = of;
            break;
          case "wheel":
            g = Nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bi;
        }
        var k = (n & 4) !== 0, F = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Rt(a, f), v != null && k.push(At(a, v, d)))), F) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, t, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== lo && (w = t.relatedTarget || t.fromElement) && (kn(w) || w[Qe])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? kn(w) : null, w !== null && (F = Mn(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = Ji, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = bi, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? p : Un(g), d = w == null ? p : Un(w), p = new k(v, a + "leave", g, t, h), p.target = F, p.relatedTarget = d, v = null, kn(h) === c && (k = new k(f, a + "enter", w, t, h), k.target = d, k.relatedTarget = F, v = k), F = v, g && w) n: {
            for (k = g, f = w, a = 0, d = k; d; d = Rn(d)) a++;
            for (d = 0, v = f; v; v = Rn(v)) d++;
            for (; 0 < a - d; ) k = Rn(k), a--;
            for (; 0 < d - a; ) f = Rn(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = Rn(k), f = Rn(f);
            }
            k = null;
          }
          else k = null;
          g !== null && cu(m, p, g, k, !1), w !== null && F !== null && cu(m, F, w, k, !0);
        }
      }
      e: {
        if (p = c ? Un(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Of;
        else if (tu(p)) if ($s) E = Uf;
        else {
          E = Ff;
          var C = If;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = jf);
        if (E && (E = E(e, c))) {
          As(m, E, t, h);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && bl(p, "number", p.value);
      }
      switch (C = c ? Un(c) : window, e) {
        case "focusin":
          (tu(C) || C.contentEditable === "true") && (Fn = C, fo = c, _t = null);
          break;
        case "focusout":
          _t = fo = Fn = null;
          break;
        case "mousedown":
          po = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          po = !1, uu(m, t, h);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          uu(m, t, h);
      }
      var _;
      if (li) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else In ? js(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (Fs && t.locale !== "ko" && (In || P !== "onCompositionStart" ? P === "onCompositionEnd" && In && (_ = Is()) : (en = h, ni = "value" in en ? en.value : en.textContent, In = !0)), C = jr(c, P), 0 < C.length && (P = new qi(P, e, null, t, h), m.push({ event: P, listeners: C }), _ ? P.data = _ : (_ = Us(t), _ !== null && (P.data = _)))), (_ = Tf ? Lf(e, t) : Mf(e, t)) && (c = jr(c, "onBeforeInput"), 0 < c.length && (h = new qi("onBeforeInput", "beforeinput", null, t, h), m.push({ event: h, listeners: c }), h.data = _));
    }
    Xs(m, n);
  });
}
function At(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function jr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Rt(e, t), o != null && r.unshift(At(e, o, l)), o = Rt(e, n), o != null && r.push(At(e, o, l))), e = e.return;
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Rt(t, o), s != null && i.unshift(At(t, s, u))) : l || (s = Rt(t, o), s != null && i.push(At(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Qf = /\r\n?/g, Kf = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Qf, `
`).replace(Kf, "");
}
function cr(e, n, t) {
  if (n = fu(n), fu(e) !== n && t) throw Error(y(425));
}
function Ur() {
}
var mo = null, ho = null;
function vo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var yo = typeof setTimeout == "function" ? setTimeout : void 0, Yf = typeof clearTimeout == "function" ? clearTimeout : void 0, du = typeof Promise == "function" ? Promise : void 0, Zf = typeof queueMicrotask == "function" ? queueMicrotask : typeof du < "u" ? function(e) {
  return du.resolve(null).then(e).catch(Gf);
} : yo;
function Gf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Fl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), It(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  It(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function pu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var it = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + it, $t = "__reactProps$" + it, Qe = "__reactContainer$" + it, go = "__reactEvents$" + it, Xf = "__reactListeners$" + it, Jf = "__reactHandles$" + it;
function kn(e) {
  var n = e[Fe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Qe] || t[Fe]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = pu(e); e !== null; ) {
        if (t = e[Fe]) return t;
        e = pu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function Xt(e) {
  return e = e[Fe] || e[Qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ol(e) {
  return e[$t] || null;
}
var wo = [], An = -1;
function mn(e) {
  return { current: e };
}
function I(e) {
  0 > An || (e.current = wo[An], wo[An] = null, An--);
}
function D(e, n) {
  An++, wo[An] = e.current, e.current = n;
}
var dn = {}, re = mn(dn), fe = mn(!1), _n = dn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Ar() {
  I(fe), I(re);
}
function mu(e, n, t) {
  if (re.current !== dn) throw Error(y(168));
  D(re, n), D(fe, t);
}
function qs(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Oc(e) || "Unknown", l));
  return $({}, t, r);
}
function $r(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, _n = re.current, D(re, e), D(fe, fe.current), !0;
}
function hu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t ? (e = qs(e, n, _n), r.__reactInternalMemoizedMergedChildContext = e, I(fe), I(re), D(re, e)) : I(fe), D(fe, t);
}
var $e = null, il = !1, jl = !1;
function bs(e) {
  $e === null ? $e = [e] : $e.push(e);
}
function qf(e) {
  il = !0, bs(e);
}
function hn() {
  if (!jl && $e !== null) {
    jl = !0;
    var e = 0, n = R;
    try {
      var t = $e;
      for (R = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $e = null, il = !1;
    } catch (l) {
      throw $e !== null && ($e = $e.slice(e + 1)), Cs(Jo, hn), l;
    } finally {
      R = n, jl = !1;
    }
  }
  return null;
}
var $n = [], Vn = 0, Vr = null, Br = 0, ke = [], Se = 0, Pn = null, Ve = 1, Be = "";
function gn(e, n) {
  $n[Vn++] = Br, $n[Vn++] = Vr, Vr = e, Br = n;
}
function ea(e, n, t) {
  ke[Se++] = Ve, ke[Se++] = Be, ke[Se++] = Pn, Pn = e;
  var r = Ve;
  e = Be;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Me(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Me(n) + l | t << l | r, Be = o + e;
  } else Ve = 1 << o | t << l | r, Be = e;
}
function ii(e) {
  e.return !== null && (gn(e, 1), ea(e, 1, 0));
}
function ui(e) {
  for (; e === Vr; ) Vr = $n[--Vn], $n[Vn] = null, Br = $n[--Vn], $n[Vn] = null;
  for (; e === Pn; ) Pn = ke[--Se], ke[Se] = null, Be = ke[--Se], ke[Se] = null, Ve = ke[--Se], ke[Se] = null;
}
var ve = null, he = null, j = !1, Le = null;
function na(e, n) {
  var t = Ee(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function vu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, he = on(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, he = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Pn !== null ? { id: Ve, overflow: Be } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, he = null, !0) : !1;
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function So(e) {
  if (j) {
    var n = he;
    if (n) {
      var t = n;
      if (!vu(e, n)) {
        if (ko(e)) throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && vu(e, n) ? na(r, t) : (e.flags = e.flags & -4097 | 2, j = !1, ve = e);
      }
    } else {
      if (ko(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, j = !1, ve = e;
    }
  }
}
function yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function fr(e) {
  if (e !== ve) return !1;
  if (!j) return yu(e), j = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !vo(e.type, e.memoizedProps)), n && (n = he)) {
    if (ko(e)) throw ta(), Error(y(418));
    for (; n; ) na(e, n), n = on(n.nextSibling);
  }
  if (yu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ta() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function bn() {
  he = ve = null, j = !1;
}
function si(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var bf = Ze.ReactCurrentBatchConfig;
function mt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function dr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function gu(e) {
  var n = e._init;
  return n(e._payload);
}
function ra(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = cn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Wl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === On ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Xe && gu(E) === a.type) ? (v = l(a, d.props), v.ref = mt(f, a, d), v.return = f, v) : (v = zr(d.type, d.key, d.props, null, f.mode, v), v.ref = mt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Cn(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Wl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return d = zr(a.type, a.key, a.props, null, f.mode, d), d.ref = mt(f, null, a), d.return = f, d;
        case Dn:
          return a = Ql(a, f.mode, d), a.return = f, a;
        case Xe:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (gt(a) || at(a)) return a = Cn(a, f.mode, d, null), a.return = f, a;
      dr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case nr:
          return d.key === E ? s(f, a, d, v) : null;
        case Dn:
          return d.key === E ? c(f, a, d, v) : null;
        case Xe:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (gt(d) || at(d)) return E !== null ? null : h(f, a, d, v, null);
      dr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Dn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Xe:
          var C = v._init;
          return g(f, a, d, C(v._payload), E);
      }
      if (gt(v) || at(v)) return f = f.get(d) || null, h(a, f, v, E, null);
      dr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, C = null, _ = a, P = a = 0, B = null; _ !== null && P < d.length; P++) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var L = p(f, _, d[P], v);
      if (L === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && L.alternate === null && n(f, _), a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L, _ = B;
    }
    if (P === d.length) return t(f, _), j && gn(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++) _ = m(f, d[P], v), _ !== null && (a = o(_, a, P), C === null ? E = _ : C.sibling = _, C = _);
      return j && gn(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++) B = g(_, f, P, d[P], v), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? P : B.key), a = o(B, a, P), C === null ? E = B : C.sibling = B, C = B);
    return e && _.forEach(function(Pe) {
      return n(f, Pe);
    }), j && gn(f, P), E;
  }
  function k(f, a, d, v) {
    var E = at(d);
    if (typeof E != "function") throw Error(y(150));
    if (d = E.call(d), d == null) throw Error(y(151));
    for (var C = E = null, _ = a, P = a = 0, B = null, L = d.next(); _ !== null && !L.done; P++, L = d.next()) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var Pe = p(f, _, L.value, v);
      if (Pe === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && Pe.alternate === null && n(f, _), a = o(Pe, a, P), C === null ? E = Pe : C.sibling = Pe, C = Pe, _ = B;
    }
    if (L.done) return t(
      f,
      _
    ), j && gn(f, P), E;
    if (_ === null) {
      for (; !L.done; P++, L = d.next()) L = m(f, L.value, v), L !== null && (a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L);
      return j && gn(f, P), E;
    }
    for (_ = r(f, _); !L.done; P++, L = d.next()) L = g(_, f, P, L.value, v), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? P : L.key), a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L);
    return e && _.forEach(function(ut) {
      return n(f, ut);
    }), j && gn(f, P), E;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === On && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case nr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === On) {
                  if (C.tag === 7) {
                    t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Xe && gu(E) === C.type) {
                  t(f, C.sibling), a = l(C, d.props), a.ref = mt(f, C, d), a.return = f, f = a;
                  break e;
                }
                t(f, C);
                break;
              } else n(f, C);
              C = C.sibling;
            }
            d.type === On ? (a = Cn(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = zr(d.type, d.key, d.props, null, f.mode, v), v.ref = mt(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Dn:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                t(f, a);
                break;
              }
              else n(f, a);
              a = a.sibling;
            }
            a = Ql(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case Xe:
          return C = d._init, F(f, a, C(d._payload), v);
      }
      if (gt(d)) return w(f, a, d, v);
      if (at(d)) return k(f, a, d, v);
      dr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Wl(d, f.mode, v), a.return = f, f = a), i(f)) : t(f, a);
  }
  return F;
}
var et = ra(!0), la = ra(!1), Hr = mn(null), Wr = null, Bn = null, ai = null;
function ci() {
  ai = Bn = Wr = null;
}
function fi(e) {
  var n = Hr.current;
  I(Hr), e._currentValue = n;
}
function Eo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function Gn(e, n) {
  Wr = e, ai = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function Ce(e) {
  var n = e._currentValue;
  if (ai !== e) if (e = { context: e, memoizedValue: n, next: null }, Bn === null) {
    if (Wr === null) throw Error(y(308));
    Bn = e, Wr.dependencies = { lanes: 0, firstContext: e };
  } else Bn = Bn.next = e;
  return n;
}
var Sn = null;
function di(e) {
  Sn === null ? Sn = [e] : Sn.push(e);
}
function oa(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, di(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ke(e, r);
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function pi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ia(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function He(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ke(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, di(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ke(e, t);
}
function Er(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qo(e, t);
  }
}
function wu(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Qr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = c = s = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (p = n, g = t, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null) break e;
              m = $({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = g, s = m) : h = h.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    zn |= i, e.lanes = i, e.memoizedState = m;
  }
}
function ku(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var Jt = {}, Ue = mn(Jt), Vt = mn(Jt), Bt = mn(Jt);
function En(e) {
  if (e === Jt) throw Error(y(174));
  return e;
}
function mi(e, n) {
  switch (D(Bt, n), D(Vt, e), D(Ue, Jt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : no(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = no(n, e);
  }
  I(Ue), D(Ue, n);
}
function nt() {
  I(Ue), I(Vt), I(Bt);
}
function ua(e) {
  En(Bt.current);
  var n = En(Ue.current), t = no(n, e.type);
  n !== t && (D(Vt, e), D(Ue, t));
}
function hi(e) {
  Vt.current === e && (I(Ue), I(Vt));
}
var U = mn(0);
function Kr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Ul = [];
function vi() {
  for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var xr = Ze.ReactCurrentDispatcher, Al = Ze.ReactCurrentBatchConfig, Nn = 0, A = null, K = null, G = null, Yr = !1, Pt = !1, Ht = 0, ed = 0;
function ee() {
  throw Error(y(321));
}
function yi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!De(e[t], n[t])) return !1;
  return !0;
}
function gi(e, n, t, r, l, o) {
  if (Nn = o, A = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, xr.current = e === null || e.memoizedState === null ? ld : od, e = t(r, l), Pt) {
    o = 0;
    do {
      if (Pt = !1, Ht = 0, 25 <= o) throw Error(y(301));
      o += 1, G = K = null, n.updateQueue = null, xr.current = id, e = t(r, l);
    } while (Pt);
  }
  if (xr.current = Zr, n = K !== null && K.next !== null, Nn = 0, G = K = A = null, Yr = !1, n) throw Error(y(300));
  return e;
}
function wi() {
  var e = Ht !== 0;
  return Ht = 0, e;
}
function Ie() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return G === null ? A.memoizedState = G = e : G = G.next = e, G;
}
function _e() {
  if (K === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var n = G === null ? A.memoizedState : G.next;
  if (n !== null) G = n, K = e;
  else {
    if (e === null) throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, G === null ? A.memoizedState = G = e : G = G.next = e;
  }
  return G;
}
function Wt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function $l(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((Nn & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, A.lanes |= h, zn |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, De(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, A.lanes |= o, zn |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Vl(e) {
  var n = _e(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    De(o, n.memoizedState) || (ce = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function sa() {
}
function aa(e, n) {
  var t = A, r = _e(), l = n(), o = !De(r.memoizedState, l);
  if (o && (r.memoizedState = l, ce = !0), r = r.queue, ki(da.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || G !== null && G.memoizedState.tag & 1) {
    if (t.flags |= 2048, Qt(9, fa.bind(null, t, r, l, n), void 0, null), X === null) throw Error(y(349));
    Nn & 30 || ca(t, n, l);
  }
  return l;
}
function ca(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = A.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, A.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function fa(e, n, t, r) {
  n.value = t, n.getSnapshot = r, pa(n) && ma(e);
}
function da(e, n, t) {
  return t(function() {
    pa(n) && ma(e);
  });
}
function pa(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !De(e, t);
  } catch {
    return !0;
  }
}
function ma(e) {
  var n = Ke(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Su(e) {
  var n = Ie();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wt, lastRenderedState: e }, n.queue = e, e = e.dispatch = rd.bind(null, A, e), [n.memoizedState, e];
}
function Qt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = A.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, A.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function ha() {
  return _e().memoizedState;
}
function Cr(e, n, t, r) {
  var l = Ie();
  A.flags |= e, l.memoizedState = Qt(1 | n, t, void 0, r === void 0 ? null : r);
}
function ul(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (o = i.destroy, r !== null && yi(r, i.deps)) {
      l.memoizedState = Qt(n, t, o, r);
      return;
    }
  }
  A.flags |= e, l.memoizedState = Qt(1 | n, t, o, r);
}
function Eu(e, n) {
  return Cr(8390656, 8, e, n);
}
function ki(e, n) {
  return ul(2048, 8, e, n);
}
function va(e, n) {
  return ul(4, 2, e, n);
}
function ya(e, n) {
  return ul(4, 4, e, n);
}
function ga(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function wa(e, n, t) {
  return t = t != null ? t.concat([e]) : null, ul(4, 4, ga.bind(null, n, e), t);
}
function Si() {
}
function ka(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && yi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Sa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && yi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Ea(e, n, t) {
  return Nn & 21 ? (De(t, n) || (t = Ns(), A.lanes |= t, zn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
}
function nd(e, n) {
  var t = R;
  R = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), n();
  } finally {
    R = t, Al.transition = r;
  }
}
function xa() {
  return _e().memoizedState;
}
function td(e, n, t) {
  var r = an(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ca(e)) _a(n, t);
  else if (t = oa(e, n, t, r), t !== null) {
    var l = oe();
    Re(t, e, r, l), Pa(t, n, r);
  }
}
function rd(e, n, t) {
  var r = an(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ca(e)) _a(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, De(u, i)) {
        var s = n.interleaved;
        s === null ? (l.next = l, di(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = oa(e, n, l, r), t !== null && (l = oe(), Re(t, e, r, l), Pa(t, n, r));
  }
}
function Ca(e) {
  var n = e.alternate;
  return e === A || n !== null && n === A;
}
function _a(e, n) {
  Pt = Yr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Pa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, qo(e, t);
  }
}
var Zr = { readContext: Ce, useCallback: ee, useContext: ee, useEffect: ee, useImperativeHandle: ee, useInsertionEffect: ee, useLayoutEffect: ee, useMemo: ee, useReducer: ee, useRef: ee, useState: ee, useDebugValue: ee, useDeferredValue: ee, useTransition: ee, useMutableSource: ee, useSyncExternalStore: ee, useId: ee, unstable_isNewReconciler: !1 }, ld = { readContext: Ce, useCallback: function(e, n) {
  return Ie().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ce, useEffect: Eu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Cr(
    4194308,
    4,
    ga.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Cr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Cr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Ie();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Ie();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = td.bind(null, A, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Ie();
  return e = { current: e }, n.memoizedState = e;
}, useState: Su, useDebugValue: Si, useDeferredValue: function(e) {
  return Ie().memoizedState = e;
}, useTransition: function() {
  var e = Su(!1), n = e[0];
  return e = nd.bind(null, e[1]), Ie().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = A, l = Ie();
  if (j) {
    if (t === void 0) throw Error(y(407));
    t = t();
  } else {
    if (t = n(), X === null) throw Error(y(349));
    Nn & 30 || ca(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Eu(da.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Qt(9, fa.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = Ie(), n = X.identifierPrefix;
  if (j) {
    var t = Be, r = Ve;
    t = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Ht++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = ed++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, od = {
  readContext: Ce,
  useCallback: ka,
  useContext: Ce,
  useEffect: ki,
  useImperativeHandle: wa,
  useInsertionEffect: va,
  useLayoutEffect: ya,
  useMemo: Sa,
  useReducer: $l,
  useRef: ha,
  useState: function() {
    return $l(Wt);
  },
  useDebugValue: Si,
  useDeferredValue: function(e) {
    var n = _e();
    return Ea(n, K.memoizedState, e);
  },
  useTransition: function() {
    var e = $l(Wt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: sa,
  useSyncExternalStore: aa,
  useId: xa,
  unstable_isNewReconciler: !1
}, id = { readContext: Ce, useCallback: ka, useContext: Ce, useEffect: ki, useImperativeHandle: wa, useInsertionEffect: va, useLayoutEffect: ya, useMemo: Sa, useReducer: Vl, useRef: ha, useState: function() {
  return Vl(Wt);
}, useDebugValue: Si, useDeferredValue: function(e) {
  var n = _e();
  return K === null ? n.memoizedState = e : Ea(n, K.memoizedState, e);
}, useTransition: function() {
  var e = Vl(Wt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: sa, useSyncExternalStore: aa, useId: xa, unstable_isNewReconciler: !1 };
function ze(e, n) {
  if (e && e.defaultProps) {
    n = $({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function xo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : $({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = an(e), o = He(r, l);
  o.payload = n, t != null && (o.callback = t), n = un(e, o, l), n !== null && (Re(n, e, l, r), Er(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = an(e), o = He(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = un(e, o, l), n !== null && (Re(n, e, l, r), Er(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = oe(), r = an(e), l = He(t, r);
  l.tag = 2, n != null && (l.callback = n), n = un(e, l, r), n !== null && (Re(n, e, r, t), Er(n, e, r));
} };
function xu(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !jt(t, r) || !jt(l, o) : !0;
}
function Na(e, n, t) {
  var r = !1, l = dn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Ce(o) : (l = de(n) ? _n : re.current, r = n.contextTypes, o = (r = r != null) ? qn(e, l) : dn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Cu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && sl.enqueueReplaceState(n, n.state, null);
}
function Co(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, pi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Ce(o) : (o = de(n) ? _n : re.current, l.context = qn(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (xo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && sl.enqueueReplaceState(l, l.state, null), Qr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Dc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function _o(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, n, t) {
  t = He(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    Xr || (Xr = !0, Io = r), _o(e, n);
  }, t;
}
function Ta(e, n, t) {
  t = He(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      _o(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    _o(e, n), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function _u(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ud();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Sd.bind(null, e, n, t), n.then(e, e));
}
function Pu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = He(-1, 1), n.tag = 2, un(t, n, 1))), t.lanes |= 1), e);
}
var sd = Ze.ReactCurrentOwner, ce = !1;
function le(e, n, t, r) {
  n.child = e === null ? la(n, null, t, r) : et(n, e.child, t, r);
}
function zu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Gn(n, l), r = gi(e, n, t, r, o, l), t = wi(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (j && t && ii(n), n.flags |= 1, le(e, n, r, l), n.child);
}
function Tu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Ti(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, La(e, n, o, r, l)) : (e = zr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : jt, t(i, r) && e.ref === n.ref) return Ye(e, n, l);
  }
  return n.flags |= 1, e = cn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function La(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (jt(o, r) && e.ref === n.ref) if (ce = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ce = !0);
    else return n.lanes = e.lanes, Ye(e, n, l);
  }
  return Po(e, n, t, r, l);
}
function Ma(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(Wn, me), me |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, D(Wn, me), me |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, D(Wn, me), me |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, D(Wn, me), me |= r;
  return le(e, n, l, t), n.child;
}
function Ra(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Po(e, n, t, r, l) {
  var o = de(t) ? _n : re.current;
  return o = qn(n, o), Gn(n, l), t = gi(e, n, t, r, o, l), r = wi(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (j && r && ii(n), n.flags |= 1, le(e, n, t, l), n.child);
}
function Lu(e, n, t, r, l) {
  if (de(t)) {
    var o = !0;
    $r(n);
  } else o = !1;
  if (Gn(n, l), n.stateNode === null) _r(e, n), Na(n, t, r), Co(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = de(t) ? _n : re.current, c = qn(n, c));
    var h = t.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Cu(n, i, r, c), Je = !1;
    var p = n.memoizedState;
    i.state = p, Qr(n, r, i, l), s = n.memoizedState, u !== r || p !== s || fe.current || Je ? (typeof h == "function" && (xo(n, t, h, r), s = n.memoizedState), (u = Je || xu(n, t, u, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, ia(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : ze(n.type, u), i.props = c, m = n.pendingProps, p = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = de(t) ? _n : re.current, s = qn(n, s));
    var g = t.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && Cu(n, i, r, s), Je = !1, p = n.memoizedState, i.state = p, Qr(n, r, i, l);
    var w = n.memoizedState;
    u !== m || p !== w || fe.current || Je ? (typeof g == "function" && (xo(n, t, g, r), w = n.memoizedState), (c = Je || xu(n, t, c, r, p, w, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return No(e, n, t, r, o, l);
}
function No(e, n, t, r, l, o) {
  Ra(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && hu(n, t, !1), Ye(e, n, o);
  r = n.stateNode, sd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = et(n, e.child, null, o), n.child = et(n, null, u, o)) : le(e, n, u, o), n.memoizedState = r.state, l && hu(n, t, !0), n.child;
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext ? mu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && mu(e, n.context, !1), mi(e, n.containerInfo);
}
function Mu(e, n, t, r, l) {
  return bn(), si(l), n.flags |= 256, le(e, n, t, r), n.child;
}
var zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function To(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Oa(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(U, l & 1), e === null)
    return So(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = fl(i, r, 0, null), e = Cn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = To(t), n.memoizedState = zo, e) : Ei(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return ad(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = cn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = cn(u, o) : (o = Cn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? To(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = zo, r;
  }
  return o = e.child, e = o.sibling, r = cn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ei(e, n) {
  return n = fl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function pr(e, n, t, r) {
  return r !== null && si(r), et(n, e.child, null, t), e = Ei(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function ad(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Bl(Error(y(422))), pr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = fl({ mode: "visible", children: r.children }, l, 0, null), o = Cn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && et(n, e.child, null, i), n.child.memoizedState = To(i), n.memoizedState = zo, o);
  if (!(n.mode & 1)) return pr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(y(419)), r = Bl(o, r, void 0), pr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ce || u) {
    if (r = X, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Re(r, e, l, -1));
    }
    return zi(), r = Bl(Error(y(421))), pr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Ed.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, he = on(l.nextSibling), ve = n, j = !0, Le = null, e !== null && (ke[Se++] = Ve, ke[Se++] = Be, ke[Se++] = Pn, Ve = e.id, Be = e.overflow, Pn = n), n = Ei(n, r.children), n.flags |= 4096, n);
}
function Ru(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Eo(e.return, n, t);
}
function Hl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Ia(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (le(e, n, r.children, t), r = U.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ru(e, t, n);
      else if (e.tag === 19) Ru(e, t, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (D(U, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && Kr(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Hl(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Kr(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Hl(n, !0, t, null, o);
      break;
    case "together":
      Hl(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function _r(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Ye(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), zn |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = cn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function cd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), bn();
      break;
    case 5:
      ua(n);
      break;
    case 1:
      de(n.type) && $r(n);
      break;
    case 4:
      mi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      D(Hr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (D(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Oa(e, n, t) : (D(U, U.current & 1), e = Ye(e, n, t), e !== null ? e.sibling : null);
      D(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return Ia(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(U, U.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ma(e, n, t);
  }
  return Ye(e, n, t);
}
var Fa, Lo, ja, Ua;
Fa = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Lo = function() {
};
ja = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, En(Ue.current);
    var o = null;
    switch (t) {
      case "input":
        l = Jl(e, l), r = Jl(e, r), o = [];
        break;
      case "select":
        l = $({}, l, { value: void 0 }), r = $({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = eo(e, l), r = eo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ur);
    }
    to(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Lt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Lt.hasOwnProperty(c) ? (s != null && c === "onScroll" && O("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ua = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function ht(e, n) {
  if (!j) switch (e.tailMode) {
    case "hidden":
      n = e.tail;
      for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
      t === null ? e.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function fd(e, n, t) {
  var r = n.pendingProps;
  switch (ui(n), n.tag) {
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
      return ne(n), null;
    case 1:
      return de(n.type) && Ar(), ne(n), null;
    case 3:
      return r = n.stateNode, nt(), I(fe), I(re), vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Le !== null && (Uo(Le), Le = null))), Lo(e, n), ne(n), null;
    case 5:
      hi(n);
      var l = En(Bt.current);
      if (t = n.type, e !== null && n.stateNode != null) ja(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return ne(n), null;
        }
        if (e = En(Ue.current), fr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Fe] = n, r[$t] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kt.length; l++) O(kt[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O(
                "error",
                r
              ), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Vi(r, o), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, O("invalid", r);
              break;
            case "textarea":
              Hi(r, o), O("invalid", r);
          }
          to(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && cr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && cr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Lt.hasOwnProperty(i) && u != null && i === "onScroll" && O("scroll", r);
          }
          switch (t) {
            case "input":
              tr(r), Bi(r, o, !0);
              break;
            case "textarea":
              tr(r), Wi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ur);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ds(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Fe] = n, e[$t] = r, Fa(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = ro(t, r), t) {
              case "dialog":
                O("cancel", e), O("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kt.length; l++) O(kt[l], e);
                l = r;
                break;
              case "source":
                O("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                O(
                  "error",
                  e
                ), O("load", e), l = r;
                break;
              case "details":
                O("toggle", e), l = r;
                break;
              case "input":
                Vi(e, r), l = Jl(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = $({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Hi(e, r), l = eo(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            to(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? hs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ps(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Lt.hasOwnProperty(o) ? s != null && o === "onScroll" && O("scroll", e) : s != null && Ko(e, o, s, i));
            }
            switch (t) {
              case "input":
                tr(e), Bi(e, r, !1);
                break;
              case "textarea":
                tr(e), Wi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Qn(e, !!r.multiple, o, !1) : r.defaultValue != null && Qn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null) Ua(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (t = En(Bt.current), En(Ue.current), fr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Fe] = n, (o = r.nodeValue !== t) && (e = ve, e !== null)) switch (e.tag) {
            case 3:
              cr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && cr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Fe] = n, n.stateNode = r;
      }
      return ne(n), null;
    case 13:
      if (I(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (j && he !== null && n.mode & 1 && !(n.flags & 128)) ta(), bn(), n.flags |= 98560, o = !1;
        else if (o = fr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[Fe] = n;
          } else bn(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ne(n), o = !1;
        } else Le !== null && (Uo(Le), Le = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : zi())), n.updateQueue !== null && (n.flags |= 4), ne(n), null);
    case 4:
      return nt(), Lo(e, n), e === null && Ut(n.stateNode.containerInfo), ne(n), null;
    case 10:
      return fi(n.type._context), ne(n), null;
    case 17:
      return de(n.type) && Ar(), ne(n), null;
    case 19:
      if (I(U), o = n.memoizedState, o === null) return ne(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) ht(o, !1);
      else {
        if (Y !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = Kr(e), i !== null) {
            for (n.flags |= 128, ht(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return D(U, U.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && W() > rt && (n.flags |= 128, r = !0, ht(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = Kr(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ht(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !j) return ne(n), null;
        } else 2 * W() - o.renderingStartTime > rt && t !== 1073741824 && (n.flags |= 128, r = !0, ht(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = W(), n.sibling = null, t = U.current, D(U, r ? t & 1 | 2 : t & 1), n) : (ne(n), null);
    case 22:
    case 23:
      return Ni(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? me & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ne(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function dd(e, n) {
  switch (ui(n), n.tag) {
    case 1:
      return de(n.type) && Ar(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return nt(), I(fe), I(re), vi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return hi(n), null;
    case 13:
      if (I(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(y(340));
        bn();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return I(U), null;
    case 4:
      return nt(), null;
    case 10:
      return fi(n.type._context), null;
    case 22:
    case 23:
      return Ni(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mr = !1, te = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, S = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    V(e, n, r);
  }
  else t.current = null;
}
function Mo(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Du = !1;
function md(e, n) {
  if (mo = Ir, e = Hs(), oi(e)) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      t = (t = e.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break e;
        }
        var i = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
        n: for (; ; ) {
          for (var g; m !== t || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break n;
            if (p === t && ++c === l && (u = i), p === o && ++h === r && (s = i), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        t = u === -1 || s === -1 ? null : { start: u, end: s };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (ho = { focusedElem: e, selectionRange: t }, Ir = !1, S = n; S !== null; ) if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, S = e;
  else for (; S !== null; ) {
    n = S;
    try {
      var w = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, F = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : ze(n.type, k), F);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = n.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      V(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, S = e;
      break;
    }
    S = n.return;
  }
  return w = Du, Du = !1, w;
}
function Nt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Mo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function al(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ro(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Aa(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Aa(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Fe], delete n[$t], delete n[go], delete n[Xf], delete n[Jf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $a(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $a(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Do(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Ur));
  else if (r !== 4 && (e = e.child, e !== null)) for (Do(e, n, t), e = e.sibling; e !== null; ) Do(e, n, t), e = e.sibling;
}
function Oo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Oo(e, n, t), e = e.sibling; e !== null; ) Oo(e, n, t), e = e.sibling;
}
var J = null, Te = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) Va(e, n, t), t = t.sibling;
}
function Va(e, n, t) {
  if (je && typeof je.onCommitFiberUnmount == "function") try {
    je.onCommitFiberUnmount(nl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      te || Hn(t, n);
    case 6:
      var r = J, l = Te;
      J = null, Ge(e, n, t), J = r, Te = l, J !== null && (Te ? (e = J, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : J.removeChild(t.stateNode));
      break;
    case 18:
      J !== null && (Te ? (e = J, t = t.stateNode, e.nodeType === 8 ? Fl(e.parentNode, t) : e.nodeType === 1 && Fl(e, t), It(e)) : Fl(J, t.stateNode));
      break;
    case 4:
      r = J, l = Te, J = t.stateNode.containerInfo, Te = !0, Ge(e, n, t), J = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!te && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Mo(t, n, i), l = l.next;
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (!te && (Hn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        V(t, n, u);
      }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (te = (r = te) || t.memoizedState !== null, Ge(e, n, t), te = r) : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Iu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new pd()), n.forEach(function(r) {
      var l = xd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            J = u.stateNode, Te = !1;
            break e;
          case 3:
            J = u.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            J = u.stateNode.containerInfo, Te = !0;
            break e;
        }
        u = u.return;
      }
      if (J === null) throw Error(y(160));
      Va(o, i, l), J = null, Te = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      V(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Ba(n, e), n = n.sibling;
}
function Ba(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), Oe(e), r & 4) {
        try {
          Nt(3, e, e.return), al(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Nt(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      Ne(n, e), Oe(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), Oe(e), r & 512 && t !== null && Hn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mt(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && cs(l, o), ro(u, i);
          var c = ro(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], m = s[i + 1];
            h === "style" ? hs(l, m) : h === "dangerouslySetInnerHTML" ? ps(l, m) : h === "children" ? Mt(l, m) : Ko(l, h, m, c);
          }
          switch (u) {
            case "input":
              ql(l, o);
              break;
            case "textarea":
              fs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? Qn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Qn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Qn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[$t] = o;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Ne(n, e), Oe(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Ne(n, e), Oe(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        It(n.containerInfo);
      } catch (k) {
        V(e, e.return, k);
      }
      break;
    case 4:
      Ne(n, e), Oe(e);
      break;
    case 13:
      Ne(n, e), Oe(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (_i = W())), r & 4 && Iu(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (te = (c = te) || h, Ne(n, e), te = c) : Ne(n, e), Oe(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (S = e, h = e.child; h !== null; ) {
          for (m = S = h; S !== null; ) {
            switch (p = S, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Nt(4, p, p.return);
                break;
              case 1:
                Hn(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, t = p.return;
                  try {
                    n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    V(r, t, k);
                  }
                }
                break;
              case 5:
                Hn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  ju(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, S = g) : ju(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ms("display", i));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (k) {
              V(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Ne(n, e), Oe(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), Oe(e);
  }
}
function Oe(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if ($a(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mt(l, ""), r.flags &= -33);
          var o = Ou(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ou(e);
          Do(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function hd(e, n, t) {
  S = e, Ha(e);
}
function Ha(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || mr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || te;
        u = mr;
        var c = te;
        if (mr = i, (te = s) && !c) for (S = l; S !== null; ) i = S, s = i.child, i.tag === 22 && i.memoizedState !== null ? Uu(l) : s !== null ? (s.return = i, S = s) : Uu(l);
        for (; o !== null; ) S = o, Ha(o), o = o.sibling;
        S = l, mr = u, te = c;
      }
      Fu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, S = o) : Fu(e);
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            te || al(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !te) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : ze(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && ku(n, o, r);
            break;
          case 3:
            var i = n.updateQueue;
            if (i !== null) {
              if (t = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
              ku(n, i, t);
            }
            break;
          case 5:
            var u = n.stateNode;
            if (t === null && n.flags & 4) {
              t = u;
              var s = n.memoizedProps;
              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && t.focus();
                  break;
                case "img":
                  s.src && (t.src = s.src);
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
            if (n.memoizedState === null) {
              var c = n.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && It(m);
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
            throw Error(y(163));
        }
        te || n.flags & 512 && Ro(n);
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function ju(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, S = t;
      break;
    }
    S = n.return;
  }
}
function Uu(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            al(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            Ro(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Ro(n);
          } catch (s) {
            V(n, i, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, S = u;
      break;
    }
    S = n.return;
  }
}
var vd = Math.ceil, Gr = Ze.ReactCurrentDispatcher, xi = Ze.ReactCurrentOwner, xe = Ze.ReactCurrentBatchConfig, M = 0, X = null, Q = null, q = 0, me = 0, Wn = mn(0), Y = 0, Kt = null, zn = 0, cl = 0, Ci = 0, zt = null, ae = null, _i = 0, rt = 1 / 0, Ae = null, Xr = !1, Io = null, sn = null, hr = !1, nn = null, Jr = 0, Tt = 0, Fo = null, Pr = -1, Nr = 0;
function oe() {
  return M & 6 ? W() : Pr !== -1 ? Pr : Pr = W();
}
function an(e) {
  return e.mode & 1 ? M & 2 && q !== 0 ? q & -q : bf.transition !== null ? (Nr === 0 && (Nr = Ns()), Nr) : (e = R, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Os(e.type)), e) : 1;
}
function Re(e, n, t, r) {
  if (50 < Tt) throw Tt = 0, Fo = null, Error(y(185));
  Zt(e, t, r), (!(M & 2) || e !== X) && (e === X && (!(M & 2) && (cl |= t), Y === 4 && be(e, q)), pe(e, r), t === 1 && M === 0 && !(n.mode & 1) && (rt = W() + 500, il && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  qc(e, n);
  var r = Or(e, e === X ? q : 0);
  if (r === 0) t !== null && Yi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Yi(t), n === 1) e.tag === 0 ? qf(Au.bind(null, e)) : bs(Au.bind(null, e)), Zf(function() {
      !(M & 6) && hn();
    }), t = null;
    else {
      switch (zs(r)) {
        case 1:
          t = Jo;
          break;
        case 4:
          t = _s;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Ps;
          break;
        default:
          t = Dr;
      }
      t = Ja(t, Wa.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function Wa(e, n) {
  if (Pr = -1, Nr = 0, M & 6) throw Error(y(327));
  var t = e.callbackNode;
  if (Xn() && e.callbackNode !== t) return null;
  var r = Or(e, e === X ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = qr(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var o = Ka();
    (X !== e || q !== n) && (Ae = null, rt = W() + 500, xn(e, n));
    do
      try {
        wd();
        break;
      } catch (u) {
        Qa(e, u);
      }
    while (!0);
    ci(), Gr.current = o, M = l, Q !== null ? n = 0 : (X = null, q = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = so(e), l !== 0 && (r = l, n = jo(e, l))), n === 1) throw t = Kt, xn(e, 0), be(e, r), pe(e, W()), t;
    if (n === 6) be(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !yd(l) && (n = qr(e, r), n === 2 && (o = so(e), o !== 0 && (r = o, n = jo(e, o))), n === 1)) throw t = Kt, xn(e, 0), be(e, r), pe(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ae, Ae);
          break;
        case 3:
          if (be(e, r), (r & 130023424) === r && (n = _i + 500 - W(), 10 < n)) {
            if (Or(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = yo(wn.bind(null, e, ae, Ae), n);
            break;
          }
          wn(e, ae, Ae);
          break;
        case 4:
          if (be(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = W() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = yo(wn.bind(null, e, ae, Ae), r);
            break;
          }
          wn(e, ae, Ae);
          break;
        case 5:
          wn(e, ae, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === t ? Wa.bind(null, e) : null;
}
function jo(e, n) {
  var t = zt;
  return e.current.memoizedState.isDehydrated && (xn(e, n).flags |= 256), e = qr(e, n), e !== 2 && (n = ae, ae = t, n !== null && Uo(n)), e;
}
function Uo(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function yd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!De(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function be(e, n) {
  for (n &= ~Ci, n &= ~cl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Me(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Au(e) {
  if (M & 6) throw Error(y(327));
  Xn();
  var n = Or(e, 0);
  if (!(n & 1)) return pe(e, W()), null;
  var t = qr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = so(e);
    r !== 0 && (n = r, t = jo(e, r));
  }
  if (t === 1) throw t = Kt, xn(e, 0), be(e, n), pe(e, W()), t;
  if (t === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, wn(e, ae, Ae), pe(e, W()), null;
}
function Pi(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    M = t, M === 0 && (rt = W() + 500, il && hn());
  }
}
function Tn(e) {
  nn !== null && nn.tag === 0 && !(M & 6) && Xn();
  var n = M;
  M |= 1;
  var t = xe.transition, r = R;
  try {
    if (xe.transition = null, R = 1, e) return e();
  } finally {
    R = r, xe.transition = t, M = n, !(M & 6) && hn();
  }
}
function Ni() {
  me = Wn.current, I(Wn);
}
function xn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, Yf(t)), Q !== null) for (t = Q.return; t !== null; ) {
    var r = t;
    switch (ui(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ar();
        break;
      case 3:
        nt(), I(fe), I(re), vi();
        break;
      case 5:
        hi(r);
        break;
      case 4:
        nt();
        break;
      case 13:
        I(U);
        break;
      case 19:
        I(U);
        break;
      case 10:
        fi(r.type._context);
        break;
      case 22:
      case 23:
        Ni();
    }
    t = t.return;
  }
  if (X = e, Q = e = cn(e.current, null), q = me = n, Y = 0, Kt = null, Ci = cl = zn = 0, ae = zt = null, Sn !== null) {
    for (n = 0; n < Sn.length; n++) if (t = Sn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Sn = null;
  }
  return e;
}
function Qa(e, n) {
  do {
    var t = Q;
    try {
      if (ci(), xr.current = Zr, Yr) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Yr = !1;
      }
      if (Nn = 0, G = K = A = null, Pt = !1, Ht = 0, xi.current = null, t === null || t.return === null) {
        Y = 1, Kt = n, Q = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = q, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Pu(i);
          if (g !== null) {
            g.flags &= -257, Nu(g, i, u, o, n), g.mode & 1 && _u(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), n.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              _u(o, c, n), zi();
              break e;
            }
            s = Error(y(426));
          }
        } else if (j && u.mode & 1) {
          var F = Pu(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Nu(F, i, u, o, n), si(tt(s, u));
            break e;
          }
        }
        o = s = tt(s, u), Y !== 4 && (Y = 2), zt === null ? zt = [o] : zt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = za(o, s, n);
              wu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (sn === null || !sn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Ta(o, u, n);
                wu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Za(t);
    } catch (E) {
      n = E, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ka() {
  var e = Gr.current;
  return Gr.current = Zr, e === null ? Zr : e;
}
function zi() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), X === null || !(zn & 268435455) && !(cl & 268435455) || be(X, q);
}
function qr(e, n) {
  var t = M;
  M |= 2;
  var r = Ka();
  (X !== e || q !== n) && (Ae = null, xn(e, n));
  do
    try {
      gd();
      break;
    } catch (l) {
      Qa(e, l);
    }
  while (!0);
  if (ci(), M = t, Gr.current = r, Q !== null) throw Error(y(261));
  return X = null, q = 0, Y;
}
function gd() {
  for (; Q !== null; ) Ya(Q);
}
function wd() {
  for (; Q !== null && !Hc(); ) Ya(Q);
}
function Ya(e) {
  var n = Xa(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, n === null ? Za(e) : Q = n, xi.current = null;
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = dd(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    } else if (t = fd(t, n, me), t !== null) {
      Q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function wn(e, n, t) {
  var r = R, l = xe.transition;
  try {
    xe.transition = null, R = 1, kd(e, n, t, r);
  } finally {
    xe.transition = l, R = r;
  }
  return null;
}
function kd(e, n, t, r) {
  do
    Xn();
  while (nn !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (bc(e, o), e === X && (Q = X = null, q = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || hr || (hr = !0, Ja(Dr, function() {
    return Xn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = xe.transition, xe.transition = null;
    var i = R;
    R = 1;
    var u = M;
    M |= 4, xi.current = null, md(e, t), Ba(t, e), $f(ho), Ir = !!mo, ho = mo = null, e.current = t, hd(t), Wc(), M = u, R = i, xe.transition = o;
  } else e.current = t;
  if (hr && (hr = !1, nn = e, Jr = l), o = e.pendingLanes, o === 0 && (sn = null), Yc(t.stateNode), pe(e, W()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Xr) throw Xr = !1, e = Io, Io = null, e;
  return Jr & 1 && e.tag !== 0 && Xn(), o = e.pendingLanes, o & 1 ? e === Fo ? Tt++ : (Tt = 0, Fo = e) : Tt = 0, hn(), null;
}
function Xn() {
  if (nn !== null) {
    var e = zs(Jr), n = xe.transition, t = R;
    try {
      if (xe.transition = null, R = 16 > e ? 16 : e, nn === null) var r = !1;
      else {
        if (e = nn, nn = null, Jr = 0, M & 6) throw Error(y(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var o = S, i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nt(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, S = m;
                  else for (; S !== null; ) {
                    h = S;
                    var p = h.sibling, g = h.return;
                    if (Aa(h), h === c) {
                      S = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, S = p;
                      break;
                    }
                    S = g;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    k.sibling = null, k = F;
                  } while (k !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, S = i;
          else e: for (; S !== null; ) {
            if (o = S, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Nt(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, S = f;
              break e;
            }
            S = o.return;
          }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, S = d;
          else e: for (i = a; S !== null; ) {
            if (u = S, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  al(9, u);
              }
            } catch (E) {
              V(u, u.return, E);
            }
            if (u === i) {
              S = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, S = v;
              break e;
            }
            S = u.return;
          }
        }
        if (M = l, hn(), je && typeof je.onPostCommitFiberRoot == "function") try {
          je.onPostCommitFiberRoot(nl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      R = t, xe.transition = n;
    }
  }
  return !1;
}
function $u(e, n, t) {
  n = tt(t, n), n = za(e, n, 1), e = un(e, n, 1), n = oe(), e !== null && (Zt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) $u(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      $u(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
        e = tt(t, e), e = Ta(n, e, 1), n = un(n, e, 1), e = oe(), n !== null && (Zt(n, 1, e), pe(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Sd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = oe(), e.pingedLanes |= e.suspendedLanes & t, X === e && (q & t) === t && (Y === 4 || Y === 3 && (q & 130023424) === q && 500 > W() - _i ? xn(e, 0) : Ci |= t), pe(e, n);
}
function Ga(e, n) {
  n === 0 && (e.mode & 1 ? (n = or, or <<= 1, !(or & 130023424) && (or = 4194304)) : n = 1);
  var t = oe();
  e = Ke(e, n), e !== null && (Zt(e, n, t), pe(e, t));
}
function Ed(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), Ga(e, t);
}
function xd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ga(e, t);
}
var Xa;
Xa = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return ce = !1, cd(e, n, t);
    ce = !!(e.flags & 131072);
  }
  else ce = !1, j && n.flags & 1048576 && ea(n, Br, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      _r(e, n), e = n.pendingProps;
      var l = qn(n, re.current);
      Gn(n, t), l = gi(null, n, r, e, l, t);
      var o = wi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (o = !0, $r(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pi(n), l.updater = sl, n.stateNode = l, l._reactInternals = n, Co(n, r, e, t), n = No(null, n, r, !0, o, t)) : (n.tag = 0, j && o && ii(n), le(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (_r(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = _d(r), e = ze(r, e), l) {
          case 0:
            n = Po(null, n, r, e, t);
            break e;
          case 1:
            n = Lu(null, n, r, e, t);
            break e;
          case 11:
            n = zu(null, n, r, e, t);
            break e;
          case 14:
            n = Tu(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Po(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Lu(e, n, r, l, t);
    case 3:
      e: {
        if (Da(n), e === null) throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, ia(e, n), Qr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = tt(Error(y(423)), n), n = Mu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = tt(Error(y(424)), n), n = Mu(e, n, r, t, l);
          break e;
        } else for (he = on(n.stateNode.containerInfo.firstChild), ve = n, j = !0, Le = null, t = la(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (bn(), r === l) {
            n = Ye(e, n, t);
            break e;
          }
          le(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ua(n), e === null && So(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, vo(r, l) ? i = null : o !== null && vo(r, o) && (n.flags |= 32), Ra(e, n), le(e, n, i, t), n.child;
    case 6:
      return e === null && So(n), null;
    case 13:
      return Oa(e, n, t);
    case 4:
      return mi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = et(n, null, r, t) : le(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), zu(e, n, r, l, t);
    case 7:
      return le(e, n, n.pendingProps, t), n.child;
    case 8:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, D(Hr, r._currentValue), r._currentValue = i, o !== null) if (De(o.value, i)) {
          if (o.children === l.children && !fe.current) {
            n = Ye(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = He(-1, t & -t), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Eo(
                  o.return,
                  t,
                  n
                ), u.lanes |= t;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(y(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Eo(i, t, n), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === n) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        le(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Gn(n, t), l = Ce(l), r = r(l), n.flags |= 1, le(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = ze(r, n.pendingProps), l = ze(r.type, l), Tu(e, n, r, l, t);
    case 15:
      return La(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), _r(e, n), n.tag = 1, de(r) ? (e = !0, $r(n)) : e = !1, Gn(n, t), Na(n, r, l), Co(n, r, l, t), No(null, n, r, !0, e, t);
    case 19:
      return Ia(e, n, t);
    case 22:
      return Ma(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function Ja(e, n) {
  return Cs(e, n);
}
function Cd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new Cd(e, n, t, r);
}
function Ti(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e == "function") return Ti(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zo) return 11;
    if (e === Go) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function zr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Ti(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case On:
      return Cn(t.children, l, o, n);
    case Yo:
      i = 8, l |= 8;
      break;
    case Yl:
      return e = Ee(12, t, n, l | 2), e.elementType = Yl, e.lanes = o, e;
    case Zl:
      return e = Ee(13, t, n, l), e.elementType = Zl, e.lanes = o, e;
    case Gl:
      return e = Ee(19, t, n, l), e.elementType = Gl, e.lanes = o, e;
    case us:
      return fl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case os:
          i = 10;
          break e;
        case is:
          i = 9;
          break e;
        case Zo:
          i = 11;
          break e;
        case Go:
          i = 14;
          break e;
        case Xe:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return n = Ee(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Cn(e, n, t, r) {
  return e = Ee(7, e, r, n), e.lanes = t, e;
}
function fl(e, n, t, r) {
  return e = Ee(22, e, r, n), e.elementType = us, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Wl(e, n, t) {
  return e = Ee(6, e, null, n), e.lanes = t, e;
}
function Ql(e, n, t) {
  return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Pd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Li(e, n, t, r, l, o, i, u, s) {
  return e = new Pd(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ee(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pi(o), e;
}
function Nd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Dn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function qa(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return qs(e, t, n);
  }
  return n;
}
function ba(e, n, t, r, l, o, i, u, s) {
  return e = Li(t, r, !0, e, l, o, i, u, s), e.context = qa(null), t = e.current, r = oe(), l = an(t), o = He(r, l), o.callback = n ?? null, un(t, o, l), e.current.lanes = l, Zt(e, l, r), pe(e, r), e;
}
function dl(e, n, t, r) {
  var l = n.current, o = oe(), i = an(l);
  return t = qa(t), n.context === null ? n.context = t : n.pendingContext = t, n = He(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = un(l, n, i), e !== null && (Re(e, l, i, o), Er(e, l, i)), i;
}
function br(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mi(e, n) {
  Vu(e, n), (e = e.alternate) && Vu(e, n);
}
function zd() {
  return null;
}
var ec = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ri(e) {
  this._internalRoot = e;
}
pl.prototype.render = Ri.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  dl(e, n, null, null);
};
pl.prototype.unmount = Ri.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Tn(function() {
      dl(null, e, null, null);
    }), n[Qe] = null;
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ms();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++) ;
    qe.splice(t, 0, e), t === 0 && Ds(e);
  }
};
function Di(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Bu() {
}
function Td(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = br(i);
        o.call(c);
      };
    }
    var i = ba(n, r, e, 0, null, !1, !1, "", Bu);
    return e._reactRootContainer = i, e[Qe] = i.current, Ut(e.nodeType === 8 ? e.parentNode : e), Tn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = br(s);
      u.call(c);
    };
  }
  var s = Li(e, 0, !1, null, null, !1, !1, "", Bu);
  return e._reactRootContainer = s, e[Qe] = s.current, Ut(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    dl(n, s, t, r);
  }), s;
}
function hl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = br(i);
        u.call(s);
      };
    }
    dl(n, i, e, l);
  } else i = Td(t, n, e, l, r);
  return br(i);
}
Ts = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = wt(n.pendingLanes);
        t !== 0 && (qo(n, t | 1), pe(n, W()), !(M & 6) && (rt = W() + 500, hn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }), Mi(e, 1);
  }
};
bo = function(e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    Mi(e, 134217728);
  }
};
Ls = function(e) {
  if (e.tag === 13) {
    var n = an(e), t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    Mi(e, n);
  }
};
Ms = function() {
  return R;
};
Rs = function(e, n) {
  var t = R;
  try {
    return R = e, n();
  } finally {
    R = t;
  }
};
oo = function(e, n, t) {
  switch (n) {
    case "input":
      if (ql(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(y(90));
            as(r), ql(r, l);
          }
        }
      }
      break;
    case "textarea":
      fs(e, t);
      break;
    case "select":
      n = t.value, n != null && Qn(e, !!t.multiple, n, !1);
  }
};
gs = Pi;
ws = Tn;
var Ld = { usingClientEntryPoint: !1, Events: [Xt, Un, ol, vs, ys, Pi] }, vt = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Md = { bundleType: vt.bundleType, version: vt.version, rendererPackageName: vt.rendererPackageName, rendererConfig: vt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Es(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vt.findFiberByHostInstance || zd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vr.isDisabled && vr.supportsFiber) try {
    nl = vr.inject(Md), je = vr;
  } catch {
  }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
ge.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Di(n)) throw Error(y(200));
  return Nd(e, n, null, t);
};
ge.createRoot = function(e, n) {
  if (!Di(e)) throw Error(y(299));
  var t = !1, r = "", l = ec;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Li(e, 1, !1, null, null, t, !1, r, l), e[Qe] = n.current, Ut(e.nodeType === 8 ? e.parentNode : e), new Ri(n);
};
ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Es(n), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e) {
  return Tn(e);
};
ge.hydrate = function(e, n, t) {
  if (!ml(n)) throw Error(y(200));
  return hl(null, e, n, !0, t);
};
ge.hydrateRoot = function(e, n, t) {
  if (!Di(e)) throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = ec;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ba(n, null, e, 1, t ?? null, l, !1, o, i), e[Qe] = n.current, Ut(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new pl(n);
};
ge.render = function(e, n, t) {
  if (!ml(n)) throw Error(y(200));
  return hl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function(e) {
  if (!ml(e)) throw Error(y(40));
  return e._reactRootContainer ? (Tn(function() {
    hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qe] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = Pi;
ge.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!ml(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return hl(e, n, t, !1, r);
};
ge.version = "18.3.1-next-f1338f8080-20240426";
function nc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), ns.exports = ge;
var Rd = ns.exports, tc, Hu = Rd;
tc = Hu.createRoot, Hu.hydrateRoot;
const Dd = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", Od = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e";
function Id() {
  const [e, n] = Tr.useState(0);
  return Tr.useEffect(() => {
    var r;
    (r = window.eventBus) == null || r.emit("message-from-micro-frontend-1", "Hello from Micro-frontend 1");
  }, []), /* @__PURE__ */ se.jsxs(se.Fragment, { children: [
    /* @__PURE__ */ se.jsxs("div", { children: [
      /* @__PURE__ */ se.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ se.jsx("img", { src: Od, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ se.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ se.jsx("img", { src: Dd, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ se.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ se.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ se.jsxs("button", { onClick: () => n((t) => t + 1), children: [
        "count is ",
        e
      ] }),
      /* @__PURE__ */ se.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ se.jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ se.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
var Ao;
(function(e) {
  e.AUTH_STATE_CHANGED = "authStateChanged", e.MINI_APP_MESSAGE = "miniAppMessage";
})(Ao || (Ao = {}));
class Fd extends HTMLElement {
  constructor(t, r) {
    super();
    wl(this, "eventBus");
    wl(this, "cssContent");
    this.eventBus = r, this.cssContent = t, this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.attachCssStyle(), this.createAndAttachDOM();
  }
  // Method to handle the logic for creating and attaching DOM to the shadow DOM
  createAndAttachDOM() {
    if (this.shadowRoot) {
      const t = document.createElement("div");
      this.shadowRoot.appendChild(t), this.render(t);
    }
  }
  attachCssStyle() {
    var r;
    const t = document.createElement("style");
    t.textContent = this.cssContent, (r = this.shadowRoot) == null || r.prepend(t);
  }
  communicate(t) {
    this.eventBus.publish(Ao.MINI_APP_MESSAGE, t);
  }
  listen(t, r) {
    this.eventBus.subscribe(t, r);
  }
}
class jd {
  static register(n, t) {
    customElements.define(n, t);
  }
  static createMiniApp(n, t, r) {
    const l = customElements.get(n);
    if (l)
      return new l(t, r);
  }
}
class Ud extends Fd {
  initialize() {
    console.log("MyMiniApp Initialized"), this.listen("miniapp-message", (n) => {
      console.log("Received in MyMiniApp:", n);
    });
  }
  render(n) {
    tc(n).render(/* @__PURE__ */ se.jsx(Id, { miniApp: this })), console.log("rendered");
  }
}
jd.register("react-micro-frontend", Ud);
