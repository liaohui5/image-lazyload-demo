(function () {
  var baseURL = "http://localhost:8899/";
  var loadingImgUrl = "imgs/loading.png";
  var datas = [
    { img: "imgs/1.jpeg", title: "图片1" },
    { img: "imgs/2.jpeg", title: "图片2" },
    { img: "imgs/3.jpeg", title: "图片3" },
    { img: "imgs/4.jpeg", title: "图片4" },
    { img: "imgs/5.jpeg", title: "图片5" },
    { img: "imgs/6.jpeg", title: "图片6" },
    { img: "imgs/7.jpeg", title: "图片7" },
    { img: "imgs/8.jpeg", title: "图片8" },
    { img: "imgs/9.jpeg", title: "图片9" },
    { img: "imgs/10.jpeg", title: "图片10" },
    { img: "imgs/11.jpeg", title: "图片11" },
    { img: "imgs/12.jpeg", title: "图片12" },
    { img: "imgs/13.jpeg", title: "图片13" },
    { img: "imgs/14.jpeg", title: "图片14" },
    { img: "imgs/15.jpeg", title: "图片15" },
    { img: "imgs/16.jpeg", title: "图片16" },
  ];
  var len = datas.length;

  // 获取渲染模板(渲染每一项的dom结构)
  function getItemTpl(loadingUrl, realUrl, title) {
    return `<li class="img-item">
        <img src="${baseURL + loadingUrl}" data-src="${baseURL + realUrl}" class="lazyload-img-item" />
        <p class="img-title">${title}</p>
      </li>`;
  }

  // 渲染所有图片(加载中..)
  function renderList() {
    var item;
    var str = "";
    for (var i = 0; i < len; i++) {
      item = datas[i];
      str += getItemTpl(loadingImgUrl, item.img, item.title);
    }
    var oImgList = document.getElementById("img-list");
    oImgList.innerHTML = str;
  }

  /**
   * 节流
   * @param {*} callback
   * @param {*} delay
   * @returns
   */
  function throttle(callback, delay = 1000) {
    var timer = null;
    return function () {
      if (timer) {
        return;
      }
      timer = setTimeout(function () {
        callback();
        timer = null;
      }, delay);
    };
  }

  // 懒加载图片
  function lazyload(images) {
    var len = images.length;

    return function () {
      // clientHeight:可视高度 scrollTop: 滚动的高度
      var clientHeight = document.documentElement.clientHeight;
      var scrollTop = document.documentElement.scrollTop;
      var imgItem, dataSrc;
      for (var i = 0; i < len; i++) {
        imgItem = images[i];
        dataSrc = imgItem.getAttribute("data-src");
        // 当前图片距离页面最顶部的距离小于 当前可视区域 + 已经滚动的高度(此时图片已经可以看到了)
        // 如果 src = data.src 证明图片已经是加载过了
        if (imgItem.offsetTop < clientHeight + scrollTop && imgItem.src !== dataSrc) {
          imgItem.src = dataSrc;
        }
      }
    };
  }

  var init = function () {
    renderList();
    var images = document.getElementsByClassName("lazyload-img-item") || [];
    window.onload = window.onscroll = throttle(lazyload(images), 500);
  };

  init();
})();
