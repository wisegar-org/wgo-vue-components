<template>
  <div class="q-pa-none" style="min-width: 100%">
    <q-card ref="viewCard" :bordered="!!options.bordered" :flat="!!options.bordered" :style="`width: 100%;`">
      <q-card-section class="q-py-sm" v-if="!!items.length">
        <q-list>
          <WGOListItemTitle
            icon=""
            :labels="getTitleLabels()"
            :maxLabels="options.maxLabels"
            :maxLines="options.maxLines"
          />
          <template v-for="(item, index) in items">
            <WGOListItem
              icon=""
              :key="`item${item.id || item}-index${index}`"
              :labels="getLabels(item)"
              group="items"
              :maxLabels="options.maxLabels"
              :maxLines="options.maxLines"
            />
          </template>
        </q-list>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <div ref="pagination">
          <slot name="pagination">
            <div ref="placeholderExpList3" style="height: 1px"></div>
          </slot>
        </div>
      </q-card-section>
    </q-card>
    <Loader :loading="loading" />
  </div>
</template>

<script lang="ts" src="./WGOListSimple.ts" />
