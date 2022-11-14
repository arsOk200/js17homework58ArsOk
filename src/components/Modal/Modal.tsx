import React, {PropsWithChildren} from 'react';
import Backdrop from "../Backdrop/Backdrop";

interface Props extends PropsWithChildren {
  show:boolean;
  title:string;
  close:React.MouseEventHandler;
}

const Modal:React.FC<Props> = ({show,title,close, children}) => {
  return (
    <>
      <Backdrop show={show} onClick={close}/>
      <div className="modal show" style={{display: show ? 'block': 'none'}} onClick={close}>
        <div className="modal-dialog">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header  flex-row-reverse">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
              <h1 className="modal-title fs-5">
                {title}
              </h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;