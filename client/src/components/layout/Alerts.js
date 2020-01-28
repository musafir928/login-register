import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(a => (
      <div className='container'>
        <div key={a.id} className={` alert alert-${a.type}`}>
          <i className='fa fa-info-circle'></i> {"  "} {a.msg}
        </div>
      </div>
    ))
  );
};

export default Alerts;
