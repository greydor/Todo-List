import formHandler from "./formHandler";
import { renderTaskList } from "./renderTask";
import { renderProjects, hideProjects } from "./renderProjects";
import newProjectHandler from "./newProjectHandler";

import './css/reset.css';
import './css/styles.css';

renderTaskList();
formHandler();
hideProjects();
renderProjects();
newProjectHandler();
