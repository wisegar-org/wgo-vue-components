<template>
  <q-card-section class="q-py-sm">
    <div class="row items-center justify-between q-table">
      <div class="col-12 no-wrap">
        <div class="text-h6 q-mr-md ellipsis">
          {{ title }}
        </div>
      </div>
    </div>
    <div class="flex row justify-between">
      <div class="flex row q-pt-sm col-grow">
        <slot name="addButton">
          <q-btn
            v-if="options.showAddButton"
            unelevated
            size="sm"
            class="q-mr-md"
            color="primary"
            icon="add"
            :label="options.labelShowAddButton"
            @click="(itemForm) => addItem(itemForm, closeDialog)"
          />
        </slot>
      </div>
      <WGOExpandableListHeaderWeb
        v-if="!isMobile()"
        :title="title"
        :propsEditor="propsEditor"
        :options="options"
        :items="items"
        :filter="filter"
        :toggleFullScreen="toggleFullScreen"
        :addItem="addItem"
        :applyFilter="applyFilter"
        :closeDialog="closeDialog"
      />
      <WGOExpandableListHeaderMobile
        v-if="!!isMobile()"
        :title="title"
        :propsEditor="propsEditor"
        :options="options"
        :items="items"
        :filter="filter"
        :toggleFullScreen="toggleFullScreen"
        :addItem="addItem"
        :applyFilter="applyFilter"
        :closeDialog="closeDialog"
      />
    </div>
    <div class="row justify-end">
      <slot name="headerButtons"> </slot>
    </div>
  </q-card-section>
</template>

<script lang="ts" src="./WGOExpandableListHeader.js" />
