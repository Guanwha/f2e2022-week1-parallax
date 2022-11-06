<template>
  <div class="w-full">
    <!-- header -->
    <div class="w-full h-[90px] bg-n6 flex-rsbc px-4 sm:px-8">
      <div class="flex-rlc gap-5">
        <button type="button" class="block sm:hidden">
          <img src="@/assets/btn_menu.svg" alt="開啟選單">
        </button>
        <img src="@/assets/thef2e.svg" alt="logo">
      </div>
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
    </div>
    <!-- banner -->
    <!-- question -->
    <!-- title banner -->
    <!-- level information -->
    <!-- event description -->
    <!-- award -->
    <!-- QA -->
    <!-- sponser -->
  </div>
</template>

<script setup>
// header
const classLoginBtnPadding = `px-4 py-2 sm:px-6 sm:py-3`;
const classLoginBtnNormal = `border-white text-white`;
const classLoginBtnHover = `hover:bg-s1/20 hover:border-s1 hover:text-s1"`;

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