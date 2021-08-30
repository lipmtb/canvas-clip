function postdata(options) {
    return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
        let requrl = options.url;
        let myfd = new FormData();
        myfd.append("username",options.data.username);
        myfd.append("userpassword",options.data.psw);
        myfd.append("imgfile",options.data.canvasimg);
     
        
        xhr.onload = function () {
            resolve(xhr.response);
        }
        xhr.open("post",requrl,true);
        // xhr.setRequestHeader("Content-Type","multipart/form-data")
        
        xhr.send(myfd);
    })


}