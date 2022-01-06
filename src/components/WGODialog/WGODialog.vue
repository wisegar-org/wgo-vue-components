<template>
  <q-dialog
    v-model="options.open"
    persistent
    :full-height="options.fullHeight"
    :full-width="options.fullWidth"
  >
    <q-card :style="getStyle()">
      <q-form class="fit" ref="placeholder">
        <q-toolbar class="bg-primary text-white" ref="title">
          <q-avatar v-if="getIcon()" :icon="getIcon()" />
          <q-toolbar-title>{{ options.title }}</q-toolbar-title>
          <q-btn
            unelevated
            icon="close"
            flat
            round
            dense
            @click="options.onClose"
            v-close-popup
          />
        </q-toolbar>
        <q-card-section class="scroll q-pa-none">
          <q-scroll-area
            :style="
              `max-height: ${
                options.height ? options.height : contentHeight
              }; height: ${contentHeight}`
            "
            ref="placeholder2"
          >
            <slot ref="slot"></slot>
          </q-scroll-area>
        </q-card-section>
        <q-card-section
          v-if="!!$slots.buttons || !options.hideButtons"
          class="q-pa-sm"
        >
          <div class="flex justify-around row" ref="buttons">
            <slot name="buttons"> </slot>
            <q-btn
              v-if="!options.hideButtons"
              color="primary"
              unelevated
              :label="options.cancelText || 'Cancel'"
              @click="options.onCancel"
            />
            <q-btn
              v-if="!options.hideButtons"
              color="primary"
              type="submit"
              unelevated
              :label="options.acceptText || 'Accept'"
              @click="options.onAccept"
            />
          </div>
        </q-card-section>
      </q-form>
      <WGOLoading :loading="options.loading" />
    </q-card>
  </q-dialog>
</template>

<script lang="ts" src="./WGODialog.ts" />
