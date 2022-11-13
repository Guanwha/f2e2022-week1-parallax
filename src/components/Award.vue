<template>
  <section id="award" class="mx-auto w-[1104px] py-40 flex-ccc gap-[60px]">
    <!-- title -->
    <div class="flex-rcc">
      <h2 class="text-cn1 text-h2 font-bold text-shadow-white px-9">
        <span id="title-1">區區修煉已經無法滿足了嗎？</span>
        <span id="title-2">還有比賽等著你！</span>
      </h2>
    </div>
    <!-- animation -->
    <div class="w-2/3 flex-ccc gap-2.5">
      <div class="w-full flex-rsbb">
        <img id="flag" src="@/assets/award/img_flag.svg" alt="flag">
        <img id="car" src="@/assets/award/img_car.svg" alt="car">
      </div>
      <div id="line" class="line text-shadow-white"></div>
    </div>
    <!-- review + award -->
    <div id="info" class="flex-rct gap-[60px]">
      <!-- review -->
      <div class="award-card-border">
        <div :class="classCard">
          <div :class="classCardTop">
            <img class="icon" src="@/assets/award/icon_review.png" alt="review">
            <h3 :class="classCardTitle">評審機制</h3>
          </div>
          <div :class="classCardBottom" class="gap-8">
            <div class="flex-ctl gap-2">
              <h4 class="text-h4">初選：</h4>
              <p class="text-h5">將由六角學院前端、UI 評審進行第一波篩選。</p>
            </div>
            <div class="flex-ctl gap-2">
              <h4 class="text-h4">決選：</h4>
              <p class="text-h5">由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</p>
            </div>
          </div>
        </div>
      </div>
      <!-- award -->
      <div class="award-card-border">
        <div :class="classCard">
          <div :class="classCardTop">
            <img class="icon" src="@/assets/award/icon_award.png" alt="award">
            <h3 :class="classCardTitle">獎金</h3>
          </div>
          <ul :class="classCardBottom" class="gap-6">
            <li class="flex-ctl gap-2">
              <h5 :class="classCardInfoH5">
                <span class="font-bold">初選佳作：</span>
                <span class="">共六十位</span>
                <span class="text-cs1">數位獎狀</span>
              </h5>
              <p class="text-cn2">每週主題個人組十位、團體組十組</p>
            </li>
            <li class="flex-ctl gap-2">
              <h5 :class="classCardInfoH5">
                <span class="font-bold">個人企業獎：</span>
                <span class="">共六位</span>
                <span class="text-cs1">NTD 3,000/位</span>
              </h5>
              <p class="text-cn2">每週主題各兩名，設計一位、前端 一位</p>
            </li>
            <li class="flex-ctl gap-2">
              <h5 :class="classCardInfoH5">
                <span class="font-bold">團體企業獎：</span>
                <span class="">共三組 </span>
                <span class="text-cs1">NTD 10,000/組</span>
              </h5>
              <p class="text-cn2">每週主題各 1 組</p>
            </li>
            <li class="flex-ctl gap-2">
              <h5 :class="classCardInfoH5">
                <span class="font-bold">以上皆提供完賽數位獎狀</span>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const classCard = `award-card flex-ctc`;
const classCardTop = `pb-4 flex-ccc`;
const classCardTitle = `text-h2 text-cp1 font-bold`;
const classCardBottom = `p-10 flex-ctl text-cn1`;
const classCardInfoH5 = `text-h5 flex-rlc whitespace-nowrap gap-2`;

onMounted(() => {
  let title_1 = document.querySelector("#title-1");
  let title_2 = document.querySelector("#title-2");
  let info = document.querySelector("#info");
  let flag = document.querySelector("#flag");
  let car = document.querySelector("#car");
  let line = document.querySelector("#line");

  let tl = gsap.timeline().from(title_1, { y: 50, opacity: 0, duration: 0.5 })
                          .from(info, { y: 50, opacity: 0, duration: 0.5 }, 0)
                          .from(title_2, { opacity: 0, duration: 0.5 }, ">+=1")
                          .to(car, { x: -line.clientWidth * 0.83, duration: 0.5 })
                          .to(flag, { x: -999, y: -300, rotationZ: 360, duration: 0.5 }, ">-=25%");

  // set trigger
  ScrollTrigger.create({
    trigger: '#award',
    start: "50% center",
    // scrub: 1,                                  // control by scroll
    toggleActions: "play none none reverse",   // auto-animation
    animation: tl,
  });
});
</script>

<style lang="scss" scoped>
.line {
  @apply w-full;
  height: 3px;
  @apply bg-cn1;
}
.icon {
  @apply w-20 h-20;
}
.award-card {
  @apply rounded-card;
  @apply bg-cn4;
  @apply duration-1000;
  @apply p-10;
}
.award-card-border {
  @apply rounded-card;
  background: linear-gradient(100.38deg, #313A65 3.95%, rgba(49, 58, 101, 0) 100%);
  @apply duration-1000;
  @apply p-0.5;
  &:hover {
    background: linear-gradient(142.33deg, rgba(157, 164, 255, 0.8) -0.03%, rgba(85, 255, 173, 0.8) 99.97%);
    @apply -translate-y-8;
  }
}
</style>