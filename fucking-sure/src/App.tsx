import { DndContext } from "@dnd-kit/core";
import { Object1 } from './assets/containers/Object1 /Object1';
import { useCallback, useState } from "react";
import { DropZoneObject1 } from "./assets/containers/DropZoneObject1/DropZoneObject1";
import './App.css'

function App() {
  type Object ={
    id: string;
    location: string;
    text: string;
  }
  const objectss = [
		{ id: 'box-1', location: 'outside', text: 'בטח' },
		{ id: 'box-2', location: 'outside', text: 'בוודאי' },
		{ id: 'box-3', location: 'outside', text: 'בהחלט' },
		{ id: 'box-4', location: 'outside', text: 'כמובן' },
	];
  const [objects, setObjects] = useState<Object[]>(objectss);

  const handleDragEnd = useCallback((event: any )=> {
    const {active, over} = event;
		if (over?.id === 'trash1') {
			setObjects(
				objects.map(obj =>
					obj.id === active.id ? { ...obj, location: 'trash1' } : obj
				)
			);
		} else if (over?.id === 'outside-zone') {
			setObjects(
				objects.map(obj =>
					obj.id === active.id ? { ...obj, location: 'outside' } : obj
				)
			);
		} else if (over?.id === 'trash2') {
			setObjects(
				objects.map(obj =>
					obj.id === active.id ? { ...obj, location: 'trash2' } : obj
				)
			);
		} else if (over?.id === 'trash3') {
			setObjects(
				objects.map(obj =>
					obj.id === active.id ? { ...obj, location: 'trash3' } : obj
				)
			);
		} else if (over?.id === 'trash4') {
			setObjects(
				objects.map(obj =>
					obj.id === active.id ? { ...obj, location: 'trash4' } : obj
				)
			);
		}
    
	}, [objects]);
  return (
		<div className='Home'>
			<DndContext onDragEnd={handleDragEnd}>
				<div className='answers'>
					<DropZoneObject1 id='outside-zone'>
						{objects
							.filter(obj => obj.location === 'outside')
							.map(obj => (
								<Object1 key={obj.id} id={obj.id}>
									{obj.text}
								</Object1>
							))}
					</DropZoneObject1>
				</div>
				<div className='task'>
					<p>כן</p>
					<DropZoneObject1 id='trash1'>
						{objects
							.filter(obj => obj.location === 'trash1')
							.map(obj => (
								<Object1 key={obj.id} id={obj.id}>
									{obj.text}
								</Object1>
							))}
					</DropZoneObject1>
					<p>מקסים עשיתי את החרא הזה 7 שעות? אני חושב שכן</p>
				</div>

				<div className='task'>
					<p>כן</p>
					<DropZoneObject1 id='trash2'>
						{objects
							.filter(obj => obj.location === 'trash2')
							.map(obj => (
								<Object1 key={obj.id} id={obj.id}>
									{obj.text}
								</Object1>
							))}
					</DropZoneObject1>
					<p>מקסים, אתא היום ישנת? אני חושב ש</p>
				</div>

				<div className='task'>
					<p>כן</p>
					<DropZoneObject1 id='trash3'>
						{objects
							.filter(obj => obj.location === 'trash3')
							.map(obj => (
								<Object1 key={obj.id} id={obj.id}>
									{obj.text}
								</Object1>
							))}
					</DropZoneObject1>
					<p>מקסים אתא חושב שראקט עשו סדיסטים? אני חושב</p>
				</div>

				<div className='task'>
					<p>כן</p>
					<DropZoneObject1 id='trash4'>
						{objects
							.filter(obj => obj.location === 'trash4')
							.map(obj => (
								<Object1 key={obj.id} id={obj.id}>
									{obj.text}
								</Object1>
							))}
					</DropZoneObject1>
					<p>מקסים אתא רוצה לישון? אני עייף</p>
				</div>
				<button onClick={() => setObjects(objectss)}>לחזור</button>
			</DndContext>
		</div>
	);
}

export default App
