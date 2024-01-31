export default (() => {
    let k, F, N, P; const l = { archives: "", plain: "" }, R = []; async function Q(t) { return await new Promise(n => setTimeout(n, t)); } function U() { return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => { const n = Math.random() * 16 | 0; return (t === "x" ? n : n & 3 | 8).toString(16); }); } function h(t, n) { try { return typeof t == "string" ? (n != null ? n : document).querySelector(t) : t; } catch { return null; } } function d(t, n) { try { return typeof t == "string" ? (n != null ? n : document).querySelectorAll(t) : t != null ? t : R; } catch { return R; } } function f(t, n) { var e, r; return (r = (e = t == null ? void 0 : t.classList) == null ? void 0 : e.contains(n)) != null ? r : !1; } function L(t, n) { var e; return ((e = t == null ? void 0 : t.tagName) == null ? void 0 : e.toLowerCase()) === n; } function m(t, n) { var e; return ((e = t == null ? void 0 : t.type) == null ? void 0 : e.toLowerCase()) === n; } function p(t, n) { var e; (e = t == null ? void 0 : t.classList) == null || e.add(n); } function u(t, n) { var e; (e = t == null ? void 0 : t.classList) == null || e.remove(n); } function g(t, n, e) { t == null || t.addEventListener(n, e, !0); } function X(t, n, e) { t == null || t.removeEventListener(n, e, !0); } function Y(t, n) { var e; (e = n == null ? void 0 : n.parentNode) == null || e.insertBefore(t, n); } function _(t) { return t == null ? void 0 : t.previousElementSibling; } function j(t) { return t == null ? void 0 : t.nextElementSibling; } function x(t) { return t == null ? void 0 : t.parentElement; } function J(t) { const n = document.createElement("div"); for (const e in t) n.setAttribute(e, t[e]); return n; } function T(t) { const n = t; m(n, "number") && !n.value && (n.value = ""), n.placeholder || (n.placeholder = " "), t.getAttribute("data-ui") && q(t, null); } function tt(t) { q(t.currentTarget, null, null, t); } function nt(t) { const n = t.currentTarget, e = x(n), r = h("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", e); r && r.focus(); } function et(t) { const n = t.currentTarget; T(n); } function rt(t) { const n = t.currentTarget; T(n); } function W(t) { X(document.body, "click", W); const n = t.target; d("menu.active").forEach(r => V(n, r, t)); } function at(t) { const n = t.currentTarget; u(n, "active"), k && clearTimeout(k); } function it(t) { const n = t.currentTarget; D(n); } function ot(t) { const n = t.currentTarget; I(n); } function ct(t) { const n = t.currentTarget; D(n, t); } function ut(t) { const n = t.currentTarget; I(n, t); } function st(t) { const n = t.currentTarget; G(n); } function Z() { F && clearTimeout(F), F = setTimeout(() => { A(); }, 180); } function D(t, n) { if (n && n.key === "Enter") { const i = _(t); return m(i, "file") ? i.click() : void 0; } const e = t, r = j(t); !m(r, "text") || (r.value = e.files ? Array.from(e.files).map(i => i.name).join(", ") : "", r.readOnly = !0, r.addEventListener("keydown", ct), T(r)); } function I(t, n) { if (n && n.key === "Enter") { const i = _(t); return m(i, "color") ? i.click() : void 0; } const e = t, r = j(t); !m(r, "text") || (r.readOnly = !0, r.value = e.value, r.addEventListener("keydown", ut), T(r)); } function G(t) { const n = x(t), e = h("span", n), r = d("input", n); if (!r.length || !e) return; const i = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16, c = 1.25 * i * 100 / r[0].offsetWidth, o = [], s = []; for (let y = 0; y < r.length; y++) { const z = parseFloat(r[y].min), B = parseFloat(r[y].max), O = parseFloat(r[y].value), C = z || 0, $ = B || 100, w = O || 0, K = (w - C) * 100 / ($ - C), H = c / 2 - c * K / 100; o.push(K + H), s.push(w), z !== C && (r[y].min = `${C}`), B !== $ && (r[y].max = `${$}`), O !== w && (r[y].value = `${w}`); } let a = o[0], v = 0, b = 100 - v - a, S = s[0], M = s[1] || 0; r.length > 1 && (a = Math.abs(o[1] - o[0]), v = o[1] > o[0] ? o[0] : o[1], b = 100 - v - a, M > S && (S = s[1] || 0, M = s[0])), n.style.setProperty("---start", `${v}%`), n.style.setProperty("---end", `${b}%`), n.style.setProperty("---value1", `'${S}'`), n.style.setProperty("---value2", `'${M}'`); } async function q(t, n, e, r) { if (!(!n && (n = h(t.getAttribute("data-ui")), !n))) { if (L(n, "dialog")) return await dt(t, n); if (L(n, "menu")) return V(t, n, r); if (f(n, "snackbar")) return ft(t, n, e); if (f(n, "page")) return lt(t, n); if (E(t), f(n, "active")) return u(n, "active"); p(n, "active"); } } function E(t) { t.id && f(t, "page") && (t = h(`[data-ui="#${t.id}"]`)); const n = x(t); if (!f(n, "tabs")) return; d("a", n).forEach(r => u(r, "active")), p(t, "active"); } function lt(t, n) { E(t); const e = x(n); if (e) for (let r = 0; r < e.children.length; r++) f(e.children[r], "page") && u(e.children[r], "active"); p(n, "active"); } function V(t, n, e) { N && clearTimeout(N), N = setTimeout(() => { var i, c; if (g(document.body, "click", W), E(t), f(n, "active")) { if (!e) return u(n, "active"); const o = e.target, s = h((i = o.getAttribute("data-ui")) != null ? i : ""), a = o.closest("menu"), v = !h("menu", (c = o.closest("[data-ui]")) != null ? c : void 0); return s && s !== a ? V(o, s) : !s && !v && a ? !1 : u(n, "active"); } d("menu.active").forEach(o => u(o, "active")), p(n, "active"); }, 90); } async function dt(t, n) { var a; (a = document.activeElement) == null || a.blur(), E(t); let e = _(n); const r = n, i = f(n, "active") || r.open, c = f(n, "modal"), o = x(n), s = L(o, "nav"); f(e, "overlay") || (e = J({ class: "overlay" }), Y(e, n), await Q(90)), e.onclick = () => { c || (u(t, "active"), u(n, "active"), u(e, "active"), r.close()); }, s && d("dialog, a, .overlay", o).forEach(b => { u(b, "active"), b.open && b.close(); }), i ? (u(t, "active"), u(e, "active"), u(n, "active"), r.close()) : (!L(t, "button") && !f(t, "button") && !f(t, "chip") && p(t, "active"), p(e, "active"), p(n, "active"), c ? r.showModal() : r.show()); } function ft(t, n, e) { var i; (i = document.activeElement) == null || i.blur(), E(t), d(".snackbar.active").forEach(c => u(c, "active")), p(n, "active"), g(n, "click", at), k && clearTimeout(k), e !== -1 && (k = setTimeout(() => { u(n, "active"); }, e != null ? e : 6000)); } function gt() { if (l.archives && l.plain) return l; const t = document.createElement("body"); t.className = "archives", document.body.appendChild(t); const n = document.createElement("body"); n.className = "plain", document.body.appendChild(n); const e = getComputedStyle(t), r = getComputedStyle(n), i = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"]; for (let c = 0; c < i.length; c++) l.archives += i[c] + ":" + e.getPropertyValue(i[c]) + ";", l.plain += i[c] + ":" + r.getPropertyValue(i[c]) + ";"; return document.body.removeChild(t), document.body.removeChild(n), l; } function yt(t) { if (!t || !globalThis.materialDynamicColors) return gt(); const n = /plain/i.test(document.body.className) ? "plain" : "archives"; return t.archives && t.plain ? (l.archives = t.archives, l.plain = t.plain, document.body.setAttribute("style", t[n]), t) : globalThis.materialDynamicColors(t).then(e => { const r = i => { let c = ""; for (const o in i) { const s = o.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), a = i[o]; c += "--" + s + ":" + a + ";"; } return c; }; return l.archives = r(e.archives), l.plain = r(e.plain), document.body.setAttribute("style", l[n]), l; }); } function pt(t) { if (!t) return /plain/i.test(document.body.className) ? "plain" : "archives"; document.body.classList.remove("archives", "plain"), document.body.classList.add(t); const n = t === "archives" ? l.archives : l.plain; return globalThis.materialDynamicColors && document.body.setAttribute("style", n), t; } function vt() { P || (P = new MutationObserver(Z), P.observe(document.body, { attributes: !0, attributeFilter: ["value", "max", "min"], childList: !0, subtree: !0 }), Z()); } function A(t, n) { if (t) { if (t === "setup") return vt(); if (t === "guid") return U(); if (t === "mode") return pt(n); if (t === "theme") return yt(n); const a = h(t); if (!a) return; q(a, a, n); } d("[data-ui]").forEach(a => g(a, "click", tt)), d(".field > label").forEach(a => g(a, "click", nt)), d(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea").forEach(a => { g(a, "focus", et), g(a, "blur", rt), T(a); }), d(".field > input[type=file]").forEach(a => { g(a, "change", it), D(a); }), d(".field > input[type=color]").forEach(a => { g(a, "change", ot), I(a); }), d(".slider > input[type=range]").forEach(a => { g(a, "input", st), G(a); }); } globalThis.addEventListener && globalThis.addEventListener("load", async () => await A("setup")); globalThis.beercss = A; globalThis.ui = A;
    return globalThis.ui;
})();