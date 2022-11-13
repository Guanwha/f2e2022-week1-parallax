<template>
  <section id="event" class="mx-auto w-[1104px] py-40 flex-ccc gap-[100px]">
    <!-- title -->
    <div id="event-title" class="flex-rcc">
      <img src="@/assets/event/title_left.svg" alt="">
      <h2 class="text-cn1 text-h1 font-bold text-shadow-white px-9">活動說明</h2>
      <img src="@/assets/event/title_right.svg" alt="">
    </div>
    <!-- flow cards -->
    <div class="flex-ccc">
      <div class="flex-rsbc">
        <!-- flow 1 -->
        <div id="flow-1" :class="classCard">
          <img :class="classCardIcon" src="@/assets/event/icon_signup.png" alt="signup icon">
          <div :class="classCardInfo">
            <h3 :class="classCardTitle">開放報名</h3>
            <div :class="classCardTime">
              <p><span :class="classCardDate">10/13</span><span>(四) 早上 11:00 </span></p>
              <div :class="classCardDateTo"><p :class="classCardDateToIcon"></p></div>
              <p><span :class="classCardDate">10/30</span><span>(日) 晚上 23:59</span></p>
            </div>
            <p :class="classCardDescription">截止前可修改報名組別</p>
          </div>
        </div>
        <!-- > -->
        <img id="to-right" class="m-9" src="@/assets/event/icon_arrow_right.svg" alt="">
        <!-- flow 2 -->
        <div id="flow-2" :class="classCard">
          <div :class="classCardInfo">
            <h3 :class="classCardTitle">各組別開賽</h3>
            <div :class="classCardTime">
              <p><span :class="classCardDate">10/31</span><span>UI組、團體組開賽 </span></p>
              <!-- <p :class="classCardDateTo"></p> -->
              <p><span :class="classCardDate">11/07</span><span>前端組開賽</span></p>
            </div>
            <p :class="classCardDescription">前端工程師可採用 UI 設計師的設計稿產出完整作品</p>
          </div>
          <img :class="classCardIcon" src="@/assets/event/icon_start.png" alt="start icon">
        </div>
      </div>
      <div class="w-full flex-rsac">
        <!-- V -->
        <div></div>
        <div></div>
        <img id="to-down" class="m-9" src="@/assets/event/icon_arrow_down.svg" alt="">
      </div>
      <div class="flex-rsbc flex-r-reverse">
        <!-- flow 3 -->
        <div id="flow-3" :class="classCard">
          <div :class="classCardInfo">
            <h3 :class="classCardTitle">線上直播</h3>
            <div :class="classCardTime">
              <p><span :class="classCardDate">11/03 - 11/24</span><span>每週四 </span></p>
              <!-- <p :class="classCardDateTo"></p> -->
              <!-- <p><span :class="classCardDate">11/07</span><span>前端組開賽</span></p> -->
            </div>
            <!-- <p :class="classCardDescription"></p> -->
          </div>
          <img :class="classCardIcon" src="@/assets/event/icon_live.png" alt="start icon">
        </div>
        <!-- < -->
        <img id="to-left" class="m-9" src="@/assets/event/icon_arrow_left.svg" alt="">
        <!-- flow 4 -->
        <div id="flow-4" :class="classCard">
          <img :class="classCardIcon" src="@/assets/event/icon_upload.png" alt="upload icon">
          <div :class="classCardInfo">
            <h3 :class="classCardTitle">登錄作品</h3>
            <div :class="classCardTime">
              <p><span :class="classCardDate">10/31</span><span>(一) 中午 12:00 </span></p>
              <div :class="classCardDateTo"><p :class="classCardDateToIcon"></p></div>
              <p><span :class="classCardDate">11/28</span><span>(一) 中午 12:00 </span></p>
            </div>
            <p :class="classCardDescription">依賽程登錄作品</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const classCard = `card flex-rsbc`;
const classCardIcon = `w-[120px] h-[120px]`;
const classCardInfo = `w-[260px] flex-ccl gap-4 text-cn1`;
const classCardTitle = `text-h3 font-bold`;
const classCardTime = `flex-ccl gap-2 text-h5`;
const classCardDate = `mr-2 text-cs1`;
const classCardDateTo = `w-full flex-rcc`;
const classCardDateToIcon = `w-0.5 h-3 border border-n1`;
const classCardDescription = `text-h5`;

onMounted(() => {
  let title = document.querySelector("#event-title");
  let flow_1 = document.querySelector("#flow-1");
  let to_right = document.querySelector("#to-right");
  let flow_2 = document.querySelector("#flow-2");
  let to_down = document.querySelector("#to-down");
  let flow_3 = document.querySelector("#flow-3");
  let to_left = document.querySelector("#to-left");
  let flow_4 = document.querySelector("#flow-4");
  let tl = gsap.timeline().from(title, { y: 50, opacity: 0.5, duration: 0.5 }, 0)
                          .from(flow_1, { x: -50, opacity: 0, duration: 0.5 }, 0)
                          .from(to_right, { x: -50, opacity: 0, duration: 0.25 })
                          .from(flow_2, { x: -50, opacity: 0, duration: 0.5 })
                          .from(to_down, { y: -50, opacity: 0, duration: 0.25 })
                          .from(flow_3, { y: -50, opacity: 0, duration: 0.5 })
                          .from(to_left, { x: 50, opacity: 0, duration: 0.25 })
                          .from(flow_4, { x: 50, opacity: 0, duration: 0.5 });
  // set trigger
  ScrollTrigger.create({
    trigger: '#event',
    start: "30% center",
    // scrub: 1,                                  // control by scroll
    toggleActions: "play none none reverse",   // auto-animation
    animation: tl,
  });
});
</script>

<style>
.card {
  @apply w-[520px] h-[300px];
  @apply p-10;
  @apply rounded-card border-[3px] border-cn1;
  &:hover {
    background: rgba(110, 119, 233, 0.1);
    @apply border-cp1;
    box-shadow: 0px 0px 10px rgba($cp2, 0.6);
    h3 {
      @apply text-cp1;
    }
  }
}
</style>