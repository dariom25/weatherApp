import Model from "./model/model";
import Controller from "./controller/controller";
import View from "./view/view";
import "./view/assets/root.css";
import "./view/assets/header.css";
import "./view/assets/main-content.css";
import "./view/assets/footer.css";

const controller = new Controller(new Model(), new View());
