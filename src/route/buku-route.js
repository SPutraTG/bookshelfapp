const router = require("express").Router();
const cBuku = require("../controller/buku.js");

router.get("/test", cBuku.ambilData);
router.post("/test", cBuku.createData);
router.delete("/test/:id", cBuku.dellData); //apabila memakai params tambah (/ dblkgnya)
router.put("/test/:id", cBuku.updateData);

module.exports = router;