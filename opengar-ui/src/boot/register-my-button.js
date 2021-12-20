// file: /src/boot/register-my-component.js
import MyButton from "../components/MyButton.vue";
import Vue from "vue";

// we globally register our component with Vue
export default ({ app }) => {
  Vue.component("my-button", MyButton);
};
