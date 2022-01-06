<template>
  <Dialog :options="options">
    <template>
      <div class="col-12">
        <WGOExpandableListFilter
          :propsEditor="propsEditor"
          :applyFilter="applyFilter"
          :filter="filter"
          :close="close"
        />
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts" src="./WGOExpandableListFilterDialog.ts" />
