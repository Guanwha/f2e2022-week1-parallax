<template>
  <div class="w-full h-fit bg-cn6">
    <Header/>
    <Banner/>
    <Question/>
    <QuestionBreak/>
    <Level/>
    <Event/>
    <Award/>
    <QA/>
    <Sponsors/>
    <!-- copyright -->
    <div class="w-full p-8 text-cn1 text-center">Copyright © 2022 HexSchool.All rights reserved.</div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Question from '@/components/Question.vue';
import QuestionBreak from '@/components/QuestionBreak.vue';
import Level from '@/components/Level.vue';
import Event from '@/components/Event.vue';
import Award from '@/components/Award.vue';
import QA from '@/components/QA.vue';
import Sponsors from '@/components/Sponsors.vue';
</script>

<style lang="scss" scoped>
</style>