<template>
    <div>
        <div v-bind:key="post" v-for="post in posts">
            <Post v-bind:post="post" />

        </div>
    </div>
</template>

<script>
import Post from './Post';
export default {
    name: "Posts",
    props: ["posts"],
    components: {
        Post
    }
}
</script>

<style scoped>

</style>