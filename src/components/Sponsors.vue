<template>
  <section id="sponsors" class="mx-auto w-[1104px] py-20 bg-cn4 flex-ccc gap-15">
    <!-- title -->
    <div class="relative">
      <h2 class="text-cn1 text-h3 font-bold text-shadow-white flex-ccc gap-2">
        <p class="tracking-widest">SPONSORS</p>
        <p>鑽石級贊助商</p>
      </h2>
      <img class="absolute top-8 left-[-41px] drop-shadow-yellow" src="@/assets/sponsors/img_star_big.svg" alt="big star">
      <img class="absolute top-[-6px] right-[-29px] drop-shadow-yellow" src="@/assets/sponsors/img_star_small.svg" alt="small star">
    </div>
    <!-- sponsors -->
    <ul class="flex-rcc gap-15">
      <li class="logo-border">
        <img class="w-35 h-35" src="@/assets/sponsors/logo_block_studio.svg" alt="block studio">
      </li>
      <li class="logo-border">
        <img class="w-35 h-35" src="@/assets/sponsors/logo_kdan_mobile.svg" alt="kdan mobile">
      </li>
      <li class="logo-border">
        <img class="w-35 h-35" src="@/assets/sponsors/logo_titansoft.svg" alt="titansoft">
      </li>
    </ul>
  </section>
</template>

<script setup>
</script>

<style>
.logo-border {
  @apply rounded-card;
  @apply bg-cn1;
  @apply p-1.5;
  &:hover {
    background: linear-gradient(90deg, #9DA4FF 0%, #55FFAD 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF);
  }
}
</style>