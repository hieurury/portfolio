<template>
    <div 
    ref="targetRef"
    :class="[
        {
          'animate__animated animate__backInUp opacity-100': isVisible,
          'opacity-0': !isVisible
        },
        'flex lg:flex-row flex-col lg:w-full w-4/5 bg-gray-800 lg:rounded-l-full lg:rounded-r-md rounded-t-full shadow lg:items-center items-center'
    ]">
        <div class="lg:w-1/4">
            <img class="w-full h-auto rounded-full shadow-lg" :src="props.image" :alt="props.title + ' - ' + props.content">
        </div>
        <div class="content-center lg:w-2/4 p-4 space-y-2">
            <h3 class="text-3xl uppercase italic text-white tracking-wider">{{ props.title }}</h3>
            <p class="italic text-sm text-gray-200">{{ props.content }}</p>
            <div v-for="(item, index) in props.items" :key="index" class="flex flex-col space-x-2">
                <h4 class="font-bold text-white">{{ item.title }}</h4>
                <div class="flex space-x-2">
                    <span class=" flex space-x-2 rounded-full items-center bg-white text-center p-1 px-2 text-xs font-semibold overflow-hidden" v-for="subItem in item.items" :key="subItem">
                      <img class="w-6 object-cover" :src="`/images/logo/${subItem.toLowerCase()}.svg`" :alt="subItem + ' logo'">
                      <span v-if="!isMobile" class="text-xs text-slate-800 italic">{{ subItem }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const isMobile = ref(window.innerWidth < 768);

const {isVisible, targetRef} = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.1,
    once: false
});

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
    content: {
        type: String,
        default: ''
    },
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>

</style>