import { useDroppable } from "@dnd-kit/core";
import styles from './DropZoneObject1.module.scss'
export function DropZoneObject1({ id, children }: { id: string; children: any }) {
	const { setNodeRef } = useDroppable({ id });

	return (
		<div ref={setNodeRef} className={styles.DropZoneObject1}>
			{children}
		</div>
	);
}