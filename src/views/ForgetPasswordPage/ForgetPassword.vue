<template>
    <section class="forget">
        <v-container class="max-w-[1120px]">
            <SendEmail/>
         </v-container>
    </section>
</template>
<script>
import SendEmail from "./sections/SendEmail.vue"
export default {
    components: {
SendEmail
    }
}
</script>