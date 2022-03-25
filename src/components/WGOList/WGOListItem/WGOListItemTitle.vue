<template>
  <q-card flat class="q-pb-none cursor-pointer">
    <q-item class="cursor-pointer q-pb-none">
      <q-item-section avatar>
        <q-avatar :icon="getIcon()" text-color="transparent" />
      </q-item-section>
      <q-item-section
        v-if="!labels || !labels.length"
        class="self-center"
        style="
          text-overflow: ellipsis;
          overflow: hidden;
          display: block;
          white-space: nowrap;
        "
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
                class="q-pl-none full-width text-bold"
                style="
                  text-overflow: ellipsis;
                  overflow: hidden;
                  display: block;
                  white-space: nowrap;
                "
              >
                {{ isStringLabel(item) ? item : item.label }}
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
      <q-item-section
        v-if="getDisplayInXS()"
        avatar
        class="col-auto cursor-pointer"
      >
        <q-btn flat dense unelevated color="transparent" icon="-" />
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script lang="ts" src="./WGOListItemTitle.js" />
