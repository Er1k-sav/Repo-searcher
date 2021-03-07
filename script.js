window.onload = () => {
    const helpBt = document.querySelector("#help");
    const info = document.querySelector("#info");
    const homePage = document.querySelector("#homePage");
    const app = document.querySelector("#app");
    const startBT = document.querySelector("#startBT");
    var criterion = "";
    var nodesNum = 5;
    var linksNum = 0;
    
    helpBt.addEventListener("click", () => {
        info.style.opacity = 1;
    })

    var startVisualization = () => {
        startBT.addEventListener("click", () => {
            homePage.style.opacity = 0;
            app.style.opacity = 0;
        })
    }

    var tree = (origin) => {
        for (let i = 0; i < nodesNum; i++) {
            let viewArea = document.querySelector("#visualizationArea");
            let source = origin;
            let node = document.createElement("div");
            let circle = document.createElement("div");
            let title = document.createElement("div");
            var leftMax = 45;
            var leftMin = 42;
            var topMax = 61;
            var topMin = 38;
            
            node.id = "node";
            circle.id = "circle";
            title.id = "ballTitle";
            title.innerHTML = "Er1-sav/arraySorting"

            viewArea.appendChild(node);
            node.appendChild(circle);
            node.appendChild(title);
            node.style.bottom = source.style.top + 10 + "%";
        }
    }
    tree(document.querySelector("#source"));

    startVisualization();
}
