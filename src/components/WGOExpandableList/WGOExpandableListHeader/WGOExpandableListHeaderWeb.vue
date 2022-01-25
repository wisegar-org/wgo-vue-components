<template>
  <div class="flex col justify-end">
    <template v-for="(btn, index) in options.headerButtons || []">
      <q-btn
        :key="`${id_button}-index-${index}`"
        flat
        dense
        color="primary"
        @click="btn.click"
        :icon="btn.icon"
      >
        <q-tooltip v-if="!!btn.tooltip">{{ btn.tooltip }}</q-tooltip>
      </q-btn>
    </template>
    <WGOExpandableListFilterButton
      v-if="!options.disableFilters"
      :filter="filter"
      :propsEditor="propsEditor"
      :applyFilter="applyFilter"
      :title="options.labelFilterDialog"
      :tooltip="options.labelFiltersButton"
      ref="filter"
    />
    <WGOExpandableListExportClipboardButton
      v-if="!options.disableExportClipboard"
      :items="items"
      :propsEditor="propsEditor"
      :tooltip="options.labelExportClipboardButton"
      :msg="options.textExportClipboardMsg"
    />
    <WGOExpandableListExportExcelButton
      v-if="!options.disableExportExcel"
      :items="items"
      :propsEditor="propsEditor"
      :tooltip="options.labelExportExcelButton"
    />
    <WGOExpandableListExportCSVButton
      v-if="!options.disableExportCSV"
      :items="items"
      :propsEditor="propsEditor"
      :tooltip="options.labelExportCSVButton"
    />
    <WGOExpandableListSelectColumnsButtton
      v-if="!options.disableSelectColumns"
      :propsEditor="propsEditor"
      :tooltip="options.labelSelectColumnsButton"
    />
    <q-btn
      v-if="!options.disableFullscreen"
      flat
      dense
      color="primary"
      @click="toggleFullScreen"
      :icon="
        $q && $q.fullscreen && $q.fullscreen.isActive
          ? 'fullscreen_exit'
          : 'fullscreen'
      "
      ><q-tooltip>{{
        options.labelFullscreenButton
          ? options.labelFullscreenButton
          : "Visualizza tabella a schermo intero"
      }}</q-tooltip></q-btn
    >
  </div>
</template>

<script lang="ts" src="./WGOExpandableListHeaderWeb.js" />
