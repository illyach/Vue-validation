<template>
  <div id="app" :style="{ backgroundColor: backgroundColor }">
    <Form @submit="onSubmit"> 
  
      <Field name="field"  :rules="{ alpha: true, required:true }"/>
      <button @click="handleClick">Sign up for newsletter</button>
      <p v-show="someRule">Form Submitting Success✅</p>
    </Form> 
  </div>

</template>

<script>
import { Form, Field } from 'vee-validate';
import { ref } from 'vue';

export default {
  components: {
    Form,
    Field,
  },
  setup() {

    const someRule = ref(false);

    const onSubmit = () => {
      console.log('Form Submitting Success✅');
      someRule.value = !someRule.value;
    }
     
    return {
      onSubmit,
      someRule
    }
  },
  methods: {
    isRequired(value){ //custom rule for form if wee need
      if(value && value.trim()){
        return true
      }
      return 'This is required';
    },
    
  },
};
</script>


<style>


</style>