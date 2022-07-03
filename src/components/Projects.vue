<template>
  <div class="root">
    <div style="width: 70vw; padding: 64px 32px;">
      <div class="Projects">
        <q-icon class="projectIcon" size="3rem" name="fa-solid fa-star">
        </q-icon>
        <div class="projectTitle">
          PROJECTS
        </div>
      </div>
      <div class="card">
          <Tenniswing>

          </Tenniswing>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tenniswing from "@/components/Project/Tenniswing.vue"
</script>

<style scoped>
.root{
  width: 100%;
  background-color: #1d809f;
  display: flex;
  justify-content: center;
}
.Projects{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px
}
.projectIcon {
  cursor: pointer;
  opacity: .5;
}
.projectIcon:hover {
  opacity: unset;
}

.projectTitle{
  font-family: 'Black Han Sans';
  font-size: 3rem;
  margin-left: 32px;
  border-bottom: 1px solid white;
  color: white;
}


</style>
