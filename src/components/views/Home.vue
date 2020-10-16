<template>
    <div>
        <Posts v-bind:posts="posts"/>
    </div>
</template>

<script>
import Posts from '../Posts';

export default {
    name: "Home",
    components: {
        Posts
    },
    data(){
        return {
            posts: [
                {
                    id: 1,
                    image_src : 'https://picsum.photos/600/300/?image=25',
                    title: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
            ] 
        }
    }
}
</script>