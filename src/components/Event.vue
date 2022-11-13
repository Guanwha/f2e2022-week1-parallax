<template>
  <section class="mx-auto w-[1104px] py-40 flex-ccc gap-[100px]">
    <!-- title -->
    <div class="flex-rcc">
      <img src="@/assets/event/title_left.svg" alt="">
      <h2 class="text-cn1 text-h1 font-bold drop-shadow-white px-9">活動說明</h2>
      <img src="@/assets/event/title_right.svg" alt="">
    </div>
    <!-- flow cards -->
    <div class="flex-ccc">
      <div class="flex-rsbc">
        <!-- flow 1 -->
        <div :class="classCard">
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
        <img class="m-9" src="@/assets/event/icon_arrow_right.svg" alt="">
        <!-- flow 2 -->
        <div :class="classCard">
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
        <img class="m-9" src="@/assets/event/icon_arrow_down.svg" alt="">
      </div>
      <div class="flex-rsbc flex-r-reverse">
        <!-- flow 3 -->
        <div :class="classCard">
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
        <img class="m-9" src="@/assets/event/icon_arrow_left.svg" alt="">
        <!-- flow 4 -->
        <div :class="classCard">
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
const classCard = `w-[520px] h-[300px] p-10 rounded-card border-[3px] border-cn1 flex-rsbc`;
const classCardIcon = `w-[120px] h-[120px]`;
const classCardInfo = `w-[260px] flex-ccl gap-4 text-cn1`;
const classCardTitle = `text-h3 font-bold`;
const classCardTime = `flex-ccl gap-2 text-h5`;
const classCardDate = `mr-2 text-cs1`;
const classCardDateTo = `w-full flex-rcc`;
const classCardDateToIcon = `w-0.5 h-3 border border-n1`;
const classCardDescription = `text-h5`;
</script>

<style>

</style>