window.onload = () => {
    const helpBt = document.querySelector("#help");
    const info = document.querySelector("#info");
    const homePage = document.querySelector("#homePage");
    const app = document.querySelector("#app");
    const startBT = document.querySelector("#startBT");
    const searchInput = document.querySelector("#searchInput");
    const suggestions = document.querySelector(".suggestions");
    var criterion = "";
    var nodesNum = 6;
    var linksNum = 0;
    var searchData = [
        "-Express, a very powerfull js ",
        "-Nodejs",
        "-MongoDB",
        "-React",
        "-Elixir"
    ];
    var results = [];
    searchInput.addEventListener("input", (e) => {
        let input = searchInput.value;
        if (input.length) {
          results = searchData.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
          });
        }
        setSuggestions(results);
    })

    var setSuggestions = () => {
        const content = results
            .map((item) => {
                return `<li>${item}</li>`;
            })
        .join('');
        suggestions.innerHTML = `<ul>${content}</ul>`;
    }

    
    helpBt.addEventListener("click", () => {
        info.style.opacity = 1;
    })

    var startVisualization = () => {
        startBT.addEventListener("click", () => {
            homePage.style.opacity = 0;
            homePage.style.zIndex = -5;
            app.style.opacity = 1;
            helpBt.style.right = 5 + "%";
            info.style.right = 5 + "%";
        })
    }
 
    var tree = (origin) => {
        var id = 0;
        for (let i = 0; i < nodesNum; i++) {
            id = i;
            let viewArea = document.querySelector("#visualizationArea");
            var source = origin;
            let node = document.createElement("div");
            let circle = document.createElement("div");
            let title = document.createElement("a");
            
            node.id = "node" + id;
            node.className = "nodeClass";
            circle.id = "circle";
            title.id = "ballTitle";
            title.innerHTML = "Er1-sav/arraySorting"

            viewArea.appendChild(node);
            node.appendChild(circle);
            node.appendChild(title);

            const node1 = document.querySelector("#node0");
            const node2 = document.querySelector("#node1");
            const node3 = document.querySelector("#node2");
            const node4 = document.querySelector("#node3");
            const node5 = document.querySelector("#node4");
            const node6 = document.querySelector("#node5");
            const style = getComputedStyle(source);
            if (id === 1) {
                node1.style.top = parseInt(style.top) - 70 + "px";
                node1.style.left = parseInt(style.left) + "px";
            } else if (id === 2) {
                node1.style.top = parseInt(style.top) - 70 + "px";
                node1.style.left = parseInt(style.left) + "px";
                node2.style.top = parseInt(style.top) - 40 + "px";
                node2.style.left = parseInt(style.left) - 68 + "px";
            } else if (id === 3) {
                node1.style.top = parseInt(style.top) - 70 + "px";
                node1.style.left = parseInt(style.left) + "px";
                node2.style.top = parseInt(style.top) - 40 + "px";
                node2.style.left = parseInt(style.left) - 68 + "px";
                node3.style.top = parseInt(style.top) - 40 + "px";
                node3.style.left = parseInt(style.left) + 68 + "px";
            } else if (id === 4) {
                node1.style.top = parseInt(style.top) - 70 + "px";
                node1.style.left = parseInt(style.left) + "px";
                node2.style.top = parseInt(style.top) - 40 + "px";
                node2.style.left = parseInt(style.left) - 68 + "px";
                node3.style.top = parseInt(style.top) - 40 + "px";
                node3.style.left = parseInt(style.left) + 68 + "px";
                node4.style.left = parseInt(style.left) - 68 + "px";
                node4.style.top = parseInt(style.top) + 40 + "px"; 
                id = 5;
            } else if (id === 5) {
                console.log("LOL")
                node1.style.top = parseInt(style.top) - 70 + "px";
                node1.style.left = parseInt(style.left) + "px";
                node2.style.top = parseInt(style.top) - 40 + "px";
                node2.style.left = parseInt(style.left) - 68 + "px";
                node3.style.top = parseInt(style.top) - 40 + "px";
                node3.style.left = parseInt(style.left) + 68 + "px";
                node4.style.left = parseInt(style.left) - 68 + "px";
                node4.style.top = parseInt(style.top) + 40 + "px"; 
                node5.style.left = parseInt(style.left) + 68 + "px";
                node5.style.top = parseInt(style.top) + 40 + "px"; 
                node6.style.top = parseInt(style.top) + 70 + "px";
                node6.style.left = parseInt(style.left) + "px";
            }
        }
    }
    tree(document.querySelector("#source"));

    startVisualization();
}
