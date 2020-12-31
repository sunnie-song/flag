function rpxToPx(rpx) {
    const {windowWidth} = wx.getSystemInfoSync()
    return rpx * (windowWidth / 750)
}
const RECT = {
    width: rpxToPx(258),
    height: rpxToPx(54),
    margin_right: rpxToPx(8),
    margin_left: rpxToPx(32),
    margin_top: rpxToPx(32)
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: [],
            observer(newVal, oldVal) {
                this.generate(newVal)
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        movableHeight: 0
    },
    /**
     * 组件的方法列表
     */
    methods: {
        generate(lists = []) {
            let renderLists = [],
                x = 0,
                y = 0
            for (let i = 0; i < lists.length; i++) {
                y = (RECT.height + RECT.margin_top) * i
                x = RECT.margin_left
                const item = {
                    id: i,
                    ...lists[i],
                    x,
                    y
                }
                renderLists.push(item)
            }
            this.setData({
                renderLists: renderLists,
                movableHeight: renderLists.length * (RECT.height + RECT.margin_top)
            })
        },
        refreshLists(insertIndex) {
            let {renderLists} = this.data
            const origin = renderLists.find(item => item.id === this.data.currentId)
            if (!origin) {
                return
            }
            renderLists.splice(this.originIndex, 1)
            renderLists.splice(insertIndex, 0, origin)
            this.triggerEvent('change',renderLists)
            // this.generate(renderLists)
        },
        createMovableObserver() {
            this.movableObserver && this.movableObserver.disconnect()
            this.movableObserver = this.createIntersectionObserver({
                thresholds: [0.3],
                observeAll: true
            })
            this.movableObserver.relativeTo('.movable__view.active').observe('.movable__view', res => {
                const {intersectionRatio, dataset} = res
                if (intersectionRatio < 0.3 || intersectionRatio === 1) return
                this.refreshLists(dataset.index)
                this.movableObserver && this.movableObserver.disconnect()
            })
        },
        handleLongPress(e) {
            const {id, index} = e.currentTarget.dataset
            this.originIndex = index
            this.setData(
                {
                    movableDisabled: false,
                    currentId: id
                },
                () => {
                    this.createMovableObserver()
                }
            )
        },
        handleTouchEnd() {
            if (this.data.movableDisabled) return
            this.setData({
                movableDisabled: true,
                renderLists: this.data.renderLists
            })
        },
        handleTouchMove() {},
        deleteFlag(e) {
            let {renderLists} = this.data
            const {index} = e.currentTarget.dataset
            renderLists.splice(index, 1)
            this.triggerEvent('change',renderLists)
        },
        handleChangeText(e){
          let {renderLists} = this.data
          const {index} = e.currentTarget.dataset
         this.triggerEvent('text',renderLists[index].text) 
          console.log(renderLists[index])
        }
    }
})
