<script setup>
import { ref, computed, watch, defineEmits } from 'vue'
const props = defineProps({
  imgSrcList: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'swappedRight',
  'swappedLeft',
  'onClose',
  'onGalleryOpen'
])

let currentPhotoIndex = ref(0)
let isGalleryOpen = ref(false)

const currentPhotoSrc = computed(
  () => props.imgSrcList[currentPhotoIndex.value]
)

const keyUpEventCallback = event => {
  if (event.key === 'ArrowRight') {
    swapRight()
  }
  if (event.key === 'ArrowLeft') {
    swapLeft()
  }
  if (event.key === 'Escape') {
    closeGallery()
  }
}

watch(isGalleryOpen, newValue => {
  if (newValue) {
    window.addEventListener('keyup', keyUpEventCallback)
  } else {
    window.removeEventListener('keyup', keyUpEventCallback)
  }
})

const openGallery = (imgIndex = 0) => {
  emit('onGalleryOpen')
  currentPhotoIndex.value = imgIndex
  isGalleryOpen.value = true
}

const closeGallery = () => {
  emit('onClose')
  isGalleryOpen.value = false
}

const swapRight = () => {
  const maxIndex = props.imgSrcList.length
  if (maxIndex === currentPhotoIndex.value + 1) {
    return
  }
  currentPhotoIndex.value = currentPhotoIndex.value + 1
  emit('swappedRight')
}

const swapLeft = () => {
  const lowestIndex = 0
  if (lowestIndex === currentPhotoIndex.value) {
    return
  }
  currentPhotoIndex.value = currentPhotoIndex.value - 1
  emit('swappedLeft')
}

const changeCurrentPhotoIndex = newIndex => {
  currentPhotoIndex.value = newIndex
}

defineExpose({ openGallery })
</script>

<template>
  <Teleport to="body">
    <div v-bind="$attrs" v-if="isGalleryOpen" class="gallery-wrapper">
      <div class="arrow-button" @click="swapLeft" id="leftArrow">
        <svg
          style="fill: white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
          />
        </svg>
      </div>
      <div class="gallery" v-for="(img, i) in imgSrcList" :key="img">
        <img v-show="i === currentPhotoIndex" :src="img" />
      </div>
      <div class="arrow-button" @click="swapRight" id="rightArrow">
        <svg
          style="fill: white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
          />
        </svg>
      </div>
      <div id="closeButton" @click="closeGallery">
        <svg
          style="fill: white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"
          />
        </svg>
      </div>
      <div id="photoIndexInfo">
        {{ currentPhotoIndex + 1 }}/{{ imgSrcList.length }}
      </div>
      <div class="photo-preview-wrapper">
        <div
          v-for="(img, i) in imgSrcList"
          class="photo-preview-box"
          :key="img"
          @click="changeCurrentPhotoIndex(i)"
        >
          <img :src="img" width="50" height="50" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
