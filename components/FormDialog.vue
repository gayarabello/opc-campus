<template>
  <div>
    <v-dialog
      max-width="500"
      :value="showMembershipDialog"
      @click:outside="$emit('confirm-close')"
    >
      <v-card>
        <v-card-title class="flex-center flex-column">
          <h3 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Become a member
          </h3>
          <h5 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Fill the form and we will get back to you shortly
          </h5>
        </v-card-title>
        <v-card-text>
          <v-form class="px-12 text-center" @submit.prevent="sendForm">
            <v-row no-gutters class="justify-center">
              <v-col cols="12">
                <v-text-field
                  class="pb-4"
                  required
                  hide-details
                  :error-messages="nameErrors"
                  v-model="form.name"
                  outlined
                  type="text"
                  name="name"
                  label="Full Name"
                  @input="$v.form.name.$touch()"
                  @blur="$v.form.name.$touch()"
                ></v-text-field>
                <v-text-field
                  class="pb-4"
                  required
                  hide-details
                  :error-messages="emailErrors"
                  v-model="form.email"
                  outlined
                  type="email"
                  name="email"
                  label="Email"
                  @input="$v.form.email.$touch()"
                  @blur="$v.form.email.$touch()"
                ></v-text-field>
                <v-text-field
                  class="pb-4"
                  hide-details
                  aria-required
                  v-model="form.phone"
                  outlined
                  name="phone"
                  type="tel"
                  label="Phone"
                ></v-text-field>
                <v-select
                  outlined
                  label="Plan"
                  item-text="name"
                  item-value="name"
                  name="select"
                  :items="plans"
                  v-model="selectedPlan"
                />
              </v-col>
            </v-row>
            <v-btn
              :disabled="disableButton"
              class="text-center"
              type="submit"
              depressed
              color="primary"
            >
              Submit</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      max-width="600"
      :value="showActivityDialog"
      @click:outside="$emit('confirm-close')"
    >
      <v-card>
        <v-card-title class="flex-center flex-column">
          <h3 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Become a member
          </h3>
          <h5 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Fill the form and we will get back to you shortly
          </h5>
        </v-card-title>
        <!--         <v-row no-gutters>
          <v-col v-for="step in steps" :key="step.id">
            {{ step.text }}
          </v-col>
        </v-row> -->
        <v-card-text>
          <v-form class="px-6" @submit.prevent="sendForm">
            <v-row v-if="clickedActivity.activity" no-gutters>
              <template v-if="step === 1">
                <v-col cols="12">
                  <h3 class="text-capitalize text-center my-3">
                    {{ $t(clickedActivity.activity.title) }} |
                    {{ $t(`general.${clickedActivity.key}`) }}
                  </h3>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-select
                    outlined
                    :items="
                      clickedActivity['activity']['prices'][clickedActivity.key]
                    "
                    v-model="selectedActivity"
                    item-value="name"
                    :item-text="(e) => $t(e.name)"
                  />
                </v-col>
                <v-col v-if="selectedActivity" cols="12" class="text-center">
                  <v-date-picker
                    v-model="form.date"
                    :value="form.date"
                    name="date"
                    no-title
                    label="Choose dates"
                  ></v-date-picker>

                  <v-text-field
                    outlined
                    label="Desired Time"
                    value="12:30:00"
                    type="time"
                  ></v-text-field>
                </v-col>
              </template>

              <template v-if="step === 2">
                <v-col cols="12">
                  <v-text-field
                    class="pb-4"
                    hide-details
                    aria-required
                    v-model="form.name"
                    outlined
                    type="text"
                    name="fullname"
                    label="Full Name"
                  ></v-text-field>
                  <v-text-field
                    class="pb-4"
                    hide-details
                    aria-required
                    v-model="form.email"
                    outlined
                    type="email"
                    name="email"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    class="pb-4"
                    hide-details
                    aria-required
                    v-model="form.phone"
                    outlined
                    name="phone"
                    type="number"
                    label="Phone"
                  ></v-text-field>
                </v-col>
              </template>
              <v-btn
                v-if="step === 2"
                :disabled="disableActivityButton"
                class="text-center"
                type="submit"
                depressed
                color="primary"
              >
                Submit</v-btn
              >
              <v-col v-else cols="12">
                <v-btn @click="goNext()"> Next </v-btn>
              </v-col>
              <input class="d-none" type="text" :value="activity" />
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Vue from 'vue'
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export default Vue.extend({
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required, minLength: minLength(2) },
      email: { required, email },
      select: { required },
      message: { required, minLength: minLength(12) },
    },
  },
  props: {
    showActivityDialog: { type: Boolean },
    showMembershipDialog: { type: Boolean },
    clickedActivity: { type: Object },
  },
  data() {
    return {
      selectedActivity: '',
      step: 1,
      steps: [
        {
          id: 1,
          text: '1- Confirm Activity',
        },
        {
          id: 2,
          text: '2- Pick Date and Time',
        },
        {
          id: 3,
          text: '3- Submit you contacts',
        },
      ],
      selectedPlan: 'Annual',
      activity: '',
      menu2: '',
      time: null,
      plans: [
        {
          name: 'Annual',
          price: 700,
        },
        {
          name: '3 Months',
          price: 200,
        },
        {
          name: 'Monthly',
          price: 80,
        },
      ],
      form: {
        name: '',
        email: '',
        phone: null,
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        additional: '',
      },
      addMoreInfo: false,
    }
  },
  watch: {
    showActivityDialog() {
      if (this.clickedActivity.activity) {
        this.selectedActivity =
          this.clickedActivity.activity.prices[this.clickedActivity.key][0].name
      }
    },
  },
  computed: {
    disableButton() {
      return (
        this.form.name.length === 0 ||
        this.nameErrors.length > 0 ||
        this.form.email.length === 0 ||
        this.emailErrors.length > 0
      )
    },

    disableActivityButton() {
      return (
        this.form.name.length === 0 ||
        this.nameErrors.length > 0 ||
        this.form.email.length === 0 ||
        this.emailErrors.length > 0 ||
        this.form.phone.length === 0
      )
    },

    nameErrors() {
      const errors = []
      if (!this.$v.form.name.$dirty) return errors
      !this.$v.form.name.minLength &&
        errors.push('Name must be at least 3 characters long')
      !this.$v.form.name.required && errors.push('Name is required.')
      return errors
    },

    emailErrors() {
      const errors = []
      if (!this.$v.form.email.$dirty) return errors
      !this.$v.form.email.email && errors.push('Must be valid e-mail')
      !this.$v.form.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    goNext() {
      this.step += 1
    },
    sendForm(e) {
      this.$v.$touch()
      let service = 'service_amnk2zc'
      let user = 'user_tldYcBb4z983aLs4NjWG7'
      let template = 'template_v2agfoc'
      try {
        emailjs.sendForm(service, template, e.target, user, {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          select: this.selectedPlan,
          activity: this.form.activity,
          date: this.form.date,
        })
        this.confirmSuccess()
      } catch (error) {
        console.log({ error })
      }
    },

    confirmSuccess() {
      this.clearForm()
      this.$emit('confirm-close')
      Swal.fire({
        title: 'Sent',
        text: 'We will get back to you shortly.',
        icon: 'success',
        showCancelButton: false,
      })
    },

    clearForm() {
      this.form.name = ''
      this.form.email = ''
      this.form.phone = null
      this.form.selectedPlan = ''
      this.form.activity = ''
      this.form.date = ''
    },
  },
})
</script>
