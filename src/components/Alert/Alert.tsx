import React, {PropsWithChildren} from 'react';
interface Props extends PropsWithChildren {
  type:string;
  showAlert:boolean;
  onDismiss? :React.MouseEventHandler;
}

const Alert:React.FC<Props> = ({type,onDismiss,showAlert,  children}) => {
  if (type === 'warning' || type === 'danger') {
    return (
      <>
        <div className={"alert alert-" + type+ ' justify-content-between'} style={{display: showAlert ? 'flex': 'none'}} role='alert'>
          {children}
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onDismiss}></button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={"alert alert-" + type} style={{display: showAlert ? 'block': 'none'}} role="alert" onClick={onDismiss}>
        {children}
      </div>
    </>
  );
};

export default Alert;