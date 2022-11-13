<template>
  <div class="w-full h-content relative">
    <!-- banner -->
    <section class="mx-auto max-w-[1440px] h-full relative">
      <img id="banner_code" class="w-[9%] absolute bottom-[53%] left-[6.8%] rotate-[-19.31deg]" src="@/assets/banner/code.svg" alt="code">
      <img id="banner_path_left" class="w-[17%] absolute bottom-[38%] left-[18%]" src="@/assets/banner/path_left.svg" alt="path left">
      <img id="banner_dashboard" class="w-[17%] absolute top-[36.5%] right-[18%] rotate-[16.6deg]" src="@/assets/banner/dashboard.svg" alt="dashboard">
      <img id="banner_path_right" class="w-[13.5%] absolute top-[17.5%] right-[6.8%]" src="@/assets/banner/path_right.svg" alt="path right">
      <img id="banner_title" class="w-[50%] absolute top-[15%] left-1/2 -translate-x-1/2" src="@/assets/banner/title.svg" alt="title">
      <p class="absolute top-[40%] left-1/2 -translate-x-1/2 text-[28px] tracking-[.8em] text-cn1">互動式網頁設計</p>
      <button class="absolute top-[55%] left-1/2 -translate-x-1/2 btn-signup">立即報名</button>
    </section>
    <!-- marquee -->
    <section class="absolute bottom-8 left-0 right-0 flex-rcc overflow-hidden">
      <div class="marquee-item px-4 flex-rcc shrink-0 gap-8" v-for="index in 10" :key='index'>
        <img src="@/assets/banner/join_us.svg" alt="">
        <img src="@/assets/banner/star.svg" alt="">
      </div>
    </section>
  </div>
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
  // marquee
  gsap.to(".marquee-item", {
    xPercent: 100,
    repeat: -1,
    duration: 5,
    ease: "linear"
  });
});
</script>

<style lagn="scss" scoped>
.h-content {
  height: calc((100vh - 90px)/6*5);
}
</style>