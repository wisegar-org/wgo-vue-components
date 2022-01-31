<template>
  <q-dialog v-model="showList" persistent>
    <q-banner>
      <div v-for="(prop, index) in propsEditor" :key="index">
        <q-checkbox
          v-if="!prop.required"
          v-model="prop.visible"
          :label="prop.label"
          size="xs"
        />
        <q-checkbox
          v-else
          :value="true"
          :label="prop.label"
          size="xs"
          readonly
          disabled
        />
      </div>
      <template v-slot:action>
        <div class="flex full-width justify-center q-pt-sm">
          <q-btn
            unelevated
            color="primary"
            :label="closeLabel"
            @click="closeDialog"
          />
        </div>
      </template>
    </q-banner>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOPropToEdit } from "../models";

@Component({})
export default class WGOExpandableListSelectColumnsDialog extends Vue {
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop() showList!: boolean;
  @Prop({ default: "Close" }) closeLabel!: string;
  @Prop({ default: () => () => {} }) closeDialog!: () => unknown;
}
</script>
