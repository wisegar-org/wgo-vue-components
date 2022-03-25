<template>
  <q-card bordered flat>
    <q-item>
      <q-item-section avatar>
        <q-avatar :icon="getIcon()" />
      </q-item-section>
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
      <q-item-section class="col-auto" v-show="!getDisplayInXS()">
        <div class="justify-end content-end row">
          <slot name="buttons"></slot>
        </div>
      </q-item-section>
      <q-item-section v-if="getDisplayInXS()" avatar class="col-auto">
        <q-btn flat unelevated color="primary" icon="more_vert" dense>
          <q-menu anchor="top start" self="top right">
            <q-list v-close-popup>
              <slot name="buttons" v-close-popup></slot>
            </q-list>
          </q-menu>
        </q-btn>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script lang="ts" src="./WGOListItem.ts" />
