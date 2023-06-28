import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () =>{
        setShowModal(false);
    }

    const actionBar = <div><Button onClick={handleClose} primary>I Accept</Button></div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept.
        </p>
    </Modal>

    return (<div clasName="relative">
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit est justo, at commodo lectus dictum non. Sed aliquet ligula elit, vel pellentesque nibh tristique sed. Nullam iaculis scelerisque tellus ac posuere. Vivamus eu sem commodo mauris eleifend ornare sed sed leo. Nunc quam lectus, fermentum ut eleifend et, finibus eget elit. Morbi vitae tempor purus. Etiam dignissim sed quam id iaculis. Suspendisse tristique tristique orci, in consequat quam maximus in. Mauris nec dictum justo, et porta ante. Pellentesque facilisis luctus ornare. Ut condimentum nulla quis sem porta, id ultrices est tincidunt. Etiam convallis gravida odio sit amet tincidunt. Suspendisse facilisis nunc turpis, quis iaculis ipsum tempor et. Donec neque augue, feugiat at sollicitudin quis, convallis non ipsum. Duis cursus, ex eget placerat hendrerit, sapien massa ornare massa, ac varius libero diam elementum sapien. Praesent euismod quam vulputate vehicula aliquam.
        </p>
        </div>)
}

export default ModalPage;