<script lang="ts" setup>
import { testAyeApi } from "@@/apis/ayedemos"

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
</script>

<template>
  <div class="app-container">
    <el-button type="primary" @click="test">
      测试
    </el-button>
  </div>
</template>
