<template>
  <div id="container">
    <va-navbar color="primary" class="mb-2">
      <template #left>
        <va-navbar-item>LOGO HERE</va-navbar-item>
      </template>
      <template #center>
        <va-navbar-item>Primary</va-navbar-item>
      </template>
      <template #right>
        <va-navbar-item>Auto font color</va-navbar-item>
      </template>
    </va-navbar>
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

<style>
ul {
  list-style-type: none;
}
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: #555;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>