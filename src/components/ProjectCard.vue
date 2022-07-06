<template>
  <div class="card">
    <div class="title">
      <div class="projectTitle">
        {{ title }}
      </div>
      <div class="projectSubTitle">
        {{ subtitle }}
      </div>
    </div>

    <div style="display: flex; justify-content: space-between">
      <div class="slider">
        <swiper
            :modules="modules"
            navigation
            :pagination="{ clickable: true }"
            class="projectCardSwiper" >
          <swiper-slide v-for="item in sliderImage">
            <div style="display: flex;justify-content: center">
              <img :src="getImageUrl(item)" style="height: 500px">
            </div>

          </swiper-slide>
        </swiper>
      </div>
      <div class="content">
        <div class="contentTextBox">
          <slot name="contentText" >

          </slot>
          <div class="detailBtn" @click="detailShow()">
            자세히 보기 ▶ README
          </div>
        </div>

        <slot name="summary">

        </slot>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {reactive} from "vue";
const props = defineProps<{
  title: string,
  subtitle: string,
  sliderImage: string[]
}>()
const emits = defineEmits(['detailShow'])

function getImageUrl(image: string){
  const imageUrl = new URL(image, import.meta.url).href
  return imageUrl
}
const modules = reactive([
    Navigation,Pagination
])
function detailShow(){
  emits("detailShow")
}
</script>

<style scoped>
.card{
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 32px;
}
.contentTextBox{
  border-bottom: 1px solid #cccccc;
  padding: 16px 0px;
}
.detailBtn{
  background: #222;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: 12rem;
  border-radius: 8px;
}
.detailBtn:hover{
  background: #444;
}
.title{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projectTitle{
  font-family: 'Black Han Sans';
  font-size: 3rem;
}
.projectSubTitle{
  font-family: "Noto Sans KR";
  color: #6c757d;
  font-size: 1rem;
  font-weight: 400;
}
.slider{
  flex-grow: 1;
  max-width: 50%;
}
.content{
  flex-grow: 1;
  margin-left: 32px;
  max-width: 50%;
}
.projectCardSwiper{
  max-height: 500px;
  margin: 16px;
}
</style>
<style>
.swiper-pagination-bullet{
  background: white;
}
.swiper-pagination-bullet-active{
  background: #1d809f;
}
</style>
