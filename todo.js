let completedTasks = [];
        let pendingtask = [];
        let compl = [];
        let alltasks = [];
        function add() {
            compl.push(false);
            var mdiv = document.createElement("div");
            var ul1 = document.createElement("ul");
            var li1 = document.createElement("li");
            var v1 = document.getElementById("task").value;
            alltasks.push(v1);
            let cidx = compl.length - 1;
            li1.style.height = "fit-content";
            li1.style.width = "350px";
            li1.style.backgroundColor = "skyblue";
            li1.style.paddingLeft = "28px";
            li1.style.color = "brown";
            li1.textContent = v1;
            ul1.style.display = "flex";
            ul1.style.flexDirection = "row";
            ul1.style.backgroundColor = "skyblue";
            var bt1 = document.createElement("button");
            bt1.textContent = " delete";
            bt1.style.marginLeft = "10px";
            var btn2 = document.createElement("button");
            btn2.textContent = "Complete the task ";
            btn2.style.marginLeft = "10px";
            if (compl[cidx] == false) {
                pendingtask.push(v1);
                updatependingtask();
            }
            btn2.onclick = function () {
                if (!compl[cidx]) {
                    compl[cidx] = true;
                    alert("The task " + v1 + " is started and completed ");
                    completedTasks.push(v1);
                    updateCompletedTasksDisplay();
                    pendingtask = alltasks.filter((_, cidx) => compl[cidx] === false);
                    updatependingtask();
                } else {
                    alert("The task was already completed");
                }
            }
            bt1.onclick = function () {
                li1.remove();
                pendingtask = pendingtask.filter(c => c !== v1);
                completedTasks = completedTasks.filter(c => c !== v1);
                updateCompletedTasksDisplay();
                updatependingtask();
            }
            li1.append(bt1, btn2);
            ul1.appendChild(li1);
            mdiv.appendChild(ul1);
            document.getElementById("tasks").appendChild(mdiv);
            document.getElementById("task").value = "";
        }
        function updatependingtask() {
            const list1 = document.getElementById("pendingList");
            list1.innerHTML = "";
            pendingtask.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task;
                list1.appendChild(li);
            });
        }
        function updateCompletedTasksDisplay() {
            const list = document.getElementById("completedList");
            list.innerHTML = "";
            completedTasks.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task;
                list.appendChild(li);
            });
        }