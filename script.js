window.onload = () => {
    const homePage = document.querySelector("#homePage");
    const helpBT = document.querySelector("#help");
    const info = document.querySelector("#info");
    const app = document.querySelector("#app");
    const startBT = document.querySelector("#startBT");
    const searchInput = document.querySelector("#searchInput");
    const visualieBT = document.querySelector("#visualizeBT");
    const redo = document.querySelector("#continue");
    const suggestions = document.querySelector(".suggestions");
    const source = document.querySelector("#source");
    const ballTitle = document.querySelector("#ballTitle");
    const arrow = document.querySelector("#arrowContainer");
    const arrow1 = document.querySelector("#arrow1");
    const arrow2 = document.querySelector("#arrow2");
    const arrow3 = document.querySelector("#arrow3");
    const arrow4 = document.querySelector("#arrow4");
    const arrow5 = document.querySelector("#arrow5");
    const arrow6 = document.querySelector("#arrow6");
    const numOfNodesInput = document.querySelector("#numOfNodes");
    const slider = document.querySelector("#slider");
    const popup = document.querySelector("#hint");
    var theme = false;
    var criterion = "";
    var names = [];
    var pfps = [];
    var descriptions = [];
    var urls = [];
    var nodesNum = 6;
    var linksNum = 0;
    var inAction = false;
    var searchData = [
        "-Vue.js, is a JavaScript library for developing web interfaces",
        "-Npm, is also known as Node Package Manager",
        "-React, is an open-source front-end library 2013",
        "-Angular, is an open-source technology",
        "-Flutter, an open-source UI development kit",
        "-Ruby on Rails, is backend technology that facilitates app development",
        "-Django, is a highly customizable and scalable backend technology",
        "-Phoenix, works with Erlang’s Virtual Machine",
        "-Express framework includes great routing API"
    ];
    var results = [];

    slider.addEventListener("click", () => {
        if (theme === false) {
            document.body.style.backgroundColor = "var(--clr-light)";
            document.querySelector(".suggestions").style.color = "#fff"; 
            document.querySelector("#numInfo").style.color = "#fff";
            document.querySelector("#visualizationArea").style.color = "#fff";
            document.querySelector("#startBT").style.backgroundColor = "grey";
            document.querySelector("#startBT").style.border = "4px solid darkslategrey"
            document.querySelector("#startBT").style.borderBottom = "12px solid darkslategrey";
            slider.style.left = "54%";
            theme = true;
        } else {
            document.body.style.backgroundColor = "var(--clr-primary)"
            document.querySelector(".suggestions").style.color = "#fff"; 
            document.querySelector("#numInfo").style.color = "rgb(73, 66, 66)";
            document.querySelector("#visualizationArea").style.color = "rgb(104, 94, 94)";
            document.querySelector("#startBT").style.backgroundColor = "rgba(8, 11, 15, 0.5)";
            document.querySelector("#startBT").style.border = "4px solid rgb(8, 11, 15)"
            document.querySelector("#startBT").style.borderBottom = "12px solid rgb(8, 11, 15)s";
            slider.style.left = "-14%"
            theme = false;
        }
    })
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

    var startVisualization = () => {
        startBT.addEventListener("click", () => {
            homePage.style.opacity = 0;
            homePage.style.zIndex = -5;
            app.style.opacity = 1;
            helpBT.style.right = 1.9 + "%";
            info.style.left = 75 + "%";
            document.querySelector("#container").style.left = "94%";
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
            let box = document.createElement("div");
            let pfp = document.createElement("div");
            let name = document.createElement("div");
            let description = document.createElement("div");
            
            node.id = "node" + id;
            node.className = "nodeClass";
            circle.id = "circle";
            title.id = "linkTitle";
            title.innerHTML = names[i];
            title.href = urls[i].replace(/['"]+/g, '');
            title.target = "_blank";
            box.className = "classBox";
            box.id = "box" 
            pfp.id = "pfp";
            name.id = "name";
            name.innerHTML = names[i];
            pfp.style.backgroundImage = "url(" + pfps[i] + ")";
            
            description.id = "description";
            description.innerHTML = descriptions[i];

            viewArea.appendChild(node);
            node.appendChild(circle);
            node.appendChild(title);
            box.appendChild(pfp);
            box.appendChild(name);
            box.appendChild(description);
            node.appendChild(box);
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
            let nodeInstance = document.querySelector("#node" + i);
            nodeInstance.style.top = n1top; nodeInstance.style.left = n1Left;
            arrow1.style.opacity = 1;
            if (id === 1) {
                nodeInstance.style.top = n2top; nodeInstance.style.left = n2left;
                nodeInstance.style.opacity = 1;
                arrow2.style.opacity = 1;
            } else if (id === 2) {
                nodeInstance.style.top = n3top; nodeInstance.style.left = n3left;
                nodeInstance.style.opacity = 1;
                arrow3.style.opacity = 1;
            } else if (id === 3) {
                nodeInstance.style.top = n4top; nodeInstance.style.left = n4left;
                nodeInstance.style.opacity = 1;
                arrow4.style.opacity = 1;
            } else if (id === 4) {
                nodeInstance.style.top = n5top; nodeInstance.style.left = n5left;
                nodeInstance.style.opacity = 1;
                arrow5.style.opacity = 1;
            } else if (id === 5) {
                nodeInstance.style.top = n6top; nodeInstance.style.left = n6left;
                nodeInstance.style.opacity = 1;
                arrow6.style.opacity = 1;
            }
        }
    }

    var setNodes = () => {
        let items = document.querySelector("")
    }

    var getNumOfNodes = () => {
        numOfNodesInput.addEventListener("input", () => {
            let value = numOfNodesInput.value.toLowerCase();
            nodesNum = value;
        })
    }
    var n = 0;
    var main = document.querySelector("#visualizationArea");
    var getCheckValue = () => {
        let container = document.querySelectorAll(".nodeClass");
        for (let elem of container) {
            if (elem.className === "nodeClass") {
                n++;
                console.log(n)
            }
        }
        main.style.opacity = 0;
        check();
    }

    var check = () => {
        let loading = document.querySelector("#loadingText");
        let success = document.querySelector("#successfullLoading");
        let unsuccess = document.querySelector("#unsuccessfullLoading");
        loading.style.opacity = 1;
        console.log(n)
        if (n == nodesNum) {
            setTimeout(() => {loading.style.opacity = 0}, 1000);
            setTimeout(() => {success.style.opacity = 1}, 1300);
            setTimeout(() => {success.style.opacity = 0}, 3300);
            setTimeout(() => {main.style.opacity = 1}, 3400);
            inAction = true;
            setTimeout(() => {popupF()}, 10000);
            setTimeout(() => {popup.style.left = "-90%"}, 20000)
        } else {
            setTimeout(() => {loading.style.opacity = 0}, 1000);
            setTimeout(() => {unsuccess.style.opacity = 1; redo.style.opacity = 1}, 1300);
            
        }
    }

    var popupF = () => {
        if (inAction === true) {
            popup.style.opacity = 1;
        }
    }

    var visualize = () => {
        visualieBT.addEventListener("click", () => {
            let value = searchInput.value.toLowerCase();
            criterion = value;
            ballTitle.innerHTML = criterion;
            setTimeout(() => {getCheckValue()}, 3500);
            setTimeout(() => {tree(source)}, 2500);
            source.style.opacity = 1;
            fetch('https://api.github.com/search/repositories?q=' + criterion) 
                .then(response => response.json())
                .then(data => {
                    for (let n = 0; n < nodesNum; n++) {
                        names.push(JSON.stringify(data.items[Math.floor(Math.random() * data.items.length)].full_name));
                        console.log(JSON.stringify(data.items[Math.floor(Math.random() * data.items.length)].full_name));
                        pfps.push(JSON.stringify(data.items[Math.floor(Math.random() * data.items.length)].owner.avatar_url));
                        descriptions.push(JSON.stringify(data.items[Math.floor(Math.random() * data.items.length)].description));
                        urls.push(JSON.stringify(data.items[Math.floor(Math.random() * data.items.length)].html_url));
                    }
                })
        })
    }
    
    visualize();
    getNumOfNodes();
    startVisualization();
}
