// 头部导航栏下拉列表JS
const navBarlist = document.querySelectorAll('.nav-bar-list')
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        for (var i = 0; i < navBarlist.length; i++) {
            navBarlist[i].style.display = "none";
        }
        navBarlist[index].style.display = 'block'
        navBarlist[index].classList.add('nav-bar-list-Height')
    })
    item.addEventListener('mouseout', () => {
        navBarlist[index].classList.remove('nav-bar-list-Height')
    })
}
)

// 搜索框JS及页脚图片变化JS
const searchInput = document.querySelector('.search-input')
const randomTexts = ['红米', '黑鲨5', '冰箱', '电视', '笔记本', '平板', '洗衣机', '路由器', 'Redmi G 2021']
const infoRightImg = document.querySelector('.info-right-img')
const randomImgs = ['./images/f1ee261b96ae71e845efba398efeca02.png', './images/6b8064258105f185102af17e914838e2.png']

// 搜索框内容提示变化
var randomTextsIndex = 0
var randomImgsIndex = 0
setInterval(() => {
    // 搜索框内容变化
    searchInput.setAttribute('placeholder', randomTexts[randomTextsIndex])
    randomTextsIndex++
    if (randomTextsIndex == randomTexts.length) {
        randomTextsIndex = 0
    }
    // 页脚图片变化
    infoRightImg.setAttribute('src', randomImgs[randomImgsIndex])
    randomImgsIndex++
    if (randomImgsIndex == randomImgs.length) {
        randomImgsIndex = 0
    }
}, 3000);


// 回顶部JS
const goTop = document.querySelector('.go-top')
const fixed = document.querySelector('.fixed')

window.addEventListener('scroll', (event) => {
    var scrollTop = document.documentElement.scrollTop
    if (scrollTop < 700) {
        fixed.style.bottom = '50px'
        goTop.style.display = 'none'
    } else {
        fixed.style.bottom = '80px'
        goTop.style.display = 'block'
    }
})
