const share = {
    wxContentImage: function(params, callback) {
        // 微信图文分享，仅支持单个图片
        uni.share({
            provider: "weixin",
            scene: params.scene || "WXSceneSession",
            type: 0,
            href: params.href || "",
            title: params.title || "title",
            summary: params.summary || "title，独家折扣，汇聚全网优惠券",
            imageUrl: params.imageUrl ||
                "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
            success: function(res) {
                callback && callback({
                    code: res.errMsg == "share:ok" ? 1 : 0,
                    data: res
                })
            },
            fail: function(err) {
                callback && callback({
                    code: 0,
                    data: err
                })
            }
        });
    },
    wxContent: function(params, callback) {
        // 微信单个文分享
        uni.share({
            provider: "weixin",
            scene: params.scene || "WXSceneSession",
            type: 1,
            summary: params.summary || "我正在你猜上面享受超值优惠券，快来看看吧~",
            success: function(res) {
                callback && callback({
                    code: res.errMsg == "share:ok" ? 1 : 0,
                    data: res
                })
            },
            fail: function(err) {
                callback && callback({
                    code: 0,
                    data: err
                })
            }
        });
    },
    wxImage: function(params, callback) {
        // 微信单个图片分享
        uni.share({
            provider: "weixin",
            scene: params.scene || "WXSceneSession",
            type: 2,
            imageUrl: params.imageUrl ||
                "自己设个默认图片",
            success: function(res) {
                callback && callback({
                    code: res.errMsg == "share:ok" ? 1 : 0,
                    data: res
                })
            },
            fail: function(err) {
                callback && callback({
                    code: 0,
                    data: err
                })
            }
        });
    },
    wxMiniProgram: function(params, callback) {
        uni.share({
            provider: 'weixin',
            type: 5,
            imageUrl: params.imageUrl ||
                "自己设个默认图片",
            title: params.title || "你猜",
            miniProgram: {
                id: params.wxAppid || "你自己的微信小程序APPID啊",
                path: params.path || '/pages/index/index',
                type: params.path || 0, // 微信小程序版本类型，可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。 
                webUrl: params.path || 'http://uniapp.dcloud.io'
            },
            success: ret => {
                console.log(JSON.stringify(ret));
            }
        });
    }
}

export default share
