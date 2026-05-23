import {drawFlagPoster} from './flag'
// 海报图
const drawPoster = data => {
    return new Promise(function (resolve, reject) {
        if (!data.shareType) {
            throw new Error('请定义绘制画布类型')
        }
        switch (data.shareType) {
            case 'flag':
                // 帖子详情
                resolve(drawFlagPoster(data))
                break
            default:
        }
    })
}
module.exports = {
    drawPoster
}
