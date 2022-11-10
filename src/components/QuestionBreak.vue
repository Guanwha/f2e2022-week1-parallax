<template>
  <section class="flex-ccc">
    <div class="w-full h-[67px] overflow-hidden relative">
      <img id="marquee-top" class="absolute max-w-fit top-0 right-0" src="@/assets/break_question/marquee_desktop.svg" alt="">
    </div>
    <div class="bg relative">
      <!-- center -->
      <img class="absolute inset-x-1/2 -translate-x-1/2 inset-y-1/2 -translate-y-1/2" src="@/assets/break_question/title.svg" alt="title">
      <div class="absolute left-0 right-0 bottom-[13%] flex-rcc gap-12">
        <p class="text-h4 font-bold">前端工程師</p>
        <img class="w-[22px] h-[22px]" src="@/assets/break_question/cross.svg" alt="cross">
        <p class="text-h4 font-bold">UI設計師</p>
      </div>
      <!-- hands -->
      <img class="absolute left-[15%] inset-y-1/2 -translate-y-1/2 w-[200px] -rotate-45" src="@/assets/break_question/hand_left.png" alt="hand_left">
      <img class="absolute right-[15%] inset-y-1/2 -translate-y-1/2 w-[200px] rotate-45" src="@/assets/break_question/hand_right.png" alt="hand_right">
      <!-- jobs -->
      <img class="absolute left-[12%] bottom-[-10%]" src="@/assets/break_question/designer.svg" alt="designer">
      <img class="absolute right-[25%] top-[10%]" src="@/assets/break_question/developer.svg" alt="developer">
    </div>
    <div class="w-full h-[67px] overflow-hidden relative">
      <img id="marquee-bottom" class="absolute max-w-fit bottom-0 left-0" src="@/assets/break_question/marquee_desktop.svg" alt="">
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
.bg {
  @apply w-full;
  padding-bottom: 48.3%;
  @apply bg-contain;
  background-image: url('/src/assets/break_question/bg.svg');
}
</style>