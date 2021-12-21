// file: /src/boot/register-my-component.js
import Vue from "vue";
import MyButton from "../components/MyButton/MyButton.vue";
import MyButtom from "../components/MyButtom/MyButtom.vue";

// we globally register our component with Vue
export default ({ app }) => {
  debugger;
  Vue.component("my-button", MyButton);
  Vue.component("my-buttom", MyButtom);
};
