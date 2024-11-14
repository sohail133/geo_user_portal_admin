import React from "react";
import EmptyTablePlaceholder from "../EmptyTablePlaceholder/EmptyTablePlaceholder";

const Table = ({ headlines, rows }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headlines.map((head, index) => (
              <th key={index} className="table-head">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length ? (
            rows.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.email ?? "-"}</td>
                <td>{item.city?.name ?? "-"}</td>
                <td>{item.country?.name ?? "-"}</td>
                <td>{item.continent?.name ?? "-"}</td>
                <td>{item.state?.name ?? "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>{<EmptyTablePlaceholder rows={rows} />}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
