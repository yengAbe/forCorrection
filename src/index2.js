import "./styles.css";
import { fabric } from "fabric";

fabric.Object.NUM_FRACTION_DIGITS = 8;
var canvas = new fabric.Canvas("cnvs", {
  preserveObjectStacking: true
});
canvas.imageSmoothingQuality = "high";
canvas.setHeight(400);
canvas.setWidth(400);
canvas.renderAll();
