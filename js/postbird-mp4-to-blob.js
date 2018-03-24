var PostbirdMp4ToBlob = {
    mediaSource:new MediaSource(),
    // 检查是否支持 MediaSource 或者 mimeCodec
    checkSupported: function (cb) {
        if ('MediaSource' in window && MediaSource.isTypeSupported(this.mimeCodec)) {
            
        } else {
            this.video.src  = assetUrl; // 如果不支持，则直接将 src 修改成原始的url，保证兼容性
            console.error('Unsupported MediaSource or unsupported MIME type or codec: ', this.mimeCodec);
        }
    },
    // 初始化 selector / assetUrl / mimeCodec / autoPlay
    // selector：video的选择器 exp: '#video'
    // assetUrl: video的请求地址 exp : './v.mp4'
    // mimeCodec: 编码模式  exp:  'video/mp4; codecs="avc1.640028, mp4a.40.2"'
    init: function (selector, assetUrl, mimeCodec) {
        this.video = document.querySelector(selector); // 获取vide dom
        this.assetUrl = assetUrl;
        this.mimeCodec = mimeCodec;
        this.checkSupported();
        this.start();// 开启
    },
    start: function () {
        console.log(this.mediaSource.readyState); // closed 
        this.video.src = URL.createObjectURL(this.mediaSource);
        this.mediaSource.addEventListener('sourceopen', this.sourceOpen.bind(this));// bind(this) 保证回调
    },
    // MediaSource sourceopen 事件处理
    sourceOpen: function (_) {
        var _this = this;
        console.log(this.mediaSource.readyState); // open
        var sourceBuffer = this.mediaSource.addSourceBuffer(this.mimeCodec);
        this.fetchAB(this.assetUrl, function (buf) {
            sourceBuffer.addEventListener('updateend', function (_) {
                _this.mediaSource.endOfStream();// 结束
                _this.video.play(); // 播放视频
                console.log(_this.mediaSource.readyState); // ended
            });
            sourceBuffer.appendBuffer(buf);
        });
    },
    // 基于 XHR 的简单封装
    // arguments - url 
    // arguments - cb (回调函数)
    fetchAB: function (url, cb) {
        var xhr = new XMLHttpRequest;
        xhr.open('get', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            cb(xhr.response);
        };
        xhr.send();
    }
};