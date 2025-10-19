<script setup>
import Header from './partials/Header.vue';
import Introduce from './components/Introduce.vue';
import ListSocialMedia from './components/ListSocialMedia.vue';
import Card from './components/Card.vue';
import CardFull from './components/CardFull.vue';
import SlideShow from './components/SlideShow.vue';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useResponsive from './hooks/useResponsive';


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
const { isVisible: animate_4, targetRef: targetRef_4 } = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
  once: false
});

const slideShowData = [
  {
    id: 0,
    image: '/images/wordlerury.jpg',
    title: '📍Wordle Rury',
    values: [
      {name: 'React', img: '/images/logo/react.svg'}, 
      {name: 'Tailwind CSS', img: '/images/logo/tailwind.svg'}, 
      {name: 'Vite', img: '/images/logo/vite.svg'}
    ],
    description: '📝Project about Wordle game using React and Vite. This project using normal logic about react DOM, Javascript'
  },
  {
    id: 1,
    image: '/images/wordlerury.jpg',
    title: '©️Rury Comics',
    values: [
      {name: 'Vue', img: '/images/logo/vue.svg'}, 
      {name: 'Tailwind CSS', img: '/images/logo/tailwind.svg'}, 
      {name: 'Vite', img: '/images/logo/vite.svg'}
    ],
    description: '📝Project about Comics, Cartoon, Manga and many things. This is a dynamic site using free API in the internet'
  },
]

</script>

<template>
  <div class="dark:bg-[#242424] bg-white">
    <Header />
    <!-- phần đầu, giới thiệu sơ lược -->
    <div id="#" class="w-full h-screen flex flex-col items-center justify-center">
      <!-- avatar và các trang cá nhân -->
      <div class="flex justify-center items-center flex-col">
        <!-- avatar nhấp nháy -->
        <div class="relative flex justify-center items-center w-48 h-48">
          <span class="w-2/3 h-2/3 inline-flex rounded-full absolute bg-slate-100 animate-ping opacity-75"></span>
          <img class="w-full h-full object-cover relative rounded-full shadow-md" src="/images/hieudeptrai.png" alt="Vo Minh Hieu - Full Stack Developer Avatar">
        </div>
        <!-- câu mở đầu -->
         <h3 class="text-3xl font-semibold my-2 dark:text-white text-black italic">Hi, I'm <span class="text-3xl text-orange-500">hieurury</span></h3>
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
    <div id="experience-skills" class="w-full h-screen flex flex-col items-center justify-center px-4">
      <h1
      ref="targetRef_1" 
      :class="[animate_1 ? 'animate__animated animate__backInDown opacity-100' : 'opacity-0', 'text-3xl font-semibold dark:text-white text-slate-800']">
        <span class="text-orange-500 italic font-semibold uppercase lg:text-7xl text-6xl">Skills</span> and <span class="italic uppercase text-orange-500 lg:text-7xl text-6xl">Experience</span> 
    </h1>
    </div>

    <!-- phần kỹ năng -->
    <div
      id="skills"
      class="w-full min-h-screen flex flex-col p-4 justify-center items-center">
      <h2 
      ref="targetRef_2"
      :class="[
        {
          'animate__animated animate__fadeIn opacity-100': animate_2,
          'opacity-0': !animate_2
        },
        'text-5xl font-semibold text-slate-800 dark:text-white italic my-6'
      ]">
      Having <span class="font-bold uppercase text-orange-500"> skills </span>about<span class="uppercase text-orange-500 font-bold"> Algorithms </span> processing
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
        'text-5xl font-semibold text-black dark:text-white italic my-6'
      ]">
      Having <span class="font-bold uppercase text-orange-500"> Experience </span>about<span class="uppercase text-orange-500 font-bold"> web </span>and<span class="uppercase text-orange-500 font-bold"> mobile </span>
      </h2>
      <div class="grid lg:grid-row-2 place-items-center grid-cols-1 gap-4 w-full max-w-6xl overflow-hidden">
        <CardFull 
        image="/images/web-dev.png" 
        title="Web development" 
        content="having a lot of experience in web development, especially in frontend and backend"
        :items="[
          {
            title: 'Frontend',
            items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'React']
          },
          {
            title: 'Backend',
            items: ['Nodejs', 'Express', 'MongoDB', 'SQL']
          }
        ]"/>
        <CardFull 
        image="/images/mobile-dev.png" 
        title="Mobile development" 
        content="having experience in mobile application development, has worked with flutter"
        :items="[
          {
            title: 'Cross-platform',
            items: ['Flutter', 'React']
          }
        ]"/>
      </div>


      <div id="projects" class="w-full h-screen flex flex-col items-center justify-center">
        <h1
          ref="targetRef_4" 
          :class="[animate_4 ? 'animate__animated animate__backInDown opacity-100' : 'opacity-0', 'text-3xl font-semibold text-white']">
            <span class="text-orange-500 italic font-semibold uppercase lg:text-7xl text-6xl">Projects</span>
        </h1>
      </div>

      <div class="w-full lg:px-32 relative min-h-screen flex flex-col items-center justify-center">
        <SlideShow :data="slideShowData" />
      </div>

      <div class="w-full lg:px-32 relative min-h-screen flex flex-col items-center justify-center">
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
