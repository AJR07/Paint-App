function getInput(input) {
    if (input == 'Colour') {
        colour = document.getElementById(inputValues[0]).value;
    } else if (input == 'Thickness') {
        thickness = document.getElementById(inputValues[1]).value;
    } else if (input == 'ResetCanvas') {
        drawn = [];
        fill(255);
        rect(width / 2, height / 2, width, height);
    } else if (input == 'Tool') {
        tool = document.getElementById(inputValues[2]).value;
        changeTool();
    } else if (input == 'Opacity') {
        opacity = document.getElementById(inputValues[3]).value;
    } else if (input == 'Download') {
        saveCanvas(canvas1, "Image", "png")
    } else if (input == 'RandomColour') {
        RandomColour();
    } else if (input == 'Save') {
        Save();
    } else if (input == 'Load') {
        var result = prompt('Are you sure you want to load the previous sketch? Changes in this current one might be lost!(enter "yes" if u are sure)');
        if (result == 'yes') {
            retrieve();
        }
    }
}