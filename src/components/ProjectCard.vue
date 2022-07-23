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

    <div class="contentRoot" >
      <div class="slider">
        <swiper
            :modules="modules"
            navigation
            :pagination="{ clickable: true }"
            class="projectCardSwiper" >
          <swiper-slide v-for="item in sliderImage">
            <div style="display: flex;justify-content: center;cursor: pointer" @click="showImage(item)">
              <img :src="getImageUrl(item)" class="projectImg" >
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

        <slot name="summary" class="container1">

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
import {onMounted, reactive} from "vue";
import {useQuasar} from "quasar";
import ImageViewerDialog from "@/components/ImageViewerDialog.vue"
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

const $q= useQuasar();
function showImage(img: string){
  $q.dialog({
    component:ImageViewerDialog,
    componentProps: {
      image: img
    }
  })
}

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
  width: calc(70vw - 620px);
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
  width: 500px;
}

.projectCardSwiper{
  max-height: 500px;
  margin: 16px;
}
.contentRoot{
  display: grid;
  grid-template-columns: 1fr 2fr;

}
.projectImg{
  height: 500px;
  max-width: 468px;
}
@media screen and (max-width:1800px) {
  .contentRoot{
    grid-template-columns: 1fr;
  }
  .contentTextBox{
    border-bottom: 1px solid #cccccc;
    padding: 16px 0px;
    width: calc(70vw - 110px);
  }
  .slider{
    justify-self: center;

  }
}
@media screen and (max-width:900px) {
  .projectImg{
    height: 280px;
    max-width: 353px;
  }
  .slider{
    width: calc(70vw - 160px);
  }
}
@media screen and (max-width:768px) {
  .card{
    padding: 32px 0px;
  }
  .slider{
    width: 80vw ;
  }
  .content{
    padding: 16px;
  }
  .contentTextBox{
    width: calc(80vw - 32px);
  }
  .projectTitle{
    font-size: 1.5rem;
  }

}
@media screen and (max-width:480px) {
  .card{
    padding: 32px 0px;
  }
  .slider{
    width: 90vw;
  }
  .content{
    padding: 16px;
  }
  .contentTextBox{
    width: calc(90vw - 32px);
  }
  .projectTitle{
    font-size: 1.2rem;
  }
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
