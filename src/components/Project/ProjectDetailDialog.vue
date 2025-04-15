<template>
  <q-dialog
      :model-value="modelValue"
      @update:model-value="onUpdateModelValue"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
  >
    <q-card class="bg-white">
      <div class="row items-center" style="background-color: black;color: white;padding: 8px">
        <div style="font-size: 1rem;font-weight: bold">
          READ ME
        </div>
        <q-space />
        <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
          <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
          <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </div>
      <q-card-section style="max-width: 1320px;margin-left: auto;margin-right: auto;height: calc(100vh - (35px + 16px));overflow: auto">
        <article>
          <slot name="detailContent">

          </slot>
        </article>

      </q-card-section>
    </q-card>

  </q-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
const emit = defineEmits(["update:model-value"])
const props = defineProps<{
  modelValue: boolean
}>()

function onUpdateModelValue(value: any){
  emit("update:model-value",value)
}

const maximizedToggle = ref(true)

</script>

<style scoped>

</style>
