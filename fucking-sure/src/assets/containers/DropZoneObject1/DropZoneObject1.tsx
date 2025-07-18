import { useDroppable } from "@dnd-kit/core";
import styles from './DropZoneObject1.module.scss'
export function DropZoneObject1({ id, children }) {
	const { setNodeRef } = useDroppable({ id });

	return (
		<div ref={setNodeRef} className={styles.DropZoneObject1}>
			{children}
		</div>
	);
}