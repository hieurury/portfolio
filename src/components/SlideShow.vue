<template>
    <div class="flex flex-col items-center justify-center space-y-4">
        <Slide 
        v-if="currentSlide"
        :key="slideKey"
        :image="currentSlide.image" 
        :title="currentSlide.title" 
        :values="currentSlide.values"
        :description="currentSlide.description"/>
        <!-- <ul class="flex justify-around dark:text-gray-300 space-x-2 border-1 border-gray-300 w-1/2 rounded px-2">
            <li v-for="slide in slideData" :key="slide.id">{{ slide.id }}</li>
        </ul> -->
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import Slide from './Slide.vue';

const slideData = ref(null);
const slideKey = ref('');
const currentSlide = ref(null);
const currentIndex = ref(0);
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});
const autoPlay = (timeout) => {
    setInterval(() => {
        if(currentIndex.value >= slideData.value.length) {
            currentIndex.value = 0;
        }
        currentSlide.value = slideData.value[currentIndex.value];
        slideKey.value = `slide-${currentIndex.value}`;
        currentIndex.value++;
    }, timeout);
}
onMounted(() => {
    console.log(props.data);
    if(props.data.length != 0) {
        slideData.value = props.data;
        //chạy slie đầu tiên
        currentSlide.value = slideData.value[currentIndex.value];
        currentIndex.value++;
        //bật chế độ tự động chạy slide
        // autoPlay(6000);
    }
});
</script>

<style scoped>

</style>