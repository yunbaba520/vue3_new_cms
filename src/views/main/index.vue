<template>
  <div>main</div>
  <el-button type="primary">xx</el-button>
  <el-button type="success" plain>Success</el-button>
  <div style="font-size: 20px">
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要直接提供它们 -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
  <el-icon color="#409EFC" class="no-inherit">
    <Share />
  </el-icon>
</template>

<script setup></script>

<style lang="scss" scoped></style>
