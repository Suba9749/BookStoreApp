import express from "express";

import { getBook } from "../controller/bookConstroller.js";

const router=express.Router();

router.get("/",getBook);

export default router;