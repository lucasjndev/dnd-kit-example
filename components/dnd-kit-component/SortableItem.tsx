import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import styles from '../../styles/dnd.module.css'

export function SortableItem(props:any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id  });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition, 
  };
  
  return (
    <div className={styles.componentItem} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <button className={styles.cardItem} {...listeners} {...arguments}>{props.id}</button>
    </div>
  );
}