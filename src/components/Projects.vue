<template>
  <div class="root">
    <div class="projectRoot">
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
        <Wecango style="margin-top: 16px">

        </Wecango>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tenniswing from "@/components/Project/Tenniswing.vue"
import Wecango from "@/components/Project/Wecango.vue"
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
.projectRoot{
  width: 70vw;
  padding: 64px 32px;
}
@media screen and (max-width:768px) {
  .projectTitle{
    font-size: 2.0rem;
  }

  .projectIcon{
    font-size: 2.3rem !important;
  }

  .projectRoot{
    width: 80vw;
    padding: 32px 0px;
  }
}
@media screen and (max-width:480px) {
  .projectTitle{
    font-size: 2.0rem;
  }
  .projectIcon{
    font-size: 2.3rem !important;
  }

  .projectRoot{
    width: 90vw;
    padding: 32px 0px;
  }
}


</style>
