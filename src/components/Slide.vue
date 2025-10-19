<template>
    <div class="grid lg:grid-cols-2 grid-rows-1 px-12 overflow-hidden">
        <div 
        ref="targetRef_1"
        :class="[
            {
                'animate__animated animate__backInLeft opacity-100': animate_1,
                'opacity-0': !animate_1
            },
            'px-2'
        ]">
            <h3 class="text-5xl font-semibold uppercase tracking-wider dark:text-slate-100">{{ props.title }}</h3>
            <p class="max-w-lg text-lg italic dark:text-slate-300 text-slate-800 border-b-2 border-orange-500 pb-2">
                {{ props.description }}
            </p>
            <h3 class="text-xl font-semibold my-2 italic uppercase tracking-wider dark:text-slate-300">⚙️Các công nghệ sử dụng</h3>
            <ul class="list-disc pl-6">
                <li 
                v-for="value in props.values" 
                :key="value"
                class="text-lg dark:text-slate-300 text-slate-800 flex space-x-1 my-2">
                    <span class="bg-white p-0.5 w-8 h-8 block rounded-full">
                        <img class="w-full h-full object-cover" :src="value.img" :alt="value.name + ' logo'"></img>
                    </span>
                    <span>{{ value.name }}</span>
                </li>
            </ul>
        </div>
        <div 
        ref="targetRef_2"
        :class="[
            {
                'animate__animated animate__backInRight opacity-100': animate_2,
                'opacity-0': !animate_2
            },
            'p-2 shadow lg:block hidden bg-white dark:bg-gray-800 rounded-lg'
        ]">
            <img class="object-cover" :src="props.image" :alt="props.title + ' - ' + props.description">
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useResponsive from '../hooks/useResponsive';

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

const { size } = useResponsive();

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
  }, description: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>

</style>