// tab切换JS
function tabS(obj) {
    var tabWrap = document.querySelector(obj);
    var tabList = tabWrap.querySelectorAll(".tab-list")
    var tabItem = tabWrap.querySelectorAll('.tab-item-list')

    tabList[0].classList.add("tab-active");
    tabItem[0].classList.add("tab-active");
    tabItem.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            for (var i = 0; i < tabItem.length; i++) {
                tabList[i].classList.remove('tab-active')
                tabItem[i].classList.remove('tab-active')
            }
            tabList[index].classList.add('tab-active')
            tabItem[index].classList.add('tab-active')
        })
    })
}
tabS(".apparel");
tabS(".elc");
tabS(".apparel")
tabS(".notebook")
tabS(".household-appliances")
tabS(".kitchen-appliances")
tabS(".smart-home")
tabS(".sport-travel")
tabS(".daily-necessities")