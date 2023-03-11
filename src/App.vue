<template>
  <a-config-provider>
    <div class="p-4 space-y-4 flex space-x-6">
      <div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          :open-keys="openKeys"
          mode="inline"
          class="w-64"
          @open-change="onOpenChange"
          @click="handleClick"
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
      <div>
        <a-select
          v-model:value="selectedDrink"
          placeholder="Select"
          class="w-64"
          :allow-clear="true"
          :filter-option="false"
          :not-found-content="null"
          label-in-value
          :options="selectOptions"
          @change="handleChange"
        />
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import {
  defineComponent,
  defineAsyncComponent,
  ref,
  computed,
  onMounted,
} from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    SubMenu: defineAsyncComponent(() =>
      import('@/views/components/SubMenu.vue')
    ),
  },
  setup: () => {
    /**
     * data
     */
    const selectedKeys = ref([]);
    const openKeys = ref([]);
    const selectedDrink = ref(undefined);
    const menuOptions = ref([
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
    const selectOptions = ref([
      { label: '黑糖珍珠鮮奶', value: 'g1-1-1', group: ['g1', 'g1-1'] },
      { label: '黑糖芋圓鮮奶', value: 'g1-1-2', group: ['g1', 'g1-1'] },
      { label: '黑糖蒟蒻鮮奶', value: 'g1-1-3', group: ['g1', 'g1-1'] },
      { label: '黑糖冬瓜牛奶', value: 'g1-2-1', group: ['g1', 'g1-2'] },
      { label: '黑糖冬瓜珍珠', value: 'g1-2-2', group: ['g1', 'g1-2'] },
      { label: '烏龍茶', value: 'g2-1', group: ['g2'] },
      { label: '綠茶', value: 'g2-2', group: ['g2'] },
      { label: '紅茶', value: 'g2-3', group: ['g2'] },
      { label: '青茶', value: 'g2-4', group: ['g2'] },
      { label: '濃縮咖啡', value: 'g3-1-1', group: ['g3', 'g3-1'] },
      { label: '美式咖啡', value: 'g3-1-2', group: ['g3', 'g3-1'] },
      { label: '黑糖拿鐵', value: 'g3-2-1-1', group: ['g3', 'g3-2', 'g3-2-1'] },
      { label: '榛果拿鐵', value: 'g3-2-1-2', group: ['g3', 'g3-2', 'g3-2-1'] },
      { label: '香草拿鐵', value: 'g3-2-1-3', group: ['g3', 'g3-2', 'g3-2-1'] },
      { label: '卡布奇諾', value: 'g3-3', group: ['g3'] },
      { label: '摩卡', value: 'g3-4', group: ['g3'] },
    ]);
    /**
     * computed
     */
    const rootSubmenuKeys = computed(() => {
      return menuOptions.value.map((item) => {
        return item.value;
      });
    });
    /**
     * mehtods
     */
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find(
        (key) => openKeys.value.indexOf(key) === -1
      );
      if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
        openKeys.value = keys;
      } else {
        openKeys.value = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    const handleChange = (event) => {
      selectedKeys.value = [];
      selectedKeys.value.push(event.value);
      openKeys.value = event.option.group;
      localStorage.setItem('selectedKeys', event.value);
      localStorage.setItem('openKeys', JSON.stringify(event.option.group));
    };
    const handleClick = (event) => {
      selectedDrink.value = event.key;
      localStorage.setItem('selectedKeys', event.key);
      localStorage.setItem('openKeys', JSON.stringify(event.keyPath));
    };
    const setData = () => {
      const localSelectedKeys = localStorage.getItem('selectedKeys');
      const localOpenKeys = localStorage.getItem('openKeys');
      selectedKeys.value.push(localSelectedKeys);
      selectedDrink.value = localSelectedKeys;
      openKeys.value = JSON.parse(localOpenKeys);
    };
    /**
     * life cycle
     */
    onMounted(() => {
      setData();
    });
    //
    return {
      isEmpty,
      selectedKeys,
      openKeys,
      menuOptions,
      onOpenChange,
      selectOptions,
      selectedDrink,
      handleChange,
      handleClick,
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
