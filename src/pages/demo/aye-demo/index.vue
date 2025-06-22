<script lang="ts" setup>
import { testAyeApi } from "@@/apis/ayedemos"
import { ElMessage } from "element-plus"

defineOptions({
  // 命名当前组件
  name: "AyeDemo"
})

function test() {
  testAyeApi().then((res: any) => {
    console.log(res)
    console.log(res.data)
  })
}

function testElMessage() {
  ElMessage({
    message: "测试 alert",
    type: "warning"
  })
}

function testElNotification() {
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
}

const message = ref("Hello World!")
const isRed = ref(true)
const color = ref("green")
function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === "green" ? "blue" : "green"
}

const isShow = ref(false)
function toggleShow() {
  isShow.value = !isShow.value
}

const input = ref("")
const checkedNames = ref(["Jack"])
</script>

<template>
  <div class="app-container">
    <el-button type="primary" @click="test">
      测试后端接口
    </el-button>

    <el-button type="primary" @click="testElMessage">
      测试ElMessage
    </el-button>

    <el-button type="primary" @click="testElNotification">
      测试ElNotification
    </el-button>

    <el-button type="success" @click="toggleShow">
      显示/隐藏
    </el-button>

    <p>
      <span :title="message" @click="toggleRed" :class="{ red: isRed }">
        文本测试1 标题绑定，class
      </span>
    </p>

    <p>
      <span :style="{ color }" @click="toggleColor">
        文本测试2 样式绑定
      </span>
    </p>

    <p v-if="isShow">
      显示
    </p>
    <P v-else>
      隐藏
    </P>

    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    <P>{{ input }}</P>

    <h2>Multi Checkbox</h2>
    <!-- id是唯一标识，
       for是for="jack" 和 id="jack" 的作用是建立 <label> 和 <input> 之间的关联。 -->
    <!-- 关联后，点击 <label> 的文字会触发 <input> 的操作（如切换复选框状态）。 -->
    <!-- 这里的数据绑定 不只是bool类型,这里的数组数据就是一个很好的例子 -->
    <!-- value 就是 checkbox 点击之后 给 绑定的目标checkedNames  的值 -->
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>

    <p>Checked names: {{ checkedNames }}</p>
  </div>
</template>

<style>
.red {
  color: red;
}
</style>
