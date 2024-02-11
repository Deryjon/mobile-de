<template>
    <v-container class="max-w-[1120px]">
        <div v-if="!isNewPassword" class="box bg-[#05030380] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[700px]  mx-auto p-[20px] text-white">
            <p class="title text-white text-[14px] md:text-[16px] lg:text-[20px]">
                {{ $t("message.register.forget") }}
            </p>
            <div class="img-forget w-full h-[200px]">
                <img src="../../../assets/images/forgot-password.avif" alt="" class="w-full h-full object-cover">
            </div>
            <p>No problem. Just enter your email address and we’ll send you a link to create a new password. </p>
            <div class="input-email mt-[30px]">
                <p>Email Address</p>
                <input v-model="emailSend" type="text" class="bor rounded-[5px] w-full px-[15px] py-[10px]">
            </div>
            <button v-if="!isCode" class="btn bg-[#e04b00] px-auto w-full px-[15px] py-[10px] rounded-[5px] mt-[20px]"
                @click="sendEmail">Send password
                link</button>

            <div class="" v-else>
                <div class="code mt-[20px]">
                    <p>Code</p>

                    <input v-model="codeSend" type="text" class="bor rounded-[5px] w-full px-[15px] py-[10px]">
                </div>
                <button class="btn bg-[#e04b00] px-auto w-full px-[15px] py-[10px] rounded-[5px] mt-[20px]"
                    @click="sendCode">Send code
                    link</button>
            </div>
        </div>
        <div v-else class="box bg-[#05030380] w-[300px] sm:w-[450px] md:w-[550px] lg:w-[700px]  mx-auto p-[20px] text-white">
            <p class="title text-white text-[14px] md:text-[16px] lg:text-[20px]">
                New password
            </p>
            <div class="input-email mt-[30px]">
                <p>Email Address</p>
                <input v-model="emailSend" type="text" class="bor rounded-[5px] w-full px-[15px] py-[10px]">
            </div>
            <div class="" >
                <div class="code mt-[20px]">
                    <p>New password</p>

                    <input v-model="newPassword" type="text" class="bor rounded-[5px] w-full px-[15px] py-[10px]">
                </div>
                <button class="btn bg-[#e04b00] px-auto w-full px-[15px] py-[10px] rounded-[5px] mt-[20px]"
                    @click="sendCode">Send </button>
            </div>
        </div>
        
    </v-container>
</template>
<script>
import http from '../../../axios.config';
export default {
    data() {
        return {

            emailSend: "",
            codeSend: "",
            newPassword: "",
            isCode: false,
            isNewPassword: false,
        }
    },
    methods: {
        sendEmail() {
            http.post("/forget/email", {
                email: this.emailSend
            }).then((res) => {
                this.isCode = !this.isCode
            })
        },
        sendCode() {
            http.post("/forget/code", {
                email: this.emailSend,
                code: parseInt(this.codeSend)
            }).then((res) => {
                this.isNewPassword = !this.isNewPassword
                console.log(res.data);
            })
        },
        sendNewPassword() {
            http.post("/forget/reset/password", {
                email: this.emailSend,
                new_password: parseInt(this.newPassword)
            }).then((res) => {
                this.$router.push({name: "home"})
                console.log(res.data);
            })
        }


    }
}
</script>
<style scoped>
.bor {
    border: 1px white solid;
}
</style>