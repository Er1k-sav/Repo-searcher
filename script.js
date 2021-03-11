window.onload = () => {
    const helpBt = document.querySelector("#help");
    const info = document.querySelector("#info");
    const homePage = document.querySelector("#homePage");
    const app = document.querySelector("#app");
    const startBT = document.querySelector("#startBT");
    const searchInput = document.querySelector("#searchInput");
    const visualieBT = document.querySelector("#visualizeBT");
    const suggestions = document.querySelector(".suggestions");
    const source = document.querySelector("#source");
    const ballTitle = document.querySelector("#ballTitle");
    const arrow = document.querySelector("#arrowContainer");
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
            title.id = "linkTitle";
            title.innerHTML = "Er1k-sav/ArraySorting";

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
            let n1top = parseInt(style.top) - 70 + "px";
            let n1Left = parseInt(style.left) + 1 + "px";
            let n2top = parseInt(style.top) - 40 + "px";
            let n2left = parseInt(style.left) - 68 + "px";
            let n3top = parseInt(style.top) - 40 + "px";
            let n3left = parseInt(style.left) + 68 + "px";
            let n4top = parseInt(style.top) + 40 + "px";
            let n4left = parseInt(style.left) - 68 + "px";
            let n5top = parseInt(style.top) + 40 + "px"; 
            let n5left = parseInt(style.left) + 68 + "px";
            let n6top = parseInt(style.top) + 70 + "px";
            let n6left = parseInt(style.left) + 1 + "px";
            if (id === 1) {
                node1.style.top = n1top;
                node1.style.left = n1Left;
            } else if (id === 2) {
                node1.style.top = n1top;
                node1.style.left = n1Left;
                node2.style.top = n2top;
                node2.style.left = n2left;
            } else if (id === 3) {
                node1.style.top = n1top;
                node1.style.left = n1Left;
                node2.style.top = n2top;
                node2.style.left = n2left;
                node3.style.top = n3top;
                node3.style.left = n3left;
            } else if (id === 4) {
                node1.style.top = n1top;
                node1.style.left = n1Left;
                node2.style.top = n2top;
                node2.style.left = n2left;
                node3.style.top = n3top;
                node3.style.left = n3left;
                node4.style.left = n4left;
                node4.style.top = n4top; 
                id = 5;
            } else if (id === 5) {
                node1.style.top = n1top;
                node1.style.left = n1Left;
                node2.style.top = n2top;
                node2.style.left = n2left;
                node3.style.top = n3top;
                node3.style.left = n3left;
                node4.style.left = n4left;
                node4.style.top = n4top; 
                node5.style.left = n5left;
                node5.style.top = n5top; 
                node6.style.top = n6top;
                node6.style.left = n6left;
            }
        }
    }

    var visualize = () => {
        visualieBT.addEventListener("click", () => {
            let value = searchInput.value.toLowerCase();
            criterion = value;
            ballTitle.innerHTML = criterion;
            tree(source);
            source.style.opacity = 1;
            setTimeout(() => {arrow.style.opacity = 1}, 1500)
        })
    }
    visualize();
    startVisualization();
}vv
