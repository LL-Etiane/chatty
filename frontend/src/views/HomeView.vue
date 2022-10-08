<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'
  import PostSearchComponent from '../components/PostSearchComponent.vue';
  import PostComponent from '../components/PostComponent.vue';

  const posts = ref({})

  async function getPosts(){
    let gPosts = await axios.get('/posts')
    posts.value = gPosts.data
  }

  onMounted(()=>{
    getPosts()
  })
</script>

<template>
  <main>
    <PostSearchComponent class="mt-4"/>
    {{posts}}
    <h1 v-if="posts.postCount < 1" class="text-center font-extrabold text-4xl">No post available</h1>
    <div class="" v-else>
      <PostComponent v-for="post in posts"/>
    </div>
  </main>
</template>
