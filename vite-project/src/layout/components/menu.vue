<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px" mode="inline" @click="handleClick">
        <template v-for="item in menuList">
            <template v-if="item.children">
                <a-sub-menu :key="item.key">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>{{ item.lable }}</template>
                    <a-menu-item v-for="itm in item.children" :key="itm.key">{{ itm.lable }}</a-menu-item>
                </a-sub-menu>
            </template>
            <a-menu-item v-else :key="item.key">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                {{item.lable}}
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppstoreOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'

const menuList: Array<{
    lable: string
    key: string
    url: string
    children?: Array<any>
}> = [
    { lable: 'Home Page', key: 'app', url: '/' },
    { lable: 'React App', key: 'react', url: '/app-react' },
    { lable: 'Vue App', key: 'vue', url: '/app-vue' },
    { lable: 'Angular App', key: 'angular', url: '/app-angular' },
    {
        lable: 'Navigation',
        key: 'sub',
        url: '',
        children: [
            { lable: 'Table', key: '1', url: '/nav/table' },
            { lable: 'List', key: '2', url: '/nav/list' },
        ],
    },
]

const selectedKeys = ref<string[]>(['app'])
const openKeys = ref<string[]>(['app'])
const handleClick: MenuProps['onClick'] = (e: any) => {
    if (e.keyPath?.length > 1) {
        const isActive = menuList.find((ele) => ele.key === e.keyPath[0])
        const isNavActive = (isActive?.children as Array<any>).find(
            (el) => el.key === e.key
        )
        window.history.pushState({}, '', isNavActive.url)
    } else {
        const isActive = menuList.find((ele) => ele.key === e.key)
        window.history.pushState({}, '', isActive?.url as string)
    }
}
</script>