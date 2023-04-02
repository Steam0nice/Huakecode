window.onscroll = function() {
    let scrollNow = window.pageYOffset;
    let pageClientHeight = document.documentElement.clientHeight;
    let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - pageClientHeight;
    let fullWindowHeightInPercentage = Math.round((scrollNow / scrollHeight) * 100);
    let percentage = document.getElementById('percentage');
    percentage.innerHTML = '<i class="iconfont icon-A71"></i>&nbsp;' + fullWindowHeightInPercentage + '%';
    if (fullWindowHeightInPercentage == 0) percentage.innerHTML = '<i class="iconfont icon-A71"></i>&nbsp;到顶啦！';
    if (fullWindowHeightInPercentage == 100) percentage.innerHTML = '<i class="iconfont icon-A71"></i>&nbsp;到底啦！';
    if (fullWindowHeightInPercentage == Infinity) percentage.innerHTML = '<i class="iconfont icon-A71"></i>&nbsp;返回顶部！';
};