// file: /src/boot/register-my-component.js

import Vue from "vue";
import MyButton from "../components/MyButton/MyButton.vue";
import MyButtom from "../components/MyButtom/MyButtom.vue";

import WGODialog from "../components/WGODialog/WGODialog.vue";
import WGOLoading from "../components/WGOLoading/WGOLoading.vue";
// we globally register our component with Vue
export default ({ app }: any) => {
  Vue.component("my-button", MyButton);
  Vue.component("my-buttom", MyButtom);
  Vue.component("wgo-dialog", WGODialog);
  Vue.component("wgo-loading", WGOLoading);
};
