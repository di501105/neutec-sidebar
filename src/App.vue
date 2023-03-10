<template>
  <a-config-provider>
    <div class="p-4 space-y-4">
      <a-menu
        id="dddddd"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        class="w-64"
        @open-change="onOpenChange"
      >
        <a-sub-menu v-for="item in menuOptions" :key="item.value">
          <template #title>{{ item.label }}</template>
          <SubMenu :menu="item.subMenu" />
        </a-sub-menu>
      </a-menu>
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    SubMenu: defineAsyncComponent(
      () => import('@/views/components/SubMenu.vue')
    ),
  },
  setup: () => {
    /**
     * data
     */
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>([]);
    const menuOptions = ref<any>([
      {
        label: '好喝黑糖',
        value: 'g1',
        subMenu: [
          {
            label: '黑糖鮮奶',
            value: 'g1-1',
            subMenu: [
              {
                label: '黑糖珍珠鮮奶',
                value: 'g1-1-1',
              },
              {
                label: '黑糖芋圓鮮奶',
                value: 'g1-1-2',
              },
              {
                label: '黑糖蒟蒻鮮奶',
                value: 'g1-1-3',
              },
            ],
          },
          {
            label: '黑糖冬瓜',
            value: 'g1-2',
            subMenu: [
              {
                label: '黑糖冬瓜牛奶',
                value: 'g1-2-1',
              },
              {
                label: '黑糖冬瓜珍珠',
                value: 'g1-2-2',
              },
            ],
          },
        ],
      },
      {
        label: '茶',
        value: 'g2',
        subMenu: [
          {
            label: '烏龍茶',
            value: 'g2-1',
          },
          {
            label: '綠茶',
            value: 'g2-2',
          },
        ],
      },
    ]);
    /**
     * computed
     */
    const rootSubmenuKeys = computed(() => {
      return menuOptions.value.map((item: any) => {
        return item.value;
      });
    });
    /**
     * mehtods
     */
    const onOpenChange = (keys: any) => {
      console.log(keys, 666666, rootSubmenuKeys.value, openKeys.value);

      const latestOpenKey = keys.find(
        (key: any) => openKeys.value.indexOf(key) === -1
      );
      console.log(latestOpenKey, 88888);

      if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
        console.log(123123123123);

        openKeys.value = keys;
      } else {
        openKeys.value = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    //
    return {
      selectedKeys,
      openKeys,
      menuOptions,
      onOpenChange,
    };
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @apply bg-white min-h-full;
}
</style>
