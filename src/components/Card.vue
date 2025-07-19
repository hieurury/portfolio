<template>
    <div @mouseover="isVisible = true" @mouseleave="isVisible = false" 
    ref="targetRef"
    :class="[{
        'animate__animated animate__backInUp opacity-100': animate,
        'opacity-0': !animate
    },
    'w-full h-full shadow-md relative group hover:-translate-y-2 transition-transform duration-300'
    ]">
        <img class="object-cover group-hover:blur-sm transition duration-300" :src="props.image" alt="">
        <div 
        :class="[
            {
                'opacity-100 animate__animated animate__backInUp': isVisible,
            },
            'absolute opacity-0 inset-0 flex flex-col items-center justify-center text-3xl tracking-widest py-2 uppercase font-semibold dark:text-white'
        ]">
        <h3 class="my-4 text-shadow-2xs">{{ props.title }}</h3>
        <ul class="flex flex-col items-center justify-center space-y-2">
            <li class="text-sm text-gray-300 bg-gray-800 p-2 text-center     rounded-full min-w-xs" v-for="(item, index) in props.values" :key="index">{{ item }}</li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { defineProps, ref } from 'vue';

const { isVisible: animate, targetRef } = useIntersectionObserver({
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
  values: {
    type: Array,
    default: () => []
  }
});


const isVisible = ref(false);
</script>

<style lang="scss" scoped>

</style>