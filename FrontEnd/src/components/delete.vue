<template>
 <div>
   <h1>check</h1>
   <b-form>
       <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="IT"
      unchecked-value="not_accepted"
    >
    Set to it ?
    </b-form-checkbox>
    <div>State: <strong>{{ status }}</strong></div>
 </div>
 
</template>

<script>
export default {
  name: "remove",
  data() {
      return {
        status: 'set not nothing'
      }
    }
};
</script>