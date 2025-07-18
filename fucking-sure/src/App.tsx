import { DndContext } from "@dnd-kit/core";
import { Object1 } from "./assets/containers/Object1 /Object1";
import { useCallback, useState } from "react";
import { DropZoneObject1 } from "./assets/containers/DropZoneObject1/DropZoneObject1";

function App() {
  const [location, setLocation] =useState('outside')
  const handleDragEnd = useCallback(event => {
    const {active, over} = event;
		if (over.id === 'trash'){
      setLocation('trash')
    }else{
      setLocation('outside-zone');
    }
	}, []);
  return (
		<DndContext onDragEnd={handleDragEnd}>
			<DropZoneObject1 id='outside-zone'>
				{location === 'outside' && <Object1 />}
			</DropZoneObject1>

			<DropZoneObject1 id='trash'>
				{location === 'trash' && <Object1 />}
			</DropZoneObject1>
		</DndContext>
	);
}

export default App
