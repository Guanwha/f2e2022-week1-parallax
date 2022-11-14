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
    <ul class="flex-rrc gap-8 indicate">
      <li class="hidden sm:inline indicate-h"><a href="https://2022.thef2e.com/news">關卡資訊</a></li>
      <li class="hidden sm:inline indicate-h"><a href="https://2022.thef2e.com/works">作品列表</a></li>
      <li class="hidden sm:inline indicate-h"><a href="https://hexschool.tw/OsAcp">攻略資源</a></li>
      <li class="hidden sm:inline indicate-h"><a href="https://2022.thef2e.com/jobs">求職專區</a></li>
      <a class="ml-4 border rounded-button" :class="[classLoginBtnPadding, classLoginBtnNormal, classLoginBtnHover]" href="https://2022.thef2e.com/login">
        <span class="inline sm:hidden">立即報名</span>
        <span class="hidden sm:inline">登入</span>
      </a>
    </ul>
    <!-- pop menu (mobile) -->
    <div class="absolute top-0 inset-x-0 bg-cn6 flex-ccc px-4 py-8" v-if="isOpenMobileMenu">
      <div class="w-full" @click="isOpenMobileMenu = false"><img src="@/assets/header/btn_close.svg" alt="關閉選單"></div>
      <ul class="indicate">
        <li class="py-4 indicate-v"><a href="https://2022.thef2e.com/news">關卡資訊</a></li>
        <li class="py-4 indicate-v"><a href="https://2022.thef2e.com/works">作品列表</a></li>
        <li class="py-4 indicate-v"><a href="https://hexschool.tw/OsAcp">攻略資源</a></li>
        <li class="py-4 indicate-v"><a href="https://2022.thef2e.com/jobs">求職專區</a></li>
      </ul>
      <a class="mt-6 w-full border rounded-button py-2" :class="[classLoginBtnNormal, classLoginBtnHover]" href="https://2022.thef2e.com/login">登入</a>
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

button:hover {
  box-shadow: 0px 0px 1rem rgba($cs1, 0.6);
}
</style>