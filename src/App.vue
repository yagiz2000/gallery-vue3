

<template>
 <div >
  <button @click="openGallery">Open Gallery</button>
    <gallery-modal ref="hello" :imgSrcList="['https://storage.googleapis.com/gameflex-cortex-storage-test/companies/1/gameflex_5s1v.jpeg','https://storage.googleapis.com/gameflex-cortex-storage-test/games/4/Cortex_ofs7.png','https://storage.googleapis.com/gameflex-cortex-storage-test/games/4/files/4/about-us.jpg.jpg','https://storage.googleapis.com/gameflex-cortex-storage-test/games/4/1ed67de7fb604a0d8ae746cd9e631a2b_4psn.png','https://storage.googleapis.com/gameflex-cortex-storage-test/games/2/files/86/cortex-db.png','https://storage.googleapis.com/gameflex-cortex-storage-test/games/2/files/9/insta.jpeg','https://storage.googleapis.com/gameflex-cortex-storage-test/games/2/files/75/batman.jpeg']"></gallery-modal>
 </div>
</template>
<script setup>
import {ref} from 'vue'
import galleryModal from './components/galleryModal.vue'

const hello = ref(null)

const openGallery = ()=>{
  hello.value.openGallery(1)
}
</script>
<style scoped>

</style>
