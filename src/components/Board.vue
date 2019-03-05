<template>
    <div>
        Board
        <div>bid : {{bid}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0
        }
    },
    created() {
        //console.log(this.$route.params.bid)
        this.bid = this.$route.params.bid
    }
}
</script>

<style>

</style>
