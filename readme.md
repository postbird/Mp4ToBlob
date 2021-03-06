# PostbirdMp4ToBlob

利用 javascript MediaSource 将 HTML video标签的src转成加载blob 

## 更新记录：

- 2018.03.23
    - 如果不支持编码或 MediaSource 则自动修改 src 保证视频播放
- 2018.03.24
    - 去除 autoPlay 参数，改为由用户主动触发 `init()` 方法(移动端自动播放没有意义)

## 在线预览：

- [http://postbird.gitee.io/postbirdmp4toblob/](http://postbird.gitee.io/postbirdmp4toblob/)

## 仓库地址：

- github : [https://github.com/postbird/PostbirdMp4ToBlob](https://github.com/postbird/PostbirdMp4ToBlob)

- gitosc : [https://gitee.com/postbird/PostbirdMp4ToBlob](https://gitee.com/postbird/PostbirdMp4ToBlob)

## 使用方法：

### 1、引入js文件

```html
<script src="./js/postbird-mp4-to-blob.js"></script>
```

#### 2、构建基本的 video 容器：

PS: 样式可以不写，src 也可以不赋值

```html
<video id="video" webkit-playsinline="true" controls playsinline="true" type="video/mp4"  x5-video-player-type="h5" ></video>
```

#### 3、调用对象方法：

```js
var url = './video/v0-new.mp4';  // url
var mimeCodec = 'video/mp4; codecs="avc1.640028, mp4a.40.2"'; // 编码格式
PostbirdMp4ToBlob.init('#video',url,mimeCodec); // 调用 #video 是选择器 id
```


## 参数：

`PostbirdMp4ToBlob.init()` 总共四个参数：

- `selector` : 选择器id或class或tagname (内部使用 querySelector 进行选择)
- `url`：需要加载的 MP4 视频地址
- `mimeCodec`：加载视频的编码格式
- <s>`autoPlay`: 是否自动播放  true | false </s>


## 注意事项：

### 1、可能的错误

使用中，如果视频无法播放，并且发现如下错误：

> Failed to execute 'endOfStream' on 'MediaSource': The MediaSource's readyState is not 'open'.

请参考链接：[http://www.ptbird.cn/mediadource-readyState-is-not-open.html](http://www.ptbird.cn/mediadource-readyState-is-not-open.html)

### 2、获取视频的 Codecs 信息

如果要获取视频的 Codecs 信息，请参考链接：[http://www.ptbird.cn/mediadource-readyState-is-not-open.html](http://www.ptbird.cn/mediadource-readyState-is-not-open.html)

一般来说直接使用 `video/mp4; codecs="avc1.640028, mp4a.40.2"` 对 mp4 的视频是没有任何问题的。
