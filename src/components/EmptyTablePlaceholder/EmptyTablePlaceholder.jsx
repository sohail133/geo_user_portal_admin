import React from "react";
import Empty from "../../assets/images/table/noData.svg";

const EmptyTablePlaceholder = ({ rows }) => {
  if (!rows.length) {
    return (
      <div className="no-data-container">
        <img src={Empty} width={600} height={400} alt={"no data"} />
        <p>Sorry No Data Found</p>
      </div>
    );
  }
};
export default EmptyTablePlaceholder;
