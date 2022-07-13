const router = require("express").Router();
const cBuku = require("../controller/buku.js");

router.get("/bukuApi", cBuku.ambilData);
router.post("/bukuApi", cBuku.createData);
router.delete("/bukuApi/:id", cBuku.dellData); //apabila memakai params tambah (/ dblkgnya)
router.put("/bukuApi/:id", cBuku.updateData);

module.exports = router;