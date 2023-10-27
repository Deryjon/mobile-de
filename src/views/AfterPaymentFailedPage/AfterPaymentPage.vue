<template>
    <main>
<!-- <AfterPaymentPage/> -->
<AfterFailedPaymentPage class="mt-[10px]"/>
    </main>
</template>
<script>
import AfterPaymentPage from "./sections/AfterPaymentsSuccessSection.vue"
import AfterFailedPaymentPage from "./sections/AfterPaymentsFailedSection.vue"
export default{
        components: {
            AfterPaymentPage,
            AfterFailedPaymentPage
        }
    }
</script>
<style></style>