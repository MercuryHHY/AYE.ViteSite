<script lang="ts" setup>
defineOptions({
  // 命名当前组件
  name: "Dictionaries"
})

// 示例主表数据
const mainTableData = ref([
  { id: 1, name: "字典A" },
  { id: 2, name: "字典B" },
  { id: 3, name: "字典C" }
])

// 示例详情表数据
const detailTableData = ref<Record<number, { key: string, value: string }[]>>({
  1: [
    { key: "A1", value: "值A1" },
    { key: "A2", value: "值A2" }
  ],
  2: [
    { key: "B1", value: "值B1" }
  ],
  3: [
    { key: "C1", value: "值C1" },
    { key: "C2", value: "值C2" }
  ]
})

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]

// 当前选中的主表ID
const selectedId = ref(mainTableData.value[0].id)
</script>

<template>
  <div class="app-container">
    <!-- 列之间的间距为 20 像素 -->
    <el-row :gutter="20">
      <!-- 左侧占 8/24 的宽度。 -->
      <el-col :span="8">
        <!-- 卡片组件容器 -->
        <el-card>
          <div class="clearfix">
            <span>字典主表</span>
          </div>

          <!--
              表格组件
              指定数据来源于 mainTableData
              @row-click="row => selectedId = row.id"：点击某一行时，将该行的 id 赋值给 selectedId，用于右侧详情表的切换。
              highlight-current-row：高亮当前选中行。
              :row-class-name="({ row }) => row.id === selectedId ? 'current-row' : ''"：如果当前行的 id 等于选中的 id，则添加 current-row 样式，实现高亮。
                      -->
          <el-table
            :data="mainTableData"
            style="width: 100%"
            @row-click="row => selectedId = row.id"
            highlight-current-row
            :row-class-name="({ row }) => row.id === selectedId ? 'current-row' : ''"
          >
            <!-- el-table-column：定义表格的列，分别显示 id 和 name。       -->
            <el-table-column prop="id" label="ID" width="60" />
            <el-table-column prop="name" label="名称" />
          </el-table>
        </el-card>
      </el-col>

      <!-- 右侧占 16/24 的宽度 -->
      <el-col :span="16">
        <el-card>
          <div class="clearfix">
            <span>详情表</span>
          </div>

          <!-- 表格数据根据左侧选中的主表 id 动态切换，显示对应的详情数据。 -->
          <el-table
            :data="detailTableData[selectedId] || []"
            style="width: 100%"
          >
            <el-table-column prop="key" label="键" />
            <el-table-column prop="value" label="值" />
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-card>
          <div class="clearfix">
            <span>示例表格</span>
          </div>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.current-row {
  background: #f5f7fa !important;
}
</style>
