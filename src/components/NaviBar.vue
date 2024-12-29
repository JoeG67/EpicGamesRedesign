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
          <InputText placeholder="Search" />
          <i class="pi pi-search"></i>
        </div>
      </template>
      <template #end>
        <div class="flex mr-6">
          <Button
            :icon="'pi pi-users'"
            class="p-button p-component p-button-text p-button-plain mr-5"
          />
          <Button :icon="'pi pi-heart'" class="text-gray-600 mr-5" />

          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            style="width: 32px; height: 32px"
          />
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import { Button, IconField, InputText, InputIcon, Avatar } from 'primevue'
</script>

<style>
::deep(.p-inputtext) {
  color: black !important; /* Forces text color */
}
</style>
