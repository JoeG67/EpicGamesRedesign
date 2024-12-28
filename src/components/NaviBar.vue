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
  <InputText
    placeholder="Search"
    class="bg-transparent outline-none w-full placeholder-gray-500 text-gray-700 "
    />
  <i class="pi pi-search"></i>

            </template>
            <template #end>
              <div class="flex mr-6">
    <Button :icon="'pi pi-users'" text plain class="text-gray-600 mr-5" />
    <Button :icon="'pi pi-heart'" severity="secondary" text class="text-gray-600" />

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
