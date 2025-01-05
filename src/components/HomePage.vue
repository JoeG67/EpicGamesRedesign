<template>
  <section class="flex justify-between items-center w-full">
      <div class="text-left !bg-[#646364]">
        <Drawer position="left">
            <div class="text-lg font-semibold p-4 border-b border-gray-200">Your Downloads</div>
            <div class="p-4">
    <div v-for="(item, index) in items" :key="index" class="flex items-center gap-4 mb-4">

      <span class="text-lg font-semibold">{{ item.name }}</span>
      <img
        :src="item.image || 'https://placehold.co/400'"
        alt="Game Image"
        class="w-16 h-16 object-cover rounded-md"
      />
    </div>
  </div>        </Drawer>
      </div>

      <div class="text-center">New and Trending</div>
      <div class="text-right">Free games</div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([
  {
    name: 'Game 1',
    image: '',
  },
  {
    name: 'Game 2',
    image: '',
  },
  {
    name: 'Game 3',
    image: '',
  },
]);
</script>

<style></style>
