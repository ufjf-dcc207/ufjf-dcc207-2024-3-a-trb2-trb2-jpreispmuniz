import React from "react";
import "./Table.css";

type TableProps = {
  header: { label: string; prop: string }[];
  dados: Record<string, any>[];
  titulo?: string;
};

const Table: React.FC<TableProps> = ({ header, dados, titulo }) => (
  <div className="table-container">
    {titulo && <h2>{titulo}</h2>}
    <table>
      <thead>
        <tr>
          {header.map((item, index) => (
            <th key={index}>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.length ? (
          dados.map((item, index) => (
            <tr key={index}>
              {header.map((col, i) => (
                <td key={i}>{item[col.prop]}</td>
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

export default Table;
