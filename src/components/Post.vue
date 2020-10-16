<template>
    <div>
        <b-card
            title="Card Title"
            v-bind:img-src="post.image_src"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem;"
            class="mb-2"
        >
        <b-card-text>
            {{post.title}}
        </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"]
}
</script>