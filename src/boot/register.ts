// file: /src/boot/register-my-component.js

import Vue from "vue";
import MyButton from "../components/MyButton/MyButton.vue";
import MyButtom from "../components/MyButtom/MyButtom.vue";

import WGODialog from "../components/WGODialog/WGODialog.vue";
import WGOLoading from "../components/WGOLoading/WGOLoading.vue";

import WGOSimpleExpanded from "../components/WGOExpanded/WGOSimpleExpanded.vue";
import WGOExpanded from "../components/WGOExpanded/WGOExpanded.vue";

import WGOInputText from "../components/WGOInputText/WGOInputText.vue";
import WGOInputPlaneText from "../components/WGOInputPlaneText/WGOInputPlaneText.vue";
import WGOInputNumber from "../components/WGOInputNumber/WGOInputNumber.vue";
import WGOInputDate from "../components/WGOInputDate/WGOInputDate.vue";
import WGOInputSelect from "../components/WGOInputSelect/WGOInputSelect.vue";

import WGOExpandableList from "../components/WGOExpandableList/WGOExpandableList.vue";
import WGOExpandableListHeader from "../components/WGOExpandableList/WGOExpandableListHeader/WGOExpandableListHeader.vue";
import WGOExpandableListFilterLabel from "../components/WGOExpandableList/WGOExpandableListFilter/WGOExpandableListFilterLabel.vue";
// we globally register our component with Vue
export default ({ app }: any) => {
  Vue.component("my-button", MyButton);
  Vue.component("my-buttom", MyButtom);
  Vue.component("wgo-dialog", WGODialog);
  Vue.component("wgo-loading", WGOLoading);
  Vue.component("wgo-simple-expanded", WGOSimpleExpanded);
  Vue.component("wgo-expanded", WGOExpanded);

  Vue.component("wgo-itext", WGOInputText);
  Vue.component("wgo-iptext", WGOInputPlaneText);
  Vue.component("wgo-inumber", WGOInputNumber);
  Vue.component("wgo-idate", WGOInputDate);
  Vue.component("wgo-iselect", WGOInputSelect);

  Vue.component("wgo-exp-list", WGOExpandableList);
  Vue.component("wgo-exp-list-header", WGOExpandableListHeader);
  Vue.component("wgo-exp-list-filter-lab", WGOExpandableListFilterLabel);
};
