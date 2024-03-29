<template>
  <div class="q-pa-none fit" style="min-width: 100%">
    <div ref="placeholderExpList" style="height: 1px"></div>
    <q-card
      ref="viewCard"
      :bordered="!!options.bordered"
      :flat="!!options.bordered"
      :style="`width: 100%; height: ${cardHeight}px;`"
    >
      <WGOExpandableListHeader
        :title="title"
        :items="allItems && allItems.length > 0 ? allItems : items"
        :options="options"
        :propsEditor="propsEditor"
        :addItem="(itemForm) => addItem(itemForm, closeDialog)"
        :filter="filter"
        :applyFilter="applyFilter"
        :toggleFullScreen="toggleFullScreen"
        :closeDialog="closeDialog"
      >
        <template slot="addButton">
          <slot name="addButton"></slot>
        </template>
        <template slot="headerButtons">
          <slot name="headerButtons"></slot>
        </template>
        <template slot="headerList">
          <div ref="headerList">
            <WGOListItemTitle
              :icon="icon"
              :labels="getTitleLabels()"
              :maxLabels="options.maxLabels"
              :maxLines="options.maxLines"
            >
              <template slot="buttons">
                <div v-if="!options.expandedButtons">
                  <q-btn flat dense unelevated color="transparent" icon="-" />
                  <q-btn flat dense unelevated color="transparent" icon="-" />
                </div>
                <template
                  v-else
                  v-for="(btn, indexBtn) in options.expandedButtons || []"
                >
                  <q-btn
                    :key="`${id_button}-expanded-index-${indexBtn}`"
                    flat
                    dense
                    color="transparent"
                    :icon="btn.icon"
                  >
                    <q-tooltip v-if="!!btn.tooltip">{{
                      btn.tooltip
                    }}</q-tooltip>
                  </q-btn>
                </template>
              </template>
            </WGOListItemTitle>
          </div>
        </template>
      </WGOExpandableListHeader>
      <div ref="placeholderExpList2" style="height: 1px"></div>
      <div ref="filterLabel">
        <slot name="filterLabel">
          <WGOExpandableListFilterLabel
            :filterStr="filterStr"
            :propsEditor="propsEditor"
            :filter="filter"
            :cleanFilter="() => (filter = {})"
            :openFilter="openFilter"
          />
        </slot>
      </div>
      <q-card-section class="q-py-sm" v-if="!!filterItems.length">
        <q-scroll-area :style="`height: ${listHeight}px; width: '100%';`">
          <q-list>
            <template v-for="(item, index) in filterItems">
              <WGOListItem
                :icon="icon"
                :key="`item${item.id || item}-index${index}`"
                :labels="getLabels(item)"
                group="items"
                :maxLabels="options.maxLabels"
                :maxLines="options.maxLines"
              >
                <template slot="buttons">
                  <div v-if="!options.expandedButtons">
                    <q-btn
                      flat
                      dense
                      unelevated
                      color="primary"
                      icon="content_copy"
                      @click="() => addItem(item, closeDialog)"
                    />
                    <q-btn
                      flat
                      dense
                      unelevated
                      color="primary"
                      icon="delete"
                      @click="() => deleteItem(item, index)"
                    />
                  </div>
                  <template
                    v-else
                    v-for="(btn, indexBtn) in options.expandedButtons || []"
                  >
                    <q-btn
                      :key="`${id_button}-expanded-index-${indexBtn}`"
                      flat
                      dense
                      color="primary"
                      :disabled="btn.disabled ? btn.disabled(item) : false"
                      @click="() => btn.click(item, index)"
                      :icon="btn.icon"
                    >
                      <q-tooltip v-if="!!btn.tooltip">{{
                        btn.tooltip
                      }}</q-tooltip>
                    </q-btn>
                  </template>
                </template>
              </WGOListItem>
            </template>
          </q-list>
        </q-scroll-area>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <div ref="pagination">
          <slot name="pagination">
            <div ref="placeholderExpList3" style="height: 1px"></div>
          </slot>
        </div>
      </q-card-section>
    </q-card>
    <WGOExpandableListEditorDialog
      :icon="icon"
      :title="options.labelAddDialog"
      :styleDialog="options.editorStyle"
      :open="openDialog"
      :close="() => (openDialog = false)"
      :item="selectedItem"
      :propsEditor="propsEditor"
      :onSaveItem="(itemForm) => options.onAddItem(itemForm, closeDialog)"
    />
    <Loader :loading="loading" />
  </div>
</template>

<script lang="ts" src="./WGOList.js" />
