const CDN_HOST = 'https://static.allforsport.cn/public/icons/'

// 分享帖子详情
export function drawFlagPoster(data) {
    console.log(data)
    const padding = 24 // 图片padding
    let posWidth = 375 // 图片默认宽度
    let posHeight = 800 // 图片默认宽度
    let top = 40
    let views = [
        {
            type:'rect',
            css:{
                color:'#fff',
                top:`45rpx`,
                left:`${padding}rpx`,
                width:`${posWidth-2*padding}rpx`,
                height:'526rpx'
            }
        },
        {
            type:'image',
            url:"/images/end/bg.png",
            css:{
                top:`${padding}rpx`,
                left:`${padding}rpx`,
                width:`${posWidth-2*padding}rpx`,
                height:'26rpx'
            }
        },
        {
            type:'image',
            url:"/images/settings/top_title1.png",
            css:{
                top:`50rpx`,
                left:`82rpx`,
                width:`210rpx`,
                height:'92rpx'
            }
        },
        {
            type:'image',
            url:"/images/settings/img2.png",
            css:{
                top:`150rpx`,
                left:`127rpx`,
                width:`120rpx`,
                height:'81rpx'
            }
        },
        {
            type:'image',
            url:"/images/end/top_line.png",
            css:{
                top:`240rpx`,
                left:`56rpx`,
                width:`257rpx`,
                height:'4rpx'
            }
        },
        
        
       
    ]
    return {
        width: `${posWidth}rpx`,
        height: `${posHeight}rpx`,
        background: data.settingsBgColor,
        views: views
    }
}
 