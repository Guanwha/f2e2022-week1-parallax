<template>
  <section class="flex-ccc">
    <div class="w-full h-[67px] overflow-hidden relative">
      <img id="marquee-top" class="absolute max-w-fit top-0 left-0" src="@/assets/break_question/marquee_desktop.svg" alt="">
    </div>
    <div class="bg overflow-hidden relative">
      <!-- center -->
      <img id="title" class="absolute inset-x-1/2 -translate-x-1/2 inset-y-1/2 -translate-y-1/2" src="@/assets/break_question/title.svg" alt="title">
      <div id="title_text" class="absolute left-0 right-0 bottom-[13%] flex-rcc gap-12">
        <p class="text-h4 font-bold">前端工程師</p>
        <img class="w-[22px] h-[22px]" src="@/assets/break_question/cross.svg" alt="cross">
        <p class="text-h4 font-bold">UI設計師</p>
      </div>
      <!-- hands -->
      <img id="hand_left" class="absolute left-[15%] inset-y-1/2 -translate-y-1/2 w-[200px] -rotate-45" src="@/assets/break_question/hand_left.png" alt="hand_left">
      <img id="hand_right" class="absolute right-[15%] inset-y-1/2 -translate-y-1/2 w-[200px] rotate-45" src="@/assets/break_question/hand_right.png" alt="hand_right">
      <!-- jobs -->
      <img id="designer" class="absolute left-[12%] bottom-[-10%]" src="@/assets/break_question/designer.svg" alt="designer">
      <img id="developer" class="absolute right-[25%] top-[10%]" src="@/assets/break_question/developer.svg" alt="developer">
    </div>
    <div class="w-full h-[67px] overflow-hidden relative">
      <img id="marquee-bottom" class="absolute max-w-fit bottom-0 right-0" src="@/assets/break_question/marquee_desktop.svg" alt="">
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const scrollTrigger = { trigger: '#title', scrub: 4, start: 'bottom bottom', end: 'top center'};

onMounted(() => {

  setTimeout(() => {
    // marquee-top
    let dom = document.querySelector('#marquee-top');
    let parent_w = dom.parentNode.getBoundingClientRect().width;
    const marquee_top_w = dom.getBoundingClientRect().width;
    const marquee_top_left = `${(parent_w - marquee_top_w) / parent_w * 100}%`;
    gsap.to("#marquee-top", {scrollTrigger, left: marquee_top_left, ease: "linear"});
    // var tl = new TimelineMax({paused:true});
    // tl.to("#marquee-top", 1, {right:0, ease:Linear.easeNone}, "label1").add("label2");
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#marquee-top",
    //     start: 'bottom center',
    //     end: 'bottom bottom',
    //     scrub: 1,
    //   },
    // });
    // tl.addLabel('left').to("#marquee-top", {right:0, ease:Linear.easeNone}).addLabel('right');

    // middle components
    gsap.from("#title", {scrollTrigger, scale: 0, opacity: 0, ease: "power1"});
    gsap.from("#title_text", {scrollTrigger, scale: 0, opacity: 0, ease: "power1"});
    gsap.from("#hand_left", {scrollTrigger, left: '40%', opacity: 0, rotate: 0, ease: "power1"});
    gsap.from("#hand_right", {scrollTrigger, right: '40%', opacity: 0, rotate: 0, ease: "power1"});
    gsap.from("#designer", {scrollTrigger, left: '10%', bottom: '-30%', rotate: -90, opacity: 0, ease: "power1"});
    gsap.from("#developer", {scrollTrigger, right: '23%', top: '-20%', rotate: 90, opacity: 0, ease: "power1"});

    // marquee-bottom
    dom = document.querySelector('#marquee-bottom');
    parent_w = dom.parentNode.getBoundingClientRect().width;
    const marquee_bottom_w = dom.getBoundingClientRect().width;
    const marquee_bottom_right = `${(parent_w - marquee_bottom_w) / parent_w * 100}%`;
    gsap.to("#marquee-bottom", {scrollTrigger, right: marquee_bottom_right, ease: "linear"});
  }, 500);
});
</script>

<style lang="scss">
.bg {
  @apply w-full;
  padding-bottom: 48.3%;
  @apply bg-contain;
  background-image: url('/src/assets/break_question/bg.svg');
}
</style>