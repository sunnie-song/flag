var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(t) {
        var n = t.getFullYear(), r = t.getMonth() + 1, o = t.getDate(), i = t.getHours(), u = t.getMinutes(), a = t.getSeconds();
        return [ n, r, o ].map(e).join("/") + " " + [ i, u, a ].map(e).join(":");
    },
    formatNow: function() {
        var t = new Date();
        return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(e).join("");
    },
    formatDate: function(e) {
        var t = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
        return e;
    },
    arrayContains: function(e, t) {
        for (var n in e) if (e[n] === t) return !0;
        return !1;
    },
    getRand: function(e) {
        return e < 5 ? new Number((100 * e / 650).toFixed(1)) + 10 : e >= 5 && e < 10 ? new Number((100 * e / 650).toFixed(1)) + 30 : e >= 10 && e < 20 ? new Number((100 * e / 650).toFixed(1)) + 50 : e >= 20 && e <= 25 ? new Number((100 * e / 650).toFixed(1)) + 60 : e > 25 && e <= 30 ? new Number((100 * e / 650).toFixed(1)) + 70 : e > 30 && e < 35 ? new Number((100 * e / 650).toFixed(1)) + 80 : e >= 35 && e < 40 ? new Number((100 * e / 650).toFixed(1)) + 85 : e >= 40 && e < 65 ? new Number((100 * e / 650).toFixed(1)) + 90 : e >= 65 ? 99.9 : void 0;
    },
    rand: function(e, t) {
        var n = t - e, r = Math.random();
        return e + Math.round(r * n);
    },
    getDateStr: function(t) {
        return [ t.getFullYear(), t.getMonth() + 1, t.getDate() ].map(e).join("");
    },
    isEmpty: function(e) {
        return void 0 == e || null == e || "" == e || "null" == e || "undefined" == e || "" == (e = e.replace(/(\s*$)/g, ""));
    }
};