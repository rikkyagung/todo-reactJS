import React from "react";
import PropTypes from "prop-types";

const TabContent = ({ id, activeTab, children }) => {
   return activeTab === id ? (
      <div className="text-[.95rem]">{children}</div>
   ) : null;
};

TabContent.propTypes = {
   id: PropTypes.oneOf(["all", "ongoing", "completed"]).isRequired,
};

export default TabContent;
