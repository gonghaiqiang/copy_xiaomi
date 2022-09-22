// 轮播图JS
const boxA = document.querySelectorAll('.boxA')
const lunboImg = document.getElementById('lunbo-img')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

var lunboIndex = 1;//轮播图片标号
var lunboTimes = setInterval(lunboRun, 4000)

function lunboRun() {
    lunboIndex++;
    //判断lunboIndex是否大于5
    if (lunboIndex > 5) {
        lunboIndex = 1;
        boxA[4].classList.remove('boxB')
    }
    //图片切换
    lunboImg.src = "./images/lunbo-" + lunboIndex + ".jpg";
    //图片下方圆形按钮切换
    boxA[lunboIndex - 1].classList.add('boxB')
    if (lunboIndex != 1) {
        boxA[lunboIndex - 2].classList.remove('boxB')
    }
}
// 鼠标移入轮播图时，轮播图停止，鼠标移出时启动
lunboImg.addEventListener('mouseover', () => {
    clearInterval(lunboTimes)
})
lunboImg.addEventListener('mouseout', () => {
    lunboTimes = setInterval(lunboRun, 4000)
})
// 轮播图的左右按钮
leftBtn.addEventListener('click', () => {
    clearInterval(lunboTimes)
    lunboIndex--
    if (lunboIndex < 1) {
        lunboIndex = 5
        boxA[0].classList.remove('boxB')
    }
    //图片切换
    lunboImg.src = "./images/lunbo-" + lunboIndex + ".jpg";
    //图片下方圆形按钮自动切换
    boxA[lunboIndex - 1].classList.add('boxB')
    boxA[lunboIndex].classList.remove('boxB')
})
rightBtn.addEventListener('click', () => {
    clearInterval(lunboTimes)
    lunboIndex++
    if (lunboIndex > 5) {
        lunboIndex = 1
        boxA[4].classList.remove('boxB')
    }
    //图片切换
    lunboImg.src = "./images/lunbo-" + lunboIndex + ".jpg";
    //图片下方圆形按钮自动切换
    boxA[lunboIndex - 1].classList.add('boxB')
    if (lunboIndex != 1) {
        boxA[lunboIndex - 2].classList.remove('boxB')
    }
})
//图片下方圆形按钮点击切换
boxA.forEach((boxa, index) => {
    clearInterval(lunboTimes)
    boxa.addEventListener('click', () => {
        for (var i = 0; i < boxA.length; i++) {
            boxA[i].classList.remove('boxB')
        }
        lunboIndex = index + 1//重置轮播图片标号
        boxA[index].classList.add('boxB')
        lunboImg.src = "./images/lunbo-" + lunboIndex + ".jpg";
    })
})
