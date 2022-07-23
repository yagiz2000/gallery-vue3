<script setup>
import {ref,computed,onMounted} from 'vue'
const props = defineProps({
    imgSrcList:{
        type:Array,
        required:true
    }
})


let currentPhotoIndex = ref(null)
let isGalleryOpen = ref(false)
const currentPhotoSrc = computed(()=>props.imgSrcList[currentPhotoIndex.value])

onMounted(()=>{
     window.addEventListener('keyup', event => {
     if(event.key==='ArrowRight'){
        swapRight()
     }
     if(event.key==='ArrowLeft'){
        swapLeft()
     }
    })
})
const openGallery = (imgIndex)=>{
    currentPhotoIndex.value = imgIndex
    isGalleryOpen.value = true
}
const closeGallery = ()=>{
    isGalleryOpen.value = false
}

const swapRight = ()=>{
    const maxIndex = props.imgSrcList.length
    if(maxIndex===currentPhotoIndex.value+1){
        return
    }
    currentPhotoIndex.value = currentPhotoIndex.value + 1
}
const swapLeft = () =>{
    const lowestIndex = 0
    if(lowestIndex===currentPhotoIndex.value){
        return
    }
    currentPhotoIndex.value = currentPhotoIndex.value -1
}

defineExpose({ openGallery, closeGallery })
</script>
<template>
    <Teleport to="body">
        <div v-bind="$attrs" @keyup="logKey"   class="gallery-wrapper" v-if="isGalleryOpen">
            <div class="arrow-button" @click="swapLeft" id="leftArrow"><svg style="fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg></div>
            <div  class="gallery" v-for="(img,i) in imgSrcList" :key="img">
    
                <img v-show="i===currentPhotoIndex" :src="img"/>
            </div>       
            <div class="arrow-button" @click="swapRight" id="rightArrow"><svg style="fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg></div>
            <div id="closeButton" @click="closeGallery"><svg style="fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg></div>
            <div id="photoIndexInfo">{{currentPhotoIndex+1}}/{{imgSrcList.length}}</div>
        </div>
    </Teleport>
        
</template>



<style scoped>
.gallery-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background:rgba(0, 0, 0, 0.639); 
}

.gallery{
  display: flex;
  justify-content: center;
  align-items: center;
}
.gallery>img{
    min-width: 300px;
    max-width:70%;
    max-height: 800px;
    object-fit: cover;
    object-position: bottom;    
}

.arrow-button{
    position: absolute;
    cursor: pointer;
    align-self: center;
    color: white;
    z-index: 1000;
    width: 20px;
}

#leftArrow{
    left: 10px;
}

#rightArrow{
    right: 10px;
}
#closeButton{
    position: absolute;
    cursor: pointer;
    width: 20px;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 20px;
}
#photoIndexInfo{
    position: absolute;
    align-self: flex-start;
    left: 10px;
    color: white;
}
</style>