function t(t, e, a, o) {
    return Math.abs(t - e) >= Math.abs(a - o) ? t - e > 0 ? "Left" : "Right" : a - o > 0 ? "Up" : "Down";
}

Component({
    externalClasses: [ "i-class" ],
    properties: {
        actions: {
            value: [],
            type: Array,
            observer: "_updateButtonSize"
        },
        unclosable: {
            value: !1,
            type: Boolean
        },
        toggle: {
            value: !1,
            type: Boolean,
            observer: "closeButtonGroup"
        },
        operateWidth: {
            type: Number,
            value: 160
        }
    },
    options: {
        multipleSlots: !0
    },
    data: {
        tStart: {
            pageX: 0,
            pageY: 0
        },
        limitMove: 0,
        position: {
            pageX: 0,
            pageY: 0
        }
    },
    methods: {
        loop: function() {},
        _updateButtonSize: function() {
            var t = this.data.actions;
            if (t.length > 0) {
                wx.createSelectorQuery().in(this);
                var e = 0;
                t.forEach(function(t) {
                    e += t.width || 0;
                }), this.data.limitMove = e;
            } else this.data.limitMove = this.data.operateWidth;
        },
        handlerTouchstart: function(t) {
            var e = t.touches ? t.touches[0] : {}, a = this.data.tStart;
            if (e) for (var o in a) e[o] && (a[o] = e[o]);
        },
        swipper: function(t) {
            var e = this.data, a = e.tStart, o = {
                pageX: t.pageX - a.pageX,
                pageY: t.pageY - a.pageY
            };
            e.limitMove < Math.abs(o.pageX) && (o.pageX = -e.limitMove), this.setData({
                position: o
            });
        },
        handlerTouchmove: function(e) {
            var a = this.data.tStart, o = e.touches ? e.touches[0] : {};
            o && "Left" === t(a.pageX, o.pageX, a.pageY, o.pageY) && this.swipper(o);
        },
        handlerTouchend: function(e) {
            var a = this.data.tStart, o = e.changedTouches ? e.changedTouches[0] : {};
            if (o) {
                var i = t(a.pageX, o.pageX, a.pageY, o.pageY), n = {
                    pageX: o.pageX - a.pageX,
                    pageY: o.pageY - a.pageY
                };
                Math.abs(n.pageX) >= 40 && "Left" === i ? n.pageX = n.pageX < 0 ? -this.data.limitMove : this.data.limitMove : n.pageX = 0, 
                this.setData({
                    position: n
                });
            }
        },
        handlerButton: function(t) {
            this.data.unclosable || this.closeButtonGroup();
            var e = t.currentTarget.dataset;
            this.triggerEvent("change", {
                index: e.index
            });
        },
        closeButtonGroup: function() {
            this.setData({
                position: {
                    pageX: 0,
                    pageY: 0
                }
            });
        },
        handlerParentButton: function(t) {
            this.data.unclosable || this.closeButtonGroup();
        }
    },
    ready: function() {
        this._updateButtonSize();
    }
});