<template>
  <div class="w-full h-[90px] bg-n6 flex-rsbc px-4 sm:px-8 relative">
    <!-- left -->
    <div class="flex-rlc gap-5">
      <button type="button" class="block sm:hidden" @click="isOpenMobileMenu = true">
        <img src="@/assets/btn_menu.svg" alt="開啟選單">
      </button>
      <img src="@/assets/thef2e.svg" alt="logo">
    </div>
    <!-- right -->
    <ul class="flex-rrc gap-8">
      <li class="hidden sm:inline">關卡資訊</li>
      <li class="hidden sm:inline">攻略資源</li>
      <li class="hidden sm:inline">求職專區</li>
      <li>
        <button type="button" class="ml-4 border rounded-button" :class="[classLoginBtnPadding, classLoginBtnNormal, classLoginBtnHover]">
          <span class="inline sm:hidden">立即報名</span>
          <span class="hidden sm:inline">登入</span>
        </button>
      </li>
    </ul>
    <!-- pop menu (mobile) -->
    <div class="absolute top-0 inset-x-0 bg-n6 flex-ccc px-4 py-8" v-if="isOpenMobileMenu">
      <div class="w-full" @click="isOpenMobileMenu = false"><img src="@/assets/btn_close.svg" alt="關閉選單"></div>
      <ul>
        <li class="py-4">關卡資訊</li>
        <li class="py-4">攻略資源</li>
        <li class="py-4">求職專區</li>
      </ul>
      <button type="button" class="mt-6 w-full border rounded-button py-2" :class="[classLoginBtnNormal, classLoginBtnHover]">登入</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// header
const classLoginBtnPadding = `px-4 py-2 sm:px-6 sm:py-3`;
const classLoginBtnNormal = `border-white text-white`;
const classLoginBtnHover = `hover:bg-s1/20 hover:border-s1 hover:text-s1"`;
const isOpenMobileMenu = ref(false);

</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

ul>li {
  @apply text-p3 text-n2;
}
button:hover {
  box-shadow: 0px 0px 1rem rgba($s1, 0.6);
}
</style>