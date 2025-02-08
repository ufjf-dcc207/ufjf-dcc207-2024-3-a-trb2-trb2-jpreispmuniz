import React from "react";
import "./Table.css";

type HeaderItem = {
  label: string;
  prop: keyof DataItem;
};

type DataItem = Record<string, any>;

type TableProps = {
  header: HeaderItem[];
  dados: DataItem[];
  handleDoubleClick?: (item: DataItem) => void;
  titulo?: string;
};

const Table: React.FC<TableProps> = ({
  header,
  dados,
  handleDoubleClick,
  titulo,
}) => {
  return (
    <div className="table-container">
      {titulo && <h2>{titulo}</h2>}
      <table>
        <thead>
          <tr>
            {header.map((headerItem, index) => (
              <th key={index}>{headerItem.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.length > 0 ? (
            dados.map((item, index) => (
              <tr key={index} onDoubleClick={() => handleDoubleClick?.(item)}>
                {header.map((headerItem, index) => (
                  <td key={index}>{item[headerItem.prop]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={header.length} style={{ textAlign: "center" }}>
                Nenhum registro encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
