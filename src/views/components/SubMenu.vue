<template>
  <a-sub-menu v-for="subItem in menu" :key="subItem.value">
    <template #title>{{ subItem.label }}</template>
    <div v-if="!isEmpty(subItem.subMenu)">
      <a-menu-item
        v-for="subSubItem in subItem.subMenu"
        :key="subSubItem.value"
      >
        {{ subSubItem.label }}
      </a-menu-item>
    </div>
    <sub-menu v-else :menu="subItem.subItem" />
  </a-sub-menu>
</template>

<script lang="ts">
import isEmpty from 'lodash/isEmpty';
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'SubMenu',
  components: {
    SubMenu: defineAsyncComponent(
      () => import('@/views/components/SubMenu.vue')
    ),
  },
  props: {
    menu: { type: Array, default: () => [] },
  },
  setup: () => {
    return {
      isEmpty,
    };
  },
});
</script>
