import { WGOListItem, WGOPropToEdit } from "./models";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const WGOExpandableListExportExcel = async (
  itemList: WGOListItem[],
  columns: WGOPropToEdit[]
) => {
  const filterColumns = columns.filter((prop) => prop.required || prop.visible);
  const fileName = "export.xlsx";
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Table");
  const worksheet = workbook.getWorksheet(1);
  worksheet.addRow(
    filterColumns.map((c: WGOPropToEdit) => {
      return c.label;
    })
  );

  itemList.map((d: WGOListItem) => {
    worksheet.addRow(
      filterColumns
        .filter((prop) => prop.required || prop.visible)
        .map((c: WGOPropToEdit) => {
          if (c.value) return c.value(d);
          return d[c.prop];
        })
    );
  });

  const buf = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buf]), fileName);
};

export const WGOExpandableListExportCSV = async (
  itemList: WGOListItem[],
  columns: WGOPropToEdit[]
) => {
  const fileName = "export.csv";
  const filterColumns = columns.filter((prop) => prop.required || prop.visible);
  let content =
    filterColumns
      .map((c: WGOPropToEdit) => {
        return c.label;
      })
      .join(",") + ",\n";

  itemList.map((d: WGOListItem) => {
    content +=
      filterColumns
        .map((c: WGOPropToEdit) => {
          if (c.value) return c.value(d);
          return d[c.prop];
        })
        .join(",") + ",\n";
  });

  saveAs(new Blob([content]), fileName);
};

export const WGOExpandableListExportClipboard = (
  itemList: WGOListItem[],
  columns: WGOPropToEdit[]
) => {
  const filterColumns = columns.filter((prop) => prop.required || prop.visible);
  let content =
    filterColumns
      .map((c: WGOPropToEdit) => {
        return c.label;
      })
      .join(";") + "\n";

  itemList.map((d: WGOListItem) => {
    content +=
      filterColumns
        .map((c: WGOPropToEdit) => {
          if (c.value) return c.value(d);
          return d[c.prop];
        })
        .join(";") + "\n";
  });

  return content;
};
