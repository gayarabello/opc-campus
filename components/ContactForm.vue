<template>
  <div class="my-12">
    <h2 class="text-center">{{ $t('contact') }}</h2>
    <form
      class="mx-auto px-6"
      style="max-width: 32rem !important"
      @submit.prevent="onSubmit"
    >
      <v-row no-gutters justify="center" align="center">
        <v-col cols="12" class="py-2">
          <v-text-field
            outlined
            v-model="name"
            name="name"
            :error-messages="nameErrors"
            :label="$t('name')"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="email"
            name="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-textarea
            outlined
            :label="$t('message')"
            required
            v-model="message"
            :error-messages="messageError"
            name="message"
            @blur="$v.message.$touch()"
          ></v-textarea>

          <v-select
            v-model="select"
            name="select"
            outlined
            :items="items"
            :error-messages="selectErrors"
            :label="$t('unity')"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
        </v-col>
      </v-row>
      <v-row no-gutters align="center" class="mt-0">
        <v-col cols="12" sm="8">
          <div class="captcha-container">
            <recaptcha
              class="captcha"
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn
            depressed
            block
            large
            :disabled="disableButton"
            color="primary"
            class="mr-4"
            type="submit"
          >
            {{ $t('send') }}
          </v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(2) },
    email: { required, email },
    select: { required },
    message: { required, minLength: minLength(12) },
  },
  mounted() {
    this.select = this.items[0]
  },
  data: () => ({
    name: '',
    email: '',
    message: '',
    select: {},
    captcha: false,
    units: ['massage', 'padel', 'yoga', 'pilates', 'fitness'],
  }),

  computed: {
    items() {
      return this.units.map((e) => e.name)
    },
    disableButton() {
      return (
        this.messageError.length > 0 ||
        this.selectErrors.length > 0 ||
        this.nameErrors.length > 0 ||
        this.emailErrors.length > 0 ||
        !this.captcha
      )
    },
    messageError() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.minLength &&
        errors.push('Name must be at least 12 characters long')
      !this.$v.message.required && errors.push('message is required.')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength &&
        errors.push('Name must be at least 3 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
  methods: {
    clearForm() {
      this.name = ''
      this.email = ''
      this.message = ''
      this.select = {}
      this.captcha = false
      setTimeout(() => {
        this.$v.$reset()
      }, 0)
      this.$nextTick(() => {
        this.$v.$reset()
      })
    },

    confirmSuccess() {
      this.clearForm()
      Swal.fire({
        title: 'Sent',
        text: 'We will get back to you shortly.',
        icon: 'success',
        showCancelButton: false,
      })
    },

    sendEmail(e) {
      this.$v.$touch()
      // console.log('submit', this.select, this.name, this.email, this.message)
      let unity = this.units.find((e) => e.name === this.select)
      let service =
        unity.service === 1 ? 'service_amnk2zc' : 'service_5ydwtq8-cps'
      let user =
        unity.service === 1
          ? 'user_tldYcBb4z983aLs4NjWG7'
          : 'user_3g610oF0MnxyYzKbOkJIm'
      // console.log(unity)

      try {
        emailjs.sendForm(service, unity.template, e.target, user, {
          name: this.name,
          email: this.email,
          select: this.select.name,
          message: this.message,
        })
        this.confirmSuccess()
      } catch (error) {
        console.log({ error })
      }
    },

    onError(error) {
      console.log('Error happened:', error)
      return (this.captcha = false)
    },
    async onSubmit(e) {
      try {
        const token = await this.$recaptcha.getResponse()
        this.sendEmail(e)
        this.sent = true
        this.messageSent = 'Sent with success!'
        return (this.captcha = false)
        //console.log("ReCaptcha token:", token);
        await this.$recaptcha.reset()
      } catch (error) {}
    },
    onSuccess(token) {
      console.log('Succeeded:', token)
      return (this.captcha = true)
    },
    onExpired() {
      console.log('Expired')
      return (this.captcha = false)
    },
  },
}
</script>
<style lang="scss" scoped>
.captcha-container {
  max-width: 256px;
}
.captcha {
  transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
}
</style>
