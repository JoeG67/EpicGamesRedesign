<template>
  <div class="card">
    <Toolbar class="flex items-center justify-between">
      <!-- Logo on the left -->
      <template #start>
        <div class="flex items-center">
          <img
            alt="Vue logo"
            class="block lg:mr-4"
            src="../assets/navbar.png"
            width="50"
            height="50"
          />
        </div>
      </template>

      <!-- Search bar in the center -->
      <template #center>
        <div class="flex items-center text-black font-normal border-2 border-gray-400 rounded-lg py-2 px-2 w-full max-w-md mx-auto">
          <InputText placeholder="Search store" class="flex-grow bg-transparent border-none outline-none" />
          <i class="pi pi-search text-gray-500 ml-2"></i>
        </div>
      </template>

      <!-- Buttons on the right -->
      <template #end>
        <div class="flex items-center gap-5">
          <Button :icon="'pi pi-list'" class="text-gray-600" />
          <Button :icon="'pi pi-users'" class="text-gray-600" />
          <Button :icon="'pi pi-shopping-cart'" class="text-gray-600" />
          <Button :icon="'pi pi-user'" class="text-gray-600" @click="visible = true" />
          <Drawer v-model:visible="visible" position="right" class="!bg-[#2F2D2E]">
            <template #header>
              <div class="flex items-center gap-2">
                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
              </div>
            </template>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <template #footer>
              <div class="flex items-center gap-2">
                <Button label="Account" icon="pi pi-user" class="flex-auto" outlined />
                <Button
                  label="Logout"
                  icon="pi pi-sign-out"
                  class="flex-auto"
                  severity="danger"
                  text
                />
              </div>
            </template>
          </Drawer>
        </div>
      </template>
    </Toolbar>
  </div>
</template>


<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import { Button, InputText, Drawer, Avatar } from 'primevue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<style>
::deep(.p-inputtext) {
  color: black !important; /* Forces text color */
}
</style>
