import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styles from './Object1.module.scss'
export function Object1(){
  const {attributes, listeners, setNodeRef, transform} = useDraggable({id: 'box'});

  const style = { transform: CSS.Translate.toString(transform) };
  return(
    <div ref={setNodeRef} 
    {...listeners} 
    {...attributes}  
    className={styles.Object1}
    style={style}
    >
      <p>ssss</p>
    </div>
  )
}