<template>
  <section id="question" class="mx-auto mb-48 max-w-[1440px] min-w-[375px] relative" style="padding-bottom: 71%">
    <img id="q1-1" class="question-1 absolute w-[19.4%] top-[13.9%] left-[23.9%]" src="@/assets/question/q1-1.svg" alt="q1-1">
    <img id="q1-2" class="question-1 absolute w-[4.4%] top-[14.7%] left-[47.2%]" src="@/assets/question/q1-2.svg" alt="q1-2">
    <img id="q1-3" class="question-1 absolute w-[13.3%] top-[20.5%] left-[60.0%]" src="@/assets/question/q1-3.svg" alt="q1-3">
    <img id="q1-text" class="question-1 absolute w-[38.4%] top-[23.7%] left-[19.8%]" src="@/assets/question/q1-text.svg" alt="q1-text">
    <img id="q2-1" class="question-2 absolute w-[17.9%] top-[50.7%] left-[18.3%]" src="@/assets/question/q2-1.svg" alt="q2-1">
    <img id="q2-2" class="question-2 absolute w-[3.1%] top-[49.4%] left-[39.6%]" src="@/assets/question/q2-2.svg" alt="q2-2">
    <img id="q2-text" class="question-2 absolute w-[36.8%] top-[36.9%] left-[44.9%]" src="@/assets/question/q2-text.svg" alt="q2-text">
    <img id="q3-1" class="question-3 absolute w-[24.3%] top-[61.9%] left-[39.2%]" src="@/assets/question/q3-1.svg" alt="q3-1">
    <img id="q3-2" class="question-3 absolute w-[10.5%] top-[58.3%] left-[68.4%]" src="@/assets/question/q3-2.svg" alt="q3-2">
    <img id="q3-3" class="question-3 absolute w-[13.5%] top-[73.1%] left-[66.6%]" src="@/assets/question/q3-3.svg" alt="q3-3">
    <img id="q3-text" class="question-3 absolute w-[38.4%] top-[72.5%] left-[24.9%]" src="@/assets/question/q3-text.svg" alt="q3-text">
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  setTimeout(() => {
    gsap.from(".question-1", {scrollTrigger: { trigger: '#q1-text', scrub: 1, start: 'bottom bottom'}, opacity: 0, scale: 0, ease: "elastic.out(1, 0.5)"});
    gsap.from(".question-2", {scrollTrigger: { trigger: '#q2-1', scrub: 1, start: 'bottom bottom'}, opacity: 0, scale: 0, ease: "elastic.out(1, 0.5)"});
    gsap.from(".question-3", {scrollTrigger: { trigger: '#q3-text', scrub: 1, start: 'bottom bottom'}, opacity: 0, scale: 0, ease: "elastic.out(1, 0.5)"});
  }, 500);
});
</script>

<style>

</style>