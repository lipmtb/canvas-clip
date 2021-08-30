
# 用户上传图片调整，裁剪部分上传
+ 前置条件：canvas context.clip可以对图片进行裁剪，先圈出一个位置(resImgLeft, resImgTop)来clip,再将要被裁剪的图片drawImage(0,0,canvas,width,canvas,height)，为此只要调整圈出的位置来clip就能裁剪出新图片
+ canvas 区域有几个常用方法：toDataURL() base64 domstring,toBlob()本次就用到toBlob,Blob对象（或者转为File对象）可以直接传给formdata提交给后端。
+ 用户上传图片,得到File对象，将File URL.createObjectURL(File) 创建临时tmpurl domstring
+ canvas 的drawImage需要传一个new Image() ，Image.src=tmpurl domstring,
+ 用户拖动调整,mousemove中记录新的resImgLeft, resImgTop
+ 根据新的resImgLeft, resImgTop在***新的***canvas上 重新绘制裁剪图（要把被clip过的那个canvas替换掉，不能再原来的上面继续clip）

## 关于canvas裁剪的坑


+ 一个HTMLCanvasElement被clip一次后就无法重新,被clip过的就代表画布的可见区域只有那么大了，
解决：重新创建新的canvas replaceChild掉原来的canvas,重新绘制drawImage（注意要先arc,clip最后再drawImage）