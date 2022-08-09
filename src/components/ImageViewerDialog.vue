<template>
  <q-dialog
      ref="dialogRef"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
  >
    <q-card class="bg-white">
      <div class="row items-center" style="background-color: black;color: white;padding: 8px">
        <div style="font-size: 1rem;font-weight: bold">
          READ ME
        </div>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </div>
      <q-card-section>
        <div style="display: flex;align-items: center;justify-content: center;height: calc(100vh - 90px);overflow: auto">
          <img :src="getImageUrl()" >
        </div>

      </q-card-section>
    </q-card>

  </q-dialog>
</template>

<script setup lang="ts">
import {useDialogPluginComponent} from "quasar";
import {defineProps} from "vue";

const props = defineProps<{
  image: string
}>()

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits
])

function getImageUrl(){
  return props.image
}
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

</script>

<style scoped>

</style>
