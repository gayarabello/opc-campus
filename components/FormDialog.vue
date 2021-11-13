<template>
  <div>
    <v-dialog
      max-width="320"
      :value="showMembershipDialog"
      @click:outside="$emit('confirm-close')"
    >
      <v-card>
        <div v-if="loading" class="text-center py-12">
          <v-progress-circular indeterminate size="64" />
          <h3 class="mt-5">Submitting...</h3>
        </div>
        <v-card-title class="flex-center flex-column">
          <h3 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Become a member
          </h3>
          <h5 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Fill the form and we will get back to you shortly
          </h5>
        </v-card-title>
        <v-card-text v-if="showMembershipDialog && !loading">
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
                  :item-value="(e) => $t(e.name)"
                  :item-text="(e) => `${$t(e.name)} - Price: ${e.price}€`"
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
      max-width="320"
      v-if="clickedActivity"
      :value="showActivityDialog"
      @click:outside="$emit('confirm-close')"
    >
      <v-card>
        <v-row no-gutters justify="end">
          <v-btn @click="$emit('confirm-close')" icon
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-row>
        <v-card-title
          v-if="clickedActivity.activity"
          class="flex-center flex-column blue-grey--text pt-0"
        >
          <h3 v-if="step === 1" class="text-capitalize text-center my-3">
            {{
              $t(clickedActivity.activity.title) +
              ' | ' +
              $t(`general.${clickedActivity.key}`)
            }}
          </h3>

          <div v-if="step === 2" class="text-center mx-auto mb-3">
            <h4 class="text-capitalize">{{ selectedActivity }}</h4>
            <h3>{{ `${form.date} | ${form.time}` }}</h3>
            <h4 class="text-capitalize text-center">
              {{
                `${$t(clickedActivity.activity.title)}  |
                      ${$t(`general.${clickedActivity.key}`)}`
              }}
            </h4>
          </div>

          <!--           <h3 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Schedule your session
          </h3>
          <h5 class="mx-auto font-weight-regular blue-grey--text lighten-1">
            Fill the form and we will get back to you shortly with a
            confirmation
          </h5> -->
        </v-card-title>

        <v-card-text class="px-2">
          <div v-if="loading" class="text-center py-12">
            <v-progress-circular indeterminate size="64" />
            <h3 class="mt-5">Submitting...</h3>
          </div>
          <v-form
            
            v-if="clickedActivity && !loading"
            class="px-3"
            @submit.prevent="sendForm"
          >
            <div v-if="clickedActivity.activity" no-gutters>
              <div v-show="step === 1" class="text-center">
                
                  <v-select
                    hide-details
                    class="my-3"
                    label="Choose session"
                    outlined
                    name="activity"
                    :items="
                      clickedActivity['activity']['prices'][clickedActivity.key]
                    "
                    v-model="selectedActivity"
                    :item-value="(e) => $t(e.name)"
                    :item-text="
                      (e) =>
                        `${$t(e.name)} - ${$tc('member')}: ${
                          e.price.member
                        }€ / ${$tc('nonMember')}:${e.price.nonMember}€`
                    "
                  />
                  <v-select
                    outlined
                    name="time"
                    label="Desired Time"
                    v-model="form.time"
                    :items="clickedActivity.activity.hours"
                    append-icon="mdi-clock-outline"
                  />
                  <template v-if="selectedActivity">
                    <v-date-picker
                    width="278"
                      v-model="form.date"
                      name="date"
                      no-title
                      :min="today"
                      label="Choose dates"
                    ></v-date-picker>
                  </template>
                
              </div>

              <template v-if="step === 2">
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
                </v-col>
              </template>
              <v-col v-if="step === 2" cols="12" class="text-center">
                <v-btn
                  class="text-center"
                  @click="step -= 1"
                  text
                  color="primary"
                >
                  Back</v-btn
                >
                <v-btn
                  :disabled="disableActivityButton"
                  class="text-center"
                  type="submit"
                  depressed
                  color="primary"
                >
                  Submit</v-btn
                >
              </v-col>
              <v-col v-else cols="12" class="text-center">
                <v-btn
                  color="primary"
                  x-large
                  :disabled="disableNextButton"
                  rounded
                  depressed
                  @click="goNext()"
                >
                  Next
                </v-btn>
              </v-col>
              <input
                class="d-none"
                name="date"
                type="text"
                :value="form.date"
              />
              <input
                class="d-none"
                name="activityTitle"
                :value="$t(clickedActivity.activity.title)"
                type="text"
              />
              <input
                class="d-none"
                name="activityKey"
                :value="clickedActivity.key"
                type="text"
              />
            </div>
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
      loading: false,
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
      selectedPlan: '',
      menu2: '',
      time: null,
      plans: [
        {
          name: 'general.annual',
          price: 600,
        },
        {
          name: 'general.months3',
          price: 200,
        },
        {
          name: 'general.monthly',
          price: 80,
        },
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        additional: '',
        time: '12:30',
      },
      addMoreInfo: false,
    }
  },
  watch: {
    showMembershipDialog() {
      this.selectedPlan = this.$t(this.plans[0].name)
    },

    showActivityDialog() {
      if (this.clickedActivity.activity) {
        this.selectedActivity = this.$t(
          this.clickedActivity.activity.prices[this.clickedActivity.key][0].name
        )
        this.form.date = new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10)
      }
    },
  },
  computed: {
    today() {
      return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    },
    disableNextButton() {
      return this.selectedActivity === '' || this.form.date === ''
    },
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
        this.form.email.length === 0 ||
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
      this.loading = true
      this.$v.$touch()

      this.submitForm(e)
        .then((res) => {
          this.$v.$reset()
          console.log(res.status, res.text)
          this.confirmSuccess()
          this.loading = false
        })
        .catch((error) => {
          console.log('FAILED', error)
          this.$v.$reset()
          this.loading = false
          Swal.fire({
            title: `We're sorry!`,
            text: `We are working to fix it, please call +351 224 092 829`,
            icon: 'error',
            showCancelButton: false,
          })
        })
    },

    async submitForm(e) {
      let service = 'service_amnk2zc'
      let user = 'user_tldYcBb4z983aLs4NjWG7'
      let template = this.clickedActivity
        ? 'template_cbnmsd6'
        : 'template_v2agfoc'

      return await emailjs.sendForm(service, template, e.target, user)
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
      this.form.phone = ''
      this.form.selectedPlan = ''
      this.selectedActivity = ''
      this.form.date = ''
      this.step = 1
      /* this.$v.form.name.$dirty = false
      this.$v.form.email.$dirty = false
      this.$v.form.phone.$dirty = false */
    },
  },
})
</script>
