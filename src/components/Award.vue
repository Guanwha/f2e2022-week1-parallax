<template>
  <section id="award" class="mx-auto w-[1104px] py-40 flex-ccc gap-[60px]">
    <!-- title -->
    <div id="award-title" class="flex-rcc">
      <h2 class="text-cn1 text-h2 font-bold text-shadow-white px-9">
        <span>區區修煉已經無法滿足了嗎？</span>
        <span>還有比賽等著你！</span>
      </h2>
    </div>
    <!-- animation -->
    <div class="w-2/3 flex-ccc gap-2.5">
      <div class="w-full flex-rsbb">
        <img src="@/assets/award/img_flag.svg" alt="flag">
        <img src="@/assets/award/img_car.svg" alt="car">
      </div>
      <div class="line text-shadow-white"></div>
    </div>
    <!-- review + award -->
    <div class="flex-rcc gap-[60px]">
      <!-- review -->
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
      <!-- award -->
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
  </section>
</template>

<script setup>
const classCard = `bg-cn4 rounded-card p-10 flex-ctc`;
const classCardTop = `pb-4 flex-ccc`;
const classCardTitle = `text-h2 text-cp1 font-bold`;
const classCardBottom = `p-10 flex-ctl text-cn1`;
const classCardInfoH5 = `text-h5 flex-rlc whitespace-nowrap gap-2`;
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
</style>