<template>
  <q-expansion-item
    popup
    dense-toggle
    expand-icon-class="testClass"
    :group="group"
    :expand-icon-toggle="getExpandedWithIcon()"
    header-class="q-px-sm q-py-none"
    v-model="showPopup"
    :switch-toggle-side="switchToggle"
  >
    <template v-slot:header class="q-pa-sm q-ma-sm">
      <slot name="header">
        <q-item-section avatar>
          <q-avatar :icon="getIcon()" />
        </q-item-section>
        <slot name="labels">
          <q-item-section
            v-if="!labels || !labels.length"
            class="self-center"
            style="text-overflow: ellipsis; overflow: hidden; display: block; white-space: nowrap"
          >
            {{ label }}
          </q-item-section>
          <q-item-section v-else class="cursor-pointer q-pl-none">
            <div class="row q-pl-none full-width" :style="getJustify()">
              <template v-for="(item, index) of labels">
                <q-item-section
                  :key="item + index"
                  :class="getLabelsClass(index, item.columns)"
                  :style="getLabelsStyle(index)"
                >
                  <div
                    class="q-pl-none full-width"
                    style="text-overflow: ellipsis; overflow: hidden; display: block; white-space: nowrap"
                  >
                    {{ isStringLabel(item) ? item : item.label }}
                    <q-tooltip anchor="bottom start" self="center start" v-if="!isStringLabel(item)">
                      {{ item.tooltip }}
                    </q-tooltip>
                  </div>
                </q-item-section>
              </template>
            </div>
          </q-item-section>
        </slot>
      </slot>
    </template>
    <q-separator />
    <q-card>
      <q-card-section class="q-pa-none">
        <slot name="content"></slot>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script lang="ts" src="./WGOSimpleExpanded.js" />
