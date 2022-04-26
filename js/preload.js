(function () {
  var oImgList = document.getElementById("img-list");
  var imgs = [
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1448%2Fntk-1448-1477.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653548205&t=7f397e8d3bf8cf203853c5c3f846872c",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2018_Website_appreciate%2F2018-03-14%2F20180314161923.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653548251&t=48589fff2664162ca1860b2dc6974b0c",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091302%2F4nukwq535w24nukwq535w2.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653548269&t=ab910d882235207108fbfaed0bd6f1d9",
  ];

  for (var i = 0, l = imgs.length; i < l; i++) {
    (function (url) {
      var item = new Image();
      item.src = url;
      item.onload = function () {
        oImgList.append(item);
      };
    })(imgs[i]);
  }
})();
