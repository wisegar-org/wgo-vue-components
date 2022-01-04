<template>
  <q-input
    :ref="WGOInputPlaneTextRef"
    v-model="stringValue"
    autogrow
    outlined
    :dense="options.small"
    :label="label"
    type="text"
    :rules="WGOInputPlaneTextRules"
    lazy-rules="ondemand"
    hide-bottom-space
    :readonly="options.readonly"
    @focus="onFocus"
    @change="onChangeValue"
    @keydown.enter.prevent="() => false"
  >
    <template v-slot:append>
      <div class="q-field" v-if="maxLength">
        {{ stringValue.length }} / {{ maxLength }}
      </div>
      <q-icon
        :disabled="!stringValue"
        name="close"
        @click="onClear"
        class="cursor-pointer"
        :style="clearOption ? '' : 'display:none'"
      />
    </template>
  </q-input>
</template>
<script lang="ts" src="./WGOInputPlaneText.ts" />
