<template>
    <div class="about">
        <h1>Hello {{ their_name }}, This is an about page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, reprehenderit numquam? Beatae esse perferendis minima maxime quis culpa voluptatem necessitatibus officiis sint a voluptas, est temporibus non, consequuntur harum aspernatur?</p>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data(){
        return{
            their_name: this.$route.params.name
        }
    }
}
</script>