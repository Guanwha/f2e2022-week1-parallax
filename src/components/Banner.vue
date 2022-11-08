<template>
  <section class="mx-auto max-w-[1440px] h-3/4 relative">
    <img id="banner_code" class="w-[9%] absolute bottom-[63%] left-[6.8%] rotate-[-19.31deg]" src="@/assets/banner/code.svg" alt="code">
    <img id="banner_path_left" class="w-[17%] absolute bottom-[48%] left-[18%]" src="@/assets/banner/path_left.svg" alt="path left">
    <img id="banner_dashboard" class="w-[17%] absolute top-[26.5%] right-[18%] rotate-[16.6deg]" src="@/assets/banner/dashboard.svg" alt="dashboard">
    <img id="banner_path_right" class="w-[13.5%] absolute top-[13.5%] right-[6.8%]" src="@/assets/banner/path_right.svg" alt="path right">
    <img id="banner_title" class="w-[50%] absolute top-[10%] left-1/2 -translate-x-1/2" src="@/assets/banner/title.svg" alt="title">
    <p class="absolute top-[30%] left-1/2 -translate-x-1/2 text-[28px] tracking-[.8em] text-n1">互動式網頁設計</p>
    <button class="absolute top-[45%] left-1/2 -translate-x-1/2 btn-signup">立即報名</button>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
onMounted(() => {
  gsap.to("#banner_code", {duration: 5, y: 20, yoyo: true, repeat: -1});
  gsap.from("#banner_path_left", {duration: 1, x: -10});
  gsap.to("#banner_dashboard", {duration: 5, y: -30, yoyo: true, repeat: -1});
  gsap.from("#banner_path_right", {duration: 1, x: 10});
  gsap.from("#banner_title", {duration: 1, y: 30});
});
</script>

<style>

</style>