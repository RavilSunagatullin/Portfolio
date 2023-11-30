<template>
    <div>
        <h1 class="heading-1 mt">Input</h1>
        <form class="form" @submit.prevent="submitForm">
            <h2 class="heading-2">Different validations</h2>
            <uiInput
                label="Твое имя"
                name="имя"
                placeholder="Введите ваше имя"
                v-model:value="v.nameFieldRu.$model"
                :error="v.nameFieldRu.$errors"/>
            <uiInput
                label="your name"
                name="name"
                placeholder="Input your name"
                v-model:value="v.nameField.$model"
                :error="v.nameField.$errors"/>
            <uiInput
                label="Your email"
                name="email"
                placeholder="Input your email"
                type="email"
                v-model:value="v.emailField.$model"
                :error="v.emailField.$errors"/>
            <uiInput
                label="Your lucky number"
                name="Number"
                placeholder="Input your number"
                v-model:value="v.numField.$model"
                :error="v.numField.$errors"/>
            <h2 class="heading-2">Comparison passwords</h2>
            <uiInput
                label="Your password"
                name="password"
                type="password"
                placeholder="Input your password"
                v-model:value="passwordField"/>
            <uiInput
                label="Confirm your password"
                name="password confirm"
                type="password"
                placeholder="Input your password again"
                v-model:value="v.confirmPassword.$model"
                :error="v.confirmPassword.$errors"/>
            <h2 class="heading-2">Cucumber validation</h2>
            <uiInput
                label="Your letter with cucumber"
                name="cucumber"
                placeholder="Input your letter with cucumber"
                v-model:value="v.cucumberField.$model"
                :error="v.cucumberField.$errors"
                />
            <h2 class="heading-2"> Submit your information </h2>
            <div class="wrapper">
                <uiInput
                    label="Your last message"
                    name="last word"
                    placeholder="Input your last word in this letter"
                    v-model:value="v.messageField.$model"
                    :error="v.messageField.$errors"
                    />
                <uiButton 
                    label="Submit"
                    color="primary"/>
            </div>
        </form>
    </div>
</template>

<script setup>
    import uiInput from '@/components/uiInput.vue';
    import uiButton from '@/components/uiButton.vue';
    import {ref, computed} from 'vue'
    import useVuelidate from '@vuelidate/core';
    import {helpers,minLength, email, maxLength, numeric, sameAs} from '@vuelidate/validators'

    const nameField = ref('')
    const nameFieldRu = ref('')
    const emailField = ref('')
    const numField = ref('')
    const messageField = ref('')

    const passwordField = ref('')
    const confirmPassword = ref('')

    const cucumberField = ref('')

    const mustBeCucumber = (value) => value.includes('cucumber')

    const rules = computed(() => ({
        nameField:{
            minLength: minLength(3)
        },
        nameFieldRu:{
            minLength:helpers.withMessage(`минимальная длина 3 символа`, minLength(3))
        },
        emailField:{
            email: email
        },
        numField:{
            maxLength: maxLength(3),
            numeric: numeric
        },
        confirmPassword:{
            sameAsPassword: sameAs(passwordField.value)
        },
        cucumberField:{
            cucumberField: helpers.withMessage('Not include cucumber', mustBeCucumber)
        },
        messageField:{
            minLength: minLength(3)
        },
    }))
    const v = useVuelidate(rules, {nameField, nameFieldRu, emailField, numField, confirmPassword, cucumberField, messageField})

    const submitForm = () => {
        v.value.$touch()
        if(v.value.$error) return alert('Correct errors')
        alert('Form submitted')
    }
</script>

<style lang="sass" scoped>
.form
    display: flex
    flex-direction: column
    align-content: center
    padding: 5px
.wrapper
    max-width: 300px
    display: flex
    flex-direction: column
    gap: 15px
</style>