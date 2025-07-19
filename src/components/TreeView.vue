<template>
  <div class="w-full max-w-md bg-transparent p-4 text-white">
    <h3 class="text-lg font-semibold dark:text-white mb-4">Tree View</h3>
    
    <div class="space-y-2">
      <!-- Node 1 -->
      <div class="tree-node">
        <div 
          @click="toggleNode('node1')" 
          class="flex items-center cursor-pointer p-2 rounded-md transition-colors duration-200"
        >
          <span class="mr-2 text-gray-500 transition-transform duration-200" :class="{ 'rotate-90': expandedNodes.node1 }">
            >
          </span>
          <span class="dark:text-white font-medium">Sắp xếp</span>
        </div>
        
        <!-- Children của Node 1 -->
        <div v-show="expandedNodes.node1" class="ml-6 mt-2 space-y-1">
          <div class="flex items-center p-2 cursor-pointer">
            <span class="mr-2 bg-yellow-400 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Nổi bọt (bubble sort)</span>
          </div>
          <div class="flex items-center p-2 rounded-md cursor-pointer">
            <span class="mr-2 bg-orange-600 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Vun đống (heap sort)</span>
          </div>
          <div class="flex items-center p-2 rounded-md cursor-pointer">
            <span class="mr-2 bg-red-700 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Nhanh (quick sort)</span>
          </div>
        </div>
      </div>

      <!-- Node 2 -->
      <div class="tree-node">
        <div 
          @click="toggleNode('node2')" 
          class="flex items-center cursor-pointer p-2 rounded-md transition-colors duration-200"
        >
          <span class="mr-2 text-gray-500 transition-transform duration-200" :class="{ 'rotate-90': expandedNodes.node1 }">
            >
          </span>
          <span class="dark:text-white font-medium">Sắp xếp</span>
        </div>
        
        <!-- Children của Node 1 -->
        <div v-show="expandedNodes.node2" class="ml-6 mt-2 space-y-1">
          <div class="flex items-center p-2 cursor-pointer">
            <span class="mr-2 bg-yellow-400 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Nổi bọt (bubble sort)</span>
          </div>
          <div class="flex items-center p-2 rounded-md cursor-pointer">
            <span class="mr-2 bg-orange-600 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Vun đống (heap sort)</span>
          </div>
          <div class="flex items-center p-2 rounded-md cursor-pointer">
            <span class="mr-2 bg-red-700 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Nhanh (quick sort)</span>
          </div>
        </div>
      </div>

      <!-- Node 3 -->
      <div class="tree-node">
        <div 
          @click="toggleNode('node3')" 
          class="flex items-center cursor-pointer p-2 rounded-md transition-colors duration-200"
        >
          <span class="mr-2 text-gray-500 transition-transform duration-200" :class="{ 'rotate-90': expandedNodes.node1 }">
            >
          </span>
          <span class="dark:text-white font-medium">Sắp xếp</span>
        </div>
        
        <!-- Children của Node 1 -->
        <div v-show="expandedNodes.node3" class="ml-6 mt-2 space-y-1">
          <div class="flex items-center p-2 cursor-pointer">
            <span class="mr-2 bg-yellow-400 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Nổi bọt (bubble sort)</span>
          </div>
          <div class="flex items-center p-2 rounded-md cursor-pointer">
            <span class="mr-2 bg-orange-600 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Vun đống (heap sort)</span>
          </div>
          <div class="flex items-center p-2 rounded-md cursor-pointer">
            <span class="mr-2 bg-red-700 w-4 h-4 rounded-full"></span>
            <span class="dark:text-white">Nhanh (quick sort)</span>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Trạng thái mở/đóng của các node
const expandedNodes = reactive({
  node1: false,
  node2: false,
  node3: false,
})

// Hàm toggle node
const toggleNode = (nodeId) => {
  expandedNodes[nodeId] = !expandedNodes[nodeId]
}
</script>

<style lang="css" scoped>
.tree-node {
  user-select: none;
}

/* Custom scrollbar nếu cần */
.tree-container::-webkit-scrollbar {
  width: 6px;
}

.tree-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.tree-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.tree-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>