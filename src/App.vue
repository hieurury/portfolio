<script setup>
import Introduce from './components/Introduce.vue';
import ListSocialMedia from './components/ListSocialMedia.vue';
import Card from './components/Card.vue';
import CardFull from './components/CardFull.vue';
import useIntersectionObserver from './hooks/useIntersectionObserver';



const { isVisible: animate_1, targetRef: targetRef_1 } = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
  once: false
});
const { isVisible: animate_2, targetRef: targetRef_2 } = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
  once: false
});

const { isVisible: animate_3, targetRef: targetRef_3 } = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
  once: false
});
</script>

<template>
  <div class="">

    <!-- phần đầu, giới thiệu sơ lược -->
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <!-- avatar và các trang cá nhân -->
      <div class="flex justify-center items-center flex-col">
        <!-- avatar nhấp nháy -->
        <div class="relative flex justify-center items-center w-48 h-48">
          <span class="w-2/3 h-2/3 inline-flex rounded-full absolute bg-slate-100 animate-ping opacity-75"></span>
          <img class="relative rounded-full" src="/images/avatar-catoon.jpg" alt="">
        </div>
        <!-- câu mở đầu -->
         <h3 class="text-3xl font-semibold my-2 text-white italic">Hi, I'm <span class="text-3xl text-orange-500">hieurury</span></h3>
      </div>

      <Introduce />
      <!-- các trang cá nhân -->
       <div class="my-2">
         <!-- truyền vào mảng các trang cá nhân -->
        <ListSocialMedia :socialMedia="[
          {name: 'github.svg', link: 'https://github.com/hieurury'},
          {name: 'facebook.svg', link: 'https://www.facebook.com/hieu.vo.455609/?locale=vi_VN'},
          {name: 'linkedin.svg', link: 'https://www.linkedin.com/in/vo-minh-hieu-4479aa374/'},
        ]" />
       </div>
    </div>

    <!-- phần giới thiệu kỹ năng và kinh nghiệm -->
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <h1
      ref="targetRef_1" 
      :class="[animate_1 ? 'animate__animated animate__backInDown opacity-100' : 'opacity-0', 'text-3xl font-semibold text-white']">
        <span class="text-slate-400 italic font-semibold uppercase text-7xl">Kỹ năng</span> và <span class="italic uppercase text-slate-400 text-7xl">Kinh nghiệm</span> 
    </h1>
    </div>

    <!-- phần kỹ năng -->
    <div
      class="w-full min-h-screen flex flex-col p-4 justify-center items-center">
      <h2 
      ref="targetRef_2"
      :class="[
        {
          'animate__animated animate__fadeIn opacity-100': animate_2,
          'opacity-0': !animate_2
        },
        'text-5xl font-semibold text-slate-300 italic my-6'
      ]">
      Có <span class="font-bold uppercase text-white"> kỹ năng </span>về các<span class="uppercase text-white font-bold"> Thuật toán </span> xử lí
      </h2>
      <div 
      class="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:w-full lg:max-w-6xl overflow-hidden">
        <Card image="/images/sort.png" title="Sắp xếp" :values="['bubble sort', 'heap sort', 'quick sort']"/>
        <Card image="/images/search.png" title="Tìm kiếm" :values="['linear search', 'binary search', 'deep search']"/>
        <Card image="/images/storage.png" title="Lưu trữ" :values="['array', 'linked list', 'hash table']"/>
      </div>

    </div>

    <!-- Phần kinh nghiệm -->
    <div 
    class="w-full min-h-screen flex flex-col p-4 justify-center items-center">
    <h2 
      ref="targetRef_3"
      :class="
      [
        {
          'animate__animated animate__fadeIn opacity-100': animate_3,
          'opacity-0': !animate_3
        },
        'text-5xl font-semibold text-slate-300 italic my-6'
      ]">
      Có <span class="font-bold uppercase text-white"> Kinh nghiệm </span>về lập trình <span class="uppercase text-white font-bold"> web, mobile </span>
      </h2>
      <div class="grid lg:grid-row-2 place-items-center grid-cols-1 gap-4 w-full max-w-6xl overflow-hidden">
        <CardFull 
        image="/images/web-dev.png" 
        title="Lập trình web" 
        content="Có nhiều kinh nghiệm trong việc lập trình và phát triển web, đã từng học và làm việc với cả FE và BE"
        :items="[
          {
            title: 'Frontend',
            items: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React.js']
          },
          {
            title: 'Backend',
            items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL']
          }
        ]"/>
        <CardFull 
        image="/images/mobile-dev.png" 
        title="Lập trình mobile" 
        content="Có kinh nghiệm trong việc phát triển ứng dụng di động, đã từng làm việc với flutter"
        :items="[
          {
            title: 'Cross-platform',
            items: ['Flutter', 'React Native']
          }
        ]"/>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
