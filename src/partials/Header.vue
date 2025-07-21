<template>
    <div class="container w-full sticky top-0 z-[999] bg-white dark:bg-[#232323] shadow-md lg:px-42">
        <nav class="flex justify-between items-center p-4 text-white">
            <div>
                <h3 class="text-xl text-black dark:text-white font-semibold tracking-wider"><span class="text-orange-500 text-2xl uppercase">P</span>ortfolio</h3>
            </div>
            <div>
                <ul v-if="!isMobile" class="flex space-x-4">
                    <li class="dark:text-white text-black">
                        <a href="#experience-skills">Experience & Skills</a>
                    </li>
                    <li class="dark:text-white text-black">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="dark:text-white text-black">
                        <a href="#promise">Promise</a>
                    </li>
                    <li class="dark:text-white text-black border-l-2 pl-4">
                        <i v-if="isDark" @click="toggleDarkMode" class="fa-regular fa-sun"></i>
                        <i v-else @click="toggleDarkMode" class="fa-regular fa-moon"></i>
                    </li>
                </ul>
                <span v-if="isDark" class="text-2xl cursor-pointer lg:hidden dark:text-white text-black" @click="toggleDarkMode">
                    <i class="fa-regular fa-sun"></i>
                </span>
                <span v-else class="text-2xl cursor-pointer lg:hidden dark:text-white text-black" @click="toggleDarkMode">
                    <i class="fa-regular fa-moon"></i>
                </span>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const isMobile = ref(window.innerWidth < 768);
const isDark = ref(false);

const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    document.body.classList.toggle('dark', isDark.value);
};
</script>

<style lang="scss" scoped>

</style>