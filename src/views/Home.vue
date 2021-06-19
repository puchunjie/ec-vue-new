<template>
  <a-layout class="app-conainer">
    <a-layout-sider v-model="collapsed" :trigger="null" :width="256" collapsible>
      <div class="logo" >意施精准塑形普拉提</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="setting" /><span>Navigation Four</span></span
          >
          <a-menu-item key="1"> Option 7 </a-menu-item>
          <a-menu-item key="2"> Option 8 </a-menu-item>
          <a-menu-item key="3"> Option 9 </a-menu-item>
          <a-menu-item key="5"> Option 10 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="setting" /><span>Navigation Four</span></span
          >
          <a-menu-item key="7"> Option 7 </a-menu-item>
          <a-menu-item key="8"> Option 8 </a-menu-item>
          <a-menu-item key="9"> Option 9 </a-menu-item>
          <a-menu-item key="10"> Option 10 </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="less">
.app-conainer {
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    overflow: hidden;
    padding: 0 5px;
  }
}
</style>
