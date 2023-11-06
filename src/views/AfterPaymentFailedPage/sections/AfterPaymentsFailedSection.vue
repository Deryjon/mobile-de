<template>
    <main>
        <v-container class="max-w-[1110px]">
            <div class="div border-red-200 h-[300px] p-10 flex flex-col gap-[20px] justify-center items-center">

                <p class="mx-auto text-red-600 w-[300px] text-center">Your payment has been completed successfully!</p>
                <p>Text Payment</p>
                <p>Price</p>
                <button class="bg-red-500 px-[20px] py-[10px] text-white" @click="goHome">Go home</button>
            </div>
        </v-container>
    </main>
</template>
<script>
export default {
methods:{
    goHome(){
        this.$router.push({name: "home"})
    }
}
}
</script>
<style>
.div {
    border: 3px rgb(255, 2, 2) solid;
}
</style>