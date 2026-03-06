import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Modal({ title, children, onClose }) {
    // we can bring reusablity with this variable declaration, but we can also use
    // variants in place where we use this viarble
    // const hiddenAnimationState = { opacity: 0, y: 30 };
    return createPortal(
        <>
            <motion.div
                className="backdrop"
                onClick={onClose}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
            />
            <motion.dialog
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                // initial={hiddenAnimationState}
                initial="hidden"
                // animate={{ opacity: 1, y: 0 }}
                animate="visible"
                // exit={hiddenAnimationState}
                exit="hidden"
                open
                className="modal"
            >
                <h2>{title}</h2>
                {children}
            </motion.dialog>
        </>,
        document.getElementById("modal"),
    );
}
