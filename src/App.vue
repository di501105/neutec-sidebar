<template>
  <a-config-provider>
    <div class="p-4 space-y-4">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        :open-keys="openKeys"
        mode="inline"
        class="w-64"
        @open-change="onOpenChange"
      >
        <a-sub-menu v-for="item in menuOptions" :key="item.value">
          <template #title>{{ item.label }}</template>
          <sub-menu
            v-for="subItem in item.subMenu"
            :key="subItem.value"
            :menu="subItem"
          />
        </a-sub-menu>
      </a-menu>
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import isEmpty from 'lodash/isEmpty';
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
    const selectedKeys = ref<string[]>([]);
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
            subMenu: [],
          },
          {
            label: '綠茶',
            value: 'g2-2',
            ubMenu: [],
          },
          {
            label: '紅茶',
            value: 'g2-3',
            ubMenu: [],
          },
          {
            label: '青茶',
            value: 'g2-4',
            ubMenu: [],
          },
        ],
      },
      {
        label: '咖啡',
        value: 'g3',
        subMenu: [
          {
            label: '黑咖啡',
            value: 'g3-1',
            subMenu: [
              {
                label: '濃縮咖啡',
                value: 'g3-1-1',
              },
              {
                label: '美式咖啡',
                value: 'g3-1-2',
              },
            ],
          },
          {
            label: '牛奶咖啡',
            value: 'g3-2',
            subMenu: [
              {
                label: '拿鐵',
                value: 'g3-2-1',
                subMenu: [
                  {
                    label: '黑糖拿鐵',
                    value: 'g3-2-1-1',
                  },
                  {
                    label: '榛果拿鐵',
                    value: 'g3-2-1-2',
                  },
                  {
                    label: '香草拿鐵',
                    value: 'g3-2-1-3',
                  },
                ],
              },
            ],
          },
          {
            label: '卡布奇諾',
            value: 'g3-3',
            subMenu: [],
          },
          {
            label: '摩卡',
            value: 'g3-4',
            subMenu: [],
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
      const latestOpenKey = keys.find(
        (key: any) => openKeys.value.indexOf(key) === -1
      );
      if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
        openKeys.value = keys;
      } else {
        openKeys.value = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    //
    return {
      isEmpty,
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
