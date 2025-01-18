<template>
  <section class="flex justify-between items-center w-full">
    <div class="text-left !bg-[#646364]">
      <Drawer position="left">
        <div class="text-lg font-semibold p-4 border-b border-gray-200">Your Downloads</div>
        <div class="p-4">
          <div v-for="item in items" class="flex items-center gap-4 mb-4">
            <span class="text-lg font-semibold">{{ item.name }}</span>
            <img
              :src="item.image || 'https://placehold.co/400'"
              alt="Game Image"
              class="w-16 h-16 object-cover rounded-md"
            />
          </div>
        </div>
      </Drawer>
    </div>

    <div class="text-center">
      <div class="text-lg font-semibold">New and Trending</div>
      <div class="relative w-full overflow-hidden">
        <!-- Left Arrow Button -->
        <button
          @click="scrollCarousel(-1)"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          <i class="pi pi-chevron-left"></i>
        </button>

        <!-- Right Arrow Button -->
        <button
          @click="scrollCarousel(1)"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        >
          <i class="pi pi-chevron-right"></i>
        </button>

        <!-- Outer container with horizontal scrolling -->
        <div class="flex overflow-x-hidden py-4" ref="carouselContainer">
          <div
            v-for="product in products"
            class="flex-none w-full snap-center border border-gray-200 dark:border-gray-700 rounded-lg p-4"
          >
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  :src="product.image || 'https://placehold.co/400'"
                  :alt="product.name"
                  class="w-full rounded"
                />
                <div
                  class="absolute top-2 left-2 px-2 py-1 text-white text-xs font-semibold bg-gray-800 rounded"
                >
                  {{ product.inventoryStatus || 'N/A' }}
                </div>
              </div>
            </div>
            <div class="mb-4 font-medium">{{ product.name }}</div>
            <div class="flex justify-between items-center">
              <div class="text-xl font-semibold">${{ product.price || 0.0 }}</div>
              <div class="flex gap-2">
                <Button icon="pi pi-heart" class="text-gray-600" outlined />
                <Button icon="pi pi-shopping-cart" class="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center !bg-[#646364]">
      <Drawer position="left">
        <div class="text-lg font-semibold p-4 border-b border-gray-200">Free Games</div>
        <div class="p-4">
          <div v-for="item in items" class="flex items-center gap-4 mb-4">
            <span class="text-lg font-semibold">{{ item.name }}</span>
            <img
              :src="item.image || 'https://placehold.co/400'"
              alt="Game Image"
              class="w-16 h-16 object-cover rounded-md"
            />
          </div>
        </div>
      </Drawer>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const carouselContainer = ref(null)

const scrollCarousel = (direction: number) => {
  const container = carouselContainer.value
  const scrollAmount = direction === 1 ? container.clientWidth : -container.clientWidth
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}

interface Product {
  name: string
  image: string
  price: number
  inventoryStatus: string
}

interface Item {
  name: string
  image: string
}

const products = ref<Product[]>([])
const items = ref<Item[]>([])

const fetchProducts = async () => {
  try {
    const response = await axios.get<Product[]>('http://localhost:3000/api/products')
    products.value = response.data
  } catch (error) {
    console.error('Faield to fatch products', error)
  }
}

const fetchItems = async () => {
  try {
    const response = await axios.get<Item[]>('http://localhost:3000/api/items')
    items.value = response.data
  } catch (error) {
    console.error('Faield to fatch items', error)
  }
}
// const items = ref([
//   {
//     name: 'Game 1',
//     image: '',
//   },
//   {
//     name: 'Game 2',
//     image: '',
//   },
//   {
//     name: 'Game 3',
//     image: '',
//   },
// ])

// const products = ref([
//   {
//     name: 'Game 1',
//     image: 'game-controller.jpg',
//     price: 29.99,
//     inventoryStatus: 'IN STOCK',
//   },
//   {
//     name: 'Game 2',
//     image: 'headphones.jpg',
//     price: 59.99,
//     inventoryStatus: 'LOW STOCK',
//   },
//   {
//     name: 'Game 3',
//     image: 'tablet.jpg',
//     price: 199.99,
//     inventoryStatus: 'OUT OFSTOCK',
//   },
//   {
//     name: 'Game 4',
//     image: 'laptop.jpg',
//     price: 899.99,
//     inventoryStatus: 'IN STOCK',
//   },
//   {
//     name: 'Game 5',
//     image: 'camera.jpg',
//     price: 499.99,
//     inventoryStatus: 'IN STOCK',
//   },
// ])

onMounted(() => {
  fetchProducts();
  fetchItems();
});

</script>
