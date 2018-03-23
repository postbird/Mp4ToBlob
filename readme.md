# PostbirdMp4ToBlob

## 更新记录：

## 在线预览：

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
PostbirdMp4ToBlob.init('#video',url,mimeCodec,false); // 调用 #video 是选择器 id
```


## 参数：

`PostbirdMp4ToBlob.init()` 总共四个参数：

- `selector` : 选择器id或class或tagname (内部使用 querySelector 进行选择)
- `url`：需要加载的 MP4 视频地址
- `mimeCodec`：加载视频的编码格式
- `autoPlay`: 是否自动播放  true | false


