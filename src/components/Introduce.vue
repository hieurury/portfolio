<template>
    <div class="flex justify-center items-center z-50">
        <h1 class="dark:text-white text-black transition inline-block text-xl italic h-8">{{ text }}
            <span id="space" :class="`text-xl inline-block ${setAnimation}`">{{ icon }}</span>
        </h1>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
    const says = ref([
            "My full name is Vo Minh Hieu",
            "I'm a web developer",
            "I'm studying at Can Tho University",
            "I like to learn new things",
    ])
    function getRandomText(data) {
        let text = data[0];
        data.push(data[0]);
        data.shift();
        return text;
    }
    
    const randomText = ref(getRandomText(says.value).split(''));
    const text = ref('');
    const icon = ref("✏️");
    const setAnimation = ref("write");
   function writeInterval(data) {
        icon.value = "✏️";
        setAnimation.value = "write";
        let setText = setInterval(() => {
            if(data.length > 0) {
                text.value += `${data[0]}`;
                data.shift();
            } else {
                clearInterval(setText);
                setAnimation.value = "no-animation";
                setTimeout(() => {
                    deleteInterval();
                }, 1000);
            }
    }, 50);
   }
   function deleteInterval() {
        icon.value = "📍";
        let clearText = setInterval(() => {
            if(text.value.length > 0) {
                text.value = text.value.slice(0, -1);
            } else {
                clearInterval(clearText);
                randomText.value = getRandomText(says.value).split('');
                writeInterval(randomText.value);
            }
    }, 50);
    }
    writeInterval(randomText.value);
</script>

<style lang="css" scoped>
    .write {
        animation: move .5s infinite;
    }
    .no-animation {
        animation: none;
    }
    @keyframes move {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(5px);
        }
    }
</style>