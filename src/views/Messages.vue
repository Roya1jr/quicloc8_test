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

  <div>
    <va-list>
      <va-list-item v-for="(message, index) in messages" :key="index">
        <va-list-item-section avatar>
          <va-avatar>
            <va-icon name="account_circle" />
          </va-avatar>
        </va-list-item-section>

        <va-list-item-section>
          <va-list-item-label>
            {{ message.subject }}
          </va-list-item-label>

          <va-list-item-label caption>
            {{ message.message }}
          </va-list-item-label>
        </va-list-item-section>

        <va-list-item-section icon>
          <va-icon class="mr-2">{{ message.display }}</va-icon>
        </va-list-item-section>
      </va-list-item>
    </va-list>
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