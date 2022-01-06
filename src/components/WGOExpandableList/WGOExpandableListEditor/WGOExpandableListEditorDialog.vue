<template>
  <Dialog :options="options">
    <template>
      <div class="col-12">
        <WGOExpandableListEditor
          :propsEditor="propsEditor"
          :item="item"
          :onSaveItem="onSaveItem"
          :showClose="true"
          :close="close"
        />
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts" src="./WGOExpandableListEditorDialog.ts" />
