import { expandCollapse } from 'libs/fuse-lib/src/lib/animations/expand-collapse';
import { fadeIn, fadeInBottom, fadeInLeft, fadeInRight, fadeInTop, fadeOut, fadeOutBottom, fadeOutLeft, fadeOutRight, fadeOutTop } from 'libs/fuse-lib/src/lib/animations/fade';
import { shake } from 'libs/fuse-lib/src/lib/animations/shake';
import { slideInBottom, slideInLeft, slideInRight, slideInTop, slideOutBottom, slideOutLeft, slideOutRight, slideOutTop } from 'libs/fuse-lib/src/lib/animations/slide';
import { zoomIn, zoomOut } from 'libs/fuse-lib/src/lib/animations/zoom';

export const fuseAnimations = [
    expandCollapse,
    fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight,
    fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight,
    shake,
    slideInTop, slideInBottom, slideInLeft, slideInRight,
    slideOutTop, slideOutBottom, slideOutLeft, slideOutRight,
    zoomIn, zoomOut
];
