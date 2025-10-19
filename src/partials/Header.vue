<template>
    <div class="container w-full sticky top-0 z-[999] bg-white dark:bg-[#232323] shadow-md lg:px-42">
        <nav class="flex justify-between items-center p-4 text-white">
            <div>
                <h3 class="text-xl text-black dark:text-white font-semibold tracking-wider"><span class="text-orange-500 text-2xl uppercase">P</span>ortfolio</h3>
            </div>
            <div>
                <ul v-if="!isMobile" class="flex items-center space-x-4">
                    <li class="dark:text-white text-black">
                        <a href="#experience-skills">Experience & Skills</a>
                    </li>
                    <li class="dark:text-white text-black">
                        <a href="#projects">Projects</a>
                    </li>
                    <li class="dark:text-white text-black">
                        <a href="#promise">Promise</a>
                    </li>
                    <li class="dark:text-white h-full text-black border-l-2 pl-4">

                        <button 
                        @click="toggleDarkMode"
                        :class="[
                            'dark:bg-gray-600 relative min-h-6 shadow-md rounded-full min-w-[80px] p-4 flex justify-center items-center'
                        ]">
                            <div :class="[
                                {
                                    'left-0': !isDark,
                                    'left-[calc(100%-30px)]': isDark,
                                },
                                'absolute my-auto flex justify-center items-center w-7 h-7 rounded-full text-white bg-orange-600 transition-all duration-300 ease-in-out'

                            ]">
                                <i v-if="!isDark" @click="toggleDarkMode" class="fa-regular fa-sun"></i>
                                <i v-else @click="toggleDarkMode" class="fa-regular fa-moon dark:text-slate-800"></i>
                            </div>
                        </button>
                    </li>
                </ul>
                <button 
                v-if="isMobile"
                @click="toggleDarkMode"
                :class="[
                    'dark:bg-gray-600 relative min-h-6 shadow-md rounded-full min-w-[80px] p-4 flex justify-center items-center'
                ]">
                    <div :class="[
                        {
                            'left-0': !isDark,
                            'left-[calc(100%-24px)]': isDark,
                        },
                        'absolute my-auto flex justify-center items-center w-7 h-7 rounded-full text-white bg-orange-600 transition-all duration-300 ease-in-out'

                    ]">
                        <i v-if="!isDark" @click="toggleDarkMode" class="fa-regular fa-sun"></i>
                        <i v-else @click="toggleDarkMode" class="fa-regular fa-moon"></i>
                    </div>
                </button>
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