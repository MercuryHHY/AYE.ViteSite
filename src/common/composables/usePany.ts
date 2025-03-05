function initStarNotification() {
  setTimeout(() => {
    ElNotification({
      title: "为爱发电！",
      type: "success",
      message: h(
        "div",
        null,
        [
          h("div", null, "AYE 迅捷开发框架,开源迭代中，欢迎 star"),
          h("a", { style: "color: teal", target: "_blank", href: "https://github.com/" }, "点击传送github")
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 0)
}

function initStoreNotification() {
  setTimeout(() => {
    ElNotification({
      title: "我有严重的厌蠢症",
      type: "warning",
      message: h(
        "div",
        null,
        [
          h("div", null, "如果你什么都不想干，什么都想问，先看看医生吧"),
          h("a", { style: "color: teal", target: "_blank", href: "https://www.pkuph.cn" }, "点击送医院")
        ]
      ),
      duration: 0,
      position: "bottom-right"
    })
  }, 500)
}

/** 作者的小心思 */
export function usePany() {
  return { initStarNotification, initStoreNotification }
}
