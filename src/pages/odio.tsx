import { ResizableBox } from 'react-resizable';

export default function desgraca() {
   return (
      <ResizableBox
      className="custom-box box"
      width={200}
      height={200}
      handleSize={[8, 8]}
      resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      style={{background: "red"}}
      >
         <span>aaaa</span>
      </ResizableBox>
   )
}
