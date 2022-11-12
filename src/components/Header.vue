<template>
  <header class="w-full h-[90px] bg-cn6 flex-rsbc px-4 sm:px-8 relative">
    <!-- left -->
    <div class="flex-rlc gap-5">
      <button type="button" class="block sm:hidden" @click="isOpenMobileMenu = true">
        <img src="@/assets/header/btn_menu.svg" alt="開啟選單">
      </button>
      <img src="@/assets/header/thef2e.svg" alt="logo" class="h-[22px]">
    </div>
    <!-- right -->
    <ul class="flex-rrc gap-8">
      <li class="hidden sm:inline indicate-h"><span>關卡資訊</span></li>
      <li class="hidden sm:inline indicate-h"><span>攻略資源</span></li>
      <li class="hidden sm:inline indicate-h"><span>求職專區</span></li>
      <button type="button" class="ml-4 border rounded-button" :class="[classLoginBtnPadding, classLoginBtnNormal, classLoginBtnHover]">
        <span class="inline sm:hidden">立即報名</span>
        <span class="hidden sm:inline">登入</span>
      </button>
    </ul>
    <!-- pop menu (mobile) -->
    <div class="absolute top-0 inset-x-0 bg-cn6 flex-ccc px-4 py-8" v-if="isOpenMobileMenu">
      <div class="w-full" @click="isOpenMobileMenu = false"><img src="@/assets/header/btn_close.svg" alt="關閉選單"></div>
      <ul>
        <li class="py-4 indicate-v"><span>關卡資訊</span></li>
        <li class="py-4 indicate-v"><span>攻略資源</span></li>
        <li class="py-4 indicate-v"><span>求職專區</span></li>
      </ul>
      <button type="button" class="mt-6 w-full border rounded-button py-2" :class="[classLoginBtnNormal, classLoginBtnHover]">登入</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// header
const classLoginBtnPadding = `px-4 py-2 sm:px-6 sm:py-3`;
const classLoginBtnNormal = `border-cn1 text-cn1`;
const classLoginBtnHover = `hover:bg-cs1/20 hover:border-cs1 hover:text-cs1"`;
const isOpenMobileMenu = ref(false);

</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

ul>li {
  @apply text-p3 text-cn2;
  &:hover {
    @apply text-cn1;
  }
  &.indicate-h {
    position: relative;
    &:hover > *::before {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 4px;
      @apply rounded-full;
      @apply bg-cs1;
    }
  }
  &.indicate-v {
    position: relative;
    &:hover > *::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -12px;
      transform: translateY(-50%);
      width: 4px;
      height: 9px;
      @apply rounded-full;
      @apply bg-cs1;
    }
  }
}
button:hover {
  box-shadow: 0px 0px 1rem rgba($cs1, 0.6);
}
</style>