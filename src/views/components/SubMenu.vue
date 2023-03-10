<template>
  <div>
    <template v-if="!isEmpty(subMenu.subMenu)">
      <a-sub-menu :key="subMenu.value">
        <template #title>{{ subMenu.label }}</template>
        <sub-menu
          v-for="subSubItem in subMenu.subMenu"
          :key="subSubItem.value"
          :menu="subSubItem"
        />
      </a-sub-menu>
    </template>
    <template v-else>
      <a-menu-item :key="subMenu.value">
        {{ subMenu.label }}
      </a-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
import isEmpty from 'lodash/isEmpty';
import { defineComponent, defineAsyncComponent, ref } from 'vue';

export default defineComponent({
  name: 'SubMenu',
  components: {
    SubMenu: defineAsyncComponent(
      () => import('@/views/components/SubMenu.vue')
    ),
  },
  props: {
    menu: { type: Array, default: () => [] },
    level: { type: Number, default: 0 },
  },
  setup: (props) => {
    /**
     * data
     */
    const subMenu = ref<any>(props.menu);
    return {
      isEmpty,
      subMenu,
    };
  },
});
</script>
