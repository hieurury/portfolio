<template>
    <div class="flex bg-white shadow-md rounded justify-center items-center">
        <a 
        :href="item.link"
        target="_blank"
        class="w-12 h-12 rounded font-semibold mx-2 group cursor-pointer" 
        v-for="(item, index) in props.socialMedia" :key="index">
            <img 
            class="object-cover rounded-full p-1 group-hover:-translate-y-2 group-hover:shadow transition-transform bg-white"
            :src="`/images/${item.name}`"
            />
        </a>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps({
    socialMedia: {
        type: Array,
        default: () => ([])
    }
})

onMounted(() => {
    console.log(props.socialMedia)
})
</script>

<style scoped></style>
