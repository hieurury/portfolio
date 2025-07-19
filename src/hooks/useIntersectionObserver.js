import { ref, onMounted, onUnmounted } from 'vue'

export default function useIntersectionObserver(options = {}) {
  const isVisible = ref(false)
  const targetRef = ref(null)
  let observer = null
  let timeInteract = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true

            if(timeInteract) {
              clearTimeout(timeInteract)
              timeInteract = null
            }
            if (options.once === true) {
              observer.unobserve(entry.target)
            }
          } else {
            timeInteract = setTimeout(() => {
              isVisible.value = false
            }, 500)
          }
        })
      },
      {
        threshold: options.threshold || 0.5,
        rootMargin: options.rootMargin || '0px'
      }
    )

    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isVisible, targetRef }
}