<template>
  <section class="mx-auto w-[1104px] py-40 flex-ccc gap-[60px]">
    <div class="flex-ccc gap-10 relative">
      <div class="text-h3 text-cs1 border-4 border-cs1 rounded-full px-9 py-4">年度最強合作 三大主題來襲</div>
      <div class="text-h5 text-white flex-ccc">
        <p>各路廠商強強聯手</p>
        <p>共同設計出接地氣的網頁互動挑戰關卡</p>
      </div>
      <img class="absolute bottom-[83%] left-[97%]" src="@/assets/level/lightning.svg" alt="lightning">
    </div>
    <ul class="flex-rcc gap-10">
      <li class="card" v-for="(level, idx) in levels" :key="idx">
        <!-- front -->
        <div class="card-front flex-ccc">
          <div class="company">{{ level.company }}</div>
          <div class="mt-4 flex-ccc">
            <h4>{{ level.h4 }}</h4>
            <h5>{{ level.h5 }}</h5>
          </div>
          <img :src="`src/assets/level/${level.imgName}.png`" :alt="level.imgName">
          <div class="footer flex-rsbc">
            <p class="week">{{ level.week }}</p>
            <div class="detail flex-rcc">
              <p>查看關卡細節</p>
              <img src="@/assets/level/link_blank.svg" :alt="`${level.imgName} detail`" target="_blank" ref="noopener">
            </div>
          </div>
        </div>
        <!-- back -->
        <div class="card-back flex-csbc">
          <p>{{ level.week }}</p>
          <img src="@/assets/level/lock.png" alt="">
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const levels = [
  {
    week: 'WEEK 1',
    company: '# 板塊設計',
    h4: 'The F2E 活動網站設計',
    h5: '視覺滾動',
    imgName: 'level-1',
  },
  {
    week: 'WEEK 2',
    company: '# 凱鈿行動科技',
    h4: '今晚，我想來點點簽',
    h5: 'CANVAS',
    imgName: 'level-2',
  },
  {
    week: 'WEEK 3',
    company: '# 鈦坦科技',
    h4: 'Scrum 新手村',
    h5: 'JS Draggable',
    imgName: 'level-3',
  },
];
</script>

<style lang="scss">
.card {
  @apply w-[300px] h-[360px];
  @apply relative;
  .card-back {
    @apply absolute;
    @apply inset-0;
    @apply w-[300px] h-[360px];
    @apply rounded-card;
    @apply px-14 py-[50px];
    @apply bg-gradient-to-b from-cp1 to-cp3;
    @apply opacity-100;
    p {
      @apply text-h3 text-cn1 font-bold tracking-widest;
    }
  }
  .card-front {
    @apply absolute;
    @apply inset-0;
    @apply w-[300px] h-[360px];
    @apply rounded-card;
    @apply border-8 border-cp3;
    @apply bg-white;
    transform: rotateY(-90deg);
    @apply opacity-0;
    .company {
      @apply mt-4 px-2 py-1 rounded-lg bg-cs1 text-title text-cn5 font-bold;
    }
    h4 {
      @apply text-h4 text-cp3 font-bold;
    }
    h5 {
      @apply text-h5 text-cp3;
    }
    .footer {
      @apply w-full px-6 py-4;
    }
    .week {
      @apply text-cp2 text-p4 font-bold tracking-widest;
    }
    .detail {
      p {
        @apply text-cp3 text-p4 font-bold;
      }
      img {
        @apply w-6 h-6;
      }
    }
  }
}
</style>