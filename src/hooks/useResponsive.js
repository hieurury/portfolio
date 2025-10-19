import { onMounted, ref } from 'vue'

export default function useResponsive() {
  const size = ref('md')
    const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
    }

    const updateSize = (value) => {
        if (value < breakpoints.sm) {
            size.value = 'sm'
        } else if (value >= breakpoints.sm && value < breakpoints.md) {
            size.value = 'md'
        } else if (value >= breakpoints.md && value < breakpoints.lg) {
            size.value = 'lg'
        } else if (value >= breakpoints.lg && value < breakpoints.xl) {
            size.value = 'xl'
        } else if (value >= breakpoints.xl) {
            size.value = '2xl'
        }
    }

    onMounted(() => {
        updateSize(window.innerWidth)
        window.addEventListener('resize', () => {
            updateSize(window.innerWidth)
            console.log(size.value)
        })
    })

    return {
        size
    }
}