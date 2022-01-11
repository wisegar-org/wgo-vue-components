"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WGOExpandableListExportClipboard = exports.WGOExpandableListExportCSV = exports.WGOExpandableListExportExcel = void 0;
const tslib_1 = require("tslib");
const exceljs_1 = (0, tslib_1.__importDefault)(require("exceljs"));
const file_saver_1 = require("file-saver");
const WGOExpandableListExportExcel = (itemList, columns) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const filterColumns = columns.filter((prop) => prop.required || prop.visible);
    const fileName = "export.xlsx";
    const workbook = new exceljs_1.default.Workbook();
    const sheet = workbook.addWorksheet("Table");
    const worksheet = workbook.getWorksheet(1);
    worksheet.addRow(filterColumns.map((c) => {
        return c.label;
    }));
    itemList.map((d) => {
        worksheet.addRow(filterColumns
            .filter((prop) => prop.required || prop.visible)
            .map((c) => {
            if (c.value)
                return c.value(d);
            return d[c.prop];
        }));
    });
    const buf = yield workbook.xlsx.writeBuffer();
    (0, file_saver_1.saveAs)(new Blob([buf]), fileName);
});
exports.WGOExpandableListExportExcel = WGOExpandableListExportExcel;
const WGOExpandableListExportCSV = (itemList, columns) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const fileName = "export.csv";
    const filterColumns = columns.filter((prop) => prop.required || prop.visible);
    let content = filterColumns
        .map((c) => {
        return c.label;
    })
        .join(",") + ",\n";
    itemList.map((d) => {
        content +=
            filterColumns
                .map((c) => {
                if (c.value)
                    return c.value(d);
                return d[c.prop];
            })
                .join(",") + ",\n";
    });
    (0, file_saver_1.saveAs)(new Blob([content]), fileName);
});
exports.WGOExpandableListExportCSV = WGOExpandableListExportCSV;
const WGOExpandableListExportClipboard = (itemList, columns) => {
    const filterColumns = columns.filter((prop) => prop.required || prop.visible);
    let content = filterColumns
        .map((c) => {
        return c.label;
    })
        .join(";") + "\n";
    itemList.map((d) => {
        content +=
            filterColumns
                .map((c) => {
                if (c.value)
                    return c.value(d);
                return d[c.prop];
            })
                .join(";") + "\n";
    });
    return content;
};
exports.WGOExpandableListExportClipboard = WGOExpandableListExportClipboard;
