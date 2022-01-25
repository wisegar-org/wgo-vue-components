"use strict";
// file: /src/boot/register-my-component.js
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = (0, tslib_1.__importDefault)(require("vue"));
const MyButton_vue_1 = (0, tslib_1.__importDefault)(require("../components/MyButton/MyButton.vue"));
const MyButtom_vue_1 = (0, tslib_1.__importDefault)(require("../components/MyButtom/MyButtom.vue"));
const WGODialog_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGODialog/WGODialog.vue"));
const WGOLoading_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOLoading/WGOLoading.vue"));
const WGOSimpleExpanded_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOExpanded/WGOSimpleExpanded.vue"));
const WGOExpanded_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOExpanded/WGOExpanded.vue"));
const WGOInputText_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOInputText/WGOInputText.vue"));
const WGOInputPlaneText_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOInputPlaneText/WGOInputPlaneText.vue"));
const WGOInputNumber_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOInputNumber/WGOInputNumber.vue"));
const WGOInputDate_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOInputDate/WGOInputDate.vue"));
const WGOInputSelect_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOInputSelect/WGOInputSelect.vue"));
const WGOInputDrawer_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOInputDrawer/WGOInputDrawer.vue"));
const WGOExpandableList_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOExpandableList/WGOExpandableList.vue"));
const WGOExpandableListCard_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOExpandableList/WGOExpandableListCard.vue"));
const WGOExpandableListHeader_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOExpandableList/WGOExpandableListHeader/WGOExpandableListHeader.vue"));
const WGOExpandableListFilterLabel_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOExpandableList/WGOExpandableListFilter/WGOExpandableListFilterLabel.vue"));
// we globally register our component with Vue
exports.default = ({ app }) => {
    vue_1.default.component("my-button", MyButton_vue_1.default);
    vue_1.default.component("my-buttom", MyButtom_vue_1.default);
    vue_1.default.component("wgo-dialog", WGODialog_vue_1.default);
    vue_1.default.component("wgo-loading", WGOLoading_vue_1.default);
    vue_1.default.component("wgo-simple-expanded", WGOSimpleExpanded_vue_1.default);
    vue_1.default.component("wgo-expanded", WGOExpanded_vue_1.default);
    vue_1.default.component("wgo-itext", WGOInputText_vue_1.default);
    vue_1.default.component("wgo-iptext", WGOInputPlaneText_vue_1.default);
    vue_1.default.component("wgo-inumber", WGOInputNumber_vue_1.default);
    vue_1.default.component("wgo-idate", WGOInputDate_vue_1.default);
    vue_1.default.component("wgo-iselect", WGOInputSelect_vue_1.default);
    vue_1.default.component("wgo-idrawer", WGOInputDrawer_vue_1.default);
    vue_1.default.component("wgo-exp-list", WGOExpandableList_vue_1.default);
    vue_1.default.component("wgo-exp-list-card", WGOExpandableListCard_vue_1.default);
    vue_1.default.component("wgo-exp-list-header", WGOExpandableListHeader_vue_1.default);
    vue_1.default.component("wgo-exp-list-filter-lab", WGOExpandableListFilterLabel_vue_1.default);
};
