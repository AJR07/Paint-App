function draw() {
    loadChanges();
    strokeWeight(20);
    canvasBorder(255);
    reloadDrawn();
    if (tool == "Pen") {
        Pen();
    } else if (tool == "Eraser") {
        Eraser();
    } else if (tool == "Line Drawer") {
        LineDrawer();
    } else if (tool == "Highlighter") {
        Highlighter();
    } else if (tool == "Rect Drawer") {
        rectDrawer();
    }
}