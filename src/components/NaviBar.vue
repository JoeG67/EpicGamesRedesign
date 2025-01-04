<template>
  <div class="card">
    <Toolbar class="">
      <template #start>
        <div>
          <img
            alt="Vue logo"
            class="block lg:mr-4"
            src="../assets/navbar.png"
            width="50"
            height="50"
          />
        </div>
      </template>
      <template #center>
        <div class="text-black font-normal border-2 border-gray-400 rounded-lg py-2 px-2">
          <InputText placeholder="Search store" />
          <i class="pi pi-search"></i>
        </div>
      </template>
      <template #end>
        <div class="flex">
          <Button :icon="'pi pi-list'" class="text-gray-600 mr-5" />
          <Button :icon="'pi pi-users'" class="text-gray-600 mr-5" />

          <Button :icon="'pi pi-shopping-cart'" class="text-gray-600 mr-5" />

          <Button :icon="'pi pi-user'" class="text-gray-600 mr-5" @click="visible = true" />
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
