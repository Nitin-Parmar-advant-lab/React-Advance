import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";


type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
    const navigate = useNavigate();
    function closeHandler() {
        navigate("..");
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}>
                <dialog
                    open
                    className={classes.modal}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </dialog>
            </div>
        </>
    );
}
