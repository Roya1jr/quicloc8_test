<template>
  <va-navbar color="myprimary" class="mb-2">
    <template #left>
      <router-link style="text-decoration: none" to="/">
        <va-navbar-item> <va-icon name="arrow_back" /></va-navbar-item
      ></router-link>
    </template>
    <template #center>
      <va-navbar-item><h1>Messages</h1> </va-navbar-item>
    </template>
  </va-navbar>
  <div class="align--center">
    <va-accordion v-model="value" inset>
      <va-collapse
        v-for="(message, index) in messages"
        :key="index"
        :header="message.subject"
      >
        <div>
          {{ message.message }}
        </div>
      </va-collapse>
    </va-accordion>
  </div>
</template>



<script>
import myMessages from "@/assets/codingTest/messages.json";

export default {
  name: "Messages",
  data: () => {
    return {
      messages: myMessages,
    };
  },
};
</script>

<style scoped>
.msg {
  justify-content: center;
  align-self: center;
  text-align: center;
}
</style>