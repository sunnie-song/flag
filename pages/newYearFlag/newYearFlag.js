var t = require('../../B7C5B970B1CF99CFD1A3D177B8F7F6A0.js'),
    e = t.$Toast,
    a = (t.$Message, wx.createCanvasContext('canvas')),
    i = wx.createAnimation({
        duration: 1e3,
        timingFunction: 'ease',
        transformOrigin: '0 0 0'
    }),
    n = wx.createAnimation({
        duration: 1e3,
        timingFunction: 'ease'
    }),
    s = wx.createAnimation({
        duration: 600,
        timingFunction: 'ease-in-out'
    }),
    o = require('../../D89DBFE1B1CF99CFBEFBD7E62AE7F6A0.js'),
    l = 1

Page({
    data: {
        endDate: '2020/12/31 18:00:00',
        auth: true,
        width: 750,
        height: wx.getSystemInfoSync().windowHeight,
        n: 750 / wx.getSystemInfoSync().windowWidth,
        flagLists: [],
        // {item:'123',x:0,y:0},{item:'234',x:0,y:100}
        tempFlagLists: [],
        isFirstTime: true,
        foldShow: false,
        animationData: {},
        handShow: true,
        topTipsShow: false,
        placeholderShow: true,
        inputFlagValue: '',
        inputFocus:false,
        inputNameValue: '',
        introShow: true,
        selectShow: false,
        settingsShow: false,
        continueShow: true,
        gotoSignShow: false,
        step2Show: true,
        step3TipsShow: false,
        settingsBgColor: '#ff4b30',
        chooseActive: 'color',
        imgLists: ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png', 'img7.png', 'img8.png', 'img9.png', 'img10.png'],
        imgListsIndex: 'img3.png',
        colorLists: ['#ff4b30', '#f75c2f', '#ffc408', '#90b44b', '#00aa90', '#30a8de', '#986db2', '#e16b8c'],
        colorListsIndex: 0,
        readCheck: false,
        readAniShow: false,
        countDownShow: false,
        circle1Show: true,
        circle2Show: true,
        circle3Show: true,
        num1Show: false,
        num2Show: false,
        num3Show: true
    },

    introGoTap: function () {
        this.setData({
            introShow: false,
            selectShow: true
        })
    },
    openFoldClick: function () {
        i.scale(1).step(),
            this.setData({
                foldShow: true,
                topTipsShow: false,
                foldAnimationData: i.export()
            })
    },
    closeFoldClick: function () {
        i.scale(0).step(),
            this.setData({
                foldAnimationData: i.export(),
                foldShow: false
            })
    },
    _addStar: function (t, e) {
        this.setData({
            left: t,
            top: e
        }),
            s.opacity(1).step(),
            s.top(10).left(10).opacity(0).step({
                duration: 0,
                timingFunction: 'linear'
            }),
            this.setData({
                starAnimationData: s.export()
            }),
            wx.playBackgroundAudio({
                dataUrl: 'https://6f6e-online-e879a3-1258444488.tcb.qcloud.la/newYearFlag/star.mp3'
            })
    },
    boxItemChosen: function (t) {
        var e = t.touches[0].clientX,
            a = t.touches[0].clientY - 10
        // var i = t.currentTarget.dataset.index, n = this.data.flagLists[i], s = n.text;
        var i = t.currentTarget.dataset.index
        let flag = this.data.flagLists[i]
        flag.isChosen = true
        this._addStar(e, a)
        this.data.isFirstTime &&
            (this.openFoldClick(),
            this.setData({
                isFirstTime: false,
                topTipsShow: true
            }))
        this.setData({
            handShow: false,
            flagLists: this.data.flagLists,
            tempFlagLists: this.data.tempFlagLists.concat(flag)
        })
    },
    handleReset(e) {
        console.log(e.detail)
        this.setData({tempFlagLists: e.detail})
    },
    // deleteFlag: function (t) {
    //     var e = t.currentTarget.dataset.index,
    //         a = this.data.tempFlagLists
    //     a.splice(e, 1),
    //         this.setData({
    //             tempFlagLists: a
    //         }),
    //         console.log(this.data.tempFlagLists)
    // },
    // flagSortChange: function(t) {
    //     console.log(t);
    //     var e = t.currentTarget.dataset.index, a = parseFloat(t.currentTarget.dataset.y), i = t.detail.y;
    //     console.log(i, a);
    //     var n = this.data.tempFlagLists, s = n[e];
    //     i > a && (n[e] = n[e + 1], n[e + 1] = s), i < a && (n[e] = n[e - 1], n[e - 1] = s),
    //     this.setData({
    //         currentIndex: e,
    //         tempFlagLists: n
    //     });
    // },
    // flagLongPress: function(t) {
    //     var e = t.currentTarget.dataset.index;
    //     this.setData({
    //         currentIndex: e
    //     });
    // },
    // flagTouchEnd: function() {
    //     this.setData({
    //         currentIndex: null
    //     });
    // },
    inputFlagFocus: function () {
        this.setData({
            placeholderShow: false
        })
    },
    // 失去焦点
    inputFlagBlur: function () {
        '' == this.data.inputFlagValue &&
            this.setData({
                placeholderShow: true
            })
    },
    // 输入
    inputFlag: function (t) {
        this.setData({
            inputFlagValue: t.detail.value
        })
    },
    // 输入
    okTap: function (t) {
        var text = this.data.inputFlagValue
        console.log(text)
        if (0 == text.length) {
            e({
                content: '请输入你的flag！',
                type: 'warning'
            })
        } else if (text.length > 30) {
            e({
                content: '哎呀字太多啦，最多30个字哦',
                type: 'warning'
            })
        } else {
            var i = t.touches[0].clientX - 100,
                n = t.touches[0].clientY
            this._addStar(i, n),
                this.data.isFirstTime &&
                    (this.openFoldClick(),
                    this.setData({
                        isFirstTime: false,
                        topTipsShow: true
                    }))
            var s = this.data.tempFlagLists
            this.setData({
                tempFlagLists: s.concat({text}),
                inputFlagValue:'',
                placeholderShow:true
            })
        }
    },
    changeRandomTap: function () {
        n.rotate(180 * l++).step(),
            this.setData({
                changeRotateData: n.export()
            }),
            this.changeRandom()
    },
    changeRandom: function () {
        for (var t = [], e = [], a = 0; a < 6; a++) {
            var i = Math.floor(Math.random() * o.length)
            e.push(o[i]),
                t.push({
                    text: o[i]
                }),
                o.splice(i, 1)
        }
        ;(o = o.concat(e)),
            this.setData({
                flagLists: t
            })
    },
    nextTap: function () {
        0 == this.data.tempFlagLists.length &&
            this.setData({
                tempFlagLists: [{text: '瘦'}, {text: '暴富'}, {text: '要健身'}, {text: '拒绝熬夜'}, {text: '多陪伴家人'}]
            }),
            this.setData({
                selectShow: false,
                settingsShow: true,
                topTipsShow: true
            })
    },
    returnTap: function () {
        this.setData({
            selectShow: true,
            settingsShow: false
        })
    },
    continueTap: function () {
        this.setData({
            chooseActive: 'img',
            continueShow: false,
            gotoSignShow: true
        })
    },
    gotoSignTap: function () {
        this.setData({
            step2Show: false,
            topTipsShow: false,
            step3TipsShow: true
        })
    },
    confirmTap: function () {
        var t = this
        this.data.readCheck && '' == this.data.inputNameValue.trim()
            ? e({
                  content: '请输入姓名！',
                  type: 'warning'
              })
            : this.data.readCheck
            ? (this.setData({
                  countDownShow: true,
                  step3TipsShow: false
              }),
              wx.playBackgroundAudio({
                  dataUrl: 'https://6f6e-online-e879a3-1258444488.tcb.qcloud.la/newYearFlag/count_down.mp3'
              }),
              setTimeout(function () {
                  t.setData({
                      num3Show: false,
                      num2Show: true,
                      barAniShow: true
                  }),
                      setTimeout(function () {
                          t.setData({
                              num2Show: false,
                              num1Show: true
                          }),
                              t.prepareDrawCtx(),
                              t.drawImageShow(function (e) {
                                  console.log(e.tempFilePath),
                                      t.setData({
                                          resultShow: true,
                                          resultFlagImg: e.tempFilePath
                                      }),
                                      wx.playBackgroundAudio({
                                          dataUrl: 'https://6f6e-online-e879a3-1258444488.tcb.qcloud.la/newYearFlag/star.mp3'
                                      }),
                                      setTimeout(function () {
                                          t._showActionSheet()
                                      }, 2e3)
                              })
                      }, 1e3)
              }, 1e3))
            : this.setData({
                  readAniShow: true
              })
    },
    _showActionSheet: function () {
        var t = this
        wx.showActionSheet({
            itemList: ['预览图片', '保存图片'],
            success: function (e) {
                switch (e.tapIndex) {
                    case 0:
                        wx.previewImage({
                            urls: [t.data.resultFlagImg]
                        })
                        break

                    case 1:
                        t._saveImageAlbum(t.data.resultFlagImg)
                }
            },
            fail: function (t) {
                console.log(t.errMsg)
            }
        })
    },
    inputNameFocus: function () {
        this.setData({
            placeholderShow: false,
            readAniShow: false
        })
    },
    inputNameBlur: function () {
        '' == this.data.inputNameValue.trim() &&
            this.setData({
                placeholderShow: true
            }),
            this.data.readCheck ||
                this.setData({
                    readAniShow: true
                })
    },
    inputName: function (t) {
        this.setData({
            inputNameValue: t.detail.value.trim(),
            readAniShow: false
        })
    },
    readCheckTap: function () {
        this.setData({
            readCheck: true,
            readAniShow: false
        })
    },
    chooseTap: function (t) {
        var e = t.currentTarget.dataset.choose
        'img' == e &&
            this.setData({
                continueShow: false,
                gotoSignShow: true
            }),
            this.setData({
                chooseActive: e
            })
    },
    imgChooseTap: function (t) {
        this.setData({
            imgListsIndex: t.currentTarget.dataset.img
        })
    },
    colorChooseTap: function (t) {
        this.setData({
            colorListsIndex: t.currentTarget.dataset.index,
            settingsBgColor: t.currentTarget.dataset.color
        })
    },
    drawImageShow: function (t) {
        var e = this
        a.draw(true, function () {
            wx.canvasToTempFilePath({
                canvasId: 'canvas',
                fileType: 'png',
                width: e.data.width,
                height: e.data.height,
                success: function (e) {
                    t && t(e)
                }
            })
        })
    },
    resultFlagImgTap: function (t) {
        this._saveImageAlbum(t.currentTarget.dataset.path)
    },
    _saveImageAlbum: function (t) {
        wx.saveImageToPhotosAlbum({
            filePath: t,
            success: function () {
                wx.showToast({
                    title: '已保存到相册',
                    icon: 'success',
                    duration: 2e3,
                    mask: true
                })
            },
            fail: function () {
                wx.showModal({
                    title: '保存相册失败',
                    content: '若不打开授权，则无法将图片保存到相册中。',
                    confirmText: '去授权',
                    success: function (t) {
                        t.confirm &&
                            wx.openSetting({
                                success: function (t) {
                                    t.authSetting['scope.writePhotosAlbum']
                                }
                            })
                    }
                })
            },
            complete: function () {
                setTimeout(function () {
                    wx.hideLoading()
                }, 1e3)
            }
        })
    },
    prepareDrawCtx: function () {
        var t = new Date(),
            e = t.getFullYear(),
            i = t.getMonth() + 1,
            n = t.getDate(),
            s = t.getHours(),
            o = t.getMinutes()
        i < 10 && (i = '0' + i), n < 10 && (n = '0' + n), s < 10 && (s = '0' + s), o < 10 && (o = '0' + o)
        var l = '立于' + e + '/' + i + '/' + n + '/ ' + s + ':' + o
        this.data.nowDate = l
        var h = this.data.n
        var r = this.data.width,
            g = this.data.height,
            c = this.data.tempFlagLists.length


        c > 3 &&
            ((g += (110 * (c - 3)) / h),
            this.setData({
                height: g
            })),
            this.data.isIphoneX &&
                this.setData({
                    height: g - 130
                }),
            a.setFillStyle(this.data.settingsBgColor),
            a.fillRect(0, 0, r, g)
        var d = (r - 616) / 2 / h,
            u = 60 / h,
            p = 616 / h,
            m = 50 / h
        a.drawImage('./images/end/bg.png', d, u, p, m), a.setFillStyle('#FFFFFF')
        var w = (r - 616) / 2 / h,
            f = 94 / h,
            S = 616 / h,
            x = g - 170 / h
        this.data.isIphoneX && (x -= 250 / h), a.fillRect(w, f, S, x)
        var F = (r - 422) / 2 / h,
            T = 110 / h,
            v = 422 / h,
            D = 182 / h
        a.drawImage('./images/settings/top_title1.png', F, T, v, D)
        var b = (r - 224) / 2 / h,
            I = 320 / h,
            L = 224 / h,
            A = 145 / h
        a.drawImage('./images/settings/' + this.data.imgListsIndex, b, I, L, A)
        var y = (r - 517) / 2 / h,
            C = 490 / h,
            k = 517 / h,
            _ = 9 / h
        a.drawImage('./images/end/top_line.png', y, C, k, _)
        for (var z = this.data.tempFlagLists, B = 540, P = 0; P < z.length; P++) {
            a.setFillStyle(this.data.settingsBgColor), a.fillRect((r - 517) / 2 / h - 10 / h, B / h + 12, 69 / h, 14 / h), a.drawImage(P + 1 < 10 ? './images/settings/single_bg.png' : './images/settings/ten_bg.png', P + 1 < 10 ? (r - 517) / 2 / h + 16 / h : (r - 517) / 2 / h + 32 / h, B / h + 6, P + 1 < 10 ? 43 / h : 27 / h, 19 / h)
            var R = {
                x: (r - 517) / 2 / h - 10 / h,
                y: B / h,
                color: '#000000',
                size: 32 / h,
                align: 'left',
                baseline: 'top',
                text: P + 1,
                font: 'sans-serif',
                bold: true
            }
            this.drawText(R)
            var V = {
                x: (r - 517) / 2 / h + 80 / h,
                y: B / h,
                color: '#000000',
                size: 30 / h,
                line: 2,
                width: 517 / h - 70 / h,
                height: 30 / h,
                align: 'left',
                baseline: 'top',
                font: 'sans-serif',
                text: z[P].text,
                bold: false
            }
            this.textWrap(V), (B += 110)
        }
        var M = (r - 517) / 2 / h,
            N = c >= 3 ? (850 + 110 * (c - 3)) / h : 850 / h,
            Y = 500 / h,
            q = 10 / h
        a.drawImage('./images/end/bottom_line.png', M, N, Y, q)
        var X = {
            x: (r - 517) / 2 / h - 10 / h,
            y: c >= 3 ? (900 + 110 * (c - 3)) / h : 900 / h,
            color: '#000000',
            size: 40 / h,
            align: 'left',
            font: '微软雅黑',
            baseline: 'top',
            text: this.data.inputNameValue,
            bold: true
        }
        this.drawText(X)
        var U = {
            x: (r - 517) / 2 / h - 10 / h,
            y: c >= 3 ? (980 + 110 * (c - 3)) / h : 980 / h,
            color: '#000000',
            size: 26 / h,
            align: 'left',
            font: '微软雅黑',
            baseline: 'top',
            text: this.data.nowDate,
            bold: false
        }
        this.drawText(U)
        var W = (r - 517) / 2 / h + 275 / h,
            j = c >= 3 ? (982 + 110 * (c - 3)) / h : 982 / h,
            H = 24 / h,
            $ = 24 / h
        a.drawImage('./images/end/flag.png', W, j, H, $)
        // var E = (r - 517) / 2 / h - 10 / h,
        //     G = c >= 3 ? (1040 + 110 * (c - 3)) / h : 1040 / h,
        //     O = 330 / h,
        //     J = 51 / h
        // a.drawImage('./images/end/logo.png', E, G, O, J)
        var K = (r - 517) / 2 / h + 370 / h,
            Q = c >= 3 ? (880 + 110 * (c - 3)) / h : 880 / h,
            Z = 150 / h,
            tt = 150 / h
        !this.data.auth && a.drawImage('./images/end/qrcode.png', K, Q, Z, tt)
        var et = (r - 517) / 2 / h + 380 / h,
            at = c >= 3 ? (1054 + 110 * (c - 3)) / h : 1054 / h,
            it = 140 / h,
            nt = 34 / h
        !this.data.auth && a.drawImage('./images/end/end_text.png', et, at, it, nt)
    },
    drawText: function (t) {
        console.log(t)
        a.setFillStyle(t.color)
        a.setFontSize(t.size)
        a.setTextAlign(t.align)
        a.setTextBaseline(t.baseline)
        // a.font = "normal normal 12px 'sans-serif'"
        // a.font = `normal ${t.bold?'bold':'normal'} ${t.size}px "${'sans-serif'}"`;
        t.bold ? (a.font = 'normal ' + t.size + 'px ' + t.font) : (a.font = 'normal ' + t.size + 'px ' + t.font)
        a.fillText(t.text, t.x, t.y)
        a.restore()
    },
    textWrap: function (t) {
        for (var e = this.getTextLine(t), a = 0; a < e.length; a++)
            if (a < t.line) {
                var i = {
                    x: t.x,
                    y: t.y + a * t.height,
                    color: t.color,
                    size: t.size,
                    align: t.align,
                    baseline: t.baseline,
                    text: e[a],
                    bold: t.bold
                }
                a == t.line - 1 && (i.text = i.text.substring(0, i.text.length - 3) + '......'), this.drawText(i)
            }
    },
    getTextLine: function (t) {
        a.setFontSize(t.size)
        for (var e = t.text.split(''), i = '', n = [], s = 0; s < e.length; s++) {
            var o = i + e[s]
            a.measureText(o).width > t.width && s > 0 ? (n.push(i), (i = e[s])) : (i = o), s == e.length - 1 && n.push(i)
        }
        return n
    },
    onLoad: function (t) {
        wx.getSystemInfo({
            success: res => {
                res.model.search('iPhone X') != -1 &&
                    this.setData({
                        isIphoneX: true
                    })
            }
        })
        this.prepareDrawCtx()
    },
    onReady: function () {},
    onShow: function () {
        var myDate = new Date().getTime()
        var endData = new Date(this.data.endDate).getTime()
        if (endData - myDate < 0) {
            this.setData({
                auth: false
            })
        }
        this.changeRandom()
    },
    onShareAppMessage: function () {
        return {
            title: '快来立下你的2021新年flag吧！',
            path: '/pages/newYearFlag/newYearFlag',
            imageUrl: './images/share.png'
        }
    },
    handleText(e){
        this.setData({
            inputFlagValue: e.detail,
            inputFocus:true
        })
    },
    handleTouchMove(e) {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        console.log(x)
        this.setData({
            colorX: x
        })
    }
})
