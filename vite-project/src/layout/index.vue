<template>
    <div>
        <Header />
        <div class="cust-flex app-main">
            <Menu />
            <div class="content">
                <router-view />
                <div id="custelement"></div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import Menu from './components/menu.vue'
import Header from './components/header.vue'
</script>

<style scoped>
.content {
    padding: 0 10px;
    width: calc(100% - 256px);
}
.app-main {
    padding-top: 8px;
    height: calc(100% - 60px);
}
</style>